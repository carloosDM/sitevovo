import React from 'react';
import { MessageCircle, ChevronDown } from 'lucide-react';
import { contactInfo, heroImages } from '../data/mockData';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open(contactInfo.whatsappLink, '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImages.background})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#FBE0C3]/95 via-[#F7F3F5]/90 to-[#FFBB98]/85" />
      </div>
      {/* Decorative Elements */}
      <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 sm:w-24 sm:h-24 animate-float">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <clipPath id="circleClip">
              <circle cx="50" cy="50" r="48" />
            </clipPath>
          </defs>
          <image href="avatar1.png" x="0" y="0" width="100" height="100" clipPath="url(#circleClip)" preserveAspectRatio="xMidYMid slice" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in pt-4 sm:pt-0">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-handwritten font-bold text-[#403234] leading-tight px-2">
            Delícias da Vovó Idalcy®
          </h1>

          {/* Subtitle with emojis */}
          <div className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg lg:text-xl text-[#403234]/90 font-body px-4">
            <p className="flex items-center justify-center gap-2">
              <span className="text-xl sm:text-2xl flex-shrink-0">🥖</span>
              <span className="text-center">Pães, bolos e biscoitos caseiros. O segredo é o amor!</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-xl sm:text-2xl flex-shrink-0">🥰</span>
              <span className="text-center">Aqui todo cliente vira meu netinho!</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 px-4 max-w-md sm:max-w-none mx-auto">
            <button
              onClick={scrollToMenu}
              className="btn-primary w-full sm:w-auto px-6 sm:px-8">
              Ver Menu
            </button>
            <button
              onClick={openWhatsApp}
              className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:block absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-[#403234]/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
