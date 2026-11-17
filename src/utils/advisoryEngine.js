/**
 * Explainable Advisory Engine (Transparent Rule-Based Heuristic Model)
 * 
 * IMPORTANT DISCLAIMER:
 * This module is NOT an opaque machine-learning model or trained neural network.
 * It is a transparent, multi-dimensional academic advisory engine designed to
 * demonstrate explainable decision-support for Tamil Nadu State Board Class 10 students.
 * 
 * It evaluates alignment across 5 dimensions:
 * 1. Academic Performance (SSLC Marks)
 * 2. Aptitude (Cognitive Reasoning)
 * 3. Subject Interests (Intrinsic Curiosity)
 * 4. Academic Self-Efficacy (Confidence & Resilience)
 * 5. Learning Exposure (Experiential Validation)
 */

import { TN_STREAMS_DATA } from "../data/tnStreamsData";
import { APTITUDE_QUESTIONS } from "../data/assessmentQuestions";

/**
 * Evaluates the student's profile across all 5 dimensions and returns
 * explainable recommendations and evidence breakdowns for each stream.
 */
export function evaluateStudentProfile(profile) {
  const { marks = {}, aptitudeAnswers = {}, interestRatings = {}, selfEfficacyRatings = {}, exposureActivities = [] } = profile;

  // 1. Calculate Academic Foundation Scores (0 - 100)
  const mathMark = Number(marks.maths) || 0;
  const scienceMark = Number(marks.science) || 0;
  const socialMark = Number(marks.social) || 0;
  const englishMark = Number(marks.english) || 0;
  const tamilMark = Number(marks.tamil) || 0;
  const totalMarks = mathMark + scienceMark + socialMark + englishMark + tamilMark;
  const percentage = Math.round((totalMarks / 500) * 100) || 0;

  // 2. Calculate Aptitude Scores by Sub-Domain
  const aptitudeScores = {
    numerical: 0,
    logical: 0,
    verbal: 0,
    spatial: 0,
    problemSolving: 0
  };
  const aptitudeCounts = {
    numerical: 0,
    logical: 0,
    verbal: 0,
    spatial: 0,
    problemSolving: 0
  };

  APTITUDE_QUESTIONS.forEach(q => {
    aptitudeCounts[q.domain] += 1;
    const selectedOption = aptitudeAnswers[q.id];
    const correctOption = q.options.find(opt => opt.isKey)?.id;
    if (selectedOption === correctOption) {
      aptitudeScores[q.domain] += 1;
    }
  });

  const aptitudePercentage = {};
  Object.keys(aptitudeScores).forEach(domain => {
    aptitudePercentage[domain] = Math.round((aptitudeScores[domain] / (aptitudeCounts[domain] || 1)) * 100);
  });

  // 3. Evaluate each stream's dimensional alignment
  const evaluatedStreams = TN_STREAMS_DATA.map(stream => {
    const { idealProfile } = stream;

    // Academic dimension score
    let academicSubScore = 0;
    if (idealProfile.prioritySubjects.includes("Mathematics") && idealProfile.prioritySubjects.includes("Science")) {
      academicSubScore = (mathMark * 0.5) + (scienceMark * 0.5);
    } else if (idealProfile.prioritySubjects.includes("Science")) {
      academicSubScore = scienceMark;
    } else if (idealProfile.prioritySubjects.includes("Mathematics") && idealProfile.prioritySubjects.includes("Social Science")) {
      academicSubScore = (mathMark * 0.45) + (socialMark * 0.45) + (englishMark * 0.1);
    } else if (idealProfile.prioritySubjects.includes("Social Science")) {
      academicSubScore = (socialMark * 0.5) + (tamilMark * 0.25) + (englishMark * 0.25);
    } else {
      academicSubScore = (scienceMark * 0.4) + (mathMark * 0.4) + (socialMark * 0.2);
    }

    // Aptitude dimension score
    const relevantAptitudes = idealProfile.keyAptitudes;
    const aptSum = relevantAptitudes.reduce((acc, apt) => acc + (aptitudePercentage[apt] || 0), 0);
    const aptitudeSubScore = Math.round(aptSum / relevantAptitudes.length);

    // Interest dimension score (scale 1-5 to 0-100)
    const relevantInterests = idealProfile.keyInterests;
    const interestSum = relevantInterests.reduce((acc, key) => acc + ((interestRatings[key] || 3) * 20), 0);
    const interestSubScore = Math.round(interestSum / relevantInterests.length);

    // Self-Efficacy dimension score (scale 1-5 to 0-100)
    const relevantEfficacy = idealProfile.keyEfficacy;
    const efficacySum = relevantEfficacy.reduce((acc, key) => acc + ((selfEfficacyRatings[key] || 3) * 20), 0);
    const efficacySubScore = Math.round(efficacySum / relevantEfficacy.length);

    // Exposure dimension score
    let exposureScore = 40; // baseline
    if (stream.category === "STEM") {
      const hasSci = exposureActivities.some(a => a.id.startsWith("exp-sci"));
      const hasTech = exposureActivities.some(a => a.id.startsWith("exp-tech"));
      if (hasSci && hasTech) exposureScore = 95;
      else if (hasSci || hasTech) exposureScore = 75;
    } else if (stream.category === "Commerce") {
      const hasComm = exposureActivities.some(a => a.id.startsWith("exp-comm"));
      if (hasComm) exposureScore = 90;
      else if (exposureActivities.length > 0) exposureScore = 65;
    } else if (stream.category === "Humanities") {
      const hasSoc = exposureActivities.some(a => a.id.startsWith("exp-soc") || a.id.startsWith("exp-proj"));
      if (hasSoc) exposureScore = 90;
      else if (exposureActivities.length > 0) exposureScore = 65;
    } else if (stream.category === "Vocational") {
      const hasTechExp = exposureActivities.some(a => a.id === "exp-tech-2");
      if (hasTechExp) exposureScore = 95;
      else exposureScore = 60;
    }

    // Holistic composite indicator (for sorting, NOT presented as definitive certainty)
    const compositeScore = Math.round(
      (academicSubScore * 0.35) +
      (interestSubScore * 0.25) +
      (efficacySubScore * 0.20) +
      (aptitudeSubScore * 0.12) +
      (exposureScore * 0.08)
    );

    // Qualitative Alignment Tier (Advisory categorization)
    let alignmentTier = "Moderate / Viable Option";
    let tierBadgeClass = "bg-sky-50 text-sky-800 border-sky-200";
    if (compositeScore >= 75 && academicSubScore >= 60 && interestSubScore >= 60) {
      alignmentTier = "Strong Alignment";
      tierBadgeClass = "bg-teal-50 text-teal-800 border-teal-200";
    } else if (compositeScore < 55 || academicSubScore < 45) {
      alignmentTier = "Exploratory / High Effort";
      tierBadgeClass = "bg-amber-50 text-amber-800 border-amber-200";
    }

    // Generate Supporting Evidence across all 5 dimensions
    const supportingEvidence = {
      academic: generateAcademicEvidence(stream, marks, academicSubScore),
      aptitude: generateAptitudeEvidence(stream, aptitudePercentage, aptitudeSubScore),
      interest: generateInterestEvidence(stream, interestRatings),
      selfEfficacy: generateEfficacyEvidence(stream, selfEfficacyRatings),
      exposure: generateExposureEvidence(stream, exposureActivities)
    };

    // Detect Conflicting Evidence
    const conflictingEvidence = detectConflictingEvidence(stream, marks, interestRatings, selfEfficacyRatings, aptitudePercentage);

    // Formulate Exploration Suggestions
    const explorationSuggestions = generateExplorationSuggestions(stream, conflictingEvidence);

    return {
      ...stream,
      compositeScore,
      alignmentTier,
      tierBadgeClass,
      dimensionalScores: {
        academic: Math.round(academicSubScore),
        aptitude: aptitudeSubScore,
        interest: interestSubScore,
        selfEfficacy: efficacySubScore,
        exposure: exposureScore
      },
      supportingEvidence,
      conflictingEvidence,
      explorationSuggestions
    };
  });

  // Sort by composite alignment
  evaluatedStreams.sort((a, b) => b.compositeScore - a.compositeScore);

  // Suggested vs Alternative split
  const suggestedStreams = evaluatedStreams.slice(0, 2);
  const alternativeStreams = evaluatedStreams.slice(2, 5);

  return {
    totalMarks,
    percentage,
    suggestedStreams,
    alternativeStreams,
    allEvaluatedStreams: evaluatedStreams,
    generalLimitations: [
      "This advisory analysis is derived from self-reported survey indicators and Class 10 marks.",
      "The system does not account for individual student perseverance, tutoring support, or local school seat reservation quotas.",
      "No automated system should replace direct guidance from school teachers, parents, and qualified academic counsellors."
    ]
  };
}

