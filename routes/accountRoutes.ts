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

    const docRef = db.collection('accounts').doc();
    await docRef.set(accountData);

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

// Existing Sign In Route
router.post('/signin', async (req: Request, res: Response) => {
  const { userEmail, provider, creationDate, signInDate, userID, expirationDate } = req.body;

  if (!userEmail || !provider || !creationDate || !signInDate || !userID) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    const accountData = {
      userEmail,
      provider,
      creationDate,
      signInDate,
      userID,
      expirationDate: admin.firestore.Timestamp.fromDate(new Date(expirationDate)),
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    const docRef = db.collection('accounts').doc();
    await docRef.set(accountData);

    res.status(201).json({
      message: 'Sign-in data saved successfully.',
      id: docRef.id,
      data: accountData,
    });
  } catch (error) {
    console.error('Error saving account data:', error);
    res.status(500).send('Error saving account data');
  }
});

export default router;
