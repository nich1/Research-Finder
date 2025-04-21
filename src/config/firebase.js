
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDviHmbNMxNtzvG5ZvZBOqgt2tt2fCxcOU",
  authDomain: "research-finder-1000.firebaseapp.com",
  projectId: "research-finder-1000",
  storageBucket: "research-finder-1000.firebasestorage.app",
  messagingSenderId: "90727380837",
  appId: "1:90727380837:web:7ac4c1b13e26cfecb3538c",
  measurementId: "G-7MKKN551YC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };