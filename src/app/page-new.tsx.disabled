"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Play, TrendingUp, Users, Zap, Vote, ExternalLink, Twitter, Send } from "lucide-react";
import { BentoGrid, BentoGridItem } from "./components/BentoGrid";
import AnimatedGradientText from "./components/AnimatedGradientText";
import { HoverBorderGradient } from "./components/HoverBorderGradient";
import RetroGrid from "./components/RetroGrid";
import { Sparkles } from "./components/Sparkles";
import { BackgroundGradient } from "./components/BackgroundGradient";

// TRUMP CA for now - easy replace later
const CURRENT_CA = "8t8nY5R9p1gS9fY6ZJ9q4bL5mK7vN2xP3cQ8wE2rF6";

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Fair Launch",
    status: "LIVE",
    progress: 100,
    items: ["pump.fun fair launch", "Instant LP burn", "Episode 1 drop", "Community building"],
    vote: false,
  },
  {
    phase: "Phase 2", 
    title: "Expand",
    status: "IN PROGRESS",
    progress: 65,
    items: ["DEX banner campaigns", "Paid trending", "5k holders milestone", "CoinGecko & CMC listings"],
    vote: true,
  },
  {
    phase: "Phase 3",
    title: "Empire",
    status: "UPCOMING",
    progress: 0,
    items: ["KuCoin listing push", "Tier-1 CEX outreach", "NFT collection drop", "Treasury reveal"],
    vote: true,
  },
  {
    phase: "Phase 4",
    title: "Moon",
    status: "VISION",
    progress: 0,
    items: ["Coinbase listing", "Binance application", "Full season release", "Hollywood contacts"],
    vote: false,
  },
];

const pressQuotes = [
  "The first memecoin with actual entertainment value",
  "A dark comedy masterpiece on Solana",
  "Educational crypto content that doesn't suck",
  "The future of meme entertainment",
  "Finally, a project with real utility",
  "Cinematic quality meets DeFi innovation",
];

