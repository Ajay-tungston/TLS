import React, { useState } from "react";
import AboutCards from "../components/Home/AboutCards";
import Realms from "../components/Home/Realms";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    help: "",
    size: "",
    hearAbout: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };
  return (
    <div className="bg-black w-screen">
      <Navbar />
      <section className="bg-black text-white px-6 py-12 md:px-32 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left section */}
          <div>
            <h1
              style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
              className="text-[#FF7544] font-medium leading-[90%]
    text-[40px] text-center
    md:text-[105px] md:text-left mb-6"
            >
              Ideas invisible <br /> even to radars.
            </h1>
            <p
              style={{ fontFamily: '"Rethink Sans", sans-serif' }}
              className=" hidden md:block
    text-white font-normal leading-[127%]
    text-[18px] text-center
    md:text-[45px] md:text-left
  "
            >
              
            </p>
          </div>

          {/* Right section */}
          <div className="flex justify-center md:justify-end">
            {/* Dummy image/logo */}
            <div className="w-[170px] md:w-[660px] h-[170px] md:h-[660px]">
              <video autoPlay muted loop playsInline>
                <source
                  src="/videos/logoAnimation.mp4"
                  type="video/mp4"
                ></source>
              </video>
            </div>
          </div>
          <p
            style={{ fontFamily: '"Rethink Sans", sans-serif' }}
            className="md:hidden
    text-white font-normal leading-[127%]
    text-[18px] text-center
    md:text-[45px] md:text-left
  "
          >
            Maximize your brand’s potential with our innovative solutions and
            expertise, driving growth, efficiency, and lasting impact in a
            competitive market. Let’s elevate your brand!
          </p>
        </div>
      </section>
    

      <section className="bg-black text-white px-6 py-2 md:px-32 md:py-8 relative">
        <div className="flex flex-row justify-between items-center  mx-auto gap-6">
          {/* Left section */}
          <div className="w-1/2">
            <p
              style={{ fontFamily: "Archivo, sans-serif" }}
              className=" absolute left-3 md:left-20 md:-top-16
    text-[#FF7544] 
    tracking-[-1px] text-[20px]
    md:text-[198px] md:tracking-[-9.9px] m-0
  "
            >
              {" "}
              “
            </p>
            <div className="md:ml-16">
              <div className="text-xs md:text-base font-bold mt-2 flex items-center gap-1">
                WHO WE ARE
                <span className="bg-[#FF7544] md:py-2 md:px-1  hidden  md:inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="8"
                    viewBox="0 0 22 8"
                    fill="none"
                  >
                    <path
                      d="M0.558594 7H20.8086L15.4086 1.5"
                      stroke="#F1EDF8"
                      stroke-width="1.13387"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="bg-[#FF7544] py-1 px-0.5   md:hidden inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="5"
                    viewBox="0 0 7 5"
                    fill="none"
                  >
                    <path
                      d="M1 4H6L4.66667 1"
                      stroke="#F1EDF8"
                      stroke-width="1.13387"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h2 className="text-[#FFF] font-[700]  tracking-normal md:text-[79.371px] text-[14px] md:leading-[90%] leading-[12.6px] font-[Rethink Sans] mb-2">
                We are a <br></br>
                <span
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px #FF7544",
                  }}
                >
                  Mark — tech
                </span>{" "}
                <br />
                <span>Fusion company</span>
                <span className="text-[#FF7544]">.</span>
              </h2>
            </div>
          </div>

          {/* Right section */}
          <div className="w-1/2 text-right">
            <p
              style={{ fontFamily: "Archivo, sans-serif" }}
              className="absolute right-3 top-2 md:right-20 md:-top-16
    text-[#FF7544] 
    tracking-[-1px] text-[20px]
    md:text-[198px] md:tracking-[-9.9px] m-0
  "
            >
              ”
            </p>
            <p
              style={{
                fontFamily: '"Rethink Sans", sans-serif',
                fontWeight: 500,
                lineHeight: "92.7%",
                color: "#FFF",
              }}
              className=" md:mr-16
    text-white font-medium leading-[92.7%]
    text-[10px] text-right
    md:text-[50px] md:text-end
  "
            >
              We are a team of marketing and tech experts that will grow your
              brand through innovative solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white px-6 py-2 md:px-32 md:py-8">
        <AboutCards />
      </section>
      <section className="bg-black text-white px-6 py-2 md:px-32 md:py-8">
        <Realms />
      </section>

      <section
        className="hidden md:flex w-screen h-[1148px] bg-no-repeat bg-center bg-cover  justify-center items-center"
        style={{ backgroundImage: "url('/images/Frame 1747.svg')" }}
      >
        <h1 className="text-[#FF7544] px-[281px] text-center font-[Bricolage Grotesque 72pt] text-[95px] font-semibold leading-[91%]">
        Empowering Brands with Innovation and Expertise  

        </h1>
      </section>
      <section
        className="md:hidden flex justify-center items-center px-[48px] w-screen h-[215px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/images/Frame 1748.svg')" }}
      >
        <h1 className="text-[#FF7544] text-center font-[Bricolage Grotesque 72pt] text-[21px] font-semibold leading-[91%]">
        Empowering Brands with Innovation and Expertise
        </h1>
      </section>

      <section className="bg-black text-white px-6 py-2 md:px-24 md:py-8">
        <h2 className="text-[20px] md:text-[85px] font-[500] text-[#FF7544] text-center leading-[133.863%] mb-2">
          Our Clients
        </h2>{" "}
        <p className="text-center text-white font-[Rethink_Sans] text-[10px] font-normal leading-[13.386px] md:text-[25px] md:leading-[33.466px] md:px-28">
        As a branding and technology expert, we take pride in working with growth
