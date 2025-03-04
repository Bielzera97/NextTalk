// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa2xwCICqc_JUMEJXhYpZ6-S5wHIyOjXE",
  authDomain: "next-talk-cd9ff.firebaseapp.com",
  projectId: "next-talk-cd9ff",
  storageBucket: "next-talk-cd9ff.firebasestorage.app",
  messagingSenderId: "90396334254",
  appId: "1:90396334254:web:eaf163b7d1be08a0e2f53f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// database config

export const db = getFirestore(app)