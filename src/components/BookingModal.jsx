// components/BookingModal.jsx
import React, { useState } from 'react';
import axios from 'axios';

const BookingModal = ({ professional, isOpen, onClose }) => {
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

  const handleBooking = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please log in to book a service.');
        return;
      }

      await axios.post(`${API_BASE}/api/bookings`, {
        professionalId: professional._id,
        service: professional.profession,
        date,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Booking successful!');
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Booking failed. Please try again.');
    }
  };

  if (!isOpen || !professional) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Book {professional.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <p className="text-gray-700">**Service:** {professional.profession}</p>
          <p className="text-gray-700">**Rate:** {professional.rate}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select a Date & Time</label>
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <button
          onClick={handleBooking}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingModal;