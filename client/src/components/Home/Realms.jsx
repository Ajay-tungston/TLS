import React from "react";
import { useNavigate } from "react-router-dom";

const Realms = () => {
  const navigate = useNavigate();
  const realms = [
    {
      title: "Proxitech",
      description:
        "At Tungston Labs, we provide wide range of technical services to drive digital transformation and performing business. Under Proxitech, we provide ERPsolutions that streamline operations, web development that help you build a powerful presence online and app development tailored for both iOS and Andriod platforms. We offer custom technical services, including system integration, cloud solutions and IT support for your business needs.",
      icon: "/images/Wheels.png",
    },
    {
      title: "Prominova",
      description:
        "Prominova at Tungston Labs is a dedicated division in branding and digital marketing services. Our team helps you build unique brand identities that connect with your audience. Through performing Pay-Per-Click campaigns(PPC), targeted Social Media Marketing (SMM), and strategic Search Engine Optimization (SEO) we help to drive traffic, boost engagement, and increase conversions. We offer other branding services that manages your brand identity.",
      icon: "/images/People.png",
    },
    {
      title: "Pixellar",
      description:
        "Pixellar at Tungston Labs is a creative powerhouse specializing in digital design, branding and visual story telling. We blend creativity with innovation to build your brands look. We help you to create compelling designs through graphic designing, UI/UX designing, 3D/2D visualisation to make your brand visually exciting and other creative services. From logos and marketing creatives to immersive 3D visuals, we provide unique visual solutions.",
      icon: "/images/Draw.png",
    },
  ];

  return (
    <div className="bg-black text-[#FF7544] py-8 ">
      <h2 className="text-[20px] font-bricolage md:text-[85px] font-[500] text-[#FF7544] text-center leading-[133.863%] mb-8">
        Our Services
      </h2>
      <div className="flex space-x-4 overflow-x-auto md:grid md:grid-cols-3 md:gap-6 md:space-x-0">
        {realms.map((realm, index) => (
          <div
            key={index}
            className="border-[2px] md:border-[4px] border-[#FF7544] flex-shrink-0 w-[351px] md:w-auto p-6 flex flex-col items-stretch justify-between text-center"
          >
            <div className="flex flex-col items-center">
              <h3 className="text-[21px] md:text-[64px] font-[400] font-[Bricolage_Grotesque_72pt] text-[#FF7544] leading-[133.863%] mb-4">
                {realm.title}
              </h3>
              <div className="mb-4 border-[3px] p-1 border-white">
                <img
                  className="w-[97px] h-[97px] md:w-[160px] md:h-[160px]"
                  src={realm.icon}
                  alt={realm.title}
                />
              </div>
              <p
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 9,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                className="text-left text-white font-[Rethink_Sans] text-[10px] md:text-[25px] font-[400] leading-[133.863%] mb-20 md:mb-28 md:mt-[16px]"
              >
                {realm.description}
              </p>
            </div>
            <div
              className="
  mt-4 
  text-[15px] md:text-[25px] 
  font-[500] 
  font-['Anton']
  text-[#FF7544] 
  leading-[149%] 
  flex items-center justify-end gap-1
  cursor-pointer 
"
            >
              <span className="md:hidden w-[18px] h-[18px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M16.5008 14.7728V16.875C16.5008 17.496 15.9968 18 15.3758 18H3.51531C3.11106 18 2.72406 17.8372 2.44206 17.5477L1.28481 16.3627C0.694564 15.771 0.555813 14.8147 1.05606 14.1442C1.57731 13.4445 2.49756 13.2907 3.19581 13.68C3.36231 13.7887 3.48831 13.8833 3.56106 13.9552L5.25006 15.6742V4.5C5.25006 3.58875 6.06231 2.868 7.00206 3.02025C7.73931 3.14025 8.25006 3.8325 8.25006 4.58025V10.125L14.3363 11.8912C15.6181 12.2632 16.5008 13.4378 16.5008 14.7728ZM3.53331 8.484C3.86931 8.24175 3.94581 7.773 3.70431 7.437C3.24381 6.79725 3.00081 6.04125 3.00081 5.25C3.00081 3.18225 4.68306 1.5 6.75081 1.5C8.81856 1.5 10.5008 3.18225 10.5008 5.25C10.5008 6.042 10.2578 6.798 9.79731 7.437C9.55506 7.773 9.63156 8.24175 9.96831 8.484C10.1011 8.57925 10.2541 8.625 10.4056 8.625C10.6388 8.625 10.8683 8.51625 11.0146 8.313C11.6596 7.41675 12.0001 6.35775 12.0001 5.25C12.0001 2.355 9.64506 0 6.75006 0C3.85506 0 1.50081 2.355 1.50081 5.25C1.50081 6.35775 1.84206 7.41675 2.48631 8.313C2.72781 8.649 3.19581 8.7255 3.53331 8.484Z"
                    fill="#FF7544"
                  />
                </svg>
              </span>
              <div>
                <div onClick={() => navigate(`/${realm.title.toLowerCase()}`)}>
                  View more
                </div>
              </div>
              <span className="hidden md:flex w-[24px] h-[24px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <mask
                    id="mask0_4_4118"
                    // style="mask-type:alpha"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="25"
                  >
                    <rect y="0.5" width="24" height="24" fill="#FF7544" />
                  </mask>
                  <g mask="url(#mask0_4_4118)">
                    <path
                      d="M12 22.5C10.0667 22.5 8.41667 21.8167 7.05 20.45C5.68333 19.0833 5 17.4333 5 15.5V9.5C5 7.56667 5.68333 5.91667 7.05 4.55C8.41667 3.18333 10.0667 2.5 12 2.5C13.9333 2.5 15.5833 3.18333 16.95 4.55C18.3167 5.91667 19 7.56667 19 9.5V15.5C19 17.4333 18.3167 19.0833 16.95 20.45C15.5833 21.8167 13.9333 22.5 12 22.5ZM13 9.5H17C17 8.3 16.6208 7.24167 15.8625 6.325C15.1042 5.40833 14.15 4.83333 13 4.6V9.5ZM7 9.5H11V4.6C9.85 4.83333 8.89583 5.40833 8.1375 6.325C7.37917 7.24167 7 8.3 7 9.5ZM12 20.5C13.3833 20.5 14.5625 20.0125 15.5375 19.0375C16.5125 18.0625 17 16.8833 17 15.5V11.5H7V15.5C7 16.8833 7.4875 18.0625 8.4625 19.0375C9.4375 20.0125 10.6167 20.5 12 20.5Z"
                      fill="#FF7544"
                    />
                  </g>
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="md:hidden flex items-center justify-center text-center mt-4 text-[14px]">
        <span className="w-[19px] h-[19px] mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M14.234 8.21479L9.4997 7.26793V2.45998C9.4997 1.25978 8.64784 0.215538 7.51809 0.0318656C6.8214 -0.0805546 6.11838 0.112618 5.58716 0.565466C5.05514 1.01752 4.74955 1.677 4.74955 2.37527V11.532L3.99348 10.9311C3.03712 10.0381 1.53369 10.0895 0.640665 11.0443C-0.253947 12.0007 -0.20407 13.5065 0.742793 14.3939L3.67997 17.2258C4.86672 18.3698 6.42872 19 8.07703 19H13.4589C15.6416 19 17.4174 17.2242 17.4174 15.0415V12.0957C17.4174 10.2154 16.0794 8.58213 14.2348 8.214L14.234 8.21479ZM15.8332 15.0423C15.8332 16.3518 14.7676 17.4174 13.4582 17.4174H8.07623C6.83961 17.4174 5.6687 16.9448 4.77884 16.0866L1.83295 13.2468C1.51469 12.9475 1.49728 12.4448 1.79654 12.1257C1.94062 11.9722 2.13617 11.8827 2.34597 11.8764C2.35547 11.8764 2.36418 11.8764 2.37368 11.8764C2.57398 11.8764 2.76636 11.9532 2.95874 12.1297L5.04722 13.7923C5.28631 13.9815 5.61012 14.0203 5.88483 13.8857C6.15876 13.7543 6.33214 13.4764 6.33214 13.1732V2.37527C6.33214 2.14251 6.43427 1.92242 6.61161 1.77121C6.79211 1.61842 7.02328 1.55508 7.26238 1.59466C7.62893 1.65404 7.91552 2.03405 7.91552 2.45998V7.91711C7.91552 8.29475 8.18232 8.61934 8.55204 8.69297L13.9229 9.7665C15.0289 9.98739 15.8324 10.9683 15.8324 12.0957V15.0415L15.8332 15.0423ZM19 3.16696C19 3.60477 18.6461 3.95865 18.2083 3.95865H13.3568L14.3797 4.98231C14.6892 5.29186 14.6892 5.79221 14.3797 6.10176C14.2253 6.25614 14.0226 6.33373 13.82 6.33373C13.6173 6.33373 13.4146 6.25614 13.2602 6.10176L11.6191 4.4598C11.2731 4.11462 11.0831 3.65544 11.0831 3.16696C11.0831 2.67849 11.2731 2.21931 11.6198 1.87334L13.2602 0.232164C13.5698 -0.0773878 14.0701 -0.0773878 14.3797 0.232164C14.6892 0.541715 14.6892 1.04206 14.3797 1.35162L13.3568 2.37527H18.2083C18.6461 2.37527 19 2.72916 19 3.16696Z"
              fill="#FF7544"
            />
          </svg>
        </span>
        to see more
      </p>
    </div>
  );
};

export default Realms;