/* Helper Natural Language Explainability Generators */

function generateAcademicEvidence(stream, marks, score) {
  if (stream.category === "STEM") {
    if (marks.science >= 80 && marks.maths >= 75) {
      return `Solid foundational marks in Class 10 Science (${marks.science}%) and Mathematics (${marks.maths}%) demonstrate the core competencies required for Tamil Nadu higher-secondary science curricula.`;
    } else if (marks.science >= 65) {
      return `Adequate performance in Science (${marks.science}%) indicates viable potential, though higher-secondary physics and chemistry will require more rigorous daily problem sets.`;
    }
    return `Class 10 Science (${marks.science || 0}%) and Maths (${marks.maths || 0}%) show that significant prerequisite strengthening will be necessary in Class 11.`;
  } else if (stream.category === "Commerce") {
    if (marks.maths >= 70 && marks.social >= 75) {
      return `High quantitative aptitude in Mathematics (${marks.maths}%) coupled with strong Social Science (${marks.social}%) provides an ideal base for Accountancy, Business Maths, and Economics.`;
    }
    return `Social Science marks (${marks.social || 0}%) support comprehension of commercial theory and economic structures.`;
  } else if (stream.category === "Humanities") {
    return `Strong marks in Social Science (${marks.social || 0}%) and Languages indicate high aptitude for the textual reading, historical synthesis, and essay writing required in Arts.`;
  }
  return `Practical orientation aligns well with foundational applied science and mathematical requirements.`;
}

