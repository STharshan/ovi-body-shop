import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

export default function MainService({ data }) {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#D70C09] mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.services.map((service, i) => (
            <div
              key={i}
              className="
                flex flex-col gap-4 rounded-xl p-6
                bg-zinc-900 border border-zinc-800
                shadow-sm transition-all duration-300
                hover:shadow-[0_8px_24px_rgba(215,12,9,0.45)]
                hover:ring-2 hover:ring-[#D70C09] hover:ring-offset-2 hover:ring-offset-black
              "
            >
              <h3 className="text-xl font-bold text-white">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.desc}
              </p>

              <div className="flex items-center text-sm text-[#D70C09] mt-2">
                <FaRegCheckCircle className="mr-2" />
                Professional service guaranteed
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
