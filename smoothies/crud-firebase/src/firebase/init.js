import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA4NXabViHm9IDdehLYy6v1aK7wu1FHpaA",
    authDomain: "udemy-ninja-smoothies-5d505.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-5d505.firebaseio.com",
    projectId: "udemy-ninja-smoothies-5d505",
    storageBucket: "udemy-ninja-smoothies-5d505.appspot.com",
    messagingSenderId: "648113059128"
  };
  const firebaseApp = firebase.initializeApp(config);
//   firebaseApp.firestore().settings({ timestampsInSnapshots: true})

  //export firestore database
  export default firebaseApp.firestore()

  //npm install firebase --save