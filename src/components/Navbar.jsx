import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About us', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Prominova', path: '/prominova' },
  { name: 'Proxitech', path: '/proxitech' },
  { name: 'Pixellar', path: '/pixellar' },
  { name: 'Inhouse Products', path: '/products' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black py-4">
      <nav className="bg-[#1f1f1f] px-4 sm:px-6 rounded-lg md:mx-16 mx-auto">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Tungsten Labs Logo"
              className="h-[38.561px] w-[102px] md:h-[55px] md:w-[158px] object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-gray-300 font-medium text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Us Button (Right aligned) */}
          <div className="hidden md:flex items-center ml-4">
            <Link
              to="/contactus"
              className="bg-[#FF7544] hover:bg-[#e86638] text-black font-extrabold px-6 py-2 rounded-md text-sm"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-[#FF7544]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-gray-300 font-medium text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contactus"
              className="bg-[#FF7544] hover:bg-[#e86638] text-black font-extrabold px-4 py-2 rounded-md text-sm w-max"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

