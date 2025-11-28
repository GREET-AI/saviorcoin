"use client";

import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

interface DottedGlowBackgroundProps {
  className?: string;
  gap?: number;
  radius?: number;
  color?: string;
  glowColor?: string;
  opacity?: number;
  speedMin?: number;
  speedMax?: number;
}

export function DottedGlowBackground({
  className,
  gap = 12,
  radius = 2,
  color = "rgba(153, 69, 255, 0.4)",
  glowColor = "rgba(20, 241, 149, 0.6)",
  opacity = 0.6,
  speedMin = 0.4,
  speedMax = 1.3,
}: DottedGlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const dots: Array<{
      x: number;
      y: number;
      phase: number;
      speed: number;
    }> = [];

    const cols = Math.ceil(canvas.width / gap);
    const rows = Math.ceil(canvas.height / gap);

    for (let i = 0; i < cols * rows; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      dots.push({
        x: col * gap + gap / 2,
        y: row * gap + gap / 2,
        phase: Math.random() * Math.PI * 2,
        speed: speedMin + Math.random() * (speedMax - speedMin),
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() / 1000;

      dots.forEach((dot) => {
        const alpha = (Math.sin(time * dot.speed + dot.phase) + 1) / 2;
        const currentOpacity = opacity * alpha;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color.replace("0.4", String(currentOpacity));
        ctx.fill();

        if (alpha > 0.7) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = glowColor;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [gap, radius, color, glowColor, opacity, speedMin, speedMax]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 pointer-events-none", className)}
    />
  );
}