function generateAptitudeEvidence(stream, aptPercentages, score) {
  if (stream.id === "group-2503") {
    return `Logical reasoning (${aptPercentages.logical || 0}%) and problem-solving (${aptPercentages.problemSolving || 0}%) scores indicate strong cognitive alignment with algorithmic thinking.`;
  } else if (stream.category === "STEM") {
    return `Demonstrated spatial (${aptPercentages.spatial || 0}%) and numerical (${aptPercentages.numerical || 0}%) reasoning indices support physical diagram comprehension and experimental data interpretation.`;
  } else if (stream.category === "Commerce") {
    return `Numerical reasoning (${aptPercentages.numerical || 0}%) supports double-entry arithmetic and business statistics calculations.`;
  }
  return `Verbal comprehension (${aptPercentages.verbal || 0}%) and logical reasoning support descriptive analysis and critical social inquiry.`;
}

function generateInterestEvidence(stream, interests) {
  if (stream.id === "group-2502") {
    return `Expressed interest in Biological Sciences (Level ${interests.biologicalScience || 3}/5) and Physical Sciences (Level ${interests.physicalScience || 3}/5) shows strong intrinsic motivation for the comprehensive medical/bio-maths syllabus.`;
  } else if (stream.id === "group-2503") {
    return `High curiosity in Technology and Computing (Level ${interests.technology || 3}/5) matches the computer science and programming curriculum.`;
  } else if (stream.category === "Commerce") {
    return `Stated enthusiasm for Business, Commerce and Economics (Level ${interests.businessCommerce || 3}/5) indicates strong engagement with trade and financial concepts.`;
  } else if (stream.category === "Humanities") {
    return `Passionate interest in Society, History, and Civics (Level ${interests.socialScience || 3}/5) signals natural engagement with democratic institutions and historical transformations.`;
  }
  return `Practical technological curiosity supports applied engineering procedures.`;
}

