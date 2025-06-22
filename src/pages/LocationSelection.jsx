import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Search, 
  MapPin, 
  Globe, 
  Building2, 
  Users, 
  Star,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  X,
  Heart,
  HeartOff,
  Filter,
  TrendingUp,
  DollarSign,
  Clock
} from 'lucide-react';

const LocationSelection = () => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [showFavorites, setShowFavorites] = useState(false);

  const countries = [
    { id: 'all', name: 'All Countries', flag: '🌍' },
    { id: 'india', name: 'India', flag: '🇮🇳' },
    { id: 'usa', name: 'United States', flag: '🇺🇸' },
    { id: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
    { id: 'canada', name: 'Canada', flag: '🇨🇦' },
    { id: 'australia', name: 'Australia', flag: '🇦🇺' },
    { id: 'germany', name: 'Germany', flag: '🇩🇪' },
    { id: 'france', name: 'France', flag: '🇫🇷' },
    { id: 'singapore', name: 'Singapore', flag: '🇸🇬' },
    { id: 'japan', name: 'Japan', flag: '🇯🇵' }
  ];

  const locations = [
    {
      id: 1,
      name: 'Mumbai',
      country: 'india',
      countryName: 'India',
      description: 'Financial capital with top engineering and business schools',
      colleges: 45,
      avgTuition: '$3,000 - $8,000',
      livingCost: '$400 - $800/month',
      climate: 'Tropical',
      language: 'English, Hindi, Marathi',
      topColleges: ['IIT Bombay', 'BITS Pilani', 'NMIMS'],
      favorite: false,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400"
    },
    {
      id: 2,
      name: 'Bangalore',
      country: 'india',
      countryName: 'India',
      description: 'Tech hub with excellent IT and engineering programs',
      colleges: 38,
      avgTuition: '$2,500 - $7,000',
      livingCost: '$350 - $700/month',
      climate: 'Moderate',
      language: 'English, Kannada',
      topColleges: ['IISc Bangalore', 'BMS College', 'RVCE'],
      favorite: false,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9a1?w=400"
    },
    {
      id: 3,
      name: 'New York',
      country: 'usa',
      countryName: 'United States',
      description: 'Global financial center with world-class universities',
      colleges: 120,
      avgTuition: '$45,000 - $60,000',
      livingCost: '$1,500 - $3,000/month',
      climate: 'Continental',
      language: 'English',
      topColleges: ['NYU', 'Columbia', 'Cornell'],
      favorite: false,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400"
    },
    {
      id: 4,
      name: 'San Francisco',
      country: 'usa',
      countryName: 'United States',
      description: 'Silicon Valley tech hub with innovative programs',
      colleges: 85,
      avgTuition: '$50,000 - $65,000',
      livingCost: '$2,000 - $4,000/month',
      climate: 'Mediterranean',
      language: 'English',
      topColleges: ['Stanford', 'UC Berkeley', 'UCSF'],
      favorite: false,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400"
    },
    {
      id: 5,
      name: 'London',
      country: 'uk',
      countryName: 'United Kingdom',
      description: 'Historic city with prestigious universities',
      colleges: 95,
      avgTuition: '£20,000 - £35,000',
      livingCost: '£1,200 - £2,500/month',
      climate: 'Temperate',
      language: 'English',
      topColleges: ['Imperial College', 'UCL', 'LSE'],
      favorite: false,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9a1?w=400"
    },
    {
      id: 6,
      name: 'Toronto',
      country: 'canada',
      countryName: 'Canada',
      description: 'Diverse city with excellent education opportunities',
      colleges: 65,
      avgTuition: 'C$25,000 - C$40,000',
      livingCost: 'C$1,000 - C$2,000/month',
      climate: 'Continental',
      language: 'English, French',
      topColleges: ['University of Toronto', 'York University', 'Ryerson'],
      favorite: false,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9a1?w=400"
    },
    {
      id: 7,
      name: 'Melbourne',
      country: 'australia',
      countryName: 'Australia',
      description: 'Cultural capital with high-quality education',
      colleges: 42,
      avgTuition: 'A$30,000 - A$45,000',
      livingCost: 'A$1,200 - A$2,500/month',
      climate: 'Oceanic',
      language: 'English',
      topColleges: ['University of Melbourne', 'Monash', 'RMIT'],
      favorite: false,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400"
    },
    {
      id: 8,
      name: 'Berlin',
      country: 'germany',
      countryName: 'Germany',
      description: 'Innovative city with affordable education',
      colleges: 38,
      avgTuition: '€0 - €1,500',
      livingCost: '€800 - €1,500/month',
      climate: 'Continental',
      language: 'German, English',
      topColleges: ['TU Berlin', 'Humboldt University', 'Free University'],
      favorite: false,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400"
    },
    {
      id: 9,
      name: 'Paris',
      country: 'france',
      countryName: 'France',
      description: 'Cultural hub with prestigious institutions',
      colleges: 52,
      avgTuition: '€170 - €380',
      livingCost: '€1,000 - €2,000/month',
      climate: 'Oceanic',
      language: 'French, English',
      topColleges: ['Sorbonne', 'École Polytechnique', 'HEC Paris'],
      favorite: false,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400"
    },
    {
      id: 10,
      name: 'Singapore',
      country: 'singapore',
      countryName: 'Singapore',
      description: 'Modern city-state with world-class education',
      colleges: 28,
      avgTuition: 'S$25,000 - S$40,000',
      livingCost: 'S$1,200 - S$2,500/month',
      climate: 'Tropical',
      language: 'English, Mandarin, Malay, Tamil',
      topColleges: ['NUS', 'NTU', 'SMU'],
      favorite: false,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9a1?w=400"
    },
    {
      id: 11,
      name: 'Tokyo',
      country: 'japan',
      countryName: 'Japan',
      description: 'High-tech city with excellent engineering programs',
      colleges: 89,
      avgTuition: '¥535,800 - ¥1,000,000',
      livingCost: '¥100,000 - ¥200,000/month',
      climate: 'Humid subtropical',
      language: 'Japanese, English',
      topColleges: ['University of Tokyo', 'Waseda', 'Keio'],
      favorite: false,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400"
    },
    {
      id: 12,
      name: 'Delhi',
      country: 'india',
      countryName: 'India',
      description: 'Capital city with diverse educational opportunities',
      colleges: 52,
      avgTuition: '$2,000 - $6,000',
      livingCost: '$300 - $600/month',
      climate: 'Semi-arid',
      language: 'English, Hindi',
      topColleges: ['IIT Delhi', 'Delhi University', 'JNU'],
      favorite: false,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400"
    }
  ];

  const toggleFavorite = (locationId) => {
    setSelectedLocations(prev => 
      prev.includes(locationId) 
        ? prev.filter(id => id !== locationId)
        : [...prev, locationId]
    );
  };

  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || location.country === selectedCountry;
    const matchesFavorites = !showFavorites || selectedLocations.includes(location.id);
    
    return matchesSearch && matchesCountry && matchesFavorites;
  });

  const selectedLocationsData = locations.filter(location => selectedLocations.includes(location.id));

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
                to="/college-list" 
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
            Choose Your Study Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the cities and countries where you'd like to study. 
            We'll help you find the best colleges in your preferred locations.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search cities or countries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>

            {/* Country Filter */}
            <div className="flex-shrink-0">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              >
                {countries.map(country => (
                  <option key={country.id} value={country.id}>
                    {country.flag} {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Favorites Toggle */}
            <div className="flex-shrink-0">
              <button
                onClick={() => setShowFavorites(!showFavorites)}
                className={`inline-flex items-center px-4 py-3 border rounded-xl font-medium transition-all duration-200 ${
                  showFavorites
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                }`}
              >
                {showFavorites ? (
                  <>
                    <Heart className="h-4 w-4 mr-2" />
                    Favorites Only
                  </>
                ) : (
                  <>
                    <HeartOff className="h-4 w-4 mr-2" />
                    Show All
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Selected Locations Summary */}
        {selectedLocations.length > 0 && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Selected Locations ({selectedLocations.length})
              </h3>
              <button
                onClick={() => setSelectedLocations([])}
                className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
              >
                <X className="h-4 w-4 mr-1" />
                Clear All
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedLocationsData.map(location => (
                <span
                  key={location.id}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {location.image} {location.name}, {location.countryName}
                  <button
                    onClick={() => toggleFavorite(location.id)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map(location => (
            <div
              key={location.id}
              className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                selectedLocations.includes(location.id)
                  ? 'border-blue-500 shadow-blue-100'
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{location.image}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {location.name}
                      </h3>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {location.countryName}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(location.id)}
                    className={`p-2 rounded-full transition-colors ${
                      selectedLocations.includes(location.id)
                        ? 'text-red-500 bg-red-50 hover:bg-red-100'
                        : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                    }`}
                  >
                    {selectedLocations.includes(location.id) ? (
                      <Heart className="h-5 w-5 fill-current" />
                    ) : (
                      <Heart className="h-5 w-5" />
                    )}
                  </button>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {location.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-700">{location.colleges} colleges</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">{location.avgTuition}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-700">{location.livingCost}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-700">{location.climate}</span>
                  </div>
                </div>

                {/* Top Colleges */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Top Colleges</h4>
                  <div className="space-y-1">
                    {location.topColleges.slice(0, 2).map((college, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <Star className="h-3 w-3 text-yellow-400 mr-1" />
                        {college}
                      </div>
                    ))}
                    {location.topColleges.length > 2 && (
                      <div className="text-xs text-gray-500">
                        +{location.topColleges.length - 2} more colleges
                      </div>
                    )}
                  </div>
                </div>

                {/* Language */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">Languages</h4>
                  <p className="text-xs text-gray-600">{location.language}</p>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => toggleFavorite(location.id)}
                  className={`w-full py-2 px-4 rounded-xl font-medium transition-all duration-200 ${
                    selectedLocations.includes(location.id)
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedLocations.includes(location.id) ? (
                    <span className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Selected
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Heart className="h-4 w-4 mr-2" />
                      Add to Selection
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredLocations.length === 0 && (
          <div className="text-center py-12">
            <Globe className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No locations found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters to find more locations.
            </p>
          </div>
        )}

        {/* Continue Button */}
        {selectedLocations.length > 0 && (
          <div className="mt-12 text-center">
            <Link
              to="/college-list"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Continue with {selectedLocations.length} Selected Location{selectedLocations.length !== 1 ? 's' : ''}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSelection; 