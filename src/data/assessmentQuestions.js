/**
 * Multi-Dimensional Assessment Data:
 * 1. Aptitude Questions (Numerical, Logical, Verbal, Spatial, Problem Solving)
 * 2. Interest Domains (7 Core Academic Pillars)
 * 3. Self-Efficacy Items (4 Confidence Dimensions)
 * 4. Learning Exposure Activities (5 Experiential Categories)
 */

export const APTITUDE_QUESTIONS = [
  {
    id: "apt-num-1",
    domain: "numerical",
    domainLabel: "Numerical Reasoning",
    question: "A bus travels from Madurai to Trichy at 60 km/h and returns along the same route at 40 km/h. What is the average speed for the whole round trip?",
    options: [
      { id: "A", text: "50 km/h" },
      { id: "B", text: "48 km/h", isKey: true },
      { id: "C", text: "52 km/h" },
      { id: "D", text: "45 km/h" }
    ],
    explanation: "Harmonic mean: 2 * (60 * 40) / (60 + 40) = 4800 / 100 = 48 km/h."
  },
  {
    id: "apt-num-2",
    domain: "numerical",
    domainLabel: "Numerical Reasoning",
    question: "Identify the next number in the sequence: 4, 9, 19, 39, 79, ...",
    options: [
      { id: "A", text: "159", isKey: true },
      { id: "B", text: "149" },
      { id: "C", text: "169" },
      { id: "D", text: "158" }
    ],
    explanation: "Each number is multiplied by 2 and then 1 is added: (79 * 2) + 1 = 159."
  },
  {
    id: "apt-log-1",
    domain: "logical",
    domainLabel: "Logical Reasoning",
    question: "Statements: All metals conduct electricity. Mercury is a liquid metal. Conclusion: Can mercury conduct electricity?",
    options: [
      { id: "A", text: "Definitely Yes", isKey: true },
      { id: "B", text: "Definitely No" },
      { id: "C", text: "Only when solidified" },
      { id: "D", text: "Cannot be determined" }
    ],
    explanation: "Since all metals conduct electricity and Mercury is classified as a metal, Mercury definitely conducts electricity."
  },
  {
    id: "apt-log-2",
    domain: "logical",
    domainLabel: "Logical Reasoning",
    question: "If 'POND' is coded as 'RSTL', how is 'HEAR' coded under the same rule?",
    options: [
      { id: "A", text: "JGDT" },
      { id: "B", text: "JICV" },
      { id: "C", text: "JHCX" },
      { id: "D", text: "JICU", isKey: true }
    ],
    explanation: "Each letter shifts progressively: P(+2)=R, O(+4)=S, N(+6)=T, D(+8)=L. Following the rule for HEAR yields JICU."
  },
  {
    id: "apt-ver-1",
    domain: "verbal",
    domainLabel: "Verbal Reasoning",
    question: "Choose the word that has the closest relationship: 'Telescope is to Astronomer' as 'Microscope is to ______'",
    options: [
      { id: "A", text: "Botanist / Biologist", isKey: true },
      { id: "B", text: "Cartographer" },
      { id: "C", text: "Economist" },
      { id: "D", text: "Archaeologist" }
    ],
    explanation: "An astronomer uses a telescope to observe celestial bodies; a biologist or botanist uses a microscope to observe cellular specimens."
  },
  {
    id: "apt-ver-2",
    domain: "verbal",
    domainLabel: "Verbal Reasoning",
    question: "Select the sentence that most accurately expresses cause and effect without logical ambiguity:",
    options: [
      { id: "A", text: "Because the monsoon failed, the groundwater level depleted and farmers suffered crop losses.", isKey: true },
      { id: "B", text: "The groundwater depleted because farmers suffered crop losses even though monsoon failed." },
      { id: "C", text: "Crop losses caused the monsoon to fail and water levels depleted." },
      { id: "D", text: "Although the groundwater depleted, crop losses caused monsoon failure." }
    ],
    explanation: "Option A provides the correct chronological and ecological causality: monsoon failure leads to depletion of groundwater, leading to crop loss."
  },
  {
    id: "apt-spa-1",
    domain: "spatial",
    domainLabel: "Spatial Reasoning",
    question: "If a flat sheet with a standard cross-net pattern is folded into a cube, which faces will always end up directly opposite to one another?",
    options: [
      { id: "A", text: "Adjacent faces on the same arm" },
      { id: "B", text: "Faces separated by exactly one intervening face on the same row", isKey: true },
      { id: "C", text: "Corner corner-connected diagonal faces" },
      { id: "D", text: "Faces on opposite edges of the sheet" }
    ],
    explanation: "In standard net-to-cube folds, faces separated by one square become opposing parallel faces."
  },
  {
    id: "apt-spa-2",
    domain: "spatial",
    domainLabel: "Spatial Reasoning",
    question: "Mentally rotate a clock showing 3:00 by 90 degrees counter-clockwise. What time appearance do the hands now most closely resemble?",
    options: [
      { id: "A", text: "12:45", isKey: true },
      { id: "B", text: "6:15" },
      { id: "C", text: "9:00" },
      { id: "D", text: "1:30" }
    ],
    explanation: "Rotating 90 degrees counter-clockwise moves the hour hand (at 3) to 12, and the minute hand (at 12) to 9, resembling 12:45."
  },
  {
    id: "apt-prob-1",
    domain: "problemSolving",
    domainLabel: "Problem Solving",
    question: "A village pond experiences an invasive aquatic weed that doubles in surface coverage every single day. If the pond is completely covered on Day 30, on which day was the pond exactly half covered?",
    options: [
      { id: "A", text: "Day 15" },
      { id: "B", text: "Day 29", isKey: true },
      { id: "C", text: "Day 28" },
      { id: "D", text: "Day 20" }
    ],
    explanation: "Because it doubles every day, one day before full coverage (Day 30 - 1 = Day 29), it must have been exactly half covered."
  },
  {
    id: "apt-prob-2",
    domain: "problemSolving",
    domainLabel: "Problem Solving",
    question: "In a class science project, 3 students can assemble 6 solar car models in 2 days. Working at the same rate, how many solar car models can 6 students assemble in 4 days?",
    options: [
      { id: "A", text: "12 models" },
      { id: "B", text: "18 models" },
      { id: "C", text: "24 models", isKey: true },
      { id: "D", text: "30 models" }
    ],
    explanation: "Work = Rate * Students * Days. 3 students in 2 days = 6 student-days for 6 models (1 model per student-day). 6 students in 4 days = 24 student-days = 24 models."
  }
];

