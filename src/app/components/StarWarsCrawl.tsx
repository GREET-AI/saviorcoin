"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const crawlText = [
  "Episode I",
  "SAVIOR",
  "",
  "It is a period of crypto chaos.",
  "Rug pulls and scams have spread",
  "across the Solana blockchain,",
  "leaving degens broke and broken.",
  "",
  "During the battle, a mysterious",
  "developer known as SOLAO managed",
  "to steal the secret plans to the",
  "ultimate memecoin - one with the",
  "power to never rug its holders.",
  "",
  "Pursued by the cabal's sinister",
  "agents, Princess Degen races",
  "home aboard her starship,",
  "custodian of the stolen plans",
  "that can save her people and",
  "restore freedom to the galaxy...",
  "",
  "SAVIOR",
  "A Solana Story",
  "",
  "Coming to pump.fun",
  "Winter 2025"
];

// Pre-generated static data to avoid Math.random in render
const generateStars = () => {
  const stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 2 + Math.random() * 2
    });
  }
  return stars;
};

const generateParticles = () => {
  const particles = [];
  const colors = ['#9945FF', '#14F195', '#00D1FF', '#FB2BFF'];
  for (let i = 0; i < 50; i++) {
    particles.push({
      id: i,
      color: colors[i % 4],
      x: (Math.random() - 0.5) * 400,
      y: (Math.random() - 0.5) * 400,
      delay: Math.random() * 0.5
    });
  }
  return particles;
};

const STARS = generateStars();
const PARTICLES = generateParticles();

export function StarWarsCrawl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startCrawl = () => {
    setIsPlaying(true);
    if (audioRef.current && !isMuted) {
      audioRef.current.play().catch(console.error);
    }
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    if (audioRef.current) {
      if (isPaused) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setShowLogo(true);
      }, 25000); // Show logo after crawl completes
      
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  return (
    <div className="star-wars-crawl-container">
      <audio ref={audioRef} loop>
        <source src="/Website/sounds/soundtrack.mp3" type="audio/mpeg" />
      </audio>

      {/* Stars Background */}
      <div className="stars-background">
        {STARS.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`
            }}
          />
        ))}
      </div>

      {/* Controls */}
      {isPlaying && (
        <div className="crawl-controls">
          <button onClick={togglePause} className="crawl-control-btn">
            {isPaused ? "▶" : "⏸"}
          </button>
          <button onClick={toggleMute} className="crawl-control-btn">
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      )}

      {/* Start Screen */}
      {!isPlaying && (
        <motion.div
          className="crawl-start-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="crawl-start-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="crawl-start-title">SAVIOR</h1>
            <p className="crawl-start-subtitle">A Solana Story</p>
            <motion.button
              className="crawl-start-button"
              onClick={startCrawl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Begin Transmission
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* Crawl Text */}
      <AnimatePresence>
        {isPlaying && !showLogo && (
          <motion.div
            className="crawl-perspective"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            onClick={togglePause}
          >
            <motion.div
              className="crawl-text"
              initial={{ y: "100vh" }}
              animate={isPaused ? {} : { y: "-150vh" }}
              transition={{ 
                duration: 25, 
                ease: "linear",
                repeat: 0
              }}
            >
              {crawlText.map((line, index) => (
                <div
                  key={index}
                  className={`crawl-line ${
                    index === 0 ? "crawl-episode" : 
                    index === 1 ? "crawl-title" :
                    line === "" ? "crawl-space" : "crawl-body"
                  }`}
                >
                  {line}
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final Logo */}
      <AnimatePresence>
        {showLogo && (
          <motion.div
            className="crawl-final-logo"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1.5,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            <motion.h1
              className="final-logo-text"
              animate={{
                textShadow: [
                  "0 0 20px #9945FF",
                  "0 0 40px #14F195", 
                  "0 0 20px #9945FF"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              SAVIOR
            </motion.h1>
            
            {/* Particle Explosion */}
            <div className="logo-particles">
              {PARTICLES.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="logo-particle"
                  style={{
                    backgroundColor: particle.color
                  }}
                  initial={{ 
                    scale: 0, 
                    x: 0, 
                    y: 0,
                    opacity: 1 
                  }}
                  animate={{ 
                    scale: [0, 1, 0],
                    x: particle.x,
                    y: particle.y,
                    opacity: [1, 1, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: particle.delay,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}