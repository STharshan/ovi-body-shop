import { FaCheckCircle } from "react-icons/fa";

export default function WhySection({ data }) {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6 leading-snug text-[#D70C09]">
              {data.title}
            </h2>

            <p className="text-lg mb-8 text-gray-300">
              {data.subtitle}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {data.benefits.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-[#D70C09]" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div
            className="
              rounded-xl p-8 bg-zinc-900 border border-zinc-800 shadow-sm
              hover:shadow-[0_8px_24px_rgba(215,12,9,0.45)]
              transition-all duration-300
            "
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Signs You Need Alignment
            </h3>

            <ul className="space-y-4 text-gray-300">
              {data.signs.map((sign, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#D70C09]" />
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
