import firebase from "firebase";
// import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAQCjETJYeMFF5bwaGRIr_45cMkbwct4Oc",
  authDomain: "auth-geo.firebaseapp.com",
  databaseURL: "https://auth-geo.firebaseio.com",
  projectId: "auth-geo",
  storageBucket: "auth-geo.appspot.com",
  messagingSenderId: "278792793129"
};
const firebaseApp = firebase.initializeApp(config);
export default firebaseApp.firestore();
