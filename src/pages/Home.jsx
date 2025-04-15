import React from "react";
import AboutCards from "../components/Home/AboutCards";

const Home = () => {
  return (
    <section className="bg-black w-screen  h-screen">
      <div className="h-20 bg-green-300">nav</div>

      <div className="bg-black  text-white min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center space-y-10 gap-[20px]">
        {/* Title */}
        <h1 className="w-72 h-20 text-center justify-start text-[#ff7544] text-4xl font-medium font-['Bricolage_Grotesque_72pt'] leading-9">
          Ideas invisible even to radars.
        </h1>

        <div className="w-[170px] h-[170px]">
          <video autoPlay muted loop playsInline>
            <source src="/videos/logoAnimation.mp4" type="video/mp4"></source>
          </video>
        </div>

        {/* Description */}
        <p className="text-white text-center font-normal text-[14px] leading-[17.78px] font-['Rethink_Sans'] px-16">
          Maximize your brand’s potential with our innovative solutions and
          expertise, driving growth, efficiency, and lasting impact in a
          competitive market. Let’s elevate your brand!
        </p>

        {/* Quote Section */}
        <div className="flex  justify-center gap-8  h-[52px] text-[14px]">
          {/* Left quote */}
          <div className=" text-left w-2/5 leading-[14.28px]">
            <p className="uppercase text-[8px]">
              <span className="text-[#ff7544]">"</span> Who we are
              <span className="text-[#ff7544]">-></span>
            </p>
            <p className="text-white  font-semibold leading-tight">
              We are a <br />
              <span className="text-[#ff7544] ">Mark — tech</span> <br />
              <span className="text-white font-bold">Fusion company</span>.
            </p>
          </div>

          {/* Right quote */}
          <div className=" leading-[12.978px]  w-3/5 text-white">
            We are a team of marketing and tech experts that will grow your
            brand through innovative solutions
          </div>
        </div>
      </div>
      <div>
        <AboutCards />
      </div>

       {/* Bottom Section */}
       <div className="grid md:grid-cols-2 gap-8 mt-16 items-center">
        {/* Left quote */}
        <div>
          <p
            style={{ fontFamily: "Archivo, sans-serif" }}
            className="
    text-[#FF7544] font-normal
    tracking-[-1px] text-[20px]
    md:text-[198px] md:tracking-[-9.9px]
    mb-4
  "
          >
            “
          </p>
          <p className="uppercase text-sm font-semibold mb-1">Who we are</p>
          <h2 className="text-[#FFF] font-[700]  tracking-normal md:text-[79.371px] text-[14px] md:leading-[90%] leading-[12.6px] font-[Rethink Sans] mb-2">
            We are a <span className="text-[#FF7544] text-outline">Mark — tech</span> <br />
            <span>Fusion company</span>
            <span className="text-[#FF7544]">.</span>
          </h2>
        </div>

        {/* Right quote */}
        <div className="flex flex-col items-start md:items-end text-gray-300">
          <p
            style={{ fontFamily: "Archivo, sans-serif" }}
            className="
    text-[#FF7544] font-normal
    tracking-[-1px] text-[20px]
    md:text-[198px] md:tracking-[-9.9px]
    mb-4
  "
          >
            ”
          </p>
          <p
            style={{ fontFamily: '"Rethink Sans", sans-serif' }}
            className="
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
  );
};

export default Home;
