import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, MapPin, Award, ArrowRight, GraduationCap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">EduGuide</h1>
            </div>
            <nav className="flex space-x-6">
              <Link to="/student-login" className="text-gray-600 hover:text-blue-600 transition-colors">
                Student Login
              </Link>
              <Link to="/college-signup" className="text-gray-600 hover:text-blue-600 transition-colors">
                College Portal
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect College,
            <span className="text-blue-600"> Anywhere in the World</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover engineering and management universities in India and abroad. Get personalized recommendations, 
            check eligibility criteria, and take aptitude tests to find your ideal educational path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/student-signup"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/college-list"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Browse Colleges
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need to Choose the Right College
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Comprehensive Information</h4>
              <p className="text-gray-600">
                Tuition fees, housing, eligibility requirements, and placement statistics for thousands of institutions.
              </p>
            </div>
            <div className="text-center p-6">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Global Reach</h4>
              <p className="text-gray-600">
                Explore engineering and management colleges both in India and internationally.
              </p>
            </div>
            <div className="text-center p-6">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Aptitude Testing</h4>
              <p className="text-gray-600">
                Take comprehensive aptitude tests to match your skills with the right programs.
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Personalized Guidance</h4>
              <p className="text-gray-600">
                Get tailored recommendations based on your entrance exam scores and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Create Your Profile</h4>
              <p className="text-gray-600">
                Sign up and provide your academic background, entrance exam scores, and career interests.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Explore & Filter</h4>
              <p className="text-gray-600">
                Browse colleges based on location, ranking, fees, and your eligibility criteria.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Apply & Test</h4>
              <p className="text-gray-600">
                Take aptitude tests and apply to your chosen colleges with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6" />
                <span className="text-xl font-bold">EduGuide</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in finding the perfect college for your future.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">For Students</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/student-signup" className="hover:text-white transition-colors">Sign Up</Link></li>
                <li><Link to="/career-selection" className="hover:text-white transition-colors">Career Guidance</Link></li>
                <li><Link to="/aptitude-test" className="hover:text-white transition-colors">Aptitude Test</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">For Colleges</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/college-signup" className="hover:text-white transition-colors">Register</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Manage Profile</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduGuide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index; 