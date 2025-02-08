
import express, { Request, Response } from 'express';
import { db } from '../config/firebase';
import bcrypt from 'bcrypt';

const router = express.Router();

// Route to create a new assistant
router.post('/assistant', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, sex, workType, age, bio, email, password } = req.body;

    // Check if all required fields are provided
    if (!firstName || !lastName || !sex || !bio || !email || !password) {
      return res.status(400).json({ error: 'Validation failed: All fields are required' });
    }

    // Check if email is already in use
    const existingAssistant = await db.collection('assistants').where('email', '==', email).get();
    if (!existingAssistant.empty) {
      return res.status(400).json({ error: 'Email already in use: This email is already associated with another assistant.' });
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

// Route to get assistant details by user ID
router.get('/assistant/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const assistantRef = db.collection('assistants').doc(id);
    const assistantDoc = await assistantRef.get();

    if (!assistantDoc.exists) {
      return res.status(404).json({ error: 'Assistant not found' });
    }

    res.status(200).json(assistantDoc.data());
  } catch (error) {
    console.error('Error fetching assistant details:', error);
    res.status(500).json({ error: 'Failed to fetch assistant details' });
  }
});

// DELETE route to delete an assistant by ID
router.delete('/assistant/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const assistantRef = db.collection('assistants').doc(id);
    const assistantDoc = await assistantRef.get();

    if (!assistantDoc.exists) {
      return res.status(404).json({ error: 'Assistant not found' });
    }

    await assistantRef.delete();

    res.status(200).json({ message: 'Assistant deleted successfully' });
  } catch (error) {
    console.error('Error deleting assistant:', error);
    res.status(500).json({ error: 'Failed to delete assistant' });
  }
});

export default router;
