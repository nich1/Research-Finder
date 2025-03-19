import express, { Request, Response, NextFunction } from "express";
import { db } from "../config/firebase";

// Define AuthenticatedRequest type (assuming this comes from middleware)
interface AuthenticatedRequest extends Request {
  user?: { uid: string; isAdmin: boolean }; // Adjust based on your middleware
}

const router = express.Router();

// Type definition for User
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
}

// 🔹 Fetch all users (Admins only)
router.get("/users", async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const usersSnapshot = await db.collection("researchers").get();
    const users: User[] = usersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as User[];

    return res.json(users); // Explicit return to satisfy Express
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch users" });
  }
});

// 🔹 Delete a user (Admins only)
router.delete("/users/:id", async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await db.collection("researchers").doc(id).delete();
    return