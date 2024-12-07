import express, { Request, Response } from 'express';
import { admin, db } from '../config/firebase';
import { Application, Status } from '../models/interfaces';
import { App } from 'firebase-admin/app';


const router = express.Router();

// Route to submit an application
router.post('/applications', async (req: Request, res: Response) => {
  try {
    const { assistantId, postId, message } = req.body;

    // Validate request body
    if (!assistantId || !postId || !message) {
      return res.status(400).json({ error: 'Assistant ID, Post ID, and Message are required' });
    }

    // Check if assistantId matches the name of a document in the Assistants collection
    const assistantSnapshot = await db.collection('assistants').doc(assistantId).get();
    if (!assistantSnapshot.exists) {
      return res.status(404).json({ error: 'Invalid Assistant ID' });
    }
    const assistantData = assistantSnapshot.data();

    // Check if postId matches the name of a document in the Posts collection
    const postSnapshot = await db.collection('posts').doc(postId).get();
    if (!postSnapshot.exists) {
      return res.status(404).json({ error: 'Invalid Post ID' });
    }
    const postData = postSnapshot.data();
//--

    const applicationRef = db.collection('applications').doc();
    const applicationId = applicationRef.id;

    const newApplication: Application = {
      assistantId,
      postId,
      applicationStatus: Status.Undecided, 
      message,
      createdAt: admin.firestore.Timestamp.now(),
    };

    await applicationRef.set(newApplication);

    res.status(201).json({ message: 'Application created successfully', applicationId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create application' });
  }


});


export default router;