function generateEfficacyEvidence(stream, efficacy) {
  if (stream.category === "STEM") {
    return `Self-reported confidence in laboratory inquiry (Level ${efficacy.labInquiry || 3}/5) and mathematical resilience (Level ${efficacy.mathResilience || 3}/5) indicate readiness to handle challenging practical coursework.`;
  } else if (stream.category === "Commerce") {
    return `Confidence in independent problem-solving (Level ${efficacy.problemSolving || 3}/5) is essential for mastering complex accountancy balance sheets and tax concepts.`;
  }
  return `High confidence in long-form writing and communication (Level ${efficacy.communication || 3}/5) directly matches the descriptive examination style of the Humanities stream.`;
}

function generateExposureEvidence(stream, activities) {
  if (!activities || activities.length === 0) {
    return `No prior co-curricular activities recorded in this domain; this is an exploratory opportunity to build fresh practical exposure in Class 11.`;
  }
  return `Documented active participation in ${activities.length} co-curricular activities validates practical curiosity beyond classroom textbooks.`;
}

function detectConflictingEvidence(stream, marks, interests, efficacy, aptitudes) {
  const conflicts = [];

  // Conflict 1: High Interest in Computing/Tech vs Low Math Self-Efficacy / Mark
  if ((stream.id === "group-2503" || stream.id === "group-2502") && (interests.technology >= 4 || interests.physicalScience >= 4)) {
    if (efficacy.mathResilience <= 2 || marks.maths < 60) {
      conflicts.push({
        title: "Interest vs Quantitative Confidence Divergence",
        description: `You show high interest in technical/science disciplines, but your Mathematics self-efficacy (${efficacy.mathResilience}/5) or Class 10 mark (${marks.maths || 0}%) is modest. Group ${stream.code} requires significant higher-secondary calculus and analytical algebra. Dedicated bridging in mathematics will be essential.`
      });
    }
  }

  // Conflict 2: High Marks in Science but Low Lab Efficacy or Interest
  if (stream.category === "STEM" && marks.science >= 80 && (interests.physicalScience <= 2 || efficacy.labInquiry <= 2)) {
    conflicts.push({
      title: "Academic Marks vs Experiential Interest Divergence",
      description: `While your Class 10 Science marks are commendable (${marks.science}%), your expressed interest in physical sciences or confidence in laboratory work is relatively low. Higher-secondary science in Tamil Nadu involves substantial laboratory titration, specimen observation, and independent lab records.`
    });
  }

  // Conflict 3: High verbal/humanities aptitude but selecting pure STEM
  if (stream.category === "STEM" && aptitudes.verbal >= 80 && interests.socialScience >= 4 && interests.physicalScience <= 3) {
    conflicts.push({
      title: "Strong Humanities Synergy Not Captured in STEM",
      description: `You possess prominent verbal and societal inquiry strengths that would thrive in Commerce or Arts, which would remain largely underutilised in ${stream.name}.`
    });
  }

  return conflicts;
}

function generateExplorationSuggestions(stream, conflicts) {
  const suggestions = [
    `Download and inspect the Tamil Nadu State Board Class 11 textbooks for ${stream.part3Subjects.map(s => s.name).slice(0, 2).join(" and ")} on the official TN SCERT e-textbook portal.`,
    `Discuss the weekly laboratory and study workload of ${stream.code} with your school guidance teacher or current Class 12 seniors.`,
    `Verify with your target higher-secondary school whether ${stream.name} has available laboratory seats or specific admission cut-offs.`
  ];

  if (conflicts.length > 0) {
    suggestions.unshift("Review the conflicting evidence notes above and assess whether taking bridge courses before the academic term begins would be helpful.");
  }

  return suggestions;
}
