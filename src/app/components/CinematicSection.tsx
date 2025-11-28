"use client";

import { motion, useInView } from "framer-motion";
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

export function CinematicSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const sublineRef = useRef(null);
  const typewriterRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const sublineInView = useInView(sublineRef, { once: true, amount: 0.5 });
  const typewriterInView = useInView(typewriterRef, { once: true, amount: 0.5 });
  const buttonsInView = useInView(buttonsRef, { once: true, amount: 0.5 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <section 
      ref={sectionRef}
      className="cinematic-main-section"
    >
      <div className="cinematic-content-wrapper">
        
        {/* Main Title with Staggered Letters */}
        <div ref={titleRef} className="cinematic-title-wrapper">
          <h1 className="cinematic-main-title">
            {titleLetters.map((letter, index) => (
              <motion.span
                key={index}
                className="cinematic-title-letter"
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={titleInView ? { 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0 
                } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.06,
                  type: "spring",
                  stiffness: 600,
                  damping: 30
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subline */}
        <motion.div
          ref={sublineRef}
          className="cinematic-subline-wrapper"
          initial={{ opacity: 0, x: -100 }}
          animate={sublineInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="cinematic-subline">Solana&apos;s most cinematic memecoin</p>
        </motion.div>

        {/* Typewriter Description */}
        <motion.div
          ref={typewriterRef}
          className="cinematic-description-wrapper"
          initial={{ opacity: 0 }}
          animate={typewriterInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <TypewriterText 
            text="BTC 2025. An original Solana TV Series. Episode 1 - 15+ minutes - live now."
            startDelay={1.5}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          ref={buttonsRef}
          className="cinematic-cta-buttons"
          initial={{ opacity: 0, y: 50 }}
          animate={buttonsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div whileTap={{ scale: 0.95 }}>
            <BackgroundGradient>
              <motion.button
                className="cta-buy-main-button"
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
            className="cta-watch-main-button"
            whileHover={{ 
              backgroundColor: "rgba(153, 69, 255, 0.8)",
              borderColor: "#9945FF",
              boxShadow: "0 0 30px rgba(153, 69, 255, 0.6)",
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5" />
            Watch Episode 1
          </motion.button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={statsRef}
          className="cinematic-stats-wrapper"
          initial={{ opacity: 0, y: 100 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <BentoGrid className="cinematic-stats-grid">
            {heroStats.map((stat, index) => (
              <BentoGridItem
                key={stat.label}
                className="cinematic-stat-card"
                header={
                  <motion.div
                    className="stat-card-content"
                    whileHover={{ 
                      rotateY: 8,
                      rotateX: 8,
                      scale: 1.05,
                      z: 50
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30 
                    }}
                  >
                    <div className="stat-icon-wrapper" style={{ color: stat.color }}>
                      <stat.icon className="w-8 h-8" />
                    </div>
                    <div className="stat-value-wrapper">
                      {statsInView && (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2.5}
                          delay={index * 0.3}
                          separator=","
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                        />
                      )}
                    </div>
                    <div className="stat-label-wrapper">{stat.label}</div>
                  </motion.div>
                }
              />
            ))}
          </BentoGrid>
        </motion.div>

      </div>
    </section>
  );
}

function TypewriterText({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, startDelay * 1000);

    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!hasStarted) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, hasStarted]);

  return (
    <p className="typewriter-main-text">
      {displayText}
      <motion.span
        className="typewriter-main-cursor"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        |
      </motion.span>
    </p>
  );
}
