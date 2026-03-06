import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop/Mobile dropdown state
  const navRef = useRef(null); // Reference for detecting outside clicks

  // Close everything helper
  const closeAll = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAll();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "HOME", to: "/#" },
    { name: "ABOUT US", to: "/#about" },
    {
      name: "SERVICES",
      to: "/#service",
      dropdown: [
        { name: "Insurance Job", to: "/insurance-job" },
        { name: "Accident Repair", to: "/accident-repair" },
        { name: "Dent & Scratch", to: "/dent" },
        { name: "Paint Resprays", to: "/paint-respray" },
        { name: "Panel Beating", to: "/panel-beating" },
      ],
    },
    { name: "GALLERY", to: "/#gallery" },
    { name: "TESTIMONIAL", to: "/#testimonials" },
    { name: "FAQ", to: "/#faq" },
  ];

  return (
    <nav 
      ref={navRef} 
      className="bg-black fixed max-w-7xl p-3 mx-auto text-white tracking-wide top-3 rounded-lg left-0 right-0 z-50 backdrop-blur-sm bg-opacity-90 font-['Poppins']"
    >
      <div className="flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <HashLink smooth to="/#home" onClick={closeAll} className="h-14 w-auto">
            <img src="/logo.png" alt="Logo" className="h-14 w-auto object-contain" />
          </HashLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, idx) => (
            <div key={idx} className="relative">
              {item.dropdown ? (
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-1 hover:text-[#D70C09] transition-all duration-300 uppercase"
                  >
                    {item.name} <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-4 w-52 bg-black border border-gray-800 rounded-lg shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.dropdown.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          to={sub.to}
                          className="block px-4 py-3 text-sm hover:bg-[#D70C09] hover:text-white transition-colors border-b border-gray-900 last:border-0"
                          onClick={closeAll}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <HashLink
                  smooth
                  to={item.to}
                  className="hover:text-[#D70C09] cursor-pointer transition-all duration-300"
                  onClick={closeAll}
                >
                  {item.name}
                </HashLink>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          <HashLink
            smooth
            to="/#contact"
            className="bg-[#D70C09] rounded-lg px-5 py-2 text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
            onClick={closeAll}
          >
            CONTACT US
          </HashLink>
        </div>

        {/* Mobile Toggle Button */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-black border-t border-gray-800 pb-4 mt-3 rounded-b-lg">
          {navItems.map((item, idx) => (
            <div key={idx} className="w-full text-center">
              {item.dropdown ? (
                <>
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center justify-center gap-2 w-full py-4 text-white hover:text-[#D70C09] border-b border-gray-900"
                  >
                    {item.name} <ChevronDown size={16} className={isDropdownOpen ? "rotate-180" : ""} />
                  </button>
                  {isDropdownOpen && (
                    <div className="bg-[#111] w-full">
                      {item.dropdown.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          to={sub.to}
                          className="block py-3 text-sm text-gray-400 hover:text-white hover:bg-[#D70C09]"
                          onClick={closeAll}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <HashLink
                  smooth
                  to={item.to}
                  className="block py-4 text-white hover:text-[#D70C09] border-b border-gray-900"
                  onClick={closeAll}
                >
                  {item.name}
                </HashLink>
              )}
            </div>
          ))}
          <HashLink
            smooth
            to="/#contact"
            className="bg-[#D70C09] mt-4 rounded-lg px-8 py-3 text-sm font-bold"
            onClick={closeAll}
          >
            CONTACT US
          </HashLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;