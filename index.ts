// index.ts
import express from 'express';
import firebaseAdmin from './firebase'; // Import firebase configuration
import researcherRoutes from './routes/researcherRoutes';
import postRoutes from './routes/postRoutes';
import accountRoutes from './routes/accountRoutes';
import searchRoutes from './routes/searchRoutes';


const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize Firebase (firebase.ts already does this)

// Use route files
app.use('/researchers', researcherRoutes);
app.use('/posts', postRoutes);
app.use('/accounts', accountRoutes);
app.use('/search', searchRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
