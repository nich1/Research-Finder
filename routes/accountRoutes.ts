import express, { Request, Response } from 'express';
import { admin, db } from '../config/firebase';

const router = express.Router();

// POST route for registering a new account
router.post('/register', async (req: Request, res: Response) => {
  const { userEmail, provider, creationDate, userID } = req.body;

  if (!userEmail || !provider || !creationDate || !userID) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    const accountData = {
      userEmail,
      provider,
      creationDate,
      userID,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    // Use userID as document ID to avoid duplicate accounts
    const docRef = db.collection('accounts').doc(userID);
    await docRef.set(accountData, { merge: true }); // Merge to avoid overwriting existing data

    res.status(201).json({
      message: 'Account registered successfully.',
      id: docRef.id,
      data: accountData,
    });
  } catch (error) {
    console.error('Error registering account:', error);
    res.status(500).json({ message: 'Error registering account', error });
  }
});

// POST route for sign in
router.post('/signin', async (req: Request, res: Response) => {
  const { userEmail, provider, signInDate, userID } = req.body;

  if (!userEmail || !provider || !signInDate || !userID) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    const accountData = {
      userEmail,
      provider,
      signInDate,
      lastLoggedIn: admin.firestore.FieldValue.serverTimestamp(),
    };

    // Update the account's last login time
    const docRef = db.collection('accounts').doc(userID);
    await docRef.set(accountData, { merge: true }); // Merge updates instead of overwriting

    res.status(200).json({
      message: 'Sign-in data saved successfully.',
      id: docRef.id,
      data: accountData,
    });
  } catch (error) {
    console.error('Error saving account data:', error);
    res.status(500).json({ message: 'Error saving account data', error });
  }
});

export default router;
