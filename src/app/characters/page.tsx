"use client";

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

interface Character {
  id: string;
  name: string;
  alignment: 'CABAL' | 'RESISTANCE' | 'UNKNOWN';
  rugLevel: number;
  conspiracyScore: number;
  loyalty: string;
  secretAgenda: string;
  image: string;
  role: string;
  backgroundStory: string;
  quotes: string[];
  firstAppearance: string;
  status?: string;
  isComingSoon?: boolean;
}

const characters: Character[] = [
  {
    id: 'rothschild',
    name: 'Benjamin Rothschild',
    alignment: 'CABAL',
    rugLevel: 100,
    conspiracyScore: 100,
    loyalty: 'The Family',
    secretAgenda: 'Adrenochrome King',
    image: '/Website/Characters/Benjamin.png',
    role: 'Banking Dynasty Heir',
    backgroundStory: 'Born into the most powerful banking family in history. Controls global finance through shadow networks. Believes humans are cattle to be harvested. His morning coffee costs more than most people\'s yearly salary.',
    quotes: [
      "Money is just numbers. Power is eternal.",
      "You think you own crypto? Cute.",
      "Every revolution needs funding. Guess who provides it?",
      "Democracy is just a suggestion box for the sheep."
    ],
    firstAppearance: 'Episode 1'
  },
  {
    id: 'trump',
    name: 'Donald Trump',
    alignment: 'CABAL',
    rugLevel: 95,
    conspiracyScore: 85,
    loyalty: 'Himself',
    secretAgenda: 'Wants to rug everyone',
    image: '/Website/Characters/Donald.png',
    role: 'Former President / Rug Master',
    backgroundStory: 'The ultimate grifter who turned politics into the biggest rug pull in history. Promises everything, delivers chaos. His Truth Social is actually a data harvesting operation for the highest bidder.',
    quotes: [
      "I invented the rug pull. Tremendous rugs, the best rugs.",
      "Fake news! I never rugged anyone... that you can prove.",
      "My NFTs are worth more than Bitcoin. Believe me.",
      "Make America Rug Again!"
    ],
    firstAppearance: 'Episode 1'
  },
  {
    id: 'elon',
    name: 'Elon Musk',
    alignment: 'UNKNOWN',
    rugLevel: 75,
    conspiracyScore: 90,
    loyalty: 'Triple Agent',
    secretAgenda: 'Plans world domination',
    image: '/Website/Characters/Elon.png',
    role: 'Tech Oligarch / Chaos Agent',
    backgroundStory: 'Nobody knows whose side he\'s really on. Pumps and dumps entire markets with a single tweet. Claims to be saving humanity while secretly planning to replace it with AI. His Neuralink is just the beginning.',
    quotes: [
      "To the moon! (Just kidding, I\'m dumping.)",
      "Free speech is important. *bans critics*",
      "I\'m not a financial advisor. *moves markets*",
      "Mars needs rugs too."
    ],
    firstAppearance: 'Episode 1'
  },
  {
    id: 'sbf',
    name: 'Sam Bankman-Fried',
    alignment: 'CABAL',
    rugLevel: 98,
    conspiracyScore: 60,
    loyalty: 'Effective Altruism',
    secretAgenda: 'Prison KFC Chef',
    image: '/Website/Characters/Sam.png',
    role: 'Fallen Crypto King',
    backgroundStory: 'The boy genius who stole billions while wearing cargo shorts. Thought he was smarter than everyone else. Now serves fried chicken in federal prison and still believes he was saving the world.',
    quotes: [
      "I was just trying to help people... help themselves to my money.",
      "Effective altruism means effectively taking your funds.",
      "The math didn\'t add up, but the vibes were right.",
      "Would you like fries with that rug?"
    ],
    firstAppearance: 'Episode 1',
    status: 'Imprisoned'
  },
  {
    id: 'schwab',
    name: 'Klaus Schwab',
    alignment: 'CABAL',
    rugLevel: 100,
    conspiracyScore: 100,
    loyalty: 'The Great Reset',
    secretAgenda: 'Great Reset Mastermind',
    image: '/Website/Characters/Klaus.png',
    role: 'WEF Overlord',
    backgroundStory: 'The architect of the Great Reset. Believes you will own nothing and be happy about it. His annual Davos meetings are just villain conventions with better catering. Speaks like a Bond villain because he basically is one.',
    quotes: [
      "You vill own nossing and you vill be happy!",
      "Ze Fourth Industrial Revolution starts now.",
      "Privacy is a thing of ze past, mein friend.",
      "Resistance is futile. Join ze Klaus."
    ],
    firstAppearance: 'Episode 1'
  },
  {
    id: 'blue',
    name: 'Blue',
    alignment: 'RESISTANCE',
    rugLevel: 85,
    conspiracyScore: 70,
    loyalty: 'Redemption Arc',
    secretAgenda: 'Africa\'s biggest rugger turns good',
    image: '/Website/Characters/Blue.png',
    role: 'Reformed Scammer',
    backgroundStory: 'Once Africa\'s most notorious crypto scammer. Rugged entire villages with fake DeFi projects. Had a change of heart after meeting Matt. Now uses his skills to expose other ruggers. Still has trust issues.',
    quotes: [
      "I used to be the problem. Now I\'m the solution.",
      "Every scam has a pattern. I know them all.",
      "Trust me... no wait, don\'t. But actually, do.",
      "Redemption is the hardest trade to make."
    ],
    firstAppearance: 'Episode 1'
  },
  {
    id: 'dre',
    name: 'Dre',
    alignment: 'CABAL',
    rugLevel: 80,
    conspiracyScore: 65,
    loyalty: 'Blue (formerly)',
    secretAgenda: 'Gang loyalty over everything',
    image: '/Website/Characters/Dre.png',
    role: 'Blue\'s Former Partner',
    backgroundStory: 'Blue\'s right-hand man in the African crypto underworld. Feels betrayed by Blue\'s switch to the good side. Still running elaborate rug schemes across West Africa. Believes loyalty is everything, even when it\'s wrong.',
    quotes: [
      "Blue went soft. I stayed real.",
      "Loyalty is earned in drops and lost in buckets.",
      "The streets don\'t forgive. Neither do I.",
      "You can take the man out the game, but..."
    ],
    firstAppearance: 'Episode 1'
  },
  {
    id: 'matt',
    name: 'Matt',
    alignment: 'RESISTANCE',
    rugLevel: 0,
    conspiracyScore: 95,
    loyalty: 'The People',
    secretAgenda: 'End all rugs forever',
    image: '/Website/Characters/Solao.png',
    role: 'The Hero / Memecoin Creator',
    backgroundStory: 'The mysterious creator of SAVIOR. Claims to be fighting the system from within. Creates educational content disguised as entertainment. Nobody knows his real identity, but his mission is clear: expose the truth.',
    quotes: [
      "I will never rug you. That\'s my promise.",
      "The truth is stranger than any conspiracy theory.",
      "Every episode funds the next revelation.",
      "We\'re not just making memes. We\'re making history."
    ],
    firstAppearance: 'Episode 1'
  },
  {
    id: 'arvid',
    name: 'Arvid',
    alignment: 'RESISTANCE',
    rugLevel: 5,
    conspiracyScore: 30,
    loyalty: 'Logic & Reason',
    secretAgenda: 'Professional skeptic',
    image: '/Website/Characters/Arvid.png',
    role: 'The Skeptic',
    backgroundStory: 'The voice of reason in an unreasonable world. Questions every conspiracy theory, even the true ones. His skepticism often saves the team from wild goose chases, but sometimes blinds him to obvious truths.',
    quotes: [
      "Correlation is not causation, people!",
      "That\'s not how statistics work.",
      "Just because you\'re paranoid doesn\'t mean...",
      "Can we please stick to facts?"
    ],
    firstAppearance: 'Episode 1'
  },
  {
    id: 'tom',
    name: 'Tom',
    alignment: 'RESISTANCE',
    rugLevel: 0,
    conspiracyScore: 20,
    loyalty: 'Inner Peace',
    secretAgenda: 'Zen master disguised as cook',
    image: '/Website/Characters/Tom.png',
    role: 'The Philosopher Cook',
    backgroundStory: 'A chill cook who somehow always has the right life advice at the right moment. Meditates daily and sees the bigger picture. His food brings people together, his wisdom keeps them grounded.',
    quotes: [
      "The secret ingredient is always love, bro.",
      "You can\'t rug someone who owns nothing.",
      "Inner peace is the ultimate hedge.",
      "Breathe in truth, breathe out fear."
    ],
    firstAppearance: 'Episode 1'
  },
  {
    id: 'viktor',
    name: 'Viktor',
    alignment: 'RESISTANCE',
    rugLevel: 10,
    conspiracyScore: 80,
    loyalty: 'Silent Protection',
    secretAgenda: 'Knows more than he says',
    image: '/Website/Characters/Viktor.png',
    role: 'The Silent Protector',
    backgroundStory: 'A man of few words but decisive action. His past is shrouded in mystery, but his loyalty to the resistance is absolute. Communicates mostly through meaningful glances and perfectly timed interventions.',
    quotes: [
      "...",
      "*nods approvingly*",
      "Sometimes silence speaks loudest.",
      "*protective stance*"
    ],
    firstAppearance: 'Episode 1'
  },
  {
    id: 'igor',
    name: 'Igor',
    alignment: 'UNKNOWN',
    rugLevel: 0,
    conspiracyScore: 0,
    loyalty: '???',
    secretAgenda: 'Coming soon',
    image: '/Website/Characters/Igor the Agent.png',
    role: 'The Agent',
    backgroundStory: 'A mysterious figure whose true allegiance remains unknown. Intelligence suggests he may be the key to everything, or nothing at all. His dossier is classified at the highest levels.',
    quotes: [
      "...",
      "...",
      "...",
      "..."
    ],
    firstAppearance: 'Episode 2',
    isComingSoon: true
  }
];

