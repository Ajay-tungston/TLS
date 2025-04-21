// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
// import { SiBehance } from 'react-icons/si';
// import { MdLocationOn } from 'react-icons/md';

// const ContactUs = () => {
//   return (
//     <>
//       {/* Navbar */}
//       <Navbar />

//       {/* Contact Section */}
//       <div className="bg-[#1A1A1A] text-white flex flex-col items-center gap-[65px] py-10">
//         <div className="w-full max-w-[1680px] px-6 md:px-16">
//           {/* Heading */}
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#FF7544] mb-4">Contact us</h2>
//             <p
//               className="text-gray-300 mx-auto text-center"
//               style={{
//                 fontFamily: '"Rethink Sans", sans-serif',
//                 fontSize: '18px',
//                 fontWeight: 400,
//                 lineHeight: '100%',
//                 maxWidth: '630px',
//               }}
//             >
              
//             </p>
//           </div>

//           {/* Main Content */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10 items-start md:ml-35">
//             {/* Left Column - Contact Info */}
//             <div className="px-4 md:px-0">
//               <h3 className="text-3xl font-semibold text-[#FF7544] mb-4">Get in touch</h3>
//               <p
//                 className="text-gray-300 mb-6"
//                 style={{
//                   fontFamily: '"Rethink Sans", sans-serif',
//                   fontSize: '13px',
//                   fontWeight: 400,
//                   lineHeight: '134%',
//                   maxWidth: '400px',
//                 }}
//               >
//                 Got any question or need support? Reach out anytime and we’ll get back to you as soon
//              as possible. We’re here to help, whether you have queries or want to reach out. Fill out
//              the form below or contact us through our given contact numbers – we’ll get back to you
//              soon. 
//               </p>

//               {/* Address */}
//               <div className="mb-6">
//                 <div className="flex items-center gap-2 text-[#FF7544] font-semibold text-lg">
//                   <MdLocationOn />
//                   Address
//                 </div>
//                 <p
//                   className="text-gray-300 mt-1"
//                   style={{
//                     fontFamily: '"Rethink Sans", sans-serif',
//                     fontSize: '13px',
//                     fontWeight: 500,
//                     lineHeight: '136%',
//                     maxWidth: '330px',
//                   }}
//                 >
//                   Tungston Labs, Ullampilly Building, 4th Floor,
// Seaport – Airport Rd, behind Olimugal Juma Masjid,
// Thrikkakara, Vazhakkala, Kakkanad, Kochi, Kerala
// 682021

//                 </p>
//               </div>

//               {/* Phone */}
//               <div className="mb-6">
//                 <div className="flex items-center gap-2 text-[#FF7544] font-semibold text-lg">
//                   <FaPhoneAlt />
//                   Phone
//                 </div>
//                 <ul className="text-gray-300 mt-1 space-y-1">
//                   <li>+91 9778377526</li>
//                   <li>+91 7561049196</li>
//                   <li>+91 9633701495</li>
//                 </ul>
//               </div>

//               {/* Email */}
//               <div className="mb-6">
//                 <div className="flex items-center gap-2 text-[#FF7544] font-semibold text-lg">
//                   <FaEnvelope />
//                   E-mail
//                 </div>
//                 <p className="text-gray-300 mt-1">info@tungstonlabs.com</p>
//               </div>

//               {/* Social Icons */}
//               <div>
//                 <p className="text-[#FF7544] font-semibold text-lg mb-2">Follow</p>
//                 <div className="flex items-center space-x-4">
//                   <SiBehance className="text-xl hover:text-[#FF7544] cursor-pointer" />
//                   <FaFacebookF className="text-xl hover:text-[#FF7544] cursor-pointer" />
//                   <FaLinkedinIn className="text-xl hover:text-[#FF7544] cursor-pointer" />
//                   <FaInstagram className="text-xl hover:text-[#FF7544] cursor-pointer" />
//                   <FaYoutube className="text-xl hover:text-[#FF7544] cursor-pointer" />
//                 </div>
//               </div>
//             </div>
            
