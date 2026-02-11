import React from "react";

const ACCENT_COLOR = "#D70C09";

export default function ServiceSection({ data }) {
  return (
    <section className="py-16 bg-black transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D70C09]/30 blur-[160px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D70C09]/20 blur-[140px] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-bold tracking-tight mb-3 text-4xl md:text-5xl text-white">
            {data.title}
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-300">
            {data.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.services.map((s, i) => (
            <div
              key={i}
              className="
                flex flex-col justify-between rounded-2xl px-6 py-8
                bg-neutral-900 border border-neutral-800
                transition-all duration-300
                hover:shadow-xl
              "
              style={{ boxShadow: "0 0 0 0 transparent" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = `0 0 0 2px ${ACCENT_COLOR}`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 0 0 transparent")
              }
            >
              <div>
                <h3 className="text-2xl font-bold mb-3 text-center text-white">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-6 text-center text-gray-300">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
