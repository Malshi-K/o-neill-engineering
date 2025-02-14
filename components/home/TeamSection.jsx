"use client";
import { useState, useEffect, useRef } from 'react';
import { Facebook, Linkedin } from "lucide-react";

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "Name",
      position: "Position",
      image: "/images/team/1.jpg",
      row: 0
    },
    {
      id: 2,
      name: "Name",
      position: "Position",
      image: "/images/team/2.jpg",
      row: 0
    },
    {
      id: 3,
      name: "Name",
      position: "Position",
      image: "/images/team/3.jpg",
      row: 0
    },
    {
      id: 4,
      name: "Name",
      position: "Position",
      image: "/images/team/4.jpg",
      row: 0
    },
    {
      id: 5,
      name: "Name",
      position: "Position",
      image: "/images/team/5.jpg",
      row: 1
    },
    {
      id: 6,
      name: "Name",
      position: "Position",
      image: "/images/team/6.jpg",
      row: 1
    },
    {
      id: 7,
      name: "Name",
      position: "Position",
      image: "/images/team/7.jpg",
      row: 1
    },
  ];

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

  return (
    <section className="py-16 px-4" ref={sectionRef}>
      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-orange-500 text-sm uppercase font-medium mb-2">Our Team</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1120]">
          Meet Our Team
        </h2>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className={`group relative transform transition-all duration-1000 ease-out
                ${isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-32 opacity-0'
                }
                ${member.row === 1 ? 'delay-300' : ''}`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />

                {/* Social Media Overlay */}
                <div className="absolute top-3 right-3 flex flex-col gap-1.5 translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href="#"
                    className="bg-[#1877F2] p-1.5 text-white hover:bg-blue-600 transition-colors"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="#"
                    className="bg-[#0A66C2] p-1.5 text-white hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="bg-[#0B1120] group-hover:bg-orange-500 p-4 transition-colors duration-300">
                <h3 className="text-orange-500 group-hover:text-white text-lg font-medium">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm group-hover:text-white">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;