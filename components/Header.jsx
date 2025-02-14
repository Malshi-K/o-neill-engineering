"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const formatServiceUrl = (service) => {
    return service
      .toLowerCase()
      .replace(/&/g, "and") // Replace & with 'and'
      .replace(/[^a-z0-9]+/g, "-") // Replace any non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
  };

  // Update the services array to match exactly with your data structure
  const services = [
    "Gable buildings",
    "Half round barns",
    "Mini Barns",
    "Bin covers",
    "Lean-to sheds",
    "Roofing & Corrugated iron",
  ];

  // Function to handle service link click
  const handleServiceClick = () => {
    setIsServicesOpen(false);
    setIsMenuOpen(false); // Also close mobile menu if open
  };

  useEffect(() => {
    const handleScroll = () => {
      // Close mobile menu and services dropdown when scrolling
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      if (isServicesOpen) {
        setIsServicesOpen(false);
      }

      // Handle scroll state
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".services-menu") &&
        !event.target.closest(".mobile-menu-button")
      ) {
        setIsServicesOpen(false);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, isServicesOpen]); // Add dependencies

  return (
    <header className="bg-orange-500">
      {/* Top Orange Bar */}
      <div className={`py-4 ${isScrolled ? "hidden" : ""}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Logo */}
            <div className="mb-4 lg:mb-0">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="O'Neill Engineering Ltd"
                  width={280}
                  height={100}
                  className="h-28 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Contact Information */}
            <div className="hidden lg:flex items-center space-x-12">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/icons/time.png"
                  alt="Calendar Icon"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <div>
                  <p className="font-bold text-black">Opening Hour</p>
                  <p className="text-black">Mon - Fri, 8:00 - 9:00</p>
                </div>
              </div>

              <a
                href="tel:078896314"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/icons/call.png"
                  alt="Phone Icon"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <div>
                  <p className="font-bold text-black">Call Us</p>
                  <p className="text-black">07 889 6314</p>
                </div>
              </a>

              <a
                href="mailto:info@oneillengineering.co.nz"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/icons/email.png"
                  alt="Email Icon"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <div>
                  <p className="font-bold text-black">Email Us</p>
                  <p className="text-black">info@oneillengineering.co.nz</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Container for Navigation */}
      <div className="container mx-auto px-4">
        {/* Navigation Bar */}
        <nav
          className={`bg-navy-900 ${
            isScrolled ? "fixed top-0 left-0 right-0 z-50" : ""
          }`}
        >
          <div className="flex justify-between items-center h-16 px-4">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-orange-500 font-medium">
                HOME
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-orange-500 font-medium"
              >
                ABOUT
              </Link>
              <div className="relative services-menu">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent event from bubbling up
                    setIsServicesOpen(!isServicesOpen);
                  }}
                  className="text-white hover:text-orange-500 font-medium flex items-center gap-1"
                >
                  SERVICES ▼
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 bg-white text-black py-2 w-64 shadow-lg z-50">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={`/services/${formatServiceUrl(service)}`}
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={handleServiceClick}
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/gallery"
                className="text-white hover:text-orange-500 font-medium"
              >
                GALLERY
              </Link>
              <Link
                href="/testimonials"
                className="text-white hover:text-orange-500 font-medium"
              >
                TESTIMONIALS
              </Link>
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="hidden lg:block border border-white text-white px-6 py-2 hover:bg-orange-500 hover:border-orange-500 transition-colors"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white mobile-menu-button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <div className="space-y-2">
                <span className="block w-8 h-0.5 bg-white"></span>
                <span className="block w-8 h-0.5 bg-white"></span>
                <span className="block w-8 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="lg:hidden py-4 px-4">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-orange-500">
                  HOME
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-orange-500"
                >
                  ABOUT
                </Link>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-white hover:text-orange-500 text-left flex items-center justify-between"
                >
                  SERVICES
                  <span>▼</span>
                </button>
                {isServicesOpen && (
                  <div className="pl-4 space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={`/services/${formatServiceUrl(service)}`}
                        className="block text-white hover:text-orange-500"
                        onClick={handleServiceClick}
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  href="/gallery"
                  className="text-white hover:text-orange-500"
                >
                  GALLERY
                </Link>
                <Link
                  href="/testimonials"
                  className="text-white hover:text-orange-500"
                >
                  TESTIMONIALS
                </Link>
                <Link
                  href="/contact"
                  className="inline-block border border-white text-white px-6 py-2 hover:bg-orange-500 hover:border-orange-500 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
