"use client";
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  // Sample FAQ data - replace with your actual questions and answers
  const faqData = [
    {
      question: "What types of buildings do you construct?",
      answer: "We specialize in a wide range of buildings including half round barns, farm buildings, circular modules, and gable buildings. Our structures are available either erected onsite or in kitset form. We also offer services for moving and repairing existing buildings."
    },
    {
      question: "Do you service all areas in New Zealand?",
      answer: "Yes, we provide our services throughout New Zealand. Based in Morrinsville, we have completed projects across various regions and are willing to travel to meet your building needs."
    },
    {
      question: "What is the warranty period for your buildings?",
      answer: "Our buildings come with comprehensive warranty coverage. We've built thousands of sheds over the years, with structures from 50 years ago still standing strong and functioning well. We use high-quality materials and treated timber throughout our buildings."
    },
    {
      question: "Can you handle both residential and commercial projects?",
      answer: "Yes, we handle both residential and commercial projects. With over 50 years of experience in the industry, we have the expertise to manage projects of various scales, from small farm sheds to large commercial structures."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 text-lg mb-2">Frequently Asked Question</p>
          <h2 className="text-4xl font-bold text-navy-900">You May Ask</h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className={`w-full flex justify-between items-center p-4 text-left font-medium transition-colors ${
                    openIndex === index ? 'bg-orange-500 text-navy-900' : 'hover:bg-gray-50'
                  }`}
                >
                  {item.question}
                  {openIndex === index ? (
                    <Minus className="flex-shrink-0 w-5 h-5" />
                  ) : (
                    <Plus className="flex-shrink-0 w-5 h-5" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-white text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {faqData.slice(Math.ceil(faqData.length / 2)).map((item, index) => (
              <div 
                key={index + Math.ceil(faqData.length / 2)}
                className="border border-gray-200 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index + Math.ceil(faqData.length / 2))}
                  className={`w-full flex justify-between items-center p-4 text-left font-medium transition-colors ${
                    openIndex === index + Math.ceil(faqData.length / 2) ? 'bg-amber-400 text-navy-900' : 'hover:bg-gray-50'
                  }`}
                >
                  {item.question}
                  {openIndex === index + Math.ceil(faqData.length / 2) ? (
                    <Minus className="flex-shrink-0 w-5 h-5" />
                  ) : (
                    <Plus className="flex-shrink-0 w-5 h-5" />
                  )}
                </button>
                {openIndex === index + Math.ceil(faqData.length / 2) && (
                  <div className="p-4 bg-white text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;