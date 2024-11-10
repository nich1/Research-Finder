import express, { Request, Response } from 'express';
import { admin, db } from '../config/firebase';

import { Post, WorkType } from '../models/interfaces';

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
  const { title, body, organization, compensation, workType, approvalMessage, expirationDate } = req.body;

  // Validate required fields
  if (!workType || !title || !body || !organization || !compensation || !approvalMessage || !expirationDate) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    // Fetch researcher details from Firestore
    const researcherRef = db.collection('researchers').doc(researcherID);
    const researcherDoc = await researcherRef.get();

    if (!researcherDoc.exists) {
      return res.status(404).json({ message: 'Researcher ID not found.' });
    }

    // Build the research data object
    const researchData: Post = {
      researcherID,
      researcherName: `${researcherDoc.data()?.firstName} ${researcherDoc.data()?.lastName}`,
      title,
      body,
      organization,
      compensation,
      approvalMessage,
      workType,
      approvedUsers: [],  // Set approvedUsers to an empty array
      expirationDate: admin.firestore.Timestamp.fromDate(new Date(expirationDate)),
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    // Add the post to the posts collection
    const docRef = await db.collection('posts').add(researchData);

    // Update the researcher with the new post ID
    await researcherRef.update({
      posts: admin.firestore.FieldValue.arrayUnion(docRef.id),
    });

    // Send a response with the new post data
    res.status(201).json({ message: 'Research data added successfully', data: researchData, id: docRef.id });
  } catch (error) {
    console.error('Error saving research data to Firestore:', error);
    res.status(500).json({ error: `Error saving research data: ${error.message}` });
  }
});

export default router;
