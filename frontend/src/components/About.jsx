import React from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';
import { aboutText } from '../data/mockData';

const About = () => {
  const valueIcons = [Heart, Star, Sparkles];

  return (
    <section id="sobre" className="py-16 sm:py-20 bg-gradient-to-br from-[#FBE0C3]/30 to-[#FFBB98]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-handwritten font-bold text-[#403234]">
            {aboutText.title}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Column - Avatar & Story */}
            <div className="space-y-6">
              {/* Avatar/Photo Placeholder */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFBB98] to-[#FBE0C3] rounded-full animate-pulse-slow" />
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="text-6xl sm:text-7xl">👵</div>
                    <p className="text-lg sm:text-xl font-handwritten font-bold text-[#403234]">
                      Vovó Idalcy
                    </p>
                  </div>
                </div>
              </div>

              {/* Story Text */}
              <div className="space-y-4 text-[#403234]/90 font-body">
                {aboutText.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm sm:text-base leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Right Column - Values */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-handwritten font-bold text-[#403234] text-center lg:text-left">
                Nossos Valores
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {aboutText.values.map((value, index) => {
                  const Icon = valueIcons[index];
                  return (
                    <div
                      key={index}
                      className="value-card group"
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#FFBB98] to-[#FBE0C3] flex items-center justify-center transition-transform group-hover:scale-110">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#403234]" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-1">
                          <h4 className="text-lg sm:text-xl font-bold text-[#403234] font-body">
                            {value.title}
                          </h4>
                          <p className="text-sm sm:text-base text-[#403234]/80 font-body">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Decorative Quote */}
              <div className="mt-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-[#FFBB98]/30">
                <p className="text-center text-lg sm:text-xl font-handwritten text-[#403234] italic">
                  "Cada receita é feita com o coração, assim como a vovó sempre fez."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
