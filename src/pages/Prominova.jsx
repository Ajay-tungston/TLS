import React from "react";
import Prominova from "../assets/promo.svg";
const ProminovaSection = () => {
  return (
    <section className="bg-black w-screen min-h-screen flex flex-col items-center justify-start pt-20 md:pt-32 lg:pt-40 px-4 md:px-8 lg:px-16">
  <div className="flex flex-col bg-black items-center gap-16">
  {/* Main container */}
  <div className="h-auto min-h-[384px] lg:h-96 w-full px-6 bg-black lg:pl-12 lg:pr-28 py-9 outline outline-8 outline-offset-[-8px] outline-[#ff7554] flex flex-col lg:flex-row justify-start items-center gap-6 lg:gap-24 bg-[#E0DCD9] relative">

    {/* Title Section */}
{/* Title Section */}
<div className="w-full lg:w-14 lg:border-r-[3px] flex lg:flex-col justify-start lg:justify-center lg:text-center items-center gap-2.5 lg:h-full lg:pt-12">
  
  {/* Full-width Prominova for small screens */}
  <div className="block lg:hidden -mx-6 w-screen px-6 bg-[#FF7554] py-4 text-center">
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
    <div className="w-full lg:w-[calc(100%-96px)] text-white font-normal font-['Rethink_Sans'] leading-relaxed sm:leading-loose lg:pr-[116px]">
      <p className="text-base sm:text-lg lg:text-2xl">
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


      <div className="relative w-full h-[280px] lg:mt-[55px] md:mt-[55px] sm:h-[320px] md:h-[360px] lg:h-[400px]">
        <img
          src={Prominova}
          alt="Our Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-['Bricolage_Grotesque_72pt'] leading-[113.78px] text-center">
            Our services
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ProminovaSection;
