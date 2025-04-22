import React, { useRef, useState } from "react";
import HeartIcon from "../components/portfolio/HeartIcon";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Portfolio = () => {
  // const containerRef = useRef(null);
  // const [isDragging, setIsDragging] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);

  // const handleMouseDown = (e) => {
  //   setIsDragging(true);
  //   setStartX(e.pageX - containerRef.current.offsetLeft);
  //   setScrollLeft(containerRef.current.scrollLeft);
  // };

  // const handleMouseLeave = () => {
  //   setIsDragging(false);
  // };

  // const handleMouseUp = () => {
  //   setIsDragging(false);
  // };

  // const handleMouseMove = (e) => {
  //   if (!isDragging) return;
  //   e.preventDefault();
  //   const x = e.pageX - containerRef.current.offsetLeft;
  //   const walk = (x - startX) * 1; // Adjust speed factor if needed
  //   containerRef.current.scrollLeft = scrollLeft - walk;
  // };

  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);
  const containerRef5 = useRef(null);
  const containerRef6 = useRef(null);

  const [draggingState1, setDraggingState1] = useState({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [draggingState2, setDraggingState2] = useState({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [draggingState3, setDraggingState3] = useState({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [draggingState4, setDraggingState4] = useState({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [draggingState5, setDraggingState5] = useState({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [draggingState6, setDraggingState6] = useState({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  const handleMouseDown = (containerIndex, e) => {
    const containerRef = getContainerRef(containerIndex);
    const setDraggingState = getDraggingStateSetter(containerIndex);

    setDraggingState({
      isDragging: true,
      startX: e.pageX - containerRef.current.offsetLeft,
      scrollLeft: containerRef.current.scrollLeft,
    });
  };

  const handleMouseLeave = (containerIndex) => {
    const setDraggingState = getDraggingStateSetter(containerIndex);
    setDraggingState((prevState) => ({ ...prevState, isDragging: false }));
  };

  const handleMouseUp = (containerIndex) => {
    const setDraggingState = getDraggingStateSetter(containerIndex);
    setDraggingState((prevState) => ({ ...prevState, isDragging: false }));
  };

  const handleMouseMove = (containerIndex, e) => {
    const { isDragging, startX, scrollLeft } = getDraggingState(containerIndex);
    if (!isDragging) return;

    e.preventDefault();
    const x = e.pageX - getContainerRef(containerIndex).current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust speed factor if needed
    getContainerRef(containerIndex).current.scrollLeft = scrollLeft - walk;
  };

  // Helper function to get the container reference based on index
  const getContainerRef = (index) => {
    if (index === 1) return containerRef1;
    if (index === 2) return containerRef2;
    if (index === 3) return containerRef3;
    if (index === 4) return containerRef4;
    if (index === 5) return containerRef5;
    if (index === 6) return containerRef6;
  };

  // Helper function to get the setter function for dragging state
  const getDraggingStateSetter = (index) => {
    if (index === 1) return setDraggingState1;
    if (index === 2) return setDraggingState2;
    if (index === 3) return setDraggingState3;
    if (index === 4) return setDraggingState4;
    if (index === 5) return setDraggingState5;
    if (index === 6) return setDraggingState6;
  };

  // Helper function to get the dragging state based on index
  const getDraggingState = (index) => {
    if (index === 1) return draggingState1;
    if (index === 2) return draggingState2;
    if (index === 3) return draggingState3;
    if (index === 4) return draggingState4;
    if (index === 5) return draggingState5;
    if (index === 6) return draggingState6;
  };

  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <Navbar />

      <section className="px-[19px] mt-[26.44px] md:mt-[149px] md:px-[60px] flex justify-center">
        <div className="w-full text-center md:border-b border-[rgba(244,130,17,0.35)]">
          <h1
            className="capitalize
    text-[#FF7544]
    text-center 
    font-bricolage 
    text-[55px] 
    font-medium 
    leading-[133.863%]
    max-md:text-[18px] 
    max-md:leading-[133.863%]"
          >
            From vision to reality 
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
    max-md:leading-[133.863%] pb-1 md:pb-2"
          >
            Showcasing Expertise, One project at a Time. 
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
              At Tungston Labs, we focus on developing innovative solutions that deliver outcomes
specifically designed for our client’s needs. Our diverse portfolio showcases a broad
spectrum of projects across various industries that we worked on, highlighting our
proficiency in UI/UX designing, web development, digital solutions, 3D motion graphics,
and graphic design.

            </p>
          </div>
          <div></div>
        </div>
      </section>

      <section className=" w-full  py-[25px] md:pb-[70px] md:pt-0 px-[19px] md:px-[60px] bg-black overflow-x-hidden">
        <div className="flex justify-center mb-[27px] md:mb-[55px]">
          <img
            src="/images/portfolio/logo-02 (1) 1.png"
            alt="logo1"
            className="w-[58px] h-[33px] md:w-[208px] md:h-[156px]"
          />
        </div>

        {/* Scroll container with hidden scrollbar */}
        <div
          ref={containerRef1}
          onMouseDown={(e) => handleMouseDown(1, e)}
          onMouseLeave={() => handleMouseLeave(1)}
          onMouseUp={() => handleMouseUp(1)}
          onMouseMove={(e) => handleMouseMove(1, e)}
          style={{
            display: "flex",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
            willChange: "scroll-position",
            userSelect: draggingState1.isDragging ? "none" : "auto",
            cursor: draggingState1.isDragging ? "grabbing" : "grab",
          }}
        >
          <div className="flex flex-none space-x-4 p-4 w-full">
            <div className="w-[245px] h-[203px] md:w-[923px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="/images/portfolio/Frame 312 1.png"
                className="object-contain w-full h-full pointer-events-none"
                alt="image 1"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[245px] h-[203px] md:w-[923px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="/images/portfolio/Slice 1 1.png"
                className="w-full h-full pointer-events-none"
                alt="image 2"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[245px] h-[203px] md:w-[923px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="/images/portfolio/Slice 1 1 (1).png"
                className="w-full h-full pointer-events-none"
                alt="image 3"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[245px] h-[203px] md:w-[923px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="/images/portfolio/Slice 2 1.png"
                className="w-full h-full pointer-events-none"
                alt="image 4"
                style={{ userSelect: "none" }}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end md:pr-[50px]">
          <HeartIcon />
        </div>
        <div className="text-left">
          <h2 className="text-[var(--bg,#FF7544)] text-left font-[Bricolage_Grotesque_72pt] text-[18px] md:text-[45px] font-medium leading-none my-[10px] md:mt-[35px] md:mb-[17px] inline-block border-b-[1px] border-[#6C6C6C]">
          HEW Diamonds – Logo and <br className="md:hidden" /> Website design
          </h2>
          <p className="text-white font-[Rethink_Sans] text-[11px] md:text-[20px] font-normal leading-[143%] md:w-[1213px] md:h-[203px]">
          We had the opportunity to collaborate with HEW Diamonds, a high-end jewelry brand,
          to craft a sophisticated brand identity that genuinely reflects the brand's luxurious
          nature. We focused on creating a sleek and contemporary logo that captures the
          brand’s timeless elegance and exclusivity. 
         <br /> Additionally, we developed a bespoke website that provides an immersive, premium
         shopping experience. This site has a dark aesthetic along with an easy-to-navigate
         interface, and interactive elements, designed to highlight HEW Diamonds’ exquisite
         craftsmanship. The outcome is a harmonious fusion of luxury branding and cuttingedge
         digital design which enhance and represent the brand's true essence in the online
         space.

          </p>
        </div>
      </section>

      <section className=" w-full  py-[25px] md:pb-[70px] md:pt-0 px-[19px] md:px-[60px] bg-black overflow-x-hidden">
        <div className="flex justify-center mb-[27px] md:mb-[55px]">
          <img
            src="/images/portfolio/Mask group.png"
            alt="logo1"
            className="w-[114px] h-[30px] md:w-[336px] md:h-[87px]"
          />
        </div>

        {/* Scroll container with hidden scrollbar */}
        <div
          ref={containerRef2}
          onMouseDown={(e) => handleMouseDown(2, e)}
          onMouseLeave={() => handleMouseLeave(2)}
          onMouseUp={() => handleMouseUp(2)}
          onMouseMove={(e) => handleMouseMove(2, e)}
          style={{
            display: "flex",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
            willChange: "scroll-position",
            userSelect: draggingState2.isDragging ? "none" : "auto",
            cursor: draggingState2.isDragging ? "grabbing" : "grab",
          }}
          className="custom-scrollbar"
        >
          <div className="flex flex-none space-x-4 p-4 w-full">
            <div className="w-[304px] h-[203px] md:w-[923px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="/images/portfolio/toni&guy 3 2.png"
                className="object-contain w-full h-full pointer-events-none"
                alt="image 1"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[309px] h-[203px] md:w-[923px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="/images/portfolio/toni&guy 2 1.png"
                className="w-full h-full pointer-events-none"
                alt="image 2"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[390px] h-[203px] md:w-[1066px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="/images/portfolio/toni&guy 3 1.png"
                className="w-full h-full pointer-events-none"
                alt="image 3"
                style={{ userSelect: "none" }}
              />
            </div>
          </div>
        </div>

        <div className="flex w-full justify-end md:pr-[50px]">
          <HeartIcon />
        </div>
        <div className="md:text-right text-left md:ml-auto md:w-fit ">
          <h2 className="text-[var(--bg,#FF7544)] md:text-right text-left font-[Bricolage_Grotesque_72pt] text-[18px] md:text-[45px] font-medium leading-none my-[10px] md:mt-[35px] md:mb-[17px]  inline-block border-b-[1px] border-[#6C6C6C]">
          Toni & Guy Essensuals –<br className="md:hidden" /> Social Media Creatives 
          </h2>
          <p className=" text-white font-[Rethink_Sans] text-[11px] md:text-[20px] font-normal leading-[143%] md:w-[1213px] md:h-[203px]">
          We partnered with the prestigious hairdressing brand Toni & Guy Essensuals
Kanjirappally to create eye-catching social media content that enhances their online
presence. Our efforts included creating and running promotional posts, announcement
posts, and marketing designs aimed at attracting and engaging new audiences through
social media platform. Each post was carefully designed to achieve specific objectives,
from grand opening notifications to special offers and appointment bookings. We
consistently employed bold typography, fashionable imagery, and engaging content to
effectively communicate their services.
          </p>
        </div>
      </section>

      <section className=" w-full  py-[25px] md:pb-[70px] md:pt-0 px-[19px] md:px-[60px] bg-black overflow-x-hidden">
        <div className="flex justify-center mb-[27px] md:mb-[55px]">
          <img
            src="/images/portfolio/Frame.png"
            alt="logo1"
            className="w-[72px] h-[19px] md:w-[264px] md:h-[68px]"
          />
        </div>

        {/* Scroll container with hidden scrollbar */}
        <div
          ref={containerRef3}
          onMouseDown={(e) => handleMouseDown(3, e)}
          onMouseLeave={() => handleMouseLeave(3)}
          onMouseUp={() => handleMouseUp(3)}
          onMouseMove={(e) => handleMouseMove(3, e)}
          style={{
            display: "flex",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
            willChange: "scroll-position",
            userSelect: draggingState3.isDragging ? "none" : "auto",
            cursor: draggingState3.isDragging ? "grabbing" : "grab",
          }}
        >
          <div className="flex flex-none space-x-4 p-4 w-full">
            <div className="w-[245px] h-[203px] md:w-[923px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="/images/portfolio/Frame 332 1.png"
                className="object-contain w-full h-full pointer-events-none"
                alt="image 1"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[264px] h-[203px] md:w-[923px] md:h-[711px] flex-shrink-0 snap-center ">
              <img
                src="/images/portfolio/Frame 333 1.png"
                className="w-full h-full pointer-events-none"
                alt="image 2"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[241px] h-[203px] md:w-[923px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="/images/portfolio/Home 2.png"
                className="w-full h-full pointer-events-none"
                alt="image 3"
                style={{ userSelect: "none" }}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end md:pr-[50px]">
          <HeartIcon />
        </div>
        <div className="text-left">
          <h2 className="text-[var(--bg,#FF7544)] text-left font-[Bricolage_Grotesque_72pt] text-[18px] md:text-[45px] font-medium leading-none my-[10px] md:mt-[35px] md:mb-[17px]  inline-block border-b-[1px] border-[#6C6C6C]">
          Aksa – Logo &<br className="md:hidden" /> Website design
          </h2>
          <p className="text-white font-[Rethink_Sans] text-[11px] md:text-[20px] font-normal leading-[143%] md:w-[1213px] md:h-[203px]">
          Our team collaborated with AKSA to create a compelling and modern brand identity,
          which includes a logo and website design that reflect the company’s strength and
          innovative nature in the manufacturing sector. The logo features a stylish, bold
          typographic design that ensures easy recognition in both digital and print formats. 
            <br /> For the website, we designed an engaging and intuitive experience with a well-structured layout, 
            vibrant colour contrasts, and straightforward navigation. This design
          was crafted to highlight AKSA’s expertise, core values, and significance in the industry,
          all while maintaining a contemporary aesthetic.
          This project successfully merges branding with a digital experience, resulting in a
         striking visual identity that amplifies AKSA’s presence in the market.
          </p>
        </div>
      </section>

      <section className=" w-full  py-[25px] md:pb-[70px] md:pt-0 px-[19px] md:px-[60px] bg-black overflow-x-hidden">
        <div className="flex justify-center mb-[27px] md:mb-[55px]">
          <img
            src="/images/portfolio/Frame 340 1.png"
            alt="logo1"
            className="w-[134px] h-[30px] md:w-[308px] md:h-[68px]"
          />
        </div>

        {/* Scroll container with hidden scrollbar */}
        <div
          ref={containerRef4}
          onMouseDown={(e) => handleMouseDown(4, e)}
          onMouseLeave={() => handleMouseLeave(4)}
          onMouseUp={() => handleMouseUp(4)}
          onMouseMove={(e) => handleMouseMove(4, e)}
          style={{
            display: "flex",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
            willChange: "scroll-position",
            userSelect: draggingState4.isDragging ? "none" : "auto",
            cursor: draggingState4.isDragging ? "grabbing" : "grab",
          }}
          className="custom-scrollbar"
        >
          <div className="flex flex-none space-x-4 p-4 w-full">
            <div className="w-[201px] h-[203px] md:w-[1329px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="/images/portfolio/tree valley insta 1.png"
                className="object-contain w-full h-full pointer-events-none"
                alt="image 1"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[149px] h-[203px] md:w-[521px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="/images/portfolio/Tree Valley Landing Page.png"
                className="w-full h-full pointer-events-none"
                alt="image 2"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[149px] h-[203px] md:w-[495px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="/images/portfolio/Frame 343.png"
                className="w-full h-full pointer-events-none"
                alt="image 3"
                style={{ userSelect: "none" }}
              />
            </div>
          </div>
        </div>

        <div className="flex w-full justify-end md:pr-[50px]">
          <HeartIcon />
        </div>
        <div className="md:text-right text-left md:ml-auto md:w-fit ">
          <h2 className="text-[var(--bg,#FF7544)] md:text-right text-left font-[Bricolage_Grotesque_72pt] text-[18px] md:text-[45px] font-medium leading-none my-[10px] md:mt-[35px] md:mb-[17px]  inline-block border-b-[1px] border-[#6C6C6C]">
          Tree Valley – Website Design
          </h2>
          <p className=" text-white font-[Rethink_Sans] text-[11px] md:text-[20px] font-normal leading-[143%] md:w-[1213px] md:h-[203px]">
          Our collaboration with Tree Valley resulted in creating an engaging and user-friendly
           website. The design incorporates earthy colours and organic textures to embody the
            essence of nature and tranquillity, reflecting the peaceful experience their services
            provide. To build the website, we utilized high-quality images, refined typography, and
            smooth navigation to establish a captivating online presence. In addition to its aesthetic
            appeal, the website delivers a smooth browsing experience, enabling visitors to easily
            explore accommodations, amenities, and booking options.
          </p>
        </div>
      </section>

      <section className=" w-full  py-[25px] md:pb-[70px] md:pt-0 px-[19px] md:px-[60px] bg-black overflow-x-hidden">
        <div className="flex justify-center mb-[27px] md:mb-[55px]">
          <img
            src="/images/portfolio/Frame 373.png"
            alt="logo1"
            className="w-[70px] h-[30px] md:w-[248px] md:h-[104px]"
          />
        </div>

        {/* Scroll container with hidden scrollbar */}
        <div
          ref={containerRef5}
          onMouseDown={(e) => handleMouseDown(5, e)}
          onMouseLeave={() => handleMouseLeave(5)}
          onMouseUp={() => handleMouseUp(5)}
          onMouseMove={(e) => handleMouseMove(5, e)}
          style={{
            display: "flex",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
            willChange: "scroll-position",
            userSelect: draggingState5.isDragging ? "none" : "auto",
            cursor: draggingState5.isDragging ? "grabbing" : "grab",
          }}
        >
          <div className="flex flex-none space-x-4 p-4 w-full">
            <div className="w-[463px] h-[203px] md:w-[1400px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="/images/portfolio/Slide 4_3 - 1.png"
                className="hidden md:inline-block object-contain w-full h-full pointer-events-none"
                alt="image 1"
                style={{ userSelect: "none" }}
              />
              <img
                src="/images/portfolio/Frame 1658.png"
                className="md:hidden object-contain w-full h-full pointer-events-none"
                alt="image 1"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[140px] h-[203px] md:w-[465px] md:h-[711px] flex-shrink-0 snap-center ">
              <img
                src="/images/portfolio/Products.png"
                className="w-full h-full pointer-events-none"
                alt="image 2"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[245px] h-[203px] md:w-[617px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="/images/portfolio/Frame 354.png"
                className="w-full h-full pointer-events-none"
                alt="image 3"
                style={{ userSelect: "none" }}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end md:pr-[50px]">
          <HeartIcon />
        </div>
        <div className="text-left">
          <h2 className="text-[var(--bg,#FF7544)] text-left font-[Bricolage_Grotesque_72pt] text-[18px] md:text-[45px] font-medium leading-none my-[10px] md:mt-[35px] md:mb-[17px]  inline-block border-b-[1px] border-[#6C6C6C]">
            ARM SBC – Logo & Website Design
            <br className="md:hidden" />
          </h2>
          <p className="text-white font-[Rethink_Sans] text-[11px] md:text-[20px] font-normal leading-[143%] md:w-[1213px] md:h-[203px]">
          Our strategy for ARM SBC's partnership in branding and online visibility centred on
          creating a contemporary, tech-focused identity through a custom logo and website
          design. The logo incorporates a sharp icon along with eye-catching typography to
          symbolize innovation and precision. This design enhances brand recognition and
          exudes a sleek, professional feel.
            <br />
            For the website, we developed a refined and intuitive interface that effectively highlights
            ARM SBC's products. The dark colour palette, easy-to-use navigation, and structured
            layout provide an outstanding user experience while projecting a cutting-edge look.
          </p>
        </div>
      </section>

      <section className=" w-full  py-[25px] md:pb-[70px] md:pt-0 px-[19px] md:px-[60px] bg-black overflow-x-hidden">
        <div className="flex justify-center mb-[27px] md:mb-[55px] ">
          <img
            src="/images/portfolio/yfly png.png"
            alt="logo6"
            className="w-[108px] h-[29px] md:w-[251px] md:h-[68px]"
          />
        </div>

        {/* Scroll container with hidden scrollbar */}
        <div
          ref={containerRef6}
          onMouseDown={(e) => handleMouseDown(6, e)}
          onMouseLeave={() => handleMouseLeave(6)}
          onMouseUp={() => handleMouseUp(6)}
          onMouseMove={(e) => handleMouseMove(6, e)}
          style={{
            display: "flex",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
            willChange: "scroll-position",
            userSelect: draggingState6.isDragging ? "none" : "auto",
            cursor: draggingState6.isDragging ? "grabbing" : "grab",
          }}
          className="custom-scrollbar"
        >
          <div className="flex flex-none space-x-4 p-4 w-full">
            <div className="w-[272px] h-[203px] md:w-[1020px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="/images/portfolio/file_10 1.png"
                className="object-contain w-full h-full pointer-events-none"
                alt="image 1"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[272px] h-[203px] md:w-[952px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="/images/portfolio/af_493 1.png"
                className="w-full h-full pointer-events-none"
                alt="image 2"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[272px] h-[203px] md:w-[952px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="/images/portfolio/288 1.png"
                className="w-full h-full pointer-events-none"
                alt="image 3"
                style={{ userSelect: "none" }}
              />
            </div>
          </div>
        </div>

        <div className="flex w-full justify-end md:pr-[50px]">
          <HeartIcon />
        </div>
        <div className="md:text-right text-left md:ml-auto md:w-fit ">
          <h2 className="text-[var(--bg,#FF7544)] md:text-right text-left font-[Bricolage_Grotesque_72pt] text-[18px] md:text-[45px] font-medium leading-none my-[10px] md:mt-[35px] md:mb-[17px]  inline-block border-b-[1px] border-[#6C6C6C]">
          YFLY – Social Media & Brochure Design
          </h2>
          <p className=" text-white font-[Rethink_Sans] text-[11px] md:text-[20px] font-normal leading-[143%] md:w-[1213px] md:h-[203px]">
          For YFLY Study Abroad, we implemented a series of well-planned social media
initiatives aimed to enhance brand visibility and establish relationships with students
who aspire to study internationally. Our approach integrated stylish visuals, captivating
content, and unified messaging to embody the company’s professionalism and
reliability. 
In addition to our digital campaigns, we created an elegant and informative brochure
that encapsulated the essence of YFLY’s offerings. Every component — from the layout
to the typography — was carefully selected to uphold a sophisticated, professional
image across all platforms. The brochure communicated packages, information and
other details that are essential in a colorful, creative aesthetics.

          </p>
        </div>
      </section>

      <section className=" w-full pt-[10px] pb-[35px] md:pb-[148px] md:pt-[23px] px-[19px] md:px-[60px] bg-black">
        <div className="py-[14px] md:py-[32px] px-[34px] md:px-[34px] bg-[rgba(38,38,38,0.63)] rounded-[10px] md:rounded-[36px]">
          <h2
            className="text-center font-bricolage font-medium leading-normal 
               text-[18px] text-[#FF7544] 
               md:text-[45px]  mb-[10px] md:mb-[23px]"
          >
            Designing the Future of Digital Experiences
          </h2>

          <p
            className="text-center font-rethink font-normal leading-normal 
               text-[11px] text-white 
               md:text-[25px]"
          >
           We take on projects and collaborations to challenge ourselves. No challenge being too
large or small for our team. At Tungston Labs, we focus on solving intricate design and
usability challenges, guaranteeing that each digital interaction is seamless, engaging,
and meaningful. Whether it's improving user interfaces, elevating user experience, or
develop groundbreaking solutions from scratch, we combine creativity and expertise to
address any issue. Your vision, our design – expertly tailored for achievement.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
