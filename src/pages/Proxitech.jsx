// import React from "react";
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import ProxitechIcon from '../assets/proxitech.svg';

// const ServicesSection = () => {
//     const services = [
//         {
//             number: "1",
//             title: "Web Development",
//             description: "We craft high-performance, scalable, and user-friendly websites tailored to your business needs. From front-end design to back-end development, our solutions ensure seamless functionality and an exceptional user experience."
//         },
//         {
//             number: "2",
//             title: "Mobile App Development",
//             description: "We build innovative, high-performance mobile apps for iOS and Android. Our user-centric approach ensures intuitive design, seamless performance, and robust functionality to keep your audience engaged."
//         },
//         {
//             number: "3",
//             title: "E-Commerce",
//             description: "We create powerful, secure, and scalable e-commerce platforms that drive sales and enhance customer experiences. From seamless checkout to advanced analytics, our solutions help businesses thrive in the digital marketplace."
//         }
//     ];

//     return (
//         <>

//         <Navbar />

//         <div className="bg-black text-white">
//         <div>
 
// <img src={ProxitechIcon} alt="Proxitech Icon" className="w-1502 " 
// />
//   </div>

//             {/* Proxitech Section */}
//             <div
//                 className="bg-black border-[#FF7544] rounded-lg p-4 sm:p-8 mb-8 mt-[89px]w-[1679px]"
//                 style={{
//                     border: '8px solid #FF7544',
//                     boxShadow: '10px 4px 13.5px 0px #000'
//                 }}
//             >
//                 <h2
//                     className="text-3xl sm:text-[45px] font-semibold leading-[134%] tracking-[0%] text-[#FF7544] mb-4 sm:mb-6"
//                     style={{ fontFamily: 'Bricolage Grotesque' }}
//                 >
//                   Proxitech
//                 </h2>
//                 <div className="text-white space-y-4">
//                 <p className="text-lg sm:text-xl leading-relaxed">
//                             Proxitech, an innovative arm of Tungston Labs, is transforming AI, automation,
//                             and digital transformation through scalable, intelligent solutions. Leveraging
//                             technologies like machine learning, cloud computing, predictive analytics, and
//                             cybersecurity, Proxitech empowers businesses to streamline operations, automate
//                             workflows, and make smarter decisions.
//                         </p>

//                         <p className="text-lg sm:text-xl leading-relaxed">
//                             Our expertise spans AI-driven automation, data insights, cloud infrastructure,
//                             AR/VR, and robust security—ensuring adaptability in a fast-evolving digital world.
//                             With a strong focus on innovation and future-readiness, we help organizations
//                             transition from legacy systems to AI-powered, cloud-native solutions that enhance
//                             performance, scalability, and resilience—driving impactful digital growth and
//                             helping enterprises stay ahead in an increasingly connected and competitive
//                             landscape.
//                         </p>
//                 </div>
//             </div>

