// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkeSIU32aAxJVW8j-av0vqh0BYwztlBkk",
  authDomain: "login-6fd3d.firebaseapp.com",
  projectId: "login-6fd3d",
  storageBucket: "login-6fd3d.appspot.com",
  messagingSenderId: "867836783945",
  appId: "1:867836783945:web:e089815dc51d1694f37e98"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

export default firebase