"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap, ChevronDown, Copy, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Overview", href: "/", icon: Sparkles },
  { label: "About the Artist", href: "/about", icon: Zap },
  { 
    label: "Series", 
    href: "#", 
    icon: Zap,
    submenu: [
      { label: "Episodes", href: "/episodes" },
      { label: "Characters", href: "/characters" },
      { label: "Behind the Scenes", href: "/behind-scenes" }
    ]
  },
  { 
    label: "Socials", 
    href: "#", 
    icon: Sparkles,
    submenu: [
      { label: "Artist X-Page", href: "https://x.com/Matttherealone" },
      { label: "X-Community", href: "https://x.com/i/communities/1892827833283575859" },
      { label: "Discord", href: "https://discord.gg/SaRxWVAJze" }
    ]
  },
  { label: "How it works", href: "/how-it-works", icon: Sparkles },
];

export function TopNavbar() {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const contractAddress = "BFcKBT2yLg6uAfCBmiYr9JZ4ZFKT6diQHdihKmVmpump";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log('Failed to copy');
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="modern-navbar fixed top-0 left-0 right-0 z-50 hidden md:block"
    >
      <div className="modern-navbar-inner">
        <div className="modern-navbar-content">
          <Link href="/" className="modern-nav-logo">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="modern-nav-logo-wrapper"
            >
              <Image 
                src="/Website/Logo/logo.png" 
                alt="SAVIOR Logo" 
                width={60} 
                height={60}
                className="rounded-lg"
              />
            </motion.div>
          </Link>

          <div className="modern-nav-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              const hasSubmenu = link.submenu && link.submenu.length > 0;
              const isSubmenuOpen = openSubmenu === link.label;
              
              return (
                <div 
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => hasSubmenu && setOpenSubmenu(link.label)}
                  onMouseLeave={() => hasSubmenu && setOpenSubmenu(null)}
                >
                  {hasSubmenu ? (
                    <div className={`modern-nav-link ${isActive ? "active" : ""}`}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="modern-nav-link-inner"
                      >
                        <Icon className="modern-nav-link-icon" />
                        <span className="modern-nav-link-text">{link.label}</span>
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </motion.div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`modern-nav-link ${isActive ? "active" : ""}`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="modern-nav-link-inner"
                      >
                        <Icon className="modern-nav-link-icon" />
                        <span className="modern-nav-link-text">{link.label}</span>
                        {isActive && (
                          <motion.div
                            layoutId="modernActiveIndicator"
                            className="modern-nav-link-indicator"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  )}
                  
                  {/* Submenu */}
                  <AnimatePresence>
                    {hasSubmenu && isSubmenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50"
                      >
                        {link.submenu?.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            target={sublink.href.startsWith('http') ? "_blank" : undefined}
                            rel={sublink.href.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors first:rounded-t-xl last:rounded-b-xl"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Contract Address */}
          <motion.div
            className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-green-400/20 backdrop-blur-sm rounded-full border border-purple-500/30"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-xs text-gray-300 font-montserrat font-medium">CA:</span>
            <span className="text-xs text-white font-montserrat font-mono">
              {contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}
            </span>
            <button
              onClick={copyToClipboard}
              className="flex items-center justify-center w-6 h-6 bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 hover:from-purple-500 hover:via-blue-400 hover:to-green-300 rounded-full transition-all duration-200"
            >
              {copied ? (
                <Check className="w-3 h-3 text-white" />
              ) : (
                <Copy className="w-3 h-3 text-white" />
              )}
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="modern-nav-cta"
          >
            <Link
              href="https://pump.fun/coin/BFcKBT2yLg6uAfCBmiYr9JZ4ZFKT6diQHdihKmVmpump"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-nav-buy-btn"
            >
              <Zap className="h-4 w-4" />
              Buy Token
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

