"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { DottedGlowBackground } from "../../components/DottedGlowBackground";
import { episode1Scenes, mainEpisode } from "../../../data/episodes";

// Use episode data directly
const scenes = episode1Scenes;

export default function Episode1Page() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

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

        {/* Full Episode Video Player */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/60 backdrop-blur border border-white/10 shadow-2xl">
                {mainEpisode.youtubeId && mainEpisode.youtubeId !== "COMING_TOMORROW" ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${mainEpisode.youtubeId}?rel=0&modestbranding=1`}
                    title={mainEpisode.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-black/50">
                    <div className="text-center text-white opacity-50">
                      <div className="text-4xl mb-2">🎬</div>
                      <h3 className="text-lg font-bold mb-1">Full Episode</h3>
                      <p className="text-white/70 text-sm">Coming Soon</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {mainEpisode.title}
                </h2>
                <p className="text-white/70">{mainEpisode.description}</p>
              </div>
            </motion.div>
          </div>
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
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

    </div>
  );
}

function SceneCard({ 
  scene, 
  index
}: { 
  scene: typeof scenes[0]; 
  index: number;
}) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-2xl bg-black/60 backdrop-blur border border-white/10">
        
          {/* Scene Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          {scene.youtubeId && scene.youtubeId !== "COMING_TOMORROW" ? (
            <img
              className="w-full h-full object-cover"
              src={`https://img.youtube.com/vi/${scene.youtubeId}/maxresdefault.jpg`}
              alt={scene.title}
            />
          ) : scene.thumbnail ? (
            <img
              className="w-full h-full object-cover"
              src={scene.thumbnail}
              alt={scene.title}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center text-white opacity-50">
                <div className="text-2xl mb-1">🎬</div>
                <p className="text-xs">Scene {scene.id.replace('SC', '')} - Coming Soon</p>
              </div>
            </div>
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">
            {scene.id} – {scene.title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            {scene.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
