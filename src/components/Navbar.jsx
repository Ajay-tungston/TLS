// import React from 'react';
// import { Link } from 'react-router-dom';

// const navLinks = [
//   { name: 'Home', path: '/' },
//   { name: 'About us', path: '/about' },
//   { name: 'Portfolio', path: '/portfolio' },
//   { name: 'Prominova', path: '/prominova' },
//   { name: 'Proxitech', path: '/proxitech' },
//   { name: 'Pixellar', path: '/pixellar' },
//   { name: 'Inhouse Products', path: '/products' },
// ];

// const Navbar = () => {
//   return (
//     <nav className="bg-[#333333] py-4 px-6">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
        
//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img 
//             src="/images/logo.png" 
//             alt="Tungsten Labs Logo" 
//             className="h-10 md:h-12 object-contain" 
//           />
//         </Link>

//         {/* Navigation Links */}
//         <div className="hidden md:flex items-center space-x-8">
//           {navLinks.map((link) => (
//             <Link 
//               key={link.name} 
//               to={link.path} 
//               className="text-white hover:text-gray-300 font-medium text-sm"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Contact Button */}
//         <Link 
//           to="/contactus" 
//           className="bg-[#FF7544] hover:bg-[#e86638] text-black font-extrabold px-6 py-2 rounded-md text-sm"
//         >
//           Contact us
//         </Link>

//         {/* Mobile Menu Icon */}
//         <button className="md:hidden text-white ml-4">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
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
  return (
    // Outer black background wrapper
    <div className="bg-black py-4">
      {/* Actual navbar with gray background */}
      <nav className="bg-[#333333] px-5 rounded-lg max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-1">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Tungsten Labs Logo" 
              className="h-10 md:h-12 object-contain" 
              style={{ width: '200px', height: '95px' }}
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
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

          {/* Contact Button */}
          <Link 
            to="/contactus" 
            className="bg-[#FF7544] hover:bg-[#e86638] text-black font-extrabold px-6 py-2 rounded-md text-sm"
          >
            Contact us
          </Link>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-white ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
