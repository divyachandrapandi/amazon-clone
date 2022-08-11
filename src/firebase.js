import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzzWqzCZoLV20LsrAeenkhblWr-09IrBY",
  authDomain: "challenge-37115.firebaseapp.com",
  projectId: "challenge-37115",
  storageBucket: "challenge-37115.appspot.com",
  messagingSenderId: "411432159639",
  appId: "1:411432159639:web:dcf1f7282b8b9e6be35cd2",
  measurementId: "G-9C8BYPXCN0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db =firebaseApp.firestore();
const auth=firebase.auth();  

export { db, auth};