import mongoose from 'mongoose';

const CollegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String },
  bannerImage: { type: String },
  galleryImages: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  students: { type: Number },
  location: { type: String },
  type: { type: String },
  tuition: { type: String },
  acceptanceRate: { type: String },
  established: { type: Number },
  website: { type: String },
  phone: { type: String },
  topPrograms: [{ type: String }],
  testimonials: [{
    name: String,
    role: String,
    text: String,
    featured: { type: Boolean, default: false },
    reported: { type: Boolean, default: false }
  }]
});

export default mongoose.model('College', CollegeSchema); 