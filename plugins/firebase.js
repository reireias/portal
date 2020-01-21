import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCCzigFKfpt342St2NOFf4Q_J-Sn20jHts',
  authDomain: 'reireias-portal.firebaseapp.com',
  databaseURL: 'https://reireias-portal.firebaseio.com',
  projectId: 'reireias-portal',
  storageBucket: 'reireias-portal.appspot.com',
  messagingSenderId: '677772683837',
  appId: '1:677772683837:web:eba2226976a57cdaaa5854'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
