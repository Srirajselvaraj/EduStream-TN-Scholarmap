import React from 'react';
import { useAssessment } from '../context/AssessmentContext';
import { 
  GraduationCap, 
  ShieldCheck, 
  BrainCircuit, 
  HeartHandshake, 
  Target, 
  Compass, 
  BookOpen, 
  Lock, 
  Cpu, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import AdvisoryBanner from '../components/common/AdvisoryBanner';

export default function AboutPage() {
  const { navigateTo } = useAssessment();

  const ethicalPrinciples = [
    {
      title: 'Explainable AI Over "Black-Box" Sorting',
      desc: 'In educational counseling, suggesting a stream without understandable reasons is unhelpful and anxiety-inducing. Our system generates explicit, human-readable rationale for every dimension.',
      icon: Cpu
    },
    {
      title: 'Privacy by Design & Zero Server Storage',
      desc: 'We do not collect student EMIS numbers, Aadhaar, school contact details, or telephone numbers. All evaluations run purely in client-side browser memory.',
      icon: Lock
    },
    {
      title: 'Advisory Decision Support, Not Predetermination',
      desc: 'No algorithm should decide a student’s academic future. The platform is designed as an advisory tool for constructive discussions with parents and school counselors.',
      icon: ShieldCheck
    },
    {
      title: 'Multi-Dimensional Evidence Triangulation',
      desc: 'Combining academic marks with situational aptitude, intrinsic curiosity, self-efficacy, and exposure prevents the common pitfall of selecting streams based on marks alone.',
      icon: Layers
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Top Advisory Banner */}
      <AdvisoryBanner compact={true} />

      {/* Main Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold px-2.5 py-1 rounded bg-academic-50 text-academic-800 border border-academic-200">
          <GraduationCap className="w-3.5 h-3.5 text-academic-700" />
          <span>Academic Final-Year Software Engineering Project</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Explainable AI-Based Multi-Dimensional Academic Stream Recommendation System
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
          An educational technology system designed specifically for Tamil Nadu State Board Class 10 students making the crucial transition to higher-secondary (Class 11) four-subject combinations.
        </p>
      </div>

      {/* Project Objective Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Project Purpose & Problem Statement
        </h2>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            In Tamil Nadu, tens of thousands of Class 10 SSLC students select their Class 11 stream groups (such as Bio-Maths, Computer-Maths, Commerce, or Arts) largely based on parental assumptions or overall percentage. This frequently leads to severe academic mismatch, high stress in Class 11, and difficulty coping with specialized higher-secondary science or commerce syllabi.
          </p>
          <p>
            <strong>The Core Objective:</strong> To build a transparent, student-centered advisory platform that evaluates multiple dimensions of student evidence—academic marks, cognitive aptitude, genuine interest, academic self-efficacy, and co-curricular exposure—and presents clearly explained subject combinations without misleading AI promises.
          </p>
        </div>
      </div>

      {/* The 5 Assessment Dimensions Theoretical Grounding */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Theoretical Foundations of the 5 Dimensions
          </h2>
          <p className="text-xs text-slate-500">
            Grounding educational decision support in established cognitive and psychological models
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-2">
            <div className="flex items-center space-x-2 text-academic-800">
              <BookOpen className="w-4 h-4 text-academic-700" />
              <h3 className="text-sm font-bold">1. Academic Performance (SSLC Marks)</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Assesses fundamental subject competencies in Tamil Nadu Class 10 syllabi (Language, English, Mathematics, Science, Social Science) to verify prerequisite preparedness.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-2">
            <div className="flex items-center space-x-2 text-indigo-800">
              <BrainCircuit className="w-4 h-4 text-indigo-700" />
              <h3 className="text-sm font-bold">2. Cognitive Aptitude (Reasoning Sub-Domains)</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Based on standardized cognitive taxonomies measuring numerical agility, deductive logic, verbal comprehension, spatial visualization, and applied problem-solving.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-2">
            <div className="flex items-center space-x-2 text-teal-800">
              <HeartHandshake className="w-4 h-4 text-teal-700" />
              <h3 className="text-sm font-bold">3. Subject Interests (Holland RIASEC Adapted)</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Adapted from John Holland's vocational interest typologies to map intrinsic curiosity across physical sciences, life systems, computing, trade/accounting, and civic studies.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-2">
            <div className="flex items-center space-x-2 text-emerald-800">
              <Target className="w-4 h-4 text-emerald-700" />
              <h3 className="text-sm font-bold">4. Academic Self-Efficacy (Bandura Model)</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Draws on Albert Bandura's social cognitive theory, differentiating between "liking a subject" (interest) and the student's belief in their resilience to overcome difficult homework and laboratory tasks.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-2 md:col-span-2">
            <div className="flex items-center space-x-2 text-amber-800">
              <Compass className="w-4 h-4 text-amber-700" />
              <h3 className="text-sm font-bold">5. Experiential Exposure & Co-Curricular Evidence</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Accounts for real-world school exhibitions, science clubs, computer labs, student events, and youth organizations (NCC, Scouts, NSS) that validate practical engagement.
            </p>
          </div>
        </div>
      </div>

      {/* Ethical AI & Responsible Technology Principles */}
      <div className="bg-slate-100/70 rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Responsible AI & Educational Ethics Principles
          </h2>
          <p className="text-xs text-slate-600">
            Adhering to strict standards of educational technology integrity
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ethicalPrinciples.map((prin) => {
            const Icon = prin.icon;
            return (
              <div key={prin.title} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-academic-50 border border-academic-100 flex items-center justify-center text-academic-800">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  {prin.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {prin.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Back to Dashboard */}
      <div className="text-center pt-4">
        <button
          onClick={() => navigateTo('dashboard')}
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-academic-900 hover:bg-academic-800 text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer"
        >
          <span>Go to Student Assessment Dashboard</span>
          <ArrowRight className="w-4 h-4 text-tealAccent-300" />
        </button>
      </div>

    </div>
  );
}
