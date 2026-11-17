/**
 * Official & Standard Tamil Nadu State Board Class 11 Higher-Secondary Subject Combinations
 * Note: Subject groups are structured into Part I (Language), Part II (English),
 * and Part III (Four Core Elective Subjects).
 * 
 * Combinations marked as 'Pending Official School Verification' represent specialised
 * or vocational groups that may vary by district and school infrastructure.
 */

export const TN_STREAMS_DATA = [
  {
    id: "group-2502",
    code: "Group 2502",
    name: "Mathematics & Biology (Bio-Maths)",
    category: "STEM",
    categoryLabel: "Science & Mathematics",
    verificationStatus: "Verified TN DGE Standard Group",
    officialStatus: "Official Standard Group",
    shortDescription: "Rigorous scientific foundation combining physical, biological, and mathematical disciplines.",
    fullDescription: "Group 2502 is one of the most widely chosen higher-secondary combinations in Tamil Nadu State Board schools. It prepares students with comprehensive analytical depth across physical sciences, life systems, and higher mathematics, requiring sustained laboratory and theoretical stamina.",
    part3Subjects: [
      {
        name: "Physics",
        code: "PHY",
        hoursPerWeek: 6,
        hasPractical: true,
        description: "Mechanics, properties of matter, thermodynamics, optics, electrostatics, magnetism, and modern physics with weekly laboratory experiments."
      },
      {
        name: "Chemistry",
        code: "CHE",
        hoursPerWeek: 6,
        hasPractical: true,
        description: "Inorganic compounds, atomic structure, chemical thermodynamics, organic reaction mechanisms, and practical qualitative titration analysis."
      },
      {
        name: "Biology",
        code: "BIO",
        hoursPerWeek: 6,
        hasPractical: true,
        description: "Living world taxonomy, plant anatomy, cell biology, human physiology, genetics, and biological microscopic laboratory slide preparation."
      },
      {
        name: "Mathematics",
        code: "MAT",
        hoursPerWeek: 7,
        hasPractical: false,
        description: "Matrices and determinants, trigonometry, two-dimensional analytical geometry, differential and integral calculus, and probability distributions."
      }
    ],
    idealProfile: {
      minAcademicScore: 70,
      prioritySubjects: ["Science", "Mathematics"],
      keyAptitudes: ["numerical", "logical", "spatial"],
      keyInterests: ["physicalScience", "biologicalScience", "mathematics"],
      keyEfficacy: ["labInquiry", "mathResilience"]
    },
    schoolAvailability: "Widely available in almost all Government, Government-Aided, and Private Higher Secondary Schools across Tamil Nadu.",
    infrastructureRequirements: "Equipped Physics, Chemistry, and Biology laboratories with certified science laboratory assistants.",
    syllabusIntensity: "High",
    advisoryNote: "Demands balanced workload management between intensive mathematical problem-solving and memorisation of biological classification."
  },
  {
    id: "group-2503",
    code: "Group 2503",
    name: "Computer Science & Mathematics (Comp-Maths)",
    category: "STEM",
    categoryLabel: "Engineering & Computing",
    verificationStatus: "Verified TN DGE Standard Group",
    officialStatus: "Official Standard Group",
    shortDescription: "Technological and quantitative stream focusing on computing principles and mathematical modelling.",
    fullDescription: "Group 2503 is tailored for students who have strong quantitative and logical inclinations and wish to study algorithmic thinking and computer software architecture alongside pure mathematics, physics, and chemistry.",
    part3Subjects: [
      {
        name: "Physics",
        code: "PHY",
        hoursPerWeek: 6,
        hasPractical: true,
        description: "Classical mechanics, wave motion, thermodynamics, electronics, and digital semiconductor physics."
      },
      {
        name: "Chemistry",
        code: "CHE",
        hoursPerWeek: 6,
        hasPractical: true,
        description: "Physical, organic, and inorganic chemistry concepts with applied stoichiometric calculations."
      },
      {
        name: "Computer Science",
        code: "CSC",
        hoursPerWeek: 6,
        hasPractical: true,
        description: "Computer fundamentals, algorithmic problem solving, object-oriented programming in C++, control structures, and computer lab hands-on coding."
      },
      {
        name: "Mathematics",
        code: "MAT",
        hoursPerWeek: 7,
        hasPractical: false,
        description: "Rigorous higher-secondary calculus, vector algebra, mathematical logic, and analytical coordinate geometry."
      }
    ],
    idealProfile: {
      minAcademicScore: 70,
      prioritySubjects: ["Mathematics", "Science"],
      keyAptitudes: ["logical", "numerical", "problemSolving"],
      keyInterests: ["technology", "mathematics", "physicalScience"],
      keyEfficacy: ["mathResilience", "problemSolving"]
    },
    schoolAvailability: "Offered in most major urban and semi-urban Higher Secondary Schools; seats in government schools are subject to computer lab terminal quota.",
    infrastructureRequirements: "Functional computer laboratory with networking, compilers, and dedicated computer science faculty.",
    syllabusIntensity: "High",
    advisoryNote: "Requires high algorithmic curiosity. Does not include biology, making it unsuitable if biological or agricultural sciences are of interest."
  },
  {
    id: "group-2501",
    code: "Group 2501",
    name: "Pure Science (Physics, Chemistry, Botany, Zoology)",
    category: "STEM",
    categoryLabel: "Natural & Life Sciences",
    verificationStatus: "Verified TN DGE Standard Group",
    officialStatus: "Official Standard Group",
    shortDescription: "Deep biological and natural science focus without higher-secondary pure mathematics.",
    fullDescription: "Group 2501 offers deep, comprehensive exposure to natural and life sciences. By separating Biology into dedicated Botany and Zoology disciplines, it allows students to focus entirely on physical and natural phenomena without the weight of advanced mathematics.",
    part3Subjects: [
      {
        name: "Physics",
        code: "PHY",
        hoursPerWeek: 6,
        hasPractical: true,
        description: "Physical principles, mechanics, heat, light, and electricity with practical lab sessions."
      },
      {
        name: "Chemistry",
        code: "CHE",
        hoursPerWeek: 6,
        hasPractical: true,
        description: "Chemical bonding, equilibrium, organic families, and laboratory qualitative salt analysis."
      },
      {
        name: "Botany",
        code: "BOT",
        hoursPerWeek: 6,
        hasPractical: true,
        description: "Plant diversity, morphology, anatomy of flowering plants, plant physiology, and herbarium preparation."
      },
      {
        name: "Zoology",
        code: "ZOO",
        hoursPerWeek: 6,
        hasPractical: true,
        description: "Animal kingdom classification, human body organ systems, immunology, ecology, and microscopic specimen observation."
      }
    ],
    idealProfile: {
      minAcademicScore: 65,
      prioritySubjects: ["Science"],
      keyAptitudes: ["verbal", "spatial", "logical"],
      keyInterests: ["biologicalScience", "physicalScience"],
      keyEfficacy: ["labInquiry", "studyStamina"]
    },
    schoolAvailability: "Available in most Government and Government-Aided Schools with established natural science departments.",
    infrastructureRequirements: "Separate botanical and zoological specimen collections, microscopes, and chemical laboratories.",
    syllabusIntensity: "Moderate to High",
    advisoryNote: "Replaces Mathematics with separate Botany and Zoology subjects. Ideal for students with strong memorisation and natural science inquiry."
  },
  {
    id: "group-2702",
    code: "Group 2702",
    name: "Commerce & Business Mathematics",
    category: "Commerce",
    categoryLabel: "Commerce & Financial Quantitative",
    verificationStatus: "Verified TN DGE Standard Group",
    officialStatus: "Official Standard Group",
    shortDescription: "Commercial principles and financial management paired with applied business statistics.",
    fullDescription: "Group 2702 combines commercial transaction knowledge, double-entry bookkeeping, and economic theory with applied business mathematics and operational statistics.",
    part3Subjects: [
      {
        name: "Commerce",
        code: "COM",
        hoursPerWeek: 6,
        hasPractical: false,
        description: "Forms of business organisations, joint stock companies, banking, insurance, transportation, and consumer protection."
      },
      {
        name: "Accountancy",
        code: "ACC",
        hoursPerWeek: 7,
        hasPractical: false,
        description: "Double entry accounting principles, ledger posting, trial balance, depreciation, bills of exchange, and final accounts preparation."
      },
      {
        name: "Economics",
        code: "ECO",
        hoursPerWeek: 6,
        hasPractical: false,
        description: "Microeconomics, consumption, production, market structures, Indian economic development, and Tamil Nadu economic history."
      },
      {
        name: "Business Mathematics & Statistics",
        code: "BMS",
        hoursPerWeek: 6,
        hasPractical: false,
        description: "Applications of matrices, financial mathematics (compound interest, annuities), linear programming, correlation, and index numbers."
      }
    ],
    idealProfile: {
      minAcademicScore: 60,
      prioritySubjects: ["Mathematics", "Social Science"],
      keyAptitudes: ["numerical", "logical", "problemSolving"],
      keyInterests: ["businessCommerce", "mathematics"],
      keyEfficacy: ["mathResilience", "problemSolving"]
    },
    schoolAvailability: "Common across Government, Aided, and Matriculation schools statewide.",
    infrastructureRequirements: "Standard classroom environment; no laboratory required.",
    syllabusIntensity: "Moderate",
    advisoryNote: "Business Mathematics requires consistent numerical practice. Students who struggle with math should consider Commerce with Computer Applications."
  },
  {
    id: "group-2708",
    code: "Group 2708",
    name: "Commerce & Computer Applications",
    category: "Commerce",
    categoryLabel: "Commerce & Applied Computing",
    verificationStatus: "Verified TN DGE Standard Group",
    officialStatus: "Official Standard Group",
    shortDescription: "Modern commercial principles combined with business software and spreadsheet accounting.",
    fullDescription: "Group 2708 integrates core trade and financial accounting with practical computer application software, desktop publishing, and database tools for contemporary business environments.",
    part3Subjects: [
      {
        name: "Commerce",
        code: "COM",
        hoursPerWeek: 6,
        hasPractical: false,
        description: "Commercial operations, trade channels, e-commerce, banking services, and financial institutions."
      },
      {
        name: "Accountancy",
        code: "ACC",
        hoursPerWeek: 7,
        hasPractical: false,
        description: "Principles of financial accounting, cash books, bank reconciliation statements, and non-profit accounting."
      },
      {
        name: "Economics",
        code: "ECO",
        hoursPerWeek: 6,
        hasPractical: false,
        description: "Economic theory, national income, fiscal policy, rural economy, and Tamil Nadu industrial landscape."
      },
      {
        name: "Computer Applications",
        code: "CAP",
        hoursPerWeek: 6,
        hasPractical: true,
        description: "Computer basics, word processing, spreadsheet financial modelling, presentation tools, HTML basics, and database management."
      }
    ],
    idealProfile: {
      minAcademicScore: 55,
      prioritySubjects: ["Social Science", "English"],
      keyAptitudes: ["logical", "verbal", "problemSolving"],
      keyInterests: ["businessCommerce", "technology"],
      keyEfficacy: ["problemSolving", "communication"]
    },
    schoolAvailability: "Highly popular and widely available; lab capacity may limit seat counts in some schools.",
    infrastructureRequirements: "Computer laboratory equipped with spreadsheet and database software.",
    syllabusIntensity: "Moderate",
    advisoryNote: "Replaces Business Mathematics with hands-on Computer Applications. Excellent choice for commerce without higher-level algebraic equations."
  },
  {
    id: "group-2801",
    code: "Group 2801",
    name: "Arts & Humanities (History, Geography, Economics, Pol. Science)",
    category: "Humanities",
    categoryLabel: "Social Sciences & Humanities",
    verificationStatus: "Verified TN DGE Standard Group",
    officialStatus: "Official Standard Group",
    shortDescription: "Comprehensive inquiry into human society, historical transformations, governance, and geography.",
    fullDescription: "Group 2801 is dedicated to understanding human civilization, geographical systems, economic policies, and political structures. It fosters deep critical thinking, textual analysis, and civic awareness.",
    part3Subjects: [
      {
        name: "History",
        code: "HIS",
        hoursPerWeek: 6,
        hasPractical: false,
        description: "Ancient, medieval, and modern Indian history, world history milestones, social reform movements in Tamil Nadu, and heritage studies."
      },
      {
        name: "Geography",
        code: "GEO",
        hoursPerWeek: 6,
        hasPractical: true,
        description: "Physical geography, geomorphology, climate systems, human settlements, map reading, and Tamil Nadu regional resource distribution."
      },
      {
        name: "Economics",
        code: "ECO",
        hoursPerWeek: 6,
        hasPractical: false,
        description: "Principles of economics, macroeconomic indicators, development challenges, and public finance."
      },
      {
        name: "Political Science",
        code: "POL",
        hoursPerWeek: 6,
        hasPractical: false,
        description: "Political concepts, the Constitution of India, organs of state government, local administration in Tamil Nadu, and international relations."
      }
    ],
    idealProfile: {
      minAcademicScore: 50,
      prioritySubjects: ["Social Science", "Language", "English"],
      keyAptitudes: ["verbal", "logical"],
      keyInterests: ["socialScience", "creativeArts"],
      keyEfficacy: ["communication", "studyStamina"]
    },
    schoolAvailability: "Standard offering in almost all Government Higher Secondary Schools across Tamil Nadu.",
    infrastructureRequirements: "Standard classroom with geography maps and reference library.",
    syllabusIntensity: "Moderate",
    advisoryNote: "Heavy reading and descriptive essay writing required. Well suited for students who love history, reading, and public administration."
  },
  {
    id: "group-2901",
    code: "Group 2901 (Example)",
    name: "Vocational Stream: Basic Electrical & Electronics",
    category: "Vocational",
    categoryLabel: "Applied Vocational Engineering",
    verificationStatus: "Pending Official School Verification",
    officialStatus: "Example Subject Combination (Pending School Verification)",
    shortDescription: "Hands-on vocational foundation focusing on practical electrical and electronic workshop skills.",
    fullDescription: "Vocational groups in Tamil Nadu provide skill-oriented training alongside foundational academic subjects. Availability varies by school district and government vocational skill centers.",
    part3Subjects: [
      {
        name: "Physics (Theory & Practical)",
        code: "PHY-V",
        hoursPerWeek: 5,
        hasPractical: true,
        description: "Fundamental physics with emphasis on circuit theory, electromagnetic induction, and current electricity."
      },
      {
        name: "Basic Electrical Engineering",
        code: "BEE",
        hoursPerWeek: 7,
        hasPractical: true,
        description: "Electrical machines, house wiring, maintenance of transformers, safety measures, and motor winding."
      },
      {
        name: "Basic Electronics Engineering",
        code: "BEN",
        hoursPerWeek: 7,
        hasPractical: true,
        description: "Semiconductor diodes, transistors, power supplies, domestic audio equipment repair, and circuit fabrication."
      },
      {
        name: "Vocational Practical Workshop",
        code: "VPW",
        hoursPerWeek: 6,
        hasPractical: true,
        description: "Practical wiring exercises, soldering, multimeters, troubleshooting appliance faults, and industrial workshop safety."
      }
    ],
    idealProfile: {
      minAcademicScore: 45,
      prioritySubjects: ["Science", "Mathematics"],
      keyAptitudes: ["spatial", "problemSolving"],
      keyInterests: ["technology", "physicalScience"],
      keyEfficacy: ["labInquiry", "problemSolving"]
    },
    schoolAvailability: "Offered in designated Government Higher Secondary Schools with sanctioned vocational wings.",
    infrastructureRequirements: "Dedicated electrical workshop, testing panels, and certified vocational instructors.",
    syllabusIntensity: "Practical-Oriented",
    advisoryNote: "Subject to local school district offering. Please confirm with your school headmaster or local chief educational officer (CEO)."
  }
];