export default function CharactersPage() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [knownSecrets, setKnownSecrets] = useState<Set<string>>(new Set());
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });

  const cabalCount = characters.filter(c => c.alignment === 'CABAL' && !c.isComingSoon).length;
  const totalCount = characters.filter(c => !c.isComingSoon).length;

  const revealSecret = (characterId: string) => {
    setKnownSecrets(prev => new Set([...prev, characterId]));
  };

  const getAlignmentColor = (alignment: string) => {
    switch (alignment) {
      case 'CABAL': return 'text-red-500 border-red-500 shadow-red-500/50';
      case 'RESISTANCE': return 'text-[#14F195] border-[#14F195] shadow-[#14F195]/50';
      case 'UNKNOWN': return 'text-purple-500 border-purple-500 shadow-purple-500/50';
      default: return 'text-gray-500 border-gray-500';
    }
  };

  const getCardGlow = (alignment: string) => {
    switch (alignment) {
      case 'CABAL': return 'hover:shadow-2xl hover:shadow-red-500/30';
      case 'RESISTANCE': return 'hover:shadow-2xl hover:shadow-[#14F195]/30';
      case 'UNKNOWN': return 'hover:shadow-2xl hover:shadow-purple-500/30';
      default: return 'hover:shadow-2xl hover:shadow-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Moving Particle Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90" />
        <div className="absolute inset-0 bg-[url('/Website/grain.png')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/Website/Characters/charactersheader.png)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-pulse" />

        <div className="relative z-10 text-center backdrop-blur-lg bg-black/40 inline-block rounded-2xl px-8 py-12">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bangers mb-6"
            style={{
              background: 'linear-gradient(45deg, #14F195, #9945FF, #14F195)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 60px #14F195, 0 0 120px #14F195, 0 0 180px #9945FF',
              animation: 'gradient 3s ease infinite'
            }}
            initial={{ y: 50, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            MEET THE CAST
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-montserrat text-gray-300 max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            The elite that rugs the world. And the few who fight back.
          </motion.p>

          {/* Stats Counter */}
          <motion.div
            className="mt-8 flex justify-center gap-8 text-sm md:text-base"
            initial={{ y: 30, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="bg-black/50 backdrop-blur-sm border border-red-500/50 rounded-lg px-4 py-2">
              <span className="text-red-400">Known Cabal Members:</span>
              <span className="text-white font-bold ml-2">{cabalCount} / {totalCount}</span>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-[#14F195]/50 rounded-lg px-4 py-2">
              <span className="text-[#14F195]">Secrets Revealed:</span>
              <span className="text-white font-bold ml-2">{knownSecrets.size} / {totalCount}</span>
            </div>
          </motion.div>

          <motion.p
            className="mt-4 text-sm text-gray-400 font-montserrat"
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Find all secret agendas to unlock Episode 2 teaser
          </motion.p>
        </div>
      </motion.section>

      {/* Characters Grid */}
      <section ref={gridRef} className="relative py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-24">
            {characters.map((character, index) => (
              <motion.div
                key={character.id}
                className={`relative group cursor-pointer ${getCardGlow(character.alignment)} ${character.isComingSoon ? 'opacity-50' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isGridInView ? { opacity: character.isComingSoon ? 0.5 : 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: character.isComingSoon ? 1 : 1.05, rotateY: 5 }}
                onClick={() => !character.isComingSoon && setSelectedCharacter(character)}
              >
                {/* Alignment Badge */}
                <div className={`absolute -top-3 -left-3 z-10 px-3 py-1 rounded-full text-xs font-bold border-2 bg-black/80 backdrop-blur-sm ${getAlignmentColor(character.alignment)}`}>
                  {character.alignment}
                </div>

                {/* Coming Soon Badge */}
                {character.isComingSoon && (
                  <div className="absolute -top-3 -right-3 z-10 px-3 py-1 rounded-full text-xs font-bold border-2 border-yellow-500 text-yellow-500 bg-black/80 backdrop-blur-sm">
                    SOON
                  </div>
                )}

                {/* Character Card */}
                <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden group-hover:border-gray-500 transition-all duration-300">
                  {/* Portrait */}
                  <div className="h-80 md:h-96 overflow-hidden bg-black" style={{ aspectRatio: 'auto' }}>
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Character Info */}
                  <div className="p-6">
                    <h3 className={`text-2xl font-bangers mb-4 ${getAlignmentColor(character.alignment).split(' ')[0]}`}>
                      {character.name}
                    </h3>

                    {!character.isComingSoon && (
                      <>
                        {/* Stats */}
                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Rug Level:</span>
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-red-500 transition-all duration-1000"
                                  style={{ width: `${character.rugLevel}%` }}
                                />
                              </div>
                              <span className="text-xs text-red-400">{character.rugLevel}%</span>
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Conspiracy:</span>
                            <span className="text-xs text-purple-400">{character.conspiracyScore}%</span>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Loyalty:</span>
                            <span className="text-xs text-blue-400">{character.loyalty}</span>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Secret:</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                revealSecret(character.id);
                              }}
                              className={`text-xs px-2 py-1 rounded ${
                                knownSecrets.has(character.id)
                                  ? 'text-yellow-400 bg-yellow-400/20'
                                  : 'text-gray-500 bg-gray-700 hover:bg-gray-600'
                              }`}
                            >
                              {knownSecrets.has(character.id) ? character.secretAgenda : 'REVEAL'}
                            </button>
                          </div>
                        </div>

                        {/* Status */}
                        {character.status && (
                          <div className="text-xs text-orange-400 bg-orange-400/20 px-2 py-1 rounded mb-4">
                            Status: {character.status}
                          </div>
                        )}

                        {/* Hover Quote */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-xs italic text-gray-300 border-l-2 border-gray-600 pl-3">
                            "{character.quotes[0]}"
                          </p>
                        </div>
                      </>
                    )}

                    {character.isComingSoon && (
                      <div className="text-center py-8">
                        <p className="text-gray-400 font-montserrat">Coming in Episode 2</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Character Modal */}
      {selectedCharacter && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCharacter(null)}
        >
          <motion.div
            className="bg-black/90 backdrop-blur-md border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Close Button */}
              <button
                onClick={() => setSelectedCharacter(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Character Image */}
                <div className="space-y-4">
                  <img
                    src={selectedCharacter.image}
                    alt={selectedCharacter.name}
                    className="w-full h-96 object-contain bg-black rounded-xl"
                  />
                  
                  <div className={`text-center px-4 py-2 rounded-lg border-2 ${getAlignmentColor(selectedCharacter.alignment)} bg-black/50`}>
                    <span className="font-bangers text-lg">{selectedCharacter.alignment}</span>
                  </div>
                </div>

                {/* Character Details */}
                <div className="space-y-6">
                  <div>
                    <h2 className={`text-4xl font-bangers mb-2 ${getAlignmentColor(selectedCharacter.alignment).split(' ')[0]}`}>
                      {selectedCharacter.name}
                    </h2>
                    <p className="text-gray-400 font-montserrat">{selectedCharacter.role}</p>
                  </div>

                  {/* Background Story */}
                  <div>
                    <h3 className="text-xl font-bangers text-[#14F195] mb-3">Background</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedCharacter.backgroundStory}</p>
                  </div>

                  {/* Secret Agenda */}
                  <div>
                    <h3 className="text-xl font-bangers text-yellow-400 mb-3">Secret Agenda</h3>
                    <div className={`p-3 rounded-lg border ${
                      knownSecrets.has(selectedCharacter.id)
                        ? 'border-yellow-400 bg-yellow-400/10 text-yellow-300'
                        : 'border-gray-600 bg-gray-800 text-gray-500 blur-sm'
                    }`}>
                      {selectedCharacter.secretAgenda}
                    </div>
                  </div>

                  {/* Quotes */}
                  <div>
                    <h3 className="text-xl font-bangers text-purple-400 mb-3">Iconic Quotes</h3>
                    <div className="space-y-2">
                      {selectedCharacter.quotes.map((quote, index) => (
                        <p key={index} className="text-gray-300 italic border-l-2 border-purple-400 pl-3">
                          "{quote}"
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* First Appearance */}
                  <div className="text-sm text-gray-400">
                    <span className="font-bold">First Appearance:</span> {selectedCharacter.firstAppearance}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Back to Home */}
      <div className="fixed bottom-8 left-8 z-40">
        <Link href="/">
          <motion.button
            className="bg-black/80 backdrop-blur-sm border border-[#14F195] text-[#14F195] px-6 py-3 rounded-lg font-bangers hover:bg-[#14F195] hover:text-black transition-all duration-300"
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
