"use client"
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { servicesData } from "@/data/servicesData";

const ContentSection = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="mb-4 bg-white shadow-sm rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-6 hover:bg-gray-50 focus:outline-none transition-colors duration-200"
      >
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <div className="bg-orange-500 p-2 rounded-sm transition-transform duration-200">
          {isOpen ? (
            <Minus className="w-6 h-6 text-white" />
          ) : (
            <Plus className="w-6 h-6 text-white" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="p-6 border-t border-gray-100">
          {Array.isArray(content) ? (
            <ul className="space-y-2">
              {content.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▶</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">{content}</p>
          )}
        </div>
      )}
    </div>
  );
};

const ExpandableContent = ({ serviceId }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // Get the service data
  const serviceData = servicesData[serviceId];
  
  // Early return if no service data found
  if (!serviceData) {
    return (
      <div className="max-w-6xl mx-auto p-4">
        <p className="text-gray-600">Service information not found.</p>
      </div>
    );
  }

  // Process expandable content to handle nested sections
  const processedContent = serviceData.expandableContent.reduce((acc, section) => {
    // Check if the section's title already exists in the accumulator
    const existingSection = acc.find(s => s.title === section.title);
    
    if (existingSection) {
      // If it exists, merge the content
      if (Array.isArray(existingSection.content) && Array.isArray(section.content)) {
        existingSection.content = [...existingSection.content, ...section.content];
      } else if (typeof existingSection.content === 'string' && typeof section.content === 'string') {
        existingSection.content = `${existingSection.content}\n${section.content}`;
      }
      return acc;
    } else {
      // If it doesn't exist, add it to the accumulator
      return [...acc, section];
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header Section */}
      <div className="mb-12">
        <p className="text-orange-500 text-lg mb-2">Features & Options</p>
        <h2 className="text-4xl font-bold text-navy-900 mb-3">{serviceData.title}</h2>
        <div className="w-24 h-1 bg-orange-500"></div>
      </div>

      {/* Expandable Sections */}
      <div className="space-y-4">
        {processedContent.map((section, index) => (
          <ContentSection
            key={`${section.title}-${index}`}
            title={section.title}
            content={section.content}
            isOpen={openSections[section.title]}
            onToggle={() => toggleSection(section.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpandableContent;