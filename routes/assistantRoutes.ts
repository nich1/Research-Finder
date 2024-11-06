import express, { Request, Response } from 'express';
import { db } from '../config/firebase';
import bcrypt from 'bcrypt';
import { Assistant, WorkType } from '../models/interfaces';

const router = express.Router();

// Route to create a new assistant
router.post('/assistant', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, sex, workType, age, bio, email, password } = req.body;

    if (!firstName || !lastName || !sex || !bio || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate workType
    if (!Object.values(WorkType).includes(workType)) {
      return res.status(500).json({ error: 'Invalid workType' });
    }

    // Check if email is already in use
    const existingAssistant = await db.collection('assistants').where('email', '==', email).get();
    if (!existingAssistant.empty) {
      return res.status(400).json({ error: 'Email is already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const assistantRef = db.collection('assistants').doc();
    const assistantId = assistantRef.id;

    const newAssistant: Assistant = {
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
    console.error(error);
    res.status(500).json({ error: 'Failed to create assistant' });
  }
});

// DELETE route to delete a assistant by ID
router.delete('/assistant/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const assistantRef = db.collection('assistants').doc(id);
    const assistantDoc = await assistantRef.get();

    if (!assistantDoc.exists) {
      return res.status(404).json({ error: 'assistant not found' });
    }

    await assistantRef.delete();

    res.status(200).json({ message: 'assistant deleted successfully' });
  } catch (error) {
    console.error('Error deleting assistant:', error);
    res.status(500).json({ error: 'Failed to delete assistant' });
  }
});

export default router;
