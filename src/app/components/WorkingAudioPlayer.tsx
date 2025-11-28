"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function WorkingAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = true;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [volume]);

  const togglePlay = () => {
    console.log("🎵 Working togglePlay called!");
    const audio = audioRef.current;
    if (!audio) {
      console.log("❌ No audio element");
      return;
    }
    
    console.log("🎵 Audio src:", audio.src);
    console.log("🎵 Audio readyState:", audio.readyState);
    console.log("🎵 Audio networkState:", audio.networkState);

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      console.log("⏸️ Audio paused");
    } else {
      // Einfacher direkter Play - das funktioniert!
      audio.volume = volume;
      audio.muted = isMuted;
      
      const playPromise = audio.play();
      console.log("🎵 Play promise created:", playPromise);
      
      if (playPromise) {
        // Timeout nach 5 Sekunden
        const timeoutId = setTimeout(() => {
          console.log("⏰ Play promise timeout after 5s");
        }, 5000);
        
        playPromise
          .then(() => {
            clearTimeout(timeoutId);
            console.log("✅ Audio playing!");
            setIsPlaying(true);
          })
          .catch((err) => {
            clearTimeout(timeoutId);
            console.log("❌ Play failed:", err);
            console.log("❌ Error details:", err.name, err.message);
          });
      } else {
        console.log("❌ No play promise returned");
      }
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      <audio ref={audioRef} preload="auto">
        <source src="/Website/sounds/soundtrack.mp3" type="audio/mpeg" />
      </audio>

      <motion.div
        className="fixed top-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="relative"
          onHoverStart={() => setIsExpanded(true)}
          onHoverEnd={() => setIsExpanded(false)}
        >
          {/* Main Play/Pause Button */}
          <motion.button
            onClick={togglePlay}
            className="audio-player-main"
            style={{ zIndex: 9999 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isPlaying ? "Pause soundtrack" : "Play soundtrack"}
          >
            <div className="audio-player-glow" />
            <div className="audio-player-inner">
              <motion.div
                initial={false}
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 8, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                className="audio-player-icon"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white ml-0.5" />
                )}
              </motion.div>
            </div>
            
            {/* Pulse animation when playing */}
            <AnimatePresence>
              {isPlaying && (
                <motion.div
                  className="audio-player-pulse"
                  style={{ pointerEvents: "none" }}
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  exit={{ scale: 1, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </AnimatePresence>
          </motion.button>

          {/* Expanded Controls */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="audio-player-controls"
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={toggleMute}
                  className="audio-control-btn"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                
                <div className="audio-volume-container">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="audio-volume-slider"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Soundtrack Label - Always Visible */}
          <motion.div
            className="audio-player-label-permanent"
            style={{ pointerEvents: "none" }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.div
              className="audio-label-content"
              animate={isPlaying ? { 
                scale: [1, 1.02, 1],
                opacity: [0.8, 1, 0.8]
              } : {}}
              transition={{ 
                duration: 2, 
                repeat: isPlaying ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              <div className="audio-label-icon" style={{ pointerEvents: "none" }}>
                <motion.div
                  className="sound-wave"
                  animate={isPlaying ? {
                    scaleY: [0.5, 1.5, 0.8, 1.2, 0.6],
                  } : { scaleY: 0.3 }}
                  transition={{
                    duration: 0.8,
                    repeat: isPlaying ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="sound-wave"
                  animate={isPlaying ? {
                    scaleY: [1.2, 0.7, 1.4, 0.9, 1.1],
                  } : { scaleY: 0.4 }}
                  transition={{
                    duration: 0.6,
                    repeat: isPlaying ? Infinity : 0,
                    ease: "easeInOut",
                    delay: 0.1
                  }}
                />
                <motion.div
                  className="sound-wave"
                  animate={isPlaying ? {
                    scaleY: [0.8, 1.3, 0.9, 1.6, 0.7],
                  } : { scaleY: 0.2 }}
                  transition={{
                    duration: 0.7,
                    repeat: isPlaying ? Infinity : 0,
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                />
              </div>
              <span className="audio-label-text">
                {isPlaying ? "♪ Now Playing" : "♪ Play Music"}
              </span>
            </motion.div>
          </motion.div>

          {/* Expanded Soundtrack Label */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="audio-player-label"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-xs text-white/80 font-medium">
                  BTC-2025 Soundtrack
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
}
