import React, { useState } from "react";
import Groupfront from "../assets/World.png";
import thumbsup from "../assets/Vectooor.png";
import checkIcon from "../assets/check_small.png";
import inHouse from "../assets/inhouse.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const FeatureItem = ({ boldPart, restPart }) => {
  return (
    <div className="inline-flex justify-start items-end gap-px">
      <div className="w-4 h-4 bg-zinc-300" />
      <div className="w-2 h-2 bg-[#ff7554]" />
      <div className="justify-start">
        {boldPart && (
          <span className="text-white text-sm font-bold leading-tight">
            {" "}
            {boldPart}
          </span>
        )}
        <span className="text-white text-sm font-normal leading-tight">
          {restPart}
        </span>
      </div>
    </div>
  );
};

const PlanCard = ({ name, specKey, isTopRated, dec }) => {
  // Plan specifications based on specKey
  const specs = {
    Pulse2: {
      cpu: "1vCPU core",
      ram: "4GB RAM",
      storage: "50 GB NVMe SSD storage",
    },
    Pulse3: {
      cpu: "2vCPU core",
      ram: "8GB RAM",
      storage: "100 GB NVMe SSD storage",
    },
    Pulse4: {
      cpu: "4 vCPU core",
      ram: "16 GB RAM",
      storage: "200 GB NVMe SSD storage",
    },
    Pulse5: {
      cpu: "8 vCPU core",
      ram: "32 GB RAM",
      storage: "400 GB NVMe SSD storage",
    },
  };

  const currentSpecs = specs[specKey];

  return (
    <div className="relative flex flex-col h-full">
      {isTopRated && (
        <div className="w-[384px] h-16 pl-7 pr-6 pt-3 pb-6 bg-[#FF7544] rounded-tl-3xl rounded-tr-3xl inline-flex justify-between items-center">
          <div className="justify-start text-white text-xl font-bold leading-relaxed">
            Top Rated
          </div>
          <div className="w-6 h-6 relative">
            <img
              src={thumbsup}
              alt="Top Rated Icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      <div
        className={`w-96 h-[728px] px-6 pt-6 pb-72 bg-black ${
          isTopRated ? "rounded-bl-2xl rounded-br-2xl" : "rounded-2xl"
        } outline outline-1 outline-offset-[-1px] outline-[#FF7544] flex flex-col justify-start items-start gap-7`}
      >
        <div className="self-stretch pb-6 border-b border-orange-400/30 flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch h-6 justify-start text-white text-3xl font-bold leading-10">
              {name}
            </div>
            <div className="self-stretch justify-start text-white text-base font-normal leading-snug">
              {dec}
            </div>
          </div>
          <div className="self-stretch px-6  py-2.5 bg-[#FF7544] rounded-[5px] inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-white text-sm font-bold leading-tight">
              Choose plan
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-4">
          {/* CPU */}
          <div className="flex items-center gap-3">
            <img src={checkIcon} alt="Feature icon" className="w-5 h-5" />
            <div className="text-white">
              <span className="font-bold">{currentSpecs.cpu}</span>
              <span> core</span>
            </div>
          </div>

          {/* RAM */}
          <div className="flex items-center gap-3">
            <img src={checkIcon} alt="Feature icon" className="w-5 h-5" />
            <div className="text-white">
              <span className="font-bold">{currentSpecs.ram}</span>
              <span> RAM</span>
            </div>
          </div>

          {/* Storage */}
          <div className="flex items-center gap-3">
            <img src={checkIcon} alt="Feature icon" className="w-5 h-5" />
            <div className="text-white">
              <span className="font-bold">{currentSpecs.storage}</span>
              <span> NVMe SSD storage</span>
            </div>
          </div>

          {/* Bandwidth */}
          <div className="flex items-center gap-3">
            <img src={checkIcon} alt="Feature icon" className="w-5 h-5" />
            <div className="text-white border-b border-[#FF7544] pb-1">
              <span className="font-bold">Unlimited</span>
              <span> bandwidth</span>
            </div>
          </div>

          {/* Linux Support */}
          <div className="flex items-center gap-3">
            <img src={checkIcon} alt="Feature icon" className="w-5 h-5" />
            <div className="text-white border-b border-[#FF7544] pb-1">
              Supports multiple Linux distributions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InHouseProducts = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    count: "2 to 10 employees",
    phone: "",
    plan: "TLS VIPER SAGA",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/inform`,
        {
          company: formData.companyName,
          email: formData.email,
          employeeCount: formData.count,
          phone: formData.phone,
          stack: formData.plan,
        }
      );
      alert("Message submitted successfully");
      setFormData({
        companyName: "",
        email: "",
        count: "2 to 10 employees",
        phone: "",
        plan: "TLS VIPER SAGA",
      });
    } catch (error) {
      alert("Failed to send message.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const isDisabled =
    !formData.companyName ||
    !formData.email ||
    !formData.count ||
    !formData.phone ||
    !formData.plan;
  return (
    <>
      <Navbar />
      <section className="bg-black min-h-screen flex flex-col items-center justify-start  px-4 md:px-8 overflow-x-hidden lg:px-16">
        <div className="max-w-5xl mt-12  sm:mt-[100px] md:mt-[125px] text-white/70 text-sm md:text-base lg:text-lg text-left ">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#FF7544] font-['Bricolage_Grotesque'] text-center mb-6 md:mb-10">
            Our Inhouse Products
          </h1>

          <div
            className="text-center space-y-6 w-full text-white max-w-4xl px-4 sm:px-6"
            style={{
              fontFamily: '"Rethink Sans", sans-serif',
            }}
          >
            <p className="whitespace-pre-line text-base sm:text-lg md:text-xl leading-relaxed">
              We create and build innovative digital solutions
              <br className="hidden sm:inline" />
              that turns concepts into captivating user experiences
              <br className="hidden sm:inline" />
              Our server and hosting plans are designed with emphasis on
              <br className="hidden sm:inline" />
              usability, visual appeal, and efficiency, guaranteeing
              <br className="hidden sm:inline" />
              smooth interactions across different platforms
            </p>
          </div>
        </div>

        <div
          className="text-5xl md:text-6xl lg:text-7xl mt-[25px] text-[#FF7544] font-bold mb-[20px]"
          style={{
            fontFamily: '"Rethink Sans", sans-serif',
          }}
        >
          TLS VIPER
        </div>

        <div
          className="max-w-7xl text-white text-sm md:text-base lg:text-lg text-left mb-[20px] mt-[2px]  font-rethink"
          style={{
            fontFamily: '"Rethink Sans", sans-serif',
          }}
        >
          <p className="mb-4">
            TLS Viper serves the foundation of your business applications,
            offering outstanding performance, strong security, and the ability
            to grow with your needs change. Built on modern, enterprise-level
            infrastructure, it efficiently handles high traffic, intricate
            workflows, and critical operations without compromising speed,
            uptime, or relaiblity. Whether you're providing dynamic content,
            protecting sensitive information, or managing essential
            microservices, TLS Viper guarantees consistent system stability even
            during peak usage times.
            <br />
            <br></br>
            It operates continuously in real time, facilitating backend
            services, APIs, and live user interactions, ensuring that every
            transaction, request, and response is completed seamlessly. Advanced
            failover strategies, automated backup systems, and proactive threat
            prevention collaborate to maintain high resilience and security for
            your services. With extensive monitoring tools and real-time
            analytics, you gain valuable insights into server performance,
            allowing you to enhance operations and respond quickly through an
            easy-to-use, developer-centric dashboard.
          </p>
        </div>

        <div className="mt-[20px] sm:mt-[20px] md:mt-[20px] lg:mt-[20px] xl:mt-[20px] 2xl:mt-[20px]">
          <img src={Groupfront} alt="Groupfront image" className="w-full" />
        </div>

        <div
          className="text-[#FF7544] text-4xl font-medium font-['Rethink_Sans'] leading-[53.55px] mt-[42px] sm:mt-[20px] md:mt-[42px] lg:mt-[42px] xl:mt-[42px] 2xl:mt-[42px]"
          style={{
            fontFamily: '"Rethink Sans", sans-serif',
          }}
        >
          Pick your perfect plan
        </div>

        <div className="w-full max-w-[1105px] text-white text-lg sm:text-xl md:text-2xl font-medium font-[Rubik] leading-relaxed sm:leading-loose text-left mt-2">
          Get started in complete confidence. Our 30-day money-back guarantee
          means it's riskfree.
        </div>

        {/* Product Cards Section */}
        <div className=" mt-[20px]  w-screen  h-auto overflow-x-scroll md:overflow-x-scroll md:pl-24 scrollbar-hide">
          <div
            className="flex  overflow-x-auto lg:overflow-x-visible px-4 snap-x snap-mandatory scroll-smooth   "
            style={{
              fontFamily: '"Rethink Sans", sans-serif',
            }}
          >
            <div className=" md:min-w-[300px] flex-shrink-0 h-[800px]  mx-4  mt-15">
              <PlanCard
                name="TLS VIPER SAGA"
                specKey="Pulse2"
                isTopRated={false}
                dec={
                  "The TLS Viper Saga is a reliable entry - level server option designed for startups , small enterprises and bloggers who need reliable server resources that ensures efficient processing, rapid loading times, and adaptability across various Linux environments for fast operations without incurring excessive expenses for smooth operations and flexibility without overwhelming cost."
                }
              />
            </div>

            <div className="min-w-[280px] lg:min-w-[300px] flex-shrink-0 h-[480px] mx-6 ">
              <PlanCard
                name="TLS VIPER SUPER CAT"
                specKey="Pulse3"
                isTopRated={true}
                dec={
                  "The TLS Viper Super Cat is designed to enhance your hosting capabilities with improved speed, strength, and adaptability. Benefiting mid-sized online retail sites, agencies, and developers overseeing medium-traffic websites or intricate applications. It delivers the necessary power to manage multitasking, database operations, and to effectively accommodate moderate levels of traffic"
                }
              />
            </div>

            <div className="min-w-[280px] lg:min-w-[300px] flex-shrink-0 h-[480px] mx-6 mt-15">
              <PlanCard
                name="TLS VIPER SONIC"
                specKey="Pulse4"
                isTopRated={false}
                dec={
                  "TLS Viper Sonic is designed specifically for enterprises and applications that require significant power and dependability. Advantageous for large enterprises, busy ecommerce sites, SaaS companies, and entities handling intricate databases or applications. It guarantees seamless multitasking, rapid data retrieval, and dependable performance, even during intense workloads."
                }
              />
            </div>

            <div className="min-w-[280px] lg:min-w-[300px] flex-shrink-0 h-[480px] mx-6 mt-15">
              <PlanCard
                name="TLS VIPER VECNA"
                specKey="Pulse5"
                isTopRated={false}
                dec={
                  "TLS Viper Vecna is our premier server solution, designed for high traffic e- commerce platforms, businesses, large enterprises and critical applications that require outstanding performance and dependability. Guarantees excellent uptime, security, and scalability. Delivers exceptional processing power, exceptional high-speed performance, maximum reliability, high concurrency for seamless multitasking."
                }
              />
            </div>
          </div>
          <p className="md:hidden flex items-center justify-center text-center mt-4 text-[14px] text-[#ff7554]">
            <span className="w-[19px] h-[19px] mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M14.234 8.21479L9.4997 7.26793V2.45998C9.4997 1.25978 8.64784 0.215538 7.51809 0.0318656C6.8214 -0.0805546 6.11838 0.112618 5.58716 0.565466C5.05514 1.01752 4.74955 1.677 4.74955 2.37527V11.532L3.99348 10.9311C3.03712 10.0381 1.53369 10.0895 0.640665 11.0443C-0.253947 12.0007 -0.20407 13.5065 0.742793 14.3939L3.67997 17.2258C4.86672 18.3698 6.42872 19 8.07703 19H13.4589C15.6416 19 17.4174 17.2242 17.4174 15.0415V12.0957C17.4174 10.2154 16.0794 8.58213 14.2348 8.214L14.234 8.21479ZM15.8332 15.0423C15.8332 16.3518 14.7676 17.4174 13.4582 17.4174H8.07623C6.83961 17.4174 5.6687 16.9448 4.77884 16.0866L1.83295 13.2468C1.51469 12.9475 1.49728 12.4448 1.79654 12.1257C1.94062 11.9722 2.13617 11.8827 2.34597 11.8764C2.35547 11.8764 2.36418 11.8764 2.37368 11.8764C2.57398 11.8764 2.76636 11.9532 2.95874 12.1297L5.04722 13.7923C5.28631 13.9815 5.61012 14.0203 5.88483 13.8857C6.15876 13.7543 6.33214 13.4764 6.33214 13.1732V2.37527C6.33214 2.14251 6.43427 1.92242 6.61161 1.77121C6.79211 1.61842 7.02328 1.55508 7.26238 1.59466C7.62893 1.65404 7.91552 2.03405 7.91552 2.45998V7.91711C7.91552 8.29475 8.18232 8.61934 8.55204 8.69297L13.9229 9.7665C15.0289 9.98739 15.8324 10.9683 15.8324 12.0957V15.0415L15.8332 15.0423ZM19 3.16696C19 3.60477 18.6461 3.95865 18.2083 3.95865H13.3568L14.3797 4.98231C14.6892 5.29186 14.6892 5.79221 14.3797 6.10176C14.2253 6.25614 14.0226 6.33373 13.82 6.33373C13.6173 6.33373 13.4146 6.25614 13.2602 6.10176L11.6191 4.4598C11.2731 4.11462 11.0831 3.65544 11.0831 3.16696C11.0831 2.67849 11.2731 2.21931 11.6198 1.87334L13.2602 0.232164C13.5698 -0.0773878 14.0701 -0.0773878 14.3797 0.232164C14.6892 0.541715 14.6892 1.04206 14.3797 1.35162L13.3568 2.37527H18.2083C18.6461 2.37527 19 2.72916 19 3.16696Z"
                  fill="#FF7544"
                />
              </svg>
            </span>
            to see more
          </p>
        </div>

        <div className="px-4 md:px-8 lg:px-24 py-8 md:py-10 lg:py-14 mt-[61px] md:mt-[61px] md:mb-[61px] lg:mb-[61px]  bg-neutral-800 flex flex-col lg:flex-row justify-start items-start gap-8 md:gap-12 lg:gap-64">
          {/* Text Section */}
          <div className="w-full  flex flex-col justify-start items-start gap-4 md:gap-5">
            <h2
              className="w-full text-center lg:text-left text-white text-4xl md:text-5xl lg:text-6xl font-normal font-['Sansation'] leading-[50px] md:leading-[60px] lg:leading-[80px]"
              style={{
                fontFamily: '"Exo", sans-serif',
              }}
            >
              "Get in Touch"
            </h2>
            <p
              className="w-full text-center lg:text-left text-white text-base md:text-lg lg:text-xl font-normal font-['Rethink_Sans'] leading-relaxed"
              style={{
                fontFamily: '"Rethink Sans", sans-serif',
              }}
            >
              Please fill out the form below with your enquiry. Our team will
              review your message and respond promptly. We're here to assist you
              with accurate and helpful information.
            </p>
          </div>

          {/* Form Section */}
          <div
            className="w-full lg:w-[619px] flex flex-col justify-start items-start gap-6 md:gap-8 lg:gap-10"
            style={{
              fontFamily: '"Exo", sans-serif',
            }}
          >
            <div className="w-full flex flex-col justify-start items-start gap-4 md:gap-5">
              {/* Company Name */}
              <div className="w-full px-3 py-2 bg-neutral-50 rounded-md flex justify-start items-center">
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company name"
                  className="w-full text-neutral-400 text-base md:text-lg lg:text-xl font-normal font-['Sansation'] bg-transparent outline-none"
                />
              </div>

              {/* Company Email */}
              <div className="w-full px-3 py-2 bg-neutral-50 rounded-md flex justify-start items-center">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Company E-mail"
                  className="w-full text-neutral-400 text-base md:text-lg lg:text-xl font-normal font-['Sansation'] bg-transparent outline-none"
                />
              </div>

              {/* Employee Count and Phone Number */}
              <div className="w-full flex flex-col md:flex-row justify-start items-start gap-4 md:gap-2.5">
                <div className="w-full md:w-1/2 px-3 py-2 bg-neutral-50 rounded-md flex justify-start items-center">
                  <select
                    // type="text"
                    name="count"
                    value={formData.count}
                    onChange={handleChange}
                    placeholder="Employee count"
                    className="w-full text-neutral-400 text-base md:text-lg lg:text-xl font-normal font-['Sansation'] bg-transparent outline-none"
                  >
                    <option value="2 to 10 employees">2 to 10 employees</option>
                    <option value="11 to 50 employees">
                      11 to 50 employees
                    </option>
                    <option value="51 to 200 employees">
                      51 to 200 employees
                    </option>
                    <option value="201 to 500 employees">
                      201 to 500 employees
                    </option>
                    <option value="501+ employees">501+ employees</option>
                  </select>
                </div>
                <div className="w-full md:w-1/2 px-3 py-2 bg-neutral-50 rounded-md flex justify-start items-center">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full text-neutral-400 text-base md:text-lg lg:text-xl font-normal font-['Sansation'] bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* Stack */}
              <div className="w-full px-3 py-2 bg-neutral-50 rounded-md flex justify-start items-center">
                <select
                  // type="text"
                  placeholder="Stack"
                  className="w-full text-neutral-400 text-base md:text-lg lg:text-xl font-normal font-['Sansation'] bg-transparent outline-none"
                >
                  <option value="TLS VIPER SAGA">TLS VIPER SAGA</option>
                  <option value="TLS VIPER SUPER CAT">
                    TLS VIPER SUPER CAT
                  </option>
                  <option value="TLS VIPER SONIC">TLS VIPER SONIC</option>
                  <option value="TLS VIPER VECNA">TLS VIPER VECNA</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            {!loading ? (
              <button
                className={`${
                  isDisabled
                    ? "bg-[#d58365] hover:bg-[#e6997c] cursor-not-allowed"
                    : "bg-[#FF7544] hover:bg-orange-500 cursor-pointer "
                } " w-full px-3 py-2 bg-[#FF7544] hover:bg-orange-500 rounded outline outline-1 outline-offset-[-1px] outline-orange-400 flex justify-center items-center transition-colors duration-200"`}
                onClick={handleSubmit}
                disabled={isDisabled}
              >
                <span className="text-center text-black text-base md:text-lg lg:text-xl font-bold font-['Sansation'] leading-relaxed">
                  Sent request
                </span>
              </button>
            ) : (
              <button className="w-full px-3 py-2 bg-[#FF7544] hover:bg-orange-500 rounded outline outline-1 outline-offset-[-1px] outline-orange-400 flex justify-center items-center transition-colors duration-200">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </button>
            )}
          </div>
        </div>

        <div className="w-full flex justify-center items-center  mb-[25px] h-20 relative overflow-hidden">
          <div
            className="loading-text text-[#FF7544] font-bold text-[18px] leading-[1.34] text-center whitespace-nowrap 
                lg:text-[96px] lg:leading-[1.34]"
            style={{
              fontFamily: '"Bricolage Grotesque", sans-serif',
            }}
          >
            <span className="animated-text">The Future is Loading</span>
            <span className="loading-dots"></span>
          </div>
        </div>

        <style jsx>{`
          @keyframes leftShiftBlink {
            0% {
              transform: translateX(0);
              opacity: 1;
            }
            33% {
              transform: translateX(-2px);
              opacity: 0.8;
            }
            66% {
              transform: translateX(-4px);
              opacity: 0.6;
            }
            100% {
              transform: translateX(-6px);
              opacity: 1;
            }
          }

          @keyframes dots {
            0% {
              content: "";
            }
            33% {
              content: ".";
            }
            66% {
              content: "..";
            }
            100% {
              content: "...";
            }
          }

          .loading-text {
            display: flex;
            align-items: center;
            gap: 4px;
          }

          .animated-text {
            animation: leftShiftBlink 1.5s steps(3, end) infinite;
            display: inline-block;
          }

          .loading-dots::after {
            content: "";
            animation: dots 1.5s steps(3, end) infinite;
            display: inline-block;
            width: 2ch;
          }
        `}</style>

        <div className="w-screen mb-[60px] md:mt-[126px] lg:mt-[126px]">
          <div className="w-full flex justify-center">
            <img
              src={inHouse}
              alt="Future technology illustration"
              className="
        w-[351px] h-[234px] 
        sm:w-full sm:h-auto 
        lg:w-[1229px] lg:h-[820px] 
        object-cover rounded-lg shadow-xl
      "
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default InHouseProducts;