oriented brands across different industries. Be it an ambitious startup
building a brand from the base or an established business seeking digital
transformation, our clients rely on us to craft and execute innovative
marketing strategies and advanced web development that drive measurable
success. At Tungston Labs every partnership is built on trust, innovation and
shared commitment to excellence. 

        </p>
      </section>
    <section className="bg-black text-white px-6 py-2 md:px-0  md:py-8">
  <div className="py-8 flex flex-col items-center">
    <div className="flex flex-wrap justify-center gap-[39px] md:gap-[64px] ">
      {[
        { src: "/images/logo-01 1.png", alt: "HEW Diamonds" },
        { src: "/images/Frame 1800.png", alt: "Essensuals" },
        { src: "/images/Frame.png", alt: "AKSA" },
        { src: "/images/Frame 1753.png", alt: "Tijara" },
        { src: "/images/Frame 1754.png", alt: "ARM SBC" },
      ].map((item, index) => (
        <div
          key={index}
          onClick={() => navigate('/portfolio')}
          className="bg-[#434343] hover:bg-white hover:scale-105 flex flex-col justify-center items-center 
              w-[74px] h-[78px] p-[25px_14.869px_26px_14.869px]
              lg:w-[285px] lg:h-[300px] lg:p-[76px_21.51px_77px_22.51px]"
        >
          <img
            src={item.src}
            alt={item.alt}
            className=" w-[44.262px] h-[27px] md:h-[147px] md:w-[240.981px]"
          />
        </div>
      ))}
    </div>
    <div className="mt-6 lg:hidden w-full flex justify-end">
      
    </div>

{/* "See more" for large screens */}
<div className="hidden lg:flex w-full justify-end mt-6">
  <button
    onClick={() => navigate('/portfolio')}
    className="text-[#FF7544] text-right font-[Helvetica_Compressed] text-[39px] font-[500] font-style:Helvetica Compressed leading-[149%] mr-24 hover:underline focus:outline-none"
  >
    See more
  </button>
</div>


    {/* "See more" only on mobile */}
    <div className="mt-6 lg:hidden w-full flex justify-end">
      <button className="text-[#FF7544] text-right font-[Helvetica_Compressed] text-[15px] font-[500] leading-[149%]">
        See more
      </button>
    </div>
  </div>
