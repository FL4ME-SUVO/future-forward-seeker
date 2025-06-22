import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  User, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Calendar,
  Bell,
  Settings,
  LogOut,
  Search,
  Filter,
  Star,
  MapPin,
  DollarSign,
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
  X,
  Heart,
  HeartOff,
  Globe,
  Award,
  BarChart3,
  Smile,
  Trophy
} from 'lucide-react';

const StudentDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profile: 'Engineering Student',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    testScore: 85,
    completedTests: 3,
    savedColleges: 8,
    applications: 2
  };

  const recentTests = [
    {
      id: 1,
      name: 'Aptitude Assessment',
      score: 85,
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 2,
      name: 'Career Interest Test',
      score: 92,
      date: '2024-01-10',
      status: 'completed'
    }
  ];

  const savedColleges = [
    {
      id: 1,
      name: 'IIT Bombay',
      location: 'Mumbai, India',
      rating: 4.8,
      tuition: '$3,000 - $5,000',
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400"
    },
    {
      id: 2,
      name: 'Stanford University',
      location: 'San Francisco, USA',
      rating: 4.9,
      tuition: '$55,000 - $60,000',
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400"
    }
  ];

  const recommendations = [
    {
      id: 1,
      title: 'Computer Science Engineering',
      description: 'Based on your aptitude test results',
      match: 95,
      colleges: ['IIT Bombay', 'BITS Pilani', 'MIT']
    },
    {
      id: 2,
      title: 'Data Science',
      description: 'Strong analytical skills detected',
      match: 88,
      colleges: ['Stanford', 'CMU', 'UC Berkeley']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg group-hover:scale-110 transition-transform">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  EduGuide
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Student Dashboard</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="h-5 w-5" />
              </button>
              <Link to="/" className="p-2 text-gray-400 hover:text-gray-600">
                <LogOut className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Profile Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{userData.avatar}</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">{userData.name}</h2>
              <p className="text-gray-600">{userData.email}</p>
              <p className="text-sm text-blue-600 font-medium">{userData.profile}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{userData.testScore}%</div>
              <div className="text-sm text-gray-600">Overall Score</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8 border border-gray-100">
          <div className="flex space-x-2">
            {[
              { id: 'overview', name: 'Overview', icon: <Target className="h-4 w-4" /> },
              { id: 'tests', name: 'Test Results', icon: <BarChart3 className="h-4 w-4" /> },
              { id: 'colleges', name: 'Saved Colleges', icon: <BookOpen className="h-4 w-4" /> },
              { id: 'recommendations', name: 'Recommendations', icon: <TrendingUp className="h-4 w-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  selectedTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content based on selected tab */}
        {selectedTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stats Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-2xl font-bold text-blue-600">{userData.completedTests}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Tests Completed</h3>
                <p className="text-sm text-gray-600">Aptitude assessments taken</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-2xl font-bold text-green-600">{userData.savedColleges}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Saved Colleges</h3>
                <p className="text-sm text-gray-600">Institutions you're interested in</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <span className="text-2xl font-bold text-purple-600">{userData.applications}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Applications</h3>
                <p className="text-sm text-gray-600">Applications submitted</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/aptitude-test"
                  className="flex items-center justify-between p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-900">Take Aptitude Test</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </Link>

                <Link
                  to="/college-list"
                  className="flex items-center justify-between p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Search className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-gray-900">Browse Colleges</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </Link>

                <Link
                  to="/career-selection"
                  className="flex items-center justify-between p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-purple-600" />
                    <span className="font-medium text-gray-900">Career Guidance</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'tests' && (
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Test Results</h3>
            <div className="space-y-4">
              {recentTests.map(test => (
                <div key={test.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{test.name}</h4>
                      <p className="text-sm text-gray-600">Completed on {test.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-blue-600">{test.score}%</div>
                    <div className="text-sm text-gray-600">Score</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'colleges' && (
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Saved Colleges</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedColleges.map(college => (
                <div key={college.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{college.image}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{college.name}</h4>
                        <p className="text-sm text-gray-600">{college.location}</p>
                      </div>
                    </div>
                    <button className="text-red-500 hover:text-red-700">
                      <Heart className="h-5 w-5 fill-current" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-gray-700">{college.rating}</span>
                    </div>
                    <span className="text-gray-600">{college.tuition}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'recommendations' && (
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Career Recommendations</h3>
            <div className="space-y-6">
              {recommendations.map(rec => (
                <div key={rec.id} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{rec.title}</h4>
                      <p className="text-gray-600">{rec.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{rec.match}%</div>
                      <div className="text-sm text-gray-600">Match</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-medium text-gray-900 mb-2">Recommended Colleges:</h5>
                    <div className="flex flex-wrap gap-2">
                      {rec.colleges.map((college, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {college}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/college-list"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Colleges <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard; 