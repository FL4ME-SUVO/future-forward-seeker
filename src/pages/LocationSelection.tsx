
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Globe, ArrowRight, ChevronLeft } from 'lucide-react';

const LocationSelection = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const locationOptions = [
    {
      id: 'india',
      title: 'India',
      description: 'Explore engineering and management colleges across India',
      features: [
        'IITs, NITs, and top private colleges',
        'State and central universities',
        'Affordable education options',
        'Rich cultural diversity'
      ],
      icon: '🇮🇳',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      id: 'abroad',
      title: 'International',
      description: 'Discover universities and colleges around the world',
      features: [
        'Top global universities',
        'Diverse study programs',
        'International exposure',
        'Global career opportunities'
      ],
      icon: '🌍',
      gradient: 'from-blue-400 to-purple-500'
    }
  ];

  const popularCountries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 
    'Germany', 'Netherlands', 'Singapore', 'New Zealand'
  ];

  const popularStates = [
    'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Delhi', 
    'Uttar Pradesh', 'Gujarat', 'West Bengal', 'Rajasthan'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  ✓
                </div>
                <span className="ml-2 text-sm font-medium text-green-600">Career Selection</span>
              </div>
              <div className="w-8 h-px bg-green-300"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <span className="ml-2 text-sm font-medium text-blue-600">Location Selection</span>
              </div>
              <div className="w-8 h-px bg-gray-300"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <span className="ml-2 text-sm font-medium text-gray-500">Colleges</span>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mb-6">
            <Link
              to="/career-selection"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Back to Career Selection
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Where Do You Want to Study?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred study destination to get targeted college recommendations and location-specific guidance.
            </p>
          </div>

          {/* Main Location Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {locationOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => setSelectedLocation(option.id)}
                className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedLocation === option.id
                    ? 'ring-4 ring-blue-300 shadow-2xl'
                    : 'shadow-lg hover:shadow-xl'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-10 rounded-2xl`}></div>
                <div className="relative">
                  <div className="text-6xl mb-4 text-center">
                    {option.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {option.description}
                  </p>
                  <ul className="space-y-2">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {selectedLocation === option.id && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center text-blue-700">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span className="font-medium">Selected Destination</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Popular Destinations */}
          {selectedLocation && (
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Globe className="h-6 w-6 mr-2 text-blue-600" />
                Popular {selectedLocation === 'india' ? 'States' : 'Countries'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {(selectedLocation === 'india' ? popularStates : popularCountries).map((place) => (
                  <div
                    key={place}
                    className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer text-center"
                  >
                    <span className="text-sm font-medium text-gray-700">{place}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Continue Button */}
          {selectedLocation && (
            <div className="text-center">
              <Link
                to="/college-list"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg"
              >
                Find Colleges
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </div>
          )}

          {!selectedLocation && (
            <div className="text-center">
              <p className="text-gray-500 text-lg">Please select your preferred study destination to continue</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationSelection;
