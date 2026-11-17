/**
 * Clearly Labelled Illustrative Sample Student Data Profiles
 * For demonstration, testing, and college viva evaluation purposes only.
 * These profiles do NOT represent real individuals or live student databases.
 */

export const SAMPLE_PROFILES = [
  {
    id: "sample-bio-maths",
    name: "Selvan M. (Sample: STEM / Bio-Maths Aspirant)",
    badge: "Illustrative Sample Profile: Science Oriented",
    description: "High marks in Science and Mathematics with deep curiosity in biological taxonomy and clinical research, alongside active school science exhibition participation.",
    profileData: {
      studentName: "Selvan M.",
      classLevel: "Class 10 (SSLC)",
      academicYear: "2025–2026",
      board: "Tamil Nadu State Board of School Examinations",
      medium: "English",
      schoolType: "Government-Aided Higher Secondary School",
      marks: {
        tamil: 82,
        english: 85,
        maths: 91,
        science: 94,
        social: 84
      },
      aptitudeAnswers: {
        "apt-num-1": "B", // Correct (48 km/h)
        "apt-num-2": "A", // Correct (159)
        "apt-log-1": "A", // Correct
        "apt-log-2": "D", // Correct
        "apt-ver-1": "A", // Correct
        "apt-ver-2": "A", // Correct
        "apt-spa-1": "B", // Correct
        "apt-spa-2": "A", // Correct
        "apt-prob-1": "B",// Correct
        "apt-prob-2": "C" // Correct
      },
      interestRatings: {
        mathematics: 5,
        physicalScience: 5,
        biologicalScience: 5,
        technology: 3,
        businessCommerce: 2,
        socialScience: 3,
        creativeArts: 2
      },
      selfEfficacyRatings: {
        mathResilience: 4,
        labInquiry: 5,
        communication: 4,
        problemSolving: 5
      },
      exposureActivities: [
        { id: "exp-sci-1", depth: "Winner / Leader" },
        { id: "exp-sci-2", depth: "Active Member" },
        { id: "exp-soc-1", depth: "Active Member" }
      ]
    }
  },
  {
    id: "sample-commerce-analytics",
    name: "Kavitha S. (Sample: Commerce & Analytics Focus)",
    badge: "Illustrative Sample Profile: Commerce Oriented",
    description: "Strong quantitative agility paired with keen interest in financial transactions, trade, economics, and business computing. Demonstrates moderate interest in lab sciences.",
    profileData: {
      studentName: "Kavitha S.",
      classLevel: "Class 10 (SSLC)",
      academicYear: "2025–2026",
      board: "Tamil Nadu State Board of School Examinations",
      medium: "English",
      schoolType: "Matriculation / Private School",
      marks: {
        tamil: 78,
        english: 86,
        maths: 88,
        science: 68,
        social: 92
      },
      aptitudeAnswers: {
        "apt-num-1": "B", // Correct
        "apt-num-2": "A", // Correct
        "apt-log-1": "A", // Correct
        "apt-log-2": "B",
        "apt-ver-1": "A", // Correct
        "apt-ver-2": "A", // Correct
        "apt-spa-1": "B",
        "apt-spa-2": "C",
        "apt-prob-1": "B",// Correct
        "apt-prob-2": "C" // Correct
      },
      interestRatings: {
        mathematics: 4,
        physicalScience: 2,
        biologicalScience: 2,
        technology: 4,
        businessCommerce: 5,
        socialScience: 5,
        creativeArts: 3
      },
      selfEfficacyRatings: {
        mathResilience: 4,
        labInquiry: 2,
        communication: 5,
        problemSolving: 4
      },
      exposureActivities: [
        { id: "exp-comm-1", depth: "Winner / Leader" },
        { id: "exp-comm-2", depth: "Active Member" },
        { id: "exp-tech-1", depth: "Active Member" },
        { id: "exp-soc-2", depth: "Active Member" }
      ]
    }
  },
  {
    id: "sample-humanities-creative",
    name: "Dinesh R. (Sample: Arts, Civics & Literary)",
    badge: "Illustrative Sample Profile: Humanities Oriented",
    description: "Exceptional verbal articulation and passion for historical development, public administration, and Tamil literature, but experiences difficulty with advanced mathematical abstraction.",
    profileData: {
      studentName: "Dinesh R.",
      classLevel: "Class 10 (SSLC)",
      academicYear: "2025–2026",
      board: "Tamil Nadu State Board of School Examinations",
      medium: "Tamil",
      schoolType: "Government Higher Secondary School",
      marks: {
        tamil: 94,
        english: 88,
        maths: 48,
        science: 62,
        social: 91
      },
      aptitudeAnswers: {
        "apt-num-1": "A",
        "apt-num-2": "B",
        "apt-log-1": "A", // Correct
        "apt-log-2": "D", // Correct
        "apt-ver-1": "A", // Correct
        "apt-ver-2": "A", // Correct
        "apt-spa-1": "C",
        "apt-spa-2": "A", // Correct
        "apt-prob-1": "B",// Correct
        "apt-prob-2": "B"
      },
      interestRatings: {
        mathematics: 1,
        physicalScience: 2,
        biologicalScience: 3,
        technology: 2,
        businessCommerce: 3,
        socialScience: 5,
        creativeArts: 5
      },
      selfEfficacyRatings: {
        mathResilience: 2,
        labInquiry: 3,
        communication: 5,
        problemSolving: 4
      },
      exposureActivities: [
        { id: "exp-soc-1", depth: "Active Member" },
        { id: "exp-soc-2", depth: "Winner / Leader" },
        { id: "exp-proj-1", depth: "Winner / Leader" }
      ]
    }
  }
];

export const EMPTY_PROFILE = {
  studentName: "",
  classLevel: "Class 10 (SSLC)",
  academicYear: "2025–2026",
  board: "Tamil Nadu State Board of School Examinations",
  medium: "English",
  schoolType: "Government Higher Secondary School",
  marks: {
    tamil: "",
    english: "",
    maths: "",
    science: "",
    social: ""
  },
  aptitudeAnswers: {},
  interestRatings: {
    mathematics: 3,
    physicalScience: 3,
    biologicalScience: 3,
    technology: 3,
    businessCommerce: 3,
    socialScience: 3,
    creativeArts: 3
  },
  selfEfficacyRatings: {
    mathResilience: 3,
    labInquiry: 3,
    communication: 3,
    problemSolving: 3
  },
  exposureActivities: []
};
