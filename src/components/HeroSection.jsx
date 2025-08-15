import React, { useState } from 'react';
import { SearchIcon, LocationIcon, CheckCircleIcon } from './icons';

const HeroSection = ({ onSearch }) => {
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onSearch({ service, location });
  };

  const useMyLocation = () => {
    if (!navigator.geolocation) return alert('Geolocation not supported in this browser.');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        onSearch({ service, location, near: `${latitude},${longitude}` });
      },
      (err) => alert('Unable to fetch location: ' + err.message),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 rounded-xl shadow-inner-lg mt-8">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Find Trusted <span className="text-blue-600">Service</span> Providers <span className="text-yellow-600">Near You</span>
        </h1>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Connect with verified local professionals for all your home and business needs. Plumbers, electricians, cleaners, and more - all rated by the community.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center bg-white p-2 rounded-full shadow-lg max-w-2xl mx-auto border border-gray-200">
          <div className="flex items-center flex-grow p-3">
            <SearchIcon className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="What service do you need? (e.g. plumber)"
              className="flex-grow outline-none text-gray-700 placeholder-gray-400"
              value={service}
              onChange={(e)=>setService(e.target.value)}
            />
          </div>
          <div className="flex items-center flex-grow p-3 border-t md:border-t-0 md:border-l border-gray-200">
            <LocationIcon className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Your city (e.g. Delhi)"
              className="flex-grow outline-none text-gray-700 placeholder-gray-400"
              value={location}
              onChange={(e)=>setLocation(e.target.value)}
            />
          </div>
          <button onClick={handleSearch} className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300 mt-4 md:mt-0 md:ml-2 w-full md:w-auto">
            Find Services
          </button>
        </div>
        <div className="mt-3">
          <button onClick={useMyLocation} className="text-sm text-blue-600 hover:underline">Use my current location</button>
        </div>
        <div className="flex flex-wrap justify-center mt-8 text-gray-600 text-sm space-x-4">
          <p className="flex items-center mb-2 md:mb-0"><CheckCircleIcon className="w-4 h-4 mr-1 text-green-500" /> Verified professionals</p>
          <p className="flex items-center mb-2 md:mb-0"><CheckCircleIcon className="w-4 h-4 mr-1 text-green-500" /> Real customer reviews</p>
          <p className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-1 text-green-500" /> Instant booking</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
