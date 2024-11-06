// routes/searchRoutes.ts
import express, { Request, Response } from 'express';
import {admin, db } from '../config/firebase';


const router = express.Router();

// Route to search for posts by title, organization, or keywords in body
router.get('/search/posts', async (req: Request, res: Response) => {
  const searchString = req.query.q as string;

  if (!searchString) {
    return res.status(400).json({ message: 'Search string is required' });
  }

  try {
    const postsRef = db.collection('posts');
    const snapshot = await postsRef.get();

    const filteredPosts = snapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(post =>
        post.title.toLowerCase().includes(searchString.toLowerCase()) ||
        post.organization.toLowerCase().includes(searchString.toLowerCase()) ||
        post.body.toLowerCase().includes(searchString.toLowerCase())
      );

    res.status(200).json(filteredPosts);
  } catch (error) {
    console.error('Error searching posts:', error);
    res.status(500).json({ error: 'Failed to search posts' });
  }
});

export default router;
