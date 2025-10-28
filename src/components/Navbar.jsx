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
        { name: "GALLERY"},
        { name: "CONTACT"},
        { name: "FAQ" },
    ];

    return (
        <nav className="bg-black fixed text-white tracking-wide">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-lg font-bold tracking-[0.15em]">CARSY</div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navItems.map((item, idx) => (
                        <button
                            key={idx}
                            className="relative hover:text-red-500 transition-all duration-200"
                        >
                            {item.name}
                            {item.hasPlus && <span className="text-[#FF3C00] ml-1">+</span>}
                        </button>
                    ))}
                </div>

                {/* Right Side */}
                <div className="hidden lg:flex items-center space-x-6">
                    <button className="bg-[#FF3C00] px-5 py-2 text-sm font-semibold hover:bg-[#ff5722] transition-all duration-200">
                        CONTACT US
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden flex flex-col items-center bg-black border-t border-gray-800 pb-4 space-y-4">
                    {navItems.map((item, idx) => (
                        <button
                            key={idx}
                            className="text-white hover:text-[#FF3C00] transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                            {item.hasPlus && <span className="text-[#FF3C00] ml-1">+</span>}
                        </button>
                    ))}
                    <button className="bg-[#FF3C00] px-5 py-2 text-sm font-semibold hover:bg-[#ff5722] transition-all duration-200">
                        CONTACT US
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
