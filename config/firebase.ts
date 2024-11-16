import admin from 'firebase-admin';

// Initialize Firebase Admin SDK using environment variables directly
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'), // Ensure newlines are handled correctly if needed
  }),
  databaseURL: 'https://research-finder-1000.firebaseio.com',
});

export const db = admin.firestore();
export {admin};
