import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import JobListings from './components/JobListings';
import JobDetails from './components/JobDetails';
import ResumeBuilder from './components/ResumeBuilder';
import AdminDashboard from './components/AdminDashboard';
import ModerationDashboard from './components/ModerationDashboard';
import { useState } from 'react';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 px-10">
        <Navbar
          isAdmin={isAdmin}
          isLoggedIn={isLoggedIn}
          setIsAdmin={setIsAdmin}
          setIsLoggedIn={setIsLoggedIn}
        />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobListings />} />
            <Route path="/job/:id" element={<JobDetails />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/moderation" element={<ModerationDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
