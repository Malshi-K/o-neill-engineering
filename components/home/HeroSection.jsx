"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      image: '/images/hero-2.jpg',
      smallTitle: 'Gable & Circular Buildings',
      mainTitle: 'Weatherproof space, where you need it most!'
    },
    {
      image: '/images/hero-1.jpg',
      smallTitle: 'Professional Builders',
      mainTitle: "We don't take shortcuts and we use treated timber throughout our buildings"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    // Reset animations
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 100);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    // Reset animations
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 100);
  };

  useEffect(() => {
    // Set initial visibility after a small delay
    setTimeout(() => setIsVisible(true), 100);

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
            <h2 
              className={`text-2xl md:text-3xl mb-4 transform transition-all duration-1000 
                ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
            >
              {slide.smallTitle}
            </h2>
            <h1 
              className={`text-4xl md:text-6xl font-bold max-w-4xl leading-tight mb-8 transform transition-all duration-1000 delay-300
                ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            >
              {slide.mainTitle}
            </h1>
            <Link 
              href="/contact"
              className={`inline-block border-2 border-white px-8 py-3 text-lg font-semibold 
                hover:bg-white hover:text-black transition-all duration-1000 delay-500 transform
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 
          text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 
          text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsVisible(false);
              setTimeout(() => setIsVisible(true), 100);
            }}
            className={`h-2 w-2 rounded-full transition-all duration-300
              ${index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;