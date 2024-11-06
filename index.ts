import express from 'express';
import researcherRoutes from './routes/researcherRoutes';
import assistantRoutes from './routes/assistantRoutes';
import postRoutes from './routes/postRoutes';
import applicationRoutes from './routes/applicationRoutes';
import accountRoutes from './routes/accountRoutes';
import searchRoutes from './routes/searchRoutes';


const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize Firebase (firebase.ts already does this)

// Use route files
app.use('', researcherRoutes);
app.use('', assistantRoutes);
app.use('', postRoutes);
app.use('', accountRoutes);
app.use('', searchRoutes);
app.use('', applicationRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
