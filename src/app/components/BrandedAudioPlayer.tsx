"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function BrandedAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    console.log("🎵 Branded togglePlay called!");
    const audio = audioRef.current;
    if (!audio) {
      console.log("❌ No audio element");
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      console.log("⏸️ Audio paused");
    } else {
      audio.volume = volume;
      audio.muted = isMuted;
      
      const playPromise = audio.play();
      if (playPromise) {
        playPromise
          .then(() => {
            console.log("✅ Audio playing!");
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("❌ Play failed:", err);
          });
      }
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newMuted = !isMuted;
    audio.muted = newMuted;
    setIsMuted(newMuted);
  };

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} preload="auto" loop>
        <source src="/Website/sounds/soundtrack.mp3" type="audio/mpeg" />
      </audio>

      {/* Branded Player - Top Right */}
      <div 
        className="fixed top-4 right-4 z-50"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <div className="flex items-center gap-3 bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 p-[2px] rounded-full shadow-lg">
          <div className="flex items-center gap-3 bg-black/90 backdrop-blur-sm rounded-full px-4 py-2">
            
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 hover:from-purple-500 hover:via-blue-400 hover:to-green-300 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              style={{ zIndex: 9999 }}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-0.5" />
              )}
            </button>

            {/* Controls (show on hover) */}
            {showControls && (
              <>
                {/* Mute Button */}
                <button
                  onClick={toggleMute}
                  className="flex items-center justify-center w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-200"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-white" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </button>

                {/* Volume Slider */}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => {
                    const newVolume = parseFloat(e.target.value);
                    setVolume(newVolume);
                    if (audioRef.current) {
                      audioRef.current.volume = newVolume;
                    }
                  }}
                  className="w-16 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
              </>
            )}

            {/* Label */}
            <span className="text-white text-sm font-montserrat font-medium">
              {isPlaying ? "♪ Playing" : "♪ Soundtrack"}
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 14px;
          height: 14px;
          background: linear-gradient(135deg, #9333ea, #3b82f6, #10b981);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(147, 51, 234, 0.5);
        }
        .slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          background: linear-gradient(135deg, #9333ea, #3b82f6, #10b981);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 8px rgba(147, 51, 234, 0.5);
        }
        .slider::-webkit-slider-track {
          background: linear-gradient(90deg, #9333ea, #3b82f6, #10b981);
          height: 3px;
          border-radius: 2px;
        }
      `}</style>
    </>
  );
}
