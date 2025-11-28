"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

interface Chapter {
  id: string;
  number: number;
  title: string;
  content: string;
  type: 'artist' | 'team' | 'ai' | 'company' | 'promise' | 'milestones';
  teamMembers?: Array<{
    role: string;
    name: string;
    description: string;
    isRevealed: boolean;
  }>;
}

const chapters: Chapter[] = [
  {
    id: 'artist',
    number: 1,
    title: 'The Artist',
    content: 'Matt isn\'t just a dev. He\'s the most respected underground artist in the entire Solana scene. Years of perfecting characters, storytelling and satire – long before the coin existed. He turned down every VC that wanted to own his soul. Now he builds his own empire – on his terms.',
    type: 'artist'
  },
  {
    id: 'team',
    number: 2,
    title: 'The Team',
    content: 'Small team. Elite tier. Everyone here chose art over sell-out deals.',
    type: 'team',
    teamMembers: [
      {
        role: 'Lead Artist & Director',
        name: 'Matt',
        description: 'The visionary behind every frame, every character, every conspiracy.',
        isRevealed: true
      },
      {
        role: 'Story & Script',
        name: 'Matt + Two Anonymous Writers',
        description: 'Original Solana OGs who know every dirty secret in crypto.',
        isRevealed: false
      },
      {
        role: 'AI Supervision',
        name: 'In-House AI Team',
        description: 'Pushing Runway, Kling, and ElevenLabs to the absolute limit.',
        isRevealed: true
      }
    ]
  },
  {
    id: 'ai',
    number: 3,
    title: 'Why We Use AI',
    content: 'AI is not a shortcut. AI is nitro. Traditional studios need 80 people and 18 months for one episode. We drop a new episode every single week – in cinema quality – because we combined the best human creativity with the most powerful AI tools on earth. Human soul × AI speed = unstoppable.',
    type: 'ai'
  },
  {
    id: 'company',
    number: 4,
    title: 'The Solana TV Series – The Company',
    content: 'We are officially founding The Solana TV Series GmbH. A real animation studio. 100% owned by the community through the token. Every holder becomes shareholder of the studio that will produce seasons, spin-offs, merch, live events – forever. This is not a meme. This is the new Disney of web3 – built by artists who refused to sell their soul.',
    type: 'company'
  },
  {
    id: 'promise',
    number: 5,
    title: 'The Promise',
    content: 'No soul-selling. No VC cuts. No watered-down content. Every episode stays raw, brutal, funny and 100% uncensored – exactly like you expect from us.',
    type: 'promise'
  },
  {
    id: 'milestones',
    number: 6,
    title: 'Next Milestones',
    content: 'The roadmap is clear. The vision is unstoppable.',
    type: 'milestones'
  }
];

