"use client";

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Image from 'next/image';
import { useLiveTokenData, formatMarketCap, formatPrice, formatVolume } from '../hooks/useLiveTokenData';

interface StatCardProps {
  label: string;
  value: string | number;
  detail: string;
  isLoading?: boolean;
  isLive?: boolean;
  priceChange?: number;
}

function StatCard({ label, value, detail, isLoading, isLive, priceChange }: StatCardProps) {
  return (
    <div className="space-y-2 border-white/10 pb-4 last:border-none lg:border-l lg:border-transparent lg:border-l-white/10 lg:pl-4">
      <div className="flex items-center gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">{label}</p>
        {isLive && (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400">LIVE</span>
          </div>
        )}
      </div>
      
      <div className="text-2xl font-semibold tracking-tight text-white">
        {isLoading ? (
          <div className="animate-pulse bg-white/20 h-6 rounded w-20"></div>
        ) : typeof value === 'number' ? (
          <CountUp
            end={value}
            duration={2}
            separator=","
            prefix="$"
            decimals={value < 1 ? 6 : 0}
          />
        ) : (
          value
        )}
      </div>
      
      <div className="flex items-center gap-2">
        <p className="text-sm text-white/60">{detail}</p>
        {priceChange !== undefined && (
          <span className={`text-xs px-2 py-1 rounded-full ${
            priceChange >= 0 
              ? 'bg-green-500/20 text-green-400' 
              : 'bg-red-500/20 text-red-400'
          }`}>
            {priceChange >= 0 ? '↗' : '↘'} {Math.abs(priceChange).toFixed(2)}%
          </span>
        )}
      </div>
    </div>
  );
}

export function LiveHeroStats() {
  const { data, isLoading, isError } = useLiveTokenData();
  
  console.log('🎯 LiveHeroStats render:', { data, isLoading, isError });

  // Prepare stats data
  const stats = [
    {
      label: "Market Cap",
      value: data?.fdv ? formatMarketCap(data.fdv) : "$38M",
      detail: "Tracked on Solana",
      isLive: !isError && data?.success,
    },
    {
      label: "Price",
      value: data?.priceUsd ? formatPrice(data.priceUsd) : "$0.000038",
      detail: "Live Price",
      isLive: !isError && data?.success,
      priceChange: data?.priceChange?.h24,
    },
    {
      label: "Volume 24h",
      value: data?.volume?.h24 ? formatVolume(data.volume.h24) : "$2.5M",
      detail: "Trading Volume",
      isLive: !isError && data?.success,
    },
    {
      label: "LP",
      value: "100% Burned",
      detail: "Immortal floor price",
      isLive: false, // Static
    },
  ];

  return (
    <motion.div
      className="glass grid gap-4 rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur lg:grid-cols-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          label={stat.label}
          value={stat.value}
          detail={stat.detail}
          isLoading={isLoading && stat.isLive}
          isLive={stat.isLive}
          priceChange={stat.priceChange}
        />
      ))}
      
      {/* Dogwifhat Placeholder Indicator */}
      <div className="col-span-full mt-2 text-center">
        <motion.div
          className="inline-flex items-center gap-2 text-xs text-orange-400 bg-orange-400/10 rounded-lg px-3 py-1"
          animate={{ 
            opacity: [0.6, 1, 0.6],
            scale: [0.98, 1.02, 0.98]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex-shrink-0"
          >
            <Image
              src="/Website/cryptologos/dogwifhat.jpg"
              alt="dogwifhat"
              width={20}
              height={20}
              className="rounded-md"
            />
          </motion.div>
          <span>Currently showing dogwifhat data as placeholder</span>
          <motion.div
            className="w-2 h-2 bg-orange-400 rounded-full"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Error indicator */}
      {isError && (
        <div className="col-span-full mt-1 text-center">
          <p className="text-xs text-yellow-400 bg-yellow-400/10 rounded-lg px-3 py-1 inline-block">
            ⚠ Live data temporarily unavailable • Showing cached values
          </p>
        </div>
      )}
    </motion.div>
  );
}
