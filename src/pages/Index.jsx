import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  MapPin, 
  Award, 
  ArrowRight, 
  GraduationCap, 
  Globe, 
  Search, 
  CheckCircle, 
  Star,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Heart,
  Clock,
  Mail,
  Phone,
  MessageCircle,
  ArrowUp,
  Play,
  Pause,
  RotateCcw,
  BarChart3,
  Calendar,
  BookOpenCheck,
  GraduationCap as GraduationCapIcon,
  Building2,
  Briefcase,
  Lightbulb,
  Rocket,
  Eye,
  EyeOff,
  Lock,
  User,
  Phone as PhoneIcon,
  Calendar as CalendarIcon,
  MapPin as MapPinIcon,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  UserCheck,
  Brain,
  Code,
  Microscope,
  Palette,
  Calculator,
  BookOpen as BookOpenIcon,
  Building,
  School,
  University,
  Crown,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
  Database
} from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Computer Science Student",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      text: "EduGuide helped me find the perfect engineering college. The aptitude test was incredibly accurate!",
      college: "IIT Bombay"
    },
    {
      name: "Arjun Patel",
      role: "Business Student",
      icon: <Briefcase className="w-8 h-8 text-green-600" />,
      text: "The college comparison feature saved me hours of research. Highly recommended!",
      college: "Stanford University"
    },
    {
      name: "Zara Khan",
      role: "Medical Student",
      icon: <Microscope className="w-8 h-8 text-purple-600" />,
      text: "Found my dream medical school through EduGuide's comprehensive database.",
      college: "Harvard Medical School"
    }
  ];

  const features = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Comprehensive Database",
      description: "Access detailed information on 500+ colleges worldwide with real-time data."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "AI-Powered Matching",
      description: "Get personalized college recommendations based on your profile and preferences."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Aptitude Assessment",
      description: "Take comprehensive tests to understand your strengths and career potential."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Explore opportunities in India and abroad with our extensive network."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified Information",
      description: "All data is verified and updated regularly for accuracy and reliability."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Results",
      description: "Get immediate insights and recommendations without waiting."
    }
  ];

  const stats = [
    { number: "500+", label: "Colleges", icon: <Building2 className="h-6 w-6" /> },
    { number: "50K+", label: "Students", icon: <Users className="h-6 w-6" /> },
    { number: "95%", label: "Success Rate", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "24/7", label: "Support", icon: <MessageCircle className="h-6 w-6" /> }
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Founder & CEO",
      icon: <Crown className="w-8 h-8 text-blue-600" />,
      bio: "Former IIT professor with 15+ years in education technology"
    },
    {
      name: "Arjun Patel",
      role: "CTO",
      icon: <Brain className="w-8 h-8 text-green-600" />,
      bio: "Tech leader with expertise in AI and machine learning"
    },
    {
      name: "Zara Khan",
      role: "Head of Product",
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      bio: "Product strategist focused on user experience and growth"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  EduGuide
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Your College Search Partner</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm px-3 py-2 rounded-lg hover:bg-blue-50">
                About
              </a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm px-3 py-2 rounded-lg hover:bg-blue-50">
                Features
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm px-3 py-2 rounded-lg hover:bg-blue-50">
                Contact
              </a>
              <Link to="/student-login" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm px-3 py-2 rounded-lg hover:bg-blue-50">
                Student Login
              </Link>
              <Link to="/college-signup" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm px-3 py-2 rounded-lg hover:bg-blue-50">
                College Portal
              </Link>
              <Link to="/student-signup" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium text-sm">
                Get Started
              </Link>
            </nav>
            <div className="md:hidden">
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center">
            <div className={`inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <Star className="w-4 h-4 mr-2" />
              Trusted by 50,000+ students worldwide
            </div>
            <h2 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              Find Your Perfect
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> College Path</span>
            </h2>
            <p className={`text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              Discover engineering and management universities worldwide. Get personalized recommendations, 
              take aptitude tests, and make informed decisions about your educational future.
            </p>
            <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <Link
                to="/student-signup"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center text-lg"
              >
                Start Your Journey <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/college-list"
                className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg bg-white"
              >
                <Search className="mr-3 h-6 w-6" />
                Browse Colleges
              </Link>
            </div>
            
            {/* Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform group-hover:shadow-xl">
                      <div className="text-blue-600">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Everything You Need
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and information to help you make the best decision for your future
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group p-6 rounded-3xl bg-gradient-to-br from-gray-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple steps to find your perfect college and start your journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-xl">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Create Your Profile</h4>
              <p className="text-gray-600 leading-relaxed">
                Sign up and provide your academic background, entrance exam scores, and career interests.
              </p>
            </div>
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-xl">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Take Aptitude Test</h4>
              <p className="text-gray-600 leading-relaxed">
                Complete our comprehensive aptitude assessment to understand your strengths and potential.
              </p>
            </div>
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-xl">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Get Recommendations</h4>
              <p className="text-gray-600 leading-relaxed">
                Receive personalized college recommendations based on your profile and test results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Students Say
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real stories from students who found their perfect college through EduGuide
            </p>
          </div>
          <div className="relative">
            <div className="flex justify-center mb-12">
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 md:p-16 border border-blue-100">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white rounded-2xl shadow-lg">
                    {testimonials[currentTestimonial].icon}
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-8 italic leading-relaxed max-w-3xl mx-auto">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600 mb-2">{testimonials[currentTestimonial].role}</p>
                  <p className="text-blue-600 font-semibold">{testimonials[currentTestimonial].college}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <RotateCcw className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              About EduGuide
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're on a mission to democratize access to quality college guidance
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h4 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h4>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To democratize access to quality college guidance by providing every student with the tools, 
                information, and support they need to make informed decisions about their education and future career.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every student, regardless of their background or location, deserves access to 
                comprehensive, accurate, and personalized guidance for their educational journey.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
              <Target className="w-16 h-16 mx-auto mb-8" />
              <h4 className="text-3xl font-bold mb-6 text-center">Our Vision</h4>
              <p className="text-center text-blue-100 leading-relaxed text-lg">
                To become the world's most trusted platform for educational guidance, 
                helping millions of students find their perfect path to success.
              </p>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="text-center">
            <h4 className="text-3xl font-bold text-gray-900 mb-12">Meet Our Team</h4>
            <div className="grid md:grid-cols-3 gap-12">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                      {member.icon}
                    </div>
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-3">{member.name}</h5>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-white mb-8">
            Ready to Start Your Journey?
          </h3>
          <p className="text-lg text-blue-100 mb-12">
            Join thousands of students who have found their perfect college with EduGuide
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/student-signup"
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center text-lg"
            >
              Get Started Now <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
            <Link
              to="/college-list"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg"
            >
              <Search className="mr-3 h-6 w-6" />
              Explore Colleges
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h4 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h4>
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="p-4 bg-blue-50 rounded-2xl">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-gray-900 mb-2">Email</h5>
                    <p className="text-gray-600 text-lg">hello@eduguide.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="p-4 bg-blue-50 rounded-2xl">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-gray-900 mb-2">Phone</h5>
                    <p className="text-gray-600 text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="p-4 bg-blue-50 rounded-2xl">
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-gray-900 mb-2">Address</h5>
                    <p className="text-gray-600 text-lg">123 Education Street, Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h5 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    <Facebook className="w-6 h-6 text-blue-600" />
                  </a>
                  <a href="#" className="p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    <Twitter className="w-6 h-6 text-blue-600" />
                  </a>
                  <a href="#" className="p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    <Instagram className="w-6 h-6 text-blue-600" />
                  </a>
                  <a href="#" className="p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10 border border-gray-100">
              <h4 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h4>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg"
                >
                  Send Message <Send className="ml-3 h-6 w-6" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">EduGuide</h3>
                  <p className="text-xs text-gray-400">Your College Search Partner</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Helping students find their perfect college path with comprehensive guidance and AI-powered recommendations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">College Search</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Aptitude Tests</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Guidance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Application Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Connect</h4>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Subscribe to our newsletter for updates and tips.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 EduGuide. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Index; 