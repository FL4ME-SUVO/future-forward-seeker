import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Clock, 
  CheckCircle, 
  ArrowLeft, 
  ArrowRight, 
  Brain, 
  Calculator,
  BookOpen,
  Target,
  AlertCircle,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

const AptitudeTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const navigate = useNavigate();

  // Sample aptitude test questions
  const questions = [
    {
      id: 1,
      type: 'numerical',
      question: 'If a train travels 120 km in 2 hours, what is its speed in km/h?',
      options: ['40 km/h', '50 km/h', '60 km/h', '70 km/h'],
      correct: '60 km/h',
      explanation: 'Speed = Distance ÷ Time = 120 km ÷ 2 hours = 60 km/h'
    },
    {
      id: 2,
      type: 'logical',
      question: 'Complete the sequence: 2, 4, 8, 16, __',
      options: ['24', '32', '30', '28'],
      correct: '32',
      explanation: 'Each number is multiplied by 2: 2×2=4, 4×2=8, 8×2=16, 16×2=32'
    },
    {
      id: 3,
      type: 'verbal',
      question: 'Choose the word that best completes the analogy: Book is to Reading as Fork is to __',
      options: ['Eating', 'Cooking', 'Kitchen', 'Food'],
      correct: 'Eating',
      explanation: 'A book is used for reading, just as a fork is used for eating'
    },
    {
      id: 4,
      type: 'numerical',
      question: 'If 15% of a number is 45, what is the number?',
      options: ['200', '250', '300', '350'],
      correct: '300',
      explanation: '15% = 45, so 100% = 45 ÷ 0.15 = 300'
    },
    {
      id: 5,
      type: 'logical',
      question: 'If all roses are flowers and some flowers are red, then:',
      options: [
        'All roses are red',
        'Some roses are red',
        'No roses are red',
        'Cannot be determined'
      ],
      correct: 'Cannot be determined',
      explanation: 'The given statements don\'t provide enough information to determine the relationship between roses and red color'
    },
    {
      id: 6,
      type: 'verbal',
      question: 'Select the word that is most opposite in meaning to "BENEVOLENT":',
      options: ['Kind', 'Generous', 'Malevolent', 'Charitable'],
      correct: 'Malevolent',
      explanation: 'Benevolent means kind and generous, while malevolent means having evil intentions'
    },
    {
      id: 7,
      type: 'numerical',
      question: 'A rectangle has a length of 8 cm and width of 6 cm. What is its area?',
      options: ['14 cm²', '28 cm²', '48 cm²', '56 cm²'],
      correct: '48 cm²',
      explanation: 'Area = Length × Width = 8 cm × 6 cm = 48 cm²'
    },
    {
      id: 8,
      type: 'logical',
      question: 'Which figure comes next in the pattern: ○, □, △, ○, □, __',
      options: ['○', '□', '△', '◇'],
      correct: '△',
      explanation: 'The pattern repeats: ○, □, △, so the next figure is △'
    },
    {
      id: 9,
      type: 'verbal',
      question: 'Choose the correct spelling:',
      options: ['Accomodate', 'Accommodate', 'Acommodate', 'Accomadate'],
      correct: 'Accommodate',
      explanation: "Accommodate has double 'm' and double 'c'"
    },
    {
      id: 10,
      type: 'numerical',
      question: 'If 3 workers can complete a task in 12 days, how many days will 4 workers take?',
      options: ['8 days', '9 days', '10 days', '12 days'],
      correct: '9 days',
      explanation: 'More workers = less time. 3×12 = 4×x, so x = 9 days'
    }
  ];

  useEffect(() => {
    let timer;
    if (isTestStarted && !isPaused && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            submitTest();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTestStarted, isPaused, timeLeft]);

  const handleAnswerSelect = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTest = () => {
    setIsTestStarted(true);
    setShowInstructions(false);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const submitTest = () => {
    const score = calculateScore();
    navigate('/test-completion', { 
      state: { 
        score, 
        totalQuestions: questions.length,
        answers,
        timeTaken: 1800 - timeLeft
      } 
    });
  };

  const calculateScore = () => {
    let correct = 0;
    Object.keys(answers).forEach(questionId => {
      const question = questions.find(q => q.id === parseInt(questionId));
      if (question && answers[questionId] === question.correct) {
        correct++;
      }
    });
    return correct;
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const getQuestionTypeIcon = (type) => {
    switch (type) {
      case 'numerical': return <Calculator className="h-5 w-5" />;
      case 'logical': return <Brain className="h-5 w-5" />;
      case 'verbal': return <BookOpen className="h-5 w-5" />;
      default: return <Target className="h-5 w-5" />;
    }
  };

  const getQuestionTypeColor = (type) => {
    switch (type) {
      case 'numerical': return 'text-blue-600 bg-blue-100';
      case 'logical': return 'text-purple-600 bg-purple-100';
      case 'verbal': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (showInstructions) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg group-hover:scale-110 transition-transform">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  EduGuide
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Your College Search Partner</p>
              </div>
            </Link>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Aptitude Assessment
            </h2>
            <p className="text-xl text-gray-600">
              Test your skills and discover your strengths
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <Brain className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Test Instructions</h3>
              <p className="text-gray-600">Please read the instructions carefully before starting</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Time Limit</h4>
                    <p className="text-sm text-gray-600">30 minutes for 10 questions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Question Types</h4>
                    <p className="text-sm text-gray-600">Numerical, Logical, and Verbal</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <ArrowLeft className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Navigation</h4>
                    <p className="text-sm text-gray-600">You can go back and review answers</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Auto-Submit</h4>
                    <p className="text-sm text-gray-600">Test submits automatically when time runs out</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">Important Notes:</h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Ensure you have a stable internet connection</li>
                  <li>• Don't refresh the page during the test</li>
                  <li>• Answer all questions to get accurate results</li>
                  <li>• You can pause the test if needed</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={startTest}
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Play className="h-5 w-5 mr-2" />
                Start Test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
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
                <p className="text-xs text-gray-500 -mt-1">Aptitude Test</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={togglePause}
                className={`inline-flex items-center px-4 py-2 border rounded-xl font-medium transition-all duration-200 ${
                  isPaused
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                }`}
              >
                {isPaused ? (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Resume
                  </>
                ) : (
                  <>
                    <Pause className="h-4 w-4 mr-2" />
                    Pause
                  </>
                )}
              </button>
              
              <div className="text-center">
                <div className="text-sm text-gray-600">Time Remaining</div>
                <div className={`text-xl font-mono font-bold ${timeLeft < 300 ? 'text-red-600' : 'text-gray-900'}`}>
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Question {currentQuestionIndex + 1} of {questions.length}
              </h2>
              <p className="text-sm text-gray-600">
                {answeredCount} of {questions.length} questions answered
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Progress</div>
              <div className="text-lg font-semibold text-blue-600">
                {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
              </div>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        {currentQuestion && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className={`p-2 rounded-lg ${getQuestionTypeColor(currentQuestion.type)}`}>
                {getQuestionTypeIcon(currentQuestion.type)}
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  {currentQuestion.type} Reasoning
                </h3>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed">
              {currentQuestion.question}
            </h2>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <label 
                  key={index} 
                  className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
                    answers[currentQuestion.id] === option
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={option}
                    checked={answers[currentQuestion.id] === option}
                    onChange={() => handleAnswerSelect(currentQuestion.id, option)}
                    className="mr-4 h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 font-medium">{option}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </button>
            
            <div className="flex space-x-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200 ${
                    index === currentQuestionIndex
                      ? 'bg-blue-600 text-white'
                      : answers[questions[index]?.id]
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {currentQuestionIndex === questions.length - 1 ? (
              <button
                onClick={submitTest}
                className="inline-flex items-center px-8 py-3 border border-transparent rounded-xl font-medium text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105"
              >
                Submit Test
                <CheckCircle className="h-4 w-4 ml-2" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-xl font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
              >
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AptitudeTest;