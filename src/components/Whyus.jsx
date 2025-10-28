import React from "react";

const About = () => {
    return (
        <section className="relative bg-black text-white px-6 md:px-12 lg:px-24 py-20 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-orange-600/20 blur-[180px] rounded-full -z-10"></div>

            {/* Top Section Title */}
            <div className="max-w-6xl mx-auto">
                <p className="text-white uppercase tracking-widest mb-4 border-l-4 border-orange-500 pl-4">
                    Discover the Passion and Expertise Behind Carsy
                </p>
                <div className="flex">
                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight uppercase max-w-4xl">
                        From Our Garage to Your Driveway: The Story of Carsy's Commitment to
                        Superior Car Care and Customer Satisfaction
                    </h2>
                    {/* Rotating Tire Image - Centered Below */}
                    <div className="flex justify-center items-center relative">
                        {/* Glow effect behind tire */}
                       <div className="absolute w-[250px] h-[250px] md:w-[320px] bg-orange-500/10 rounded-full blur-3xl"></div>

                        {/* Rotating Tire Image */}
                        <div className="relative w-[250px] h-[250px] md:w-[320px]">
                            <img
                                src="/image.svg"
                                alt="Rotating Tire"
                                className="w-full h-full object-contain animate-spin-smooth drop-shadow-[0_0_40px_rgba(249,115,22,0.4)]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className=" mt-16 max-w-6xl mx-auto">
                {/* Two Sections Side by Side */}
                <div className="grid md:grid-cols-2 gap-10 mb-10">
                    <div>
                        <h6 className="text-white uppercase tracking-widest mb-3 border-l-4 border-orange-500 pl-4">
                            Core Values
                        </h6>
                        <p className="text-gray-300 leading-relaxed max-w-lg">
                            At Carsy, our values are the bedrock of our company. We uphold
                            integrity in all our actions, believing that honesty and
                            transparency build the foundation of trust with our customers and
                            partners. We strive for excellence, constantly seeking improvement.
                        </p>
                    </div>

                    <div>
                        <h6 className="text-white uppercase tracking-widest mb-3 border-l-4 border-orange-500 pl-4">
                            Get to Know
                        </h6>
                        <p className="text-gray-300 leading-relaxed max-w-md">
                            Our goals at Carsy are designed to drive our continuous improvement
                            and success. We aim to provide exceptional service that exceeds
                            customer expectations, ensuring every interaction leaves a positive
                            impression.
                        </p>
                    </div>
                </div>
            </div>

            {/* Animation Styles */}
            <style>{`
        @keyframes spin-smooth {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-smooth {
          animation: spin-smooth 10s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default About;