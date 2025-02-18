import React from "react";
import { usePathname } from "next/navigation";

const PageTitle = ({ title }) => {
  const pathname = usePathname();

  // Background image mapping based on pathname
  const getBackgroundImage = () => {
    switch (pathname) {
      case "/about":
        return "/images/backgrounds/1.png";
      case "/services/gable-buildings":
        return "/images/backgrounds/2.png";
      case "/services/half-round-barns":
        return "/images/backgrounds/3.png";
      case "/services/mini-barns":
        return "/images/backgrounds/4.png";
      case "/services/bin-covers":
        return "/images/backgrounds/5.png";
      case "/services/lean-to-sheds":
        return "/images/backgrounds/6.png";
      case "/services/roofing-and-corrugated-iron":
        return "/images/backgrounds/7.png";
      case "/gallery":
        return "/images/backgrounds/8.png";
      case "/testimonials":
        return "/images/backgrounds/9.png";
      case "/contact":
        return "/images/backgrounds/10.png";
      default:
        return "/images/backgrounds/default-bg.png";
    }
  };

  const services = [
    {
      name: "Gable buildings",
      icon: (
        <img
          src="/images/icons/Gable buildings.png"
          alt="Gable buildings"
          className="w-16 h-16 object-cover rounded-lg"
        />
      ),
    },
    {
      name: "Half round barns",
      icon: (
        <img
          src="/images/icons/Half round barns.png"
          alt="Half round barns"
          className="w-16 h-16 object-cover rounded-lg"
        />
      ),
    },
    {
      name: "Mini Barns",
      icon: (
        <img
          src="/images/icons/Mini Barns.png"
          alt="Mini Barns"
          className="w-16 h-16 object-cover rounded-lg"
        />
      ),
    },
    {
      name: "Bin covers",
      icon: (
        <img
          src="/images/icons/Bin covers.png"
          alt="Bin covers"
          className="w-16 h-16 object-cover rounded-lg"
        />
      ),
    },
    {
      name: "Lean-to sheds",
      icon: (
        <img
          src="/images/icons/Lean-to sheds.png"
          alt="Lean-to sheds"
          className="w-16 h-16 object-cover rounded-lg"
        />
      ),
    },
    {
      name: "Roofing & Corrugated iron",
      icon: (
        <img
          src="/images/icons/Roofing & Corrugated iron.png"
          alt="Roofing & Corrugated iron"
          className="w-16 h-16 object-cover rounded-lg"
        />
      ),
    },
  ];

  // Double the services array for seamless looping
  const doubledServices = [...services, ...services];

  return (
    <div className="relative w-full">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{
          backgroundImage: `url('${getBackgroundImage()}')`,
          filter: "brightness(0.3)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center text-white mb-8">
            {title}
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-2"></div>
          </h1>

          {/* Services Slider */}
          <div className="max-w-5xl mx-auto overflow-hidden">
            <div
              className="flex animate-scroll"
              style={{
                animation: "scroll 30s linear infinite",
              }}
            >
              {doubledServices.map((service, index) => (
                <div
                  key={`${service.name}-${index}`}
                  className="flex-none px-2"
                  style={{ width: "200px" }}
                >
                  <div className="p-4 text-center transform hover:scale-105 transition-transform duration-300">
                    <div className="mb-3 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-white font-semibold text-lg">
                      {service.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style jsx global>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              will-change: transform;
              animation: scroll 30s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
