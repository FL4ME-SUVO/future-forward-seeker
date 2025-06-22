import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StudentLogin from "./pages/StudentLogin";
import StudentSignup from "./pages/StudentSignup";
import CollegeSignup from "./pages/CollegeSignup";
import CareerSelection from "./pages/CareerSelection";
import LocationSelection from "./pages/LocationSelection";
import CollegeList from "./pages/CollegeList";
import CollegeSelection from "./pages/CollegeSelection";
import AptitudeTest from "./pages/AptitudeTest";
import TestCompletion from "./pages/TestCompletion";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/student-signup" element={<StudentSignup />} />
      <Route path="/college-signup" element={<CollegeSignup />} />
      <Route path="/career-selection" element={<CareerSelection />} />
      <Route path="/location-selection" element={<LocationSelection />} />
      <Route path="/college-list" element={<CollegeList />} />
      <Route path="/college-selection" element={<CollegeSelection />} />
      <Route path="/aptitude-test" element={<AptitudeTest />} />
      <Route path="/test-completion" element={<TestCompletion />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App; 