import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  DollarSign, 
  Users, 
  Clock,
  ArrowRight,
  ArrowLeft,
  Building2,
  CheckCircle,
  X,
  Heart,
  HeartOff,
  Globe,
  Award,
  TrendingUp,
  BookOpen,
  Phone,
  Mail,
  ExternalLink,
  BarChart3,
  Calendar,
  BookOpenCheck,
  GraduationCap as GraduationCapIcon
} from 'lucide-react';

const CollegeSelection = () => {
  const [selectedColleges, setSelectedColleges] = useState([1, 3]); // Pre-selected for demo
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showComparison, setShowComparison] = useState(false);

  const locations = [
    { id: 'all', name: 'All Locations', flag: '🌍' },
    { id: 'mumbai', name: 'Mumbai, India', flag: '🇮🇳' },
    { id: 'bangalore', name: 'Bangalore, India', flag: '🇮🇳' },
    { id: 'delhi', name: 'Delhi, India', flag: '🇮🇳' },
    { id: 'newyork', name: 'New York, USA', flag: '🇺🇸' },
    { id: 'sanfrancisco', name: 'San Francisco, USA', flag: '🇺🇸' },
    { id: 'london', name: 'London, UK', flag: '🇬🇧' },
    { id: 'toronto', name: 'Toronto, Canada', flag: '🇨🇦' }
  ];

  const programs = [
    { id: 'all', name: 'All Programs', icon: '🎯' },
    { id: 'engineering', name: 'Engineering', icon: '⚙️' },
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'medicine', name: 'Medicine', icon: '🏥' },
    { id: 'arts', name: 'Arts & Design', icon: '🎨' },
    { id: 'science', name: 'Science', icon: '🔬' }
  ];

  const colleges = [
    {
      id: 1,
      name: 'IIT Bombay',
      location: 'mumbai',
      locationName: 'Mumbai, India',
      description: 'Premier engineering institute with world-class facilities and research opportunities.',
      programs: ['engineering', 'technology', 'science'],
      tuition: '$3,000 - $5,000',
      acceptanceRate: '2%',
      ranking: 1,
      students: 12000,
      established: 1958,
      website: 'https://www.iitb.ac.in',
      phone: '+91-22-2572-2545',
      email: 'info@iitb.ac.in',
      topPrograms: ['Computer Science', 'Mechanical Engineering', 'Electrical Engineering'],
      facilities: ['Research Labs', 'Library', 'Sports Complex', 'Hostels'],
      favorite: false,
      image: '🏛️',
      rating: 4.8,
      placementRate: '95%',
      avgSalary: '$85,000',
      researchFunding: '$50M',
      internationalStudents: '15%'
    },
    {
      id: 2,
      name: 'Stanford University',
      location: 'sanfrancisco',
      locationName: 'San Francisco, USA',
      description: 'World-renowned university known for innovation and entrepreneurship.',
      programs: ['engineering', 'technology', 'business', 'science'],
      tuition: '$55,000 - $60,000',
      acceptanceRate: '4%',
      ranking: 2,
      students: 17000,
      established: 1885,
      website: 'https://www.stanford.edu',
      phone: '+1-650-723-2300',
      email: 'admission@stanford.edu',
      topPrograms: ['Computer Science', 'Engineering', 'Business', 'Medicine'],
      facilities: ['Research Centers', 'Libraries', 'Sports Facilities', 'Dining'],
      favorite: false,
      image: '🌉',
      rating: 4.9,
      placementRate: '98%',
      avgSalary: '$120,000',
      researchFunding: '$1.1B',
      internationalStudents: '25%'
    },
    {
      id: 3,
      name: 'Imperial College London',
      location: 'london',
      locationName: 'London, UK',
      description: 'Leading science and engineering university in the heart of London.',
      programs: ['engineering', 'technology', 'science', 'medicine'],
      tuition: '£35,000 - £40,000',
      acceptanceRate: '14%',
      ranking: 3,
      students: 19000,
      established: 1907,
      website: 'https://www.imperial.ac.uk',
      phone: '+44-20-7589-5111',
      email: 'admissions@imperial.ac.uk',
      topPrograms: ['Engineering', 'Medicine', 'Business', 'Science'],
      facilities: ['Research Labs', 'Library', 'Sports Center', 'Student Union'],
      favorite: false,
      image: '🇬🇧',
      rating: 4.7,
      placementRate: '96%',
      avgSalary: '$95,000',
      researchFunding: '$400M',
      internationalStudents: '60%'
    },
    {
      id: 4,
      name: 'BITS Pilani',
      location: 'mumbai',
      locationName: 'Mumbai, India',
      description: 'Private engineering institute with excellent industry connections.',
      programs: ['engineering', 'technology', 'business'],
      tuition: '$4,000 - $6,000',
      acceptanceRate: '8%',
      ranking: 4,
      students: 15000,
      established: 1964,
      website: 'https://www.bits-pilani.ac.in',
      phone: '+91-1596-242210',
      email: 'admission@bits-pilani.ac.in',
      topPrograms: ['Computer Science', 'Mechanical', 'Chemical Engineering'],
      facilities: ['Labs', 'Library', 'Sports', 'Hostels'],
      favorite: false,
      image: '🏛️',
      rating: 4.6,
      placementRate: '92%',
      avgSalary: '$75,000',
      researchFunding: '$25M',
      internationalStudents: '8%'
    },
    {
      id: 5,
      name: 'MIT',
      location: 'newyork',
      locationName: 'New York, USA',
      description: 'Massachusetts Institute of Technology - global leader in technology and innovation.',
      programs: ['engineering', 'technology', 'science'],
      tuition: '$55,000 - $60,000',
      acceptanceRate: '7%',
      ranking: 5,
      students: 11500,
      established: 1861,
      website: 'https://www.mit.edu',
      phone: '+1-617-253-1000',
      email: 'admissions@mit.edu',
      topPrograms: ['Engineering', 'Computer Science', 'Physics', 'Mathematics'],
      facilities: ['Research Labs', 'Libraries', 'Museums', 'Sports'],
      favorite: false,
      image: '🎓',
      rating: 4.9,
      placementRate: '99%',
      avgSalary: '$130,000',
      researchFunding: '$1.8B',
      internationalStudents: '30%'
    },
    {
      id: 6,
      name: 'University of Toronto',
      location: 'toronto',
      locationName: 'Toronto, Canada',
      description: 'Canada\'s leading university with diverse programs and research opportunities.',
      programs: ['engineering', 'technology', 'business', 'science', 'arts'],
      tuition: 'C$45,000 - C$50,000',
      acceptanceRate: '43%',
      ranking: 6,
      students: 95000,
      established: 1827,
      website: 'https://www.utoronto.ca',
      phone: '+1-416-978-2011',
      email: 'admissions@utoronto.ca',
      topPrograms: ['Engineering', 'Business', 'Medicine', 'Arts & Science'],
      facilities: ['Libraries', 'Research Centers', 'Sports', 'Student Services'],
      favorite: false,
      image: '🍁',
      rating: 4.5,
      placementRate: '89%',
      avgSalary: '$80,000',
      researchFunding: '$1.2B',
      internationalStudents: '20%'
    }
  ];

  const toggleSelection = (collegeId) => {
    setSelectedColleges(prev => 
      prev.includes(collegeId) 
        ? prev.filter(id => id !== collegeId)
        : [...prev, collegeId]
    );
  };

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || college.location === selectedLocation;
    const matchesProgram = selectedProgram === 'all' || college.programs.includes(selectedProgram);
    
    // Price range filtering
    let matchesPrice = true;
    if (priceRange === 'low') {
      matchesPrice = college.tuition.includes('$3,000') || college.tuition.includes('$4,000') || college.tuition.includes('$5,000');
    } else if (priceRange === 'medium') {
      matchesPrice = college.tuition.includes('$6,000') || college.tuition.includes('$7,000') || college.tuition.includes('$8,000');
    } else if (priceRange === 'high') {
      matchesPrice = college.tuition.includes('$50,000') || college.tuition.includes('$55,000') || college.tuition.includes('£35,000');
    }
    
    return matchesSearch && matchesLocation && matchesProgram && matchesPrice;
  });

  const selectedCollegesData = colleges.filter(college => selectedColleges.includes(college.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg group-hover:scale-110 transition-transform">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  EduGuide
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Your College Search Partner</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link 
                to="/aptitude-test" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Select Your Top Colleges
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your preferred colleges and compare them side by side. 
            We'll help you make the best decision for your future.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search colleges..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              >
                {locations.map(location => (
                  <option key={location.id} value={location.id}>
                    {location.flag} {location.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Program Filter */}
            <div>
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              >
                {programs.map(program => (
                  <option key={program.id} value={program.id}>
                    {program.icon} {program.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              >
                <option value="all">💰 All Prices</option>
                <option value="low">💵 Low ($3K-$5K)</option>
                <option value="medium">💵💵 Medium ($6K-$10K)</option>
                <option value="high">💵💵💵 High ($50K+)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Selected Colleges Summary */}
        {selectedColleges.length > 0 && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Selected Colleges ({selectedColleges.length})
              </h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowComparison(!showComparison)}
                  className={`inline-flex items-center px-4 py-2 border rounded-xl font-medium transition-all duration-200 ${
                    showComparison
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  {showComparison ? 'Hide Comparison' : 'Compare Colleges'}
                </button>
                <button
                  onClick={() => setSelectedColleges([])}
                  className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear All
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedCollegesData.map(college => (
                <span
                  key={college.id}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {college.image} {college.name}
                  <button
                    onClick={() => toggleSelection(college.id)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Table */}
        {showComparison && selectedColleges.length > 1 && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100 overflow-x-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">College Comparison</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Criteria</th>
                  {selectedCollegesData.map(college => (
                    <th key={college.id} className="text-center py-3 px-4 font-medium text-gray-900">
                      {college.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700">Location</td>
                  {selectedCollegesData.map(college => (
                    <td key={college.id} className="py-3 px-4 text-center text-gray-600">
                      {college.locationName}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700">Tuition</td>
                  {selectedCollegesData.map(college => (
                    <td key={college.id} className="py-3 px-4 text-center text-gray-600">
                      {college.tuition}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700">Acceptance Rate</td>
                  {selectedCollegesData.map(college => (
                    <td key={college.id} className="py-3 px-4 text-center text-gray-600">
                      {college.acceptanceRate}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700">Rating</td>
                  {selectedCollegesData.map(college => (
                    <td key={college.id} className="py-3 px-4 text-center text-gray-600">
                      <div className="flex items-center justify-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        {college.rating}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700">Placement Rate</td>
                  {selectedCollegesData.map(college => (
                    <td key={college.id} className="py-3 px-4 text-center text-gray-600">
                      {college.placementRate}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700">Avg Salary</td>
                  {selectedCollegesData.map(college => (
                    <td key={college.id} className="py-3 px-4 text-center text-gray-600">
                      {college.avgSalary}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-700">Students</td>
                  {selectedCollegesData.map(college => (
                    <td key={college.id} className="py-3 px-4 text-center text-gray-600">
                      {college.students.toLocaleString()}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredColleges.map(college => (
            <div
              key={college.id}
              className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                selectedColleges.includes(college.id)
                  ? 'border-blue-500 shadow-blue-100'
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{college.image}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {college.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{college.locationName}</span>
                        <span className="flex items-center text-sm text-yellow-600">
                          <Star className="h-4 w-4 fill-current" />
                          {college.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSelection(college.id)}
                    className={`p-2 rounded-full transition-colors ${
                      selectedColleges.includes(college.id)
                        ? 'text-blue-500 bg-blue-50 hover:bg-blue-100'
                        : 'text-gray-400 hover:text-blue-500 hover:bg-blue-50'
                    }`}
                  >
                    {selectedColleges.includes(college.id) ? (
                      <CheckCircle className="h-5 w-5 fill-current" />
                    ) : (
                      <CheckCircle className="h-5 w-5" />
                    )}
                  </button>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {college.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">{college.tuition}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-700">{college.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-700">{college.acceptanceRate} acceptance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-700">Rank #{college.ranking}</span>
                  </div>
                </div>

                {/* Additional Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium text-gray-900">{college.placementRate}</div>
                    <div className="text-xs text-gray-500">Placement</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium text-gray-900">{college.avgSalary}</div>
                    <div className="text-xs text-gray-500">Avg Salary</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium text-gray-900">{college.internationalStudents}</div>
                    <div className="text-xs text-gray-500">Int'l Students</div>
                  </div>
                </div>

                {/* Top Programs */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Top Programs</h4>
                  <div className="flex flex-wrap gap-1">
                    {college.topPrograms.map((program, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Globe className="h-4 w-4" />
                    <a href={college.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      Visit Website
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>{college.phone}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => toggleSelection(college.id)}
                  className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                    selectedColleges.includes(college.id)
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedColleges.includes(college.id) ? (
                    <span className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Selected
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Add to Selection
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No colleges found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters to find more colleges.
            </p>
          </div>
        )}

        {/* Continue Button */}
        {selectedColleges.length > 0 && (
          <div className="mt-12 text-center">
            <Link
              to="/aptitude-test"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Continue with {selectedColleges.length} Selected College{selectedColleges.length !== 1 ? 's' : ''}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeSelection; 