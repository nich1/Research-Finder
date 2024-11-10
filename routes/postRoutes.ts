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

router.post('/posts', async (req: Request, res: Response) => {
  const {
    researcherID,
    researcherName,
    title,
    body,
    organization,
    compensation,
    workType,
    approvalMessage,
    expirationDate,
    approvedUsers
  } = req.body;

  // Validate the required fields
  if (!workType || !researcherID || !researcherName || !title || !body || !organization || !compensation || !approvalMessage || !Array.isArray(approvedUsers)) {
    return res.status(400).json({ message: 'Missing required fields or approvedUsers is not an array.' });
  }

  try {
    // Verify if researcherID exists in the 'researchers' collection
    const researcherRef = db.collection('researchers').doc(researcherID);
    const researcherDoc = await researcherRef.get();

    if (!researcherDoc.exists) {
      return res.status(404).json({ message: 'Researcher ID not found in the researchers collection.' });
    }

    // Prepare the data object
    const researchData = {
      researcherID,
      researcherName,
      title,
      body,
      organization,
      compensation,
      approvalMessage,
      workType,
      approvedUsers,
      expirationDate: admin.firestore.Timestamp.fromDate(new Date(expirationDate)), // Convert to Firestore Timestamp
      createdAt: admin.firestore.FieldValue.serverTimestamp(), // Optional: add a timestamp
    };

    // Store the data in Firestore
    const docRef = db.collection('posts').doc(); // Creates a new document
    await docRef.set(researchData); // Store the request body in the new document
    console.log('Research data saved to Firestore');

    // Add the post reference to the researcher's posts array
    await researcherRef.update({
      posts: admin.firestore.FieldValue.arrayUnion(docRef.id),
    });

    // Respond back to the user
    res.status(201).json({
      message: 'Research data added successfully',
      data: researchData,
      id: docRef.id // Return the unique document ID
    });
  } catch (error) {
    console.error('Error saving research data to Firestore:', error);
    res.status(500).send('Error saving research data');
  }
});

export default router;
