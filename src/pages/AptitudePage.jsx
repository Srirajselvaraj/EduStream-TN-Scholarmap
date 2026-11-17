import React, { useState } from 'react';
import { useAssessment } from '../context/AssessmentContext';
import { APTITUDE_QUESTIONS } from '../data/assessmentQuestions';
import { 
  BrainCircuit, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  HelpCircle,
  Sparkles
} from 'lucide-react';

export default function AptitudePage() {
  const { 
    navigateTo, 
    studentProfile, 
    updateAptitudeAnswer 
  } = useAssessment();

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'numerical', label: 'Numerical' },
    { id: 'logical', label: 'Logical' },
    { id: 'verbal', label: 'Verbal' },
    { id: 'spatial', label: 'Spatial' },
    { id: 'problemSolving', label: 'Problem Solving' }
  ];

  const filteredQuestions = activeCategory === 'all' 
    ? APTITUDE_QUESTIONS 
    : APTITUDE_QUESTIONS.filter(q => q.domain === activeCategory);

  const answeredCount = Object.keys(studentProfile.aptitudeAnswers).length;
  const totalCount = APTITUDE_QUESTIONS.length;
  const progressPercent = Math.round((answeredCount / totalCount) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigateTo('profile')}
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Profile</span>
        </button>
        <span className="text-xs font-bold text-academic-700 bg-academic-50 px-3 py-1 rounded-full border border-academic-200">
          Dimension 2 of 5: Aptitude Assessment
        </span>
      </div>

      {/* Header & Explainer */}
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Cognitive Reasoning & Aptitude Assessment
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          These brief situational tasks evaluate natural problem-solving approaches across numerical, logical, verbal, spatial, and analytical domains. This is not a timed competitive exam; focus on thinking through each question naturally.
        </p>

        {/* Progress Bar Container */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-700">Aptitude Progress</span>
            <span className="text-tealAccent-700">{answeredCount} of {totalCount} Questions Answered ({progressPercent}%)</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-tealAccent-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-academic-900 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.map((q, index) => {
          const selectedOption = studentProfile.aptitudeAnswers[q.id];
          const isAnswered = Boolean(selectedOption);

          return (
            <div 
              key={q.id}
              className={`bg-white rounded-2xl border p-5 sm:p-6 shadow-2xs transition-all space-y-4 ${
                isAnswered ? 'border-tealAccent-200 ring-1 ring-tealAccent-100' : 'border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-academic-700 bg-academic-50 px-2.5 py-1 rounded border border-academic-100">
                  {q.domainLabel} • Q{index + 1}
                </span>
                {isAnswered && (
                  <span className="inline-flex items-center space-x-1 text-[11px] font-semibold text-tealAccent-700 bg-tealAccent-50 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Selected</span>
                  </span>
                )}
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                {q.question}
              </h3>

              {/* 4 Multiple Choice Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {q.options.map((opt) => {
                  const isSelected = selectedOption === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => updateAptitudeAnswer(q.id, opt.id)}
                      className={`
                        w-full p-3.5 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer
                        ${isSelected 
                          ? 'bg-academic-900 text-white border-academic-900 shadow-xs' 
                          : 'bg-slate-50/70 hover:bg-slate-100 border-slate-200 text-slate-800'}
                      `}
                    >
                      <div className="flex items-center space-x-3">
                        <span className={`
                          w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0
                          ${isSelected ? 'bg-tealAccent-400 text-academic-950' : 'bg-white border border-slate-300 text-slate-600'}
                        `}>
                          {opt.id}
                        </span>
                        <span className="leading-snug">{opt.text}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Navigation Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <button
          onClick={() => navigateTo('profile')}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
        >
          Previous: Academic Profile
        </button>

        <button
          onClick={() => navigateTo('interests')}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-academic-900 hover:bg-academic-800 text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer flex items-center justify-center space-x-2"
        >
          <span>Save & Continue to Interests</span>
          <ArrowRight className="w-4 h-4 text-tealAccent-300" />
        </button>
      </div>

    </div>
  );
}
