import express from "express";
import { isAdmin } from "./middleware.js";
import { db } from "../config/firebase.js";

const router = express.Router();

// 🔹 Example: Get all users (Admins only)
router.get("/users", isAdmin, async (req, res) => {
    try {
        const usersSnapshot = await db.collection("researchers").get();
        const users = usersSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

// 🔹 Example: Delete a user (Admins only)
router.delete("/users/:id", isAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        await db.collection("researchers").doc(id).delete();
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete user" });
    }
});

export default router;
