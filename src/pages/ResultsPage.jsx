import React, { useState } from 'react';
import { useAssessment } from '../context/AssessmentContext';
import StreamCard from '../components/results/StreamCard';
import EvidenceAccordion from '../components/results/EvidenceAccordion';
import ConflictingEvidenceBox from '../components/results/ConflictingEvidenceBox';
import DimensionRadarChart from '../components/charts/DimensionRadarChart';
import DimensionBarChart from '../components/charts/DimensionBarChart';
import AdvisoryBanner from '../components/common/AdvisoryBanner';
import { 
  Award, 
  Printer, 
  Layers, 
  AlertCircle, 
  Compass, 
  ArrowRight, 
  BookOpen, 
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function ResultsPage() {
  const { 
    evaluationResults, 
    studentProfile, 
    navigateTo 
  } = useAssessment();

  const { 
    suggestedStreams = [], 
    alternativeStreams = [], 
    totalMarks, 
    percentage, 
    generalLimitations = [] 
  } = evaluationResults;

  // Selected stream for deep-dive evidence inspection
  const [selectedInspectionId, setSelectedInspectionId] = useState(() => {
    return suggestedStreams[0]?.id || 'group-2502';
  });

  const inspectedStream = [...suggestedStreams, ...alternativeStreams].find(s => s.id === selectedInspectionId) || suggestedStreams[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Top Advisory Notice */}
      <AdvisoryBanner compact={false} />

      {/* Main Advisory Report Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 print-page">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold px-2.5 py-1 rounded bg-tealAccent-50 text-tealAccent-800 border border-tealAccent-200">
            <Sparkles className="w-3.5 h-3.5 text-tealAccent-600" />
            <span>Explainable Academic Advisory Report</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Higher-Secondary Stream Guidance: {studentProfile.studentName || 'Student Profile'}
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            Synthesized across 5 dimensions: Academic SSLC marks ({totalMarks}/500, {percentage}%), situational aptitude, intrinsic curiosity, self-efficacy, and experiential exposure.
          </p>

          <div className="flex items-center space-x-3 text-xs text-slate-500 pt-1 flex-wrap gap-y-1">
            <span>Board: <strong>Tamil Nadu State Board (SSLC)</strong></span>
            <span>•</span>
            <span>Medium: <strong>{studentProfile.medium}</strong></span>
            <span>•</span>
            <span>School Type: <strong>{studentProfile.schoolType}</strong></span>
          </div>
        </div>

        <div className="flex items-center space-x-3 shrink-0 no-print">
          <button
            onClick={handlePrint}
            className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print Advisory Sheet</span>
          </button>
        </div>
      </div>

      {/* Primary Recommended Streams Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Suggested Subject Combinations (Primary Fit)
            </h2>
            <p className="text-xs text-slate-500">
              Highest holistic alignment across your academic marks, interest, and confidence
            </p>
          </div>
          <span className="text-xs font-bold text-tealAccent-700 bg-tealAccent-50 px-3 py-1 rounded-full border border-tealAccent-200">
            {suggestedStreams.length} Recommended
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {suggestedStreams.map((stream) => (
            <StreamCard 
              key={stream.id} 
              stream={stream} 
              isPrimary={true} 
            />
          ))}
        </div>
      </div>

      {/* Alternative Stream Options */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Alternative Subject Combinations (Viable Options)
          </h2>
          <p className="text-xs text-slate-500">
            Viable pathways offering different subject balances or lighter theoretical loads
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {alternativeStreams.map((stream) => (
            <StreamCard 
              key={stream.id} 
              stream={stream} 
              isPrimary={false} 
            />
          ))}
        </div>
      </div>

      {/* Deep-Dive Explainable Evidence Visualizer (The Core XAI Module) */}
      {inspectedStream && (
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-academic-700">
                Transparent Decision Support
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                Multi-Dimensional Evidence Deconstruction
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Inspect how your profile harmonizes with <strong className="text-slate-900">{inspectedStream.name}</strong> ({inspectedStream.code})
              </p>
            </div>

            {/* Stream Selector Pill Switcher */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-1">
              {[...suggestedStreams, ...alternativeStreams].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedInspectionId(s.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    selectedInspectionId === s.id
                      ? 'bg-academic-900 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {s.code}
                </button>
              ))}
            </div>
          </div>

          {/* Visual Charts & Accordion Split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Visual Balance Charts (Radar + Bar) */}
            <div className="space-y-6">
              <DimensionRadarChart 
                dimensionalScores={inspectedStream.dimensionalScores} 
                size={300}
              />

              <DimensionBarChart 
                dimensionalScores={inspectedStream.dimensionalScores}
              />
            </div>

            {/* Natural-Language Evidence Accordion */}
            <div className="lg:col-span-2 space-y-6">
              <EvidenceAccordion stream={inspectedStream} />

              {/* Conflicting Evidence Alert Box */}
              <ConflictingEvidenceBox conflicts={inspectedStream.conflictingEvidence} />
            </div>

          </div>

          {/* Exploration Suggestions for this Stream */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
              <Compass className="w-4 h-4 text-tealAccent-600" />
              <span>Recommended Next Steps & School Inquiries for {inspectedStream.code}:</span>
            </h3>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {inspectedStream.explorationSuggestions.map((sug, i) => (
                <li key={i} className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-tealAccent-600 mt-2 shrink-0" />
                  <span className="leading-relaxed">{sug}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      )}

      {/* Uncertainty & System Limitations Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
        <div className="flex items-center space-x-2 text-slate-800">
          <HelpCircle className="w-4 h-4 text-slate-500" />
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">
            Advisory Model Uncertainty & System Limitations
          </h3>
        </div>

        <ul className="space-y-2 text-xs text-slate-500 leading-relaxed">
          {generalLimitations.map((lim, i) => (
            <li key={i} className="flex items-start space-x-2">
              <span className="text-slate-400 font-bold">•</span>
              <span>{lim}</span>
            </li>
          ))}
          <li className="flex items-start space-x-2">
            <span className="text-slate-400 font-bold">•</span>
            <span>
              School infrastructure variations: Some schools may have capped seat numbers for Computer Science or may not offer vocational branches in every academic cycle.
            </span>
          </li>
        </ul>
      </div>

    </div>
  );
}
