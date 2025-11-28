"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import { Play, TrendingUp, Users, Zap, DollarSign } from "lucide-react";
import { BackgroundGradient } from "./BackgroundGradient";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

const heroStats = [
  { 
    icon: DollarSign, 
    value: 1000000000, 
    label: "Total Supply", 
    suffix: "", 
    prefix: "",
    color: "#9945FF" 
  },
  { 
    icon: TrendingUp, 
    value: 100, 
    label: "LP Burned", 
    suffix: "%", 
    prefix: "",
    color: "#14F195" 
  },
  { 
    icon: Users, 
    value: 2847, 
    label: "Holders", 
    suffix: "+", 
    prefix: "",
    color: "#FB2BFF" 
  },
  { 
    icon: Zap, 
    value: 15, 
    label: "Episode Length", 
    suffix: " min", 
    prefix: "",
    color: "#00D1FF" 
  },
];

const titleLetters = "SAVIOR".split("");

export function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  return (
    <section ref={containerRef} className="cinematic-hero">
      {/* Parallax Background */}
      <motion.div 
        className="cinematic-hero-bg"
        style={{ y: parallaxY }}
      />
      
      {/* Content Overlay */}
      <div className="cinematic-hero-content">
        <div className="cinematic-hero-inner">
          
          {/* Main Title */}
          <motion.div 
            className="cinematic-title-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="cinematic-title">
              {titleLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="cinematic-letter"
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 1 + index * 0.05,
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Subline with Typewriter */}
          <motion.div
            className="cinematic-subline-container"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <TypewriterText text="Solana's most cinematic memecoin" />
          </motion.div>

          {/* Episode Teaser */}
          <motion.div
            className="episode-teaser"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            onHoverStart={() => setIsVideoHovered(true)}
            onHoverEnd={() => setIsVideoHovered(false)}
          >
            <motion.div
              className="episode-thumbnail"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="episode-poster">
                <video
                  src="/Episode1/Final Scenes/Scene 1.mov"
                  poster="/Website/Backgrounds/desktop.png"
                  muted
                  loop
                  className="episode-video"
                />
                
                {/* Play Overlay */}
                <div className="episode-overlay">
                  <motion.div
                    className="play-button-large"
                    animate={isVideoHovered ? {
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 20px rgba(20, 241, 149, 0.5)",
                        "0 0 40px rgba(20, 241, 149, 0.8)",
                        "0 0 20px rgba(20, 241, 149, 0.5)"
                      ]
                    } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                  
                  <div className="episode-info">
                    <h3 className="episode-title">Episode 1: On a Flight to Germany – 15+ minutes live</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
          >
            <motion.div whileTap={{ scale: 0.95 }}>
              <BackgroundGradient>
                <motion.button
                  className="cta-buy-button"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(153, 69, 255, 0.5)",
                      "0 0 40px rgba(251, 43, 255, 0.8)",
                      "0 0 20px rgba(153, 69, 255, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-5 h-5" />
                  BUY $SAVIOR
                </motion.button>
              </BackgroundGradient>
            </motion.div>

            <motion.button
              className="cta-watch-button"
              whileHover={{ 
                backgroundColor: "rgba(153, 69, 255, 0.8)",
                borderColor: "#9945FF",
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5" />
              Watch Episode 1
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* Stats Grid */}
      <motion.div
        className="stats-section"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        <BentoGrid className="stats-grid">
          {heroStats.map((stat, index) => (
            <BentoGridItem
              key={stat.label}
              className="stat-card"
              header={
                <motion.div
                  className="stat-card-inner"
                  whileHover={{ 
                    rotateY: 5,
                    rotateX: 5,
                    scale: 1.02
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="stat-icon" style={{ color: stat.color }}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="stat-value">
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      delay={index * 0.2}
                      separator=","
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              }
            />
          ))}
        </BentoGrid>
      </motion.div>
    </section>
  );
}

function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className="typewriter-text">
      {displayText}
      <motion.span
        className="typewriter-cursor"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        |
      </motion.span>
    </span>
  );
}

