import express, { Request, Response } from 'express';
import { admin, db } from '../config/firebase';
import { Application, Status } from '../models/interfaces';
import { App } from 'firebase-admin/app';


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

    const newApplication : Application = {
        postID,
        assistantID,
        message,
        status: Status.Undecided,
        submittedAt: admin.firestore.FieldValue.serverTimestamp()
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
