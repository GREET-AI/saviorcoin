"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function SimpleAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    console.log("🎵 Simple togglePlay called!");
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
      // Einfacher direkter Play - kein await, kein muted trick
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
            // Fallback: User muss zuerst interagieren
            alert("Klick nochmal - Browser braucht User-Interaktion für Audio");
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
        <source src="/sounds/soundtrack.mp3" type="audio/mpeg" />
      </audio>

      {/* Solana-Style UI - oben rechts */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-3 bg-gradient-to-r from-purple-900/90 to-pink-900/90 backdrop-blur-sm rounded-full p-4 border border-purple-500/40 shadow-lg shadow-purple-500/20">
        
        {/* Play/Pause Button - Solana Gradient */}
        <button
          onClick={togglePlay}
          className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-400/50 hover:scale-105"
          style={{ zIndex: 9999 }}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white ml-0.5" />
          )}
        </button>

        {/* Mute Button - Solana Style */}
        <button
          onClick={toggleMute}
          className="flex items-center justify-center w-9 h-9 bg-gradient-to-r from-purple-700 to-pink-700 hover:from-purple-600 hover:to-pink-600 rounded-full transition-all duration-300 shadow-md shadow-purple-500/20"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-white" />
          ) : (
            <Volume2 className="w-4 h-4 text-white" />
          )}
        </button>

        {/* Volume Slider - Solana Style */}
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
          className="w-20 h-2 bg-purple-800/50 rounded-lg appearance-none cursor-pointer slider"
        />

        {/* Label - Solana Branding */}
        <span className="text-white text-sm font-bold ml-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {isPlaying ? "♪ SOLANA VIBES" : "♪ SOUNDTRACK"}
        </span>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          background: linear-gradient(135deg, #9945FF, #14F195);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(153, 69, 255, 0.5);
        }
        .slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          background: linear-gradient(135deg, #9945FF, #14F195);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(153, 69, 255, 0.5);
        }
        .slider::-webkit-slider-track {
          background: linear-gradient(90deg, #9945FF, #14F195);
          height: 4px;
          border-radius: 2px;
        }
      `}</style>
    </>
  );
}
