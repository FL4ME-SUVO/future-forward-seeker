import express from 'express';
const router = express.Router();

// Example GET endpoint
router.get('/', (req, res) => {
  res.json({ message: 'Sample API route working!' });
});

export default router; 