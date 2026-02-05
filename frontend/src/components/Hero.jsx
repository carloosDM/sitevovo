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
      <div className="absolute top-20 left-10 w-16 h-16 sm:w-24 sm:h-24 animate-float">
        <svg viewBox="0 0 100 100" class="w-24 h-24">
          <defs>
            <clipPath id="circleClip">
              <circle cx="50" cy="50" r="45" />
            </clipPath>
          </defs>
          <image href="avatar1.png" width="100" height="100" clip-path="url(#circleClip)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-fade-in">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-handwritten font-bold text-[#403234] leading-tight">
            Delícias da Vovó Idalcy®
          </h1>

          {/* Subtitle with emojis */}
          <div className="space-y-2 sm:space-y-3 text-base sm:text-lg md:text-xl text-[#403234]/90 font-body">
            <p className="flex items-center justify-center gap-2">
              <span className="text-2xl">🥖</span>
              <span>Pães, bolos e biscoitos caseiros. O segredo é o amor!</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-2xl">🥰</span>
              <span>Aqui todo cliente vira meu netinho!</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 sm:pt-6">
            <button
              onClick={scrollToMenu}
              className="btn-primary w-full sm:w-auto">
              Ver Menu
            </button>
            <button
              onClick={openWhatsApp}
              className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#403234]/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
