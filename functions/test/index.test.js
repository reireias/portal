const test = require('firebase-functions-test')()
const targets = require('../index.js')

test.mockConfig({
  message: {
    token: 'hogehoge'
  }
})

describe('postMessage', () => {
  describe('GET', () => {
    it('should be 405 error', done => {
      const req = {
        method: 'GET'
      }
      const res = {
        status(code) {
          expect(code).toBe(405)
          return this
        },
        send(message) {
          expect(message).toBe('Method Not Allowed')
          done()
        }
      }
      targets.postMessage(req, res)
    })
  })

  describe('POST', () => {
    describe('invalid token', () => {
      it('should be return Access Denied', done => {
        const header = {
          'x-api-token': 'invalid'
        }
        const req = {
          method: 'POST',
          get(key) {
            return header[key]
          }
        }
        const res = {
          status(code) {
            expect(code).toBe(403)
            return this
          },
          send(message) {
            expect(message).toBe('Access Denied')
            done()
          }
        }
        targets.postMessage(req, res)
      })
    })

    describe('valid token', () => {
      it('should be return ok', done => {
        const header = {
          'x-api-token': 'hogehoge'
        }
        const req = {
          method: 'POST',
          get(key) {
            return header[key]
          }
        }
        const res = {
          send(message) {
            expect(message).toBe('ok')
            done()
          }
        }
        targets.postMessage(req, res)
      })
    })
  })
})
