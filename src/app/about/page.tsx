"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const introParagraphs = [
  "It’s me, bro. I call myself Matt. The realest Dev in the Space.",
  "Just a dude from Germany who started as a small-time artist, media designer and web nerd. I used to make pretty websites, logos, flyers… normal stuff that makes people smile and pays the rent. Then, about a year ago, I fell down the crypto rabbit hole.",
  "And damn… what a wild, dirty, lawless jungle this is. Every day new coins, new hopes, new dreams… and new dead bodies. People lose their life savings in 11 seconds because some anon dev pulls the rug and disappears to Dubai. I got tired of being sad and angry every single day.",
  "So I asked myself: What if I just build my own thing? My own art, my own charts, my own coins… but without EVER rugging anyone? Sounds simple, right? But in this space that’s literally the rarest shit you can offer: a dev who actually gives a fuck and will never sell on you.",
  "My coins have no crazy utility, no 1000x roadmap lies. The only real value is: I will never rug you. Trading fees keep the lights on, pay the animators, pay the voice actors – more episodes, more seasons, more madness.",
  "My dream? Build a real cartoon empire. Not one series… ten, twenty, fifty seasons over my lifetime. Hire a whole team of crazy talented people and just create fire every week. I’d rather die than go back to a 9-5.",
];

const missionParagraphs = [
  "Smol intro: Let me be clearly honest with you, straight up. I was already paid fat money as the artist behind the curtain. I made the characters, the idea, the concept, the websites, the videos, the buy animations – I delivered a top notch homemade product and I’m damn good at marketing it.",
  "This coin right here? 100 % made by me. 100 % launched by me. 100 % protected by me. No cabal. No insiders. No dirty games. No bots pumping it. And because of that… nobody can ever dump it either.",
  "That’s the mission. I’m building the one coin nobody ever had the balls to build: the real evergreen community candle. The coin where you ape early and your only FOMO is “when do I sell?” Because you know this will never stop going up. NEVER.",
];

const visionParagraphs = [
  "Solana TV Series: We’re building the first real Solana TV Series. The mission is simple and brutal: We change how people see and use pump.fun, raydium, jupiter and all the other wild west platforms.",
  "The vision is bigger than one coin. Way bigger. The first real media empire that runs on Solana trading fees. Not backed by VCs. Not backed by whales. Backed by art, stories, laughs and a community that actually gives a fuck.",
  "Imagine this: 10 years from now… 20+ cartoon series running at the same time. Daily shorts. Weekly episodes. Live streams. Music drops. Merch. Games. Maybe even a full-length movie. All paid by the fees of coins that never rug.",
  "We turn every holder into a shareholder of the funniest, realest, most dangerous entertainment machine crypto has ever seen. A place where degens don’t get rekt daily… they get entertained, they laugh, they win, and they stay forever.",
];

const fade = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function MotionText({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.p
      className="section-copy"
      variants={textVariants}
      initial={{ opacity: 1, y: 0 }}
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      {children}
    </motion.p>
  );
}

export default function AboutPage() {
  return (
    <section className="themed-section about-section">
      <div className="section-overlay" />
      <div className="section-glow" aria-hidden="true" />
      <motion.div
        className="section-content space-y-16 pt-32 md:pt-40"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0 }}
      >
        <div className="space-y-12">
          <p className="section-eyebrow">BTC-2025 · an original Solana TV Series</p>
          <h1 className="section-title mb-8">Who the fuck is Igor Gross?</h1>
          {introParagraphs.map((paragraph, index) => (
            <MotionText key={paragraph} index={index}>
              {paragraph}
            </MotionText>
          ))}
          <Link
            href="https://x.com/Matttherealone"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-white/25 bg-black/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur"
          >
            Visit Artist
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="glass rounded-3xl border border-white/10 p-6 backdrop-blur space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">Mission and idea</p>
            {missionParagraphs.map((paragraph, index) => (
              <MotionText key={paragraph} index={index}>
                {paragraph}
              </MotionText>
            ))}
          </div>
          <div className="glass rounded-3xl border border-white/10 p-6 backdrop-blur space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">Vision</p>
            {visionParagraphs.map((paragraph, index) => (
              <MotionText key={paragraph} index={index}>
                {paragraph}
              </MotionText>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

