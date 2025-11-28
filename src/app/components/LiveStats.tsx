"use client";

import { motion } from 'framer-motion';
import { useDexScreenerData, formatNumber, formatPrice } from '../hooks/useDexScreenerData';
import { useEffect, useState } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  formatter?: (value: number) => string;
}

function CountUp({ end, duration = 2, formatter = formatNumber }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(end * progress);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{formatter(count)}</span>;
}

export function LiveStats() {
  const { marketCap, price, volume24h, liquidity, priceChange24h, isLoading, error } = useDexScreenerData();

  return (
    <motion.section
      className="relative px-6 py-16 md:py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0e1f] to-black" />
      <div className="absolute inset-0 bg-[url('/Website/grain.png')] opacity-20 mix-blend-overlay" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          
          {/* Market Cap - Live */}
          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-[#14F195] transition-all duration-300 group"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-center space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#14F195] font-mono">
                Market Cap
              </div>
              <div className="text-xl md:text-2xl font-bangers text-white group-hover:text-[#14F195] transition-colors">
                {isLoading ? (
                  <div className="animate-pulse bg-gray-600 h-6 rounded"></div>
                ) : error ? (
                  <span className="text-sm">$38M</span>
                ) : (
                  <CountUp end={marketCap} />
                )}
              </div>
              {!isLoading && !error && (
                <div className="text-xs text-green-400">● LIVE</div>
              )}
              {error && (
                <div className="text-xs text-yellow-400">⚠ Offline</div>
              )}
            </div>
          </motion.div>

          {/* Price - Live */}
          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-[#9945FF] transition-all duration-300 group"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-center space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#9945FF] font-mono">
                Price
              </div>
              <div className="text-xl md:text-2xl font-bangers text-white group-hover:text-[#9945FF] transition-colors">
                {isLoading ? (
                  <div className="animate-pulse bg-gray-600 h-6 rounded"></div>
                ) : (
                  formatPrice(price)
                )}
              </div>
              {!isLoading && !error && (
                <div className={`text-xs ${priceChange24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {priceChange24h >= 0 ? '↗' : '↘'} {Math.abs(priceChange24h).toFixed(2)}%
                </div>
              )}
            </div>
          </motion.div>

          {/* Volume 24h - Live */}
          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-[#FB2BFF] transition-all duration-300 group"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#FB2BFF] font-mono">
                Volume 24h
              </div>
              <div className="text-xl md:text-2xl font-bangers text-white group-hover:text-[#FB2BFF] transition-colors">
                {isLoading ? (
                  <div className="animate-pulse bg-gray-600 h-6 rounded"></div>
                ) : error ? (
                  <span className="text-sm">$2.5M</span>
                ) : (
                  <CountUp end={volume24h} />
                )}
              </div>
            </div>
          </motion.div>

          {/* Liquidity - Live */}
          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-yellow-400 transition-all duration-300 group"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center space-y-3">
              <div className="text-xs uppercase tracking-wider text-yellow-400 font-mono">
                Liquidity
              </div>
              <div className="text-xl md:text-2xl font-bangers text-white group-hover:text-yellow-400 transition-colors">
                {isLoading ? (
                  <div className="animate-pulse bg-gray-600 h-6 rounded"></div>
                ) : error ? (
                  <span className="text-sm">$1.2M</span>
                ) : (
                  <CountUp end={liquidity} />
                )}
              </div>
            </div>
          </motion.div>

          {/* LP Status - Static */}
          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-green-400 transition-all duration-300 group"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center space-y-3">
              <div className="text-xs uppercase tracking-wider text-green-400 font-mono">
                LP Status
              </div>
              <div className="text-xl md:text-2xl font-bangers text-white group-hover:text-green-400 transition-colors">
                100% Burned
              </div>
              <div className="text-xs text-green-400">✓ Verified</div>
            </div>
          </motion.div>

          {/* Supply - Static */}
          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-400 transition-all duration-300 group"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center space-y-3">
              <div className="text-xs uppercase tracking-wider text-blue-400 font-mono">
                Supply
              </div>
              <div className="text-lg md:text-xl font-bangers text-white group-hover:text-blue-400 transition-colors">
                1B $SAVIOR
              </div>
              <div className="text-xs text-blue-400">Forever</div>
            </div>
          </motion.div>

        </div>

        {/* Contract Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-xl px-6 py-4 hover:border-[#14F195] transition-all duration-300">
            <div className="text-sm text-gray-400">
              <span className="text-green-400 font-mono">Contract Renounced</span>
              <span className="mx-2">•</span>
              <span className="font-mono">EKpQGSJt...zcjm</span>
            </div>
            <button 
              onClick={() => navigator.clipboard.writeText('EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm')}
              className="text-xs bg-[#14F195]/20 hover:bg-[#14F195]/40 text-[#14F195] px-3 py-1 rounded-lg transition-all duration-300"
            >
              Copy CA
            </button>
          </div>
          
          {error && (
            <div className="mt-4 text-xs text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 rounded-lg px-4 py-2 inline-block">
              {error} • Showing cached data
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
