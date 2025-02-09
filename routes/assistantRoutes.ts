import express, { Request, Response } from 'express';
import { db } from '../config/firebase';
import bcrypt from 'bcrypt';

const router = express.Router();

// Route to create a new assistant
router.post('/assistant', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, sex, workType = 'General', age, bio, email, password, role } = req.body;

    // Ensure the role is explicitly "assistant"
    if (role !== "assistant") {
      return res.status(400).json({ error: 'Invalid role: Only "assistant" accounts can be created here.' });
    }

    // Check if all required fields are provided
    if (!firstName || !lastName || !sex || !bio || !email || !password) {
      return res.status(400).json({ error: 'Validation failed: All fields are required' });
    }

    // Check if email is already in use in both assistants and researchers collections
    const existingAssistant = await db.collection('assistants').where('email', '==', email).get();
    const existingResearcher = await db.collection('researchers').where('email', '==', email).get();

    if (!existingAssistant.empty || !existingResearcher.empty) {
      return res.status(400).json({ error: 'Email already in use: This email is associated with another user.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a reference to the new assistant document
    const assistantRef = db.collection('assistants').doc();
    const assistantId = assistantRef.id;

    // Prepare the new assistant object
    const newAssistant = {
      firstName,
      lastName,
      age,
      sex,
      bio,
      email,
      workType,
      role, // Explicitly store the role
      password: hashedPassword,
    };

    // Save the new assistant to Firestore
    await assistantRef.set(newAssistant);

    // Respond with success message
    res.status(201).json({ message: 'Assistant created successfully', assistantId });
  } catch (error) {
    console.error('Error creating assistant:', error);
    res.status(500).json({ error: 'Internal server error: Failed to create assistant. Please try again later.' });
  }
});

