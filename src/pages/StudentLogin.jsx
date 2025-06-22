import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LogIn, 
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
  ArrowRight
} from 'lucide-react';

const StudentLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', formData);
      setIsLoading(false);
      // Handle login logic here
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      {/* Header with Logo */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-4"
      >
        <Link to="/" className="inline-flex items-center space-x-3 group">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl transition-transform shadow-lg"
          >
            <GraduationCap className="h-6 w-6 text-white" />
          </motion.div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              EduGuide
            </h1>
            <p className="text-xs text-gray-500 -mt-1">Your College Search Partner</p>
          </div>
        </Link>
      </motion.header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md w-full"
        >
          {/* Back Link */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <ArrowLeft className="h-4 w-4 text-gray-400" />
            <Link to="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium">
              Back to Home
            </Link>
          </motion.div>
          
          {/* Login Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-6"
          >
            <div className="flex items-center justify-center space-x-2 mb-3">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-2 bg-blue-100 rounded-xl"
              >
                <User className="h-6 w-6 text-blue-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900">
                Welcome Back
              </h2>
            </div>
            <p className="text-gray-600 text-lg">
              Sign in to continue your college search journey
            </p>
          </motion.div>

          {/* Login Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-white/20"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ x: 5 }}
              >
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </motion.div>

              {/* Password Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ x: 5 }}
              >
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="block w-full pl-12 pr-12 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    )}
                  </motion.button>
                </div>
              </motion.div>

              {/* Remember Me & Forgot Password */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-700 font-medium">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    Forgot password?
                  </a>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Signing in...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <LogIn className="h-6 w-6 mr-3 group-hover:translate-x-1 transition-transform" />
                      Sign In
                    </div>
                  )}
                </motion.button>
              </motion.div>
            </form>

            {/* Divider */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-6"
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/80 text-gray-500 font-medium">Or continue with</span>
                </div>
              </div>
            </motion.div>

            {/* Social Login Buttons */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-200 rounded-xl shadow-sm bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-200 rounded-xl shadow-sm bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                Twitter
              </button>
            </div>
          </motion.div>

          {/* Sign Up Link */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link 
                to="/student-signup" 
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors group inline-flex items-center"
              >
                Sign up now
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
        </motion.div>
      </div>
    </div>
  );
};

export default StudentLogin; 