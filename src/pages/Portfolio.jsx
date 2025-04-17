import React from "react";

const Portfolio = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <section className="px-[19px] md:px-[60px] flex justify-center">
        <div className="w-full text-center md:border-b border-[rgba(244,130,17,0.35)]">
          <h1
            className="
    text-[#FF7544]
    text-center 
    font-bricolage 
    text-[55px] 
    font-medium 
    leading-[133.863%]
    max-md:text-[18px] 
    max-md:leading-[133.863%]"
          >
            Our Portfolio
          </h1>{" "}
          <h3
            className="
    text-[var(--bg,#FF7544)] 
    text-center 
    font-rubik 
    text-[35px] 
    font-normal 
    leading-[133.863%]
    max-md:text-[14px] 
    max-md:leading-[133.863%]"
          >
            Showcasing Excellence, One Project at a Time
          </h3>
          <div className=" flex justify-center md:pb-[55px]">
            <p
              className="w-[322px] md:w-[1327px]
    text-white 
    text-center 
    font-rethink 
    text-[25px] 
    font-normal 
    leading-[143.9%]
    max-md:text-[11px] 
    max-md:leading-[143.9%]"
            >
              At TungstonLabs, we take pride in crafting innovative and
              result-driven solutions for our clients. Our portfolio highlights
              a diverse range of projects spanning various industries,
              showcasing our expertise in UI/UX design, web and mobile
              development, digital solutions, 3D motion graphics, and graphic
              design.
            </p>
          </div>
          <div></div>
        </div>
      </section>
      <section className=" w-screen bg-black overflow-x-hidden">
        <div className="flex justify-center">
          <img src="public/images/portfolio/logo-02 (1) 1.png" />
        </div>

        {/* Scroll container with hidden scrollbar */}
        <div className="flex overflow-x-auto w-full h-full snap-x snap-mandatory">
          {/* Hide scrollbar in WebKit browsers */}
          <div className="flex flex-none space-x-4 p-4 w-full">
            <div className="w-[923px] h-[711px] flex-shrink-0 snap-center">
              <img
                src="public/images/portfolio/Frame 312 1.png"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-[923px] h-[711px] flex-shrink-0 snap-center">
              <img
                src="public/images/portfolio/Slice 2 1.png"
                className="w-full h-full"
              />
            </div>
            <div className="w-[923px] h-[711px] flex-shrink-0 snap-center">
              <img
                src="public/images/portfolio/Slice 2 1.png"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
