import express, { Request, Response } from 'express';
import { admin, db } from '../config/firebase';

const router = express.Router();

// GET request to fetch all posts (changed from '/posts' to '/')
router.get('/', async (req: Request, res: Response) => {
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
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  let expirationTimestamp: admin.firestore.Timestamp;
  try {
    expirationTimestamp = admin.firestore.Timestamp.fromDate(new Date(expirationDate));
  } catch (error) {
    return res.status(400).json({ error: 'Invalid expirationDate format. It must be a valid ISO string.' });
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
      expirationDate: expirationTimestamp,
      createdAt: admin.firestore.Timestamp.now(),
      approvedUsers: [],
    };

    console.log('Saving research data:', researchData);

    const docRef = db.collection('posts').doc();
    await docRef.set(researchData);

    await researcherRef.update({
      posts: admin.firestore.FieldValue.arrayUnion(docRef.id),
    });

    res.status(201).json({ message: 'Research data added successfully', data: researchData, id: docRef.id });
  } catch (error) {
    console.error('Error saving research data to Firestore');
    res.status(500).send('Error saving research data');
  }
});

export default router;