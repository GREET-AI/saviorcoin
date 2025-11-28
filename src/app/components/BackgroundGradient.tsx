"use client";

import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface BackgroundGradientProps {
  children?: ReactNode;
  containerClassName?: string;
  animate?: boolean;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
}

export function BackgroundGradient({
  children,
  containerClassName,
  animate = true,
  gradientFrom = "#9945FF",
  gradientVia = "#14F195",
  gradientTo = "#00D1FF",
}: BackgroundGradientProps) {
  const gradient = `linear-gradient(135deg, ${gradientFrom}, ${gradientVia}, ${gradientTo})`;

  return (
    <div className={cn("relative group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-3xl opacity-20 blur-xl transition duration-500",
          animate && "group-hover:opacity-30 group-hover:blur-2xl"
        )}
        style={{ background: gradient }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

