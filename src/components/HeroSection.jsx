"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/car-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <p className="text-white uppercase text-sm md:text-base tracking-widest mb-4">
          <span className="text-[#FF3C00] text-xl font-bold">| </span>Step into the future of automotive care with Carsy
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight text-white max-w-5xl">
          Drive with confidence,<br /> Drive Carsy now
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-6 max-w-4xl">
          Welcome to Carsy, your ultimate destination for all things automotive.
          At Carsy, we combine passion with precision to offer you top-notch car
          services and unbeatable pricing packages. Our mission is to keep your
          vehicle in peak condition with minimal hassle.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-[#FF3C00] hover:bg-transparent hover:border-[#FF3C00] hover:border-2 hover:shadow-sm hover:shadow-[#FF3C00] text-white font-semibold px-8 py-3 text-sm uppercase tracking-widest  transition-all duration-300">
            Quick Repair
          </button>
          <button className="border-2  border-white text-white font-semibold px-8 py-3 text-sm uppercase hover:shadow-sm hover:shadow-[#FF3C00] tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Smart Prices
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
