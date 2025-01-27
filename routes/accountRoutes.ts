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
      isAdmin: false, // Default role is not admin
      role: null, // Default role is undefined
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

    const updatedDoc = await docRef.get();

    res.status(200).json({
      message: 'Sign-in data saved successfully.',
      id: docRef.id,
      data: updatedDoc.data(),
    });
  } catch (error) {
    console.error('Error saving account data:', error);
    res.status(500).json({ message: 'Error saving account data', error });
  }
});

// POST route to grant or revoke admin access
router.post('/admin/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { isAdmin } = req.body;

  if (typeof isAdmin !== 'boolean') {
    return res.status(400).json({ error: 'isAdmin must be a boolean value' });
  }

  try {
    // Reference to the account document
    const accountRef = db.collection('accounts').doc(id);
    const accountDoc = await accountRef.get();

    if (!accountDoc.exists) {
      return res.status(404).json({ error: 'Account not found' });
    }

    // Update the isAdmin field
    await accountRef.update({ isAdmin });

    res.status(200).json({
      message: `Admin access ${isAdmin ? 'granted' : 'revoked'} successfully.`,
    });
  } catch (error) {
    console.error('Error updating admin access:', error);
    res.status(500).json({ error: 'Failed to update admin access' });
  }
});

// GET route to fetch account details by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const accountRef = db.collection('accounts').doc(id);
    const accountDoc = await accountRef.get();

    if (!accountDoc.exists) {
      return res.status(404).json({ error: 'Account not found' });
    }

    res.status(200).json(accountDoc.data());
  } catch (error) {
    console.error('Error fetching account data:', error);
    res.status(500).json({ error: 'Failed to fetch account data' });
  }
});

export default router;
