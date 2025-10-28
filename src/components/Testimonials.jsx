import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Cruze made buying my McLaren effortless with Easy Financing. The Prime Warranty ensures I drive with total confidence on every thrilling journey!",
    name: "Alex Reed",
    location: "New York",
    image:
      "https://images.unsplash.com/photo-1600703134032-65a8dc20b7e6?auto=format&fit=crop&w=800&q=80",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    quote: "Smart Trade-In at Cruze was fair. Loving my new Lamborghini!",
    name: "Mark Lane",
    location: "Florida",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    id: 3,
    quote: "The Cruze team simplified financing for my Ferrari with ease!",
    name: "Luke Nash",
    location: "Illinois",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 4,
    quote:
      "Cruze’s Smart Trade-In valued my car perfectly. Exceptional service—now I love my dream Mercedes!",
    name: "Paul Gray",
    location: "Texas",
    image:
      "https://images.unsplash.com/photo-1581375256161-8229f5b9dca0?auto=format&fit=crop&w=800&q=80",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const TestimonialsSection = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="bg-[#F8FAFC] py-16 px-6 md:px-12 overflow-hidden relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 bg-blue-600 rounded-sm"></span>
            <h4 className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
              Testimonials
            </h4>
          </div>
          <h2 className="text-[36px] md:text-[44px] font-extrabold leading-[1.2] text-gray-900 tracking-tight">
            See What Our Clients <br />
            Say About Their Rides
          </h2>
        </div>
        <button className="mt-6 md:mt-0 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all">
          Book Test Drive
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
        className="flex gap-8 animate-scroll-left"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {[...testimonials, ...testimonials].map((item, i) => (
          <div
            key={`row1-${i}`}
            className={`bg-white shadow-sm rounded-2xl p-6 flex-shrink-0 hover:shadow-md transition-all ${
              item.image ? "w-[420px]" : "w-[350px]"
            }`}
          >
            {item.image && (
              <img
                src={item.image}
                alt="car"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            )}
            <p className="italic text-gray-700 mb-4 text-[15px] leading-relaxed">
              “{item.quote}”
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-gray-900 font-semibold text-sm">
                  {item.name}
                </h4>
                <p className="text-gray-500 text-xs">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row — Right to Left */}
      <div
        className="flex gap-8 mt-10 animate-scroll-right"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {[...testimonials, ...testimonials].map((item, i) => (
          <div
            key={`row2-${i}`}
            className={`bg-white shadow-sm rounded-2xl p-6 flex-shrink-0 hover:shadow-md transition-all ${
              item.image ? "w-[400px]" : "w-[340px]"
            }`}
          >
            {item.image && (
              <img
                src={item.image}
                alt="car"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            )}
            <p className="italic text-gray-700 mb-4 text-[15px] leading-relaxed">
              “{item.quote}”
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-gray-900 font-semibold text-sm">
                  {item.name}
                </h4>
                <p className="text-gray-500 text-xs">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent pointer-events-none"></div>

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
