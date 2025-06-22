import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  UserPlus, 
  GraduationCap, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  Calendar,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  MapPin,
  BookOpen,
  Target
} from 'lucide-react';

const StudentSignup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    location: '',
    education: '',
    interests: []
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const interests = [
    'Computer Science', 'Mechanical Engineering', 'Electrical Engineering',
    'Civil Engineering', 'Business Administration', 'Data Science',
    'Artificial Intelligence', 'Biotechnology', 'Architecture'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Signup data:', formData);
      setIsLoading(false);
      // Handle signup logic here
    }, 2000);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Personal Information</h3>
        <p className="text-gray-600">Tell us about yourself</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
          Date of Birth
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            required
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Account Security</h3>
        <p className="text-gray-600">Create a secure password</p>
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            placeholder="Create a strong password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            )}
          </button>
        </div>
        <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters long</p>
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            required
            className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Academic Information</h3>
        <p className="text-gray-600">Help us personalize your experience</p>
      </div>
      
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Location
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <select
            id="location"
            name="location"
            required
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            value={formData.location}
            onChange={handleChange}
          >
            <option value="">Select your preferred location</option>
            <option value="india">India</option>
            <option value="abroad">Abroad</option>
            <option value="both">Both</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
          Current Education Level
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BookOpen className="h-5 w-5 text-gray-400" />
          </div>
          <select
            id="education"
            name="education"
            required
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            value={formData.education}
            onChange={handleChange}
          >
            <option value="">Select your education level</option>
            <option value="high-school">High School</option>
            <option value="diploma">Diploma</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">PhD</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Areas of Interest
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {interests.map((interest) => (
            <button
              key={interest}
              type="button"
              onClick={() => handleInterestToggle(interest)}
              className={`p-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
                formData.interests.includes(interest)
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-gray-500">Select all that apply</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg group-hover:scale-110 transition-transform">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                EduGuide
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Your College Search Partner</p>
            </div>
          </Link>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ArrowLeft className="h-4 w-4 text-gray-400" />
            <Link to="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Back to Home
            </Link>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Join EduGuide Today!
          </h2>
          <p className="text-gray-600">
            Start your journey to find the perfect college
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Step {step} of 3</span>
            <span className="text-sm text-gray-500">{Math.round((step / 3) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit}>
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className="flex items-center px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </button>

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      <UserPlus className="h-4 w-4 mr-2" />
                      Create Account
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Login Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/student-login" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
              Sign in here
            </Link>
          </p>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <CheckCircle className="h-6 w-6 text-green-500 mb-2" />
            <span className="text-xs text-gray-600">Free Access</span>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="h-6 w-6 text-green-500 mb-2" />
            <span className="text-xs text-gray-600">Personalized</span>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="h-6 w-6 text-green-500 mb-2" />
            <span className="text-xs text-gray-600">Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup; 