// src/data/episodes.ts

export interface EpisodeScene {
  id: string;
  title: string;
  description: string;
  video?: string; // Local video file (for development)
  youtubeId?: string; // YouTube video ID (for production)
  thumbnail?: string; // Thumbnail image
}

export const episode1Scenes: EpisodeScene[] = [
  { 
    id: "SC01", 
    title: "The Letter from K.", 
    description: "Mar-a-Lago, 5:12 AM. A black envelope with a single red K lands in Elon's hand.", 
    video: "SC01_elon_stands_alone_2025_11_22T19_26_58_409Z_20251123204857888.mp4",
    youtubeId: "_wB1ROmdyyE",
    thumbnail: "/thumbnails/sc01.jpg"
  },
  { 
    id: "SC02", 
    title: "Unbundled Forever", 
    description: "Berlin. Matt finally cracks the code – tokens that can never be bundled again.", 
    video: "SC02_matt_sits_on_his_de_2025_11_22T19_28_48_909Z_20251124111204895.mp4",
    youtubeId: "CpMcitKGku0",
    thumbnail: "/thumbnails/sc02.jpg"
  },
  { 
    id: "SC03", 
    title: "The Plan", 
    description: "Oval Office shadows. Trump lays out the biggest rug in history to a silent Elon.", 
    video: "SC03_trump_stands_in_fron_2025_11_22T19_51_17_209Z_20251124080010433.mp4",
    youtubeId: "fO7vIQXW5Ok",
    thumbnail: "/thumbnails/sc03.jpg"
  },
  { 
    id: "SC04", 
    title: "You Played Me", 
    description: "Elon explodes – reveals he's been running a double game the whole time.", 
    video: "SC04_....mp4",
    youtubeId: "jtgIHcrfQrQ",
    thumbnail: "/thumbnails/sc04.jpg"
  },
  { 
    id: "SC05", 
    title: "Villa Visit", 
    description: "Lagos. Dre steps into Blue's mansion – Berlin flight tickets already on the table.", 
    video: "SC05_....mp4",
    youtubeId: "Bpoj-gzI5jI",
    thumbnail: "/thumbnails/sc05.jpg"
  },
  { 
    id: "SC06", 
    title: "The Gang Assembles", 
    description: "Kreuzberg basement. Matt and his crew plan the coin – and how hard they will rug.", 
    video: "SC06_....mp4",
    youtubeId: "AwS_ODJVCpE",
    thumbnail: "/thumbnails/sc06.jpg"
  },
  { 
    id: "SC07", 
    title: "Rug Mechanics 101", 
    description: "Matt drops a cold-blooded tutorial: How to perfectly rug on Pump.fun in 2025.", 
    video: "SC07_....mp4",
    youtubeId: "iD3AAfKFKtY",
    thumbnail: "/thumbnails/sc07.jpg"
  },
  { 
    id: "SC08", 
    title: "Fairway Pact", 
    description: "Trump and Elon on the golf course – next stop Frankfurt, Klaus Schwab is waiting.", 
    video: "SC08_trump_and_elon_on_th_2025_11_23T22_54_57_706Z_20251124075108877.mp4",
    youtubeId: "YK-R3kR6WwM",
    thumbnail: "/thumbnails/sc08.jpg"
  },
  { 
    id: "SC09", 
    title: "First Contact", 
    description: "Berlin rooftop. Blue meets Matt and the gang – alliance sealed.", 
    video: "SC09_....mp4",
    youtubeId: "COMING_TOMORROW",
    thumbnail: "/Website/Characters/Blue.png"
  },
  { 
    id: "SC10", 
    title: "Epstein Talk at 40,000 ft", 
    description: "Private jet to Frankfurt. Trump and Elon trade stories the internet will never hear.", 
    video: "SC10_jet_interior_turbul_2025_11_24T08_07_17_403Z_20251124091240969.mp4",
    youtubeId: "COMING_TOMORROW",
    thumbnail: "/Website/Characters/Donald.png"
  },
  { 
    id: "SC11", 
    title: "The Living Dead", 
    description: "Frankfurt vault. Benjamin de Rothschild – officially dead since 2021 – offers adrenochrome and the final piece.", 
    video: "SC11_vault_door_opens_tr_2025_11_24T09_06_13_499Z_20251124121608728.mp4",
    youtubeId: "COMING_TOMORROW",
    thumbnail: "/Website/Characters/Benjamin.png"
  }
];

// Main episode video (full episode)
export const mainEpisode = {
  id: "EPISODE_1_FULL",
  title: "Episode I: On a Flight to Germany - Full Episode",
  description: "The complete first episode of SAVIOR",
  video: "Episode 1 FINAL.mp4",
  youtubeId: "36EbQGVU0Sc",
  thumbnail: "/thumbnails/episode1-full.jpg"
};