"use client";
import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Panel Beating",
    subtitle: "Bodywork Restoration",
    image:
      "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65266060443e8ae4314a52c9_6.png",
  },
  {
    id: 2,
    title: "Paint Resprays",
    subtitle: "Blowtherm Technology",
    image:
      "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65266025912cc5f97c875c6d_5.png",
  },
  {
    id: 3,
    title: "Dent & Scratch Repair",
    subtitle: "24-Hour Turnaround",
    image:
      "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65265ffe92e9f9d8d97cfd4b_4.png",
  },
  {
    id: 4,
    title: "Accident Repairs",
    subtitle: "Minor to Major Damage",
    image:
      "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65265fd712c46c5ddd18f7e5_3.png",
  },
  {
    id: 5,
    title: "Insurance Jobs",
    subtitle: "Claim Support",
    image:
      "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65265fa40e7a6705c7ef53d4_2.png",
  },
  {
    id: 6,
    title: "Detailing",
    subtitle: "Polish & Finishing",
    image:
      "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65265f40416728f696f95a6e_1.png",
  },
];

const ServiceSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative bg-[#000000] py-16 px-6 md:px-12 font-['Orbitron',sans-serif] text-white">
      {/* ✅ Gradient moved behind content to avoid scroll issue */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D70C09]/30 blur-[160px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#D70C09]/20 blur-[160px] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* ✅ Scroll + Sticky content stays normal */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="sticky top-10 self-start">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white uppercase">
            Ovi Car Body Repair{" "}
            <span className="text-[#D70C09]">Since 2012</span>
          </h2>
          <p className="mt-4 text-[#868386] max-w-md leading-relaxed">
            With over 28 years of experience, we provide high-quality repairs,
            resprays, and dent removal with unmatched precision and fast
            turnaround — trusted by Sheffield drivers for reliability and
            excellence.
          </p>
          <button className="mt-8 bg-[#D70C09] text-white font-bold px-8 py-3 rounded-md uppercase hover:bg-[#868386] transition-all">
            Read More
          </button>
        </div>

        {/* Right Services */}
        <div className="relative flex flex-col gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex justify-between items-center transition-all duration-300 ease-out border-b border-[#1C1C1C] pb-5 hover:bg-[#0E0E0E]`}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Left Text */}
              <div>
                <h3
                  className={`text-[22px] md:text-[24px] font-bold uppercase tracking-wide transition-colors duration-300 ${
                    hoveredId === service.id ? "text-[#D70C09]" : "text-white"
                  }`}
                >
                  <span
                    className={`mr-3 text-[26px] md:text-[28px] font-bold transition-colors ${
                      hoveredId === service.id
                        ? "text-[#D70C09]"
                        : "text-[#868386]"
                    }`}
                  >
                    {service.id}
                  </span>
                  {service.title}
                </h3>
                <p
                  className={`uppercase font-semibold text-sm mt-1 transition-colors ${
                    hoveredId === service.id
                      ? "text-[#D70C09]"
                      : "text-[#868386]"
                  }`}
                >
                  {service.subtitle}
                </p>
              </div>

              {/* Right Image */}
              <div className="w-[280px] h-[170px] relative overflow-hidden rounded-sm [clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)] shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`absolute w-full h-full object-cover transition-all duration-500 ease-out transform ${
                    hoveredId === service.id
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0 translate-x-5 scale-95"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
