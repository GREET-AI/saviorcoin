"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";
import {
  ArrowUpRight,
  Globe,
  PlayCircle,
  Shield,
  Sparkles,
  Video,
  Zap,
} from "lucide-react";
import { BackgroundGradient } from "./components/BackgroundGradient";
import { DottedGlowBackground } from "./components/DottedGlowBackground";
import { Spotlight } from "./components/Spotlight";
import { EpisodeShowcaseYouTube as NewEpisodeShowcase } from "./components/EpisodeShowcaseYouTube";
import { MarqueeBanner } from "./components/MarqueeBanner";
import { LiveHeroStats } from "./components/LiveHeroStats";
import Image from "next/image";

// Moved to LiveStats component with DexScreener API integration

const featureTiles = [
  {
    tag: "Episode I",
    title: "On a Flight to Germany",
    copy:
      "Watch as Trump, Elon, and the crew discover the ultimate crypto conspiracy. The first episode sets the stage for the wildest memecoin story ever told.",
    accent: "from-[#9945FF] to-[#14F195]",
  },
  {
    tag: "The Characters",
    title: "Meet the Cast",
    copy:
      "Matt, the realest dev in the space. Trump, Elon, Blue, and more. Each character brings their own chaos to this cinematic universe.",
    accent: "from-[#14F195] to-[#00D1FF]",
  },
  {
    tag: "The Story",
    title: "BTC-2025 Universe",
    copy:
      "A Solana TV Series unlike any other. Real stories, real characters, real entertainment. This is how memecoins should be done.",
    accent: "from-[#FF9A62] to-[#FB2BFF]",
  },
];

const timelinePhases = [
  {
    phase: "Phase 01 · Launch",
    bullets: [
      "Pump.fun fair-launch, instant LP burn",
      "Episode I premiere + animated character drops",
      "Community building and holder growth",
    ],
  },
  {
    phase: "Phase 02 · Expand",
    bullets: [
      "Episode II coming this week - Weekly episodes begin",
      "5000+ holders milestone",
      "DEX Screener badges + community events",
    ],
  },
  {
    phase: "Phase 03 · Empire",
    bullets: [
      "Full season release schedule",
      "NFT collection launch",
      "Coingecko & CMC listings + treasury reveal",
    ],
  },
];

const reelScenes = [
  {
    title: "Elon Stands Alone",
    tag: "Scene 01",
    file: "/Episode1/Final Scenes/Scene 1.mov",
    description: "The opening scene. Elon contemplates the chaos ahead as the story begins.",
  },
  {
    title: "Matt at His Desk",
    tag: "Scene 02",
    file: "/Episode1/Final Scenes/Scene 2.mov",
    description: "Meet Matt, the realest dev in the space. This is where it all starts.",
  },
  {
    title: "Trump Enters",
    tag: "Scene 03",
    file: "/Episode1/Final Scenes/Scene 3.mov",
    description: "The plot thickens as Trump makes his entrance into the crypto world.",
  },
  {
    title: "Vault Door Opens",
    tag: "Scene 11",
    file: "/Episode1/Final Scenes/Scene 5.mov",
    description: "The climax. The vault opens. Everything changes.",
  },
];

const memeLoop = [
  { emoji: "🪙", title: "The Token", copy: "$SAVIOR powers the entire series. Every trade funds the next episode." },
  { emoji: "🎬", title: "Episode I: On a Flight to Germany", copy: "The premiere is live. Watch the story unfold in real-time." },
  { emoji: "🎭", title: "The Characters", copy: "Trump, Elon, Matt, Blue, and more. Meet the cast." },
  { emoji: "📺", title: "TV Series", copy: "This isn't just a coin. It's a cinematic experience." },
  { emoji: "🔥", title: "The Story", copy: "BTC-2025. The year everything changed. The savior that rose from chaos." },
  { emoji: "💎", title: "100% Safe", copy: "LP burned. Contract renounced. The dev never abandons the mission." },
];

const marqueeQuotes = [
  "\"I will never abandon you. Trading fees keep the lights on, pay the animators.\" — Matt",
  "\"100% burned LP. Contract renounced. No cabal. No insiders. No dirty games.\" — The Mission",
  "\"This coin right here? 100% made by me. 100% launched by me. 100% protected by me.\" — Dev Promise",
  "\"The one coin nobody ever had the balls to build: the real evergreen community candle.\" — Vision",
  "\"I'd rather die than go back to a 9-5. This is my lifetime project.\" — Matt's Oath",
  "\"We're building the first real Solana TV Series. Educational dark comedy for the family.\" — The Series",
  "\"Not backed by VCs. Not backed by whales. Backed by art, stories, laughs.\" — Pure Community",
  "\"Every holder becomes a shareholder of the funniest, realest entertainment machine.\" — The Promise",
];

const marqueeQuotes2 = [
  "\"Episode 1 is live. 15+ minutes of pure entertainment. This is just the beginning.\" — The Journey",
  "\"From pump.fun to Coinbase. From meme to mainstream. The roadmap is clear.\" — The Vision",
  "\"Real utility. Real entertainment. Real community. No fake promises.\" — The Truth",
  "\"BTC-2025: The most ambitious crypto storytelling project ever attempted.\" — The Series",
  "\"Every transaction funds the next episode. Every holder shapes the story.\" — The Model",
  "\"Trump, Elon, Matt - characters you know, stories you've never seen.\" — The Cast",
  "\"This isn't just a token. It's a ticket to the future of entertainment.\" — The Experience",
  "\"Welcome to the first cinematic memecoin. Buckle up for the ride.\" — The Adventure",
];

