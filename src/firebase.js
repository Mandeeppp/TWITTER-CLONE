// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCG9CJL9nNXN9_8rqP2m2BD13BsE93DBPk",
  authDomain: "twitter-clone-645df.firebaseapp.com",
  databaseURL: "https://twitter-clone-645df-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-645df",
  storageBucket: "twitter-clone-645df.appspot.com",
  messagingSenderId: "975939659161",
  appId: "1:975939659161:web:e9ae2f75ec3c78c8e3df08",
  measurementId: "G-900ESHGRPQ"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;