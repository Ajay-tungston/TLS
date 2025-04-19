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

const PlanCard = ({ name, specKey, isTopRated }) => {
  // Plan specifications based on specKey
  const specs = {
    Pulse2: { cpu: "1 vCPU", ram: "4 GB", storage: "50 GB" },
    Pulse3: { cpu: "2 vCPU", ram: "8 GB", storage: "100 GB" },
    Pulse4: { cpu: "4 vCPU", ram: "16 GB", storage: "200 GB" },
    Pulse5: { cpu: "8 vCPU", ram: "32 GB", storage: "400 GB" },
  };

  const currentSpecs = specs[specKey];

  return (
    <div className="relative flex flex-col h-full">
      {isTopRated && (
        <div className="self-stretch h-16 pl-7 pr-6 pt-3 pb-6 bg-[#FF7544] rounded-tl-3xl rounded-tr-3xl inline-flex justify-between items-center">
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
        className={`w-96 h-[600px] px-6 pt-14 pb-72 bg-black ${
          isTopRated ? "rounded-bl-2xl rounded-br-2xl" : "rounded-2xl"
        } outline outline-1 outline-offset-[-1px] outline-[#FF7544] flex flex-col justify-start items-start gap-7`}
      >
        <div className="self-stretch pb-6 border-b border-orange-400/30 flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch h-6 justify-start text-white text-3xl font-bold leading-10">
              {name}
            </div>
            <div className="self-stretch justify-start text-white text-base font-normal leading-snug">
              Our server hosting solutions are designed to deliver speed,
              security, and scalability — whether you're running a personal
              project, hosting multiple websites, or powering demanding
              applications
            </div>
          </div>
          <div className="self-stretch px-6 py-2.5 bg-[#FF7544] rounded-[5px] inline-flex justify-center items-center gap-2.5">
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
  console.log(formData);
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

  const isDisabled=!formData.companyName||!formData.email||!formData.count||!formData.phone||!formData.plan
  return (
    <>
      <Navbar />
      <section className="bg-black w-screen min-h-screen flex flex-col items-center justify-start pt-20 md:pt-32 lg:pt-40 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mt-[125px] text-white/70 text-sm md:text-base lg:text-lg text-left mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#FF7544] font-['Bricolage_Grotesque'] text-center mb-6 md:mb-10">
            Our Inhouse Products
          </h1>

          <div
            className="text-center space-y-6 w-full max-w-4xl px-4 sm:px-6"
            style={{
              fontFamily: '"Rethink Sans", sans-serif',
            }}
          >
            <p className="whitespace-pre-line text-base sm:text-lg md:text-xl leading-relaxed">
              We design and develop innovative digital solutions
              <br className="hidden sm:inline" />
              that transform ideas into engaging user experiences.
              <br className="hidden sm:inline" />
              Our products are crafted with, ensuring seamless
              <br className="hidden sm:inline" />
              interactions across platforms.
            </p>
          </div>
        </div>

        <div
          className="text-5xl md:text-6xl lg:text-7xl mt-[60px] text-[#FF7544] font-bold mb-16"
          style={{
            fontFamily: '"Rethink Sans", sans-serif',
          }}
        >
          TLS VIPER
        </div>

        <div
          className="max-w-7xl text-white/80 text-sm md:text-base lg:text-lg text-left mb-24 mt-[29px] font-rethink"
          style={{
            fontFamily: '"Rethink Sans", sans-serif',
          }}
        >
          <p className="mb-4">
            Forms the backbone of your application, ensuring seamless
            performance, advanced security, and the flexibility to scale as your
            needs evolve. Engineered with modern technology, it's optimized to
            handle high traffic volumes, complex processes, and mission-critical
            operations without compromising on speed or reliability. Whether
            you're serving dynamic content, handling user data, or powering
            microservices, this server maintains consistent uptime and system
            integrity, even during peak load conditions. Operating in real time,
            it supports backend services, APIs, and live user interactions to
            ensure every transaction, request, and response is delivered
            smoothly. Robust failover mechanisms, automated backups, and threat
            prevention systems work together to keep your services resilient and
            secure.
            <br />
            With comprehensive monitoring and analytics tools, you gain full
            visibility into server health, resource usage, and performance
            trends — enabling you to make informed decisions as you fine-tune
            workloads, manage deployments, and respond proactively to system
            alerts — all through a centralized, intuitive dashboard designed for
            developers, sysadmins, and DevOps teams alike. Whether you're just
            launching or scaling globally, this server adapts with you,
            delivering unmatched reliability and control.
          </p>
        </div>

        <div className="mt-[42px] sm:mt-[42px] md:mt-[42px] lg:mt-[42px] xl:mt-[42px] 2xl:mt-[42px]">
          <img src={Groupfront} alt="Groupfront image" className="w-full" />
        </div>

        <div
          className="text-[#FF7544] text-4xl font-medium font-['Rethink_Sans'] leading-[53.55px] mt-[42px] sm:mt-[42px] md:mt-[42px] lg:mt-[42px] xl:mt-[42px] 2xl:mt-[42px]"
          style={{
            fontFamily: '"Rethink Sans", sans-serif',
          }}
        >
          Pick your perfect plan
        </div>

        <div className="w-full max-w-[1105px] text-white text-lg sm:text-xl md:text-2xl font-medium font-[Rubik] leading-relaxed sm:leading-loose text-left">
          Get started in complete confidence. Our 30-day money-back guarantee
          means it's risk-free.
        </div>

        {/* Product Cards Section */}
        <div className="self-stretch mt-[52px] -ml-12 md:ml-0  overflow-x-auto pb-10">
          <div
            className="inline-flex justify-center items-end ml-16 gap-8 min-w-max mx-auto"
            style={{
              fontFamily: '"Rethink Sans", sans-serif',
            }}
          >
            <PlanCard
              name="TLS VIPER SAGA"
              specKey="Pulse2"
              isTopRated={false}
            />
            <PlanCard
              name="TLS VIPER SUPER CAT"
              specKey="Pulse3"
              isTopRated={true}
            />
            <PlanCard
              name="TLS VIPER SONIC"
              specKey="Pulse4"
              isTopRated={false}
            />
            <PlanCard
              name="TLS VIPER VECNA"
              specKey="Pulse5"
              isTopRated={false}
            />
          </div>
        </div>

        <div className="px-4 md:px-8 lg:px-24 py-8 md:py-10 lg:py-14 mt-[60px] bg-neutral-800 flex flex-col lg:flex-row justify-start items-start gap-8 md:gap-12 lg:gap-64">
          {/* Text Section */}
          <div className="w-full lg:w-[616px] flex flex-col justify-start items-start gap-4 md:gap-5">
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
                className={`${isDisabled?"bg-[#d58365] hover:bg-[#e6997c] cursor-not-allowed":"bg-[#FF7544] hover:bg-orange-500 cursor-pointer "} " w-full px-3 py-2 bg-[#FF7544] hover:bg-orange-500 rounded outline outline-1 outline-offset-[-1px] outline-orange-400 flex justify-center items-center transition-colors duration-200"`}
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

        <div className="w-full flex justify-center items-center mt-[126px] h-20 relative overflow-hidden">
          <div className="loading-text text-[#ff7544] text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2]">
            <span
              className="animated-text"
              style={{
                fontFamily: '"Rethink Sans", sans-serif',
              }}
            >
              The Future is Loading
            </span>
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

        <div className="mt-[126px] w-full max-w-[1200px] px-4 mx-auto">
          <img
            src={inHouse}
            alt="Future technology illustration"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default InHouseProducts;
