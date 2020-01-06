const functions = require('firebase-functions')

exports.postMessage = functions
  .region('asia-northeast1')
  .https.onRequest((request, response) => {
    console.log(request)
    response.send('ok')
  })
