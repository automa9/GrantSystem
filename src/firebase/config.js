import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyACc_lxfaVbFlZBJypAGXosnDT4FYVELpU",
    authDomain: "edumy-332115.firebaseapp.com",
    projectId: "edumy-332115",
    storageBucket: "edumy-332115.appspot.com",
    messagingSenderId: "524897633753",
    appId: "1:524897633753:web:eedc7f2c7fb02a574945c8"
  }

  // init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  // timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, projectStorage, timestamp }
