import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tokenAddress = searchParams.get('address') || 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm';

    // Backend kann problemlos externe APIs aufrufen
    const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/solana/${tokenAddress}`, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (compatible; SaviorCoin/1.0)',
      },
      cache: 'no-store', // Always get fresh data
    });

    if (!response.ok) {
      throw new Error(`DexScreener API failed: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.pairs || data.pairs.length === 0) {
      throw new Error('No trading pairs found');
    }

    const pair = data.pairs[0];
    
    // Strukturierte Antwort
    const tokenStats = {
      marketCap: pair.fdv || pair.marketCap || 0,
      price: pair.priceUsd || "0",
      volume24h: pair.volume?.h24 || 0,
      liquidity: pair.liquidity?.usd || 0,
      priceChange24h: pair.priceChange?.h24 || 0,
      timestamp: new Date().toISOString(),
      success: true
    };

    return NextResponse.json(tokenStats, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });

  } catch (error) {
    console.error('Token stats API error:', error);
    
    // Fallback-Daten bei Fehler
    return NextResponse.json({
      marketCap: 38000000,
      price: "0.000038",
      volume24h: 2500000,
      liquidity: 1200000,
      priceChange24h: 12.5,
      timestamp: new Date().toISOString(),
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 200 }); // 200 damit Frontend nicht crashed
  }
}
