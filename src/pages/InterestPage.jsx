import React from 'react';
import { useAssessment } from '../context/AssessmentContext';
import { INTEREST_DOMAINS } from '../data/assessmentQuestions';
import { 
  HeartHandshake, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles,
  Info
} from 'lucide-react';

export default function InterestPage() {
  const { 
    navigateTo, 
    studentProfile, 
    updateInterestRating 
  } = useAssessment();

  const scaleLabels = [
    { value: 1, label: 'Not Interested', desc: 'Dislike doing this' },
    { value: 2, label: 'Low Interest', desc: 'Only if required' },
    { value: 3, label: 'Moderate', desc: 'Neutral / Okay' },
    { value: 4, label: 'High Interest', desc: 'Enjoy exploring this' },
    { value: 5, label: 'Passionate', desc: 'Love doing this' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Navigation Top */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigateTo('aptitude')}
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Aptitude</span>
        </button>
        <span className="text-xs font-bold text-academic-700 bg-academic-50 px-3 py-1 rounded-full border border-academic-200">
          Dimension 3 of 5: Subject Interests
        </span>
      </div>

      {/* Main Header */}
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Subject Interest & Intrinsic Curiosity Inventory
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          Rate how much you genuinely enjoy engaging with each subject area outside of test pressure. Higher-secondary studies require long hours of sustained reading, so genuine curiosity is crucial.
        </p>

        {/* Informative Callout */}
        <div className="bg-tealAccent-50/70 border border-tealAccent-200 rounded-xl p-3.5 text-xs text-tealAccent-900 flex items-start space-x-2.5">
          <Info className="w-4 h-4 text-tealAccent-700 shrink-0 mt-0.5" />
          <span>
            <strong>Student Guidance:</strong> Don't rate based solely on what scored high on past exams. Rate what topics make you curious to read more or watch educational videos.
          </span>
        </div>
      </div>

      {/* 7 Interest Domains */}
      <div className="space-y-5">
        {INTEREST_DOMAINS.map((domain, index) => {
          const currentRating = studentProfile.interestRatings[domain.id] || 3;

          return (
            <div 
              key={domain.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Domain {index + 1} of 7
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {domain.label}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-tealAccent-800 bg-tealAccent-50 px-2.5 py-1 rounded-full border border-tealAccent-200 self-start sm:self-auto">
                  Level {currentRating} of 5 ({scaleLabels.find(s => s.value === currentRating)?.label})
                </span>
              </div>

              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {domain.description}
                </p>
                <p className="text-[11px] text-slate-400">
                  <strong className="text-slate-500">Examples:</strong> {domain.exampleActivities}
                </p>
              </div>

              {/* 5-Point Interactive Response Scale */}
              <div className="pt-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Select your interest level:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {scaleLabels.map((scale) => {
                    const isSelected = currentRating === scale.value;
                    return (
                      <button
                        key={scale.value}
                        onClick={() => updateInterestRating(domain.id, scale.value)}
                        className={`
                          p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center space-y-1
                          ${isSelected 
                            ? 'bg-academic-900 text-white border-academic-900 shadow-xs ring-2 ring-tealAccent-400/30' 
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'}
                        `}
                      >
                        <span className={`text-sm font-black ${isSelected ? 'text-tealAccent-300' : 'text-slate-800'}`}>
                          {scale.value}
                        </span>
                        <span className="text-[11px] font-semibold leading-tight">
                          {scale.label}
                        </span>
                        <span className={`text-[10px] hidden sm:block ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                          {scale.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <button
          onClick={() => navigateTo('aptitude')}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
        >
          Previous: Aptitude Assessment
        </button>

        <button
          onClick={() => navigateTo('self-efficacy')}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-academic-900 hover:bg-academic-800 text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer flex items-center justify-center space-x-2"
        >
          <span>Save & Continue to Self-Efficacy</span>
          <ArrowRight className="w-4 h-4 text-tealAccent-300" />
        </button>
      </div>

    </div>
  );
}
