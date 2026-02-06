import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/mockData';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const intervalRef = useRef(null);

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

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
      }, 3500);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const getTagColor = (tag) => {
    if (tag === 'Mais Pedido') return 'bg-[#FFBB98] text-[#403234]';
    if (tag === 'Novo') return 'bg-[#b4dc19] text-[#403234]';
    if (tag === 'Caseiro') return 'bg-[#FBE0C3] text-[#403234]';
    return 'bg-[#F7F3F5] text-[#403234]';
  };

  const visibleProducts = [];
  for (let i = 0; i < itemsPerView; i++) {
    const idx = (currentIndex + i) % products.length;
    visibleProducts.push(products[idx]);
  }

  return (
    <section id="menu" className="py-16 sm:py-20 bg-[#F7F3F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-handwritten font-bold text-[#403234]">
            Nosso Menu
          </h2>
          <p className="text-base sm:text-lg text-[#403234]/80 font-body max-w-2xl mx-auto">
            Escolha entre nossos deliciosos pães, bolos e biscoitos artesanais
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 touch-pan-x overflow-x-auto">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="product-card group"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-2xl h-56 sm:h-64 bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Tag */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${getTagColor(
                      product.tag
                    )}`}
                  >
                    {product.tag}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5 sm:p-6 space-y-3">
                  {/* Category */}
                  <p className="text-xs sm:text-sm text-[#FFBB98] font-semibold uppercase tracking-wider">
                    {product.category}
                  </p>

                  {/* Name & Price */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#403234] font-body">
                      {product.name}
                    </h3>
                    <span className="text-lg sm:text-xl font-bold text-[#FFBB98] whitespace-nowrap">
                      {product.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#403234]/80 font-body leading-relaxed">
                    {product.description}
                  </p>

                  {/* Ingredients */}
                  <div className="pt-2 border-t border-[#403234]/10">
                    <p className="text-xs sm:text-sm text-[#403234]/60 font-body">
                      <span className="font-semibold">Ingredientes:</span>{' '}
                      {product.ingredients}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Desktop Only */}
          <button
            onClick={prevSlide}
            className="hidden md:flex carousel-arrow left-2 lg:-left-4"
            aria-label="Produto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex carousel-arrow right-2 lg:-right-4"
            aria-label="Próximo produto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#FFBB98] w-8'
                  : 'bg-[#403234]/30 hover:bg-[#403234]/50'
              }`}
              aria-label={`Ir para produto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
