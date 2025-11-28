"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { DottedGlowBackground } from "../../components/DottedGlowBackground";
import { episode1Scenes } from "../../../data/episodes";

// Use episode data directly
const scenes = episode1Scenes;

export default function Episode1Page() {
  const [selectedScene, setSelectedScene] = useState<typeof episode1Scenes[0] | null>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const openModal = (scene: typeof scenes[0]) => {
    setSelectedScene(scene);
  };

  const closeModal = () => {
    setSelectedScene(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0e1f] to-black relative overflow-hidden">
      {/* Background Effects */}
      <DottedGlowBackground
        color="rgba(153, 69, 255, 0.3)"
        glowColor="rgba(20, 241, 149, 0.5)"
        opacity={0.4}
      />

      <div className="relative z-10">
        {/* Back Button */}
        <div className="px-6 pt-6">
          <Link 
            href="/episodes"
            className="inline-flex items-center gap-2 text-white/70 hover:text-cyan-400 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Episodes</span>
          </Link>
        </div>

        {/* Header */}
        <section 
          ref={sectionRef}
          className="px-6 py-24 md:py-32 text-center"
        >
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"
              style={{
                textShadow: '0 0 20px rgba(34, 211, 238, 0.9), 0 0 40px rgba(168, 85, 247, 0.6)'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Episode I: Vault Breach – Full Transmission
            </motion.h1>
            
            <motion.div 
              className="text-lg md:text-xl font-bold text-white leading-relaxed max-w-4xl mx-auto space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>Frankfurt, 3 AM.</p>
              
              <p>An old Rothschild lights a cigar in a vault that hasn't seen daylight since 1945.</p>
              
              <p>Across the Atlantic, Trump and Elon shake hands on a private fairway – no cameras, no witnesses, just the final hole of the biggest rug ever planned.</p>
              
              <p>Berlin, same night.</p>
              
              <p>Matt – the ghost dev who vanished after the 2021 cycle – meets his inner circle in a Kreuzberg basement lit only by red candles and monitor glow.</p>
              
              <p>Lagos.</p>
              
              <p>Blue, king of African rugs, pours champagne in his mansion while his lieutenant counts the bodies of the last pump-and-dump.</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Scenes Grid */}
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden w-full overflow-x-auto pb-4">
                <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4">
                  {scenes.map((scene, index) => (
                    <div key={scene.id} className="snap-start snap-always flex-shrink-0 w-[85vw] max-w-sm">
                      <SceneCard 
                        scene={scene} 
                        index={index}
                        onClick={() => openModal(scene)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {scenes.map((scene, index) => (
                  <SceneCard 
                    key={scene.id} 
                    scene={scene} 
                    index={index}
                    onClick={() => openModal(scene)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Video Modal */}
      {selectedScene && (
        <VideoModal 
          scene={selectedScene} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}

function SceneCard({ 
  scene, 
  index, 
  onClick 
}: { 
  scene: typeof scenes[0]; 
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="group relative cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-2xl bg-black/60 backdrop-blur border border-white/10 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
        
        {/* Video Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          {scene.youtubeId && scene.youtubeId !== "COMING_TOMORROW" ? (
            <img
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              src={`https://img.youtube.com/vi/${scene.youtubeId}/maxresdefault.jpg`}
              alt={scene.title}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 transition-transform duration-300 group-hover:scale-110">
              <div className="text-center text-white opacity-50">
                <div className="text-2xl mb-1">🎬</div>
                <p className="text-xs">Scene {scene.id.replace('SC', '')} - Coming Soon</p>
              </div>
            </div>
          )}
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors duration-300">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:bg-cyan-400/30 transition-colors duration-300">
              <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
            </div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
            {scene.id} – {scene.title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            {scene.description}
          </p>
        </div>

        {/* Neon Border Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/50 transition-colors duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}

function VideoModal({ 
  scene, 
  onClose 
}: { 
  scene: typeof scenes[0]; 
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
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
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-red-500/50 transition-colors duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        {/* YouTube Player */}
        {scene.youtubeId && scene.youtubeId !== "COMING_TOMORROW" ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${scene.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={scene.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-black/50">
            <div className="text-center text-white opacity-50">
              <div className="text-4xl mb-2">🎬</div>
              <h3 className="text-lg font-bold mb-1">Scene {scene.id.replace('SC', '')}</h3>
              <p className="text-white/70 text-sm">Coming Soon</p>
            </div>
          </div>
        )}

        {/* Video Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h2 className="text-2xl font-bold text-white mb-2">{scene.id} – {scene.title}</h2>
            <p className="text-white/80">{scene.description}</p>
          </div>
      </motion.div>
    </motion.div>
  );
}
