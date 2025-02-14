"use client";
import { useState } from "react";
import { Play } from "lucide-react";

const WatchUs = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative w-full min-h-screen">
      {/* Content */}
      <div className="relative w-full max-w-5xl mx-auto aspect-video flex items-center justify-center -mt-4">
        <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center gap-8">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-wide">
            Watch Us
          </h2>
          {!isPlaying ? (
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
          ) : (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/MlulkBRwOtM?si=H59OylUhK91sxvOD&autoplay=1"
              title="O'Neill Engineering Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 rounded-lg"
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default WatchUs;
