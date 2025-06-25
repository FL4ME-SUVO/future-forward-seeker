import mongoose from 'mongoose';

const CareerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
  salary: { type: String },
  growth: { type: String },
  demand: { type: String },
  duration: { type: String },
  skills: [{ type: String }],
  icon: { type: String }, // store icon name as string
  color: { type: String }
});

export default mongoose.model('Career', CareerSchema); 