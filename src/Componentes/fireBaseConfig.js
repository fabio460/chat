import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyA5KvHey5SPNHLCeZ2HFThniYm9bYLg6uk",
        authDomain: "chat-teste-ed7ce.firebaseapp.com",
        projectId: "chat-teste-ed7ce",
        storageBucket: "chat-teste-ed7ce.appspot.com",
        messagingSenderId: "461605538492",
        appId: "1:461605538492:web:d822d29e60da5d9ab99eb9",
        measurementId: "G-N1STMB8FWS"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();


// import { initializeApp } from 'firebase/app';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   //...
// };

// const app = initializeApp(firebaseConfig);