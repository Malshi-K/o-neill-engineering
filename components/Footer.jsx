// components/Footer.jsx
import Link from "next/link";
import { Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Gable buildings",
    "Half round barns",
    "Mini Barns",
    "Bin covers",
    "Lean-to sheds",
    "Roofing & Corrugated iron",
  ];

  const formatServiceUrl = (service) => {
    return service
      .toLowerCase()
      .replace(/&/g, "and") // Replace & with 'and'
      .replace(/[^a-z0-9]+/g, "-") // Replace any non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
  };

  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Office Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              <span className="text-orange-500">Office Contact</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500"></span>
            </h3>
            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=73+Thames+Street,+Morrinsville+New+Zealand"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:text-orange-500 transition-colors"
              >
                <MapPin className="w-5 h-5 mr-2 text-white" />
                73 Thames Street, Morrinsville New Zealand
              </a>
              <a
                href="tel:078896314"
                className="flex items-center hover:text-orange-500 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2 text-white" />
                07 889 6314
              </a>
              <a
                href="mailto:info@oneillengineering.co.nz"
                className="flex items-center hover:text-orange-500 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2 text-white" />
                info@oneillengineering.co.nz
              </a>
            </div>
          </div>

          {/* Services Areas */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              <span className="text-orange-500">Services Areas</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center">
                  <span className="text-orange-500 mr-2">▸</span>
                  <Link
                    href={`/services/${formatServiceUrl(service)}`}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Pages */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              <span className="text-orange-500">Useful Pages</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">▸</span>
                <Link
                  href="/about"
                  className="hover:text-orange-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">▸</span>
                <Link
                  href="/contact"
                  className="hover:text-orange-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">▸</span>
                <Link
                  href="/gallery"
                  className="hover:text-orange-500 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">▸</span>
                <Link
                  href="/testimonials"
                  className="hover:text-orange-500 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-start mt-8 space-x-4">
          {[
            {
              Icon: Facebook,
              link: "https://www.facebook.com/oneillengineering1/?fref=ts",
            },
            {
              Icon: Youtube,
              link: "https://www.youtube.com/watch?v=MlulkBRwOtM",
            },
          ].map(({ Icon, link }, index) => (
            <Link
              key={index}
              href={link}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
        </div>

        {/* Bottom Links */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link
              href="#"
              className="text-sm hover:text-orange-500 transition-colors"
            >
              Terms of use
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="#"
              className="text-sm hover:text-orange-500 transition-colors"
            >
              Privacy policy
            </Link>
          </div>
          <p className="text-sm text-white/60">
            Copyright © {currentYear}{" "}
            <Link
              href="https://www.gdcdigital.net/"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-orange-500">GDC Digital Solutions</span>
            </Link>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
