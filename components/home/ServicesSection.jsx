"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus } from 'lucide-react';

const ServicesSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const services = [
        {
          title: "Gable buildings",
          image: "/images/services/1.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.",
          row: 0
        },
        {
          title: "Half round barns",
          image: "/images/services/2.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.",
          row: 0
        },
        {
          title: "Mini Barns",
          image: "/images/services/3.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.",
          row: 0
        },
        {
          title: "Gable buildings",
          image: "/images/services/4.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.",
          row: 1
        },
        {
          title: "Half round barns",
          image: "/images/services/5.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.",
          row: 1
        },
        {
          title: "Mini Barns",
          image: "/images/services/6.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.",
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
        <section ref={sectionRef} className="py-16 px-4 md:px-8 bg-white">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h3 className="text-orange-500 text-lg font-medium mb-2">
                        Our Services
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
                        We Provide Services
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className={`group relative h-[400px] overflow-hidden transform transition-all duration-1000 ease-out
                                ${isVisible 
                                    ? 'translate-y-0 opacity-100' 
                                    : 'translate-y-32 opacity-0'
                                }
                                ${service.row === 1 ? 'delay-300' : ''}`}
                        >
                            {/* Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-between">
                                {/* Description - Hidden by default, shown on hover */}
                                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 p-10">
                                    <p className="text-center">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Title Bar */}
                                <div className="flex items-center justify-between mt-auto bg-gradient-to-r from-navy-900 to-navy-900/90 p-4">
                                    <h3 className="text-orange-500 text-xl font-semibold">
                                        {service.title}
                                    </h3>
                                    <Link 
                                        href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}
                                        className="bg-orange-500 p-2 text-navy-900 hover:bg-navy-900 hover:text-orange-500 transition-colors duration-300"
                                    >
                                        <Plus size={24} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;