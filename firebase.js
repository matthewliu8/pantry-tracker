// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJOYfGVACMvlR8ThAxfOoUB4XLEWhHudw",
  authDomain: "inventory-management-9279a.firebaseapp.com",
  projectId: "inventory-management-9279a",
  storageBucket: "inventory-management-9279a.appspot.com",
  messagingSenderId: "522853318010",
  appId: "1:522853318010:web:db56473467f975ce772ac3",
  measurementId: "G-1QPY09Y10P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}