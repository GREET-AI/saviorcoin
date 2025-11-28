"use client";

import { useState, useEffect } from 'react';

interface DexScreenerPair {
  marketCap: number;
  fdv: number;
  priceUsd: string;
  volume: {
    h24: number;
  };
  liquidity: {
    usd: number;
  };
  priceChange: {
    h24: number;
  };
}

interface DexScreenerData {
  pairs: DexScreenerPair[];
}

interface TokenStats {
  marketCap: number;
  price: string;
  volume24h: number;
  liquidity: number;
  priceChange24h: number;
  isLoading: boolean;
  error: string | null;
}

export function useDexScreenerData(tokenAddress: string = "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm"): TokenStats {
  const [data, setData] = useState<TokenStats>({
    marketCap: 38000000, // Fallback values
    price: "0.000038",
    volume24h: 2500000,
    liquidity: 1200000,
    priceChange24h: 12.5,
    isLoading: true,
    error: null
  });

  const fetchData = async () => {
    setData(prev => ({ ...prev, isLoading: true, error: null }));
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock live data that changes every refresh
    const basePrice = 0.000038;
    const randomChange = (Math.random() - 0.5) * 0.000002; // Small price variation
    const newPrice = basePrice + randomChange;
    const priceChange = (randomChange / basePrice) * 100;
    
    const baseMC = 38000000;
    const mcVariation = (Math.random() - 0.5) * 2000000; // ±1M variation
    const newMC = baseMC + mcVariation;
    
    setData({
      marketCap: Math.round(newMC),
      price: newPrice.toFixed(6),
      volume24h: Math.round(2500000 + (Math.random() - 0.5) * 500000),
      liquidity: Math.round(1200000 + (Math.random() - 0.5) * 200000),
      priceChange24h: priceChange,
      isLoading: false,
      error: null
    });
  };

  useEffect(() => {
    // Initial fetch
    fetchData();
    
    // Refresh every 30 seconds
    const interval = setInterval(fetchData, 30000);
    
    return () => clearInterval(interval);
  }, [tokenAddress]);

  return data;
}

// Utility functions for formatting
export function formatNumber(num: number): string {
  if (num >= 1e9) {
    return `$${(num / 1e9).toFixed(2)}B`;
  } else if (num >= 1e6) {
    return `$${(num / 1e6).toFixed(2)}M`;
  } else if (num >= 1e3) {
    return `$${(num / 1e3).toFixed(1)}K`;
  } else {
    return `$${num.toFixed(0)}`;
  }
}

export function formatPrice(price: string): string {
  const numPrice = parseFloat(price);
  if (numPrice < 0.000001) {
    return `$${numPrice.toExponential(2)}`;
  } else if (numPrice < 0.01) {
    return `$${numPrice.toFixed(6)}`;
  } else {
    return `$${numPrice.toFixed(4)}`;
  }
}
