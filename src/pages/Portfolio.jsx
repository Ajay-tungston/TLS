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

      <section className=" w-full  py-[25px] md:pb-[70px] md:pt-0 px-[19px] md:px-[60px] bg-black overflow-x-hidden">
        <div className="flex justify-center mb-[27px] md:mb-[55px]">
          <img
            src="public/images/portfolio/logo-02 (1) 1.png"
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
                src="public/images/portfolio/Slice 1 1.png"
                className="w-full h-full pointer-events-none"
                alt="image 2"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[245px] h-[203px] md:w-[923px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="public/images/portfolio/Slice 1 1 (1).png"
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
            HEW Diamonds – Logo & <br className="md:hidden" /> Website Design
          </h2>
          <p className="text-white font-[Rethink_Sans] text-[11px] md:text-[20px] font-normal leading-[143%] md:w-[1213px] md:h-[203px]">
            We had the privilege of crafting a sophisticated brand identity and
            digital presence for HEW Diamonds, a luxury jewelry brand that
            embodies elegance and precision. Our work included designing a
            sleek, modern logo that reflects the brand’s timeless appeal and
            exclusivity.
            <br /> In addition, we developed a bespoke website that offers an
            immersive, high-end shopping experience. With a refined dark
            aesthetic, intuitive navigation, and interactive elements, the site
            seamlessly showcases HEW Diamonds' exquisite craftsmanship. The
            result is a seamless blend of luxury branding and cutting-edge
            digital design, elevating the brand’s online presence to match its
            premium offerings.
          </p>
        </div>
      </section>

      <section className=" w-full  py-[25px] md:pb-[70px] md:pt-0 px-[19px] md:px-[60px] bg-black overflow-x-hidden">
        <div className="flex justify-center mb-[27px] md:mb-[55px]">
          <img
            src="public/images/portfolio/Mask group.png"
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
            <div className="w-[245px] h-[203px] md:w-[923px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="public/images/portfolio/toni&guy 3 2.png"
                className="object-contain w-full h-full pointer-events-none"
                alt="image 1"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[245px] h-[203px] md:w-[923px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="public/images/portfolio/toni&guy 2 1.png"
                className="w-full h-full pointer-events-none"
                alt="image 2"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[245px] h-[203px] md:w-[923px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="public/images/portfolio/toni&guy 3 1.png"
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
            Toni&Guy Essensuals –<br className="md:hidden" /> Social Media
            Creatives
          </h2>
          <p className=" text-white font-[Rethink_Sans] text-[11px] md:text-[20px] font-normal leading-[143%] md:w-[1213px] md:h-[203px]">
            We collaborated with Toni&Guy Essensuals Kanjirappally to design
            engaging and visually striking social media content that enhances
            their digital presence. Our work included promotional graphics,
            announcement posts, and marketing creatives tailored to attract and
            engage their audience.From grand opening announcements to exclusive
            offers and appointment bookings, each post was crafted with a modern
            aesthetic and brand consistency. The bold typography, stylish
            imagery, and compelling call-to-actions effectively communicate
            their services while reinforcing their premium salon experience.
          </p>
        </div>
      </section>

      <section className=" w-full  py-[25px] md:pb-[70px] md:pt-0 px-[19px] md:px-[60px] bg-black overflow-x-hidden">
        <div className="flex justify-center mb-[27px] md:mb-[55px]">
          <img
            src="public/images/portfolio/Frame.png"
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
                src="public/images/portfolio/Frame 332 1.png"
                className="object-contain w-full h-full pointer-events-none"
                alt="image 1"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[245px] h-[203px] md:w-[923px] md:h-[711px] flex-shrink-0 snap-center ">
              <img
                src="public/images/portfolio/Frame 333 1.png"
                className="w-full h-full pointer-events-none"
                alt="image 2"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[245px] h-[203px] md:w-[923px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="public/images/portfolio/Home 2.png"
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
            AKSA – Logo &<br className="md:hidden" /> Website Design
          </h2>
          <p className="text-white font-[Rethink_Sans] text-[11px] md:text-[20px] font-normal leading-[143%] md:w-[1213px] md:h-[203px]">
            Our team crafted a bold and modern brand identity for AKSA,
            including a logo and website design that reflect the company’s
            strength and innovation in the manufacturing sector. The logo
            features a clean, professional design with a strong typographic
            presence, ensuring brand recognition across both digital and print
            platforms. Its versatility allows seamless integration across
            various backgrounds and applications.
            <br /> For the website, we developed an engaging and user-friendly
            experience, incorporating a structured layout, vibrant color
            contrasts, and intuitive navigation. The design highlights AKSA’s
            expertise, values, and industrial presence while maintaining a
            contemporary aesthetic.
            <br /> This project successfully merges branding and digital
            experience, creating a powerful visual identity that strengthens
            AKSA’s industry presence.
          </p>
        </div>
      </section>

      <section className=" w-full  py-[25px] md:pb-[70px] md:pt-0 px-[19px] md:px-[60px] bg-black overflow-x-hidden">
        <div className="flex justify-center mb-[27px] md:mb-[55px]">
          <img
            src="public/images/portfolio/Frame 340 1.png"
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
                src="public/images/portfolio/tree valley insta 1.png"
                className="object-contain w-full h-full pointer-events-none"
                alt="image 1"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[149px] h-[203px] md:w-[521px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="public/images/portfolio/Tree Valley Landing Page.png"
                className="w-full h-full pointer-events-none"
                alt="image 2"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[149px] h-[203px] md:w-[495px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="public/images/portfolio/Frame 343.png"
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
            We designed a visually immersive and user-friendly website for Tree
            Valley, capturing the essence of nature and tranquility. The design
            embraces earthy tones, organic textures, and a seamless layout to
            reflect the serene experience of staying in a treehouse retreat. The
            website offers an intuitive browsing experience, allowing visitors
            to explore accommodations, amenities, and booking options
            effortlessly. High-quality visuals, elegant typography, and smooth
            navigation create an engaging digital presence that aligns with Tree
            Valley’s brand identity.
          </p>
        </div>
      </section>

      <section className=" w-full  py-[25px] md:pb-[70px] md:pt-0 px-[19px] md:px-[60px] bg-black overflow-x-hidden">
        <div className="flex justify-center mb-[27px] md:mb-[55px]">
          <img
            src="public/images/portfolio/Frame 373.png"
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
                src="public/images/portfolio/Slide 4_3 - 1.png"
                className="hidden md:inline-block object-contain w-full h-full pointer-events-none"
                alt="image 1"
                style={{ userSelect: "none" }}
              />
              <img
                src="public/images/portfolio/Frame 1658.png"
                className="md:hidden object-contain w-full h-full pointer-events-none"
                alt="image 1"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[113px] h-[203px] md:w-[465px] md:h-[711px] flex-shrink-0 snap-center ">
              <img
                src="public/images/portfolio/Products.png"
                className="w-full h-full pointer-events-none"
                alt="image 2"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[245px] h-[203px] md:w-[617px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="public/images/portfolio/Frame 354.png"
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
            Our approach to ARM SBC’s branding and digital presence focused on
            creating a modern, tech-driven identity through a custom logo and
            website design.The logo incorporates a simplified circuit icon
            combined with bold typography, symbolizing innovation and precision
            in the embedded systems industry. This design ensures strong brand
            recognition while maintaining a futuristic and professional
            aesthetic.
            <br />
            For the website, we developed a sleek and user-friendly interface
            that highlights ARM SBC’s products effectively. The dark theme,
            intuitive navigation, and structured layout provide an optimal user
            experience while reinforcing a cutting-edge, high-tech look.
          </p>
        </div>
      </section>

      <section className=" w-full  py-[25px] md:pb-[70px] md:pt-0 px-[19px] md:px-[60px] bg-black overflow-x-hidden">
        <div className="flex justify-center mb-[27px] md:mb-[55px] ">
          <img
            src="public/images/portfolio/yfly png.png"
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
                src="public/images/portfolio/file_10 1.png"
                className="object-contain w-full h-full pointer-events-none"
                alt="image 1"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[272px] h-[203px] md:w-[952px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="public/images/portfolio/af_493 1.png"
                className="w-full h-full pointer-events-none"
                alt="image 2"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="w-[272px] h-[203px] md:w-[952px] md:h-[711px] flex-shrink-0 snap-center">
              <img
                src="public/images/portfolio/288 1.png"
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
            At Y Fly, we’ve taken a comprehensive approach to elevate the brand
            by building a dynamic, user-friendly website that reflects the
            company’s vision of empowering students to pursue global education
            opportunities. Beyond the digital platform, we also handle Y Fly’s
            social media presence—designing and managing engaging content that
            communicates their mission, showcases services, and keeps their
            audience informed and inspired. From hiring posts to university
            guides and student spotlights, our visuals are crafted to build
            trust and drive meaningful interaction across platforms.
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
            No challenge is too big or too small for us. At TungstonLabs, we
            specialize in solving complex design and usability issues, ensuring
            every digital interaction is smooth, engaging, and impactful.
            Whether it's refining user interfaces, enhancing user experience, or
            building innovative solutions from the ground up, we bring
            creativity and expertise to tackle any problem. Your vision, our
            design—seamlessly crafted for success.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
