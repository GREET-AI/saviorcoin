"use client";

import { motion } from "framer-motion";

const introParagraphs = [
  "How will this coin ever run enough? Probably the question burning in your head right now, right? But deep down we all feel it when we watch this thing come alive.",
  "It’s solid. It’s pure DEGEN. It’s the one coin that actually feels worth a shot compared to the 500 daily copy-paste rugs popping up and dying in 11 seconds.",
  "Let’s be real for a second. Why did you ever buy any of those other coins? Because some random anon and his cabal pumped it for 20 minutes, dumped on the last ape, and disappeared with your money?",
  "And if you were one of the lucky 0.05 % who actually hit a 100x, you lost it all again in the next weeks chasing the next shiny scam. I know this game inside out.",
  "I know the tekk those greedy bastards are using right now. Big tech, AI scams, fake volume, fake locks – I’ve seen it all from the inside.",
];

const offerParagraphs = [
  "So here’s what I’m offering you: The red pill, brother. The nasty truth about rugpulls and memecoin scams, wrapped in the dopest cartoon series you’ve ever seen.",
  "Education + Entertainment. Exactly what 99 % of projects promise and never deliver. I actually deliver. Next time you’re sitting bored af in Axiom, Phantom open, wallet bleeding, no strat, no hope… just ape this project and go to sleep.",
  "Still reading? Check the chart again. Probably already up. Like always.",
  "That’s my promise. How does it actually run? Simple: I’m talented as fuck. I could easily make 500 memes a year, sell them to greedy bastards for quick cash and stay small. Or…",
  "I focus everything on my lifetime project, become a real valuable member of this rekt society and turn into the KOL we all deserve. The fees pay me. Volume will rise – I’m doing the math, I’m taking the risk.",
  "And the second the fees break even with what I put in for the initial buy and marketing? I lock my entire dev supply. Forever. No bullshit. No maybe. No “team needs to eat”. That’s how this runs forever. Your move.",
];

const roadmapParagraphs = [
  "Let me drop the truth, no filter: There’s this rumor that community coins can’t moon hard and stay alive. Bullshit.",
  "My first ever project i was involved into the core team and of course was creating all of the project did 33.000 % in the first three days. I personally held 40 % of the supply in my wallets. (Our team 70% in total). Numbers that would make most people fake their own death and move countries.",
  "And what did I do on day 3? Cashed out exactly 2.000 $. That’s it. For the work. Left hundreds of thousands on the table because I’m not a jeet and I’m not greedy. I’m an artist.",
  "This is my work, my baby, my passion. You don’t sell your soul’s work for a quick bag. You build it. You protect it. You let it breathe.",
  "That’s why this roadmap is different. I’m buying heavy supply after launch myself. Yes, the dev will be one of the biggest holders. And that’s actually the healthiest thing for the token.",
  "Because I will NEVER dump on the fam. Never. It’s still PvP at the start, so if you ape early you can eat big. I’m not manipulating shit afterwards.",
  "My whole game plan: stack supply → lock it forever → live off the fees → build the biggest art & cartoon empire Solana ever saw. Fees = my salary. Fees = hiring animators, writers, musicians. Fees = more episodes, more seasons, more fire.",
];

const goals = [
  "Become the most known white-hat dev on Solana",
  "Earn the title “the dev who never sold his soul”",
  "Build the biggest, realest, most loyal fam on earth",
];

const closingParagraphs = [
  "Because designing, coding and creating 24/7 makes you kinda lonely, you know? I can pour my feelings into art, but it’s not the same as having a real family that grows with me, vibes with me, changes lives together.",
  "I know names. I know people. Big ones. Dirty ones. They have no clue this project exists. And I want to keep it that way. I want this to grow 100 % organic, from the ground, from the real degens, from you.",
  "I want the crown: “Solana dev with the biggest fam on earth.” That’s the endgame. Everything else – money, fame, legacy – comes automatic when the fam is real. So yeah… welcome to the family, or keep gambling on the next cabal coin. Your choice.",
];

const fade = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
}

export default function HowItWorksPage() {
  return (
    <section className="themed-section work-section">
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
          <p className="section-eyebrow">Education + Entertainment</p>
          <h1 className="section-title mb-8">How will this coin ever run enough?</h1>
          {[...introParagraphs, ...offerParagraphs].map((paragraph, index) => (
            <MotionText key={paragraph} index={index}>
              {paragraph}
            </MotionText>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-3xl border border-white/10 p-6 backdrop-blur space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">Roadmap – realest shit I ever wrote</p>
            {roadmapParagraphs.map((paragraph, index) => (
              <MotionText key={paragraph} index={index}>
                {paragraph}
              </MotionText>
            ))}
          </div>
          <div className="glass rounded-3xl border border-white/10 p-6 backdrop-blur space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">Personal goals</p>
            <ul className="space-y-3 text-white/80">
              {goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
            {closingParagraphs.map((paragraph, index) => (
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

