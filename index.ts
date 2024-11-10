import express from 'express';
//const cors = require('cors');
import researcherRoutes from './routes/researcherRoutes';
import assistantRoutes from './routes/assistantRoutes';
import postRoutes from './routes/postRoutes';
import applicationRoutes from './routes/applicationRoutes';
import accountRoutes from './routes/accountRoutes';
import searchRoutes from './routes/searchRoutes';

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
/*
app.use(cors({
  origin: ['https://research-finder-1000.web.app/', 'http://localhost:5173'], // Replace with your front-end's domain
  methods: 'GET,POST,PUT,DELETE', // Customize as needed
  credentials: true    // Enable this if you need to include cookies
}));*/

// Middleware to parse JSON bodies
app.use(express.json());

// Initial URL
app.get('/', (req, res) => {
  res.send('Things are working :)');
});

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
