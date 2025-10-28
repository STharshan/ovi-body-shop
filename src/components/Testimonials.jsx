"use client";
import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Ovi Car Body Repair transformed my car after a major accident — flawless finish, quick turnaround, and friendly service!",
    name: "Daniel Ross",
    location: "Adelaide",
    image:
      "https://images.unsplash.com/photo-1600703134032-65a8dc20b7e6?auto=format&fit=crop&w=800&q=80",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    quote:
      "Professional team and top-tier workmanship. My car looks brand new again — highly recommend Ovi’s workshop!",
    name: "Chloe Turner",
    location: "South Australia",
    avatar: "https://randomuser.me/api/portraits/women/64.jpg",
  },
  {
    id: 3,
    quote:
      "Outstanding attention to detail — they handled both paint and panel perfectly. The service was fast and reliable.",
    name: "Michael Brooks",
    location: "Glenelg",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 4,
    quote:
      "From booking to delivery, Ovi Car Body Repair made everything smooth. My car’s finish is better than showroom!",
    name: "Sarah Mitchell",
    location: "Morphett Vale",
    image:
      "https://images.unsplash.com/photo-1581375256161-8229f5b9dca0?auto=format&fit=crop&w=800&q=80",
    avatar: "https://randomuser.me/api/portraits/women/76.jpg",
  },
];

const TestimonialsSection = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="relative overflow-hidden bg-[#000000] text-white py-24 px-6 md:px-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D70C09]/30 blur-[160px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D70C09]/20 blur-[140px] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-14">
        <div>
          <p className="text-[#D70C09] uppercase tracking-[5px] text-sm font-semibold mb-2">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.2] text-white">
            What Our <span className="text-[#D70C09]">Customers</span> Say
          </h2>
          <p className="text-[#868386] text-base mt-4 max-w-lg">
            At Ovi Car Body Repair, our mission is to deliver precision, passion
            and perfection. Here’s what real customers have to say about their
            experience with our expert team.
          </p>
        </div>

        <button className="mt-8 md:mt-0 flex items-center gap-2 bg-[#D70C09] hover:bg-[#868386] text-white font-semibold uppercase px-8 py-3 rounded-md transition-all duration-300">
          Book Your Repair
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Top Row — Left to Right */}
      <div
        className="relative z-10 flex gap-8 animate-scroll-left"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {[...testimonials, ...testimonials].map((item, i) => (
          <div
            key={`row1-${i}`}
            className={`bg-[#0E0E0E] border border-[#1C1C1C] rounded-2xl p-6 flex-shrink-0 hover:border-[#D70C09]/40 transition-all duration-300 ${
              item.image ? "w-[420px]" : "w-[360px]"
            }`}
          >
            {item.image && (
              <img
                src={item.image}
                alt="car"
                className="w-full h-44 object-cover rounded-xl mb-4"
              />
            )}
            <p className="italic text-[#CCCCCC] mb-4 text-[15px] leading-relaxed">
              “{item.quote}”
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover border border-[#D70C09]/40"
              />
              <div>
                <h4 className="text-white font-semibold text-sm">
                  {item.name}
                </h4>
                <p className="text-[#868386] text-xs">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row — Right to Left */}
      <div
        className="relative z-10 flex gap-8 mt-10 animate-scroll-right"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {[...testimonials, ...testimonials].map((item, i) => (
          <div
            key={`row2-${i}`}
            className={`bg-[#0E0E0E] border border-[#1C1C1C] rounded-2xl p-6 flex-shrink-0 hover:border-[#D70C09]/40 transition-all duration-300 ${
              item.image ? "w-[400px]" : "w-[340px]"
            }`}
          >
            {item.image && (
              <img
                src={item.image}
                alt="car"
                className="w-full h-44 object-cover rounded-xl mb-4"
              />
            )}
            <p className="italic text-[#CCCCCC] mb-4 text-[15px] leading-relaxed">
              “{item.quote}”
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover border border-[#D70C09]/40"
              />
              <div>
                <h4 className="text-white font-semibold text-sm">
                  {item.name}
                </h4>
                <p className="text-[#868386] text-xs">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#000000] to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#000000] to-transparent pointer-events-none"></div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 45s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
