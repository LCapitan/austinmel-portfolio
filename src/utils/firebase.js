import * as firebase from "firebase";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCjfi-GJJN36ZRfZ5sJKapXrDvg88se6f0",
    authDomain: "austinmel-portfolio.firebaseapp.com",
    databaseURL: "https://austinmel-portfolio.firebaseio.com",
    projectId: "austinmel-portfolio",
    storageBucket: "austinmel-portfolio.appspot.com",
    messagingSenderId: "437907577522"
};

firebase.initializeApp(config);

export default firebase;
