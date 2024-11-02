// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlfTTigRUJeEP34LH-3PqlKP0uvyDhVY4",
  authDomain: "learning-firebase-26b79.firebaseapp.com",
  projectId: "learning-firebase-26b79",
  storageBucket: "learning-firebase-26b79.appspot.com",
  messagingSenderId: "25681928773",
  appId: "1:25681928773:web:412c1d3a3b3462a7def92c",
  measurementId: "G-587BD71QK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);