"use client";
import React, { useId, useMemo } from "react";
import { cn } from "../../lib/utils";

interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  children?: React.ReactNode;
}

export const Sparkles: React.FC<SparklesProps> = ({
  id,
  className,
  background = "transparent",
  minSize = 1,
  maxSize = 3,
  particleDensity = 120,
  particleColor = "#FFF",
  children,
}) => {
  const sparklesId = useId();
  const gradientId = id || sparklesId;

  const particles = useMemo(() => {
    const generateParticles = () => {
      return [...Array(particleDensity)].map((_, i) => ({
        id: i,
        cx: Math.random() * 100,
        cy: Math.random() * 100,
        r: Math.random() * (maxSize - minSize) + minSize,
        animationDelay: Math.random() * 3,
        animationDuration: Math.random() * 2 + 1,
      }));
    };
    return generateParticles();
  }, [particleDensity, minSize, maxSize]);

  return (
    <div className={cn("relative", className)} style={{ background }}>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: particleColor, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: particleColor, stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        {particles.map((particle) => (
          <circle
            key={particle.id}
            cx={`${particle.cx}%`}
            cy={`${particle.cy}%`}
            r={particle.r}
            fill={`url(#${gradientId})`}
            className="animate-pulse"
            style={{
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`,
            }}
          />
        ))}
      </svg>
      {children}
    </div>
  );
};
