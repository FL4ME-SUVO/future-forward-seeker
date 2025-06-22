import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Clock,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Briefcase,
  Target,
  CheckCircle,
  X,
  Heart,
  HeartOff,
  Zap,
  Lightbulb,
  Code,
  Palette,
  Microscope,
  Calculator,
  Globe,
  Shield,
  Camera,
  Settings,
  Building2,
  User,
  Activity
} from 'lucide-react';

const CareerSelection = () => {
  const [selectedCareers, setSelectedCareers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFavorites, setShowFavorites] = useState(false);

  const categories = [
    { id: 'all', name: 'All Careers', icon: Briefcase, color: 'from-blue-500 to-purple-500' },
    { id: 'tech', name: 'Technology', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { id: 'creative', name: 'Creative Arts', icon: Palette, color: 'from-purple-500 to-pink-500' },
    { id: 'science', name: 'Science', icon: Microscope, color: 'from-green-500 to-teal-500' },
    { id: 'business', name: 'Business', icon: TrendingUp, color: 'from-orange-500 to-red-500' },
    { id: 'health', name: 'Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' }
  ];

  const careers = [
    {
      id: 1,
      title: 'Software Engineer',
      category: 'tech',
      description: 'Design, develop, and maintain software applications and systems.',
      salary: '$85,000 - $150,000',
      growth: '22%',
      demand: 'High',
      duration: '4 years',
      skills: ['Programming', 'Problem Solving', 'Teamwork', 'Communication'],
      favorite: false,
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Data Scientist',
      category: 'tech',
      description: 'Analyze complex data to help organizations make informed decisions.',
      salary: '$95,000 - $160,000',
      growth: '31%',
      demand: 'Very High',
      duration: '4-6 years',
      skills: ['Statistics', 'Machine Learning', 'Python', 'SQL'],
      favorite: false,
      icon: Activity,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Mechanical Engineer',
      category: 'tech',
      description: 'Design and build mechanical devices, engines, and machines.',
      salary: '$70,000 - $120,000',
      growth: '7%',
      demand: 'High',
      duration: '4 years',
      skills: ['CAD', 'Physics', 'Mathematics', 'Design'],
      favorite: false,
      icon: Settings,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      title: 'Medical Doctor',
      category: 'health',
      description: 'Diagnose and treat patients, provide medical care and advice.',
      salary: '$150,000 - $300,000',
      growth: '13%',
      demand: 'Very High',
      duration: '8-12 years',
      skills: ['Medicine', 'Patient Care', 'Diagnosis', 'Communication'],
      favorite: false,
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 5,
      title: 'Business Analyst',
      category: 'business',
      description: 'Analyze business processes and recommend improvements.',
      salary: '$65,000 - $110,000',
      growth: '14%',
      demand: 'High',
      duration: '4 years',
      skills: ['Analysis', 'Communication', 'Problem Solving', 'Business'],
      favorite: false,
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 6,
      title: 'UX/UI Designer',
      category: 'creative',
      description: 'Design user-friendly digital interfaces and experiences.',
      salary: '$70,000 - $130,000',
      growth: '18%',
      demand: 'High',
      duration: '4 years',
      skills: ['Design', 'User Research', 'Prototyping', 'Creativity'],
      favorite: false,
      icon: Palette,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 7,
      title: 'Civil Engineer',
      category: 'tech',
      description: 'Design and oversee construction of infrastructure projects.',
      salary: '$65,000 - $115,000',
      growth: '8%',
      demand: 'High',
      duration: '4 years',
      skills: ['Design', 'Mathematics', 'Project Management', 'Construction'],
      favorite: false,
      icon: Building2,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 8,
      title: 'Nurse Practitioner',
      category: 'health',
      description: 'Provide advanced nursing care and prescribe medications.',
      salary: '$100,000 - $150,000',
      growth: '45%',
      demand: 'Very High',
      duration: '6-8 years',
      skills: ['Patient Care', 'Medicine', 'Communication', 'Assessment'],
      favorite: false,
      icon: User,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 9,
      title: 'Financial Analyst',
      category: 'business',
      description: 'Analyze financial data and provide investment guidance.',
      salary: '$60,000 - $100,000',
      growth: '9%',
      demand: 'High',
      duration: '4 years',
      skills: ['Finance', 'Analysis', 'Excel', 'Economics'],
      favorite: false,
      icon: Calculator,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 10,
      title: 'Biomedical Engineer',
      category: 'science',
      description: 'Design medical devices and equipment for healthcare.',
      salary: '$75,000 - $130,000',
      growth: '10%',
      demand: 'High',
      duration: '4-6 years',
      skills: ['Engineering', 'Biology', 'Medicine', 'Design'],
      favorite: false,
      icon: Microscope,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 11,
      title: 'Teacher',
      category: 'health',
      description: 'Educate students in various subjects and grade levels.',
      salary: '$45,000 - $80,000',
      growth: '8%',
      demand: 'High',
      duration: '4-5 years',
      skills: ['Teaching', 'Communication', 'Patience', 'Organization'],
      favorite: false,
      icon: BookOpen,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 12,
      title: 'Cybersecurity Analyst',
      category: 'tech',
      description: 'Protect computer systems and networks from cyber threats.',
      salary: '$80,000 - $140,000',
      growth: '33%',
      demand: 'Very High',
      duration: '4 years',
      skills: ['Security', 'Networking', 'Programming', 'Analysis'],
      favorite: false,
      icon: Shield,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const toggleFavorite = (careerId) => {
    setSelectedCareers(prev => 
      prev.includes(careerId) 
        ? prev.filter(id => id !== careerId)
        : [...prev, careerId]
    );
  };

  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || career.category === selectedCategory;
    const matchesFavorites = !showFavorites || selectedCareers.includes(career.id);
    
    return matchesSearch && matchesCategory && matchesFavorites;
  });

  const selectedCareersData = careers.filter(career => selectedCareers.includes(career.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container-responsive-xl py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg group-hover:scale-110 transition-transform">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  EduGuide
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Your College Search Partner</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link 
                to="/location-selection" 
                className="inline-flex items-center px-3 sm:px-4 py-2 text-sm font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
              >
                <span className="hidden sm:inline">Continue</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-responsive-xl py-6 sm:py-8">
        {/* Page Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Choose Your Career Path
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore different career options and select the ones that interest you. 
            We'll help you find the best colleges and programs for your chosen careers.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100">
          {/* Search Bar - Full width on mobile */}
          <div className="mb-4 sm:mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search careers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 sm:py-4 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base"
              />
            </div>
          </div>

          {/* Filters Row - Responsive layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full px-3 py-3 sm:py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base bg-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Favorites Toggle */}
            <div className="flex items-end">
              <button
                onClick={() => setShowFavorites(!showFavorites)}
                className={`w-full inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 border rounded-xl font-medium transition-all duration-200 touch-friendly ${
                  showFavorites
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                }`}
              >
                {showFavorites ? (
                  <>
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    <span className="hidden sm:inline">Favorites Only</span>
                    <span className="sm:hidden">Favorites Only</span>
                  </>
                ) : (
                  <>
                    <HeartOff className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    <span className="hidden sm:inline">Show All</span>
                    <span className="sm:hidden">Show All</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Selected Careers Summary */}
        {selectedCareers.length > 0 && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-blue-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
              <h3 className="text-lg font-semibold text-gray-900">
                Selected Careers ({selectedCareers.length})
              </h3>
              <button
                onClick={() => setSelectedCareers([])}
                className="text-sm text-gray-500 hover:text-gray-700 flex items-center self-start sm:self-auto"
              >
                <X className="h-4 w-4 mr-1" />
                Clear All
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedCareersData.map(career => (
                <span
                  key={career.id}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  <span className="hidden sm:inline">{career.title}</span>
                  <span className="sm:hidden">{career.title.split(' ')[0]}</span>
                  <button
                    onClick={() => toggleFavorite(career.id)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Careers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCareers.map(career => (
            <div
              key={career.id}
              className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                selectedCareers.includes(career.id)
                  ? 'border-blue-500 shadow-blue-100'
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <div className="p-4 sm:p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl sm:text-3xl">{career.icon}</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                        {career.title}
                      </h3>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {categories.find(cat => cat.id === career.category)?.name}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(career.id)}
                    className={`p-2 rounded-full transition-colors ${
                      selectedCareers.includes(career.id)
                        ? 'text-red-500 bg-red-50 hover:bg-red-100'
                        : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                    }`}
                  >
                    {selectedCareers.includes(career.id) ? (
                      <Heart className="h-5 w-5 fill-current" />
                    ) : (
                      <Heart className="h-5 w-5" />
                    )}
                  </button>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {career.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">{career.salary}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-700">{career.growth} growth</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-700">{career.demand} demand</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-700">{career.duration}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {career.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                    {career.skills.length > 3 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                        +{career.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => toggleFavorite(career.id)}
                  className={`w-full py-2 px-4 rounded-xl font-medium transition-all duration-200 ${
                    selectedCareers.includes(career.id)
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedCareers.includes(career.id) ? (
                    <span className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span className="hidden sm:inline">Selected</span>
                      <span className="sm:hidden">Selected</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Heart className="h-4 w-4 mr-2" />
                      <span className="hidden sm:inline">Add to Selection</span>
                      <span className="sm:hidden">Add</span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCareers.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No careers found</h3>
            <p className="text-gray-600 px-4">
              Try adjusting your search terms or filters to find more career options.
            </p>
          </div>
        )}

        {/* Continue Button */}
        {selectedCareers.length > 0 && (
          <div className="mt-8 sm:mt-12 text-center">
            <Link
              to="/location-selection"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="hidden sm:inline">Continue with {selectedCareers.length} Selected Career{selectedCareers.length !== 1 ? 's' : ''}</span>
              <span className="sm:hidden">Continue ({selectedCareers.length})</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerSelection; 