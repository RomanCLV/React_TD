//import Rebase from 're-base';
import firebase from 'firebase/app'
import 'firebase/firebase-auth';
import 'firebase/firebase-database';
import 'firebase/firebase-storage';

const config = {
    apiKey: "AIzaSyAEUtnY1DLwLUMWrL4LANL_IXhsNN__AoY",
    authDomain: "mysterynumber-fb675.firebaseapp.com",
    databaseURL: "https://mysterynumber-fb675.firebaseio.com",
    projectId: "mysterynumber-fb675",
    storageBucket: "mysterynumber-fb675.appspot.com",
    messagingSenderId: "1049548806958",
    appId: "1:1049548806958:web:8a8699aedc41335d3678bf",
    measurementId: "G-WWFPSWGB7Q"
};

export default firebase.initializeApp(config);
//const base = Rebase.createClass(firebaseApp.database());

//export {firebaseApp}

//export default base