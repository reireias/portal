const test = require('firebase-functions-test')()

test.mockConfig({
  message: {
    token: 'hogehoge',
  },
})

jest.mock('firebase-admin', () => {
  const firestore = jest.fn(() => ({
    collection: jest.fn(() => ({
      add: jest.fn(),
    })),
  }))
  firestore.Timestamp = {
    now: jest.fn(() => 'dummy'),
  }
  return {
    initializeApp: jest.fn(),
    firestore,
  }
})
const targets = require('../index.js')

describe('GET', () => {
  it('should be 405 error', (done) => {
    const req = {
      method: 'GET',
    }
    const res = {
      status(code) {
        expect(code).toBe(405)
        return this
      },
      send(message) {
        expect(message).toBe('Method Not Allowed')
        done()
      },
    }
    targets.postMessage(req, res)
  })
})

describe('POST', () => {
  describe('invalid token', () => {
    it('should be return Access Denied', (done) => {
      const req = {
        method: 'POST',
        body: {
          token: 'invalid',
        },
      }
      const res = {
        status(code) {
          expect(code).toBe(403)
          return this
        },
        send(message) {
          expect(message).toBe('Access Denied')
          done()
        },
      }
      targets.postMessage(req, res)
    })
  })

  describe('invalid body', () => {
    it('should be return Bad Request', (done) => {
      const req = {
        method: 'POST',
        body: {
          token: 'hogehoge',
          hoge: 'fuga',
        },
      }
      const res = {
        status(code) {
          expect(code).toBe(400)
          return this
        },
        send(message) {
          expect(message).toBe('Bad Request')
          done()
        },
      }
      targets.postMessage(req, res)
    })
  })

  describe('valid token', () => {
    it('should be return ok', (done) => {
      const req = {
        method: 'POST',
        body: {
          token: 'hogehoge',
          text: 'hoge',
          client: 'test',
        },
      }
      const res = {
        send(message) {
          expect(message).toBe('ok')
          done()
        },
      }
      targets.postMessage(req, res)
    })
  })
})
