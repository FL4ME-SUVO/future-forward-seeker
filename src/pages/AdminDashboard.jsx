import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [testResults, setTestResults] = useState([]);
  const [activeTab, setActiveTab] = useState('users');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [usersRes, questionsRes, resultsRes] = await Promise.all([
        axios.get('/api/users'),
        axios.get('/api/aptitude-questions'),
        axios.get('/api/test-results')
      ]);
      
      setUsers(usersRes.data);
      setQuestions(questionsRes.data);
      setTestResults(resultsRes.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`/api/users/${userId}`);
        setUsers(users.filter(user => user.id !== userId));
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const handleDeleteQuestion = async (questionId) => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      try {
        await axios.delete(`/api/aptitude-questions/${questionId}`);
        setQuestions(questions.filter(q => q.id !== questionId));
      } catch (error) {
        console.error('Error deleting question:', error);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
        
        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('users')}
              className={`px-6 py-3 font-medium ${
                activeTab === 'users'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Users ({users.length})
            </button>
            <button
              onClick={() => setActiveTab('questions')}
              className={`px-6 py-3 font-medium ${
                activeTab === 'questions'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Questions ({questions.length})
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`px-6 py-3 font-medium ${
                activeTab === 'results'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Test Results ({testResults.length})
            </button>
          </div>
        </div>

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">User Management</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Role</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b">
                      <td className="px-4 py-2">{user.name}</td>
                      <td className="px-4 py-2">{user.email}</td>
                      <td className="px-4 py-2">{user.role}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Questions Tab */}
        {activeTab === 'questions' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Question Management</h2>
            <div className="space-y-4">
              {questions.map((question) => (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 mb-2">{question.question}</h3>
                      <div className="space-y-1">
                        {question.options.map((option, index) => (
                          <div key={index} className="text-sm text-gray-600">
                            {String.fromCharCode(65 + index)}. {option}
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 text-sm text-green-600">
                        Correct Answer: {question.correctAnswer}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteQuestion(question.id)}
                      className="text-red-600 hover:text-red-800 ml-4"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Test Results Tab */}
        {activeTab === 'results' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Test Results</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">User</th>
                    <th className="px-4 py-2 text-left">Score</th>
                    <th className="px-4 py-2 text-left">Total Questions</th>
                    <th className="px-4 py-2 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {testResults.map((result) => (
                    <tr key={result.id} className="border-b">
                      <td className="px-4 py-2">{result.userName}</td>
                      <td className="px-4 py-2">{result.score}</td>
                      <td className="px-4 py-2">{result.totalQuestions}</td>
                      <td className="px-4 py-2">{new Date(result.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;