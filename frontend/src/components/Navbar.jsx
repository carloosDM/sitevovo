import React, { useState, useEffect } from 'react';
import { Wheat } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F3F5]/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group transition-transform hover:scale-105"
          >
            <Wheat className="w-6 h-6 sm:w-8 sm:h-8 text-[#403234] transition-transform group-hover:rotate-12" />
            <span className="text-lg sm:text-xl font-handwritten font-bold text-[#403234]">
              Vovó Idalcy
            </span>
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="nav-link text-sm sm:text-base"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="nav-link text-sm sm:text-base"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="nav-link text-sm sm:text-base"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection('contatos')}
              className="nav-link text-sm sm:text-base"
            >
              Contatos
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
