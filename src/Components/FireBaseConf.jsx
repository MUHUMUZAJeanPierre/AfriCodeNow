// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASFdphdnDd-FKA9mQa-YWQvtZKI2gKoB8",
  authDomain: "afritech-b0e3b.firebaseapp.com",
  projectId: "afritech-b0e3b",
  storageBucket: "afritech-b0e3b.appspot.com",
  messagingSenderId: "259807285149",
  appId: "1:259807285149:web:f44c0ddc4ab3a80eb5e974",
  measurementId: "G-FW6QJ88ERP"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);