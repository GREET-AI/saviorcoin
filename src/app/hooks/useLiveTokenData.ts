"use client";

import useSWR from 'swr';

interface TokenData {
  priceUsd: string;
  fdv: number;
  marketCap: number;
  volume: {
    h24: number;
  };
  liquidity: {
    usd: number;
  };
  priceChange: {
    h24: number;
  };
  timestamp: string;
  success: boolean;
  error?: string;
}

const fetcher = async (url: string) => {
  console.log('🔄 Frontend fetching:', url);
  const response = await fetch(url);
  const data = await response.json();
  console.log('📦 Frontend received data:', data);
  return data;
};

export function useLiveTokenData() {
  const { data, error, isLoading, mutate } = useSWR<TokenData>(
    '/api/dex-data',
    fetcher,
    {
      refreshInterval: 30000, // Refresh every 30 seconds
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      dedupingInterval: 10000, // Dedupe requests within 10s
    }
  );

  return {
    data,
    isLoading,
    isError: error,
    refresh: mutate,
  };
}

// Utility functions for formatting
export function formatMarketCap(value: number): string {
  if (value >= 1e9) {
    return `$${(value / 1e9).toFixed(2)}B`;
  } else if (value >= 1e6) {
    return `$${(value / 1e6).toFixed(2)}M`;
  } else if (value >= 1e3) {
    return `$${(value / 1e3).toFixed(1)}K`;
  } else {
    return `$${value.toFixed(0)}`;
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

export function formatVolume(volume: number): string {
  return formatMarketCap(volume);
}
