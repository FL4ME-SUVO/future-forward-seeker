import express from 'express';
// import User from '../models/User.js'; // REMOVE
// import College from '../models/College.js'; // REMOVE
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Pool } from 'pg'; // ADD

const router = express.Router();
const pool = new Pool({ connectionString: process.env.SUPABASE_DB_URL }); // ADD

// User signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return res.status(409).json({ error: 'Email already in use' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, isAdmin, createdAt', [name, email, hashedPassword]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: err.message });
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const userRes = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userRes.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const user = userRes.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
    const { password: _, ...userObj } = user;
    res.json({ token, user: userObj });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin login
router.post('/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const userRes = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userRes.rows.length === 0 || !userRes.rows[0].isadmin) {
      return res.status(401).json({ error: 'Not an admin or invalid credentials' });
    }
    const user = userRes.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user.id, isAdmin: true }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
    const { password: _, ...userObj } = user;
    res.json({ token, user: userObj });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// JWT auth middleware
function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// Get current user
router.get('/me', auth, async (req, res) => {
  try {
    const userRes = await pool.query('SELECT id, name, email, isAdmin, createdAt FROM users WHERE id = $1', [req.user.userId]);
    if (userRes.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(userRes.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Save a college
router.post('/saved-colleges/:collegeId', auth, async (req, res) => {
  try {
    // Prevent duplicates
    const exists = await pool.query('SELECT * FROM saved_colleges WHERE user_id = $1 AND college_id = $2', [req.user.userId, req.params.collegeId]);
    if (exists.rows.length === 0) {
      await pool.query('INSERT INTO saved_colleges (user_id, college_id) VALUES ($1, $2)', [req.user.userId, req.params.collegeId]);
    }
    const saved = await pool.query('SELECT college_id FROM saved_colleges WHERE user_id = $1', [req.user.userId]);
    res.json({ savedColleges: saved.rows.map(r => r.college_id) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Remove a saved college
router.delete('/saved-colleges/:collegeId', auth, async (req, res) => {
  try {
    await pool.query('DELETE FROM saved_colleges WHERE user_id = $1 AND college_id = $2', [req.user.userId, req.params.collegeId]);
    const saved = await pool.query('SELECT college_id FROM saved_colleges WHERE user_id = $1', [req.user.userId]);
    res.json({ savedColleges: saved.rows.map(r => r.college_id) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get saved colleges (populated)
router.get('/saved-colleges', auth, async (req, res) => {
  try {
    const saved = await pool.query('SELECT c.* FROM saved_colleges sc JOIN colleges c ON sc.college_id = c.id WHERE sc.user_id = $1', [req.user.userId]);
    res.json(saved.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a test result
router.post('/test-results', auth, async (req, res) => {
  try {
    const { testName, score } = req.body;
    await pool.query('INSERT INTO test_results (user_id, test_name, score, completed_at) VALUES ($1, $2, $3, NOW())', [req.user.userId, testName, score]);
    const results = await pool.query('SELECT * FROM test_results WHERE user_id = $1', [req.user.userId]);
    res.json(results.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get test results
router.get('/test-results', auth, async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM test_results WHERE user_id = $1', [req.user.userId]);
    res.json(results.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a recommendation
router.post('/recommendations', auth, async (req, res) => {
  try {
    const { career, reason, score, recommendedColleges } = req.body;
    await pool.query('INSERT INTO recommendations (user_id, career, reason, score, recommended_colleges) VALUES ($1, $2, $3, $4, $5)', [req.user.userId, career, reason, score, recommendedColleges]);
    const recs = await pool.query('SELECT * FROM recommendations WHERE user_id = $1', [req.user.userId]);
    res.json(recs.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get recommendations
router.get('/recommendations', auth, async (req, res) => {
  try {
    const recs = await pool.query('SELECT * FROM recommendations WHERE user_id = $1', [req.user.userId]);
    res.json(recs.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin-only middleware
export function isAdmin(req, res, next) {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
}

export { auth };

export default router; 