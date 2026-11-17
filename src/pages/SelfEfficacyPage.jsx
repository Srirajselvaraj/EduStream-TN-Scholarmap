import React from 'react';
import { useAssessment } from '../context/AssessmentContext';
import { SELF_EFFICACY_PILLARS } from '../data/assessmentQuestions';
import { 
  Target, 
  ArrowRight, 
  ArrowLeft, 
  HelpCircle,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function SelfEfficacyPage() {
  const { 
    navigateTo, 
    studentProfile, 
    updateSelfEfficacyRating 
  } = useAssessment();

  const ratingLevels = [
    { value: 1, label: 'Very Low Confidence' },
    { value: 2, label: 'Mild Hesitation' },
    { value: 3, label: 'Moderate Confidence' },
    { value: 4, label: 'Good Confidence' },
    { value: 5, label: 'Strong Self-Efficacy' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Navigation Top */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigateTo('interests')}
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Interests</span>
        </button>
        <span className="text-xs font-bold text-academic-700 bg-academic-50 px-3 py-1 rounded-full border border-academic-200">
          Dimension 4 of 5: Academic Self-Efficacy
        </span>
      </div>

      {/* Main Header & Theoretical Explainer */}
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Academic Self-Efficacy & Confidence Assessment
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          Academic self-efficacy measures your belief in your ability to succeed when coursework becomes challenging. Unlike <em>interest</em> ("Do I enjoy this?"), <em>self-efficacy</em> answers: <strong>"Do I believe I can persevere through difficult concepts and practical demands?"</strong>
        </p>

        {/* Bandura Self-Efficacy Concept Box */}
        <div className="bg-academic-50 border border-academic-200 rounded-xl p-4 text-xs text-academic-900 space-y-1">
          <div className="font-bold flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-academic-700" />
            <span>Why This Dimension Matters for Class 11:</span>
          </div>
          <p className="text-slate-700 leading-relaxed">
            The syllabus volume in Tamil Nadu Higher Secondary increases significantly compared to Class 10. Students with realistic self-efficacy in specific subjects adapt more smoothly and experience less exam-related stress.
          </p>
        </div>
      </div>

      {/* 4 Self-Efficacy Pillars */}
      <div className="space-y-6">
        {SELF_EFFICACY_PILLARS.map((pillar, index) => {
          const currentVal = studentProfile.selfEfficacyRatings[pillar.id] || 3;

          return (
            <div 
              key={pillar.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Pillar {index + 1} of 4: {pillar.dimension}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">
                    {pillar.label}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
                  {ratingLevels.find(r => r.value === currentVal)?.label} ({currentVal}/5)
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-750 font-medium leading-relaxed">
                {pillar.prompt}
              </p>

              {/* Anchors description */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Level 1: {pillar.lowAnchor}
                </span>
                <span className="text-tealAccent-800 bg-tealAccent-50 px-2 py-0.5 rounded border border-tealAccent-200 text-right">
                  Level 5: {pillar.highAnchor}
                </span>
              </div>

              {/* Interactive 5-Point Selector */}
              <div className="grid grid-cols-5 gap-2 pt-2">
                {[1, 2, 3, 4, 5].map((lvl) => {
                  const isSelected = currentVal === lvl;
                  return (
                    <button
                      key={lvl}
                      onClick={() => updateSelfEfficacyRating(pillar.id, lvl)}
                      className={`
                        py-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center space-y-0.5
                        ${isSelected 
                          ? 'bg-academic-900 text-white border-academic-900 shadow-xs ring-2 ring-emerald-400/30' 
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'}
                      `}
                    >
                      <span className={`text-base font-extrabold ${isSelected ? 'text-tealAccent-300' : 'text-slate-800'}`}>
                        {lvl}
                      </span>
                      <span className={`text-[10px] font-semibold hidden sm:inline ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                        {lvl === 1 ? 'Hesitant' : lvl === 3 ? 'Moderate' : lvl === 5 ? 'Very Confident' : `Level ${lvl}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <button
          onClick={() => navigateTo('interests')}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
        >
          Previous: Subject Interests
        </button>

        <button
          onClick={() => navigateTo('exposure')}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-academic-900 hover:bg-academic-800 text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer flex items-center justify-center space-x-2"
        >
          <span>Save & Continue to Learning Exposure</span>
          <ArrowRight className="w-4 h-4 text-tealAccent-300" />
        </button>
      </div>

    </div>
  );
}
