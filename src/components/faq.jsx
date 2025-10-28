"use client";
import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const faqs = [
  {
    question: "HOW LONG WILL IT TAKE TO FIX MY CAR?",
    answer:
      "Repair times depend on the issue and parts availability. Most services are completed within 1–3 days, while complex repairs or restorations may take longer.",
  },
  {
    question: "DO I NEED TO MAKE AN APPOINTMENT?",
    answer:
      "Yes, we recommend scheduling an appointment to ensure prompt service and availability of our specialists.",
  },
  {
    question: "DO YOU HAVE A WARRANTY?",
    answer:
      "Absolutely. We offer a comprehensive service warranty on all repairs, covering both labor and replacement parts.",
  },
  {
    question: "DO YOU DO COMPLETE AUTO RESTORATIONS?",
    answer:
      "Yes! Our team specializes in full restorations, from classic models to modern vehicles — including paint, bodywork, and engine rebuilds.",
  },
  {
    question: "CAN YOU DO A FULL TECHNICAL INSPECTION OF THE CAR?",
    answer:
      "Yes, we provide full diagnostic and safety inspections using advanced tools to ensure your vehicle is in top condition.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#0D0D0D] text-white py-20 md:py-28 px-6 md:px-12 font-['Poppins']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="text-white">FAQ’S & </span>
            <span className="text-[#FF3B3B]">NEWS</span>
          </h2>

          <p className="text-gray-300 text-[17px] leading-relaxed mb-10 max-w-lg">
            Customer satisfaction is the measure of our success. Our unique
            service promises mean a commitment to finding the best possible
            solution to any problem.
          </p>

          <div className="rounded-xl overflow-hidden shadow-lg border border-[#1E1E1E]">
            <img
              src="https://images.unsplash.com/photo-1600703134032-65a8dc20b7e6?auto=format&fit=crop&w=1200&q=80"
              alt="Car"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>

        {/* Right Section (FAQs) */}
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#2a2a2a] pb-5">
              <button
                className="w-full flex justify-between items-center text-left group focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <h3
                  className={`text-xl md:text-2xl font-bold tracking-wide uppercase transition-colors ${
                    openIndex === i
                      ? "text-[#FF3B3B]"
                      : "text-white group-hover:text-[#FF3B3B]"
                  }`}
                >
                  {faq.question}
                </h3>
                <IoChevronDownOutline
                  className={`text-2xl transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 text-[#FF3B3B]" : "text-white"
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === i ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-400 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
