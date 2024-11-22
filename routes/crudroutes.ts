import express from "express";
import admin from "firebase-admin";

// Initialize Firebase Admin SDK
admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(express.json());

// Researcher Routes
const researcherCollection = "researchers";

app.post("/researchers", async (req, res) => {
  try {
    const researcher: Researcher = req.body;
    const newDoc = await db.collection(researcherCollection).add(researcher);
    res.status(201).send({ id: newDoc.id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.put("/researchers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updates: Partial<Researcher> = req.body;
    await db.collection(researcherCollection).doc(id).update(updates);
    res.status(200).send({ message: "Researcher updated successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/researchers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await db.collection(researcherCollection).doc(id).get();
    if (!doc.exists) {
      res.status(404).send({ error: "Researcher not found" });
    } else {
      res.status(200).send(doc.data());
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.delete("/researchers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await db.collection(researcherCollection).doc(id).delete();
    res.status(200).send({ message: "Researcher deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Assistant Routes
const assistantCollection = "assistants";

app.post("/assistants", async (req, res) => {
  try {
    const assistant: Assistant = req.body;
    const newDoc = await db.collection(assistantCollection).add(assistant);
    res.status(201).send({ id: newDoc.id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.put("/assistants/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updates: Partial<Assistant> = req.body;
    await db.collection(assistantCollection).doc(id).update(updates);
    res.status(200).send({ message: "Assistant updated successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/assistants/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await db.collection(assistantCollection).doc(id).get();
    if (!doc.exists) {
      res.status(404).send({ error: "Assistant not found" });
    } else {
      res.status(200).send(doc.data());
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.delete("/assistants/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await db.collection(assistantCollection).doc(id).delete();
    res.status(200).send({ message: "Assistant deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