</section>

      <section className="bg-[#2b2b2b] text-white px-6 py-2 md:px-52 md:py-8">
        <div className=" mx-auto flex flex-col md:flex-row gap-10">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h2
              className="
    mb-6 
    md:text-left text-center 
    text-white 
    font-[400] 
    font-['Bricolage_Grotesque_72pt'] 
    text-[21px] md:text-[65px] 
    leading-[133.863%] md:leading-[87.011px]
  "
            >
              Let's Work Together
            </h2>
            <p
              className="
    mb-6 
    md:text-left text-center 
    text-white 
    font-[400] 
    font-['Rethink_Sans'] 
    text-[10px] md:text-[27px] 
    leading-[13.386px] md:leading-[36.143px]
  "
            >
              Thank you for showing interest in our services, we are glad for the opportunity
to work with you. To learn more about our services, kindly fill out the form
below to connect with our team or use the given contact details to reach us.
Our team will shortly reach out to you.
            </p>
            <p
              className="
    md:mb-6
    md:text-left text-center
    font-['Sansation']
    font-[700]
    text-[#FF7544]
    text-[35px] md:text-[64px]
    
    leading-[133.863%] md:leading-[85.672px]
  "
            >
              #TLS
            </p>
          </div>

          {/* Right Form */}
          <div className="md:w-1/2 md:px-20">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-2"
            >
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                className="py-[9px] px-[4px] mt-0 mb-[12px] bg-transparent border border-[#FF7544] outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                className="py-[9px] px-[4px] mt-0 mb-[12px] bg-transparent border border-[#FF7544] outline-none"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                onChange={handleChange}
                className="py-[9px] px-[4px] mt-0 mb-[12px] bg-transparent border border-[#FF7544] outline-none col-span-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Company E-mail"
                onChange={handleChange}
                className="py-[9px] px-[4px] mt-0 mb-[8px] bg-transparent border border-[#FF7544] outline-none col-span-2"
              />
              <label
                className="
    block 
    font-['Sansation'] 
    font-[400] 
    text-[#EBEBEB] 
    text-[10px] md:text-[20px] 
    leading-[13.386px] md:leading-[26.773px]
  "
              >
                How can we help you
              </label>
              <input
                type="text"
                name="help"
                // placeholder="Strategic optimization of digital/media channels."
                onChange={handleChange}
                className="py-[9px] px-[4px] mt-0 mb-[8px] bg-transparent border border-[#FF7544] outline-none col-span-2"
              />
              <label
                className="
    block 
    font-['Sansation'] 
    font-[400] 
    text-[#EBEBEB] 
    text-[10px] md:text-[20px] 
    leading-[13.386px] md:leading-[26.773px]
  "
              >
                Company size
              </label>
              <input
                type="text"
                name="size"
                // placeholder="2 to 10 employees"
                onChange={handleChange}
                className="py-[9px] px-[4px] mt-0 mb-[8px] bg-transparent border border-[#FF7544] outline-none col-span-2"
              />
              <label
                className="
    block 
    font-['Sansation'] 
    font-[400] 
    text-[#EBEBEB] 
    text-[10px] md:text-[20px] 
    leading-[13.386px] md:leading-[26.773px]
    whitespace-nowrap
  "
              >
                How did you hear about Tungstonlabs
              </label>

              <input
                type="text"
                name="hearAbout"
                // placeholder="2 to 10 employees"
                onChange={handleChange}
                className="py-[9px] px-[4px] mt-0 mb-[8px] bg-transparent border border-[#FF7544] outline-none col-span-2"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Messages"
                onChange={handleChange}
                className="py-[9px] px-[4px] mt-0 mb-[17px] bg-transparent border border-[#FF7544] outline-none col-span-2"
              ></textarea>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#FF7544] hover:bg-orange-600 text-white py-3 rounded col-span-2 transition duration-300"
              >
                <span className="hidden md:flex md:w-[30px] md:h-[30px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_4_4278)">
                      <path
                        d="M28.4153 0.029061C28.4071 0.0310532 28.3988 0.0326938 28.3906 0.0349204L1.04571 7.49262C0.358465 7.68006 0.169383 8.56682 0.718113 9.01892L9.22874 16.0304L7.66177 20.7312C7.43337 21.4165 8.08716 22.0717 8.77352 21.843L13.4744 20.276L20.4858 28.7866C20.9398 29.3376 21.825 29.1449 22.0121 28.459L29.4698 1.1141C29.4721 1.10549 29.4739 1.09676 29.4759 1.08808C29.6302 0.443846 29.0485 -0.12381 28.4153 0.029061ZM3.14618 8.74178L24.8125 2.83277L10.2585 14.6012L3.14618 8.74178ZM13.2471 18.4988L9.88522 19.6195L11.0059 16.2576L22.7163 6.78838L13.2471 18.4988ZM20.7629 26.3585L14.9034 19.2462L26.6719 4.69207L20.7629 26.3585Z"
                        fill="white"
                      />
                      <path
                        d="M3.24251 27.265C2.89909 26.9218 2.34257 26.9221 1.9995 27.2656L0.757139 28.5091C0.414072 28.8525 0.414307 29.409 0.757725 29.752C1.0855 30.0795 1.67325 30.0792 2.00067 29.7515L3.2431 28.5079C3.58616 28.1646 3.58593 27.608 3.24251 27.265Z"
                        fill="white"
                      />
                      <path
                        d="M6.96901 23.5345C6.62559 23.1914 6.06918 23.1917 5.72606 23.5351L4.48369 24.7786C4.17186 25.0907 4.17215 25.7097 4.48428 26.0216C4.78071 26.3177 5.43092 26.3175 5.72723 26.021L6.96959 24.7774C7.31266 24.4341 7.31242 23.8775 6.96901 23.5345Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_4278">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="w-[16px] h-[16px] md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_27_441)">
                      <path
                        d="M14.8876 0.515369C14.8832 0.516431 14.8788 0.517306 14.8745 0.518494L0.290525 4.49593C-0.0760062 4.5959 -0.17685 5.06884 0.115806 5.30996L4.65481 9.0494L3.81909 11.5565C3.69727 11.922 4.04596 12.2714 4.41202 12.1495L6.91915 11.3137L10.6586 15.8527C10.9007 16.1466 11.3728 16.0438 11.4726 15.678L15.45 1.09406C15.4513 1.08946 15.4522 1.08481 15.4533 1.08018C15.5356 0.736588 15.2254 0.433838 14.8876 0.515369ZM1.41077 5.16215L12.9661 2.01068L5.20399 8.28718L1.41077 5.16215ZM6.79793 10.3659L5.00493 10.9636L5.60262 9.17059L11.8481 4.12034L6.79793 10.3659ZM10.8063 14.5577L7.68127 10.7645L13.9578 3.00231L10.8063 14.5577Z"
                        fill="white"
                      />
                      <path
                        d="M1.46267 15.0414C1.27952 14.8584 0.982703 14.8586 0.799734 15.0418L0.137141 15.705C-0.0458281 15.8881 -0.0457031 16.1849 0.137453 16.3679C0.312266 16.5425 0.625734 16.5424 0.800359 16.3676L1.46298 15.7044C1.64595 15.5212 1.64583 15.2244 1.46267 15.0414Z"
                        fill="white"
                      />
                      <path
                        d="M3.45014 13.0512C3.26698 12.8682 2.97023 12.8684 2.78723 13.0515L2.12464 13.7147C1.95832 13.8812 1.95848 14.2113 2.12495 14.3776C2.28304 14.5356 2.62982 14.5355 2.78786 14.3773L3.45045 13.7141C3.63342 13.531 3.63329 13.2342 3.45014 13.0512Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_27_441">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