const marqueeQuotes3 = [
  "\"No team tokens. No insider allocations. 100% fair launch on pump.fun.\" — Fair Play",
  "\"Contract verified. LP burned. Ownership renounced. Maximum transparency.\" — Security",
  "\"Community-driven roadmap. Holder votes decide the next steps.\" — Democracy",
  "\"Educational content wrapped in comedy. Learning disguised as entertainment.\" — Purpose",
  "\"From zero to hero. From unknown to unstoppable. The underdog story.\" — Growth",
  "\"Real partnerships coming. Real exchanges listing. Real momentum building.\" — Progress",
  "\"Not another dog coin. Not another cat coin. The first story coin.\" — Innovation",
  "\"Join the revolution. Hold the future. Watch history unfold.\" — Invitation",
];

const marqueeQuotes4 = [
  "\"Matt vs. The World. David vs. Goliath. The ultimate crypto showdown.\" — The Battle",
  "\"Every episode reveals new secrets. Every scene builds the legend.\" — The Mystery",
  "\"From basement developer to crypto kingpin. The transformation begins.\" — The Arc",
  "\"Memes become reality. Fiction becomes fact. Art becomes revolution.\" — The Magic",
  "\"No AI generated content. No soulless automation. Pure human creativity.\" — The Craft",
  "\"Binance listing confirmed for Q2. Coinbase discussions ongoing.\" — The Future",
  "\"Season 1: 12 episodes. Season 2: Already in production.\" — The Pipeline",
  "\"This is bigger than crypto. This is entertainment evolution.\" — The Movement",
];

const marqueeQuotes5 = [
  "\"The savior that never sleeps. The promise that never breaks.\" — The Paradox",
  "\"From 10K to 100M market cap. The journey of a thousand X.\" — The Destination",
  "\"Hollywood producers calling. Netflix executives watching.\" — The Recognition",
  "\"Meme culture meets high production value. Comedy meets cryptocurrency.\" — The Fusion",
  "\"Every dip is a gift. Every pump is earned. Every holder is family.\" — The Philosophy",
  "\"The first token with a TV show. The first show with a token.\" — The Innovation",
  "\"Solana's crown jewel. Crypto's entertainment king.\" — The Status",
  "\"Welcome to SAVIOR. Welcome to the future.\" — The Welcome",
];

const listingColumns = [
  {
    label: "PUBLIC LAUNCH",
    cards: [
      { 
        name: "PUMP.FUN", 
        status: "LIVE", 
        note: "Fair launch completed! 🎉", 
        colors: ["#14F195", "#00D1FF"], 
        logo: "/Website/cryptologos/PumpFun Logo.png",
        statusColor: "green",
        progress: 100
      },
      { 
        name: "PUMPSWAP MIGRATION", 
        status: "COMING SOON", 
        note: "LP migration when ready", 
        colors: ["#9945FF", "#14F195"], 
        logo: "/Website/cryptologos/PumpFun Logo.png",
        statusColor: "purple",
        progress: 30
      },
      { 
        name: "LAUNCH LIVESTREAM", 
        status: "COMING THIS WEEK", 
        note: "Epic launch event livestream", 
        colors: ["#FB2BFF", "#9945FF"], 
        logo: "/Website/cryptologos/Twitter Logo.png",
        statusColor: "purple",
        progress: 75,
        isPulsing: true
      },
      { 
        name: "DAILY SPACES", 
        status: "EVERY DAY 20:00 CET", 
        note: "Daily community spaces / 2PM EST", 
        colors: ["#00D1FF", "#14F195"], 
        logo: "/Website/cryptologos/Twitter Logo.png",
        statusColor: "teal",
        progress: 90
      },
    ],
  },
  {
    label: "SOCIAL RAIDS & COMMUNITY",
    cards: [
      { 
        name: "JOIN X COMMUNITY", 
        status: "JOIN NOW", 
        note: "Join our exclusive X community", 
        colors: ["#14F195", "#FB2BFF"], 
        logo: "/Website/cryptologos/Twitter Logo.png",
        statusColor: "green",
        progress: 75,
        link: "https://x.com/i/communities/1892827833283575859"
      },
      {
        name: "SHARE ON X",
        status: "SPREAD THE WORD",
        note: "Pre-filled tweet ready to share",
        colors: ["#FB2BFF", "#14F195"],
        logo: "/Website/cryptologos/Twitter Logo.png",
        statusColor: "teal",
        progress: 0,
        tweetText: "BTC-2025 just dropped.  \n\nTrump. Elon. Rothschild. Matt.  \n\nThe savior of Solana is live.  \n\nEpisode I → https://saviorcoin.fun  \n\n$SAVIOR"
      },
    ],
  },
  {
    label: "DATA ORACLES & VISIBILITY",
    cards: [
      { 
        name: "COINGECKO", 
        status: "COMING SOON", 
        note: "Application in progress", 
        colors: ["#00D1FF", "#9945FF"], 
        logo: "/Website/cryptologos/Coingecko Logo.png",
        statusColor: "purple",
        progress: 0
      },
      { 
        name: "COINMARKETCAP", 
        status: "COMING SOON", 
        note: "Application in progress", 
        colors: ["#9945FF", "#FB2BFF"], 
        logo: "/Website/cryptologos/CoinMarketCap Logo.png",
        statusColor: "purple",
        progress: 0
      },
      { 
        name: "DEXSCREENER AVATAR", 
        status: "COMMUNITY VOTE LIVE", 
        note: "Which character? Trump or Elon?", 
        colors: ["#14F195", "#00D1FF"], 
        logo: "/Website/cryptologos/Dexscreener Logo.png",
        statusColor: "teal",
        progress: 50
      },
      { 
        name: "BIRDEYE PROFILE", 
        status: "SOCIALS VERIFIED", 
        note: "Profile enhancement in progress", 
        colors: ["#FB2BFF", "#14F195"], 
        logo: null,
        statusColor: "teal",
        progress: 70
      },
    ],
  },
  {
    label: "LISTINGS",
    cards: [
      { 
        name: "TIER 3 CEX", 
        status: "COMMUNITY VOTE", 
        note: "MEXC, Gate.io, LBank - which first?", 
        colors: ["#14F195", "#FB2BFF"], 
        logo: null,
        statusColor: "teal",
        progress: 5
      },
      { 
        name: "TIER 2 CEX", 
        status: "BRIEFING", 
        note: "KuCoin, BitMart negotiations", 
        colors: ["#FB2BFF", "#14F195"], 
        logo: null,
        statusColor: "purple",
        progress: 0
      },
      { 
        name: "TIER 1 CEX", 
        status: "WHEN WE HIT THE BIG SCREEN", 
        note: "Kraken, Coinbase, Binance dreams", 
        colors: ["#9945FF", "#00D1FF"], 
        logo: null,
        statusColor: "future",
        progress: 0,
        isFuture: true
      },
    ],
  },
  {
    label: "OFFICIAL FACES & KOLS",
    cards: [
      { 
        name: "TRUMP ACTOR", 
        status: "EPISODE 2", 
        note: "Revealed in future episodes", 
        colors: ["#333333", "#666666"], 
        logo: null,
        statusColor: "future",
        progress: 0,
        isFuture: true,
        opacity: 0.6
      },
      { 
        name: "ELON VOICE", 
        status: "NEGOTIATING", 
        note: "Revealed in future episodes", 
        colors: ["#333333", "#666666"], 
        logo: null,
        statusColor: "future",
        progress: 0,
        isFuture: true,
        opacity: 0.6
      },
      { 
        name: "MYSTERY GUEST", 
        status: "COMING", 
        note: "Revealed in future episodes", 
        colors: ["#333333", "#666666"], 
        logo: null,
        statusColor: "future",
        progress: 0,
        isFuture: true,
        opacity: 0.6
      },
      { 
        name: "YOUR FACE HERE?", 
        status: "DM US", 
        note: "Community casting call", 
        colors: ["#14F195", "#00D1FF"], 
        logo: null,
        statusColor: "teal",
        progress: 0,
        opacity: 0.6
      },
    ],
  },
];

