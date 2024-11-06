// routes/researcherRoutes.ts
import express, { Request, Response } from 'express';
import { db } from '../config/firebase';
import bcrypt from 'bcrypt';
import { Researcher } from '../models/interfaces';

const router = express.Router();

// Route to create a new researcher
router.post('/researcher', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, sex, age, bio, email, password } = req.body;

    if (!firstName || !lastName || !sex || !bio || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const researcherRef = db.collection('researchers').doc();
    const researcherId = researcherRef.id;

    const newResearcher: Researcher = {
      firstName,
      lastName,
      age,
      sex,
      bio,
      email,
      password: hashedPassword,
      posts: [],
    };

    await researcherRef.set(newResearcher);

    res.status(201).json({ message: 'Researcher created successfully', researcherId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create researcher' });
  }
});

// DELETE route to delete a researcher by ID
router.delete('/researcher/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const researcherRef = db.collection('researchers').doc(id);
  
