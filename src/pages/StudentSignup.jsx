import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, GraduationCap } from 'lucide-react';

const StudentSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    dateOfBirth: '',
    tenthPercentage: '',
    twelfthPercentage: '',
    entranceExam: '',
    entranceScore: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup data:', formData);
    // Handle signup logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-4">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">EduGuide</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">
            Create Student Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/student-login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in here
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="tenthPercentage" className="block text-sm font-medium text-gray-700">
                  10th Grade Percentage
                </label>
                <input
                  type="number"
                  id="tenthPercentage"
                  name="tenthPercentage"
                  min="0"
                  max="100"
                  step="0.1"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.tenthPercentage}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="twelfthPercentage" className="block text-sm font-medium text-gray-700">
                  12th Grade Percentage
                </label>
                <input
                  type="number"
                  id="twelfthPercentage"
                  name="twelfthPercentage"
                  min="0"
                  max="100"
                  step="0.1"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.twelfthPercentage}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="entranceExam" className="block text-sm font-medium text-gray-700">
                  Entrance Exam
                </label>
                <select
                  id="entranceExam"
                  name="entranceExam"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.entranceExam}
                  onChange={handleChange}
                >
                  <option value="">Select Entrance Exam</option>
                  <option value="JEE-Main">JEE Main</option>
                  <option value="JEE-Advanced">JEE Advanced</option>
                  <option value="NEET">NEET</option>
                  <option value="CAT">CAT</option>
                  <option value="GATE">GATE</option>
                  <option value="SAT">SAT</option>
                  <option value="GRE">GRE</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="entranceScore" className="block text-sm font-medium text-gray-700">
                  Entrance Exam Score
                </label>
                <input
                  type="number"
                  id="entranceScore"
                  name="entranceScore"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.entranceScore}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Password */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Security</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <UserPlus className="h-5 w-5 mr-2" />
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentSignup; 