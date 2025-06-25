import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import sampleRouter from './routes/sample.js';
import collegesRouter from './routes/colleges.js';
import usersRouter from './routes/users.js';
import careersRouter from './routes/careers.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import College from './models/College.js';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://Shubhajit2002:3zr0IEahufsGm6gm@cluster0.wc61rsz.mongodb.net/EduGuide?retryWrites=true&w=majority&appName=Cluster0';

app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
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

// Image upload endpoint
app.post('/api/colleges/upload-image', collegeAuth, upload.single('image'), async (req, res) => {
  try {
    const imageUrl = `/uploads/${req.file.filename}`;
    const college = await College.findByIdAndUpdate(
      req.college.collegeId,
      { profileImage: imageUrl },
      { new: true }
    );
    res.json({ imageUrl });
  } catch (err) {
    res.status(500).json({ error: 'Image upload failed' });
  }
});

// Gallery upload endpoint (multiple images)
app.post('/api/colleges/upload-gallery', collegeAuth, upload.array('images', 10), async (req, res) => {
  try {
    const imageUrls = req.files.map(file => `/uploads/${file.filename}`);
    const college = await College.findByIdAndUpdate(
      req.college.collegeId,
      { $push: { galleryImages: { $each: imageUrls } } },
      { new: true }
    );
    res.json({ imageUrls });
  } catch (err) {
    res.status(500).json({ error: 'Gallery upload failed' });
  }
});

// Banner image upload endpoint
app.post('/api/colleges/upload-banner', collegeAuth, upload.single('banner'), async (req, res) => {
  try {
    const imageUrl = `/uploads/${req.file.filename}`;
    const college = await College.findByIdAndUpdate(
      req.college.collegeId,
      { bannerImage: imageUrl },
      { new: true }
    );
    res.json({ imageUrl });
  } catch (err) {
    res.status(500).json({ error: 'Banner upload failed' });
  }
});

app.use('/api/sample', sampleRouter);
app.use('/api/colleges', collegesRouter);
app.use('/api/users', usersRouter);
app.use('/api/careers', careersRouter); 