// components/TopProfessionals.jsx
import React, { useState } from 'react';
import { StarIcon, PhoneCallIcon } from './icons'; // Removed MessageCircleIcon as it's not used

const TopProfessionals = ({ professionals, user }) => { // Ensure 'user' prop is received
  const [activeContact, setActiveContact] = useState(null); // State to toggle contact details visibility

  const handleBookNow = (pro) => {
    // *** THIS IS THE CRUCIAL ADDITION ***
    // Check if the user is logged in
    if (!user) {
      alert('Please log in to view contact details.');
      return; // Stop the function execution if not logged in
    }
    // ************************************

    // Toggle the contact details for the clicked professional
    if (activeContact && activeContact._id === pro._id) {
      setActiveContact(null); // Hide if already visible
    } else {
      setActiveContact(pro); // Show for the clicked professional
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Top Rated Professionals</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Meet our highly rated experts, trusted by thousands of customers
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professionals.map((pro) => (
            <div key={pro._id || pro.name}>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out flex flex-col items-start">
                <div className="flex items-center w-full mb-4">
                  <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    {pro.initials}
                  </div>
                  <div className="flex-grow text-left">
                    <h3 className="text-xl font-semibold text-gray-800">{pro.name}</h3>
                    <p className="text-gray-600">{pro.profession}</p>
                  </div>
                  <span className="text-blue-600 font-bold text-lg flex-shrink-0">{pro.rate}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <StarIcon className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor"/>
                  <span className="font-semibold mr-2">{pro.rating}</span> ({pro.reviews}) <span className="mx-2">•</span> {pro.location?.city || pro.distance}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {pro.tags?.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex w-full space-x-4 mt-auto">
                  <button onClick={() => handleBookNow(pro)} className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                    <PhoneCallIcon className="w-5 h-5 mr-2" /> Show Contact
                  </button>
                </div>
              </div>
              {/* Contact details section - only visible if activeContact is set AND user is logged in */}
              {activeContact && activeContact._id === pro._id && user && ( // Added 'user' check here as well
                <div className="mt-4 p-6 bg-blue-50 border border-blue-200 rounded-xl shadow-inner text-left w-full animate-slide-in-down">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Contact Details</h4>
                  <p className="text-gray-700">**Phone:** +91 98765 43210</p>
                  <p className="text-gray-700">**Email:** {pro.name.toLowerCase().replace(/\s/g, '')}@servicehub.com</p>
                  <p className="text-green-600 font-bold mt-2">**Availability:** Currently Available</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProfessionals;