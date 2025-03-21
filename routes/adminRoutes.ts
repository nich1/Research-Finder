import express, { Request, Response } from "express";
import { db } from "../config/firebase";

// Define AuthenticatedRequest type
interface AuthenticatedRequest extends Request {
  user?: { uid: string; isAdmin: boolean };
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

// Fetch all users (Admins only)
router.get("/users", async (req: AuthenticatedRequest, res: Response) => {
  try {
    const usersSnapshot = await db.collection("researchers").get();
    const users: User[] = usersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as User[];
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Delete a user (Admins only)
router.delete("/users/:id", async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    await db.collection("researchers").doc(id).delete();
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});

// Approve Research Post (Admins only)
router.post("/approve-post/:postId", async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { postId } = req.params;
    const postRef = db.collection("posts").doc(postId);
    await postRef.update({ approved: true });
    res.json({ message: "Post approved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to approve post" });
  }
});

export default router;