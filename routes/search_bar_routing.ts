import express, { Request, Response } from 'express';
import admin from 'firebase-admin';

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.applicationDefault(),
    });
}

const db = admin.firestore();
const app = express();

// Define an interface for the Post
interface Post {
    id: string;
    [key: string]: any; // Allow other fields dynamically
}

// Route to get a specific number of posts
app.get('/get-posts', async (req: Request, res: Response) => {
    try {
        // Retrieve the 'limit' query parameter
        const limit: number = parseInt(req.query.limit as string, 10) || 10; // Default to 10 posts if not provided

        // Query Firestore to retrieve posts
        const postsRef = db.collection('posts');
        const snapshot = await postsRef.limit(limit).get();

        if (snapshot.empty) {
            return res.status(200).json({ message: 'No posts found', posts: [] });
        }

        // Map the results to an array
        const posts: Post[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Send the posts in the response
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

// Start the server


export default app;
