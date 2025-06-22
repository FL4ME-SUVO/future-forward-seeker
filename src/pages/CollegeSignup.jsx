import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  GraduationCap, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  MapPin,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Globe,
  Award,
  Users,
  BookOpen
} from 'lucide-react';

const CollegeSignup = () => {
  const [formData, setFormData] = useState({
    collegeName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    country: '',
    website: '',
    establishedYear: '',
    accreditation: '',
    totalStudents: '',
    programs: []
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const programs = [
    'Computer Science Engineering', 'Mechanical Engineering', 'Electrical Engineering',
    'Civil Engineering', 'Electronics & Communication', 'Information Technology',
    'Business Administration', 'Data Science', 'Artificial Intelligence',
    'Biotechnology', 'Architecture', 'Chemical Engineering'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleProgramToggle = (program) => {
    setFormData(prev => ({
      ...prev,
      programs: prev.programs.includes(program)
        ? prev.programs.filter(p => p !== program)
        : [...prev.programs, program]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('College signup data:', formData);
      setIsLoading(false);
      // Handle signup logic here
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
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
            Register Your College
          </h2>
          <p className="text-gray-600">
            Join our platform and connect with thousands of students worldwide
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* College Information */}
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">College Information</h3>
                <p className="text-gray-600">Tell us about your institution</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700 mb-2">
                    College/University Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="collegeName"
                      name="collegeName"
                      type="text"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Enter college name"
                      value={formData.collegeName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="establishedYear" className="block text-sm font-medium text-gray-700 mb-2">
                    Established Year
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Award className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="establishedYear"
                      name="establishedYear"
                      type="number"
                      min="1800"
                      max="2024"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="e.g., 1995"
                      value={formData.establishedYear}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Official Email
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
                      placeholder="admin@college.edu"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Phone
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
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Website URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Globe className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="https://www.college.edu"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Enter city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                    State/Province
                  </label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    required
                    className="block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    className="block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="">Select country</option>
                    <option value="india">India</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany</option>
                    <option value="france">France</option>
                    <option value="singapore">Singapore</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  required
                  className="block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Enter complete address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Academic Information */}
            <div className="space-y-6 pt-6 border-t border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Academic Information</h3>
                <p className="text-gray-600">Details about your programs and accreditation</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="accreditation" className="block text-sm font-medium text-gray-700 mb-2">
                    Accreditation
                  </label>
                  <input
                    id="accreditation"
                    name="accreditation"
                    type="text"
                    className="block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="e.g., NAAC, AICTE, UGC"
                    value={formData.accreditation}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="totalStudents" className="block text-sm font-medium text-gray-700 mb-2">
                    Total Students
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="totalStudents"
                      name="totalStudents"
                      type="number"
                      min="1"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="e.g., 5000"
                      value={formData.totalStudents}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Programs Offered
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {programs.map((program) => (
                    <button
                      key={program}
                      type="button"
                      onClick={() => handleProgramToggle(program)}
                      className={`p-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
                        formData.programs.includes(program)
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {program}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-xs text-gray-500">Select all programs you offer</p>
              </div>
            </div>

            {/* Account Security */}
            <div className="space-y-6 pt-6 border-t border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Account Security</h3>
                <p className="text-gray-600">Create a secure password for your account</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Creating Account...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 mr-2" />
                    Register College
                  </div>
                )}
              </button>
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
            <span className="text-xs text-gray-600">Free Registration</span>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="h-6 w-6 text-green-500 mb-2" />
            <span className="text-xs text-gray-600">Student Analytics</span>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="h-6 w-6 text-green-500 mb-2" />
            <span className="text-xs text-gray-600">24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeSignup; 