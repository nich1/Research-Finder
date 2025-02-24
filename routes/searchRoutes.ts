import express, { Request, Response } from 'express';
import { db } from '../config/firebase';
import { Post, WorkType } from '../models/interfaces';


const router = express.Router();

// Route to search for posts by title, organization, or keywords in body
router.get('/search/posts', async (req: Request, res: Response) => {
  const searchString = req.query.q as string | undefined; // Allow undefined

  try {
    const postsRef = db.collection('posts');
    const snapshot = await postsRef.get();

    // Convert Firestore snapshot to an array of posts
    const posts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    // If a search string is provided, filter the posts
    const filteredPosts = searchString
      ? posts.filter(post =>
          (post.title?.toLowerCase() || '').includes(searchString.toLowerCase()) ||
          (post.organization?.toLowerCase() || '').includes(searchString.toLowerCase()) ||
          (post.body?.toLowerCase() || '').includes(searchString.toLowerCase()) ||
          (post.workType?.toLowerCase() || '').includes(searchString.toLowerCase())
        )
      : posts; // Return all posts if no search string

    res.status(200).json(filteredPosts);
  } catch (error) {
    console.error('Error fetching/searching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

export default router;