const solanaGlyphs = [
  { left: "8%", top: "25%", size: 110, delay: 0, duration: 18, from: "#14F195", to: "#00D1FF" },
  { left: "22%", top: "60%", size: 70, delay: 3, duration: 16, from: "#9945FF", to: "#14F195" },
  { left: "45%", top: "35%", size: 90, delay: 6, duration: 20, from: "#00D1FF", to: "#14F195" },
  { left: "68%", top: "20%", size: 120, delay: 1, duration: 22, from: "#9945FF", to: "#FB2BFF" },
  { left: "80%", top: "55%", size: 80, delay: 4, duration: 18, from: "#14F195", to: "#FB2BFF" },
  { left: "55%", top: "70%", size: 95, delay: 2, duration: 19, from: "#14F195", to: "#00D1FF" },
];


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] to-[#134e4a] text-white">
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
        <img src="/Website/cryptologos/Telegram Logo.png" alt="" className="flying-logo diagonal-1" />
        <img src="/Website/cryptologos/Twitter Logo.png" alt="" className="flying-logo diagonal-2" />
        <img src="/Website/cryptologos/Solscan.png" alt="" className="flying-logo diagonal-3" />
        
        {/* Mehr Random Logos */}
        <img src="/Website/cryptologos/nova.png" alt="" className="flying-logo random-1" />
        <img src="/Website/cryptologos/photon.png" alt="" className="flying-logo random-2" />
      </div>
      <main className="relative z-10 flex flex-col pb-28">
        <Hero />
        <MarqueeBanner />
        <div className="flex flex-col gap-0">
          <IntroContent />
          <MarqueeBanner />
          <NewEpisodeShowcase />
          <CombinedHeroSection />
          <ListingShowcase />
          <FutureDreams />
          <FeatureGrid />
          <Timeline />
          <Gallery />
          <FinalCta />
        </div>
      </main>
    </div>
  );
}

const fade = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};


