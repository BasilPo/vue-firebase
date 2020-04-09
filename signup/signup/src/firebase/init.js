import firebase from "firebase";
import firestore from "firebase/firestore";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAFavdH9LhYZFIjtE0n-j41JxxWIr4hC48",
  authDomain: "signup-17d3d.firebaseapp.com",
  databaseURL: "https://signup-17d3d.firebaseio.com",
  projectId: "signup-17d3d",
  storageBucket: "signup-17d3d.appspot.com",
  messagingSenderId: "9333260472"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
