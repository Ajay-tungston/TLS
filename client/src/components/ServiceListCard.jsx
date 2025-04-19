import React from "react";

const ServiceListCard = ({ title, no, description, largeSvg, mobileSvg }) => {
  return (
    <>
      <div className=" relative border-[1px] border-[#FF7544]  p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-[28px] md:text-[60px] font-bold leading-none">
            <span
              style={{ fontFamily: '"Bricolage Grotesque 72pt"' }}
              className="text-white text-[40px] leading-[133.863%] font-medium md:text-[115px] md:leading-[133.863%]"
            >
              {no}
            </span>
            <span className="text-[#FF7544] font-bricolage font-medium text-[20px] md:text-[55px] leading-[133.863%]">
              <span
                style={{ fontFamily: '"Bricolage Grotesque 72pt"' }}
                className="text-[#FF7544] text-[40px] leading-[133.863%] font-medium md:hidden"
              >
                .
              </span>
              <span className="hidden md:inline-block">.</span>
              {title}
            </span>{" "}
          </h2>
          <p
            style={{
              fontFamily: "Rethink Sans",
            }}
            className="mt-3 text-[10px] text-white leading-[133.863%] md:text-[20px] md:leading-[133.863%]  md:max-w-[1211px]"
          >
            {description}
          </p>
        </div>
        {/* <img src={imageSrc} alt={imageAlt} className="w-12 md:w-24" /> */}
        <div className="hidden md:inline-block">{largeSvg}</div>
        <div className="md:hidden absolute right-2 top-14">{mobileSvg}</div>
      </div>
    </>
  );
};

export default ServiceListCard;
