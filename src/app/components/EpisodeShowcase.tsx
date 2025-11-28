"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { mainEpisode } from "@/data/episodes";

const comicPanels = [
  {
    id: 1,
    image: "/Episode1/Final Scenes/Scene 1.mov",
    quote: "The year everything changed...",
    character: "Narrator"
  },
  {
    id: 2,
    image: "/Episode1/Final Scenes/Scene 2.mov",
    quote: "I will never abandon you. Ever.",
    character: "Matt"
  },
  {
    id: 3,
    image: "/Episode1/Final Scenes/Scene 3.mov",
    quote: "This is the deal of the century!",
    character: "Trump"
  },
  {
    id: 4,
    image: "/Episode1/Final Scenes/Scene 6.mov",
    quote: "We're going to Mars... and beyond.",
    character: "Elon"
  },
  {
    id: 5,
    image: "/Episode1/Final Scenes/Scene 5.mov",
    quote: "The vault opens... the truth revealed.",
    character: "Mystery Voice"
  },
  {
    id: 6,
    image: "/Episode1/Final Scenes/Scene 7.mov",
    quote: "Buckle up. This is just the beginning.",
    character: "Pilot"
  }
];

export function EpisodeShowcase() {
  const sectionRef = useRef(null);
  const playerRef = useRef(null);
  const panelsRef = useRef(null);
  
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const playerInView = useInView(playerRef, { once: true, amount: 0.3 });
  const panelsInView = useInView(panelsRef, { once: true, amount: 0.1 });

  const [showModal, setShowModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.section 
      ref={sectionRef} 
      className="episode-showcase-section relative flex flex-col justify-center overflow-hidden pt-32 md:pt-48 pb-32 md:pb-48"
      style={{
        backgroundImage: 'url(/Website/Backgrounds/section3.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Section 3 Effekte Overlay - identisch zu Section 2 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Comic Money Rain */}
        <div className="money-rain" />
        {/* Meme Particles */}
        <div className="meme-particles" />
        {/* Cash Glow */}
        <div className="cash-glow cash-glow--left" />
        <div className="cash-glow cash-glow--right" />
        {/* Comic Bubbles */}
        <div className="comic-bubbles" />
        {/* Flying Solana Logos */}
        <div className="flying-logos">
          {/* Von links nach rechts */}
          <img src="/Website/cryptologos/Solana Logo.png" alt="" className="flying-logo left-to-right-1" />
          <img src="/Website/cryptologos/Jupiter Logo.png" alt="" className="flying-logo left-to-right-2" />
          <img src="/Website/cryptologos/Phantom Logo.png" alt="" className="flying-logo left-to-right-3" />
          
          {/* Von rechts nach links */}
          <img src="/Website/cryptologos/Raydium.png" alt="" className="flying-logo right-to-left-1" />
          <img src="/Website/cryptologos/PumpFun Logo.png" alt="" className="flying-logo right-to-left-2" />
          <img src="/Website/cryptologos/orca.png" alt="" className="flying-logo right-to-left-3" />
          
          {/* Von oben nach unten (Schnee) */}
          <img src="/Website/cryptologos/Website Icon Logo Logo.png" alt="" className="flying-logo snow-fall-1" />
          <img src="/Website/cryptologos/Solana Logo.png" alt="" className="flying-logo snow-fall-2" />
          <img src="/Website/cryptologos/Binance Logo.png" alt="" className="flying-logo snow-fall-3" />
          
          {/* Von unten nach oben (Bubbles) */}
          <img src="/Website/cryptologos/Coingecko Logo.png" alt="" className="flying-logo bubble-up-1" />
          <img src="/Website/cryptologos/Dexscreener Logo.png" alt="" className="flying-logo bubble-up-2" />
          
          {/* Diagonal kreuz und quer */}
          <img src="/Website/cryptologos/Twitter Logo.png" alt="" className="flying-logo diagonal-1" />
          <img src="/Website/cryptologos/Twitter Logo.png" alt="" className="flying-logo diagonal-2" />
          <img src="/Website/cryptologos/Solscan.png" alt="" className="flying-logo diagonal-3" />
          
          {/* Mehr Random Logos */}
          <img src="/Website/cryptologos/nova.png" alt="" className="flying-logo random-1" />
          <img src="/Website/cryptologos/photon.png" alt="" className="flying-logo random-2" />
        </div>
      </div>
      <div className="episode-showcase-container relative z-10">
        
        {/* Section Title */}
        <motion.div
          className="episode-title-wrapper mt-32 md:mt-48"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="episode-main-title">Episode 1: On a Flight to Germany – Live Now (15+ minutes)</h2>
        </motion.div>

        {/* Video Player */}
        <motion.div
          ref={playerRef}
          className="episode-player-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={playerInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="episode-player-container">
            <div className="episode-thumbnail">
              <video
                ref={(video) => {
                  if (video && isPlaying) {
                    video.play().catch(console.error);
                  }
                }}
                poster="/Episode1/Episode 1 FINAL.mp4"
                className="episode-video"
                controls={isPlaying}
                muted={!isPlaying}
              >
                <source src="/Episode1/Episode 1 FINAL.mp4" type="video/mp4" />
              </video>
              
              {!isPlaying && (
                <div className="episode-play-overlay" onClick={() => setIsPlaying(true)}>
                  <motion.div
                    className="episode-play-button"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 20px rgba(20, 241, 149, 0.5)",
                        "0 0 40px rgba(20, 241, 149, 0.8)",
                        "0 0 20px rgba(20, 241, 149, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Comic Panels Gallery */}
        <motion.div
          ref={panelsRef}
          className="comic-panels-wrapper"
          initial={{ opacity: 0 }}
          animate={panelsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="comic-panels-container">
            {comicPanels.map((panel, index) => (
              <motion.div
                key={panel.id}
                className="comic-panel"
                initial={{ opacity: 0, rotateY: 180 }}
                animate={panelsInView ? { 
                  opacity: 1, 
                  rotateY: 0 
                } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <div className="comic-panel-inner">
                  <div className="comic-panel-image">
                    <video
                      src={panel.image}
                      poster="/Website/Backgrounds/desktop.png"
                      muted
                      loop
                      className="panel-video"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                    />
                  </div>
                  
                  <div className="comic-speech-bubble">
                    <div className="speech-bubble-content">
                      <p className="speech-text">&ldquo;{panel.quote}&rdquo;</p>
                      <span className="speech-character">— {panel.character}</span>
                    </div>
                    <div className="speech-bubble-tail" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
