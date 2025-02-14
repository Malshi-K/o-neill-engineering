"use client";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-0 max-w-6xl mx-auto shadow-xl rounded-lg overflow-hidden">
          {/* Contact Information */}
          <div className="bg-navy-900 p-8 md:p-12">
            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg">
                  <Image
                    src="/images/icons/time.png"
                    alt="Calendar Icon"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-orange-500 font-bold text-lg mb-1">
                    Location
                  </h3>
                  <p className="text-white">123 Street, New York, USA</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg">
                <Image
                    src="/images/icons/call.png"
                    alt="Calendar Icon"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-orange-500 font-bold text-lg mb-1">
                    Phone
                  </h3>
                  <p className="text-white">+012 345 67890</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg">
                <Image
                    src="/images/icons/email.png"
                    alt="Calendar Icon"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-orange-500 font-bold text-lg mb-1">
                    Email
                  </h3>
                  <p className="text-white">info@example.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-orange-500 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-transparent border border-navy-900/20 focus:border-navy-900 outline-none placeholder-navy-900/60"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-transparent border border-navy-900/20 focus:border-navy-900 outline-none placeholder-navy-900/60"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-transparent border border-navy-900/20 focus:border-navy-900 outline-none placeholder-navy-900/60"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-transparent border border-navy-900/20 focus:border-navy-900 outline-none placeholder-navy-900/60 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-navy-900 text-white px-8 py-3 font-semibold hover:bg-navy-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
