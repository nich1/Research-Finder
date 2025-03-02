import { db } from '../config/firebase.js';

// Middleware to check if the user is an admin
export const isAdmin = async (req, res, next) => {
    try {
        const userId = req.user?.uid; // Get user ID from request

        if (!userId) {
            return res.status(401).json({ error: "Unauthorized - No user ID found" });
        }

        const userRef = db.collection("researchers").doc(userId);
        const userDoc = await userRef.get();

        if (!userDoc.exists || !userDoc.data().isAdmin) {
            return res.status(403).json({ error: "Forbidden - Admin access required" });
        }

        next(); // ✅ User is an admin, continue to route
    } catch (error) {
        res.status(500).json({ error: "Server error verifying admin access" });
    }
};
