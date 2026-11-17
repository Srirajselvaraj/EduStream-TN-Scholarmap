import React from 'react';
import { useAssessment } from '../context/AssessmentContext';
import { 
  FileText, 
  BrainCircuit, 
  HeartHandshake, 
  Target, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  BookOpen, 
  UserCheck,
  AlertCircle
} from 'lucide-react';
import AdvisoryBanner from '../components/common/AdvisoryBanner';

export default function DashboardPage() {
  const { 
    navigateTo, 
    studentProfile, 
    completionStatus, 
    activeSampleProfileId, 
    loadSampleProfile 
  } = useAssessment();

  const dimensionCards = [
    {
      id: 'profile',
      number: '1',
      title: 'Academic Marks Profile',
      subtitle: 'Class 10 SSLC Subjects',
      desc: 'Enter subject-wise marks (Language, English, Maths, Science, Social Science).',
      icon: FileText,
      done: completionStatus.hasMarks,
      value: completionStatus.hasMarks ? `Total: ${Object.values(studentProfile.marks).reduce((a, b) => (Number(a)||0) + (Number(b)||0), 0)}/500` : 'Pending Entry',
      color: 'border-blue-200 bg-blue-50/50 text-blue-700'
    },
    {
      id: 'aptitude',
      number: '2',
      title: 'Aptitude Assessment',
      subtitle: '5 Cognitive Sub-Scales',
      desc: 'Numerical, logical, verbal, spatial, and analytical situational tasks.',
      icon: BrainCircuit,
      done: completionStatus.hasAptitude,
      value: `${Object.keys(studentProfile.aptitudeAnswers).length}/10 Answered`,
      color: 'border-indigo-200 bg-indigo-50/50 text-indigo-700'
    },
    {
      id: 'interests',
      number: '3',
      title: 'Subject Interests Inventory',
      subtitle: '7 Academic Domains',
      desc: '5-point Likert rating of intrinsic curiosity across sciences, computing, and trade.',
      icon: HeartHandshake,
      done: completionStatus.hasInterests,
      value: `${Object.keys(studentProfile.interestRatings).length} Domains Rated`,
      color: 'border-teal-200 bg-teal-50/50 text-teal-700'
    },
    {
      id: 'self-efficacy',
      number: '4',
      title: 'Academic Self-Efficacy',
      subtitle: 'Confidence & Resilience',
      desc: 'Confidence ratings in handling complex formulas, science labs, and heavy reading.',
      icon: Target,
      done: completionStatus.hasSelfEfficacy,
      value: `${Object.keys(studentProfile.selfEfficacyRatings).length} Pillars Assessed`,
      color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700'
    },
    {
      id: 'exposure',
      number: '5',
      title: 'Learning Exposure',
      subtitle: 'Activities & Projects',
      desc: 'Real-world co-curricular projects, science exhibitions, and club involvement.',
      icon: Compass,
      done: completionStatus.hasExposure,
      value: `${studentProfile.exposureActivities.length} Activities Recorded`,
      color: 'border-amber-200 bg-amber-50/50 text-amber-700'
    }
  ];

  // Identify next pending dimension
  const nextPending = dimensionCards.find(c => !c.done)?.id || 'results';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Advisory Banner */}
      <AdvisoryBanner compact={true} />

      {/* Welcome & Overview Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
            <BookOpen className="w-3.5 h-3.5 text-academic-700" />
            <span>Tamil Nadu State Board Class 10 Transition</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Student Assessment Cockpit
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Welcome, <strong className="text-slate-900">{studentProfile.studentName || 'Student'}</strong>. 
            Complete the 5 dimensions below to build your explainable academic footprint. Each step helps identify subject groups best suited to your profile.
          </p>
          <div className="flex items-center space-x-3 text-xs text-slate-500 pt-1">
            <span>Board: <strong>TN State Board (SSLC)</strong></span>
            <span>•</span>
            <span>Medium: <strong>{studentProfile.medium}</strong></span>
          </div>
        </div>

        {/* Circular / Summary Progress Ring */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-center space-x-4 shrink-0 w-full md:w-auto">
          <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-200"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-tealAccent-600 transition-all duration-500 ease-out"
                strokeDasharray={`${completionStatus.percentage}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute text-sm font-bold text-slate-800">
              {completionStatus.percentage}%
            </span>
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold text-slate-800">
              {completionStatus.completedCount} of 5 Dimensions Completed
            </div>
            <p className="text-[11px] text-slate-500">
              {completionStatus.completedCount === 5 
                ? 'All dimensions ready for report generation!' 
                : 'Complete pending steps for full accuracy.'}
            </p>
            <button
              onClick={() => navigateTo(nextPending)}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-academic-700 hover:text-academic-900 cursor-pointer pt-1"
            >
              <span>{completionStatus.completedCount === 5 ? 'View Advisory Results' : 'Continue Next Step'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 5 Assessment Dimension Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            Assessment Dimensions Status
          </h2>
          <span className="text-xs text-slate-500">
            Click any dimension to update or review inputs
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dimensionCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => navigateTo(card.id)}
                className={`
                  bg-white rounded-2xl border p-5 shadow-2xs hover:shadow-sm hover:border-academic-300 transition-all cursor-pointer flex flex-col justify-between
                  ${card.done ? 'border-slate-200' : 'border-dashed border-slate-300'}
                `}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${card.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {card.done ? (
                      <span className="inline-flex items-center space-x-1 text-[11px] font-semibold text-tealAccent-700 bg-tealAccent-50 px-2 py-0.5 rounded-full border border-tealAccent-200">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Completed</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        <Clock className="w-3 h-3" />
                        <span>Pending</span>
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Dimension {card.number}
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mt-0.5">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-600">{card.value}</span>
                  <span className="font-semibold text-academic-700 hover:text-academic-900 flex items-center space-x-1">
                    <span>{card.done ? 'Review' : 'Start'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}

          {/* Results Quick Card */}
          <div className="bg-gradient-to-br from-academic-900 to-slate-900 text-white rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-academic-800 flex items-center justify-center text-tealAccent-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">
                  Advisory Recommendation Engine
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Synthesize your responses to see top recommended TN Higher Secondary subject combinations.
                </p>
              </div>
            </div>

            <button
              onClick={() => navigateTo('results')}
              className="mt-4 w-full py-2.5 px-3 rounded-xl bg-tealAccent-600 hover:bg-tealAccent-500 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer flex items-center justify-center space-x-1.5"
            >
              <span>Open Explainable Results</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
