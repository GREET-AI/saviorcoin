"use client";

import { useMemo } from 'react';

const allQuotes = [
  "I will never abandon you. Trading fees pay the animators.",
  "100% burned LP. Contract renounced. Ownership gone.",
  "No team tokens. No insiders. 100% fair launch.",
  "Every listing is paid by the coin – voted by holders.",
  "This is not financial advice. This is a TV series.",
  "Contract verified. LP burned. Maximum transparency.",
  "Community-driven roadmap. Your vote decides.",
  "Not backed by VCs. Backed by art and laughs.",
  "Solana's first cinematic memecoin – Episode 1 live.",
  "Zero presale. Zero bullshit. 100% community.",
  "We don't quit. We direct.",
  "The coin funds the show. The show funds the coin.",
  "No cabal. No insiders. No dirty games.",
  "Paid for by the coin – decided by the holders.",
  "Reality. Real entertainment. Real community.",
  "Matt's Promise: 100% made by me. Protected by me.",
  "South Park meets The Big Short – on Solana.",
  "Trading fees = animation budget. Every trade = weekly episodes.",
  "LP burned. Contract renounced. The betrayal is dead.",
  "Welcome to the first memecoin that actually delivers.",
  "No presale. No team tokens. Just pure chaos and art.",
  "Every new listing is earned – never bought.",
  "100% community owned from day one.",
  "This coin has a plot twist every week.",
  "The only memecoin with a release schedule.",
  "Season 1 just dropped. Season 2 funded by fees.",
  "Zero unlocks. Zero bullshit. Just episodes.",
  "Your bags fund the next scene.",
  "First memecoin with actual utility: entertainment."
];

export function MarqueeBanner() {
  // Statische Arrays für konsistente Server/Client Rendering
  const bar1Quotes = useMemo(() => [
  "I will never abandon you. Trading fees pay the animators.",
    "100% burned LP. Contract renounced. Ownership gone.",
    "No team tokens. No insiders. 100% fair launch.",
    "Every listing is paid by the coin – voted by holders.",
    "This is not financial advice. This is a TV series.",
    "Contract verified. LP burned. Maximum transparency.",
    "Community-driven roadmap. Your vote decides.",
    "Not backed by VCs. Backed by art and laughs.",
    "Solana's first cinematic memecoin – Episode 1 live.",
    "Zero presale. Zero bullshit. 100% community.",
  "We don't quit. We direct.",
    "The coin funds the show. The show funds the coin."
  ], []);

  const bar2Quotes = useMemo(() => [
    "No cabal. No insiders. No dirty games.",
    "Paid for by the coin – decided by the holders.",
    "Reality. Real entertainment. Real community.",
    "Matt's Promise: 100% made by me. Protected by me.",
    "South Park meets The Big Short – on Solana.",
    "Trading fees = animation budget. Every trade = weekly episodes.",
    "LP burned. Contract renounced. The betrayal is dead.",
    "Welcome to the first memecoin that actually delivers.",
    "No presale. No team tokens. Just pure chaos and art.",
    "Every new listing is earned – never bought."
  ], []);

  const bar3Quotes = useMemo(() => [
    "100% community owned from day one.",
    "This coin has a plot twist every week.",
    "The only memecoin with a release schedule.",
    "Season 1 just dropped. Season 2 funded by fees.",
    "Zero unlocks. Zero bullshit. Just episodes.",
    "Your bags fund the next scene.",
    "First memecoin with actual utility: entertainment.",
    "I will never abandon you. Trading fees pay the animators.",
    "Contract verified. LP burned. Maximum transparency.",
    "We don't quit. We direct.",
    "The coin funds the show. The show funds the coin."
  ], []);
  return (
    <div className="w-full h-48 md:h-56 relative overflow-visible bg-transparent pointer-events-none -mt-20 md:-mt-24 -mb-20 md:-mb-24">
      {/* Bar 1 (Mint) - nach OBEN geneigt ↗ - läuft nach rechts */}
      <div 
        className="absolute top-4 md:top-6 left-0 w-full flex items-center z-20 transform rotate-1"
      >
        <div className="w-[500%] h-12 md:h-14 bg-black/85 backdrop-blur-md border-t-4 border-b-4 border-[#14F195] shadow-2xl shadow-[#14F195]/60 overflow-hidden">
          <div className="absolute inset-0 flex items-center whitespace-nowrap" style={{ animation: 'marquee 48s linear infinite' }}>
            {bar1Quotes.map((quote, index) => (
              <span key={index} className="text-sm md:text-base font-bangers tracking-widest uppercase text-white mx-6" style={{ filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.9)) drop-shadow(0 0 20px #14F195)' }}>
                {quote}
              </span>
            ))}
            {bar1Quotes.map((quote, index) => (
              <span key={`dup-${index}`} className="text-sm md:text-base font-bangers tracking-widest uppercase text-white mx-6" style={{ filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.9)) drop-shadow(0 0 20px #14F195)' }}>
                {quote}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bar 2 (Purple) - 100% waagerecht → - läuft nach links */}
      <div className="absolute top-1/2 left-0 w-full flex items-center z-20 transform -translate-y-1/2">
        <div className="w-[500%] h-12 md:h-14 bg-black/85 backdrop-blur-md border-t-4 border-b-4 border-[#9945FF] shadow-2xl shadow-[#9945FF]/60 overflow-hidden">
          <div className="absolute inset-0 flex items-center whitespace-nowrap" style={{ animation: 'marquee-reverse 42s linear infinite' }}>
            {bar2Quotes.map((quote, index) => (
              <span key={index} className="text-sm md:text-base font-bangers tracking-widest uppercase text-white mx-6" style={{ filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.9)) drop-shadow(0 0 20px #9945FF)' }}>
                {quote}
              </span>
            ))}
            {bar2Quotes.map((quote, index) => (
              <span key={`dup-${index}`} className="text-sm md:text-base font-bangers tracking-widest uppercase text-white mx-6" style={{ filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.9)) drop-shadow(0 0 20px #9945FF)' }}>
                {quote}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bar 3 (Magenta) - nach UNTEN geneigt ↘ - läuft nach rechts */}
      <div 
        className="absolute bottom-4 md:bottom-6 left-0 w-full flex items-center z-20 transform -rotate-1"
      >
        <div className="w-[500%] h-12 md:h-14 bg-black/85 backdrop-blur-md border-t-4 border-b-4 border-[#FB2BFF] shadow-2xl shadow-[#FB2BFF]/60 overflow-hidden">
          <div className="absolute inset-0 flex items-center whitespace-nowrap" style={{ animation: 'marquee 55s linear infinite' }}>
            {bar3Quotes.map((quote, index) => (
              <span key={index} className="text-sm md:text-base font-bangers tracking-widest uppercase text-white mx-6" style={{ filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.9)) drop-shadow(0 0 20px #FB2BFF)' }}>
                {quote}
              </span>
            ))}
            {bar3Quotes.map((quote, index) => (
              <span key={`dup-${index}`} className="text-sm md:text-base font-bangers tracking-widest uppercase text-white mx-6" style={{ filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.9)) drop-shadow(0 0 20px #FB2BFF)' }}>
                {quote}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
