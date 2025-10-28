import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Infinite Motors",
    subtitle: "Detailing",
    image:
      "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65266060443e8ae4314a52c9_6.png",
  },
  {
    id: 2,
    title: "Phoenix Works",
    subtitle: "Inspection",
    image:
      "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65266025912cc5f97c875c6d_5.png",
  },
  {
    id: 3,
    title: "Clever Car Care",
    subtitle: "Maintenance",
    image:
      "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65265ffe92e9f9d8d97cfd4b_4.png",
  },
  {
    id: 4,
    title: "Milestone Repair",
    subtitle: "Repairs",
    image:
      "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65265fd712c46c5ddd18f7e5_3.png",
  },
  {
    id: 5,
    title: "Swift Repairs",
    subtitle: "Car Wash",
    image:
      "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65265fa40e7a6705c7ef53d4_2.png",
  },
  {
    id: 6,
    title: "Precision Care",
    subtitle: "Tire Services",
    image:
      "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65265f40416728f696f95a6e_1.png",
  },
];

const ServiceSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative bg-[#F9F9F9] py-16 px-6 md:px-12 font-['Orbitron',sans-serif]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="sticky top-10">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black uppercase">
            Excellence in Automotive Service{" "}
            <span className="text-[#D70C09]">Since 1996</span>
          </h2>
          <button className="mt-8 bg-[#D70C09] text-white font-bold px-8 py-3 rounded-md uppercase hover:bg-[#868386] transition-all">
            Read More
          </button>
        </div>

        {/* Right Services */}
        <div className="relative flex flex-col gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex justify-between items-center transition-all duration-300 ease-out border-b border-gray-200 pb-5 hover:bg-[#fffaf5]`}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Left Text */}
              <div>
                <h3
                  className={`text-[22px] md:text-[24px] font-bold uppercase tracking-wide transition-colors duration-300 ${
                    hoveredId === service.id
                      ? "text-[#D70C09]"
                      : "text-[#0A0A0A]"
                  }`}
                >
                  <span
                    className={`mr-3 text-[26px] md:text-[28px] font-bold transition-colors ${
                      hoveredId === service.id
                        ? "text-[#D70C09]"
                        : "text-black"
                    }`}
                  >
                    {service.id}
                  </span>
                  {service.title}
                </h3>
                <p
                  className={`uppercase font-semibold text-sm mt-1 transition-colors ${
                    hoveredId === service.id
                      ? "text-black"
                      : "text-[#666666]"
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
