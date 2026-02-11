import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const PRIMARY_COLOR = "#D70C09";

export default function HeroSection({ data }) {
  return (
    <section className="py-16 transition-colors duration-300 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D70C09]/30 blur-[160px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D70C09]/20 blur-[140px] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-25 mb-12">

          {/* Badge */}
          <span
            className="inline-flex items-center justify-center rounded-md px-3 py-1 text-xs font-semibold mb-4"
            style={{
              backgroundColor: PRIMARY_COLOR,
            }}
          >
            {data.badgeText}
          </span>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-black mb-6">
            {data.title}{" "}
            <span style={{ color: PRIMARY_COLOR }}>
              {data.highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-300">
            {data.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

            {/* Call Button */}
            <a href={`tel:${data.phone}`}>
              <button
                className="inline-flex items-center gap-2 h-11 rounded-md px-6 font-semibold transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: PRIMARY_COLOR }}
              >
                <FaPhoneAlt className="h-5 w-5" />
                Book Service {data.phone}
              </button>
            </a>

            {/* Quote Button */}
            <button
              className="inline-flex items-center h-11 rounded-md px-6 font-semibold border border-[#D70C09] text-[#D70C09] hover:bg-[#D70C09] hover:text-white transition-all duration-300"
            >
              Get Free Quote
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
