// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEcFXyuq9vA-BzDXwU9wwr0XZgs085Eco",
  authDomain: "bloom-89e6b.firebaseapp.com",
  projectId: "bloom-89e6b",
  storageBucket: "bloom-89e6b.appspot.com",
  messagingSenderId: "1038739025062",
  appId: "1:1038739025062:web:70de2d3ba54f447d86d867"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);