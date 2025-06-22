import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  MapPin, 
  Award, 
  ArrowRight, 
  GraduationCap, 
  Globe, 
  Search, 
  CheckCircle, 
  Star,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Heart,
  Clock
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  EduGuide
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Your College Search Partner</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/student-login" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Student Login
              </Link>
              <Link to="/college-signup" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                College Portal
              </Link>
              <Link to="/student-signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Get Started
              </Link>
            </nav>
            <div className="md:hidden">
              <button className="p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 50,000+ students worldwide
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your Perfect College,
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Anywhere in the World</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover engineering and management universities in India and abroad. Get personalized recommendations, 
              check eligibility criteria, and take aptitude tests to find your ideal educational path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/student-signup"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/college-list"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Search className="mr-2 h-5 w-5" />
                Browse Colleges
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Colleges</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Choose the Right College
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and information to help you make the best decision for your future
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Comprehensive Information</h4>
              <p className="text-gray-600 leading-relaxed">
                Tuition fees, housing, eligibility requirements, and placement statistics for thousands of institutions.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Global Reach</h4>
              <p className="text-gray-600 leading-relaxed">
                Explore engineering and management colleges both in India and internationally.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Aptitude Testing</h4>
              <p className="text-gray-600 leading-relaxed">
                Take comprehensive aptitude tests to match your skills with the right programs.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Personalized Guidance</h4>
              <p className="text-gray-600 leading-relaxed">
                Get tailored recommendations based on your entrance exam scores and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to find your perfect college and start your journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Create Your Profile</h4>
              <p className="text-gray-600 leading-relaxed">
                Sign up and provide your academic background, entrance exam scores, and career interests.
              </p>
            </div>
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Explore & Filter</h4>
              <p className="text-gray-600 leading-relaxed">
                Browse colleges based on location, ranking, fees, and your eligibility criteria.
              </p>
            </div>
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Apply & Test</h4>
              <p className="text-gray-600 leading-relaxed">
                Take aptitude tests and apply to your chosen colleges with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your College Journey?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who have found their perfect college with EduGuide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/student-signup"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-lg"
            >
              Get Started Now
            </Link>
            <Link
              to="/college-list"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Browse Colleges
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">EduGuide</span>
                  <p className="text-xs text-gray-400 -mt-1">Your College Search Partner</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner in finding the perfect college for your future. We help students make informed decisions about their education.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-6 text-lg">For Students</h5>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/student-signup" className="hover:text-white transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Sign Up</Link></li>
                <li><Link to="/career-selection" className="hover:text-white transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Career Guidance</Link></li>
                <li><Link to="/aptitude-test" className="hover:text-white transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Aptitude Test</Link></li>
                <li><Link to="/college-list" className="hover:text-white transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Browse Colleges</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-6 text-lg">For Colleges</h5>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/college-signup" className="hover:text-white transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Register</Link></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Manage Profile</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Student Analytics</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-6 text-lg">Support</h5>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduGuide. All rights reserved. | Made with ❤️ for students worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index; 