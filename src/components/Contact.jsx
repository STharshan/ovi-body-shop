"use client";
import React, { useEffect } from "react";
import { Home, Phone, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  // 📌 WhatsApp number
  const whatsappNumber = "447788275026";

  // 📌 Form Submit → Send to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const text =
      `New Contact Form Submission:%0A%0A` +
      `👤 Name: ${name}%0A` +
      `📧 Email: ${email}%0A` +
      `📱 Phone: ${phone}%0A` +
      `📌 Subject: ${subject}%0A` +
      `💬 Message: ${message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#000000] text-white font-['Poppins'] py-24 md:py-32 border-t border-[#1A1A1A]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D70C09]/30 blur-[160px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D70C09]/20 blur-[140px] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-8"
        data-aos="fade-up"
      >
        {/* LEFT — Contact Info */}
        <div
          data-aos="fade-right"
          className="bg-[#0E0E0E]/90 border border-[#1C1C1C] rounded-2xl p-8 shadow-[0_0_30px_rgba(215,12,9,0.15)]"
        >
          <h3 className="text-2xl font-bold mb-8 text-[#D70C09] uppercase tracking-wide">
            Contact Information
          </h3>

          <div className="space-y-10">
            {/* Address */}
            <div className="flex items-start gap-4" data-aos="fade-up">
              <div className="p-3 bg-[#D70C09]/15 text-[#D70C09] rounded-full">
                <Home className="w-5 h-5" />
              </div>

              <div>
                <h4 className="font-semibold text-white mb-1">Office Address</h4>

                <a
                  href="https://maps.app.goo.gl/bGAHxiqBYfqTL37SA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#868386] hover:underline hover:text-white"
                >
                  1 Sheaf Bank, Lowfield <br />
                  Sheffield S2 3DA <br />
                  United Kingdom
                </a>
              </div>
            </div>

            {/* Phone - WhatsApp */}
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="150">
              <div className="p-3 bg-[#D70C09]/15 text-[#D70C09] rounded-full">
                <Phone className="w-5 h-5" />
              </div>

              <div>
                <h4 className="font-semibold text-white mb-1">Contact Number</h4>

                <a
                  href="https://wa.me/447788275026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline text-[#D70C09] hover:text-white"
                >
                  +44 7788 275026 (WhatsApp)
                </a>
              </div>
            </div>

            {/* Email - mailto: */}
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="250">
              <div className="p-3 bg-[#D70C09]/15 text-[#D70C09] rounded-full">
                <Mail className="w-5 h-5" />
              </div>

              <div>
                <h4 className="font-semibold text-white mb-1">Email Address</h4>

                <a
                  href="mailto:vanyek_bogdan@yahoo.com"
                  className="text-sm text-[#868386] hover:underline hover:text-white"
                >
                  vanyek_bogdan@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <div
          data-aos="zoom-in"
          className="bg-[#0E0E0E]/90 border border-[#1C1C1C] rounded-2xl p-8 shadow-[0_0_30px_rgba(215,12,9,0.15)]"
        >
          <h2 className="text-3xl font-extrabold mb-3 uppercase tracking-wide">
            Get In Touch
          </h2>

          <p className="text-[#868386] text-sm mb-10">
            We're always here to assist you at{" "}
            <span className="text-[#D70C09] font-semibold">Ovi Car Body Repair</span>.
          </p>

          {/* WhatsApp Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-[#868386]">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent border border-[#1C1C1C] rounded-md p-3 text-white placeholder-[#868386]"
                />
              </div>

              <div>
                <label className="text-sm text-[#868386]">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@gmail.com"
                  className="w-full bg-transparent border border-[#1C1C1C] rounded-md p-3 text-white placeholder-[#868386]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-[#868386]">Phone</label>
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Phone number"
                  className="w-full bg-transparent border border-[#1C1C1C] rounded-md p-3 text-white placeholder-[#868386]"
                />
              </div>

              <div>
                <label className="text-sm text-[#868386]">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full bg-transparent border border-[#1C1C1C] rounded-md p-3 text-white placeholder-[#868386]"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-[#868386]">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your message..."
                className="w-full bg-transparent border border-[#1C1C1C] rounded-md p-3 text-white placeholder-[#868386]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#D70C09] hover:bg-[#868386] text-white py-3 rounded-md font-semibold uppercase tracking-wide transition"
            >
              Send Message (WhatsApp)
            </button>
            <p class="text-xs text-center text-white" >By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
