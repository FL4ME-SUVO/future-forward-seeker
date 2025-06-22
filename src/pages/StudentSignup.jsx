import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  UserPlus, 
  GraduationCap, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowLeft, 
  CheckCircle,
  User,
  Shield,
  Sparkles,
  ArrowRight,
  Phone,
  Calendar,
  MapPin,
  BookOpen,
  Target,
  Zap
} from 'lucide-react';

const StudentSignup = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
    'Computer Science', 'Engineering', 'Business', 'Medicine', 
    'Arts', 'Law', 'Science', 'Technology', 'Design', 'Education'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      console.log('Signup data:', formData);
      setIsLoading(false);
      // Handle signup logic here
    }, 2000);
  };

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

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="p-2 bg-blue-100 rounded-xl">
            <User className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Personal Information</h3>
        </div>
        <p className="text-gray-600">Let's start with your basic details</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">First Name</label>
          <input
            type="text"
            name="firstName"
            required
            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Last Name</label>
          <input
            type="text"
            name="lastName"
            required
            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            required
            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            name="phone"
            required
            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="p-2 bg-green-100 rounded-xl">
            <Shield className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Account Security</h3>
        </div>
        <p className="text-gray-600">Create a strong password to protect your account</p>
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Password</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            required
            className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
            placeholder="Create a strong password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-4 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
            )}
          </button>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Confirm Password</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            required
            className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-4 flex items-center"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
            )}
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Date of Birth</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              name="dateOfBirth"
              required
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Location</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="location"
              required
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
              placeholder="Enter your city"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="p-2 bg-purple-100 rounded-xl">
            <Target className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Academic Interests</h3>
        </div>
        <p className="text-gray-600">Help us personalize your college recommendations</p>
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Current Education Level</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <BookOpen className="h-5 w-5 text-gray-400" />
          </div>
          <select
            name="education"
            required
            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm appearance-none"
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
        <label className="block text-sm font-semibold text-gray-700 mb-4">Areas of Interest (Select all that apply)</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {interests.map((interest) => (
            <button
              key={interest}
              type="button"
              onClick={() => handleInterestToggle(interest)}
              className={`p-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
                formData.interests.includes(interest)
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 bg-white/50 text-gray-600 hover:border-gray-300'
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
        <div className="flex items-start space-x-3">
          <Zap className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">Why this matters?</h4>
            <p className="text-blue-700 text-sm leading-relaxed">
              Your interests help us provide personalized college recommendations and career guidance 
              that align with your goals and aspirations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      {/* Header with Logo */}
      <header className="p-4">
        <Link to="/" className="inline-flex items-center space-x-3 group">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              EduGuide
            </h1>
            <p className="text-xs text-gray-500 -mt-1">Your College Search Partner</p>
          </div>
        </Link>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-4">
        <div className="max-w-2xl w-full">
          {/* Back Link */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ArrowLeft className="h-4 w-4 text-gray-400" />
            <Link to="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium">
              Back to Home
            </Link>
          </div>
          
          {/* Signup Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <div className="p-2 bg-blue-100 rounded-xl">
                <UserPlus className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Join EduGuide
              </h2>
            </div>
            <p className="text-gray-600 text-lg">
              Create your account and start your college search journey
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700">Step {currentStep} of 3</span>
              <span className="text-sm font-medium text-blue-600">{Math.round((currentStep / 3) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Signup Form */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-white/20">
            <form onSubmit={handleSubmit}>
              {renderCurrentStep()}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6 pt-4 border-t border-gray-200">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium"
                  >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Previous
                  </button>
                )}
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="ml-auto flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-semibold"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      {currentStep === 3 ? 'Creating Account...' : 'Processing...'}
                    </div>
                  ) : (
                    <div className="flex items-center">
                      {currentStep === 3 ? 'Create Account' : 'Next Step'}
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Sign In Link */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link 
                to="/student-login" 
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors group inline-flex items-center"
              >
                Sign in here
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </p>
          </div>

          {/* Features Preview */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="flex justify-center mb-2">
                <Shield className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-xs text-gray-600 font-medium">Secure</p>
            </div>
            <div className="text-center p-3 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="flex justify-center mb-2">
                <Sparkles className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-xs text-gray-600 font-medium">Smart</p>
            </div>
            <div className="text-center p-3 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="flex justify-center mb-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-xs text-gray-600 font-medium">Reliable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup; 