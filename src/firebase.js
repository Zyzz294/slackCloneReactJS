import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDytrlmDaEXW4V-hkl_olNl5qIqVobXdyU",
    authDomain: "slack-clone-76e33.firebaseapp.com",
    projectId: "slack-clone-76e33",
    storageBucket: "slack-clone-76e33.appspot.com",
    messagingSenderId: "573927216604",
    appId: "1:573927216604:web:07bc57ad4dd3ec17dceb19"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, db, provider };