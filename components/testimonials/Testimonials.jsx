"use client";
import { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Gary",
      project: "5 Bay Round Barn",
      date: "February 2013",
      quote: "I am very pleased with the barn and the crew that erected the building leaving the site clear of rubbish. Please pass on my thanks for a great job.",
      image: "/images/testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Neville",
      project: "Bin Cover",
      date: "February 2013",
      quote: "Thanks for erecting the Bin Cover so quickly. I have used the 4 wheel motorbike to pull the roof off and it works well.",
      image: "/images/testimonial-2.jpg",
    },
    {
      id: 3,
      name: "Peter and Bo",
      project: "New Roof",
      date: "December 2012",
      quote: "We were very impressed with the roofers - they worked all day on a Sunday, never stopped.",
      image: "/images/testimonial-3.jpg",
    },
    {
      id: 4,
      name: "Sharon and Vaughn",
      project: "6 Bay Round Barn",
      date: "May 2008",
      quote: "We would like to acknowledge the awesome work the guys did with the shed. The workmanship is wonderful and the guys worked well together. We will have no hesitation in recommending your sheds to friends and family. Please pass on our gratitude to the team of guys.",
      image: "/images/testimonial-4.jpg",
    },
    {
      id: 5,
      name: "Neville",
      project: "2 Bay Gable Extension",
      date: "June 2008",
      quote: "Fred and his team erected the existing shed in 2002 and it was a pleasure to have Fred back again and have tradesmen on the property that knew what they were doing. I complemented them so and am very happy with the job done.",
      image: "/images/testimonial-1.jpg",
    },
    {
      id: 6,
      name: "Kaihu Tavern",
      project: "Shed",
      date: "June 2008",
      quote: "We have enjoyed the young men and their manners. They have made a lot of friends amongst our local community, they are a crew that made a good impression and will be dearly missed. And apart from having good appetites, they can play pool! Thank you for the opportunity to cater for your men and for your prompt payment which allows small operations like ourselves to continue our service without any hardships to our clientele.",
      image: "/images/testimonial-2.jpg",
    }
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
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center px-4 py-12 sm:py-16 md:py-20"
    >
      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-4xl mx-auto text-center transform transition-all duration-1000 ease-out
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            {/* Main Profile Image */}
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div className="relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-2 border-navy-900 object-cover"
                />
              </div>
            </div>

            {/* Quote Icon */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <img
                src="/images/quote.png"
                alt="Quote"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
              />
            </div>

            {/* Testimonial Content */}
            <div className="max-w-2xl mx-auto px-4">
              <h3 className="text-orange-500 text-xl sm:text-2xl font-semibold mb-2">
                {testimonial.name}
              </h3>
              <p className="text-orange-500 text-sm mb-1 sm:mb-2">
                {testimonial.project}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
                {testimonial.date}
              </p>
              <p className="text-navy-900 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                {testimonial.quote}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 sm:gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
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

export default Testimonials;