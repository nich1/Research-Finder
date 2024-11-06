import express, { Request, Response } from 'express';
import { db } from '../config/firebase';
import { Status } from '../models/interfaces';


const router = express.Router();

// Route to submit an application
router.post('/applications', async (req: Request, res: Response) => {
  try {
    const { assistantId, postId, message } = req.body;

    // Check if assistantId and postId are provided
    if (!assistantId || !postId) {
      return res.status(400).json({ error: 'Assistant ID and Post ID are required' });
    }

    // Validate assistantId
    const assistantRef = db.collection('Assistants').doc(assistantId);
    const assistantDoc = await assistantRef.get();
    if (!assistantDoc.exists) {
      return res.status(400).json({ error: 'Invalid Assistant ID' });
    }

    // Validate postId
    const postRef = db.collection('Posts').doc(postId);
    const postDoc = await postRef.get();
    if (!postDoc.exists) {
      return res.status(400).json({ error: 'Invalid Post ID' });
    }

    // Create a new application document
    const applicationRef = db.collection('Applications').doc();
    const applicationId = applicationRef.id;

    const newApplication = {
      applicationId,
      assistantId,
      postId,
      status: Status.Undecided,
      submittedAt: new Date().toISOString(),
      message: message || "",  // Optional message field
    };

    // Save the new application in the Applications collection
    await applicationRef.set(newApplication);

    res.status(201).json({ message: 'Application submitted successfully', applicationId });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

export default router;
