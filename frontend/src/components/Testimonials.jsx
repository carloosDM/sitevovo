import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1);
      } else if (width < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - itemsPerView) : prev - 1
    );
  };

  const visibleTestimonials = [];
  for (let i = 0; i < itemsPerView && currentIndex + i < testimonials.length; i++) {
    visibleTestimonials.push(testimonials[currentIndex + i]);
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <Star
          key={i}
          className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFBB98] text-[#FFBB98]"
        />
      );
    }
    return stars;
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-handwritten font-bold text-[#403234]">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-base sm:text-lg text-[#403234]/80 font-body max-w-2xl mx-auto">
            Veja o que quem já provou nossas delícias tem a dizer
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card group"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-[#FFBB98]" />
                </div>

                {/* Card Content */}
                <div className="relative space-y-4">
                  {/* Avatar & Info */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#FFBB98] to-[#FBE0C3] flex items-center justify-center text-3xl sm:text-4xl">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-bold text-[#403234] font-body truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#403234]/60 font-body truncate">
                        {testimonial.location}
                      </p>
                      {/* Stars */}
                      <div className="flex gap-1 mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-sm sm:text-base text-[#403234]/90 font-body leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Date */}
                  <p className="text-xs text-[#403234]/50 font-body">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                className="carousel-arrow left-2 sm:-left-4"
                aria-label="Depoimentos anteriores"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="carousel-arrow right-2 sm:-right-4"
                aria-label="Próximos depoimentos"
                disabled={currentIndex + itemsPerView >= testimonials.length}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Indicators */}
        {testimonials.length > itemsPerView && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ 
              length: Math.ceil(testimonials.length / itemsPerView) 
            }).map((_, index) => {
              const slideIndex = index * itemsPerView;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(slideIndex)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === slideIndex
                      ? 'bg-[#FFBB98] w-8'
                      : 'bg-[#403234]/30 hover:bg-[#403234]/50'
                  }`}
                  aria-label={`Ir para grupo ${index + 1} de depoimentos`}
                />
              );
            })}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-[#FBE0C3]/40 to-[#FFBB98]/30 rounded-2xl p-6 sm:p-8">
            <p className="text-lg sm:text-xl font-handwritten text-[#403234] mb-4">
              Quer fazer parte da nossa família? 💛
            </p>
            <p className="text-sm sm:text-base text-[#403234]/80 font-body mb-6">
              Faça seu pedido e descubra por que nossos clientes nos amam tanto!
            </p>
            <button
              onClick={() => window.open('https://wa.me/5577998195609?text=Olá! Gostaria de fazer um pedido das Delícias da Vovó Idalcy 🥖', '_blank')}
              className="btn-primary"
            >
              Fazer Meu Pedido
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;