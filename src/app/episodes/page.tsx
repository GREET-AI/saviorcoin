"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Clock, Eye } from "lucide-react";
import Link from "next/link";
import { DottedGlowBackground } from "../components/DottedGlowBackground";

// Episodes data - Netflix style
const episodes = [
  {
    id: 1,
    title: "Episode I: Vault Breach – On a Flight to Germany",
    description: "Frankfurt. Berlin. Lagos. Three meetings that will break the ledger.",
    thumbnail: "/Episode1/Final Scenes/Scene 1.mov", // Main thumbnail
    badge: "11 Scenes · Now Live",
    duration: "15+ minutes",
    status: "live",
    href: "/episodes/episode1",
    releaseDate: "Available Now"
  },
  {
    id: 2,
    title: "Episode II: The Epstein Files",
    description: "The vault is open. The files are leaked. Names, dates, transactions – everything the world wasn't supposed to see. When the ledger bleeds, the truth screams.",
    thumbnail: "/Website/Backgrounds/desktop.png", // Placeholder
    badge: "Coming This Week",
    duration: "TBA",
    status: "coming-soon",
    href: "/episodes/episode2",
    releaseDate: "Coming This Week"
  },
  {
    id: 3,
    title: "Episode III: The Reckoning",
    description: "Every rug has its day. Every holder has their moment.",
    thumbnail: "/Website/Backgrounds/desktop.png", // Placeholder
    badge: "Weekly Release",
    duration: "TBA",
    status: "future",
    href: "/episodes/episode3",
    releaseDate: "December 8, 2024"
  }
];

export default function EpisodesOverviewPage() {
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
        {/* Header */}
        <section 
          ref={sectionRef}
          className="px-6 py-24 md:py-32 text-center"
        >
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"
              style={{
                textShadow: '0 0 30px rgba(34, 211, 238, 0.9), 0 0 60px rgba(168, 85, 247, 0.6)'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              BTC-2025 – The Series
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The first Solana TV series funded by a memecoin. Every trade funds the next episode. 
              Every holder becomes part of the story.
            </motion.p>
          </motion.div>
        </section>

        {/* Episodes Grid */}
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
                  {episodes.map((episode, index) => (
                    <div key={episode.id} className="snap-start snap-always flex-shrink-0 w-[85vw] max-w-sm">
                      <EpisodeCard 
                        episode={episode} 
                        index={index}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {episodes.map((episode, index) => (
                  <EpisodeCard 
                    key={episode.id} 
                    episode={episode} 
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Series Info */}
        <section className="px-6 pb-24">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="bg-black/60 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The Ultimate Rug Begins
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                This isn't just entertainment. This is the cinematic ledger of the greatest financial conspiracy ever planned. 
                Frankfurt vaults. Berlin basements. Lagos mansions. Atlantic fairways. 
                When BTC hits 2025, the chart won't just bleed – it will scream.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Eye className="w-5 h-5" />
                  <span className="font-semibold">Weekly Episodes</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">15+ Minutes Each</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <Play className="w-5 h-5" />
                  <span className="font-semibold">Community Funded</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

function EpisodeCard({ 
  episode, 
  index 
}: { 
  episode: typeof episodes[0]; 
  index: number;
}) {
  const isClickable = episode.status === 'live';
  
  const CardContent = (
    <motion.div
      className={`group relative ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={isClickable ? { scale: 1.02 } : {}}
    >
      {/* Card Container */}
      <div className={`relative overflow-hidden rounded-3xl bg-black/60 backdrop-blur border transition-all duration-300 ${
        episode.status === 'live' 
          ? 'border-cyan-400/50 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/30' 
          : episode.status === 'coming-soon'
          ? 'border-purple-400/30 hover:border-purple-400/50'
          : 'border-white/10'
      }`}>
        
        {/* Episode Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          {episode.status === 'live' ? (
            <video
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              muted
              loop
              preload="metadata"
              onMouseEnter={(e) => isClickable && e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
            >
              <source src={episode.thumbnail} type="video/quicktime" />
            </video>
          ) : (
            <div 
              className="w-full h-full bg-gradient-to-br from-purple-900/50 to-cyan-900/50 flex items-center justify-center"
            >
              <div className="text-6xl opacity-30">🎬</div>
            </div>
          )}
          
          {/* Status Badge */}
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${
            episode.status === 'live' 
              ? 'bg-green-500/90 text-white' 
              : episode.status === 'coming-soon'
              ? 'bg-purple-500/90 text-white'
              : 'bg-gray-500/90 text-white'
          }`}>
            {episode.badge}
          </div>

          {/* Play Button Overlay */}
          {isClickable && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors duration-300">
              <motion.div
                className="w-20 h-20 rounded-full bg-cyan-400/20 backdrop-blur flex items-center justify-center group-hover:bg-cyan-400/40 transition-colors duration-300"
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(34, 211, 238, 0.5)',
                    '0 0 40px rgba(34, 211, 238, 0.8)',
                    '0 0 20px rgba(34, 211, 238, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Play className="w-10 h-10 text-cyan-400 ml-1" fill="currentColor" />
              </motion.div>
            </div>
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 ${
            episode.status === 'live' 
              ? 'text-white group-hover:text-cyan-400' 
              : episode.status === 'coming-soon'
              ? 'text-white group-hover:text-purple-400'
              : 'text-white/60'
          }`}>
            {episode.title}
          </h3>
          
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            {episode.description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-white/50">
            <span>{episode.duration}</span>
            <span>{episode.releaseDate}</span>
          </div>
        </div>

        {/* Neon Border Effect */}
        <div className={`absolute inset-0 rounded-3xl border-2 border-transparent transition-colors duration-300 pointer-events-none ${
          isClickable ? 'group-hover:border-cyan-400/30' : ''
        }`} />
      </div>
    </motion.div>
  );

  return isClickable ? (
    <Link href={episode.href}>
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
}