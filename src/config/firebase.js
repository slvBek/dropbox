import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import 'firebase/compat/auth'

const fbConfig = {
  apiKey: "AIzaSyD_7NSxYZCjRYQW5k1XGwqdCCemAXylwuw",
  authDomain: "dropbox-3c6ac.firebaseapp.com",
  projectId: "dropbox-3c6ac",
  storageBucket: "dropbox-3c6ac.appspot.com",
  messagingSenderId: "322287900271",
  appId: "1:322287900271:web:3c9ce20a1404127dc51f9a",
  measurementId: "G-4TMPF302M6"
};

firebase.initializeApp(fbConfig)
var db = firebase.firestore()
const storage  = firebase.storage()
// const auth = firebase.auth()


const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}
export { firebase, db, storage }