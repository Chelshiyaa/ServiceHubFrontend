import React from "react";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 mt-8 rounded-t-xl">
      <div className="container mx-auto text-center md:flex md:justify-between md:items-center">
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} ServiceHub. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/privacy-policy"
            className="hover:text-blue-400 transition duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="hover:text-blue-400 transition duration-300"
          >
            Terms of Service
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-blue-400 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