function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="hero-section relative w-full" aria-label="Hero Background">
      <SolanaAurora />
      
      {/* Floating Action Buttons - Bottom Row */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none -translate-y-16 md:-translate-y-20" style={{ paddingBottom: '2cm' }}>
        <div className="flex justify-center items-center gap-5 md:gap-7 px-4 md:px-8 pointer-events-auto">
          {/* PFP Generator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="hero-button-group"
          >
            <Link href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="hero-icon-btn">
              <img src="/Website/cryptologos/PFP.png" alt="PFP" className="w-14 h-14" />
            </Link>
            <div className="hero-label-btn">
              <span>Pfp-Generator</span>
            </div>
          </motion.div>

          {/* Buy Token */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="hero-button-group"
          >
            <Link href="https://pump.fun/coin/BFcKBT2yLg6uAfCBmiYr9JZ4ZFKT6diQHdihKmVmpump" target="_blank" rel="noopener noreferrer" className="hero-icon-btn">
              <img src="/Website/cryptologos/PumpFun Logo.png" alt="Buy Token" className="w-14 h-14" />
            </Link>
            <div className="hero-label-btn">
              <span>Buy token</span>
            </div>
          </motion.div>

          {/* View Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="hero-button-group"
          >
            <Link href="https://dexscreener.com" target="_blank" rel="noopener noreferrer" className="hero-icon-btn">
              <img src="/Website/cryptologos/Dexscreener Logo.png" alt="Chart" className="w-14 h-14" />
            </Link>
            <div className="hero-label-btn">
              <span>View chart</span>
            </div>
          </motion.div>

          {/* Token Locks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="hero-button-group"
          >
            <Link href="/token-locks" className="hero-icon-btn">
              <img src="/Website/cryptologos/lock.png" alt="Lock" className="w-14 h-14" />
            </Link>
            <div className="hero-label-btn">
              <span>Token locks</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IntroContent() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <motion.section
      className="relative flex flex-col justify-center px-6 py-32 md:px-14 md:py-48 pb-32 md:pb-48 pt-32 md:pt-48 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      style={{
        backgroundImage: 'url(/Website/Backgrounds/section2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Section 2 Effekte Overlay */}
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
          <img src="/Website/cryptologos/Twitter Logo.png" alt="" className="flying-logo diagonal-1" />
          <img src="/Website/cryptologos/Twitter Logo.png" alt="" className="flying-logo diagonal-2" />
          <img src="/Website/cryptologos/Solscan.png" alt="" className="flying-logo diagonal-3" />
          
          {/* Mehr Random Logos */}
          <img src="/Website/cryptologos/nova.png" alt="" className="flying-logo random-1" />
          <img src="/Website/cryptologos/photon.png" alt="" className="flying-logo random-2" />
        </div>
      </div>
      
      {/* Spotlight Effect - Moving */}
      <Spotlight
        className="-top-40 right-0 md:right-20 md:-top-10 animate-spotlight-move"
        fill="rgba(153, 69, 255, 0.9)"
      />
      
      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-20 md:gap-28">
        <div className="w-full space-y-12 md:space-y-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/70 backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#14F195]" />
            LIVE: Episode I Premiere + Token Utility Explainer
          </div>
          <div className="flex items-start justify-between w-full">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight text-white font-montserrat">
                SAVIOR
                <span className="block bg-gradient-to-r from-[#14F195] via-[#00D1FF] to-[#06b6d4] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl gradient-text-with-stroke">
                  Solana&apos;s most cinematic memecoin
                </span>
          </h1>
              
              {/* Video Preview Window */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8 relative"
              >
                <div className="video-preview-container">
                  <div 
                    className="video-preview-frame cursor-pointer"
                    onClick={openVideoModal}
                  >
                    <img 
                      className="video-preview-thumbnail"
                      src={`https://img.youtube.com/vi/Gk6iQxg0bYc/maxresdefault.jpg`}
                      alt="Episode 1: On a Flight to Germany"
                    />
                    <div className="video-preview-overlay">
                      <div className="video-preview-play-btn hover:scale-110 transition-transform">
                        <PlayCircle size={48} className="text-white drop-shadow-lg" />
        </div>
                      <div className="video-preview-info">
                        <span className="video-preview-title">Episode 1: On a Flight to Germany</span>
                        <span className="video-preview-duration">15:42</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hidden md:block relative z-20 flex-shrink-0"
            >
        <Image
                src="/Website/Logo/logo.png" 
                alt="SAVIOR Logo" 
                width={400} 
                height={400}
                className="spotlight-target"
              />
            </motion.div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 font-montserrat leading-relaxed">
            BTC-2025: An original Solana TV Series. Watch as the world&apos;s most powerful figures navigate the chaos of crypto, 
            memecoins, and the ultimate redemption arc. Episode I is live. The story begins now.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://pump.fun/coin/BFcKBT2yLg6uAfCBmiYr9JZ4ZFKT6diQHdihKmVmpump"
            target="_blank"
            rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#14F195]"
            >
              BUY $SAVIOR
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/episodes/episode1"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white"
            >
              Watch Episode I: On a Flight to Germany
              <PlayCircle className="h-4 w-4" />
            </Link>
        </div>
        </div>
        {/* Live Hero Stats Integration */}
        <LiveHeroStats />
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl mx-4 aspect-video">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* YouTube Player */}
            <iframe
              className="w-full h-full rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/Gk6iQxg0bYc?autoplay=1&rel=0&modestbranding=1"
              title="Episode I: On a Flight to Germany"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </motion.section>
  );
}

function FeatureGrid() {
  return (
    <section id="lore" className="relative px-6 py-20 md:px-14 md:py-32">
      <DottedGlowBackground
        color="rgba(153, 69, 255, 0.3)"
        glowColor="rgba(20, 241, 149, 0.5)"
        opacity={0.4}
      />
      <motion.div
        className="relative z-10 mx-auto max-w-[1600px] space-y-16 md:space-y-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="space-y-6 md:space-y-8">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">The Series</p>
          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
            BTC-2025: An original Solana TV Series
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {featureTiles.map((tile) => (
            <BackgroundGradient
              key={tile.title}
              gradientFrom="#9945FF"
              gradientVia="#14F195"
              gradientTo="#00D1FF"
            >
              <div className="glass relative flex flex-col gap-6 rounded-3xl p-8">
                <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                  {tile.tag}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold font-comic leading-tight">{tile.title}</h3>
                <p className="text-base text-white/70 leading-relaxed">{tile.copy}</p>
                <div
                  className={`pointer-events-none absolute inset-x-6 bottom-6 h-1 rounded-full bg-gradient-to-r ${tile.accent}`}
                />
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function HeroMarquee() {
  return (
    <section className="px-0 md:px-0 -mt-2">
      <div className="neon-marquee-container" style={{ transform: 'rotate(-1deg)', transformOrigin: 'center' }}>
        <div className="neon-marquee-track">
          {marqueeQuotes.map((quote, index) => (
            <div key={quote} className="neon-marquee-item" style={{ animationDelay: `${index * 0.5}s` }}>
              <span className="neon-text">{quote}</span>
            </div>
          ))}
          {marqueeQuotes.map((quote, index) => (
            <div key={`${quote}-dup`} className="neon-marquee-item" style={{ animationDelay: `${(index + marqueeQuotes.length) * 0.5}s` }}>
              <span className="neon-text">{quote}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Second Marquee Bar */}
      <div className="neon-marquee-container neon-marquee-reverse">
        <div className="neon-marquee-track-reverse">
          {marqueeQuotes.slice().reverse().map((quote, index) => (
            <div key={`reverse-${quote}`} className="neon-marquee-item" style={{ animationDelay: `${index * 0.3}s` }}>
              <span className="neon-text">{quote}</span>
            </div>
          ))}
          {marqueeQuotes.slice().reverse().map((quote, index) => (
            <div key={`reverse-${quote}-dup`} className="neon-marquee-item" style={{ animationDelay: `${(index + marqueeQuotes.length) * 0.3}s` }}>
              <span className="neon-text">{quote}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section id="roadmap" className="relative px-6 py-8 md:px-14 md:py-16">
      <DottedGlowBackground
        color="rgba(20, 241, 149, 0.3)"
        glowColor="rgba(153, 69, 255, 0.5)"
        opacity={0.4}
      />
      <motion.div
        className="relative z-10 mx-auto max-w-[1600px] space-y-16 md:space-y-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="space-y-6 md:space-y-8">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">The Roadmap</p>
          <h2 className="text-4xl font-semibold md:text-6xl">Building the Empire</h2>
          <p className="text-lg text-white/70">
            From Episode I to a full cinematic universe. This is just the beginning.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {timelinePhases.map((phase) => (
            <div key={phase.phase} className="glass relative h-full rounded-3xl p-6">
              <div className="absolute inset-x-6 top-6 h-1 rounded-full bg-gradient-to-r from-[#9945FF] to-transparent" />
              <div className="pt-6 text-sm text-[#14F195]">{phase.phase}</div>
              <ul className="mt-6 space-y-4 text-white/80">
                {phase.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm">
                    <Zap className="mt-0.5 h-4 w-4 text-[#14F195]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function EpisodeShowcase() {
  return (
    <section id="episodes" className="relative px-6 py-20 md:px-14 md:py-32">
      <DottedGlowBackground
        color="rgba(153, 69, 255, 0.3)"
        glowColor="rgba(20, 241, 149, 0.5)"
        opacity={0.4}
      />
      <motion.div
        className="relative z-10 mx-auto max-w-[1600px] space-y-16 md:space-y-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="space-y-6 md:space-y-8">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">Episode I</p>
          <h2 className="text-4xl font-semibold md:text-6xl">The Premiere is Live</h2>
          <p className="text-lg text-white/70">
            Watch the first episode of SAVIOR. Meet the characters. Experience the story. Join the movement.
          </p>
        </div>
        <div className="macbook-grid">
          {reelScenes.map((scene) => (
            <motion.div
              key={scene.title}
              className="macbook-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                {scene.tag}
              </span>
              <h3 className="mt-4 text-2xl font-semibold">{scene.title}</h3>
              <p className="text-sm text-white/70">{scene.description}</p>
              <div className="macbook-shell mt-6">
                <div className="macbook-screen">
                  <video
                    src={scene.file}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="macbook-video"
                  />
                </div>
                <div className="macbook-keyboard" />
                <div className="macbook-glow" />
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-[#14F195]">
                Watch Teaser
                <Video className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="relative px-6 py-20 md:px-14 md:py-32">
      <DottedGlowBackground
        color="rgba(20, 241, 149, 0.3)"
        glowColor="rgba(0, 209, 255, 0.5)"
        opacity={0.4}
      />
      <motion.div
        className="relative z-10 mx-auto max-w-[1600px] space-y-16 md:space-y-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">The Gallery</p>
            <h2 className="text-4xl font-semibold md:text-5xl">
              Characters, Scenes, and Memes
            </h2>
          </div>
          <Link
            href="#roadmap"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm text-white/70"
          >
            Download Brand Kit
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="infinite-cards">
          <div className="card-row">
            {[...memeLoop, ...memeLoop].map((item, index) => (
              <div key={`${item.title}-${index}`} className="meme-card">
                <div className="text-2xl">{item.emoji}</div>
                <strong>{item.title}</strong>
                <p className="text-sm text-white/70">{item.copy}</p>
              </div>
            ))}
          </div>
          <div className="card-row reverse">
            {[...memeLoop, ...memeLoop].map((item, index) => (
              <div key={`${item.title}-reverse-${index}`} className="meme-card">
                <div className="text-2xl">{item.emoji}</div>
                <strong>{item.title}</strong>
                <p className="text-sm text-white/70">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function CombinedHeroSection() {
  // This section was causing the black hole - now empty/minimal
  return null;
}




function ListingShowcase() {
  return (
    <section id="ultimate-roadmap" className="w-full px-6 py-24 md:py-32 bg-gradient-to-b from-black via-[#0a0e1f] to-black">
      <DottedGlowBackground
        color="rgba(0, 209, 255, 0.3)"
        glowColor="rgba(153, 69, 255, 0.5)"
        opacity={0.4}
      />
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative z-10 space-y-16 md:space-y-20"
          initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
        <div className="space-y-6 md:space-y-8">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">The Ultimate Roadmap</p>
          <h2 className="text-4xl font-bangers md:text-6xl">
            The most honest roadmap on Solana
          </h2>
          <div className="space-y-4 max-w-4xl">
            <p className="text-xl md:text-2xl text-white font-medium">
              No bullshit. No fake promises. Just real progress you can track.
            </p>
            <p className="text-lg text-white/80">
              Fair launch ✅ LP burned ✅ Contract renounced ✅ Episode 1 live ✅
            </p>
            <p className="text-lg text-white/80">
              Every milestone is community-driven. Every listing is earned, not bought.
            </p>
            <p className="text-xl text-[#14F195] font-semibold">
              This is how memecoins should be done.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mt-16">
          {listingColumns.slice(0, 4).map((column, columnIndex) => (
            <motion.div
              key={column.label}
                        className={`listing-column ${(column.cards[0] as any)?.isFuture ? 'opacity-60' : ''}`}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <BackgroundGradient
                gradientFrom="#9945FF"
                gradientVia="#14F195"
                gradientTo="#00D1FF"
              >
                <div className="glass listing-column-inner relative">
                  {/* Future Episodes Overlay */}
                  {(column.cards[0] as any)?.isFuture && (
                    <motion.div
                      className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl flex items-center justify-center z-20"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: columnIndex * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center">
                        <motion.p 
                          className="text-[#14F195] font-bangers text-lg mb-2"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Coming in future episodes...
                        </motion.p>
                        <p className="text-white/60 text-sm">Stay tuned</p>
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <h3 className="text-base md:text-lg uppercase tracking-wider opacity-80 text-white font-medium">
                      {column.label}
                    </h3>
                    <span className="text-xs text-white/50 hidden lg:inline">{column.cards.length} items</span>
                  </div>
                  <div className="listing-card-stack">
                    {column.cards.map((card, cardIndex) => (
                      <BackgroundGradient
                        key={card.name}
                        gradientFrom={card.colors[0]}
                        gradientTo={card.colors[1]}
                      >
                        <motion.div 
                          className={`group relative overflow-hidden p-4 md:p-6 rounded-3xl border border-white/10 bg-black/60 backdrop-blur ${
                            card.status.includes("COMMUNITY") || card.status.includes("VOTE") 
                              ? 'border-2 border-[#14F195]/50' 
                              : ''
                          }`}
                          whileTap={{ scale: 0.95 }}
                          style={{ opacity: (card as any).opacity || 1 }}
                          animate={
                            card.status.includes("COMMUNITY") || card.status.includes("VOTE")
                              ? { 
                                  borderColor: ["rgba(20, 241, 149, 0.5)", "rgba(20, 241, 149, 1)", "rgba(20, 241, 149, 0.5)"],
                                  boxShadow: [
                                    "0 0 0 rgba(20, 241, 149, 0.5)",
                                    "0 0 20px rgba(20, 241, 149, 0.8)",
                                    "0 0 0 rgba(20, 241, 149, 0.5)"
                                  ]
                                }
                              : {}
                          }
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {/* Konfetti Animation für LIVE Status */}
                          {card.status === "LIVE" && (
                            <motion.div
                              className="absolute inset-0 pointer-events-none z-10"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                            >
                              {[...Array(12)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-3 h-3 bg-gradient-to-r from-[#14F195] to-[#00D1FF] rounded-full"
                                  initial={{ 
                                    x: "50%", 
                                    y: "50%", 
                                    scale: 0,
                                    rotate: 0 
                                  }}
                                  animate={{ 
                                    x: `${50 + (Math.random() - 0.5) * 300}%`,
                                    y: `${50 + (Math.random() - 0.5) * 300}%`,
                                    scale: [0, 1.5, 0],
                                    rotate: 360
                                  }}
                                  transition={{ 
                                    duration: 2, 
                                    delay: i * 0.1,
                                    ease: "easeOut"
                                  }}
                                />
                              ))}
                            </motion.div>
                          )}

                          {/* Green Glow für LIVE/DONE */}
                          {(card.status === "LIVE" || card.status === "DONE") && (
                            <motion.div
                              className="absolute inset-0 bg-[#14F195]/20 rounded-2xl"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: [0, 0.3, 0] }}
                              transition={{ duration: 3, repeat: Infinity }}
                            />
                          )}
                          
                          <div className="relative z-10 space-y-3 md:space-y-4">
                            {/* Header mit Logo und Status */}
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-center gap-3">
                                {card.logo && (
                                  <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 relative">
            <Image
                                      src={card.logo}
                                      alt={card.name}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                )}
                                <div>
                                  <p className={`text-xl md:text-2xl font-bold leading-tight ${
                                    (card as any).isJoke ? 'text-white/80' : 'text-white'
                                  }`}>
                                    {card.name}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <span className={`text-xs md:text-sm font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full whitespace-nowrap ${
                                  card.statusColor === 'green'
                                    ? 'bg-[#14F195]/20 text-[#14F195] border border-[#14F195]/40'
                                    : card.statusColor === 'teal'
                                    ? 'bg-[#00D1FF]/20 text-[#00D1FF] border border-[#00D1FF]/40'
                                    : card.statusColor === 'never'
                                    ? 'bg-[#14F195]/20 text-[#14F195] border border-[#14F195]/40'
                                    : card.statusColor === 'future'
                                    ? 'bg-white/10 text-white/60 border border-white/20'
                                    : 'bg-[#9945FF]/20 text-[#9945FF] border border-[#9945FF]/40'
                                }`}>
                                  {card.status}
                                </span>
                                <span className="text-[10px] md:text-xs opacity-70 font-mono">
                                  {card.progress}%
                                </span>
                              </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-black/30 rounded-full h-1.5 md:h-2 overflow-hidden">
                              <motion.div
                                className={`h-full rounded-full ${
                                  card.statusColor === 'green' 
                                    ? 'bg-gradient-to-r from-[#14F195] to-[#00D1FF]'
                                    : card.statusColor === 'teal'
                                    ? 'bg-gradient-to-r from-[#00D1FF] to-[#14F195]'
                                    : card.statusColor === 'never'
                                    ? 'bg-gradient-to-r from-[#14F195] to-[#00D1FF]'
                                    : card.statusColor === 'future'
                                    ? 'bg-gradient-to-r from-[#666] to-[#999]'
                                    : 'bg-gradient-to-r from-[#9945FF] to-[#FB2BFF]'
                                }`}
                                initial={{ width: 0 }}
                                whileInView={{ 
                                  width: `${card.progress}%`,
                                  opacity: (card.status.includes("SOON") || (card as any).isPulsing) ? [0.5, 1, 0.5] : 1
                                }}
                                transition={{ 
                                  width: { duration: 2, delay: cardIndex * 0.3, ease: "easeOut" },
                                  opacity: (card.status.includes("SOON") || (card as any).isPulsing)
                                    ? { duration: 2, repeat: Infinity }
                                    : { duration: 0 }
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                              />
                            </div>

                            {/* Beschreibung und Vote Button */}
                            <div className="space-y-3">
                              <p className="text-xs md:text-sm opacity-90 leading-relaxed text-white/80">
                                {card.note}
                              </p>
                              
                              {/* Action Buttons */}
                              {(card.status.includes("COMMUNITY") || card.status.includes("VOTE")) && (
                                <motion.a
                                  href={(card as any).link}
            target="_blank"
            rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-xs font-medium bg-[#14F195] text-black px-3 py-1.5 rounded-full hover:bg-[#00D1FF] transition-colors"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  🗳️ {card.status.includes("JOIN") ? "JOIN COMMUNITY" : "VOTE NOW"}
                                </motion.a>
                              )}
                              
                              {/* Tweet Button */}
                              {(card as any).tweetText && (
                                <motion.a
                                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent((card as any).tweetText)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-xs font-medium bg-[#00D1FF] text-black px-3 py-1.5 rounded-full hover:bg-[#14F195] transition-colors"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  🐦 TWEET NOW
                                </motion.a>
                              )}
                              
                              {/* DM Button */}
                              {card.status.includes("DM") && (
                                <motion.a
            target="_blank"
            rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-sm font-medium bg-[#FB2BFF] text-white px-5 py-2 rounded-full hover:bg-[#9945FF] transition-colors"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  💬 DM SOLAO
                                </motion.a>
                              )}
        </div>
    </div>
                          
                          {/* Hover Tooltip */}
                          <motion.div
                            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50"
                            initial={{ opacity: 0, y: 5 }}
                            whileHover={{ opacity: 1, y: 0 }}
                          >
                            {card.status === "LIVE" ? "🎉 We did it!" :
                             card.status.includes("COMMUNITY") || card.status.includes("VOTE") ? "🗳️ Your vote matters!" :
                             card.status === "FAST TRACK SUBMITTED" ? "⚡ Push with us!" :
                             card.status === "LET'S SEND IT" ? "🚀 Community power!" :
                             (card as any).isFuture ? "🔮 Future episodes..." :
                             (card as any).isJoke ? "😉 Just kidding!" :
                             "📋 Real progress tracking"}
                          </motion.div>
                          
                          <span
                            className="listing-card-accent"
                            style={{ background: `linear-gradient(120deg, ${card.colors[0]}, ${card.colors[1]})` }}
                          />
                        </motion.div>
                      </BackgroundGradient>
                    ))}
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
          
        </div>
        
        </motion.div>
      </div>
    </section>
  );
}

function FutureDreams() {
  const futureDreams = [
    {
      title: "TIER 1 EXCHANGES",
      subtitle: "When we're ready for the big screen",
      description: "Kraken, Coinbase, Binance listings when we prove we're here to stay",
      icon: "🏦",
      gradient: ["#9945FF", "#14F195"]
    },
    {
      title: "MAINSTREAM MEDIA",
      subtitle: "Front page of crypto news",
      description: "Coindesk features, Bloomberg terminal, prime time TV appearances",
      icon: "📺",
      gradient: ["#00D1FF", "#FB2BFF"]
    },
    {
      title: "THE FINAL RESCUE",
      subtitle: "Just kidding. We keep saving 😉",
      description: "This is Matt's lifetime project. Diamond hands forever.",
      icon: "💎",
      gradient: ["#14F195", "#00D1FF"]
    }
  ];

  return (
    <section className="relative px-6 py-20 md:px-14 md:py-24">
      <DottedGlowBackground
        color="rgba(153, 69, 255, 0.2)"
        glowColor="rgba(20, 241, 149, 0.3)"
        opacity={0.3}
      />
      <motion.div
        className="relative z-10 mx-auto max-w-[1600px] space-y-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">Future Episodes</p>
          <h2 className="text-4xl font-semibold md:text-6xl">
            What comes after we break the charts?
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            These milestones unlock as our story unfolds. Every episode brings us closer to the ultimate goal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {futureDreams.map((dream, index) => (
            <motion.div
              key={dream.title}
              className="opacity-50 blur-sm hover:opacity-70 hover:blur-none transition-all duration-500"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true }}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <BackgroundGradient
                gradientFrom={dream.gradient[0]}
                gradientTo={dream.gradient[1]}
              >
                <div className="glass p-8 rounded-3xl border border-white/10 bg-black/60 backdrop-blur min-h-[280px] flex flex-col">
                  <div className="text-center space-y-4 flex-1">
                    <div className="text-6xl mb-4">{dream.icon}</div>
                    <h3 className="font-bangers text-2xl text-white/80">
                      {dream.title}
                    </h3>
                    <p className="text-lg text-[#14F195]/80 font-medium">
                      {dream.subtitle}
                    </p>
                    <p className="text-base text-white/60 leading-relaxed">
                      {dream.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <span className="text-xs text-white/40 uppercase tracking-wider">
                      Paid for by future episodes
                    </span>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>

        {/* Bottom Teaser */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/40 px-6 py-3 text-sm text-white/70 backdrop-blur">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-[#14F195] rounded-full"
            />
            The bigger we get, the bigger the dreams become reality
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


function SolanaAurora() {
  return (
    <div className="solana-aurora" aria-hidden="true">
      <div className="solana-aurora-gradient" />
      {solanaGlyphs.map((glyph, index) => (
        <span
          key={`${glyph.left}-${index}`}
          className="solana-glyph"
          style={{
            left: glyph.left,
            top: glyph.top,
            width: glyph.size,
            height: glyph.size * 0.28,
            animationDelay: `${glyph.delay}s`,
            animationDuration: `${glyph.duration}s`,
            background: `linear-gradient(120deg, ${glyph.from}, ${glyph.to})`,
          }}
        />
      ))}
    </div>
  );
}

function HeroMarquee2() {
  return (
    <section className="px-0 md:px-0 -mt-1">
      <div className="neon-marquee-container" style={{ transform: 'rotate(1.2deg)', transformOrigin: 'center' }}>
        <div className="neon-marquee-track" style={{ animationDirection: 'reverse', animationDuration: '65s' }}>
          {marqueeQuotes2.map((quote, index) => (
            <div key={quote} className="neon-marquee-item" style={{ animationDelay: `${index * 0.5}s` }}>
              <span className="neon-text">{quote}</span>
            </div>
          ))}
          {marqueeQuotes2.map((quote, index) => (
            <div key={`${quote}-dup`} className="neon-marquee-item" style={{ animationDelay: `${(index + marqueeQuotes2.length) * 0.5}s` }}>
              <span className="neon-text">{quote}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroMarquee3() {
  return (
    <section className="px-0 md:px-0 -mt-1">
      <div className="neon-marquee-container">
        <div className="neon-marquee-track" style={{ animationDuration: '70s' }}>
          {marqueeQuotes3.map((quote, index) => (
            <div key={quote} className="neon-marquee-item" style={{ animationDelay: `${index * 0.5}s` }}>
              <span className="neon-text">{quote}</span>
            </div>
          ))}
          {marqueeQuotes3.map((quote, index) => (
            <div key={`${quote}-dup`} className="neon-marquee-item" style={{ animationDelay: `${(index + marqueeQuotes3.length) * 0.5}s` }}>
              <span className="neon-text">{quote}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroMarquee4() {
  return (
    <section className="px-0 md:px-0 -mt-1">
      <div className="neon-marquee-container">
        <div className="neon-marquee-track" style={{ animationDirection: 'reverse', animationDuration: '55s' }}>
          {marqueeQuotes4.map((quote, index) => (
            <div key={quote} className="neon-marquee-item" style={{ animationDelay: `${index * 0.5}s` }}>
              <span className="neon-text">{quote}</span>
            </div>
          ))}
          {marqueeQuotes4.map((quote, index) => (
            <div key={`${quote}-dup`} className="neon-marquee-item" style={{ animationDelay: `${(index + marqueeQuotes4.length) * 0.5}s` }}>
              <span className="neon-text">{quote}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroMarquee5() {
  return (
    <section className="px-0 md:px-0 -mt-1">
      <div className="neon-marquee-container">
        <div className="neon-marquee-track" style={{ animationDuration: '75s' }}>
          {marqueeQuotes5.map((quote, index) => (
            <div key={quote} className="neon-marquee-item" style={{ animationDelay: `${index * 0.5}s` }}>
              <span className="neon-text">{quote}</span>
            </div>
          ))}
          {marqueeQuotes5.map((quote, index) => (
            <div key={`${quote}-dup`} className="neon-marquee-item" style={{ animationDelay: `${(index + marqueeQuotes5.length) * 0.5}s` }}>
              <span className="neon-text">{quote}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroMarquee6() {
  return (
    <div className="w-full">
      <div className="neon-marquee-container bg-transparent" style={{ transform: 'rotate(-2deg)', transformOrigin: 'center', background: 'transparent' }}>
        <div className="neon-marquee-track" style={{ animationDirection: 'reverse', animationDuration: '60s' }}>
          {marqueeQuotes2.map((quote, index) => (
            <div key={quote} className="neon-marquee-item" style={{ animationDelay: `${index * 0.5}s` }}>
              <span className="neon-text">{quote}</span>
            </div>
          ))}
          {marqueeQuotes2.map((quote, index) => (
            <div key={`${quote}-dup`} className="neon-marquee-item" style={{ animationDelay: `${(index + marqueeQuotes2.length) * 0.5}s` }}>
              <span className="neon-text">{quote}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroMarquee7() {
  return (
    <div className="w-full">
      <div className="neon-marquee-container bg-transparent" style={{ transform: 'rotate(1.5deg)', transformOrigin: 'center', background: 'transparent' }}>
        <div className="neon-marquee-track" style={{ animationDuration: '80s' }}>
          {marqueeQuotes3.map((quote, index) => (
            <div key={quote} className="neon-marquee-item" style={{ animationDelay: `${index * 0.5}s` }}>
              <span className="neon-text">{quote}</span>
            </div>
          ))}
          {marqueeQuotes3.map((quote, index) => (
            <div key={`${quote}-dup`} className="neon-marquee-item" style={{ animationDelay: `${(index + marqueeQuotes3.length) * 0.5}s` }}>
              <span className="neon-text">{quote}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FinalCta() {
  return (
    <section className="px-6 md:px-14">
      <motion.div
        className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[40px] border border-white/10 bg-gradient-to-r from-[#0A051C] via-[#120220] to-[#050E16] p-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70">
          <Shield className="h-4 w-4 text-[#14F195]" />
          BUILT WITH ACETERNITY FREE COMPONENTS
        </div>
        <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
          Ready for Episode II? <br /> The story continues. The empire grows.
        </h2>
        <p className="text-white/70">
          Every trade funds the next episode. Every holder becomes part of the story. This is SAVIOR.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://pump.fun/coin/BFcKBT2yLg6uAfCBmiYr9JZ4ZFKT6diQHdihKmVmpump"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-[#14F195]"
          >
            BUY $SAVIOR
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="#ultimate-roadmap"
            className="inline-flex items-center gap-3 rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white"
          >
            Check the Roadmap
            <Globe className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
