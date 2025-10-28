"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "HOME" },
        { name: "ABOUT US" },
        { name: "SERVICE" },
        { name: "TESTIMONIAL" },
        { name: "GALLERY" },
        { name: "CONTACT" },
        { name: "FAQ" },
    ];

    return (
        <nav className="bg-black fixed max-w-6xl p-3 mx-auto text-white tracking-wide top-3 rounded-lg left-0 right-0 z-50 ">
            <div className=" flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src="/path-to-your-logo.png"
                        alt="CARSY Logo"
                        className="h-8 w-auto object-contain"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navItems.map((item, idx) => (
                        <button
                            key={idx}
                            className="relative hover:text-[#D70C09] cursor-pointer transition-all duration-300"
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Right Side */}
                <div className="hidden lg:flex items-center space-x-6">
                    <button className="bg-[#D70C09] rounded-lg px-5 py-2 text-sm font-semibold hover:bg-[#868386] transition-all duration-300">
                        CONTACT US
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={26} className="hover:text-[#D70C09] cursor-pointer" /> : <Menu size={26} className="hover:text-[#D70C09] cursor-pointer" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden flex flex-col items-center bg-black border-t border-gray-800 pb-4 space-y-4">
                    {navItems.map((item, idx) => (
                        <button
                            key={idx}
                            className="text-white hover:text-[#D70C09] transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </button>
                    ))}
                    <button className="bg-[#D70C09] rounded-lg px-5 py-2 text-sm font-semibold hover:bg-[#868386] transition-all duration-200">
                        CONTACT US
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
