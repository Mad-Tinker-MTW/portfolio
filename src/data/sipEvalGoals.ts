export const evalChecklist: string[] = [
  "A custom cognitive lexicon scores user responses across 8 dimensions to build a creative profile in real time",
  "Follow-up questions are generated from what the lexicon scored, not a fixed list",
  "Each question adapts based on what was scored from the previous answer",
  "Profile is saved to structured JSON and passed to the next stage",
  "Profile drives a da Vinci-style concept sketch via Replicate image generation",
  "Sketches are original, generated from the profile, not pulled from existing art",
  "User can reject and refine the sketch with feedback before approving",
  "Multiple sketch variations possible from one profile through the rejection loop",
  "Simple single-page GUI, no technical knowledge needed to run a session",
  "Guided end-to-end flow, no dead ends from login to G-code output",
  "Full pipeline runs end to end without crashing",
];

export type Goal = { title: string; tasks: string[] };

export const goals: Goal[] = [
  {
    title: "Goal 1: Build a system that profiles how a user thinks",
    tasks: [
      "Built custom 8-dimension cognitive lexicon",
      "Lexicon scores user responses in real time",
      "Profile saved to structured JSON and handed off to next stage",
    ],
  },
  {
    title: "Goal 2: Design adaptive guided conversation",
    tasks: [
      "Questions generated from live lexicon scores, not a fixed script",
      "Confidence threshold determines when profiling is complete",
      "Sabina persona handles the conversation via Claude API",
    ],
  },
  {
    title: "Goal 3: Generate da Vinci-style concept sketches",
    tasks: [
      "Profile feeds Replicate image generation",
      "User can reject with feedback and regenerate",
      "Approved image passed to Ada for G-code conversion",
    ],
  },
  {
    title: "Goal 4: Build a usable GUI",
    tasks: [
      "Single page vanilla HTML/CSS/JS, no framework needed",
      "Full session flow from login to G-code output",
      "Live dimension scoring visible during session",
    ],
  },
  {
    title: "Goal 5: Deliver a working end-to-end pipeline",
    tasks: [
      "Profiler to sketch to G-code pipeline complete",
      "EleksDraw configured with FluidNC, wired and documented",
      "Physical build in progress: motors upgraded, board needs flash, holders need print",
    ],
  },
];