//             {/* Our Services Section */}
//             <div className="max-w-7xl mx-auto">
//                 <h2 className="text-4xl sm:text-5xl font-bold text-[#FF7544] mb-12">
//                     Our services
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {services.map((service, index) => (
//                         <div
//                             key={index}
//                             className="bg-[#1A1A1A] p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
//                         >
//                             <div className="flex items-center mb-6">
//                                 <div className="w-12 h-12 bg-[#FF7544] rounded-full flex items-center justify-center mr-4">
//                                     <span className="text-2xl font-bold">{service.number}</span>
//                                 </div>
//                                 <h3 className="text-2xl font-semibold">{service.title}</h3>
//                             </div>
//                             <p className="text-gray-300 leading-relaxed">
//                                 {service.description}
//                             </p>
//                         </div>

                        
//                     ))}
//                 </div>
//             </div>
//         </div>
//         <Footer />
//         </>
//     );
// };

// export default ServicesSection;


// import React from "react";
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import ProxitechIcon from '../assets/proxitech.svg';
// import WeComeImage from '../assets/weCome.png'; // Import the image

// const ServicesSection = () => {
//     const services = [
//         {
//             number: "1",
//             title: "Web Development",
//             description: "We craft high-performance, scalable, and user-friendly websites tailored to your business needs. From front-end design to back-end development, our solutions ensure seamless functionality and an exceptional user experience."
//         },
//         {
//             number: "2",
//             title: "Mobile App Development",
//             description: "We build innovative, high-performance mobile apps for iOS and Android. Our user-centric approach ensures intuitive design, seamless performance, and robust functionality to keep your audience engaged."
//         },
//         {
//             number: "3",
//             title: "E-Commerce",
//             description: "We create powerful, secure, and scalable e-commerce platforms that drive sales and enhance customer experiences. From seamless checkout to advanced analytics, our solutions help businesses thrive in the digital marketplace."
//         }
//     ];

//     return (
//         <>

//         <Navbar />

//         <div className="bg-black text-white">
//         <div>
 
//             <img src={ProxitechIcon} alt="Proxitech Icon" className="w-1502" />
//         </div>

//             {/* Proxitech Section */}
//             <div
//                 className="bg-black border-[#FF7544] rounded-lg p-4 sm:p-8 mb-8 mt-[89px]w-[1679px]"
//                 style={{
//                     border: '8px solid #FF7544',
//                     boxShadow: '10px 4px 13.5px 0px #000'
//                 }}
//             >
//                 <h2
//                     className="text-3xl sm:text-[45px] font-semibold leading-[134%] tracking-[0%] text-[#FF7544] mb-4 sm:mb-6"
//                     style={{ fontFamily: 'Bricolage Grotesque' }}
//                 >
//                   Proxitech
//                 </h2>
//                 <div className="text-white space-y-4">
//                 <p className="text-lg sm:text-xl leading-relaxed">
//                             Proxitech, an innovative arm of Tungston Labs, is transforming AI, automation,
//                             and digital transformation through scalable, intelligent solutions. Leveraging
//                             technologies like machine learning, cloud computing, predictive analytics, and
//                             cybersecurity, Proxitech empowers businesses to streamline operations, automate
//                             workflows, and make smarter decisions.
//                         </p>

//                         <p className="text-lg sm:text-xl leading-relaxed">
//                             Our expertise spans AI-driven automation, data insights, cloud infrastructure,
//                             AR/VR, and robust security—ensuring adaptability in a fast-evolving digital world.
//                             With a strong focus on innovation and future-readiness, we help organizations
//                             transition from legacy systems to AI-powered, cloud-native solutions that enhance
//                             performance, scalability, and resilience—driving impactful digital growth and
//                             helping enterprises stay ahead in an increasingly connected and competitive
//                             landscape.
//                         </p>
//                 </div>
//             </div>

//             {/* Our Services Section */}
//             <div className="max-w-7xl mx-auto">
//                 <h2 className="text-4xl sm:text-5xl font-bold text-[#FF7544] mb-12">
//                     Our services
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {services.map((service, index) => (
//                         <div
//                             key={index}
//                             className="bg-[#1A1A1A] p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
//                         >
//                             <div className="flex items-center mb-6">
//                                 <div className="w-12 h-12 bg-[#FF7544] rounded-full flex items-center justify-center mr-4">
//                                     <span className="text-2xl font-bold">{service.number}</span>
//                                 </div>
//                                 <h3 className="text-2xl font-semibold">{service.title}</h3>
//                             </div>
//                             <p className="text-gray-300 leading-relaxed">
//                                 {service.description}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Background Image with Centered Text */}
//             <div
//                 className="relative w-full h-[400px] mt-16 bg-cover bg-center flex items-center justify-center"
//                 style={{
//                     backgroundImage: `url(${WeComeImage})`,
//                 }}
//             >
//                 <h2 className="text-[#FF7544] text-4xl sm:text-5xl font-bold text-center px-4">
//                 We come with great expertise
//                 </h2>
//             </div>

//         </div>

//         <Footer />

//         </>
//     );
// };

// export default ServicesSection;


// import React from "react";
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import ProxitechIcon from '../assets/proxitech.svg';
// import WeComeImage from '../assets/weCome.png'; // Import the image

// const ServicesSection = () => {
//     const services = [
//         {
//             number: "1",
//             title: "Web Development",
//             description: "We craft high-performance, scalable, and user-friendly websites tailored to your business needs. From front-end design to back-end development, our solutions ensure seamless functionality and an exceptional user experience."
//         },
//         {
//             number: "2",
//             title: "Mobile App Development",
//             description: "We build innovative, high-performance mobile apps for iOS and Android. Our user-centric approach ensures intuitive design, seamless performance, and robust functionality to keep your audience engaged."
//         },
//         {
//             number: "3",
//             title: "E-Commerce",
//             description: "We create powerful, secure, and scalable e-commerce platforms that drive sales and enhance customer experiences. From seamless checkout to advanced analytics, our solutions help businesses thrive in the digital marketplace."
//         }
//     ];

//     return (
//         <>

//         <Navbar />

//         <div className="bg-black text-white">
//         <div>
 
//             <img src={ProxitechIcon} alt="Proxitech Icon" className="w-1502" />
//         </div>

//             {/* Proxitech Section */}
//             <div
//                 className="bg-black border-[#FF7544] rounded-lg p-4 sm:p-8 mb-8 mt-[89px]w-[1679px]"
//                 style={{
//                     border: '8px solid #FF7544',
//                     boxShadow: '10px 4px 13.5px 0px #000'
//                 }}
//             >
//                 <h2
//                     className="text-3xl sm:text-[45px] font-semibold leading-[134%] tracking-[0%] text-[#FF7544] mb-4 sm:mb-6"
//                     style={{ fontFamily: 'Bricolage Grotesque' }}
//                 >
//                   Proxitech
//                 </h2>
//                 <div className="text-white space-y-4">
//                 <p className="text-lg sm:text-xl leading-relaxed">
//                             Proxitech, an innovative arm of Tungston Labs, is transforming AI, automation,
//                             and digital transformation through scalable, intelligent solutions. Leveraging
//                             technologies like machine learning, cloud computing, predictive analytics, and
//                             cybersecurity, Proxitech empowers businesses to streamline operations, automate
//                             workflows, and make smarter decisions.
//                         </p>

//                         <p className="text-lg sm:text-xl leading-relaxed">
//                             Our expertise spans AI-driven automation, data insights, cloud infrastructure,
//                             AR/VR, and robust security—ensuring adaptability in a fast-evolving digital world.
//                             With a strong focus on innovation and future-readiness, we help organizations
//                             transition from legacy systems to AI-powered, cloud-native solutions that enhance
//                             performance, scalability, and resilience—driving impactful digital growth and
//                             helping enterprises stay ahead in an increasingly connected and competitive
//                             landscape.
//                         </p>
//                 </div>
//             </div>

//             {/* Our Services Section */}
//             <div className="max-w-7xl mx-auto">
//                 <h2 className="text-4xl sm:text-5xl font-bold text-[#FF7544] mb-12">
//                     Our services
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {services.map((service, index) => (
//                         <div
//                             key={index}
//                             className="bg-[#1A1A1A] p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
//                         >
//                             <div className="flex items-center mb-6">
//                                 <div className="w-12 h-12 bg-[#FF7544] rounded-full flex items-center justify-center mr-4">
//                                     <span className="text-2xl font-bold">{service.number}</span>
//                                 </div>
//                                 <h3 className="text-2xl font-semibold">{service.title}</h3>
//                             </div>
//                             <p className="text-gray-300 leading-relaxed">
//                                 {service.description}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Background Image with Centered Text */}
//             <div
//                 className="relative w-full flex items-center justify-center mt-16"
//                 style={{
//                     backgroundImage: `url(${WeComeImage})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     width: '1250px',
//                     height: '300px',
//                     margin: '0 auto'
//                 }}
//             >
//                 <h1
//                     style={{
//                         width: '800px',
//                         color: '#FF7544',
//                         textAlign: 'center',
//                         fontFamily: '"Bricolage Grotesque", sans-serif',
//                         fontSize: '85px',
//                         fontStyle: 'normal',
//                         fontWeight: 600,
//                         lineHeight: '91%',
//                     }}
//                 >
//                     We come with great expertise
//                 </h1>
//             </div>

//         </div>

//         <Footer />

//         </>
//     );
// };

// export default ServicesSection;


import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProxitechIcon from '../assets/proxitech.svg';
import WeComeImage from '../assets/weCome.png'; // Import the image

const ServicesSection = () => {
    const services = [
        {
            number: "1",
            title: "Web Development",
            description: "We craft high-performance, scalable, and user-friendly websites tailored to your business needs. From front-end design to back-end development, our solutions ensure seamless functionality and an exceptional user experience."
        },
        {
            number: "2",
            title: "Mobile App Development",
            description: "We build innovative, high-performance mobile apps for iOS and Android. Our user-centric approach ensures intuitive design, seamless performance, and robust functionality to keep your audience engaged."
        },
        {
            number: "3",
            title: "E-Commerce",
            description: "We create powerful, secure, and scalable e-commerce platforms that drive sales and enhance customer experiences. From seamless checkout to advanced analytics, our solutions help businesses thrive in the digital marketplace."
        }
    ];

    return (
        <>

        <Navbar />

        <div className="bg-black text-white">
            <div>
                <img src={ProxitechIcon} alt="Proxitech Icon" className="w-full max-w-[1502px] mx-auto" />
            </div>

            {/* Proxitech Section */}
            <div
                className="bg-black border-[#FF7544] rounded-lg p-4 sm:p-8 mb-8 mt-[89px] w-full max-w-[1679px] mx-auto"
                style={{
                    border: '8px solid #FF7544',
                    boxShadow: '10px 4px 13.5px 0px #000'
                }}
            >
                <h2
                    className="text-3xl sm:text-[45px] font-semibold leading-[134%] tracking-[0%] text-[#FF7544] mb-4 sm:mb-6"
                    style={{ fontFamily: 'Bricolage Grotesque' }}
                >
                    Proxitech
                </h2>
                <div className="text-white space-y-4">
                    <p className="text-lg sm:text-xl leading-relaxed">
                        Proxitech, an innovative arm of Tungston Labs, is transforming AI, automation,
                        and digital transformation through scalable, intelligent solutions...
                    </p>
                    <p className="text-lg sm:text-xl leading-relaxed">
                        Our expertise spans AI-driven automation, data insights, cloud infrastructure,
                        AR/VR, and robust security...
                    </p>
                </div>
            </div>

            {/* Our Services Section */}
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#FF7544] mb-12 text-center sm:text-left">
                    Our services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1A1A] p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-[#FF7544] rounded-full flex items-center justify-center mr-4">
                                    <span className="text-2xl font-bold">{service.number}</span>
                                </div>
                                <h3 className="text-2xl font-semibold">{service.title}</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Image with Centered Text */}
            <div
                className="relative w-full flex items-center justify-center mt-16 px-4"
                style={{
                    backgroundImage: `url(${WeComeImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    maxWidth: '100%',
                    height: '300px',
                    margin: '0 auto'
                }}
            >
                <h1
                    className="text-center"
                    style={{
                        width: '100%',
                        maxWidth: '800px',
                        color: '#FF7544',
                        fontFamily: '"Bricolage Grotesque", sans-serif',
                        fontSize: 'clamp(32px, 8vw, 85px)', // responsive font size
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '91%'
                    }}
                >
                    We come with great expertise
                </h1>
            </div>
        </div>

        <Footer />
        </>
    );
};

export default ServicesSection;
