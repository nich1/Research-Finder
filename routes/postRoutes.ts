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
  const {
    title,
    body,
    organization,
    compensation,
    workType,
    approvalMessage,
    expirationDate,
    approvedUsers = []
  } = req.body;

  if (!workType || !title || !body || !organization || !compensation || !approvalMessage ) {
    return res.status(400).json({ message: 'Missing required fields or approvedUsers is not an array.' });
  }

  try {
    const researcherRef = db.collection('researchers').doc(researcherID);
    const researcherDoc = await researcherRef.get();

    if (!researcherDoc.exists) {
      return res.status(404).json({ message: 'Researcher ID not found.' });
    }

    const researchData: Post = {
      researcherID,
      researcherName: `${researcherDoc.data()?.firstName} ${researcherDoc.data()?.lastName}`,
      title,
      body,
      organization,
      compensation,
      approvalMessage,
      workType,
      approvedUsers,
      expirationDate: admin.firestore.Timestamp.fromDate(new Date(expirationDate)),
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };
    console.log(researchData.researcherName);
    console.log(researchData.createdAt);
    console.log(researchData.expirationDate);


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
