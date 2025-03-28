import express, { Request, Response } from "express";
import cors from "cors";
import researcherRoutes from "./routes/researcherRoutes";
import assistantRoutes from "./routes/assistantRoutes";
import postRoutes from "./routes/postRoutes";
import applicationRoutes from "./routes/applicationRoutes";
import searchRoutes from "./routes/searchRoutes";


const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(
  cors({
    origin: ["https://research-finder-1000.web.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware to parse JSON bodies
app.use(express.json());

// Initial URL
app.get("/", (req: Request, res: Response) => {
  res.send("Things are working :)");
});

// Use route files with proper prefixes
app.use("/researchers", researcherRoutes);
app.use("/assistants", assistantRoutes);
app.use("/posts", postRoutes);
app.use("/search", searchRoutes);
app.use("/applications", applicationRoutes);

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});

export default app;