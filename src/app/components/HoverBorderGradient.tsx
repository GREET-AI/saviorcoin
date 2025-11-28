"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const direction: Direction = "TOP";

  const radialGradient = `radial-gradient(${hovered ? "600px" : "600px"} circle at ${
    direction === "TOP"
      ? "50% 0%"
      : direction === "LEFT"
      ? "0% 50%"
      : direction === "BOTTOM"
      ? "50% 100%"
      : "100% 50%"
  }, rgba(220, 38, 38, 0.5) 0%, transparent 70%)`;

  return (
    <Tag
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-shrink-0 overflow-visible",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn("w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]", className)}
      >
        {children}
      </div>
      <motion.div
        className="flex-shrink-0 rounded-full"
        style={{
          background: radialGradient,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: duration * 0.6 }}
      />
      <div className="bg-black absolute z-10 flex-shrink-0 rounded-[inherit] inset-[2px]" />
    </Tag>
  );
}
