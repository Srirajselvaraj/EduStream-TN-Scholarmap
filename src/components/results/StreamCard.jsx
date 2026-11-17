import React from 'react';
import { useAssessment } from '../../context/AssessmentContext';
import { ArrowRight, BookOpen, AlertCircle, CheckCircle, ShieldAlert } from 'lucide-react';

export default function StreamCard({ stream, isPrimary = false }) {
  const { viewStreamDetails } = useAssessment();

  const isVerified = stream.verificationStatus.includes("Verified");

  return (
    <div className={`
      relative bg-white rounded-2xl border transition-all duration-200 overflow-hidden flex flex-col justify-between
      ${isPrimary ? 'border-tealAccent-500 shadow-md ring-1 ring-tealAccent-500/20' : 'border-slate-200 hover:border-slate-300 shadow-xs'}
    `}>
      {/* Header Band */}
      <div className={`p-5 ${isPrimary ? 'bg-gradient-to-r from-tealAccent-50/60 to-academic-50/50' : 'bg-slate-50/50'} border-b border-slate-100`}>
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center space-x-2 flex-wrap gap-y-1 mb-1.5">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-academic-900 text-white">
                {stream.code}
              </span>
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${stream.tierBadgeClass}`}>
                {stream.alignmentTier}
              </span>
              <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                {stream.category}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              {stream.name}
            </h3>
          </div>

          {isPrimary && (
            <span className="shrink-0 bg-tealAccent-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-2xs">
              Primary Fit
            </span>
          )}
        </div>

        <p className="text-xs text-slate-600 mt-2 line-clamp-2">
          {stream.shortDescription}
        </p>
      </div>

      {/* 4 Part III Subjects */}
      <div className="p-5 space-y-4 flex-1">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Part III Core Electives (4 Subjects)
          </p>
          <div className="grid grid-cols-2 gap-2">
            {stream.part3Subjects.map((subject) => (
              <div 
                key={subject.name}
                className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs"
              >
                <div className="font-semibold text-slate-800">{subject.name}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  {subject.hasPractical ? 'Theory + Lab' : 'Theory Only'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explainability Highlight */}
        <div className="bg-academic-50/60 border border-academic-100 rounded-xl p-3 text-xs text-slate-700">
          <p className="font-semibold text-academic-900 mb-1 flex items-center space-x-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-tealAccent-600" />
            <span>Key Alignment Rationale:</span>
          </p>
          <p className="text-slate-600 leading-relaxed text-[11px]">
            {stream.supportingEvidence.academic}
          </p>
        </div>

        {/* Verification Alert if example */}
        {!isVerified && (
          <div className="flex items-center space-x-2 text-[11px] text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1.5 rounded-lg">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Example combination pending local school verification</span>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <div className="text-[11px] text-slate-500">
          Syllabus: <span className="font-semibold text-slate-700">{stream.syllabusIntensity}</span>
        </div>

        <button
          onClick={() => viewStreamDetails(stream.id)}
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-academic-700 hover:text-academic-900 hover:underline cursor-pointer"
        >
          <span>Explore Syllabus & Evidence</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
