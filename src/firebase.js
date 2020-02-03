import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDAp8p3PiCf2oFgz3NP7JzTqgnwM657tKU",
  databaseURL: "https://simple-like-oss.firebaseio.com",
  projectId: "simple-like-oss",
  storageBucket: "simple-like-oss.appspot.com"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;