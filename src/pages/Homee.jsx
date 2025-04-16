import React from "react";
import AboutCards from "../components/Home/AboutCards";
import Realms from "../components/Home/Realms";

const Homee = () => {
  return (
    <div className="bg-black w-screen">
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
              Maximize your brand’s potential with our innovative solutions and
              expertise, driving growth, efficiency, and lasting impact in a
              competitive market. Let’s elevate your brand!
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
      <div className="w-ful ">
        <img
          src="/images/Frame 503.png"
          alt=""
          className="hidden md:block w-full"
        />
        {/* <img src="/images/Frame 1704.png" alt="" className="md:hidden w-full" /> */}
        <object
          data="/images/Frame 1704.svg"
          type="image/svg+xml"
          className="md:hidden w-full"
        ></object>
      </div>

      <section className="bg-black text-white px-6 py-2 md:px-32 md:py-8">
        <AboutCards />
      </section>
      <section className="bg-black text-white px-6 py-2 md:px-32 md:py-8">
        <Realms />
      </section>
      <section className="bg-black text-white px-6 py-2 md:px-32 md:py-8">
        <h2 className="text-[20px] md:text-[85px] font-[500] text-[#FF7544] text-center leading-[133.863%] mb-2">
          Our Clients
        </h2>{" "}
        <p className="text-center text-white font-[Rethink_Sans] text-[10px] font-normal leading-[13.386px] md:text-[25px] md:leading-[33.466px] md:px-28">
          We take pride in collaborating with forward-thinking brands across
          diverse industries. From ambitious startups to established global
          enterprises, our clients rely on us to craft and execute innovative
          marketing strategies that drive measurable success. Through tailored
          solutions, cutting-edge creativity, and data-driven insights, we help
          brands strengthen their market presence, connect with their audience,
          and achieve sustainable growth. At TLS, every partnership is built on
          trust, innovation, and a shared commitment to excellence.
        </p>
      </section>

      <section className="bg-black text-white px-6 py-2 md:px-32 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Work Together
            </h1>

            <p className="text-white mb-8">
              Thank you for expressing your interest in our services. We are
              thrilled to have the opportunity to learn more about your business
              and explore ways to collaborate towards achieving your objectives.
              Kindly fill out the form below or use the provided contact details
              to reach us. We will promptly respond to your inquiry and initiate
              a conversation on how we can assist you. Thank you for considering
              us as your partner, and we look forward to hearing from you soon.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
              #TLS
            </h2>
          </div>

          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="First Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Company"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Company E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Company E-mail"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  How can we help you
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="optimization"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="optimization"
                    className="ml-2 block text-sm text-white"
                  >
                    Strategic optimization of digital/media channels
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Company size
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select company size</option>
                  <option value="2-10">2 to 10 employees</option>
                  <option value="11-50">11 to 50 employees</option>
                  <option value="51-200">51 to 200 employees</option>
                  <option value="201+">201+ employees</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  How did you hear about Tungstonlabs
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select an option</option>
                  <option value="search">Search Engine</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homee;
