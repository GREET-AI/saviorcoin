"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Overview", href: "/", icon: Sparkles },
  { label: "About", href: "/about", icon: Zap },
  { label: "How it works", href: "/how-it-works", icon: Sparkles },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="modern-mobile-trigger fixed top-4 left-4 z-50 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#9945FF]/20 to-[#14F195]/20 backdrop-blur-xl transition-all md:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6 text-white" />
        <div className="modern-mobile-trigger-glow" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md md:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="modern-mobile-sidebar fixed left-0 top-0 z-50 h-full w-[320px] border-r border-white/10 bg-gradient-to-br from-[#02010a] via-[#0a0515] to-[#02010a] backdrop-blur-2xl md:hidden"
            >
              <div className="flex h-full flex-col p-6">
                <div className="mb-8 flex items-center justify-between">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <div className="modern-mobile-logo flex items-center gap-3">
                      <Image 
                        src="/Website/Logo/logo.png" 
                        alt="SAVIOR Logo" 
                        width={36} 
                        height={36}
                        className="rounded-lg"
                      />
                      <div className="flex flex-col">
                        <span className="modern-mobile-logo-main">SAVIOR</span>
                        <span className="modern-mobile-logo-sub">Solana Cinematic OS</span>
                      </div>
                    </div>
                  </Link>
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5 text-white" />
                  </motion.button>
                </div>

                <nav className="flex-1 space-y-3">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="modern-mobile-nav-link block"
                        >
                          <Icon className="h-5 w-5" />
                          <span>{link.label}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-auto"
                >
                  <Link
                    href="https://pump.fun"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="modern-mobile-buy-btn block w-full text-center"
                  >
                    <Zap className="h-4 w-4" />
                    BUY $SAVIOR
                  </Link>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