//             {/* Right Column - Map */}
//             <div className="w-full h-[300px] md:h-full md:-ml-30">
//             <div className="h-[300px] md:h-full">
//               <iframe
//                 title="Tungsten Labs Location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.4222416015633!2d76.3471823147931!3d10.012774592838363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d5000000001%3A0xb7dcdbd2faeec5fa!2sTungsten%20Labs!5e0!3m2!1sen!2sin!4v1682665581016!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border:0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//             </div>
//            </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// };

// export default ContactUs;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { SiBehance } from 'react-icons/si';
import { MdLocationOn } from 'react-icons/md';

const ContactUs = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <div className="bg-[#1A1A1A] text-white flex flex-col items-center gap-[65px] py-10">
        <div className="w-full max-w-[1680px] px-6 md:px-16">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF7544] mb-4">Contact us</h2>
            <p
              className="text-gray-300 mx-auto text-center"
              style={{
                fontFamily: '"Rethink Sans", sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '100%',
                maxWidth: '630px',
              }}
            >
              
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10 items-start md:ml-35">
            {/* Left Column - Contact Info */}
            <div className="px-4 md:px-0">
              <h3 className="text-3xl font-semibold text-[#FF7544] mb-4">Get in touch</h3>
              <p
                className="text-gray-300 mb-6"
                style={{
                  fontFamily: '"Rethink Sans", sans-serif',
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: '134%',
                  maxWidth: '400px',
                }}
              >
                Got any question or need support? Reach out anytime and we’ll get back to you as soon
                as possible. We’re here to help, whether you have queries or want to reach out. Fill out
                the form below or contact us through our given contact numbers – we’ll get back to you
                soon. 
              </p>

              {/* Address */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-[#FF7544] font-semibold text-lg">
                  <MdLocationOn />
                  Address
                </div>
                <p
                  className="text-gray-300 mt-1"
                  style={{
                    fontFamily: '"Rethink Sans", sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    lineHeight: '136%',
                    maxWidth: '330px',
                  }}
                >
                  Tungston Labs, Ullampilly Building, 4th Floor,
                  Seaport – Airport Rd, behind Olimugal Juma Masjid,
                  Thrikkakara, Vazhakkala, Kakkanad, Kochi, Kerala
                  682021
                </p>
              </div>

              {/* Phone */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-[#FF7544] font-semibold text-lg">
                  <FaPhoneAlt />
                  Phone
                </div>
                <ul className="text-gray-300 mt-1 space-y-1">
                  <li>+91 9778377526</li>
                  <li>+91 7561049196</li>
                  <li>+91 9633701495</li>
                </ul>
              </div>

              {/* Email */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-[#FF7544] font-semibold text-lg">
                  <FaEnvelope />
                  E-mail
                </div>
                <p className="text-gray-300 mt-1">info@tungstonlabs.com</p>
              </div>

              {/* Social Icons */}
              <div>
                <p className="text-[#FF7544] font-semibold text-lg mb-2">Follow</p>
                <div className="flex items-center space-x-4">
                  <a href="https://www.behance.net/tungstonlabs1" target="_blank" rel="noopener noreferrer">
                    <SiBehance className="text-xl hover:text-[#FF7544] cursor-pointer" />
                  </a>
                  <a href="https://www.facebook.com/tungstonlabs" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-xl hover:text-[#FF7544] cursor-pointer" />
                  </a>
                  <a href="https://www.linkedin.com/company/tungston-labs/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="text-xl hover:text-[#FF7544] cursor-pointer" />
                  </a>
                  <a href="https://www.instagram.com/tungstonlabs/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-xl hover:text-[#FF7544] cursor-pointer" />
                  </a>
                  <a href="http://www.youtube.com/@tungstonlabs" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-xl hover:text-[#FF7544] cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Map */}
            <div className="w-full h-[300px] md:h-full md:-ml-30">
              <div className="h-[300px] md:h-full">
                <iframe
                  title="Tungsten Labs Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.4222416015633!2d76.3471823147931!3d10.012774592838363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d5000000001%3A0xb7dcdbd2faeec5fa!2sTungsten%20Labs!5e0!3m2!1sen!2sin!4v1682665581016!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactUs;

