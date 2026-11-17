import React from 'react';
import { useAssessment } from '../context/AssessmentContext';
import { TN_STREAMS_DATA } from '../data/tnStreamsData';
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  FlaskConical, 
  Building2, 
  ShieldAlert, 
  CheckCircle2, 
  FileText,
  AlertCircle
} from 'lucide-react';
import AdvisoryBanner from '../components/common/AdvisoryBanner';

export default function StreamDetailsPage() {
  const { 
    selectedStreamId, 
    navigateTo, 
    studentProfile, 
    evaluationResults 
  } = useAssessment();

  const stream = TN_STREAMS_DATA.find(s => s.id === selectedStreamId) || TN_STREAMS_DATA[0];
  const evaluatedMatch = evaluationResults.allEvaluatedStreams?.find(s => s.id === stream.id);

  const isVerified = stream.verificationStatus.includes("Verified");

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Advisory Notice */}
      <AdvisoryBanner compact={true} />

      {/* Navigation Top */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigateTo('results')}
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Recommendations</span>
        </button>
        <span className="text-xs font-mono font-bold text-academic-900 bg-academic-50 px-3 py-1 rounded-full border border-academic-200">
          TN Higher Secondary Subject Group
        </span>
      </div>

      {/* Header Banner */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2 flex-wrap gap-y-1 mb-2">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-academic-900 text-white">
                {stream.code}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                Category: {stream.categoryLabel}
              </span>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                isVerified ? 'bg-tealAccent-50 text-tealAccent-800 border-tealAccent-200' : 'bg-amber-50 text-amber-800 border-amber-200'
              }`}>
                {stream.officialStatus}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {stream.name}
            </h1>
          </div>

          {evaluatedMatch && (
            <div className="sm:text-right shrink-0">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${evaluatedMatch.tierBadgeClass}`}>
                {evaluatedMatch.alignmentTier}
              </span>
              <p className="text-[11px] text-slate-500 mt-1">
                Student Profile Synergy: {evaluatedMatch.compositeScore}%
              </p>
            </div>
          )}
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          {stream.fullDescription}
        </p>
      </div>

      {/* Four Part III Subjects Grid */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Part III: Four Core Elective Subjects
          </h2>
          <p className="text-xs text-slate-500">
            Tamil Nadu State Board syllabus outlines and weekly laboratory requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stream.part3Subjects.map((sub, index) => (
            <div 
              key={sub.name}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-academic-700 bg-academic-50 px-2.5 py-0.5 rounded border border-academic-100">
                    Subject {index + 1} • {sub.code}
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                    sub.hasPractical ? 'bg-tealAccent-50 text-tealAccent-800' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {sub.hasPractical ? 'Theory + Practical Lab' : 'Pure Theory'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {sub.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {sub.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{sub.hoursPerWeek} Hours / Week</span>
                </span>
                <span>Class 11 & 12 Curriculum</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* School Availability & Infrastructure Notes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Availability Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-2">
          <div className="flex items-center space-x-2 text-slate-800">
            <Building2 className="w-4 h-4 text-academic-700" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              School-Specific Availability Status
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {stream.schoolAvailability}
          </p>
          <p className="text-[11px] text-slate-400 pt-1">
            *Always confirm with your target school regarding seat availability and medium of instruction options.
          </p>
        </div>

        {/* Infrastructure Requirements */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-2">
          <div className="flex items-center space-x-2 text-slate-800">
            <FlaskConical className="w-4 h-4 text-tealAccent-700" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Required School Infrastructure
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {stream.infrastructureRequirements}
          </p>
          <div className="pt-2 text-xs text-amber-800 bg-amber-50 border border-amber-200 p-2.5 rounded-lg flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              <strong>Advisory Tip:</strong> {stream.advisoryNote}
            </span>
          </div>
        </div>

      </div>

      {/* Student Specific Alignment Recap */}
      {evaluatedMatch && (
        <div className="bg-academic-50/60 border border-academic-200 rounded-2xl p-6 space-y-3">
          <h3 className="text-sm font-bold text-academic-950 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-tealAccent-600" />
            <span>Personalized Fit Summary for {studentProfile.studentName || 'Your Profile'}:</span>
          </h3>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {evaluatedMatch.supportingEvidence.academic}
          </p>

          <div className="pt-2 flex items-center space-x-4 text-xs font-semibold text-slate-600">
            <span>Academic: {evaluatedMatch.dimensionalScores.academic}%</span>
            <span>•</span>
            <span>Interest: {evaluatedMatch.dimensionalScores.interest}%</span>
            <span>•</span>
            <span>Self-Efficacy: {evaluatedMatch.dimensionalScores.selfEfficacy}%</span>
          </div>
        </div>
      )}

      {/* Back CTA */}
      <div className="pt-4 text-center">
        <button
          onClick={() => navigateTo('results')}
          className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
        >
          Return to Recommendations
        </button>
      </div>

    </div>
  );
}
