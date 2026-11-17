import React from 'react';
import { useAssessment } from '../../context/AssessmentContext';
import { SAMPLE_PROFILES } from '../../data/sampleProfiles';
import { 
  Home, 
  LayoutDashboard, 
  FileText, 
  BrainCircuit, 
  HeartHandshake, 
  Target, 
  Compass, 
  Award, 
  Info, 
  CheckCircle2, 
  Circle, 
  X,
  UserCheck
} from 'lucide-react';

export default function Sidebar() {
  const { 
    activeScreen, 
    navigateTo, 
    sidebarOpen, 
    setSidebarOpen,
    completionStatus,
    activeSampleProfileId,
    loadSampleProfile
  } = useAssessment();

  const assessmentSteps = [
    { id: 'profile', label: '1. Academic Profile', icon: FileText, done: completionStatus.hasMarks },
    { id: 'aptitude', label: '2. Aptitude Evaluation', icon: BrainCircuit, done: completionStatus.hasAptitude },
    { id: 'interests', label: '3. Subject Interests', icon: HeartHandshake, done: completionStatus.hasInterests },
    { id: 'self-efficacy', label: '4. Self-Efficacy', icon: Target, done: completionStatus.hasSelfEfficacy },
    { id: 'exposure', label: '5. Learning Exposure', icon: Compass, done: completionStatus.hasExposure }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <aside className={`
        fixed top-0 bottom-0 left-0 z-50 w-72 bg-white border-r border-slate-200 p-5 flex flex-col justify-between transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:static lg:w-64 lg:z-0 lg:min-h-[calc(100vh-4rem)]
      `}>
        <div className="space-y-6">
          
          {/* Mobile Close Button */}
          <div className="flex items-center justify-between lg:hidden border-b border-slate-100 pb-3">
            <span className="font-bold text-slate-800 text-sm">Navigation Menu</span>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Hub Navigation */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              System Modules
            </p>
            <div className="space-y-1">
              <button
                onClick={() => navigateTo('landing')}
                className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeScreen === 'landing' 
                    ? 'bg-academic-50 text-academic-900 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Home className="w-4 h-4 text-slate-400" />
                <span>Landing Page</span>
              </button>

              <button
                onClick={() => navigateTo('dashboard')}
                className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeScreen === 'dashboard' 
                    ? 'bg-academic-50 text-academic-900 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <LayoutDashboard className="w-4 h-4 text-slate-400" />
                <span>Student Dashboard</span>
              </button>

              <button
                onClick={() => navigateTo('results')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeScreen === 'results' 
                    ? 'bg-academic-50 text-academic-900 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <Award className="w-4 h-4 text-tealAccent-600" />
                  <span>Recommendation Results</span>
                </div>
                {completionStatus.completedCount >= 2 && (
                  <span className="text-[10px] bg-tealAccent-50 text-tealAccent-700 font-bold px-1.5 py-0.5 rounded border border-tealAccent-200">
                    Ready
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* 5 Dimensions Assessment Tracker */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                5 Assessment Steps
              </p>
              <span className="text-[11px] font-bold text-academic-700">
                {completionStatus.completedCount}/5 Done
              </span>
            </div>

            <div className="space-y-1">
              {assessmentSteps.map((step) => {
                const Icon = step.icon;
                const isCurrent = activeScreen === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => navigateTo(step.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left ${
                      isCurrent
                        ? 'bg-academic-900 text-white font-semibold shadow-xs'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className={`w-3.5 h-3.5 ${isCurrent ? 'text-tealAccent-300' : 'text-slate-400'}`} />
                      <span className="truncate">{step.label}</span>
                    </div>
                    {step.done ? (
                      <CheckCircle2 className={`w-3.5 h-3.5 ${isCurrent ? 'text-tealAccent-300' : 'text-tealAccent-600'}`} />
                    ) : (
                      <Circle className={`w-3.5 h-3.5 ${isCurrent ? 'text-slate-400' : 'text-slate-300'}`} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Profile Switcher */}
          <div className="lg:hidden pt-3 border-t border-slate-100">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Demo Preset Profile
            </p>
            <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 rounded-lg p-2">
              <UserCheck className="w-4 h-4 text-slate-400" />
              <select
                value={activeSampleProfileId}
                onChange={(e) => loadSampleProfile(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-slate-800 outline-none"
              >
                {SAMPLE_PROFILES.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
                <option value="empty">-- Blank Slate --</option>
              </select>
            </div>
          </div>

        </div>

        {/* Bottom About & Guidelines */}
        <div className="pt-4 border-t border-slate-200">
          <button
            onClick={() => navigateTo('about')}
            className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
              activeScreen === 'about'
                ? 'bg-academic-50 text-academic-900 font-semibold'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
            }`}
          >
            <Info className="w-4 h-4 text-slate-400" />
            <span>About & Responsible AI</span>
          </button>
          <div className="mt-2 px-3 text-[10px] text-slate-400 leading-tight">
            Academic Year 2025–26 • TN DGE Higher Secondary
          </div>
        </div>

      </aside>
    </>
  );
}
