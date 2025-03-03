import express, { Request, Response } from 'express';
const cors = require('cors');
import researcherRoutes from './routes/researcherRoutes';
import assistantRoutes from './routes/assistantRoutes';
import postRoutes from './routes/postRoutes';
import applicationRoutes from './routes/applicationRoutes';
import searchRoutes from './routes/searchRoutes';
import adminRoutes from './routes/adminRoutes'; 
import { isAdminMiddleware } from './routes/middleware'; 

const app = express();
const port = process.env.PORT || 3000;

// ✅ Secure CORS settings
app.use(cors({
  origin: ['https://research-finder-1000.web.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// ✅ Middleware to parse JSON bodies
app.use(express.json());

// ✅ Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('🔥 Research Finder API is running!');
});

// ✅ Route Handlers
app.use('/researchers', researcherRoutes);
app.use('/assistants', assistantRoutes);
app.use('/posts', postRoutes);
app.use('/search', searchRoutes);
app.use('/applications', applicationRoutes);

// ✅ Admin Routes (Protected)
app.use('/admin', isAdminMiddleware, adminRoutes);

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});

export default app;
