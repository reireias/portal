const functions = require('firebase-functions')

const TOKEN_KEY = 'x-api-token'

exports.postMessage = functions
  .region('asia-northeast1')
  .https.onRequest((request, response) => {
    if (request.method !== 'POST') {
      response.status(405).send('Method Not Allowed')
      return
    }
    if (request.get(TOKEN_KEY) !== functions.config().message.token) {
      response.status(403).send('Access Denied')
      return
    }
    console.log(request)
    response.send('ok')
  })
