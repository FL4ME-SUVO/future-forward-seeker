import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CollegeDashboard = () => {
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('collegeToken');
    if (!token) {
      navigate('/college-login');
      return;
    }
    fetch('/api/colleges/me', {
      headers: { 'Authorization': 'Bearer ' + token }
    })
      .then(res => res.json())
      .then(data => {
        if (data && !data.error) setCollege(data);
        else {
          setError(data.error || 'Failed to load college data');
          localStorage.removeItem('collegeToken');
          localStorage.removeItem('college');
          navigate('/college-login');
        }
      })
      .catch(() => {
        setError('Network error');
        localStorage.removeItem('collegeToken');
        localStorage.removeItem('college');
        navigate('/college-login');
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('collegeToken');
    localStorage.removeItem('college');
    navigate('/college-login');
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="bg-white/90 rounded-xl shadow-lg p-8 w-full max-w-2xl mt-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Welcome, {college?.name}!</h2>
        <div className="mb-4 text-gray-700">
          <div><strong>Email:</strong> {college?.email}</div>
          <div><strong>Country:</strong> {college?.country}</div>
          <div><strong>Description:</strong> {college?.description}</div>
          <div><strong>Created At:</strong> {new Date(college?.createdAt).toLocaleString()}</div>
        </div>
        <button onClick={handleLogout} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Logout</button>
      </div>
    </div>
  );
};

export default CollegeDashboard; 