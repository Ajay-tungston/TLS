import React from "react";

const AboutSection = () => {
    const teamItems = [
        {
            name: "Provitect",
            description:
                "Provitect at Tungston Labs is an innovative technology initiative focused on delivering cutting-edge solutions in AI, automation, and digital transformation. It combines advanced analytics, machine learning, and cloud-based architectures to enhance business efficiency and scalability. Whether it's optimizing workflows, streamlining operations, or enabling smart decision-making, Provitect drives innovation for enterprises seeking next-generation tech solutions.",
            icon: <img src="/images/settings.png" alt="Provitect Logo"
                className="w-[107px] h-[111px] p-[10px] items-center gap-[10px] border-[3px]"
            />,
            color: "bg-[#FF7544]",
        },
        {
            name: "Prominova",
            description:
                "Prominova at Tungston Labs is a dedicated division specializing in digital marketing, data and analytics, AI and machine learning, web and mobile app development, and more. Our expert teams collaborate to deliver innovative, data-driven solutions that drive growth and digital transformation. By combining cutting-edge technology with industry expertise, we help businesses stay ahead in an increasingly competitive digital landscape.",
            icon: <img src="/images/prominova.png" alt="Prominova Logo"
                className="w-[107px] h-[111px] p-[10px] flex items-center gap-[10px] border-[3px]" />,
            color: "bg-[#FF7544]",
        },
        {
            name: "Pixellar",
            description:
                "Pixellar at Tungston Labs is a creative powerhouse specializing in digital design, branding, and visual storytelling. It merges cutting-edge design techniques with AI-driven insights to craft stunning visuals, immersive user experiences, and impactful brand identities. From UI/UX design to dynamic graphics and motion visuals, Pixellar transforms ideas into visually compelling digital experiences, helping businesses stand out in a competitive landscape.",
            icon: <img src="/images/pixellar.png" alt="Pixellar Logo"
                className="w-[107px] h-[111px] p-[10px] flex items-center gap-[10px] border-[3px]" />,
            color: "bg-[#FF7544]",
        },
    ];

    return (
        <div className="relative w-full overflow-hidden bg-black">
            {/* Header Section */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[40vh] md:min-h-[50vh] px-4 py-8 md:py-24 mt-10 md:mt-20">
                <img
                    src="/images/aboutus.png"
                    alt="Transforming Ideas into Iconic Brands"
                    className="mx-auto mb-8 w-full max-w-[786px] h-auto md:h-[428px]"
                />
                <p
                    className="text-white max-w-2xl mx-auto px-4 font-rethink text-lg md:text-[25px]"
                    style={{
                        fontWeight: 600,
                        lineHeight: '134%',
                        letterSpacing: '0%',
                        textAlign: 'center',
                    }}
                >
                    At TLS, we are a team of experts dedicated to elevating brands through strategic marketing and
                    innovative solutions. With a blend of creativity and strategy, we help businesses unlock their full
                    potential, drive growth, and achieve lasting impact.
                </p>
            </div>

            {/* About & Vision Sections */}
            <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8 md:-mt-20">
                <div className="mx-auto px-4 pt-8 sm:px-6 lg:px-8">
                    {/* About Us Card */}
                    <div
                        className="bg-black border-[#FF7544] rounded-lg p-4 sm:p-8 mb-8"
                        style={{
                            border: '8px solid #FF7544',
                            boxShadow: '10px 4px 13.5px 0px #000'
                        }}
                    >
                        <h2
                            className="text-3xl sm:text-[45px] font-semibold leading-[134%] tracking-[0%] text-[#FF7544] mb-4 sm:mb-6"
                            style={{ fontFamily: 'Bricolage Grotesque' }}
                        >
                            About us.
                        </h2>
                        <div className="text-white space-y-4">
                            <p className="text-base sm:text-[21px]">
                                At TLS, we are more than just a marketing agency—we are a team of strategists, creators, and innovators committed to
                                transforming brands and driving measurable success. Our diverse team includes idea generators, brand strategists,
                                digital specialists, rollout managers, and creative designers, all working together to deliver tailored solutions that align
                                with our clients' unique goals.
                            </p>
                            <p className="text-base sm:text-[21px]">
                                We believe that every brand has untapped potential, and our mission is to unlock it through innovation, strategy, and
                                impactful execution. Whether it's building a compelling brand identity, crafting high-performing marketing campaigns, or
                                enhancing digital experiences, we ensure that every initiative contributes to long-term, sustainable growth.
                                <br className="hidden sm:block" />
                                At the heart of our work is a passion for delivering exceptional value—not just meeting expectations, but exceeding them.
                                By blending creativity, data-driven insights, and cutting-edge technology, we help brands thrive in an ever-evolving
                                marketplace, turning strategic objectives into real-world success.
                            </p>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div
                        className="bg-black border-[#FF7544] rounded-lg p-4 sm:p-8"
                        style={{
                            border: '8px solid #FF7544',
                            boxShadow: '10px 4px 13.5px 0px #000'
                        }}
                    >
                        <h2
                            className="text-3xl sm:text-[45px] font-semibold leading-[134%] tracking-[0] text-[#FF7544] mb-4 sm:mb-6"
                            style={{ fontFamily: 'Bricolage Grotesque' }}
                        >
                            Our Vision
                        </h2>
                        <div className="text-white space-y-4">
                            <p className="text-base sm:text-[21px]">
                                Our mission is to establish ourselves as the foremost marketing and software consultancy, recognized for our unparalleled
                                ability to drive business growth and elevate brands to new heights. We are committed to transforming the way businesses
                                engage with their audiences through revolutionary ideas, cutting-edge technologies, and forward-thinking strategies.
                                <br className="hidden sm:block" />
                                With a relentless focus on innovation, we craft ingenious marketing and software solutions that not only meet but exceed
                                industry standards. Our expertise spans across diverse domains, enabling us to deliver customized, data-driven strategies
                                that enhance brand visibility, optimize operations, and maximize ROI.
                                <br className="hidden sm:block" />
                                At the heart of our consultancy is a passion for excellence and a dedication to flawless execution. We believe that success
                                lies in the details, and we meticulously refine every aspect of our approach to ensure seamless implementation and
                                impactful results.
                                <br className="hidden sm:block" />
                                By fostering long-term partnerships, embracing emerging trends, and continuously pushing boundaries, we empower
                                businesses to achieve sustainable growth and maintain a competitive edge in an ever-evolving digital landscape. Our
                                commitment is not just to meet expectations, but to redefine them—establishing a new benchmark for marketing and
                                software consultancy excellence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Our Team Section */}
                <div className="w-full bg-black mt-8 sm:mt-[102px] px-4 sm:px-6 lg:px-8">
                    <div
                        className="w-full h-auto sm:h-[88px] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-[40px] bg-[#FF7544] rounded-sm p-4 sm:py-[14px] sm:px-[57px]"
                    >
                        <h2
                            className="text-4xl sm:text-[72px] font-medium leading-[133.863%] text-[#E0DCD9]"
                            style={{ fontFamily: 'Bricolage Grotesque' }}
                        >
                            Our Team
                        </h2>
                        <img
                            src="/images/icon.png"
                            alt="Team Icon"
                            className="w-8 h-8 sm:w-[32px] sm:h-[32px]"
                        />
                    </div>

                    <div className="mx-auto space-y-8 mt-8 sm:mt-[50px]">
                        {teamItems.map((item, index) => (
                            <div key={index} className="relative flex flex-col rounded-sm overflow-hidden mt-20 sm:mt-0">
                                {/* ✅ Name above the box on small screens */}
                                <div
                                    className={`${item.color} sm:hidden `}
                                    style={{
                                        width: '139px',
                                        padding: '12px 18px',
                                        zIndex: 1000,
                                    }}
                                >
                                    <h3
                                        className="text-lg text-[#E0DCD9] text-center font-medium"
                                        style={{
                                            whiteSpace: 'nowrap',
                                            fontFamily: 'Bricolage Grotesque',
                                        }}
                                    >
                                        {item.name}
                                    </h3>

                                </div>

                                {/* 🔶 Border box */}
                                <div
                                    className="flex flex-col rounded-sm overflow-hidden"
                                    style={{ border: '8px solid #FF7544' }}
                                >
                                    <div className="flex flex-col sm:flex-row">
                                        {/* Desktop Sidebar */}
                                        <div
                                            className={`hidden sm:flex ${item.color} sm:w-[112px] sm:h-[427px] sm:px-[10px] sm:py-[55px] items-center justify-center`}
                                            style={{
                                                gap: '10px',
                                            }}
                                        >
                                            <h3
                                                className="transform -rotate-90 whitespace-nowrap"
                                                style={{
                                                    color: '#E0DCD9',
                                                    textAlign: 'center',
                                                    fontFamily: 'Bricolage Grotesque',
                                                    fontSize: '84px',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    lineHeight: '133.863%',
                                                }}
                                            >
                                                {item.name}
                                            </h3>
                                        </div>

                                        {/* Content Area */}
                                        <div className="flex-1 bg-black  sm:ml-[44px] flex flex-col sm:flex-row sm:items-center sm:justify-between -mt-20">
                                            <p
                                                className="text-white text-base sm:text-[21px] leading-relaxed sm:leading-[134%] mb-4 sm:mb-0"
                                                style={{
                                                    maxWidth: '1000px',
                                                    fontFamily: 'Bricolage Grotesque',
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {item.description}
                                            </p>
                                            <div className="border border-white self-center sm:self-auto md:mt-50  md:mr-20  ml-56 md:ml-0 ">
                                                {item.icon}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;