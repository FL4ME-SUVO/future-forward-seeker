import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sampleRouter from './routes/sample.js';
import collegesRouter from './routes/colleges.js';
import usersRouter from './routes/users.js';
import careersRouter from './routes/careers.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import jwt from 'jsonwebtoken';
import { Pool } from 'pg';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const pool = new Pool({ connectionString: process.env.SUPABASE_DB_URL });

app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Ensure uploads directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, req.college.collegeId + '-' + Date.now() + ext);
  }
});
const upload = multer({ storage });

// Serve uploads statically
app.use('/uploads', express.static(uploadDir));

// College auth middleware (duplicate from colleges.js for use here)
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

// Image upload endpoint (profile image)
app.post('/api/colleges/upload-image', collegeAuth, upload.single('image'), async (req, res) => {
  try {
    const imageUrl = `/uploads/${req.file.filename}`;
    // Update college profileImage in Postgres
    const result = await pool.query(
      'UPDATE colleges SET "profileImage" = $1 WHERE id = $2 RETURNING *',
      [imageUrl, req.college.collegeId]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'College not found' });
    res.json({ imageUrl });
  } catch (err) {
    res.status(500).json({ error: 'Image upload failed' });
  }
});

// Gallery upload endpoint (multiple images)
app.post('/api/colleges/upload-gallery', collegeAuth, upload.array('images', 10), async (req, res) => {
  try {
    const imageUrls = req.files.map(file => `/uploads/${file.filename}`);
    // Fetch current galleryImages
    const collegeRes = await pool.query('SELECT "galleryImages" FROM colleges WHERE id = $1', [req.college.collegeId]);
    if (collegeRes.rows.length === 0) return res.status(404).json({ error: 'College not found' });
    const currentGallery = collegeRes.rows[0].galleryImages || [];
    const newGallery = [...currentGallery, ...imageUrls];
    await pool.query('UPDATE colleges SET "galleryImages" = $1 WHERE id = $2', [newGallery, req.college.collegeId]);
    res.json({ imageUrls });
  } catch (err) {
    res.status(500).json({ error: 'Gallery upload failed' });
  }
});

// Banner image upload endpoint
app.post('/api/colleges/upload-banner', collegeAuth, upload.single('banner'), async (req, res) => {
  try {
    const imageUrl = `/uploads/${req.file.filename}`;
    const result = await pool.query(
      'UPDATE colleges SET "bannerImage" = $1 WHERE id = $2 RETURNING *',
      [imageUrl, req.college.collegeId]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'College not found' });
    res.json({ imageUrl });
  } catch (err) {
    res.status(500).json({ error: 'Banner upload failed' });
  }
});

app.use('/api/sample', sampleRouter);
app.use('/api/colleges', collegesRouter);
app.use('/api/users', usersRouter);
app.use('/api/careers', careersRouter);

// Start server directly
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 