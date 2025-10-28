"use client";
import React from "react";
import CircularGallery from "./CircularGallery";

export default function GallerySection() {
  // Gallery items (all images now)
  const galleryItems = [
    { type: "image", src: "https://picsum.photos/200/300", text: "Our Workshop" },
      { type: "image", src: "https://picsum.photos/200/300", text: "Our Workshop" },
        { type: "image", src: "https://picsum.photos/200/300", text: "Our Workshop" },
          { type: "image", src: "https://picsum.photos/200/300", text: "Our Workshop" },
            { type: "image", src: "https://picsum.photos/200/300", text: "Our Workshop" },
              { type: "image", src: "https://picsum.photos/200/300", text: "Our Workshop" },
                { type: "image", src: "https://picsum.photos/200/300", text: "Our Workshop" },
                  { type: "image", src: "https://picsum.photos/200/300", text: "Our Workshop" },
                  
   
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#000000] text-white font-inter py-20 md:py-28 border-t border-[#1A1A1A]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-6xl opacity-60">
        <div
          className="absolute left-1/2 top-[25%] -translate-x-1/2 w-[1400px] h-[1400px] rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,59,59,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Section Heading */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <p className="inline-block border border-[#ff3b3b33] text-xs tracking-[4px] uppercase px-6 py-1 rounded-full text-[#ff6666] mb-5">
          Our Gallery
        </p>

        <h2 className="mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
          Experience <span className="italic text-[#FF3B3B]">Our Work</span>
        </h2>

        <p className="mb-14 text-sm sm:text-base text-[#AAAAAA] max-w-2xl mx-auto">
          A glimpse into our precision craftsmanship and automotive expertise.
          Each project reflects our dedication to quality and detail.
        </p>
      </div>

      {/* CircularGallery Display */}
      <div
        className="relative z-10 mx-auto max-w-[1200px] w-full px-4 sm:px-6 md:px-8"
        style={{ height: "600px", position: "relative" }}
      >
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </section>
  );
}
