export type Subject = "coding" | "maths" | "physics";
export type Difficulty = "intro" | "intermediate" | "advanced";

export type Rewards = {
  xp: number;
  assassin: number;
  bruiser: number;
  mage: number;
};

export type TeamRequirement = {
  assassin: number;
  bruiser: number;
  mage: number;
};

export type Mission = {
  id: string;
  subject: Subject;
  title: string;
  shortDescription: string;
  learningObjective: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  rewards: Rewards;
  mode?: "solo" | "collaborative";
  teamRequirement?: TeamRequirement;
  unlocksFrom?: string;
  taskPrompt: string;
  successCriteria: string[];
  hint: string;
  completionMessage: string;
};

export const missions: Mission[] = [
  {
    id: "math-logarithm-dragon",
    subject: "maths",
    title: "Slay the Logarithm Dragon",
    shortDescription: "Use log laws to simplify expressions and solve exponential equations.",
    learningObjective: "Connect exponent rules to logarithm rules and apply them in equations.",
    difficulty: "intro",
    estimatedMinutes: 15,
    rewards: { xp: 120, assassin: 12, bruiser: 8, mage: 18 },
    taskPrompt: "Simplify three logarithmic expressions, then solve 2^x = 32 and log2(64).",
    successCriteria: ["Uses product, quotient, and power rules correctly.", "Solves both equations with clear working."],
    hint: "A logarithm asks which exponent creates the target number.",
    completionMessage: "The dragon falls. Your Mage focus sharpens around exponential patterns."
  },
  {
    id: "physics-vector-scout",
    subject: "physics",
    title: "Vector Scout Run",
    shortDescription: "Resolve displacement vectors into components and find the resultant.",
    learningObjective: "Use right-triangle trigonometry to split and combine vectors.",
    difficulty: "intro",
    estimatedMinutes: 20,
    rewards: { xp: 130, assassin: 6, bruiser: 16, mage: 16 },
    taskPrompt: "Resolve a 50 m displacement at 30 degrees above east into x and y components, then combine it with 20 m north.",
    successCriteria: ["Shows x and y components with units.", "Computes a resultant magnitude and direction."],
    hint: "Use cosine for the adjacent component and sine for the opposite component.",
    completionMessage: "Route mapped. Your Bruiser and Mage attributes rise through clean vector control."
  },
  {
    id: "physics-motion-sprint",
    subject: "physics",
    title: "Kinematics Sprint",
    shortDescription: "Predict position and velocity under constant acceleration.",
    learningObjective: "Select the correct SUVAT equation for one-dimensional motion.",
    difficulty: "intro",
    estimatedMinutes: 22,
    rewards: { xp: 140, assassin: 6, bruiser: 18, mage: 16 },
    unlocksFrom: "physics-vector-scout",
    taskPrompt: "A runner starts from rest and accelerates at 2 m/s^2 for 6 seconds. Find final velocity and distance.",
    successCriteria: ["Identifies known values.", "Calculates velocity and displacement with units."],
    hint: "From rest means initial velocity is zero.",
    completionMessage: "Sprint complete. Motion equations are now part of your toolkit."
  },
  {
    id: "physics-force-gate",
    subject: "physics",
    title: "Force Gate",
    shortDescription: "Use Newton's second law to reason about net force and acceleration.",
    learningObjective: "Draw a force model and calculate acceleration from net force.",
    difficulty: "intro",
    estimatedMinutes: 25,
    rewards: { xp: 150, assassin: 8, bruiser: 22, mage: 14 },
    unlocksFrom: "physics-motion-sprint",
    taskPrompt: "A 12 kg crate is pushed with 60 N while friction applies 12 N backward. Find net force and acceleration.",
    successCriteria: ["Subtracts opposing forces correctly.", "Uses F = ma to find acceleration."],
    hint: "Only the net force changes the motion.",
    completionMessage: "The gate opens. Your Bruiser stat grows through force discipline."
  },
  {
    id: "physics-energy-forge",
    subject: "physics",
    title: "Energy Forge",
    shortDescription: "Track kinetic and gravitational potential energy in a simple system.",
    learningObjective: "Apply conservation of mechanical energy when non-conservative forces are ignored.",
    difficulty: "intermediate",
    estimatedMinutes: 30,
    rewards: { xp: 190, assassin: 8, bruiser: 24, mage: 24 },
    unlocksFrom: "physics-force-gate",
    taskPrompt: "A 2 kg object drops from 5 m. Estimate its speed just before impact using energy conservation.",
    successCriteria: ["Sets mgh equal to 1/2mv^2.", "Solves for speed and explains why mass cancels."],
    hint: "Convert height into speed by equating stored energy to motion energy.",
    completionMessage: "Energy converted. Your class path gains serious Mage weight."
  },
  {
    id: "physics-circuit-ward",
    subject: "physics",
    title: "Circuit Ward",
    shortDescription: "Analyze current and voltage in a simple series circuit.",
    learningObjective: "Use Ohm's law and series resistance rules to predict circuit behavior.",
    difficulty: "intermediate",
    estimatedMinutes: 32,
    rewards: { xp: 200, assassin: 10, bruiser: 20, mage: 28 },
    unlocksFrom: "physics-energy-forge",
    taskPrompt: "A 12 V battery powers 3 ohm and 5 ohm resistors in series. Find total resistance, current, and voltage across each resistor.",
    successCriteria: ["Adds series resistance.", "Applies V = IR to each resistor."],
    hint: "Series components share the same current.",
    completionMessage: "Circuit stabilized. Your Mage stat absorbs a clean charge."
  },
  {
    id: "physics-wave-relay",
    subject: "physics",
    title: "Wave Relay",
    shortDescription: "Relate wave speed, frequency, and wavelength.",
    learningObjective: "Use v = f lambda to solve wave behavior problems.",
    difficulty: "intermediate",
    estimatedMinutes: 28,
    rewards: { xp: 185, assassin: 10, bruiser: 18, mage: 26 },
    unlocksFrom: "physics-circuit-ward",
    taskPrompt: "A wave travels at 340 m/s with frequency 170 Hz. Find its wavelength and explain what changes if frequency doubles.",
    successCriteria: ["Calculates wavelength correctly.", "Explains inverse frequency-wavelength relationship."],
    hint: "If speed stays fixed, frequency and wavelength move in opposite directions.",
    completionMessage: "Signal locked. Your wave reasoning is now combat-ready."
  },
  {
    id: "physics-momentum-breaker",
    subject: "physics",
    title: "Momentum Breaker",
    shortDescription: "Use conservation of momentum in a one-dimensional collision.",
    learningObjective: "Model before-and-after momentum and solve for an unknown velocity.",
    difficulty: "advanced",
    estimatedMinutes: 38,
    rewards: { xp: 260, assassin: 12, bruiser: 34, mage: 30 },
    unlocksFrom: "physics-wave-relay",
    taskPrompt: "A 4 kg cart moving at 3 m/s sticks to a 2 kg cart at rest. Find their shared final velocity.",
    successCriteria: ["Writes total momentum before and after.", "Solves the inelastic collision velocity."],
    hint: "When objects stick together, add their masses after collision.",
    completionMessage: "Impact mastered. Your Bruiser path gains a major breakthrough."
  },
  {
    id: "physics-field-architect",
    subject: "physics",
    title: "Field Architect",
    shortDescription: "Reason about electric fields from point charges.",
    learningObjective: "Use field direction and inverse-square behavior to compare field strength.",
    difficulty: "advanced",
    estimatedMinutes: 42,
    rewards: { xp: 280, assassin: 14, bruiser: 26, mage: 38 },
    unlocksFrom: "physics-momentum-breaker",
    taskPrompt: "Compare the electric field strength at 1 m and 2 m from the same point charge, then state the direction for a positive test charge.",
    successCriteria: ["Applies inverse-square scaling.", "States correct field direction for positive charge."],
    hint: "Doubling distance reduces field strength by a factor of four.",
    completionMessage: "Field mapped. Your Mage identity becomes harder to ignore."
  },
  {
    id: "physics-bridge-party",
    subject: "physics",
    title: "Bridge Load Party",
    shortDescription: "Collaborate on force diagrams, torque balance, and load safety for a bridge span.",
    learningObjective: "Distribute roles across force modeling, calculation checking, and final explanation.",
    difficulty: "advanced",
    estimatedMinutes: 55,
    rewards: { xp: 360, assassin: 18, bruiser: 46, mage: 34 },
    mode: "collaborative",
    teamRequirement: { assassin: 1, bruiser: 2, mage: 2 },
    unlocksFrom: "physics-force-gate",
    taskPrompt: "Your party must decide whether a bridge beam can support a central load. Build a free-body diagram, calculate support reactions, and explain the safety margin.",
    successCriteria: ["Assigns clear team roles.", "Uses equilibrium conditions correctly.", "Explains the result in plain language."],
    hint: "For a static beam, total force and total torque should both balance.",
    completionMessage: "The bridge holds. Your party turned force control into a reliable build."
  },
  {
    id: "physics-collision-raid",
    subject: "physics",
    title: "Collision Raid",
    shortDescription: "Solve a multi-cart momentum scenario as a coordinated team.",
    learningObjective: "Separate data extraction, conservation setup, and result validation across team roles.",
    difficulty: "advanced",
    estimatedMinutes: 50,
    rewards: { xp: 340, assassin: 22, bruiser: 44, mage: 32 },
    mode: "collaborative",
    teamRequirement: { assassin: 2, bruiser: 2, mage: 1 },
    unlocksFrom: "physics-momentum-breaker",
    taskPrompt: "Analyze a three-cart collision chain. One teammate maps before-and-after states, others compute momentum totals and check units.",
    successCriteria: ["Models each collision stage.", "Keeps momentum signs consistent.", "Produces a shared final answer."],
    hint: "Pick one direction as positive and keep it for every cart.",
    completionMessage: "Raid cleared. The team kept the collision chain under control."
  },
  {
    id: "code-html-signal",
    subject: "coding",
    title: "HTML Signal Beacon",
    shortDescription: "Build semantic structure for a mission briefing page.",
    learningObjective: "Use headings, landmarks, lists, and buttons with accessible labels.",
    difficulty: "intro",
    estimatedMinutes: 25,
    rewards: { xp: 140, assassin: 16, bruiser: 8, mage: 16 },
    taskPrompt: "Create a semantic briefing card with a heading, objective list, status text, and a clear start button.",
    successCriteria: ["Uses semantic HTML elements.", "Provides meaningful button text and heading order."],
    hint: "Start with main, section, h1, ul, and button before styling.",
    completionMessage: "Beacon online. Your Assassin precision and Mage structure both improve."
  },
  {
    id: "code-css-armor",
    subject: "coding",
    title: "CSS Armor Plating",
    shortDescription: "Style a responsive card layout with spacing, contrast, and focus states.",
    learningObjective: "Use CSS layout primitives to create usable responsive interfaces.",
    difficulty: "intro",
    estimatedMinutes: 30,
    rewards: { xp: 150, assassin: 18, bruiser: 10, mage: 16 },
    unlocksFrom: "code-html-signal",
    taskPrompt: "Style three mission cards so they stack on mobile, align in a grid on desktop, and show visible keyboard focus.",
    successCriteria: ["Uses responsive layout rules.", "Includes readable contrast and focus-visible styles."],
    hint: "Grid with minmax is often enough for responsive cards.",
    completionMessage: "Armor fitted. Your interface instincts are getting sharper."
  },
  {
    id: "code-js-inventory",
    subject: "coding",
    title: "JavaScript Inventory",
    shortDescription: "Transform arrays of mission rewards into useful totals.",
    learningObjective: "Use map, filter, and reduce to process structured data.",
    difficulty: "intro",
    estimatedMinutes: 35,
    rewards: { xp: 170, assassin: 20, bruiser: 8, mage: 20 },
    unlocksFrom: "code-css-armor",
    taskPrompt: "Given an array of mission objects, calculate total XP and list missions that reward Mage points.",
    successCriteria: ["Uses array methods correctly.", "Returns totals without mutating source data."],
    hint: "Reduce is the cleanest way to accumulate totals.",
    completionMessage: "Inventory sorted. Your Mage logic and Assassin control both rise."
  },
  {
    id: "code-react-component",
    subject: "coding",
    title: "React Component Forge",
    shortDescription: "Create a typed reusable mission card component.",
    learningObjective: "Pass props into a component and render dynamic mission metadata.",
    difficulty: "intermediate",
    estimatedMinutes: 45,
    rewards: { xp: 220, assassin: 26, bruiser: 10, mage: 28 },
    unlocksFrom: "code-js-inventory",
    taskPrompt: "Build a MissionCard component that accepts title, subject, difficulty, estimated time, XP, and reward props.",
    successCriteria: ["Defines clear prop types.", "Renders all mission metadata accessibly."],
    hint: "Keep the component presentational and let the page decide navigation.",
    completionMessage: "Component forged. Your codebase now has repeatable mission craft."
  },
  {
    id: "code-state-console",
    subject: "coding",
    title: "State Console",
    shortDescription: "Use React state to track selected subject and completion state.",
    learningObjective: "Manage UI state with hooks while keeping derived data simple.",
    difficulty: "intermediate",
    estimatedMinutes: 42,
    rewards: { xp: 215, assassin: 24, bruiser: 12, mage: 30 },
    unlocksFrom: "code-react-component",
    taskPrompt: "Add subject tabs that filter a mission grid and a complete button that updates local progress.",
    successCriteria: ["Uses state for selected subject.", "Computes filtered missions from data."],
    hint: "Store the smallest state possible; derive the rest during render.",
    completionMessage: "Console calibrated. Your Mage planning deepens."
  },
  {
    id: "code-router-passages",
    subject: "coding",
    title: "Router Passages",
    shortDescription: "Create refresh-safe routes for mission detail screens.",
    learningObjective: "Use React Router params and static-host rewrites to support deep links.",
    difficulty: "intermediate",
    estimatedMinutes: 40,
    rewards: { xp: 230, assassin: 28, bruiser: 10, mage: 28 },
    unlocksFrom: "code-state-console",
    taskPrompt: "Create a /missions/:missionId route that loads mission data from the URL and handles missing missions.",
    successCriteria: ["Reads the route parameter.", "Shows a useful missing-state message."],
    hint: "The browser route and the deploy fallback solve different parts of the same problem.",
    completionMessage: "Passages stable. Your routes can now survive a refresh."
  },
  {
    id: "code-accessibility-ward",
    subject: "coding",
    title: "Accessibility Ward",
    shortDescription: "Harden keyboard, labels, reduced motion, and progress semantics.",
    learningObjective: "Apply practical accessibility rules to interactive learning UI.",
    difficulty: "advanced",
    estimatedMinutes: 55,
    rewards: { xp: 300, assassin: 34, bruiser: 12, mage: 38 },
    unlocksFrom: "code-router-passages",
    taskPrompt: "Audit a mission workspace and add labels, focus states, aria progress values, and reduced-motion-safe transitions.",
    successCriteria: ["All actions work from keyboard.", "Progress and meters expose accessible values."],
    hint: "Start with native buttons and links, then add ARIA only where semantics need it.",
    completionMessage: "Ward active. Your platform now respects more players and more devices."
  },
  {
    id: "code-api-scout",
    subject: "coding",
    title: "API Scout",
    shortDescription: "Fetch mission data and handle loading, success, and error states.",
    learningObjective: "Model asynchronous UI states clearly and recover from failures.",
    difficulty: "advanced",
    estimatedMinutes: 60,
    rewards: { xp: 320, assassin: 36, bruiser: 14, mage: 40 },
    unlocksFrom: "code-accessibility-ward",
    taskPrompt: "Mock a mission fetch and render loading, loaded, empty, and error panels with retry behavior.",
    successCriteria: ["Represents every async state.", "Offers a clear retry path after failure."],
    hint: "A small status state is easier to reason about than several booleans.",
    completionMessage: "Scout report complete. Your production instincts leveled up."
  },
  {
    id: "code-review-strike-team",
    subject: "coding",
    title: "Review Strike Team",
    shortDescription: "Run a collaborative code review against a mission dashboard component.",
    learningObjective: "Split review ownership across accessibility, state logic, and UI resilience.",
    difficulty: "advanced",
    estimatedMinutes: 50,
    rewards: { xp: 350, assassin: 46, bruiser: 16, mage: 36 },
    mode: "collaborative",
    teamRequirement: { assassin: 2, bruiser: 1, mage: 2 },
    unlocksFrom: "code-accessibility-ward",
    taskPrompt: "Review a dashboard component as a party. Identify three risks, propose fixes, and agree on a final patch plan.",
    successCriteria: ["Finds concrete code-level risks.", "Covers accessibility and data-state behavior.", "Produces a prioritized patch plan."],
    hint: "Good review notes describe the user-visible failure, not only the code smell.",
    completionMessage: "Strike team complete. Your party converted review discipline into real product quality."
  },
  {
    id: "code-debug-dungeon",
    subject: "coding",
    title: "Debug Dungeon",
    shortDescription: "Work as a team to isolate a route, state, and rendering bug.",
    learningObjective: "Practice hypothesis-driven debugging with clear team communication.",
    difficulty: "intermediate",
    estimatedMinutes: 45,
    rewards: { xp: 300, assassin: 38, bruiser: 18, mage: 34 },
    mode: "collaborative",
    teamRequirement: { assassin: 1, bruiser: 1, mage: 3 },
    unlocksFrom: "code-router-passages",
    taskPrompt: "A mission route loads the wrong data after navigation. Assign roles for reproduction, route tracing, state inspection, and fix verification.",
    successCriteria: ["Writes reliable reproduction steps.", "Identifies the failing state or route assumption.", "Verifies the fix after navigation and refresh."],
    hint: "Reproduce first, inspect second, patch third.",
    completionMessage: "Dungeon cleared. Your team debugged with structure instead of guesswork."
  }
];

export const completedMissionIds = ["math-logarithm-dragon", "physics-vector-scout", "code-html-signal"];

export const subjectLabels: Record<Subject, string> = {
  coding: "Coding",
  maths: "Maths",
  physics: "Physics"
};

export const getMissionById = (id?: string) => missions.find((mission) => mission.id === id);

export const getRewardsTotal = (ids = completedMissionIds) =>
  missions
    .filter((mission) => ids.includes(mission.id))
    .reduce(
      (total, mission) => ({
        xp: total.xp + mission.rewards.xp,
        assassin: total.assassin + mission.rewards.assassin,
        bruiser: total.bruiser + mission.rewards.bruiser,
        mage: total.mage + mission.rewards.mage
      }),
      { xp: 0, assassin: 0, bruiser: 0, mage: 0 }
    );

export const getClassFromRewards = (rewards: Rewards) => {
  const attributes = [
    { key: "assassin", label: "Assassin" },
    { key: "bruiser", label: "Bruiser" },
    { key: "mage", label: "Mage" }
  ] as const;

  return attributes.reduce((top, item) => (rewards[item.key] > rewards[top.key] ? item : top), attributes[0]);
};
