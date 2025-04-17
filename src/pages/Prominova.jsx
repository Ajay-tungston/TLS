import React from "react";
import Prominova from "../assets/promo.svg";
import Promis from '../assets/prominoslg.png'
const ProminovaSection = () => {
  return (
    <section className="bg-black w-screen min-h-screen flex flex-col items-center justify-start pt-20 md:pt-32 lg:pt-40 px-4 md:px-8 lg:px-16">
<div className="relative w-[189px] h-[146px] sm:w-[189px] sm:h-[146px] md:w-[200px] md:h-[100px] lg:w-[600px] lg:h-[400px] xl:w-[1000px] xl:h-[1000px] overflow-hidden rounded-lg shadow-lg flex-shrink-0">
  <img
    src={Promis}
    alt="Descriptive Alt Text"
    className="w-full h-full object-cover"
  />
  
  {/* Centered Heading over Image */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-2">
    {/* "We are the Team" Text */}
    <h2
      className="font-['Bricolage_Grotesque_72pt'] 
        text-[10px] sm:text-[10px] md:text-[24px] lg:text-[34px]
        font-normal leading-[133.863%] text-white
        [text-shadow:_0px_0px_12.2px_rgba(0,0,0,0.33)]"
    >
      We are the Team
    </h2>

    {/* "Prominova" Text */}
    <h1
      className="font-['Bricolage_Grotesque_72pt']
        text-[20px] sm:text-[20px] md:text-[40px] lg:text-[64px]
        font-medium leading-[133.863%] text-[#E0DCD9]
        [text-shadow:_0px_0px_12.2px_rgba(0,0,0,0.33)]"
    >
      Prominova
    </h1>
  </div>
</div>




  <div className="flex flex-col bg-black items-center gap-16">
  {/* Main container */}
  <div className=" min-h-[400px] mt-[32px] lg:h-96 md:w-[1679px] w-[360px] h-[195px]  px-6 bg-black lg:pl-12 lg:pr-28 py-9  outline-2 outline-offset-[-8px] outline-[#ff7554] flex flex-col lg:flex-row justify-start items-center gap-6 lg:gap-24 bg-[#E0DCD9] relative">

    {/* Title Section */}
{/* Title Section */}
<div className="w-full  lg:w-14 lg:border-[8px] border-[1px] flex lg:flex-col justify-start lg:justify-center lg:text-center items-center gap-2.5 lg:h-full lg:pt-12">
  
  {/* Full-width Prominova for small screens */}
  <div className="block lg:hidden -mx-5 w-screen px-6 -mt-8 bg-[#FF7554] py-4 text-center">
    <h2 className="text-white font-bricolage text-4xl sm:text-5xl font-medium">
      Prominova
    </h2>
  </div>

  {/* Vertical Prominova for large screens */}
  <div
    className="hidden lg:block relative font-bricolage text-6xl font-medium text-white whitespace-nowrap
    -rotate-90 origin-top-left ml-0.5 self-stretch mt-72 text-center
    [text-shadow:_0px_0px_12px_rgb(0_0_0_/_0.33)]"
  >
    <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[4px] after:bg-[#FF7554]">
      Prominova
    </span>
  </div>
</div>


    {/* Content section */}
    <div className="w-full lg:w-[calc(100%-96px)] text-white font-normal font-['Rethink_Sans'] px-2 sm:px-4 lg:pr-[116px]">
    <p className="
  text-white 
  font-normal 
  font-['Rethink_Sans'] 
  text-[10px] 
  sm:text-sm 
  md:text-base 
  lg:text-[25px] 
  leading-3 
  sm:leading-relaxed 
  md:leading-[1.6] 
  lg:leading-[133.863%]
">
  Prominova at Tungston Labs is a dedicated division specializing in
  performance marketing, digital advertising, and brand growth
  strategies. We leverage data-driven insights, targeted campaigns,
  and advanced automation to help businesses scale and achieve
  measurable success in the ever-evolving digital landscape. Our
  expertise spans SEO, PPC, social media management, and conversion
  optimization, making Prominova the go-to solution for brands
  aiming for rapid growth and digital transformation.
  <br />
  Prominova also focuses on audience behavior analysis, ensuring
  marketing efforts are precisely tailored for maximum engagement.
  Our team continuously adapts to emerging trends and technologies,
  keeping brands ahead in the competitive digital space. With a
  results-driven approach, we transform marketing strategies into
  powerful growth engines that drive long-term success.
</p>
</div>

  </div>
</div>


<div className="relative w-[360px] md:w-[1679px] h-[51px] sm:h-[200px] md:h-[288px] lg:h-[288px] xl:h-[288px] mt-[20px] lg:mt-[55px]">
  <img
    src={Prominova}
    alt="Our Services"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center border border-[#FF7544] bg-[rgba(71,71,71,0.55)] backdrop-blur-[0px]">
    <h1 className="text-white text-sm sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-medium font-['Bricolage_Grotesque_72pt'] text-center leading-none">
      Our services
    </h1>
  </div>
</div>


    </section>
  );
};

export default ProminovaSection;
