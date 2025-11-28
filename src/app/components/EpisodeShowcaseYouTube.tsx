"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { mainEpisode } from "@/data/episodes";

const comicPanels = [
  {
    id: 1,
    image: `https://img.youtube.com/vi/_wB1ROmdyyE/maxresdefault.jpg`,
    quote: "The year everything changed...",
    character: "Narrator",
    youtubeId: "_wB1ROmdyyE"
  },
  {
    id: 2,
    image: `https://img.youtube.com/vi/CpMcitKGku0/maxresdefault.jpg`,
    quote: "I will never abandon you. Ever.",
    character: "Matt",
    youtubeId: "CpMcitKGku0"
  },
  {
    id: 3,
    image: `https://img.youtube.com/vi/fO7vIQXW5Ok/maxresdefault.jpg`,
    quote: "This is the deal of the century!",
    character: "Trump",
    youtubeId: "fO7vIQXW5Ok"
  },
  {
    id: 4,
    image: `https://img.youtube.com/vi/AwS_ODJVCpE/maxresdefault.jpg`,
    quote: "We're going to Mars... and beyond.",
    character: "Elon",
    youtubeId: "AwS_ODJVCpE"
  },
  {
    id: 5,
    image: `https://img.youtube.com/vi/Bpoj-gzI5jI/maxresdefault.jpg`,
    quote: "The vault opens... the truth revealed.",
    character: "Mystery Voice",
    youtubeId: "Bpoj-gzI5jI"
  },
  {
    id: 6,
    image: `https://img.youtube.com/vi/iD3AAfKFKtY/maxresdefault.jpg`,
    quote: "Buckle up. This is just the beginning.",
    character: "Pilot",
    youtubeId: "iD3AAfKFKtY"
  }
];

export function EpisodeShowcaseYouTube() {
  const sectionRef = useRef(null);
  const playerRef = useRef(null);
  const panelsRef = useRef(null);
  
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const playerInView = useInView(playerRef, { once: true, amount: 0.3 });
  const panelsInView = useInView(panelsRef, { once: true, amount: 0.1 });

  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openModal = (youtubeId: string) => {
    setSelectedVideo(youtubeId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
  };

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
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="money-rain" />
        <div className="meme-particles" />
        <div className="cash-glow cash-glow--left" />
        <div className="cash-glow cash-glow--right" />
        <div className="comic-bubbles" />
        <div className="flying-logos">
          <img src="/Website/cryptologos/Solana Logo.png" alt="" className="flying-logo left-to-right-1" />
          <img src="/Website/cryptologos/Jupiter Logo.png" alt="" className="flying-logo left-to-right-2" />
          <img src="/Website/cryptologos/Phantom Logo.png" alt="" className="flying-logo left-to-right-3" />
          <img src="/Website/cryptologos/Raydium.png" alt="" className="flying-logo right-to-left-1" />
          <img src="/Website/cryptologos/PumpFun Logo.png" alt="" className="flying-logo right-to-left-2" />
          <img src="/Website/cryptologos/orca.png" alt="" className="flying-logo right-to-left-3" />
          <img src="/Website/cryptologos/Website Icon Logo Logo.png" alt="" className="flying-logo snow-fall-1" />
          <img src="/Website/cryptologos/Solana Logo.png" alt="" className="flying-logo snow-fall-2" />
          <img src="/Website/cryptologos/Binance Logo.png" alt="" className="flying-logo snow-fall-3" />
          <img src="/Website/cryptologos/Coingecko Logo.png" alt="" className="flying-logo bubble-up-1" />
          <img src="/Website/cryptologos/Dexscreener Logo.png" alt="" className="flying-logo bubble-up-2" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Episode Title */}
        <motion.div
          className="text-center mb-16 pt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="episode-main-title">Episode 1: On a Flight to Germany – Live Now (15+ minutes)</h2>
        </motion.div>

        {/* Main Video Player */}
        <motion.div
          ref={playerRef}
          className="episode-player-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={playerInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="episode-player-container">
            <div className="episode-thumbnail cursor-pointer" onClick={() => openModal(mainEpisode.youtubeId)}>
              <img 
                src={`https://img.youtube.com/vi/${mainEpisode.youtubeId}/maxresdefault.jpg`}
                alt={mainEpisode.title}
                className="episode-video"
              />
              
              <div className="episode-play-overlay">
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
                  <Play className="play-icon" />
                </motion.div>
                <div className="episode-play-text">Watch Full Episode</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Comic Panels */}
        <motion.div
          ref={panelsRef}
          className="comic-panels-wrapper pt-20"
          initial={{ opacity: 0 }}
          animate={panelsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="comic-panels-container">
            {comicPanels.map((panel, index) => (
              <motion.div
                key={panel.id}
                className="comic-panel cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={panelsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                onClick={() => openModal(panel.youtubeId)}
              >
                <div className="comic-panel-inner">
                  <div className="comic-panel-image">
                    <img
                      src={panel.image}
                      alt={panel.character}
                      className="panel-video"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                      <Play className="w-12 h-12 text-white" />
                    </div>
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

      {/* YouTube Modal */}
      <AnimatePresence>
        {showModal && selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-red-500/50 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* YouTube Player */}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1`}
                title="Episode Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
