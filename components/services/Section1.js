"use client"
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { servicesData } from '@/data/servicesData';
import PageTitle from '@/components/PageTitle';

const ServiceSections = () => {
  const params = useParams();
  const serviceSlug = params.service;
  const service = servicesData[serviceSlug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600">The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      {/* Section 1 */}
      <div className="w-full">
        <PageTitle 
          title={service.title}
          currentPath={`services/${serviceSlug}`}
        />

        <div className="container mx-auto p-4 py-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Image */}
            <div className="relative w-full aspect-[4/3] mx-auto">
              <Image
                src={service.mainImage}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg"
                quality={100}
                priority
                placeholder="empty"
              />
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">{service.subtitle}</h2>
              <p className="text-gray-600 mb-8">{service.description}</p>

              <h3 className="text-xl font-bold text-navy-900 mb-4">Key Features:</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSections;