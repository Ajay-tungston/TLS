import { Info, Glasses, Rocket, ArrowRight } from "lucide-react";

const AboutCards = () => {
  const cards = [
    {
      title: "About us",
      content: `At TLS, we’re a team of skilled professionals dedicated to empowering our clients’ marketing objectives. With idea generators, brand strategists, digital specialists, roll out managers, and creative designers, we deliver unparalleled outcomes. We unlock the full potential of brands with innovative ideas and custom solutions that drive sustainable growth. We’re passionate about delivering exceptional value and achieving our clients’ strategic objectives.`,
      icon: (
        <Info className="text-[#ff7544] w-[25px] h-[25px] md:w-[34px] md:h-[34px]" />
      ),
    },
    {
      title: "Our Vision",
      content: `To establish ourselves as the preeminent marketing \\ software consultancy that drives business growth and elevates brands through revolutionary ideas, ingenious strategies, and flawless execution.`,
      icon: (
        <Glasses className="text-[#ff7544] w-[25px] h-[25px] md:w-[34px] md:h-[34px]" />
      ),
    },
    {
      title: "Mission statement",
      content: `Our mission is to collaborate with our clients to generate inspiring ideas, devise brand strategies that differentiate, optimize digital channels that convert, manage roll outs that deliver, and create plugs that resonate. We are dedicated to delivering exceptional value by harnessing our expertise, creativity, and technology to drive business outcomes and surpass our clients’ expectations.`,
      icon: (
        <Rocket className="text-[#ff7544] w-[25px] h-[25px] md:w-[34px] md:h-[34px]" />
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-8 py-10 bg-black text-white">
      {cards.map((card, index) => (
        <div
          key={index}
          className=" border-[2px] md:border-[6px]  border-[#ff7544]  p-6 rounded-md relative "
        >
          <div className="flex items-start justify-between">
            <h2
              className="
  text-[21px] md:text-[55px] 
  font-[600] md:font-[500] 
  font-[Bricolage Grotesque] 
  text-[#FF7544]
"
            >
              {card.title}
            </h2>
            <div className="">{card.icon}</div>
          </div>
          <p
            className="
  mt-4 
  text-[11px] md:text-[25px] 
  font-[400] 
  font-['Rethink_Sans'] 
  text-[#FFF] 
  leading-[149%]
"
          >
            {card.content}
          </p>
          {/* font-['Helvetica_Compressed']  */}
          <div
            className="
  mt-4 
  text-[15px] md:text-[25px] 
  font-[500] 
  font-['Anton']
  text-[var(--bg,#FF7544)] 
  leading-[149%] 
  flex items-center justify-end gap-1 
  cursor-pointer hover:underline
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
            View more{" "}
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
  );
};

export default AboutCards;
