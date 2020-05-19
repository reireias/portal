const admin = require('firebase-admin')
const consola = require('consola')

const debugHandler = require('./handler/debug')

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: process.env.DATABASE_URL,
})

const firestore = admin.firestore()

consola.info('watch messages')
const now = new Date()
firestore
  .collection('messages')
  .where('createdAt', '>', now)
  .orderBy('createdAt', 'desc')
  .limit(1)
  .onSnapshot((snapshot) => {
    if (snapshot.size > 0) {
      snapshot.forEach((doc) => {
        const data = doc.data()
        switch (data.type) {
          default:
            debugHandler(data)
        }
      })
    }
  })
