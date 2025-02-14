"use client"
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <section 
      ref={sectionRef}
      className="w-full py-16 px-4 md:px-8 bg-white"
    >
      <div 
        className={`container mx-auto transform transition-all duration-1000 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Column */}
          <div className="relative h-[300px] md:h-[400px] w-full">
            <Image
              src="/images/about-bg.jpg"
              alt="Barn Construction"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Column */}
          <div className="flex flex-col space-y-6">
            {/* Small Title */}
            <h3 className="text-orange-500 text-lg font-medium">
              Welcome to O'neill Engineering
            </h3>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
              50 Years+ Experience
            </h2>

            {/* Description Paragraphs */}
            <p className="text-gray-700 leading-relaxed">
              O'Neill Engineering has been in business for more than 50 years,
              specialising in half round barns, farm buildings, circular modules
              and gable buildings.
            </p>

            <p className="text-gray-700 leading-relaxed">
              O'Neill buildings are the best quality – available either erected
              onsite or in kitset. We also move and repair existing buildings.
              Owner/Operator Robbie O'Neill (or Barney, as you might have heard
              him being called on the radio) has more than 30 years' experience
              with O'Neill Engineering.
            </p>

            {/* Quote */}
            <blockquote className="text-orange-500 text-lg font-medium border-l-4 border-orange-500 pl-4">
              "WE HAVE BUILT THOUSANDS OF SHEDS OVER THE YEARS – WE'VE BUILT
              SHEDS 50 YEARS AGO THAT ARE STILL STANDING STRONG, DOING THEIR
              JOB."
            </blockquote>

            {/* Contact Button */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block bg-orange-500 text-navy-900 px-8 py-3 
                  hover:bg-navy-900 hover:text-orange-500 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;