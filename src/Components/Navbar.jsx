import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky z-50 top-0 shadow-sm pt-3 pb-2 sm:pb-1 sm:pt-2 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div>
            <img src="/logo2.png" alt="logo" className="logo" />
          </div>

          {/* desktop links */}
          <ul className="hidden md:flex list-none items-center gap-6">
            <li><a href="#home" className="text-[#9E3656] font-medium transition">Home</a></li>
            <li><a href="#services" className="text-[#9E3656] font-medium transition">Services</a></li>
            <li><a href="#gallery" className="text-[#9E3656] font-medium transition">Gallery</a></li>
            <li><a href="#about" className="text-[#9E3656] font-medium transition">About Us</a></li>
            <li><a href="#contact" className="text-[#9E3656] font-medium transition">Contact</a></li>
          </ul>

          {/* desktop Book Now */}
          <button className="hidden md:block book-btn bg-[#9E3656] text-white px-6 py-2.5 rounded-full font-semibold shadow-md md:hover:bg-[#6A2238] md:hover:shadow-lg md:hover:scale-105 active:scale-95 transition-all duration-300 text-sm md:text-base">
            Book Now
          </button>

          {/* hamburger */}
          <button className="md:hidden text-[#9E3656]" onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* side drawer - content now lives INSIDE it */}
      <div
        className={`bg-[#9E3656] w-64 h-full fixed top-0 right-0 md:hidden z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button className="text-white" onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <ul className="list-none flex flex-col items-start gap-6 px-6 mt-4">
          <li><a href="#home" onClick={() => setIsOpen(false)} className="text-white font-medium">Home</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)} className="text-white font-medium">Services</a></li>
          <li><a href="#gallery" onClick={() => setIsOpen(false)} className="text-white font-medium">Gallery</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)} className="text-white font-medium">About Us</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)} className="text-white font-medium">Contact</a></li>
        </ul>

        <div className="px-6 mt-6">
          <button className="w-full bg-white text-[#9E3656] px-6 py-2.5 rounded-full font-semibold shadow-md">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;