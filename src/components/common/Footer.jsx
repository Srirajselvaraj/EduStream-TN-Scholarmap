import React from 'react';
import { useAssessment } from '../../context/AssessmentContext';
import { GraduationCap, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const { navigateTo } = useAssessment();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-sm mt-16 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Academic Project Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-academic-700 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5 text-tealAccent-300" />
              </div>
              <span className="font-bold text-white text-base tracking-tight">EduStream TN</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              College Final-Year Academic Project: <em>"Explainable AI-Based Multi-Dimensional Academic Stream Recommendation System"</em>. 
              Designed for Tamil Nadu State Board Class 10 students transitioning to Class 11 higher-secondary subject combinations.
            </p>
            <div className="flex items-center space-x-2 text-xs text-tealAccent-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Advisory-Only • Client-Side Heuristic Model • Zero Cloud Tracking</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">Quick Navigation</p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><button onClick={() => navigateTo('landing')} className="hover:text-white transition-colors">Platform Overview</button></li>
              <li><button onClick={() => navigateTo('dashboard')} className="hover:text-white transition-colors">Student Dashboard</button></li>
              <li><button onClick={() => navigateTo('profile')} className="hover:text-white transition-colors">Class 10 Marks Entry</button></li>
              <li><button onClick={() => navigateTo('results')} className="hover:text-white transition-colors">Explainable Recommendations</button></li>
              <li><button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">Methodology & Ethics</button></li>
            </ul>
          </div>

          {/* Column 3: Statutory Scope & State Board */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">Educational Scope</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Curriculum structures reference the Tamil Nadu Directorate of Government Examinations (DGE) Part III 4-subject higher-secondary groups.
            </p>
            <div className="pt-2 text-[11px] text-slate-500">
              Note: This system does not recommend colleges or predict career outcomes.
            </div>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} EduStream TN • Academic Final-Year Software Engineering Project.</p>
          <p className="mt-2 sm:mt-0 flex items-center space-x-1">
            <span>Built for Tamil Nadu SSLC Students</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
