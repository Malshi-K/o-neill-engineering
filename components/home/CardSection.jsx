"use client"
import React, { useEffect, useRef, useState } from "react";
import { HardHat, Building2, Headset } from "lucide-react";

const CardSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const cards = [
    {
      title: "Over 50 Years of Experience",
      description:
        "O'Neill Engineering has been specializing in half-round barns, farm buildings, and gable structures for over five decades.",
      icon: HardHat,
      bgColor: "bg-navy-900",
      iconColor: "text-orange-500",
    },
    {
      title: "High-Quality Structures",
      description:
        "Our buildings are constructed to the highest standards, ensuring durability and longevity for all your agricultural and industrial needs.",
      icon: Building2,
      bgColor: "bg-orange-500",
      iconColor: "text-white",
    },
    {
      title: "Comprehensive Services",
      description:
        "We offer onsite construction, kitset options, relocation, and repair services to meet your specific requirements.",
      icon: Headset,
      bgColor: "bg-navy-900",
      iconColor: "text-orange-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
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

  return (
    <section ref={sectionRef} className="relative">
      {/* Cards Section */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} p-8 relative group 
                transition-all duration-700 transform
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}
                hover:-translate-y-2`}
            >
              <div className="flex items-start gap-6">
                {/* Icon Container */}
                <div className={`${card.iconColor} relative`}>
                  {/* Icon */}
                  <div className="relative z-10">
                    <card.icon size={48} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      card.bgColor === "bg-orange-500"
                        ? "text-navy-900"
                        : "text-orange-500"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`${
                      card.bgColor === "bg-orange-500"
                        ? "text-navy-900"
                        : "text-gray-300"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