export default function BehindScenesPage() {
  const [nextEpisodeCountdown, setNextEpisodeCountdown] = useState('');
  
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  useEffect(() => {
    // Calculate countdown to Episode 2 (Coming this week)
    const calculateCountdown = () => {
      const episode2Date = new Date('2024-12-01T00:00:00');
      const now = new Date().getTime();
      const distance = episode2Date.getTime() - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setNextEpisodeCountdown(`${days}d ${hours}h`);
      } else {
        setNextEpisodeCountdown('LIVE NOW!');
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000 * 60 * 60); // Update every hour
    
    return () => clearInterval(interval);
  }, []);

  const ChapterWrapper = ({ children, index }: { children: React.ReactNode; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.3, duration: 1.2 }}
        className="mb-48"
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Premium Overlay Effects */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 opacity-90" />
        <div className="absolute inset-0 bg-[url('/Website/grain.png')] opacity-15 mix-blend-overlay" />
        {/* Golden accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/Website/Backgrounds/behind.png)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75" />
        
        {/* VHS Scanlines */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#14F195]/8 to-transparent animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#FB2BFF]/80 to-transparent animate-pulse opacity-70" />
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#14F195]/80 to-transparent animate-pulse opacity-70" />
        </div>

        <div className="relative z-20 text-center max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ scale: 0, rotate: 10 }}
            animate={isHeroInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.3, duration: 1, type: "spring" }}
          >
            <img 
              src="/Website/Logo/logo.png" 
              alt="Savior" 
              className="w-40 h-40 mx-auto mb-8"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bangers mb-12 leading-tight"
            style={{
              background: 'linear-gradient(45deg, #FB2BFF, #14F195, #FB2BFF)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 120px #FB2BFF, 0 0 240px #14F195',
              animation: 'gradient 4s ease infinite',
              filter: 'drop-shadow(0 0 30px #FB2BFF)'
            }}
            initial={{ y: 100, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 1.5 }}
          >
            BACKED BY THE GREATEST
            <br />
            ARTIST IN CRYPTO
          </motion.h1>
          
          <motion.div
            className="space-y-6"
            initial={{ y: 50, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 1.3, duration: 1.2 }}
          >
            <p className="text-lg md:text-xl lg:text-2xl font-montserrat text-white leading-relaxed max-w-4xl mx-auto">
              <span className="text-[#14F195] font-bold">One vision. One elite team. Zero soul-selling.</span>
            </p>
            <p className="text-base md:text-lg font-montserrat text-gray-300 leading-relaxed max-w-3xl mx-auto">
              The first studio that drops weekly episodes using AI as a weapon – not as a crutch.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Chapters */}
      <div className="relative z-20 px-6 md:px-12 py-40">
        <div className="max-w-7xl mx-auto">
          {chapters.map((chapter, index) => (
            <ChapterWrapper key={chapter.id} index={index}>
              {/* Chapter Header with VHS Glitch Effect */}
              <div className="relative mb-20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent h-px top-1/2" />
                <div className="bg-black px-12 inline-block">
                  <motion.h2 
                    className="text-5xl md:text-6xl lg:text-7xl font-bangers mb-4"
                    style={{
                      background: 'linear-gradient(45deg, #14F195, #FB2BFF, #14F195)',
                      backgroundSize: '200% 200%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 60px #14F195',
                      animation: 'gradient 3s ease infinite'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      filter: 'drop-shadow(0 0 40px #FB2BFF) hue-rotate(10deg)'
                    }}
                  >
                    CHAPTER {chapter.number.toString().padStart(2, '0')}
                  </motion.h2>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bangers text-white mb-6 tracking-wider">
                    {chapter.title}
                  </h3>
                </div>
              </div>

              {/* Chapter Content */}
              {chapter.type === 'artist' && (
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-8">
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-montserrat">
                      {chapter.content}
                    </p>
                  </div>
                  <div className="relative group">
                    <div className="aspect-square bg-gradient-to-br from-[#14F195]/20 to-[#FB2BFF]/20 rounded-3xl border-2 border-yellow-400/40 p-8 group-hover:border-yellow-400/80 transition-all duration-500">
                      <div className="w-full h-full bg-black rounded-2xl overflow-hidden border border-gray-700 group-hover:border-yellow-400/60 transition-all duration-500">
                        <img
                          src="/Website/mattportrait.png"
                          alt="Matt - The Greatest Artist in Crypto"
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                          <p className="text-lg text-yellow-400 font-bangers">SOLAO</p>
                          <p className="text-sm text-gray-300">The Legend Himself</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {chapter.type === 'team' && (
                <div className="space-y-16">
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-montserrat text-center max-w-4xl mx-auto">
                    {chapter.content}
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {chapter.teamMembers?.map((member, idx) => (
                      <motion.div
                        key={member.role}
                        className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:border-yellow-400/60 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 group"
                        whileHover={{ scale: 1.03, y: -10 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2, duration: 0.8 }}
                      >
                        <div className="text-center space-y-6">
                          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl ${
                            member.isRevealed ? 'bg-[#14F195]/20' : 'bg-gray-700'
                          }`}>
                            {member.isRevealed ? '👑' : '❓'}
                          </div>
                          
                          <div className="space-y-3">
                            <p className="text-xs uppercase tracking-wider text-yellow-400 font-mono">
                              {member.role}
                            </p>
                            <h4 className="text-lg font-bangers text-white">
                              {member.name}
                            </h4>
                            <p className="text-sm text-gray-400 leading-relaxed">
                              {member.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {chapter.type === 'ai' && (
                <div className="text-center space-y-16">
                  <div className="bg-gradient-to-r from-[#14F195]/10 via-[#FB2BFF]/10 to-[#14F195]/10 rounded-3xl p-12 border border-[#14F195]/30">
                    <p className="text-xl md:text-2xl lg:text-3xl font-montserrat leading-relaxed text-white">
                      {chapter.content.split('. ').map((sentence: string, idx: number) => (
                        <span key={idx} className={`
                          ${sentence.includes('AI is nitro') ? 'text-[#FB2BFF] font-bold' : ''}
                          ${sentence.includes('Human soul × AI speed') ? 'text-[#14F195] font-bold' : ''}
                          ${sentence.includes('unstoppable') ? 'text-yellow-400 font-bold' : ''}
                        `}>
                          {sentence}{idx < chapter.content.split('. ').length - 1 ? '. ' : ''}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              )}

              {chapter.type === 'company' && (
                <div className="text-center space-y-16">
                  <div className="bg-gradient-to-br from-yellow-400/10 via-[#14F195]/10 to-[#FB2BFF]/10 rounded-3xl p-12 border-2 border-yellow-400/40">
                    <p className="text-xl md:text-2xl lg:text-3xl font-montserrat leading-relaxed text-white">
                      {chapter.content.split('. ').map((sentence: string, idx: number) => (
                        <span key={idx} className={`
                          ${sentence.includes('Solana TV Series GmbH') ? 'text-yellow-400 font-bold' : ''}
                          ${sentence.includes('100% owned by the community') ? 'text-[#14F195] font-bold' : ''}
                          ${sentence.includes('new Disney of web3') ? 'text-[#FB2BFF] font-bold' : ''}
                        `}>
                          {sentence}{idx < chapter.content.split('. ').length - 1 ? '. ' : ''}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              )}

              {chapter.type === 'promise' && (
                <div className="text-center space-y-16">
                  <div className="space-y-8">
                    {[
                      'No soul-selling.',
                      'No VC cuts.',
                      'No watered-down content.',
                      'Every episode stays raw, brutal, funny and 100% uncensored – exactly like you expect from us.'
                    ].map((promise, idx) => (
                      <motion.div
                        key={idx}
                        className="text-2xl md:text-3xl lg:text-4xl font-bangers"
                        style={{
                          background: 'linear-gradient(45deg, #14F195, #FB2BFF)',
                          backgroundSize: '200% 200%',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          textShadow: '0 0 80px #14F195',
                          animation: 'gradient 3s ease infinite'
                        }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.3, duration: 1 }}
                      >
                        {promise}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {chapter.type === 'milestones' && (
                <div className="space-y-16">
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-montserrat text-center">
                    {chapter.content}
                  </p>
                  
                  <div className="space-y-8">
                    {[
                      { milestone: 'Episode 2', status: 'DECEMBER 1ST', description: 'Locked and loaded. Weekly episodes start now.' },
                      { milestone: 'Episodes 3–6', status: 'WEEKLY RELEASES', description: 'Every Sunday. Complete season arc planned and ready.' },
                      { milestone: 'Official Company + Legal Structure', status: 'Q1 2026', description: 'The Solana TV Series GmbH becomes reality.' },
                      { milestone: 'First Merch Drop + Live Event', status: 'WHEN WE HIT 10M', description: 'Physical products and real-world experiences.' }
                    ].map((item, idx) => (
                      <motion.div
                        key={item.milestone}
                        className="grid md:grid-cols-3 gap-8 items-center bg-black/40 backdrop-blur-sm border border-gray-700 rounded-3xl p-10 hover:border-yellow-400/60 transition-all duration-500"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2, duration: 0.8 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="text-center md:text-left">
                          <div className="text-2xl md:text-3xl font-bangers text-[#14F195] mb-3">
                            {item.milestone}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className={`inline-block rounded-full px-6 py-3 text-sm font-mono border-2 ${
                            item.status === 'RENDERING NOW' ? 'bg-green-500/20 border-green-500 text-green-400' :
                            item.status === 'STORYBOARDS FINISHED' ? 'bg-blue-500/20 border-blue-500 text-blue-400' :
                            'bg-yellow-500/20 border-yellow-500 text-yellow-400'
                          }`}>
                            {item.status}
                          </div>
                        </div>
                        <div className="text-center md:text-right">
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Countdown */}
                  <div className="text-center mt-20">
                    <div className="inline-block bg-gradient-to-r from-[#14F195]/20 to-[#FB2BFF]/20 border-2 border-[#14F195] rounded-2xl px-12 py-8">
                      <p className="text-lg text-gray-400 mb-3 font-montserrat">Next episode drops in:</p>
                      <p className="text-3xl md:text-4xl font-bangers text-[#14F195]">{nextEpisodeCountdown}</p>
                    </div>
                  </div>
                </div>
              )}
            </ChapterWrapper>
          ))}
        </div>
      </div>

      {/* Premium Footer */}
      <footer className="relative z-20 bg-gradient-to-r from-black via-gray-900 to-black border-t-2 border-yellow-400/60 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-8">
          <div className="text-2xl md:text-3xl font-bangers text-yellow-400 mb-6">
            THE ELITE STUDIO THAT REFUSED TO SELL ITS SOUL
          </div>
          <p className="text-lg text-gray-300 font-montserrat leading-relaxed max-w-4xl mx-auto">
            Built by artists. Funded by the community. Owned by holders.
            <br />
            This is how the new entertainment industry begins.
          </p>
          <div className="border-t border-gray-700 pt-8 mt-12">
            <p className="text-gray-500 text-sm font-mono">
              Made with soul, powered by AI, backed by legends
            </p>
            <p className="text-xs text-gray-600 mt-2">
              © 2025 The Solana TV Series. The new Disney of web3.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Home */}
      <div className="fixed bottom-8 left-8 z-40">
        <Link href="/">
          <motion.button
            className="bg-black/80 backdrop-blur-sm border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bangers text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← BACK TO MAIN
          </motion.button>
        </Link>
      </div>
    </div>
  );
}