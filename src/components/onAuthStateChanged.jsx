import React, { useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Monitor auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // User is signed in
      } else {
        setUser(null); // User is signed out
      }
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    console.log('User signed out.');
  };

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.email}</h1>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <h1>Please Sign In</h1>
      )}
    </div>
  );
};

export default App;
