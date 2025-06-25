import express from 'express';
// import Career from '../models/Career.js'; // REMOVE
import { Pool } from 'pg'; // ADD

const router = express.Router();
const pool = new Pool({ connectionString: process.env.SUPABASE_DB_URL }); // ADD

// Get all careers
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM careers');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single career by ID
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM careers WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new career
router.post('/', async (req, res) => {
  try {
    const { title, category, description, salary, growth, demand, duration, skills, icon, color } = req.body;
    const result = await pool.query(
      'INSERT INTO careers (title, category, description, salary, growth, demand, duration, skills, icon, color) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [title, category, description, salary, growth, demand, duration, skills, icon, color]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router; 