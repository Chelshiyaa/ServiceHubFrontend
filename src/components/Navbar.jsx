// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // Import HashLink
import { ArrowRightIcon, UserPlusIcon } from './icons';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="bg-white p-4 shadow-md rounded-b-xl">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-lg">S</div>
          <span className="text-xl font-bold text-gray-800">ServiceHub</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          {/* Use HashLink for smooth scrolling to sections */}
          <HashLink to="/#services" className="text-gray-700 hover:text-blue-600 transition duration-300">Services</HashLink>
          <HashLink to="/#how-it-works" className="text-gray-700 hover:text-blue-600 transition duration-300">How it Works</HashLink>
          <HashLink to="/#about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</HashLink>
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <button onClick={onLogout} className="flex items-center text-gray-700 hover:text-blue-600 transition duration-300">
              <ArrowRightIcon className="w-5 h-5 mr-1" /> Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="flex items-center text-gray-700 hover:text-blue-600 transition duration-300">
                <ArrowRightIcon className="w-5 h-5 mr-1" /> Login
              </Link>
              <Link to="/signup" className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300 flex items-center">
                <UserPlusIcon className="w-5 h-5 mr-1" /> Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;