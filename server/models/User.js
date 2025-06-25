import mongoose from 'mongoose';

const TestResultSchema = new mongoose.Schema({
  testName: String,
  score: Number,
  completedAt: Date
}, { _id: false });

const RecommendationSchema = new mongoose.Schema({
  career: String,
  reason: String,
  score: Number,
  recommendedColleges: [String]
}, { _id: false });

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  savedColleges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'College' }],
  testResults: [TestResultSchema],
  recommendations: [RecommendationSchema],
  applications: { type: Number, default: 0 }
});

export default mongoose.model('User', UserSchema); 