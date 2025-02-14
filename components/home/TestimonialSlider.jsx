"use client";
import { useState, useEffect, useRef } from "react";

const TestimonialSlider = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Gary",
      project: "5 Bay Round Barn",
      date: "February 2013",
      quote:
        "I am very pleased with the barn and the crew that erected the building leaving the site clear of rubbish. Please pass on my thanks for a great job.",
      image: "/images/testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Gary",
      project: "5 Bay Round Barn",
      date: "February 2013",
      quote:
        "I am very pleased with the barn and the crew that erected the building leaving the site clear of rubbish. Please pass on my thanks for a great job.",
      image: "/images/testimonial-2.jpg",
    },
  ];

  // Intersection Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      

      {/* Content */}
      <div 
        className={`relative z-10 max-w-4xl mx-auto text-center transform transition-all duration-1000 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            {/* Main Profile Image */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-40 h-40 rounded-full border-2 border-white"
                />
              </div>
            </div>

            {/* Quote Icon */}
            <div className="text-orange-500 text-6xl font-serif mb-4">"</div>

            {/* Testimonial Content */}
            <div className="max-w-2xl mx-auto">
              <h3 className="text-orange-500 text-2xl font-semibold mb-2">
                {testimonial.name}
              </h3>
              <p className="text-white text-sm mb-2">{testimonial.project}</p>
              <p className="text-gray-400 text-sm mb-6">{testimonial.date}</p>
              <p className="text-white text-lg leading-relaxed mb-8">
                {testimonial.quote}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentSlide
                      ? "bg-orange-500"
                      : "bg-gray-500 hover:bg-orange-500/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;