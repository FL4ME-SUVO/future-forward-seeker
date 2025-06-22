import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Cpu, Calculator, Stethoscope, Paintbrush, Briefcase, ArrowRight } from 'lucide-react';

const CareerSelection = () => {
  const [selectedCareer, setSelectedCareer] = useState('');

  const careerOptions = [
    {
      id: 'engineering',
      title: 'Engineering',
      description: 'Computer Science, Mechanical, Electrical, Civil, and more',
      icon: Cpu,
      color: 'bg-blue-100 text-blue-600',
      border: 'border-blue-200 hover:border-blue-400'
    },
    {
      id: 'management',
      title: 'Management',
      description: 'MBA, BBA, Finance, Marketing, Operations',
      icon: Briefcase,
      color: 'bg-green-100 text-green-600',
      border: 'border-green-200 hover:border-green-400'
    },
    {
      id: 'medical',
      title: 'Medical',
      description: 'MBBS, BDS, Pharmacy, Nursing, Allied Health',
      icon: Stethoscope,
      color: 'bg-red-100 text-red-600',
      border: 'border-red-200 hover:border-red-400'
    },
    {
      id: 'design',
      title: 'Design & Arts',
      description: 'Fashion Design, Graphic Design, Architecture',
      icon: Paintbrush,
      color: 'bg-purple-100 text-purple-600',
      border: 'border-purple-200 hover:border-purple-400'
    },
    {
      id: 'science',
      title: 'Pure Sciences',
      description: 'Physics, Chemistry, Mathematics, Biology',
      icon: Calculator,
      color: 'bg-orange-100 text-orange-600',
      border: 'border-orange-200 hover:border-orange-400'
    }
  ];

  const handleCareerSelect = (careerId) => {
    setSelectedCareer(careerId);
  };

  const handleContinue = () => {
    if (selectedCareer) {
      console.log('Selected career:', selectedCareer);
      // Navigate to location selection
    }
  };

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
        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <span className="ml-2 text-sm font-medium text-blue-600">Career Selection</span>
              </div>
              <div className="w-8 h-px bg-gray-300"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <span className="ml-2 text-sm font-medium text-gray-500">Location</span>
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

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Career Path
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select your area of interest to get personalized college recommendations and career guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {careerOptions.map((option) => {
              const Icon = option.icon;
              const isSelected = selectedCareer === option.id;
              
              return (
                <div
                  key={option.id}
                  onClick={() => handleCareerSelect(option.id)}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    isSelected 
                      ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' 
                      : `bg-white ${option.border}`
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg ${option.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {option.description}
                  </p>
                  {isSelected && (
                    <div className="mt-4 flex items-center text-blue-600">
                      <span className="text-sm font-medium">Selected</span>
                      <div className="ml-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {selectedCareer && (
            <div className="text-center">
              <Link
                to="/location-selection"
                onClick={handleContinue}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Continue to Location Selection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          )}

          {!selectedCareer && (
            <div className="text-center">
              <p className="text-gray-500">Please select a career path to continue</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerSelection; 