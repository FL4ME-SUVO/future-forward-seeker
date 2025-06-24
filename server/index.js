import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import sampleRouter from './routes/sample.js';
import collegesRouter from './routes/colleges.js';
import usersRouter from './routes/users.js';

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

app.use('/api/sample', sampleRouter);
app.use('/api/colleges', collegesRouter);
app.use('/api/users', usersRouter); 