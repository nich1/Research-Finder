import express, { Request, Response } from 'express';
import { db } from '../config/firebase';
import { Assistant, WorkType, Researcher } from '../models/interfaces';

const router = express.Router();

router.get('/search/messages', async (req: Request, res: Response) => {
  try {
    // Extract query parameters from the request
    const { sender, recipient, content } = req.query;

    // Reference to the Firestore 'messages' collection
    let query = db.collection('messages') as FirebaseFirestore.Query;

    // Add filters based on the query parameters
    if (sender) {
      query = query.where('sender', '==', sender);
    }
    if (recipient) {
      query = query.where('recipient', '==', recipient);
    }
    if (content) {
      // Assuming you want to perform a case-insensitive search on the message content
      query = query.where('content', '>=', content).where('content', '<=', content + '\uf8ff');
    }

    // Execute the query
    const snapshot = await query.get();

    // Handle empty results
    if (snapshot.empty) {
      return res.status(404).json({ message: 'No messages found matching the criteria.' });
    }

    // Map Firestore documents to an array of messages
    const messages = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(`Messages found: ${messages.length}`);
    
    // Send the response
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'An error occurred while fetching messages.', error: error.message });
  }
});

export default router;
