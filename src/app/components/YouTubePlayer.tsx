"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubePlayerProps {
  youtubeId: string;
  title: string;
  thumbnail?: string;
  className?: string;
}

export function YouTubePlayer({ youtubeId, title, thumbnail, className = "" }: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Check if it's a placeholder ID
  const isPlaceholder = youtubeId.startsWith("PLACEHOLDER_");

  if (isPlaceholder) {
    return (
      <div className={`relative bg-gray-900 rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
          <h3 className="text-white font-bold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">Video wird auf YouTube hochgeladen...</p>
          <p className="text-gray-500 text-xs mt-2">ID: {youtubeId}</p>
        </div>
      </div>
    );
  }

  if (!isPlaying) {
    return (
      <div 
        className={`relative cursor-pointer group ${className}`}
        onClick={() => setIsPlaying(true)}
      >
        {/* Thumbnail */}
        <img
          src={thumbnail || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors rounded-lg">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-10 h-10 text-white ml-1" />
          </div>
        </div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
          <h3 className="text-white font-bold">{title}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
        title={title}
        className="w-full h-full rounded-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
