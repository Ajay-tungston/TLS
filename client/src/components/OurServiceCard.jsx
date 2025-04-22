import React from "react";

const OurServiceCard = ({name,data}) => {
  return (
    <>
      <div className="border-[1px] md:border-[8px] border-[#FF7544] ">
        <div
          className="md:hidden h-[37px] bg-[#FF7544] flex justify-center items-center text-[#E0DCD9] text-center font-[500] font-rethink text-[20px] leading-[133.863%]"
          style={{ textShadow: "0px 0px 12.2px rgba(0, 0, 0, 0.33)" }}
        >
          {name}
        </div>
        <div className="flex">
          <div
            className={`hidden md:flex sm:w-[112px] sm:h-[360px] sm:px-[10px] sm:py-[55px] items-center justify-center`}
            style={{
              gap: "10px",
            }}
          >
            <h3
              className="transform -rotate-90 whitespace-nowrap text-[#E0DCD9] text-center font-[500] font-bricolage border-b-2 border-[#FF7544] text-[64px] leading-[133.863%]"
              style={{ textShadow: "0px 0px 12.2px rgba(0, 0, 0, 0.33)" }}
            >
              {name}
            </h3>
          </div>
          <p className="md:ml-[90px] flex items-center px-[15px] py-[25px] text-white font-[400] font-rethink md:text-[25px] text-[10px] leading-[133.863%]">
            {data}
          </p>
        </div>
      </div>
      <div className=" border md:border-[3px] border-[#FF7544] h-[51px] md:h-[288px] mt-[30px] md:mt-[55px] bg-[url('/images/Frame661.png')] bg-cover bg-center flex justify-center items-center">
        <p className="text-white font-[500] font-bricolage text-[20px] leading-[133.863%] md:text-[85px] md:leading-[133.863%]">
          Our services
        </p>
      </div>
    </>
  );
};

export default OurServiceCard;
