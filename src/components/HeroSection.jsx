import React from "react";

const HeroSection = () => {
  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop - 80; // adjust for navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full h-[120vh] overflow-hidden flex items-center justify-center font-['Poppins']">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/car-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-[#D70C09]/30 blur-[180px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-[#D70C09]/20 blur-[160px] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <p
          data-aos="fade-down"
          className="text-white uppercase text-sm md:text-base tracking-widest mb-4"
        >
          <span className="text-[#D70C09] text-xl font-bold">| </span>
          Since 2012 – Over 28 Years of Car Body Repair Expertise
        </p>

        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight text-white"
        >
          Fast. Affordable. Flawless Finishes.
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-gray-300 text-sm sm:text-base md:text-lg mt-6"
        >
          Ovi Car Body Repair has been delivering top-quality spray booth and repair services in Sheffield since 2012.
        </p>

        {/* Buttons (NO AOS – NO REVEAL ANIMATION) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#D70C09] hover:bg-transparent hover:border-[#D70C09] px-8 py-3 hover:border-2 hover:shadow-sm hover:shadow-[#D70C09] text-white font-semibold border-2 border-[#D70C09] text-sm uppercase tracking-widest transition-all duration-300"
          >
            Get a Quote
          </button>

          <button
            onClick={() => scrollToSection("service")}
            className="border-2 border-white text-white font-semibold px-8 py-3 text-sm uppercase hover:shadow-sm hover:shadow-[#D70C09] tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            View Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