export const INTEREST_DOMAINS = [
  {
    id: "mathematics",
    label: "Mathematics & Analytical Thinking",
    shortTitle: "Mathematics",
    description: "Enjoyment in solving numerical problems, discovering algebraic patterns, geometry, and puzzles.",
    exampleActivities: "Solving math olympiad puzzles, analyzing charts, calculating probability in board games."
  },
  {
    id: "physicalScience",
    label: "Physical Sciences (Physics & Chemistry)",
    shortTitle: "Physical Science",
    description: "Curiosity regarding natural physical laws, mechanics, electricity, atoms, chemical reactions, and properties of matter.",
    exampleActivities: "Observing celestial bodies, experimenting with optics, understanding how engines and batteries work."
  },
  {
    id: "biologicalScience",
    label: "Biological & Life Sciences",
    shortTitle: "Life Sciences",
    description: "Fascination with living organisms, human anatomy, plant life, botanical diversity, ecosystems, and genetics.",
    exampleActivities: "Gardening, identifying bird/plant species, learning how medicines cure illnesses, dissecting flowers."
  },
  {
    id: "technology",
    label: "Technology, Computing & Coding",
    shortTitle: "Technology",
    description: "Interest in computer software, hardware, writing programs, mobile technology, algorithms, and digital tools.",
    exampleActivities: "Writing simple programs (Scratch/Python), exploring computer hardware, setting up digital software."
  },
  {
    id: "businessCommerce",
    label: "Business, Commerce & Economics",
    shortTitle: "Commerce & Trade",
    description: "Curiosity regarding market operations, trade, money management, entrepreneurship, corporate banking, and budgeting.",
    exampleActivities: "Calculating trade profit margins, tracking family savings, reading business news, planning events within a budget."
  },
  {
    id: "socialScience",
    label: "Social Sciences, History & Civics",
    shortTitle: "Social Science",
    description: "Interest in historical events, democratic systems, constitution, geography, cultural heritage, and societal policies.",
    exampleActivities: "Reading historical novels, debating civic issues, studying maps and geographical climates, visiting monuments."
  },
  {
    id: "creativeArts",
    label: "Creative, Linguistic & Applied Arts",
    shortTitle: "Arts & Expression",
    description: "Desire to express ideas through writing, speaking, sketching, visual design, and literary discussion.",
    exampleActivities: "Writing Tamil/English poems, elocution competitions, drawing diagrams, designing school magazines."
  }
];

