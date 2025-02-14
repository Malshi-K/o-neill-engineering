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
      const duration = 2000; // 2 seconds for the count animation
      const steps = 50; // Number of steps in the animation
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
      <div className="grid grid-cols-2 md:grid-cols-4">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} py-12 px-8 flex items-center gap-6
              transform transition-all duration-1000 ease-out
              ${isVisible 
                ? 'translate-x-0 opacity-100' 
                : stat.group === 'left'
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-full opacity-0'
              }`}
          >
            {/* Icon */}
            <div className={`${stat.iconColor} flex-shrink-0`}>
              <stat.icon size={48} strokeWidth={1.5} />
            </div>
            
            {/* Numbers and Text */}
            <div>
              <div className={`text-4xl md:text-5xl font-bold ${
                stat.bgColor === 'bg-orange-500' ? 'text-navy-900' : 'text-orange-500'
              }`}>
                {counts[index]}
              </div>
              <div className={`${
                stat.bgColor === 'bg-orange-500' ? 'text-navy-900' : 'text-white'
              } font-medium mt-1`}>
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountingSection;