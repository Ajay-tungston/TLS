import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutSection = () => {
    const teamItems = [
        {
            name: "Proxitech",
            description:
                "Proxitech at Tungston labs offers complete ERP solutions helping you to manage your business. We offer web development services to create and maintain websites, web applications along with app development supporting both android and iOS, Dev Ops ensure seamless integration and automation from reliable software and much more.",
            icon: <img src="/images/settings.png" alt="Provitect Logo"
                className="w-[107px] h-[111px] p-[10px] items-center gap-[10px] border-[3px]"
            />,
            color: "bg-[#FF7544]",
        },
        {
            name: "Prominova",
            description:
                "Prominova is a dedicated division for branding and digital marketing services. The team ensures to build you a unique brand identity and helps you connect with your customers or audience. Our team would work with Pay-per-click campaigns, targeted Social media marketing and use SEO tools to drive traffic and increase conversions.",
            icon: <img src="/images/prominova.png" alt="Prominova Logo"
                className="w-[107px] h-[111px] p-[10px] flex items-center gap-[10px] border-[3px]" />,
            color: "bg-[#FF7544]",
        },
        {
            name: "Pixellar",
            description:
                "Pixellar is the creative team of Tungston Labs, focusing on digital design, branding and visual story telling. Blending creativity with originality to build your brand visually. Our team uses the tools based on UI/UX designing, 3D/ 2D visualization to create a visually immersive interface based on your business needs, Package designing and labelling for delivering your products.",
            icon: <img src="/images/pixellar.png" alt="Pixellar Logo"
                className="w-[107px] h-[111px] p-[10px] flex items-center gap-[10px] border-[3px]" />,
            color: "bg-[#FF7544]",
        },
    ];

    return (
        <div className="relative w-full overflow-hidden bg-black">
            <Navbar />
            {/* Header Section */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[40vh] md:min-h-[50vh] px-4 py-8 md:py-24 mt-10 md:mt-20">
                <img
                    src="/images/aboutus.png"
                    alt="Transforming Ideas into Iconic Brands"
                    className="mx-auto mb-8 w-[264px] h-[144px] aspect-[11/6] md:w-[886px]  md:h-[428px]"
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
                    At Tungston Labs we combine the elements of marketing strategies, web development
                    and designing tools to bring something unique from your ideas. Helping business to
                    reach new heights no matter how small or big they are.
                </p>
            </div>

            {/* About & Vision Sections */}
            <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8 md:-mt-20">
                <div className="mx-auto px-4 pt-8 sm:px-6 lg:px-8">
                    {/* About Us Card */}
                    <div
                        className="bg-black rounded-lg p-4 sm:p-8 mb-8 border-[1px] sm:border-[8px] border-[#FF7544]"
                        style={{
                            boxShadow: '10px 4px 13.5px 0px #000',
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
                                Tungston Labs is more than just a marketing agency, we are a technology and branding
                                company. Our team consists of sharp strategists and artistic creators who help your
                                business to thrive in the digital age. We are dedicated to drive your website and bring
                                digital success by tactics that help your ideas and goals to flourish. We believe in
                                consistent efforts and dedication towards our client since each collaboration is built
                                upon trust and integrity
                            </p>
                            <p className="text-base sm:text-[21px]">
                                We believe that every brand has the hidden potential to grow, and our mission is to
                                unlock them through our services and create something new or change its course to
                                success. Whether it is to build a compelling brand identity, craft high performing
                                marketing campaigns, or enhancing the digital experience, we ensure every initiative
                                yields a long term sustainable growth.
                                <br className="hidden sm:block" />
                                At the heart of our work is a passion for delivering high value results, not only to meet
                                expectations but to exceed them.
                            </p>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div
                        className="bg-black  rounded-lg p-4 sm:p-8 border-[1px] sm:border-[8px] border-[#FF7544]"
                        style={{

                            boxShadow: '10px 4px 13.5px 0px #000'
                        }}
                    >
                        <h2
                            className="text-3xl sm:text-[45px] font-semibold leading-[134%] tracking-[0] text-[#FF7544] mb-4 sm:mb-6"
                            style={{ fontFamily: 'Bricolage Grotesque' }}
                        >
                            Why Work With Us.
                        </h2>
                        <div className="text-white space-y-4">
                            <p className="text-base sm:text-[21px]">
                                We leverage new outlook and innovation to enhance every step in marketing strategies
                                and web development services. We take time to understand and research on what truly
                                matters to our clients and create tailored solutions that fulfil their goals perfectly.
                                <br className="hidden sm:block" />
                                Having a dedicated marketing and support team by your side, we ensure seamless
                                maintenance and expert guidance to run your brand at its best possible way.
                                <br className="hidden sm:block" />
                                We
                                envision to establish ourselves as the foremost marketing and software consultancy,
                                recognized for our ability to drive business growth and elevate your brand to new
                                heights possible only by building truthful connection with you.
                                {/* <br className="hidden sm:block" />
                                By fostering long-term partnerships, embracing emerging trends, and continuously pushing boundaries, we empower
                                businesses to achieve sustainable growth and maintain a competitive edge in an ever-evolving digital landscape. Our
                                commitment is not just to meet expectations, but to redefine them—establishing a new benchmark for marketing and
                                software consultancy excellence. */}
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
                            <div key={index} className="relative flex flex-col rounded-sm overflow-hidden mt-20 sm:mt-0 font-ricolage">
                                {/* ✅ Name above the box on small screens */}
                                <div
                                    className={`${item.color} sm:hidden `}
                                    style={{
                                        width: '200px',
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
                                    className="flex flex-col overflow-hidden border-[1px] sm:border-[8px] border-[#FF7544]"
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
                                        <div className="flex-1 bg-black  sm:ml-[44px] flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 md:p-0">
                                            <p
                                                className="text-white text-base sm:text-[21px] leading-relaxed sm:leading-[134%] mb-4 sm:mb-0 "
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
            <Footer />
        </div>
    );
};

export default AboutSection;