const seriesCards = [
  {
    title: "Episode 1: Vault Breach",
    description: "Trump and Elon discover the ultimate crypto conspiracy. Watch the chaos unfold as they chase the phantom dev Solao through the digital wasteland.",
    image: "/Episode1/Szenen/SC01_elon_stands_alone_on_2025_11_22T19_26_58_409Z_20251123204857888.mp4",
    status: "LIVE NOW",
    className: "md:col-span-2",
  },
  {
    title: "The Characters",
    description: "Meet the cast: Trump the deal-maker, Elon the visionary, and Solao the mysterious dev who holds all the keys.",
    image: "/Website/cryptologos/Solana Logo.png",
    status: "EXPLORE",
    className: "",
  },
  {
    title: "The Universe",
    description: "A world where crypto meets reality, where every transaction tells a story, and where the biggest rug might save us all.",
    image: "/Website/Backgrounds/desktop.png",
    status: "DISCOVER",
    className: "",
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-950/20 via-black to-red-950/10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(220,38,38,0.15),transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.1),transparent_50%)]" />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6">
          <Sparkles className="absolute inset-0" particleColor="#dc2626" particleDensity={50}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
          </Sparkles>
          
          <div className="relative z-10 text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <AnimatedGradientText className="text-sm font-semibold">
                🎬 BTC-2025 · An Original Solana TV Series
              </AnimatedGradientText>
              
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent leading-tight">
                THE GREAT RUG
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                The first cinematic memecoin that tells a story. Join Trump, Elon, Solao, and the crew 
                in the wildest crypto adventure on Solana. This isn't just a coin – it's entertainment with real utility.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <HoverBorderGradient
                  as="button"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 text-lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Episode 1 Live
                </HoverBorderGradient>
                
                <HoverBorderGradient
                  as="a"
                  href={`https://pump.fun/coin/${CURRENT_CA}`}
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 text-lg"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Buy $DEGEN
                </HoverBorderGradient>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Series Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <AnimatedGradientText className="mb-6">
                🎭 The Series
              </AnimatedGradientText>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Cinematic <span className="text-red-500">Entertainment</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Educational dark comedy for the crypto family. Real episodes, real stories, real utility.
              </p>
            </motion.div>

            <BentoGrid className="max-w-6xl mx-auto">
              {seriesCards.map((card, i) => (
                <BentoGridItem
                  key={i}
                  title={card.title}
                  description={card.description}
                  header={
                    <div className="relative w-full h-32 bg-gradient-to-br from-red-900/20 to-black rounded-lg overflow-hidden">
                      {card.image.endsWith('.mp4') ? (
                        <video
                          src={card.image}
                          autoPlay
                          loop
                          muted
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover"
                        />
                      )}
                      <div className="absolute top-2 right-2">
                        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          {card.status}
                        </span>
                      </div>
                    </div>
                  }
                  className={`${card.className} bg-gradient-to-br from-red-950/20 to-black border-red-900/20 hover:border-red-500/50`}
                  icon={<Play className="h-4 w-4 text-red-500" />}
                />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <AnimatedGradientText className="mb-6">
                🚀 Roadmap
              </AnimatedGradientText>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                From <span className="text-red-500">pump.fun</span> to <span className="text-green-500">Coinbase</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Community-voted milestones. Trading fees fund marketing & episodes. No fake promises.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {roadmapPhases.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <BackgroundGradient className="p-6 bg-black/50 border border-red-900/20 rounded-2xl">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-red-400 font-semibold">{phase.phase}</span>
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                          phase.status === 'LIVE' ? 'bg-green-600 text-white' :
                          phase.status === 'IN PROGRESS' ? 'bg-yellow-600 text-white' :
                          phase.status === 'UPCOMING' ? 'bg-blue-600 text-white' :
                          'bg-gray-600 text-white'
                        }`}>
                          {phase.status}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                      
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${phase.progress}%` }}
                        />
                      </div>
                      
                      <ul className="space-y-2 text-sm text-gray-300">
                        {phase.items.map((item, j) => (
                          <li key={j} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      {phase.vote && (
                        <HoverBorderGradient
                          as="button"
                          className="w-full bg-red-600/20 hover:bg-red-600/30 text-red-400 font-semibold py-2 px-4 text-sm"
                        >
                          <Vote className="w-4 h-4 mr-2" />
                          Community Vote
                        </HoverBorderGradient>
                      )}
                    </div>
                  </BackgroundGradient>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tokenomics & Chart Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <AnimatedGradientText className="mb-6">
                📊 Tokenomics
              </AnimatedGradientText>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-green-500">100%</span> Transparent
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <BackgroundGradient className="p-8 bg-black/50 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white">Token Details</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex justify-between">
                    <span>Total Supply:</span>
                    <span className="font-semibold text-white">1,000,000,000 $DEGEN</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Liquidity:</span>
                    <span className="font-semibold text-green-500">100% Burned</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contract:</span>
                    <span className="font-semibold text-green-500">Renounced</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trading Fees:</span>
                    <span className="font-semibold text-red-500">→ Marketing & Episodes</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-red-950/20 border border-red-900/30 rounded-lg">
                  <p className="text-sm text-gray-300">
                    <strong className="text-red-400">Contract Address:</strong><br />
                    <code className="text-xs break-all">{CURRENT_CA}</code>
                  </p>
                </div>
              </BackgroundGradient>

              <div className="bg-black/50 border border-red-900/20 rounded-2xl p-4">
                <iframe
                  src={`https://dexscreener.com/solana/${CURRENT_CA}?embed=1&theme=dark`}
                  className="w-full h-96 rounded-lg"
                  title="Live Chart"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Community Governance Section */}
        <section className="py-24 px-6 relative">
          <RetroGrid className="opacity-20" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <AnimatedGradientText className="mb-6">
                🗳️ Community Governance
              </AnimatedGradientText>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                You <span className="text-red-500">Decide</span> What's Next
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every major decision is community-voted. Your voice shapes the roadmap.
              </p>
            </motion.div>

            <BackgroundGradient className="max-w-4xl mx-auto p-8 bg-black/50 rounded-2xl">
              <div className="text-center space-y-6">
                <h3 className="text-3xl font-bold text-white">Current Vote</h3>
                <p className="text-xl text-gray-300">What should be our next exchange listing priority?</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <HoverBorderGradient
                    as="button"
                    className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 font-semibold py-4 px-6"
                  >
                    <TrendingUp className="w-5 h-5 mr-2" />
                    KuCoin (Fast Track)
                  </HoverBorderGradient>
                  
                  <HoverBorderGradient
                    as="button"
                    className="bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 font-semibold py-4 px-6"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    MEXC (Community Focus)
                  </HoverBorderGradient>
                </div>
                
                <p className="text-sm text-gray-400">
                  Voting ends in 3 days • 1,247 votes cast
                </p>
              </div>
            </BackgroundGradient>
          </div>
        </section>

        {/* Press & Ambition Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <AnimatedGradientText className="mb-6">
                🎯 Our Ambition
              </AnimatedGradientText>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                We're Going for <span className="text-red-500">Hollywood</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                This is not just a coin – we're building the future of meme entertainment.
              </p>
            </motion.div>

            {/* Marquee */}
            <div className="relative overflow-hidden bg-red-950/10 border-y border-red-900/20 py-6 mb-16">
              <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[...pressQuotes, ...pressQuotes].map((quote, i) => (
                  <span key={i} className="mx-8 text-lg font-semibold text-gray-300">
                    "{quote}"
                  </span>
                ))}
              </motion.div>
            </div>

            {/* As Seen In */}
            <div className="text-center">
              <p className="text-gray-400 mb-8">As seen in (coming soon)</p>
              <div className="flex justify-center items-center gap-12 opacity-50">
                <span className="text-2xl font-bold">Forbes</span>
                <span className="text-2xl font-bold">Cointelegraph</span>
                <span className="text-2xl font-bold">Variety</span>
                <span className="text-2xl font-bold">Deadline</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-red-900/20">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              This is the future of <span className="text-red-500">meme entertainment</span>
            </h3>
            
            <div className="flex justify-center gap-6 mb-8">
              <HoverBorderGradient
                as="a"
                href="https://x.com/Solaotherealone"
                target="_blank"
                className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 p-3"
              >
                <Twitter className="w-5 h-5" />
              </HoverBorderGradient>
              
              <HoverBorderGradient
                as="a"
                href="https://t.me/thegreatrug"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 p-3"
              >
                <Send className="w-5 h-5" />
              </HoverBorderGradient>
            </div>
            
            <p className="text-gray-400 text-sm">
              © 2025 The Great Rug. Educational entertainment for the crypto family.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

