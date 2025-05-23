
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Search, Filter, MapPin, Star, Users, DollarSign, ChevronLeft } from 'lucide-react';

const CollegeList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('ranking');

  // Sample college data
  const colleges = [
    {
      id: 1,
      name: 'Indian Institute of Technology, Delhi',
      location: 'New Delhi, India',
      type: 'Engineering',
      ranking: 1,
      tuition: '₹2,00,000/year',
      acceptanceRate: '2%',
      rating: 4.8,
      image: '/placeholder.svg',
      specializations: ['Computer Science', 'Mechanical', 'Electrical'],
      facilities: ['Hostel', 'Library', 'Labs', 'Sports Complex']
    },
    {
      id: 2,
      name: 'Indian Institute of Management, Ahmedabad',
      location: 'Ahmedabad, Gujarat',
      type: 'Management',
      ranking: 1,
      tuition: '₹25,00,000/2 years',
      acceptanceRate: '1%',
      rating: 4.9,
      image: '/placeholder.svg',
      specializations: ['MBA', 'PGDM', 'Executive MBA'],
      facilities: ['Hostel', 'Library', 'Case Study Rooms', 'Industry Interface']
    },
    {
      id: 3,
      name: 'Massachusetts Institute of Technology',
      location: 'Cambridge, MA, USA',
      type: 'Engineering',
      ranking: 1,
      tuition: '$57,986/year',
      acceptanceRate: '4%',
      rating: 4.9,
      image: '/placeholder.svg',
      specializations: ['Computer Science', 'AI', 'Robotics', 'Aerospace'],
      facilities: ['Research Labs', 'Innovation Centers', 'Housing', 'Sports']
    },
    {
      id: 4,
      name: 'Stanford University',
      location: 'Stanford, CA, USA',
      type: 'Engineering & Management',
      ranking: 2,
      tuition: '$56,169/year',
      acceptanceRate: '3%',
      rating: 4.8,
      image: '/placeholder.svg',
      specializations: ['Computer Science', 'MBA', 'Engineering', 'Medicine'],
      facilities: ['Research Centers', 'Startup Incubator', 'Housing', 'Recreation']
    },
    {
      id: 5,
      name: 'BITS Pilani',
      location: 'Pilani, Rajasthan',
      type: 'Engineering',
      ranking: 15,
      tuition: '₹4,50,000/year',
      acceptanceRate: '8%',
      rating: 4.5,
      image: '/placeholder.svg',
      specializations: ['Computer Science', 'Electronics', 'Mechanical', 'Chemical'],
      facilities: ['Hostel', 'Central Library', 'Labs', 'Cultural Centers']
    },
    {
      id: 6,
      name: 'Indian School of Business',
      location: 'Hyderabad, Telangana',
      type: 'Management',
      ranking: 3,
      tuition: '₹35,00,000/year',
      acceptanceRate: '12%',
      rating: 4.7,
      image: '/placeholder.svg',
      specializations: ['MBA', 'Executive MBA', 'Management Programs'],
      facilities: ['Modern Campus', 'Industry Connect', 'Global Exchange', 'Hostel']
    }
  ];

  const filteredColleges = colleges
    .filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           college.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' || college.type.toLowerCase().includes(filterType.toLowerCase());
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'ranking':
          return a.ranking - b.ranking;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">EduGuide</span>
            </Link>
            <nav className="flex space-x-6">
              <Link to="/student-login" className="text-gray-600 hover:text-blue-600 transition-colors">
                Login
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/location-selection"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Location Selection
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Recommended Colleges for You
          </h1>
          <p className="text-gray-600">
            Based on your career interests and location preferences, here are the best colleges for you.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search colleges by name or location..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter */}
            <div className="flex gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="engineering">Engineering</option>
                <option value="management">Management</option>
                <option value="medical">Medical</option>
              </select>

              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="ranking">Sort by Ranking</option>
                <option value="name">Sort by Name</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredColleges.length} colleges
          </p>
        </div>

        {/* College Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredColleges.map((college) => (
            <div key={college.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {college.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{college.location}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        #{college.ranking} Ranking
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                        {college.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="font-medium">{college.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{college.tuition}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{college.acceptanceRate} acceptance rate</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Specializations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.specializations.map((spec, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Facilities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.facilities.map((facility, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Link
                    to={`/college-details/${college.id}`}
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                  <Link
                    to={`/college-registration/${college.id}`}
                    className="flex-1 border border-blue-600 text-blue-600 text-center py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No colleges found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeList;
