const functions = require('firebase-functions')
const admin = require('firebase-admin')

const TOKEN_KEY = 'x-api-token'

admin.initializeApp(functions.config().firebase)
const firestore = admin.firestore()

exports.postMessage = functions
  .region('asia-northeast1')
  .https.onRequest(async (request, response) => {
    if (request.method !== 'POST') {
      response.status(405).send('Method Not Allowed')
      return
    }
    if (request.get(TOKEN_KEY) !== functions.config().message.token) {
      response.status(403).send('Access Denied')
      return
    }
    if (!validateMessageBody(request.body)) {
      response.status(400).send('Bad Request')
      return
    }

    const data = {
      text: request.body.text,
      client: request.body.client,
      createdAt: admin.firestore.Timestamp.now()
    }
    await firestore.collection('messages').add(data)
    response.send('ok')
  })

const validateMessageBody = body => {
  return isNonEmptyString(body.text) && isNonEmptyString(body.client)
}

const isNonEmptyString = str => {
  return typeof str === 'string' && str.length > 0
}
