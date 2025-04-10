import { Info, Glasses, Rocket, ArrowRight } from "lucide-react";

const AboutCards = () => {
  const cards = [
    {
      title: "About us",
      content: `At TLS, we’re a team of skilled professionals dedicated to empowering our clients’ marketing objectives. With idea generators, brand strategists, digital specialists, roll out managers, and creative designers, we deliver unparalleled outcomes. We unlock the full potential of brands with innovative ideas and custom solutions that drive sustainable growth. We’re passionate about delivering exceptional value and achieving our clients’ strategic objectives.`,
      icon: <Info className="text-[#ff7544] w-6 h-6" />,
    },
    {
      title: "Our Vision",
      content: `To establish ourselves as the preeminent marketing \\ software consultancy that drives business growth and elevates brands through revolutionary ideas, ingenious strategies, and flawless execution.`,
      icon: <Glasses className="text-[#ff7544] w-6 h-6" />,
    },
    {
      title: "Mission statement",
      content: `Our mission is to collaborate with our clients to generate inspiring ideas, devise brand strategies that differentiate, optimize digital channels that convert, manage roll outs that deliver, and create plugs that resonate. We are dedicated to delivering exceptional value by harnessing our expertise, creativity, and technology to drive business outcomes and surpass our clients’ expectations.`,
      icon: <Rocket className="text-[#ff7544] w-6 h-6" />,
    },
  ];

  return (
    <div className="flex flex-col gap-8 px-4 md:px-16 py-10 bg-black text-white">
      {cards.map((card, index) => (
        <div
          key={index}
          className="border-4 border-[#ff7544]  p-6 rounded-md relative "
        >
          <div className="flex items-start justify-between">
            <h2 className="text-xl md:text-2xl font-semibold text-[#ff7544]">
              {card.title}
            </h2>
            <div>{card.icon}</div>
          </div>
          <p className="mt-4 text-sm md:text-base leading-[127%] font-normal font-['Rethink_Sans']">
            {card.content}
          </p>
          <div className="mt-4 text-sm text-orange-400 font-semibold flex items-center justify-end gap-1 cursor-pointer hover:underline">
            View more <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutCards;
