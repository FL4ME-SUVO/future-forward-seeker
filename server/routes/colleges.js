import express from 'express';
import College from '../models/College.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Get all colleges
router.get('/', async (req, res) => {
  try {
    const colleges = await College.find();
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ error: err.message });
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
    const college = await College.findById(req.college.collegeId).select('-password');
    if (!college) return res.status(404).json({ error: 'College not found' });
    res.json(college);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single college by ID
router.get('/:id', async (req, res) => {
  try {
    const college = await College.findById(req.params.id);
    if (!college) return res.status(404).json({ error: 'Not found' });
    res.json(college);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new college
router.post('/', async (req, res) => {
  try {
    const { name, country, description } = req.body;
    const college = new College({ name, country, description });
    await college.save();
    res.status(201).json(college);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a college
router.put('/:id', async (req, res) => {
  try {
    const updateFields = {};
    const allowedFields = [
      'name', 'country', 'description', 'students', 'location', 'type', 'tuition', 'acceptanceRate', 'established', 'website', 'phone', 'topPrograms', 'testimonials'
    ];
    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        updateFields[field] = req.body[field];
      }
    }
    const college = await College.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true, runValidators: true }
    );
    if (!college) return res.status(404).json({ error: 'Not found' });
    res.json(college);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a college
router.delete('/:id', async (req, res) => {
  try {
    const college = await College.findByIdAndDelete(req.params.id);
    if (!college) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'College deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// College signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, country, description, students, location, type, tuition, acceptanceRate, established, website, phone, topPrograms } = req.body;
    if (!name || !email || !password || !country) {
      return res.status(400).json({ error: 'All required fields must be filled' });
    }
    const existing = await College.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: 'Email already in use' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const college = new College({ name, email, password: hashedPassword, country, description, students, location, type, tuition, acceptanceRate, established, website, phone, topPrograms });
    await college.save();
    const collegeObj = college.toObject();
    delete collegeObj.password;
    res.status(201).json(collegeObj);
  } catch (err) {
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
    const college = await College.findOne({ email });
    if (!college) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, college.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ collegeId: college._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
    const collegeObj = college.toObject();
    delete collegeObj.password;
    res.json({ token, college: collegeObj });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete current college account
router.delete('/me', collegeAuth, async (req, res) => {
  try {
    const college = await College.findByIdAndDelete(req.college.collegeId);
    if (!college) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Account deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router; 