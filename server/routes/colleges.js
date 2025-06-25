import express from 'express';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();
const pool = new Pool({ connectionString: process.env.SUPABASE_DB_URL });

// Get all colleges
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM colleges');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch colleges' });
  }
});

// JWT auth middleware for colleges
function collegeAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.college = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// Get current college profile
router.get('/me', collegeAuth, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM colleges WHERE id = $1', [req.college.collegeId]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'College not found' });
    const college = result.rows[0];
    res.json(college);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch college profile' });
  }
});

// Get a single college by ID
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM colleges WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Not found' });
    const college = result.rows[0];
    res.json(college);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch college' });
  }
});

// Create a new college
router.post('/', async (req, res) => {
  try {
    const { name, country, description } = req.body;
    const result = await pool.query('INSERT INTO colleges (name, country, description) VALUES ($1, $2, $3) RETURNING *', [name, country, description]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

// Update a college
router.put('/:id', async (req, res) => {
  try {
    const { name, country, description, students, location, type, tuition, acceptanceRate, established, website, phone, topPrograms, testimonials } = req.body;
    const result = await pool.query('UPDATE colleges SET name = $1, country = $2, description = $3, students = $4, location = $5, type = $6, tuition = $7, acceptanceRate = $8, established = $9, website = $10, phone = $11, topPrograms = $12, testimonials = $13 WHERE id = $14 RETURNING *', [name, country, description, students, location, type, tuition, acceptanceRate, established, website, phone, topPrograms, testimonials, req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Not found' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

// Delete a college
router.delete('/:id', async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM colleges WHERE id = $1 RETURNING *', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'College deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete college' });
  }
});

// College signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, country, description, students, location, type, tuition, acceptanceRate, established, website, phone, topPrograms } = req.body;
    if (!name || !email || !password || !country) {
      return res.status(400).json({ error: 'All required fields must be filled' });
    }
    const result = await pool.query('SELECT * FROM colleges WHERE email = $1', [email]);
    if (result.rows.length > 0) {
      return res.status(409).json({ error: 'Email already in use' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const result2 = await pool.query('INSERT INTO colleges (name, email, password, country, description, students, location, type, tuition, acceptanceRate, established, website, phone, topPrograms) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *', [name, email, hashedPassword, country, description, students, location, type, tuition, acceptanceRate, established, website, phone, topPrograms]);
    res.status(201).json(result2.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// College login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const result = await pool.query('SELECT * FROM colleges WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const college = result.rows[0];
    const isMatch = await bcrypt.compare(password, college.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ collegeId: college.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
    res.json({ token, college });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to login' });
  }
});

// Delete current college account
router.delete('/me', collegeAuth, async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM colleges WHERE id = $1 RETURNING *', [req.college.collegeId]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Account deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete account' });
  }
});

export default router; 