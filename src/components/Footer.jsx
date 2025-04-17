import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiBehance } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative pt-4 pb-0">
      {/* Top orange border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#FF7544]" />

      {/* Navigation Links - visible only on md and up */}
      <div className="hidden md:flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-4 mb-8 px-4 text-center">
        {[
          'Home', 'About us', 'Portfolio', 'Prominova',
          'Proxitech', 'Pixellar', 'Inhouse Products', 'Contact us',
        ].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
            className="text-white hover:text-[#FF7544] underline-offset-2 hover:underline text-sm md:text-base transition-colors duration-200"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {/* Left: Logo + Contact */}
        <div className="flex flex-col items-start space-y-4 md:-ml-25 md:-mt-30">
          <img 
            src="/images/logo.png" 
            alt="Tungston Labs Logo" 
            className="w-[170px] h-auto mb-4" 
          />

          <div className="-mt-6 ml-1 md:ml-5 mb-2">
            <h4 className="text-[#FF7544] font-bold">PHONE</h4>
            <p className="text-[#FF7544]">+91 7561049196</p>
            <p className="text-[#FF7544]">+49 17684162253</p>
          </div>

          <div className="mt-5 ml-1 md:ml-5 mb-5">
            <h4 className="text-[#FF7544] font-bold uppercase">Address</h4>
            <p className="text-[#FF7544] leading-relaxed text-sm">
              Tungston Labs, Ullampilly Building, 4th Floor,<br />
              Seaport - Airport Rd, behind Olimugal Juma Masjid,<br />
              Thrikkakara, Vazhakkala, Kakkanad, Kochi, Kerala 682030
            </p>
          </div>
        </div>

        {/* Middle: Empty for layout spacing */}
        <div className="hidden md:block" />

        {/* Right: Socials + Enquiries */}
        <div className="flex flex-col justify-between md:items-end items-start h-full md:-mr-25">
          <div className="flex justify-start md:justify-end space-x-4 mb-6 md:mb-0 w-full mt-4 md:mt-0">
            <SiBehance className="text-white text-2xl hover:text-[#FF7544] cursor-pointer" />
            <FaFacebookF className="text-white text-2xl hover:text-[#FF7544] cursor-pointer" />
            <FaLinkedinIn className="text-white text-2xl hover:text-[#FF7544] cursor-pointer" />
            <FaInstagram className="text-white text-2xl hover:text-[#FF7544] cursor-pointer" />
            <FaYoutube className="text-white text-2xl hover:text-[#FF7544] cursor-pointer" />
          </div>

          <div className="text-left md:text-right space-y-1 w-full mt-4 md:mt-0">
            <h4 className="text-[#FF7544] font-bold text-lg uppercase">Enquiries</h4>
            <p className="text-[#FF7544] text-sm">info@tungstonlabs.com</p>
            <p className="text-[#FF7544] text-sm hover:underline cursor-pointer">Privacy Policy</p>
            <p className="text-[#FF7544] text-sm">Copyright © 2023.</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="w-full bg-gradient-to-t from-[#FF7544] to-transparent text-sm text-center py-4 mt-10">
        <p className="text-[#FF7544]">
          © Copyright 2025, Designed by <span className="font-bold text-white">Tungston Labs</span><span className="text-[#FF7544]">.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
