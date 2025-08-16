import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import PopularServices from './components/PopularServices.jsx';
import ImageBanner from './components/ImageBanner.jsx';
import TopProfessionals from './components/TopProfessionals.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Footer from './components/Footer.jsx';
import GeminiChatbot from './components/GeminiChat.jsx';
import Login from './pages/LoginPage.jsx';
import Signup from './pages/SignupPage.jsx';
// Import the new pages
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsOfServicePage from './pages/TermsOfServicePage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

const HomePage = ({ onSearch, services, professionals, loading, error, user, hasSearched }) => (
  <>
    <HeroSection onSearch={onSearch} />
    {loading && <p className="text-center text-gray-600 my-6">Loading...</p>}
    {error && <p className="text-center text-red-600 my-6">{error}</p>}
    {!loading && (
      <>
        {hasSearched && professionals.length > 0 && (
          <TopProfessionals professionals={professionals} user={user} />
        )}
        <PopularServices services={services} />
        <ImageBanner />
        {!hasSearched && (
          <TopProfessionals professionals={professionals} user={user} />
        )}
        {hasSearched && professionals.length === 0 && (
          <p className="text-center text-gray-600 my-6">No professionals found for your search criteria.</p>
        )}
        <HowItWorks />
      </>
    )}
  </>
);

const App = () => {
  const [services, setServices] = useState([]);
  const [professionals, setProfessionals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchServices = async () => {
    const res = await axios.get(`${API_BASE}/api/services`);
    return res.data;
  };

  const fetchPros = async (params = {}) => {
    const query = new URLSearchParams();
    if (params.city) query.set('city', params.city);
    if (params.near) query.set('near', params.near);
    if (params.radiusKm) query.set('radiusKm', params.radiusKm);
    const url = `${API_BASE}/api/professionals${query.toString() ? '?' + query.toString() : ''}`;
    const res = await axios.get(url);
    let list = res.data;
    if (params.service) {
      const s = params.service.toLowerCase();
      list = list.filter(p => (p.profession || '').toLowerCase().includes(s));
    }
    return list;
  };

  const initialLoad = async () => {
    try {
      setLoading(true);
      const [sv, pros] = await Promise.all([fetchServices(), fetchPros()]);
      setServices(sv);
      setProfessionals(pros);
      setHasSearched(false);
    } catch (e) {
      setError(e.message || 'Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initialLoad();
  }, []);

  const handleSearch = async ({ service, location, near }) => {
    try {
      setLoading(true);
      const pros = await fetchPros({
        service: service || '',
        city: location || '',
        near: near || '',
        radiusKm: 8
      });
      setProfessionals(pros);
      setHasSearched(true);
    } catch (e) {
      setError(e.message || 'Search failed');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <Router>
      <div className="font-sans antialiased text-gray-900 bg-gray-50 min-h-screen">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <Navbar user={user} onLogout={handleLogout} />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage
              onSearch={handleSearch}
              services={services}
              professionals={professionals}
              loading={loading}
              error={error}
              user={user}
              hasSearched={hasSearched}
            />} />
            <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/signup" element={<Signup onSignupSuccess={handleLoginSuccess} />} />
            {/* Add the new routes here */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </main>
        <Footer />
        <GeminiChatbot />
      </div>
    </Router>
  );
};

export default App;