// routes/accountRoutes.ts
import express, { Request, Response } from 'express';
import { admin, db } from '../config/firebase';

const router = express.Router();

// POST route for adding an account
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

    res.status(201).json({ message: 'Account data added successfully', data: accountData, id: docRef.id });
  } catch (error) {
    console.error('Error saving account data to Firestore:', error);
    res.status(500).send('Error saving account data');
  }
});

export default router;
