import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "",
  databaseURL: "https://simple-like-oss.firebaseio.com",
  projectId: "simple-like-oss",
  storageBucket: "simple-like-oss.appspot.com"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;