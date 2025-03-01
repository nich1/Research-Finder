import React from 'react';
import { auth, googleProvider } from '../config/firebase'; // Ensure this points to your Firebase config
import { signInWithPopup } from 'firebase/auth';

const handleGoogleSignIn = async () => {
  try {
    // 🔹 Sign in with Google
    const userCredential = await signInWithPopup(auth, googleProvider);
    const user = userCredential.user;

    // 🔹 Ask for role selection every time
    const selectedRole = window.confirm("Are you a Researcher? Click OK for Researcher, Cancel for Assistant")
      ? "researcher"
      : "assistant";

    // 🔹 Determine Firestore collection
    const collectionName = selectedRole === "researcher" ? "researchers" : "assistants";
    const userRef = doc(db, collectionName, user.uid);
    const userDoc = await getDoc(userRef);

    // 🔹 Extract first and last name
    const nameParts = user.displayName ? user.displayName.split(" ") : ["", ""];
    const firstName = nameParts[0] || "";
    const lastName = nameParts[1] || "";

    if (userDoc.exists()) {
      // 🔹 If the user exists, update role if it has changed
      const existingData = userDoc.data();
      if (existingData.role !== selectedRole) {
        await setDoc(userRef, { role: selectedRole }, { merge: true });
      }
    } else {
      // 🔹 If new user, create entry in Firestore
      await setDoc(userRef, {
        firstName,
        lastName,
        email: user.email,
        role: selectedRole,
        age: "",  // User can update later
        gender: "",
        userID: user.uid,
      });
    }

    setMessage(`Signed in with Google as a ${selectedRole}! Redirecting...`);
    
    // 🔹 Redirect to dashboard based on role
    setTimeout(() => navigate(selectedRole === "researcher" ? "/researcher-dashboard" : "/assistant-dashboard"), 3000);
  } catch (error) {
    setMessage(`Google Sign-In Error: ${error.message}`);
  }
};



export default GoogleAuth;
