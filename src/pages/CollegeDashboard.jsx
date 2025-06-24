import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Building, Mail, Globe, Star, Trophy, Users, LogOut, Settings, Bell, GraduationCap, ArrowLeft, Camera, Phone, Globe as GlobeIcon, Facebook, Instagram, Twitter, MapPin, Image as ImageIcon } from 'lucide-react';

const statsMock = [
  { label: 'Ranking', value: '12', icon: Trophy, color: 'bg-yellow-100 text-yellow-800' },
  { label: 'Rating', value: '4.5/5', icon: Star, color: 'bg-blue-100 text-blue-800' },
  { label: 'Total Students', value: '8,500', icon: Users, color: 'bg-green-100 text-green-800' },
  { label: 'Placement Rate', value: '92%', icon: Trophy, color: 'bg-purple-100 text-purple-800' },
];

const tabSections = [
  { key: 'overview', label: 'Overview' },
  { key: 'gallery', label: 'Gallery' },
  { key: 'financials', label: 'Financials' },
  { key: 'placements', label: 'Placements' },
  { key: 'campus', label: 'Campus Life' },
];

const defaultCollegeImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400';
const defaultBanner = 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=1200';

const CollegeDashboard = () => {
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [tab, setTab] = useState('overview');
  const [collegeImage, setCollegeImage] = useState(defaultCollegeImage);
  const [bannerImage, setBannerImage] = useState(defaultBanner);
  const [gallery, setGallery] = useState([]);
  const fileInputRef = useRef();
  const bannerInputRef = useRef();
  const galleryInputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('collegeToken');
    if (!token) {
      navigate('/college-login');
      return;
    }
    fetch('http://localhost:5000/api/colleges/me', {
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setCollegeImage(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setBannerImage(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (ev) => setGallery(gal => [...gal, ev.target.result]);
      reader.readAsDataURL(file);
    });
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container-responsive-xl py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    EduGuide
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">College Dashboard</p>
                </div>
              </Link>
              {/* Back to Home link */}
              <Link to="/" className="flex items-center text-blue-500 hover:text-blue-700 text-sm font-medium ml-4">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Home
              </Link>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="h-5 w-5" />
              </button>
              <button onClick={handleLogout} className="p-2 text-gray-400 hover:text-gray-600">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96 mb-8">
        <img
          src={bannerImage}
          alt="College Banner"
          className="w-full h-full object-cover object-center rounded-b-3xl shadow-lg"
        />
        <button
          className="absolute bottom-4 right-6 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center"
          onClick={() => bannerInputRef.current.click()}
          title="Upload Banner Image"
        >
          <Camera className="h-5 w-5" />
        </button>
        <input
          type="file"
          accept="image/*"
          ref={bannerInputRef}
          className="hidden"
          onChange={handleBannerChange}
        />
      </div>

      <div className="container-responsive-xl py-6 sm:py-8">
        {/* College Profile Section */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="relative group w-32 h-32 flex-shrink-0 mx-auto sm:mx-0">
              <img
                src={collegeImage}
                alt="College"
                className="w-32 h-32 object-cover rounded-2xl border-4 border-blue-100 shadow group-hover:opacity-80 transition"
              />
              <button
                className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center"
                onClick={() => fileInputRef.current.click()}
                title="Upload College Picture"
              >
                <Camera className="h-5 w-5" />
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">{college?.name} <Badge variant="outline">College</Badge></h2>
              <div className="flex flex-wrap gap-4 mt-2 text-gray-700">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> {college?.email}</div>
                <div className="flex items-center gap-2"><Globe className="h-4 w-4" /> {college?.country}</div>
              </div>
              <div className="mt-4 text-gray-600 text-base leading-relaxed">
                {college?.description || 'No description provided.'}
              </div>
              <div className="mt-2 text-sm text-blue-600 font-medium">Created At: {new Date(college?.createdAt).toLocaleString()}</div>
              {/* Contact & Social Info */}
              <div className="mt-4 flex flex-wrap gap-6 items-center text-gray-700">
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-1234567890</div>
                <div className="flex items-center gap-2"><GlobeIcon className="h-4 w-4" /> <a href="https://www.collegewebsite.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">www.collegewebsite.com</a></div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Mumbai, India</div>
                <div className="flex items-center gap-2">
                  <a href="#" className="hover:text-blue-600"><Facebook className="h-4 w-4" /></a>
                  <a href="#" className="hover:text-pink-500"><Instagram className="h-4 w-4" /></a>
                  <a href="#" className="hover:text-blue-400"><Twitter className="h-4 w-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {statsMock.map(stat => (
            <div key={stat.label} className={`rounded-2xl bg-white shadow border border-gray-100 flex flex-col items-center py-6 px-2 ${stat.color}`}>
              <span className="rounded-full p-2 mb-2 bg-white/80"><stat.icon className="h-6 w-6" /></span>
              <span className="font-bold text-xl">{stat.value}</span>
              <span className="text-xs text-gray-500 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-6 sm:mb-8 border border-gray-100 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {tabSections.map(section => (
              <button
                key={section.key}
                onClick={() => setTab(section.key)}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl font-medium transition-all duration-200 whitespace-nowrap ${
                  tab === section.key
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="hidden sm:inline">{section.label}</span>
                <span className="sm:hidden">{section.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 min-h-[200px]">
          {tab === 'overview' && (
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">About</h3>
              <p className="text-gray-700">{college?.description || 'No description provided.'}</p>
            </div>
          )}
          {tab === 'gallery' && (
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2 flex items-center gap-2"><ImageIcon className="h-5 w-5" /> Gallery</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                {gallery.length === 0 && <div className="text-gray-500">No images uploaded yet.</div>}
                {gallery.map((img, idx) => (
                  <img key={idx} src={img} alt={`Gallery ${idx+1}`} className="w-40 h-32 object-cover rounded-xl border shadow" />
                ))}
              </div>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition"
                onClick={() => galleryInputRef.current.click()}
              >
                <Camera className="h-4 w-4" /> Upload Images
              </button>
              <input
                type="file"
                accept="image/*"
                multiple
                ref={galleryInputRef}
                className="hidden"
                onChange={handleGalleryChange}
              />
            </div>
          )}
          {tab === 'financials' && (
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Financials</h3>
              <p className="text-gray-700">Tuition, hostel, and other fee details can be managed here in the future.</p>
            </div>
          )}
          {tab === 'placements' && (
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Placements</h3>
              <p className="text-gray-700">Placement statistics and recruiter information will be shown here.</p>
            </div>
          )}
          {tab === 'campus' && (
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Campus Life</h3>
              <p className="text-gray-700">Campus facilities, student life, and events will be highlighted here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegeDashboard; 