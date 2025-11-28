"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const comicQuotes = [
  {
    id: 1,
    quote: "100% burned LP. Contract renounced. No cabal. No insiders.",
    signature: "— The Mission"
  },
  {
    id: 2,
    quote: "This coin right here? 100% made by me. 100% protected by me.",
    signature: "— Matt's Promise"
  },
  {
    id: 3,
    quote: "Not backed by VCs. Not backed by whales. Backed by art, stories, laughs.",
    signature: "— Pure Community"
  },
  {
    id: 4,
    quote: "I'd rather die than go back to a 9-5. This is my lifetime project.",
    signature: "— The Vision"
  },
  {
    id: 5,
    quote: "Every holder becomes a shareholder of the funniest entertainment machine.",
    signature: "— The Future"
  }
];

// Confetti particles for hover effect
const createConfetti = () => {
  const colors = ['#9945FF', '#14F195', '#00D1FF', '#FB2BFF'];
  return Array.from({ length: 12 }, (_, i) => ({
    id: i,
    color: colors[Math.floor(Math.random() * colors.length)],
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    rotation: Math.random() * 360,
    scale: Math.random() * 0.5 + 0.5
  }));
};

export function ComicQuotes() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="comic-quotes-section">
      <div className="comic-quotes-container">
        
        <motion.div
          className="comic-quotes-grid"
          initial={{ opacity: 0 }}
          animate={sectionInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {comicQuotes.map((quote, index) => (
            <ComicBubble 
              key={quote.id} 
              quote={quote} 
              index={index} 
              inView={sectionInView}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function ComicBubble({ quote, index, inView }: { 
  quote: typeof comicQuotes[0], 
  index: number, 
  inView: boolean 
}) {
  const [confetti, setConfetti] = useState<Array<{
    id: number;
    color: string;
    x: number;
    y: number;
    rotation: number;
    scale: number;
  }>>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleHover = () => {
    setConfetti(createConfetti());
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1000);
  };

  return (
    <motion.div
      className="comic-bubble-wrapper"
      initial={{ opacity: 0, y: -100 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0 
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay: 0.4 + index * 0.15,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.05,
        rotate: [0, -2, 2, 0],
        transition: { duration: 0.3 }
      }}
      onHoverStart={handleHover}
    >
      <div className="comic-bubble">
        <div className="comic-bubble-content">
                      <p className="comic-quote-text">&ldquo;{quote.quote}&rdquo;</p>
          <span className="comic-quote-signature">{quote.signature}</span>
        </div>
        
        <div className="comic-bubble-tail" />
        
        {/* Neon Border Effect */}
        <div className="comic-bubble-glow" />
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="confetti-container">
          {confetti.map((particle) => (
            <motion.div
              key={particle.id}
              className="confetti-particle"
              style={{ 
                backgroundColor: particle.color,
                transform: `rotate(${particle.rotation}deg) scale(${particle.scale})`
              }}
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 1,
                scale: particle.scale 
              }}
              animate={{ 
                x: particle.x, 
                y: particle.y, 
                opacity: 0,
                scale: 0
              }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
