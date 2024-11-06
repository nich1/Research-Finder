import express, { Request, Response } from 'express';
import admin from 'firebase-admin'; // Import Firebase Admin SDK
import bcrypt from 'bcrypt';


const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize Firebase Admin SDK using environment variables
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: (process.env.FIREBASE_PRIVATE_KEY as string), // Handle new line character
  }),
  databaseURL: 'https://research-finder-1000.firebaseio.com',
});

// Firestore database instance
const db = admin.firestore();

enum WorkType {
  Remote = 'remote',
  Online = 'online',
  Hybrid = 'hybrid',
}


// Define types for posts and researchers
interface Post {
  researcherID: string;
  researcherName: string;
  title: string;
  body: string;
  organization: string;
  compensation: string;
  approvalMessage: string;
  workType: WorkType;
  approvedUsers: string[];
  expirationDate: admin.firestore.Timestamp;
  createdAt: admin.firestore.FieldValue;
}

interface Researcher {
  firstName: string;
  lastName: string;
  age: number;
  sex: string;
  bio: string;
  email: string;
  password: string;
  posts: string[]; // List of post IDs
  researcherId: string;
}

// Route to create a new researcher
app.post('/reacher', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, sex, age, bio, email, password } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !sex || !bio || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a new researcher document with an auto-generated ID
    const researcherRef = db.collection('researchers').doc();
    const researcherId = researcherRef.id;

    // Create a new researcher object
    const newResearcher: Researcher = {
      firstName,
      lastName,
      age,
      sex,
      bio,
      email,
      password: hashedPassword,
      posts: [], // Initialize posts as an empty array if not provided
      researcherId
    };

    // Save the researcher to Firestore
    await researcherRef.set(newResearcher);

    res.status(201).json({ message: 'Researcher created successfully', researcherId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create researcher' });
  }
});

// GET request to fetch all posts
app.get('/posts', async (req: Request, res: Response) => {
  try {
    const postsCollection = db.collection('posts');
    const snapshot = await postsCollection.get();
    
    // Map over the documents and extract data
    const posts = snapshot.docs.map(doc => ({
      id: doc.id, // Include the document ID
      ...doc.data() // Spread the document data
    }));

    res.json(posts); // Return the posts as an array in JSON format
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// POST route for adding research data
app.post('/posts', async (req: Request, res: Response) => {
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
    const researcherRef = db.collection('researchers').doc(researcherID);
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

// Define types for incoming request bodies
interface AuthRequestBody {
  email: string;
  password: string;
}

// Registration route
app.post('/register', async (req: Request<{}, {}, AuthRequestBody>, res: Response) => {
  const { email, password } = req.body;

  try {
    // Check if the user already exists
    await admin.auth().getUserByEmail(email);
    return res.status(400).json({ error: 'Account already exists.' });
  } catch (error: any) {
    if (error.code !== 'auth/user-not-found') {
      return res.status(500).json({ error: error.message });
    }
  }

  try {
    // Create a new user
    const user = await admin.auth().createUser({ email, password });
    res.status(201).json({ message: 'Account created successfully', user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Sign-in route
app.post('/login', async (req: Request<{}, {}, AuthRequestBody>, res: Response) => {
  const { email, password } = req.body;

  try {
    // Verify the email exists (password verification to be done client-side)
    await admin.auth().getUserByEmail(email);
    res.status(200).json({ message: 'Login successful' });
  } catch (error: any) {
    res.status(404).json({ error: 'No account found with this email.' });
  }
});





// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
