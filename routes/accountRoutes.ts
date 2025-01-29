import express, { Request, Response } from 'express';
import { db } from '../config/firebase';
import bcrypt from 'bcrypt';

const router = express.Router();

// Route to create a new assistant
router.post('/assistant', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, sex, workType, age, bio, email, password } = req.body;

    if (!firstName || !lastName || !sex || !bio || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if email is already in use
    const existingAssistant = await db.collection('assistants').where('email', '==', email).get();
    if (!existingAssistant.empty) {
      return res.status(400).json({ error: 'Email is already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const assistantRef = db.collection('assistants').doc();
    const assistantId = assistantRef.id;

    const newAssistant = {
      firstName,
      lastName,
      age,
      sex,
      bio,
      email,
      workType,
      password: hashedPassword,
    };

    await assistantRef.set(newAssistant);

    res.status(201).json({ message: 'Assistant created successfully', assistantId });
  } catch (error) {
    console.error('Error creating assistant:', error);
    res.status(500).json({ error: 'Failed to create assistant' });
  }
});

// Route to handle authentication (register/sign in) for assistants
router.post('/assistant/auth', async (req: Request, res: Response) => {
  const { email, provider, signInDate, userID } = req.body;
  if (!email || !provider || !signInDate || !userID) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    const accountData = {
      email,
      provider,
      signInDate,
      lastLoggedIn: new Date().toISOString(),
    };

    const docRef = db.collection('assistants').doc(userID);
    await docRef.set(accountData, { merge: true });

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

// Route to create a new researcher
router.post('/researcher', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, sex, age, bio, email, password } = req.body;

    if (!firstName || !lastName || !sex || !bio || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if email is already in use
    const existingResearcher = await db.collection('researchers').where('email', '==', email).get();
    if (!existingResearcher.empty) {
      return res.status(400).json({ error: 'Email is already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const researcherRef = db.collection('researchers').doc();
    const researcherId = researcherRef.id;

    const newResearcher = {
      firstName,
      lastName,
      age,
      sex,
      bio,
      email,
      password: hashedPassword,
      posts: [],
    };

    await researcherRef.set(newResearcher);

    res.status(201).json({ message: 'Researcher created successfully', researcherId });
  } catch (error) {
    console.error('Error creating researcher:', error);
    res.status(500).json({ error: 'Failed to create researcher' });
  }
});

// Route to handle authentication (register/sign in) for researchers
router.post('/researcher/auth', async (req: Request, res: Response) => {
  const { email, provider, signInDate, userID } = req.body;
  if (!email || !provider || !signInDate || !userID) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    const accountData = {
      email,
      provider,
      signInDate,
      lastLoggedIn: new Date().toISOString(),
    };

    const docRef = db.collection('researchers').doc(userID);
    await docRef.set(accountData, { merge: true });

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
