import express from 'express';
import Career from '../models/Career.js';
import usersRouter, { auth, isAdmin } from './users.js';

const router = express.Router();

// Get all careers
router.get('/', async (req, res) => {
  try {
    const careers = await Career.find();
    res.json(careers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single career by ID
router.get('/:id', async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);
    if (!career) return res.status(404).json({ error: 'Not found' });
    res.json(career);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new career (admin only)
router.post('/', auth, isAdmin, async (req, res) => {
  try {
    const career = new Career(req.body);
    await career.save();
    res.status(201).json(career);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router; 