import firebase from "firebase/app";
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBW12uEvXeWF0kR6cKUt8X-0iijmpdHoVU",
    authDomain: "mynotes-c123f.firebaseapp.com",
    databaseURL: "https://mynotes-c123f-default-rtdb.firebaseio.com",
    projectId: "mynotes-c123f",
    storageBucket: "mynotes-c123f.appspot.com",
    messagingSenderId: "154031913284",
    appId: "1:154031913284:web:7a3d98314ababdffa77f11"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);