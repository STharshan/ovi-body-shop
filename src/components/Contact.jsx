import React from "react";
import { Home, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT SIDE - CONTACT INFO */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 shadow-sm">
          <div className="space-y-10">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="text-[#D70C09] p-2 bg-red-100 rounded-full">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Office Address 01</h3>
                <p className="text-sm text-gray-600">
                  4517 Washington Ave. <br />
                  Manchester, Kentucky 39495
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="text-[#D70C09] p-2 bg-red-100 rounded-full">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Contact Number</h3>
                <p className="text-sm text-gray-600">(603) 555-0123</p>
                <p className="text-sm text-gray-600">(319) 555-0115</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="text-[#D70C09] p-2 bg-red-100 rounded-full">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Email Address</h3>
                <p className="text-sm text-gray-600">example@gmail.com</p>
                <p className="text-sm text-gray-600">example@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <div className="border-2 border-gray-200 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3 text-white">Get in touch</h2>
          <p className="text-white text-sm mb-3">
            We're always here to assist you at CarHub. Our customer support team is
            dedicated to addressing your inquiries.
          </p>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border  border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
              <div>
                <label className="text-sm font-medium">Phone no</label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            <div className="text-white">
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Example Text"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-red-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#D70C09] text-white py-2 rounded-md hover:bg-red-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
