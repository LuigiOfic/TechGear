// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfxrOhlNaUKK4-6I4eoWuxlDIphPdBZEs",
  authDomain: "testefirebase-dbda0.firebaseapp.com",
  databaseURL: "https://testefirebase-dbda0-default-rtdb.firebaseio.com",
  projectId: "testefirebase-dbda0",
  storageBucket: "testefirebase-dbda0.appspot.com",
  messagingSenderId: "649792876009",
  appId: "1:649792876009:web:2bbd30e04dafaa49c1ef78",
  measurementId: "G-LDNEF9CNCG"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
//const analytics = getAnalytics(app);