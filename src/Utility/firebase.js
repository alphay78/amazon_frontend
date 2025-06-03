// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";;
import "firebase/compat/firestore";
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDG4oyHtm9doTUUKYYr8yjQBCM6AFPHgUs",
  authDomain: "clone-7354a.firebaseapp.com",
  projectId: "clone-7354a",
  storageBucket: "clone-7354a.firebasestorage.app",
  messagingSenderId: "155568903859",
  appId: "1:155568903859:web:709163228e44f43c4382c6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore();

