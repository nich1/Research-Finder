const express = require('express');
const admin = require('firebase-admin'); // Import Firebase Admin SDK
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize Firebase Admin SDK
try {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Handle escaped newlines in private key
    }),
    databaseURL: 'https://research-finder-1000.firebaseio.com',
  });

  console.log('Firebase Admin initialized successfully');
} catch (error) {
  console.error('Error initializing Firebase Admin:', error);
  process.exit(1); // Exit process if Firebase initialization fails
}

// Firestore database instance
const db = admin.firestore();

// Routes

// GET request (Test Endpoint)
app.get('/', (req, res) => {
  res.send('Hello, Express on Vercel!');
});

// POST route to echo back the request body and store it in Firestore
app.post('/echo', async (req, res) => {
  try {
    const data = req.body;

    // Respond with the received data
    res.json({
      message: 'You sent the following data:',
      data,
    });

    // Save the data to Firestore
    const docRef = db.collection('echoData').doc(); // Creates a new Firestore document
    await docRef.set(data); // Store the received data
    console.log('Data saved to Firestore');
  } catch (error) {
    console.error('Error saving data to Firestore:', error);
    res.status(500).send('Error saving data');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
