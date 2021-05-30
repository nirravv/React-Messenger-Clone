import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyAsJa2A_T0vbROk_-w_8PkkaaDCkkUtzgI",
  authDomain: "messenger-clone-ba23e.firebaseapp.com",
  projectId: "messenger-clone-ba23e",
  storageBucket: "messenger-clone-ba23e.appspot.com",
  messagingSenderId: "323593337855",
  appId: "1:323593337855:web:e00c4fbfbd69438ca5c5ca",
  measurementId: "G-7YYBYN4KB6",
});

const db = firebaseApp.firestore();

export default db;
