import React, { useState } from "react";
import logo from "./assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="#home" className="flex items-center text-2xl font-bold">
          <img src={logo} alt="Logo" className="w-25 h-25" />
          <span className="font-bold text-xl"></span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-6 py-6 shadow-md md:hidden">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li><a href="#Project" onClick={() => setMenuOpen(false)}>Project</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
