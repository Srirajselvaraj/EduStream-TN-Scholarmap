import React from 'react';
import { useAssessment } from '../context/AssessmentContext';
import { SAMPLE_PROFILES } from '../data/sampleProfiles';
import { 
  GraduationCap, 
  ArrowRight, 
  BrainCircuit, 
  HeartHandshake, 
  Target, 
  Compass, 
  BookOpen, 
  ShieldCheck, 
  Layers, 
  Sparkles,
  Users,
  CheckCircle2
} from 'lucide-react';
import AdvisoryBanner from '../components/common/AdvisoryBanner';

export default function LandingPage() {
  const { navigateTo, loadSampleProfile } = useAssessment();

  const dimensions = [
    {
      num: '01',
      title: 'Academic Performance',
      icon: BookOpen,
      desc: 'Class 10 Tamil Nadu SSLC subject-wise marks across Languages, Mathematics, Science, and Social Science.',
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      num: '02',
      title: 'Cognitive Aptitude',
      icon: BrainCircuit,
      desc: 'Reflective situational reasoning in numerical logic, verbal comprehension, spatial rotation, and analytical inquiry.',
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      num: '03',
      title: 'Subject Interests',
      icon: HeartHandshake,
      desc: 'Intrinsic curiosity inventory across 7 academic domains including pure sciences, computing, commerce, and humanities.',
      color: 'bg-teal-50 text-teal-700 border-teal-200'
    },
    {
      num: '04',
      title: 'Academic Self-Efficacy',
      icon: Target,
      desc: "Confidence in facing higher-secondary academic demands like laboratory procedures, math proofs, and extensive reading.",
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      num: '05',
      title: 'Experiential Exposure',
      icon: Compass,
      desc: 'Co-curricular projects, science exhibitions, computing clubs, student budgeting, and community leadership.',
      color: 'bg-amber-50 text-amber-700 border-amber-200'
    }
  ];

  const steps = [
    {
      step: 'Step 1',
      title: 'Enter Multi-Dimensional Profile',
      desc: 'Record your Class 10 marks and complete simple, stress-free self-reflection prompts across aptitude, interests, and confidence.'
    },
    {
      step: 'Step 2',
      title: 'Transparent Heuristic Synthesis',
      desc: 'Our explainable advisory model maps your profile against official Tamil Nadu State Board Class 11 stream syllabi without black-box opacity.'
    },
    {
      step: 'Step 3',
      title: 'Explore Explainable Advisory Report',
      desc: 'Review suggested 4-subject groups, viable alternatives, supporting evidence, conflicting signals, and questions for school counsellors.'
    }
  ];

  return (
    <div className="space-y-16 pb-12">
      
      {/* Advisory Banner */}
      <AdvisoryBanner />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-academic-50 border border-academic-200 text-xs font-semibold text-academic-800">
            <Sparkles className="w-3.5 h-3.5 text-tealAccent-600" />
            <span>Academic Decision-Support • Tamil Nadu State Board Class 11</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Explore Your Higher-Secondary Path with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-academic-800 via-academic-600 to-tealAccent-600">
              Multi-Dimensional Evidence
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Transitioning from Class 10 to Class 11 requires more than looking at marks alone. 
            Discover which Tamil Nadu Higher-Secondary Subject Combinations align best with your academic foundation, natural aptitude, intrinsic interests, confidence, and practical exposure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => navigateTo('dashboard')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-academic-900 hover:bg-academic-800 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Start Guided Assessment</span>
              <ArrowRight className="w-4 h-4 text-tealAccent-300" />
            </button>

            <button
              onClick={() => {
                loadSampleProfile('sample-bio-maths');
                navigateTo('results');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-2xs transition-all cursor-pointer"
            >
              <Users className="w-4 h-4 text-slate-500" />
              <span>Explore Demo Results</span>
            </button>
          </div>

          <div className="pt-2 text-xs text-slate-500 flex items-center justify-center space-x-4">
            <span className="flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-tealAccent-600" />
              <span>100% Free & Open</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-tealAccent-600" />
              <span>No Login Required</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-tealAccent-600" />
              <span>Zero Data Tracking</span>
            </span>
          </div>
        </div>
      </section>

      {/* The 5 Assessment Dimensions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-tealAccent-700">
            Beyond Marks Alone
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            The 5 Dimensions of Academic Evidence
          </h2>
          <p className="text-sm text-slate-600">
            Holistic advisory synthesizes evidence across five proven educational criteria:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {dimensions.map((dim) => {
            const Icon = dim.icon;
            return (
              <div
                key={dim.num}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${dim.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-300">
                      {dim.num}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm">
                    {dim.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {dim.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How the System Works Section */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-academic-700">
              System Architecture
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              How the Explainable Advisory System Works
            </h2>
            <p className="text-sm text-slate-600">
              Transparent, student-centered workflow designed for clarity and confidence:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((st, i) => (
              <div 
                key={st.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3 relative"
              >
                <span className="text-xs font-bold text-academic-700 bg-academic-50 px-2.5 py-1 rounded-full border border-academic-200">
                  {st.step}
                </span>
                <h3 className="font-bold text-slate-900 text-base">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* College Viva / Instant Demo Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-academic-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-lg">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-tealAccent-400 bg-tealAccent-950/60 px-3 py-1 rounded-full border border-tealAccent-800">
              Examiner & Counsellor Quick Demo
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
              Test with Pre-Calibrated Student Personas
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Evaluating the platform during a final-year project viva or counselling session? 
              Select one of our illustrative profiles to instantly see how the multi-dimensional explainable engine responds:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {SAMPLE_PROFILES.map((profile) => (
                <button
                  key={profile.id}
                  onClick={() => {
                    loadSampleProfile(profile.id);
                    navigateTo('results');
                  }}
                  className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-tealAccent-400 text-left transition-all group cursor-pointer"
                >
                  <p className="text-xs font-semibold text-tealAccent-300 group-hover:text-tealAccent-200">
                    {profile.badge.replace('Illustrative Sample Profile: ', '')}
                  </p>
                  <p className="text-sm font-bold text-white mt-1">
                    {profile.profileData.studentName}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                    {profile.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy and Responsible AI Disclaimer Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3">
        <div className="inline-flex items-center space-x-2 text-slate-400">
          <ShieldCheck className="w-5 h-5 text-tealAccent-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Privacy & Responsible Advisory Guarantee
          </span>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed max-w-2xl mx-auto">
          This academic tool runs purely inside your web browser. No personal identification, school names, marks, or responses are stored on servers or shared with commercial entities. It serves strictly as an illustrative educational guide for Tamil Nadu State Board Class 10 students.
        </p>
      </section>

    </div>
  );
}
