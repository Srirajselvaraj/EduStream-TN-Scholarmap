import React, { createContext, useContext, useState, useMemo } from 'react';
import { SAMPLE_PROFILES, EMPTY_PROFILE } from '../data/sampleProfiles';
import { evaluateStudentProfile } from '../utils/advisoryEngine';

const AssessmentContext = createContext(null);

export function AssessmentProvider({ children }) {
  // Navigation State
  const [activeScreen, setActiveScreen] = useState('landing');
  const [selectedStreamId, setSelectedStreamId] = useState('group-2502');
  const [activeSampleProfileId, setActiveSampleProfileId] = useState('sample-bio-maths');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Student Assessment State - initialized with sample-bio-maths for instant interactive demonstration
  const [studentProfile, setStudentProfile] = useState(() => {
    return JSON.parse(JSON.stringify(SAMPLE_PROFILES[0].profileData));
  });

  // Navigation handlers
  const navigateTo = (screenId) => {
    setActiveScreen(screenId);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const viewStreamDetails = (streamId) => {
    setSelectedStreamId(streamId);
    setActiveScreen('stream-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Profile Switcher (for College Viva demonstration)
  const loadSampleProfile = (profileId) => {
    if (profileId === 'empty') {
      setStudentProfile(JSON.parse(JSON.stringify(EMPTY_PROFILE)));
      setActiveSampleProfileId('empty');
    } else {
      const found = SAMPLE_PROFILES.find(p => p.id === profileId);
      if (found) {
        setStudentProfile(JSON.parse(JSON.stringify(found.profileData)));
        setActiveSampleProfileId(found.id);
      }
    }
  };

  const resetAll = () => {
    setStudentProfile(JSON.parse(JSON.stringify(EMPTY_PROFILE)));
    setActiveSampleProfileId('empty');
  };

  // Updaters for individual dimensions
  const updateStudentDetails = (field, value) => {
    setStudentProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateMarks = (subject, value) => {
    const val = value === '' ? '' : Math.min(100, Math.max(0, Number(value) || 0));
    setStudentProfile(prev => ({
      ...prev,
      marks: {
        ...prev.marks,
        [subject]: val
      }
    }));
  };

  const updateAptitudeAnswer = (questionId, optionId) => {
    setStudentProfile(prev => ({
      ...prev,
      aptitudeAnswers: {
        ...prev.aptitudeAnswers,
        [questionId]: optionId
      }
    }));
  };

  const updateInterestRating = (domainId, rating) => {
    setStudentProfile(prev => ({
      ...prev,
      interestRatings: {
        ...prev.interestRatings,
        [domainId]: Number(rating)
      }
    }));
  };

  const updateSelfEfficacyRating = (pillarId, rating) => {
    setStudentProfile(prev => ({
      ...prev,
      selfEfficacyRatings: {
        ...prev.selfEfficacyRatings,
        [pillarId]: Number(rating)
      }
    }));
  };

  const toggleExposureActivity = (activityId, depth = 'Active Member') => {
    setStudentProfile(prev => {
      const exists = prev.exposureActivities.some(a => a.id === activityId);
      let updated;
      if (exists) {
        updated = prev.exposureActivities.filter(a => a.id !== activityId);
      } else {
        updated = [...prev.exposureActivities, { id: activityId, depth }];
      }
      return {
        ...prev,
        exposureActivities: updated
      };
    });
  };

  const updateExposureDepth = (activityId, depth) => {
    setStudentProfile(prev => ({
      ...prev,
      exposureActivities: prev.exposureActivities.map(a => 
        a.id === activityId ? { ...a, depth } : a
      )
    }));
  };

  // Dimensional completion status
  const completionStatus = useMemo(() => {
    const { marks, aptitudeAnswers, interestRatings, selfEfficacyRatings, exposureActivities } = studentProfile;

    const hasMarks = Object.values(marks).every(m => m !== '' && m !== null && m !== undefined);
    const hasAptitude = Object.keys(aptitudeAnswers).length >= 6;
    const hasInterests = Object.keys(interestRatings).length >= 5;
    const hasSelfEfficacy = Object.keys(selfEfficacyRatings).length >= 4;
    const hasExposure = exposureActivities.length > 0;

    const completedCount = [hasMarks, hasAptitude, hasInterests, hasSelfEfficacy, hasExposure].filter(Boolean).length;
    const percentage = Math.round((completedCount / 5) * 100);

    return {
      hasMarks,
      hasAptitude,
      hasInterests,
      hasSelfEfficacy,
      hasExposure,
      completedCount,
      percentage
    };
  }, [studentProfile]);

  // Evaluated recommendations using the transparent advisory engine
  const evaluationResults = useMemo(() => {
    return evaluateStudentProfile(studentProfile);
  }, [studentProfile]);

  const value = {
    activeScreen,
    navigateTo,
    selectedStreamId,
    viewStreamDetails,
    studentProfile,
    activeSampleProfileId,
    loadSampleProfile,
    resetAll,
    updateStudentDetails,
    updateMarks,
    updateAptitudeAnswer,
    updateInterestRating,
    updateSelfEfficacyRating,
    toggleExposureActivity,
    updateExposureDepth,
    completionStatus,
    evaluationResults,
    sidebarOpen,
    setSidebarOpen
  };

  return (
    <AssessmentContext.Provider value={value}>
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
}
