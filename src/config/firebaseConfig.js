import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAxaomls1SydfONWZKYMvLfX2xRy2I0_p4",
    authDomain: "react-firebase-df879.firebaseapp.com",
    databaseURL: "https://react-firebase-df879.firebaseio.com",
    projectId: "react-firebase-df879",
    storageBucket: "react-firebase-df879.appspot.com",
    messagingSenderId: "182476157496",
    appId: "1:182476157496:web:6ecdae51a8f0d0410a2ccd",
    measurementId: "G-V54BVC8ENR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase