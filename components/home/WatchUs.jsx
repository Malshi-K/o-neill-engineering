"use client"
import { useState } from "react";
import { Play, X } from "lucide-react";

const WatchUs = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleCloseClick = () => {
    setIsPlaying(false);
  };

  return (
    <section className="relative w-full min-h-screen">
      {/* Content Container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center px-4 py-20">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-wide">
          Watch Us
        </h2>
        
        {/* Video Container */}
        <div className="relative w-full max-w-5xl aspect-video">
          {!isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePlayClick}
                className="group relative w-24 h-24 flex items-center justify-center"
                aria-label="Play video"
              >
                {/* Pulsing outer glow rings */}
                <div className="absolute w-full h-full">
                  {/* First ring */}
                  <div className="absolute w-full h-full rounded-full bg-orange-500/20 animate-[ping_2s_ease-in-out_infinite] scale-150" />
                  {/* Second ring with delay */}
                  <div className="absolute w-full h-full rounded-full bg-orange-500/20 animate-[ping_2s_ease-in-out_1s_infinite] scale-150" />
                  {/* Hover ring */}
                  <div className="absolute w-full h-full rounded-full bg-orange-500/20 scale-150 group-hover:scale-[1.7] transition-transform duration-300" />
                </div>

                {/* Main button circle */}
                <div className="absolute w-full h-full bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-12 h-12 text-white ml-2" fill="white" />
                </div>
              </button>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <button
                onClick={handleCloseClick}
                className="absolute -top-12 right-0 z-20 p-2 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors duration-300 group"
                aria-label="Close video"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <iframe
                src="https://www.youtube.com/embed/MlulkBRwOtM?si=H59OylUhK91sxvOD&autoplay=1"
                title="O'Neill Engineering Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WatchUs;