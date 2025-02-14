"use client"
import React, { useState, useEffect, useRef } from 'react';
import { HardHat, Building2, ClipboardCheck, Construction } from 'lucide-react';

const CountingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const statistics = [
    {
      number: 109,
      label: 'EXPERT WORKERS',
      icon: HardHat,
      bgColor: 'bg-navy-900',
      iconColor: 'text-orange-500',
      group: 'left'
    },
    {
      number: 485,
      label: 'HAPPY CLIENTS',
      icon: Building2,
      bgColor: 'bg-navy-900',
      iconColor: 'text-orange-500',
      group: 'left'
    },
    {
      number: 789,
      label: 'COMPLETED PROJECTS',
      icon: ClipboardCheck,
      bgColor: 'bg-orange-500',
      iconColor: 'text-navy-900',
      group: 'right'
    },
    {
      number: 890,
      label: 'RUNNING PROJECTS',
      icon: Construction,
      bgColor: 'bg-orange-500',
      iconColor: 'text-navy-900',
      group: 'right'
    }
  ];

  const [counts, setCounts] = useState(statistics.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
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
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 50;
      const stepDuration = duration / steps;

      const counters = statistics.map((stat, index) => {
        const stepValue = stat.number / steps;
        let currentStep = 0;

        return setInterval(() => {
          if (currentStep === steps) {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = stat.number;
              return newCounts;
            });
            return;
          }

          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.round(stepValue * currentStep);
            return newCounts;
          });
          currentStep++;
        }, stepDuration);
      });

      return () => {
        counters.forEach(counter => clearInterval(counter));
      };
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Navy Background Section */}
        <div className="w-full md:w-1/2 bg-navy-900">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {statistics.slice(0, 2).map((stat, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ease-out py-12 px-6 md:px-4
                  flex flex-col items-center md:flex-row md:items-center
                  ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`${stat.iconColor} flex-shrink-0 mb-4 md:mb-0 md:mr-3`}>
                  <stat.icon size={48} strokeWidth={1.5} />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-5xl font-bold text-orange-500 mb-2">
                    {counts[index]}
                  </div>
                  <div className="text-white font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Orange Background Section */}
        <div className="w-full md:w-1/2 bg-orange-500">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {statistics.slice(2, 4).map((stat, index) => (
              <div
                key={index + 2}
                className={`transform transition-all duration-1000 ease-out py-12 px-6 md:px-4
                  flex flex-col items-center md:flex-row md:items-center
                  ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                <div className={`${stat.iconColor} flex-shrink-0 mb-4 md:mb-0 md:mr-3`}>
                  <stat.icon size={48} strokeWidth={1.5} />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-5xl font-bold text-navy-900 mb-2">
                    {counts[index + 2]}
                  </div>
                  <div className="text-navy-900 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountingSection;