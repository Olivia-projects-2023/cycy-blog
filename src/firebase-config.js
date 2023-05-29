// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwnSuJbC5sTcBTP3ZLxyYqxC3N-ubgZto",
  authDomain: "blogaboutthings-53ef9.firebaseapp.com",
  projectId: "blogaboutthings-53ef9",
  storageBucket: "blogaboutthings-53ef9.appspot.com",
  messagingSenderId: "8182575997",
  appId: "1:8182575997:web:9c51b572266d103e135214",
  measurementId: "G-PM1F77J49J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app); 
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider ();