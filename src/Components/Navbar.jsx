
import { FaGlobe } from "react-icons/fa";
import React from 'react';
import { Link } from 'react-router';
import HealthLogo from '../assets/Health-logo.png';

const Navbar = () => {
  return (
    <nav className="w-full bg-white px-6 md:px-16 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link to="/Homepage" className="flex items-center justify-center overflow-hidden bg-white">
        <img src={HealthLogo} alt="Health Logo" className="w-20 h-20 object-contain" />
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
        <li>
          <Link to="/" className="text-black font-semibold cursor-pointer">Home</Link>
        </li>
        <li>
          <Link to="/find-care" className="hover:text-black cursor-pointer">Find Care</Link>
        </li>
        <li>
          <Link to="/health-tips" className="hover:text-black cursor-pointer">Health Tips</Link>
        </li>
        <li>
          <Link to="/support" className="hover:text-black cursor-pointer">Support</Link>
        </li>
      </ul>

      {/* Buttons and Language */}
      <div className="flex items-center space-x-4">
        <Link to="/login">
          <button className="bg-green-600 text-white text-sm px-5 py-2 rounded-lg hover:bg-green-700 transition">
            Log in
          </button>
        </Link>
        <Link to="/signup">
          <button className="border border-green-600 text-green-600 text-sm px-5 py-2 rounded-lg hover:bg-green-50 transition">
            Sign Up
          </button>
        </Link>
        <div className="flex items-center space-x-1 text-sm text-gray-700 cursor-pointer">
          <FaGlobe size={16} />
          <span>EN</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

