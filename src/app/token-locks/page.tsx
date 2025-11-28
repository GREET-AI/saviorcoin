"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Lock, ExternalLink, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";
import { DottedGlowBackground } from "../components/DottedGlowBackground";

export default function TokenLocksPage() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [showOnchainTooltip, setShowOnchainTooltip] = useState(false);

  // Placeholder für den Contract-Link - wird später ersetzt wenn Token gelockt ist
  const contractLink = process.env.NEXT_PUBLIC_LOCK_CONTRACT_URL || null;
  const onchainLink = process.env.NEXT_PUBLIC_ONCHAIN_CONTRACT_URL || null;

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
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Lock className="w-20 h-20 mx-auto text-cyan-400 mb-6" />
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"
              style={{
                textShadow: '0 0 20px rgba(34, 211, 238, 0.9), 0 0 40px rgba(168, 85, 247, 0.6)'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Token Locks
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transparency and security for our community
            </motion.p>
          </motion.div>
        </section>

        {/* Main Content */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Status Card */}
              <div className="bg-black/60 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  {contractLink ? (
                    <>
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                      <h2 className="text-3xl font-bold text-white">Token Locks Active</h2>
                    </>
                  ) : (
                    <>
                      <Clock className="w-8 h-8 text-yellow-400" />
                      <h2 className="text-3xl font-bold text-white">Token Locks Coming Soon</h2>
                    </>
                  )}
                </div>

                {contractLink ? (
                  <div className="space-y-6">
                    <p className="text-lg text-white/80 leading-relaxed">
                      Our token locks are active and can be publicly viewed. 
                      All locked tokens are secure and cannot be moved before the lock period expires.
                    </p>
                    
                    {/* View Contract Buttons */}
                    <div className="pt-6 flex flex-col sm:flex-row gap-4">
                      {contractLink && (
                        <a
                          href={contractLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                        >
                          <ExternalLink className="w-5 h-5" />
                          View Contract
                        </a>
                      )}
                      <div className="relative">
                        {onchainLink ? (
                          <a
                            href={onchainLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-400 hover:to-cyan-500 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
                          >
                            <ExternalLink className="w-5 h-5" />
                            View Contracts Onchain
                          </a>
                        ) : (
                          <button
                            onMouseEnter={() => setShowOnchainTooltip(true)}
                            onMouseLeave={() => setShowOnchainTooltip(false)}
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500/50 to-cyan-600/50 rounded-xl font-bold text-white/70 transition-all duration-300 hover:from-green-500/70 hover:to-cyan-600/70 hover:text-white cursor-pointer"
                          >
                            <ExternalLink className="w-5 h-5" />
                            View Contracts Onchain
                          </button>
                        )}
                        {!onchainLink && showOnchainTooltip && (
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-black/90 backdrop-blur border border-cyan-500/50 rounded-lg text-sm text-white whitespace-nowrap z-50 shadow-lg">
                            Dev supply will be locked forever
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                              <div className="w-3 h-3 bg-black/90 border-r border-b border-cyan-500/50 transform rotate-45"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p className="text-lg text-white/80 leading-relaxed">
                      Once the token is live and generating fees, we will permanently lock our dev supply. 
                      This is part of our promise: <strong className="text-cyan-400">"I will never rug you. That's my promise."</strong>
                    </p>
                    
                    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Lock className="w-6 h-6 text-cyan-400" />
                        Our Lock Plan
                      </h3>
                      <ul className="space-y-3 text-white/80">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <span>Dev supply will be permanently locked once fees reach break-even</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <span>No way to move locked tokens before expiration</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <span>Publicly viewable via contract link</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <span>Full transparency for our community</span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-sm text-white/60 italic">
                      The contract link will appear here once locks are active.
                    </p>

                    {/* View Contracts Onchain Button */}
                    <div className="pt-6">
                      <div className="relative inline-block">
                        {onchainLink ? (
                          <a
                            href={onchainLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-400 hover:to-cyan-500 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
                          >
                            <ExternalLink className="w-5 h-5" />
                            View Contracts Onchain
                          </a>
                        ) : (
                          <button
                            onMouseEnter={() => setShowOnchainTooltip(true)}
                            onMouseLeave={() => setShowOnchainTooltip(false)}
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500/50 to-cyan-600/50 rounded-xl font-bold text-white/70 transition-all duration-300 hover:from-green-500/70 hover:to-cyan-600/70 hover:text-white cursor-pointer"
                          >
                            <ExternalLink className="w-5 h-5" />
                            View Contracts Onchain
                          </button>
                        )}
                        {!onchainLink && showOnchainTooltip && (
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-black/90 backdrop-blur border border-cyan-500/50 rounded-lg text-sm text-white whitespace-nowrap z-50 shadow-lg">
                            Dev supply will be locked forever
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                              <div className="w-3 h-3 bg-black/90 border-r border-b border-cyan-500/50 transform rotate-45"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="bg-black/40 backdrop-blur border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Why Token Locks?</h3>
                  <p className="text-white/70 leading-relaxed">
                    Token locks are an important security feature that shows we're thinking long-term. 
                    Locked tokens cannot be sold and protect the community from unexpected dumps.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="bg-black/40 backdrop-blur border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Our Promise</h3>
                  <p className="text-white/70 leading-relaxed">
                    Matt promised: <strong className="text-cyan-400">"I will never rug you."</strong> 
                    Token locks are our way of proving this promise and building trust.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

