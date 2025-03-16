import express, { Request, Response } from "express";
import { db } from "../config/firebase"; // Ensure correct Firestore path
import { isAdmin } from "./middleware"; // Keep for production, remove for testing

const router = express.Router();

// Type definition for User
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
}

// 🚀 Fetch all users (Admins only)
router.get("/users", isAdmin, async (req: Request, res: Response) => {
  try {
    const usersSnapshot = await db.collection("researchers").get();
    const users: User[] = usersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as User[];

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// 🚀 Fetch a single user by ID
router.get("/users/:id", isAdmin, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userDoc = await db.collection("researchers").doc(id).get();

    if (!userDoc.exists) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ id: userDoc.id, ...userDoc.data() });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

// 🚀 Delete a user (Admins only)
router.delete("/users/:id", isAdmin, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userRef = db.collection("researchers").doc(id);

    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      return res.status(404).json({ error: "User not found" });
    }

    await userRef.delete();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
});

// 🚀 Fetch Unapproved Research Posts
router.get("/unapproved-posts", isAdmin, async (req: Request, res: Response) => {
  try {
    const postsSnapshot = await db.collection("posts").where("approved", "==", false).get();
    const posts = postsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching unapproved posts:", error);
    res.status(500).json({ error: "Failed to fetch unapproved posts" });
  }
});

// 🚀 Approve Research Post (Admins only)
router.post("/approve-post/:postId", isAdmin, async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    const postRef = db.collection("posts").doc(postId);

    const postDoc = await postRef.get();
    if (!postDoc.exists) {
      return res.status(404).json({ error: "Post not found" });
    }

    await postRef.update({ approved: true });
    res.status(200).json({ message: "Post approved successfully" });
  } catch (error) {
    console.error("Error approving post:", error);
    res.status(500).json({ error: "Failed to approve post" });
  }
});

// 🚀 Reject (Delete) a Research Post
router.delete("/reject-post/:postId", isAdmin, async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    const postRef = db.collection("posts").doc(postId);

    const postDoc = await postRef.get();
    if (!postDoc.exists) {
      return res.status(404).json({ error: "Post not found" });
    }

    await postRef.delete();
    res.status(200).json({ message: "Post rejected and deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Failed to delete post" });
  }
});

export default router;