export const SELF_EFFICACY_PILLARS = [
  {
    id: "mathResilience",
    label: "Mathematics & Quantitative Confidence",
    dimension: "Quantitative Problem-Solving",
    prompt: "How confident are you in working through challenging, multi-step math problems without giving up when you do not get the answer on the first attempt?",
    lowAnchor: "High anxiety; get easily frustrated",
    highAnchor: "Strong persistence; confident in finding the solution"
  },
  {
    id: "labInquiry",
    label: "Laboratory & Scientific Inquiry Confidence",
    dimension: "Experimental & Science Rigor",
    prompt: "How confident do you feel conducting physical science experiments, memorising scientific terminology, and understanding diagrams in textbooks?",
    lowAnchor: "Find lab work and science terms overwhelming",
    highAnchor: "Comfortable with apparatus, procedures, and scientific names"
  },
  {
    id: "communication",
    label: "Communication, Reading & Writing Confidence",
    dimension: "Linguistic & Essay Articulation",
    prompt: "How confident are you in reading lengthy textbook chapters, articulating ideas in long-form essays, and presenting viewpoints in class?",
    lowAnchor: "Struggle with long essays and public speaking",
    highAnchor: "Confident in writing comprehensive, structured answers"
  },
  {
    id: "problemSolving",
    label: "Independent Problem-Solving & Syllabus Stamina",
    dimension: "Self-Regulated Learning",
    prompt: "How confident are you in studying independently, managing large syllabi with daily revision, and seeking help when encountering difficult topics?",
    lowAnchor: "Need constant supervision and easily procrastinate",
    highAnchor: "Self-disciplined and able to plan daily study independently"
  }
];

export const LEARNING_EXPOSURE_ACTIVITIES = [
  {
    id: "exp-sci-1",
    category: "science",
    categoryLabel: "Science Activities",
    title: "School Science Exhibition / Fair",
    description: "Built a working model, chart, or experiment for school science day or INSPIRE award."
  },
  {
    id: "exp-sci-2",
    category: "science",
    categoryLabel: "Science Activities",
    title: "Science Club & Nature Camps",
    description: "Participated in eco-club tree plantation, bird watching, or science quiz contests."
  },
  {
    id: "exp-tech-1",
    category: "technology",
    categoryLabel: "Technology Activities",
    title: "Computer Lab Practice & Coding",
    description: "Created simple code, formatted documents, or typed school reports in the computer lab."
  },
  {
    id: "exp-tech-2",
    category: "technology",
    categoryLabel: "Technology Activities",
    title: "Electronics or Mechanical DIY",
    description: "Repaired home appliances, tinkered with toys, batteries, solar panels, or Arduino kits."
  },
  {
    id: "exp-comm-1",
    category: "business",
    categoryLabel: "Business Activities",
    title: "School Stall or Event Budgeting",
    description: "Managed cash, kept record of expenses, or sold handmade crafts at a school fair."
  },
  {
    id: "exp-comm-2",
    category: "business",
    categoryLabel: "Business Activities",
    title: "Family Trade / Small Business Assistance",
    description: "Helped calculate bill totals, maintain inventory, or observe retail customer dealings."
  },
  {
    id: "exp-soc-1",
    category: "social",
    categoryLabel: "Social Activities",
    title: "Youth Organisations (NCC / Scouts / NSS / JRC)",
    description: "Participated in discipline drills, community service, health awareness, or relief camps."
  },
  {
    id: "exp-soc-2",
    category: "social",
    categoryLabel: "Social Activities",
    title: "Elocution, Debating & Mock Parliament",
    description: "Spoke in Tamil/English debates, recited poetry, or participated in mock civic councils."
  },
  {
    id: "exp-proj-1",
    category: "creative",
    categoryLabel: "Creative Activities",
    title: "School Magazine / Poster Design",
    description: "Illustrated posters for national days, drew charts for teachers, or contributed articles."
  }
];
