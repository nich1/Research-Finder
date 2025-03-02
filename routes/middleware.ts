import { Request, Response, NextFunction } from "express";
import { db } from "../config/firebase";

// Extend Express Request to include user object
interface AuthenticatedRequest extends Request {
  user?: { uid: string };
}

// Middleware to verify if a user is an admin
export const isAdmin = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.uid;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized - No user ID found" });
    }

    // Fetch user data from Firestore
    const userRef = db.collection("researchers").doc(userId);
    const userDoc = await userRef.get();

    if (!userDoc.exists || !userDoc.data()?.isAdmin) {
      return res.status(403).json({ error: "Forbidden - Admin access required" });
    }

    next(); // ✅ Allow access to admin routes
  } catch (error) {
    res.status(500).json({ error: "Server error verifying admin access" });
  }
};
