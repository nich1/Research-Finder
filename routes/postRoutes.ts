import express, { Request, Response } from 'express';
import { admin, db } from '../config/firebase';
import { WorkType } from '../models/interfaces';
import { Timestamp } from "firebase/firestore";


const router = express.Router();

// GET request to fetch all posts
router.get('/posts', async (req: Request, res: Response) => {
  try {
    const postsCollection = db.collection('posts');
    const snapshot = await postsCollection.get();
    
    const posts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// POST route for adding research data
router.post('/researcher/:researcherID/posts', async (req: Request, res: Response) => {
  const { researcherID } = req.params;
  const {
    title,
    body,
    organization,
    compensation,
    workType,
    approvalMessage,
    expirationDate,
  } = req.body;

  if (!workType || !title || !body || !organization || !compensation || !approvalMessage || !expirationDate) {
    return res.status(400).json({ message: 'Missing required fields or approvedUsers is not an array.' });
  }

  // Ensure expirationDate is a Firestore Timestamp
  if (!(expirationDate instanceof Timestamp)) {
    return res.status(400).json({ error: 'expirationDate must be a Firestore Timestamp' });
  }

  try {
    const researcherRef = db.collection('researchers').doc(researcherID);
    const researcherDoc = await researcherRef.get();

    if (!researcherDoc.exists) {
      return res.status(404).json({ message: 'Researcher ID not found.' });
    }

    const researchData = {
      title,
      body, 
      organization,
      compensation,
      workType,
      approvalMessage,
      expirationDate,
      createdAt: Timestamp.now(),
      approvedUsers: [],
    };

    const docRef = db.collection('posts').doc();
    await docRef.set(researchData);

    await researcherRef.update({
      posts: admin.firestore.FieldValue.arrayUnion(docRef.id),
    });

    res.status(201).json({ message: 'Research data added successfully', data: researchData, id: docRef.id });
  } catch (error) {
    console.error('Error saving research data to Firestore:', error);
    res.status(500).send('Error saving research data');
  }
});

export default router;
