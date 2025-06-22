import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { GraduationCap, CheckCircle, Clock, ArrowRight, Award, BarChart3, Smile, Trophy } from 'lucide-react';

const TestCompletion = () => {
  const location = useLocation();
  const { score = 0, totalQuestions = 10, timeTaken = 0 } = location.state || {};

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getPerformanceMessage = () => {
    const percent = (score / totalQuestions) * 100;
    if (percent >= 90) return { msg: 'Outstanding!', icon: <Trophy className="h-8 w-8 text-yellow-500" /> };
    if (percent >= 75) return { msg: 'Great job!', icon: <Award className="h-8 w-8 text-green-500" /> };
    if (percent >= 50) return { msg: 'Good effort!', icon: <Smile className="h-8 w-8 text-blue-500" /> };
    return { msg: 'Keep practicing!', icon: <BarChart3 className="h-8 w-8 text-gray-500" /> };
  };

  const { msg, icon } = getPerformanceMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
        <div className="flex flex-col items-center mb-8">
          <GraduationCap className="h-12 w-12 text-blue-600 mb-2" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Test Completed!
          </h1>
          <p className="text-gray-600">Congratulations on finishing your aptitude assessment.</p>
        </div>

        <div className="flex flex-col items-center space-y-4 mb-8">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-7 w-7 text-green-500" />
            <span className="text-lg font-semibold text-gray-900">Score:</span>
            <span className="text-2xl font-bold text-blue-700">{score} / {totalQuestions}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="h-6 w-6 text-indigo-500" />
            <span className="text-lg font-semibold text-gray-900">Time Taken:</span>
            <span className="text-xl font-mono text-gray-700">{formatTime(timeTaken)}</span>
          </div>
        </div>

        <div className="flex flex-col items-center mb-8">
          {icon}
          <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-1">{msg}</h2>
          <p className="text-gray-600 max-w-md">
            {score === totalQuestions
              ? 'Perfect score! You have excellent aptitude skills.'
              : score >= totalQuestions * 0.75
                ? 'You performed very well. Keep up the great work!'
                : score >= totalQuestions * 0.5
                  ? 'You did well. Review your answers to improve further.'
                  : 'Don\'t worry! Practice makes perfect. Try again to improve your score.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/student-dashboard"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-xl font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Go to Dashboard
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/aptitude-test"
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 rounded-xl font-medium text-blue-700 bg-white hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Retake Test
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestCompletion;