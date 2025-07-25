import React from 'react';
import {FaInstagram, FaXTwitter, FaFacebookF} from "react-icons/fa6";
import { Link } from 'react-router';
import HealthLogo from '../assets/Health-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#f3f6f9] px-6 py-10 text-[#101828]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">

        {/* Left Section: Logo & Socials */}
        <div className="flex flex-col items-start gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/Homepage">
            <img src={HealthLogo} alt="Health Logo" className="w-20 h-20 object-contain" />
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link to="#" className="p-2 bg-white rounded-md hover:bg-gray-200 transition">
              <FaInstagram className="text-[#003322] text-xl" />
            </Link>
            <Link to="#" className="p-2 bg-white rounded-md hover:bg-gray-200 transition">
              <FaXTwitter className="text-[#003322] text-xl" />
            </Link>
            <Link to="#" className="p-2 bg-white rounded-md hover:bg-gray-200 transition">
              <FaFacebookF className="text-[#003322] text-xl" />
            </Link>
          </div>
        </div>

        {/* Right Section: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm w-full lg:w-auto">
          {/* About Us */}
          <div>
            <h3 className="font-semibold mb-3">About Us</h3>
            <ul className="space-y-2 text-gray-700">
              <li><Link to="#" className="hover:underline">Contact</Link></li>
              <li><Link to="#" className="hover:underline">Language Selector</Link></li>
              <li><Link to="#" className="hover:underline">Health Tips</Link></li>
            </ul>
          </div>

          {/* Terms & Conditions */}
          <div>
            <h3 className="font-semibold mb-3">Terms & Conditions</h3>
            <ul className="space-y-2 text-gray-700">
              <li><Link to="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:underline">Sign Up</Link></li>
              <li><Link to="#" className="hover:underline">Log in</Link></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-semibold mb-3">Partners</h3>
            <ul className="space-y-2 text-gray-700">
              <li><Link to="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:underline">Clinics</Link></li>
              <li><Link to="#" className="hover:underline">Pharmacies</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
