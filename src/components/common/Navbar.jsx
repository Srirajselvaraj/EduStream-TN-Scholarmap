import React from 'react';
import { useAssessment } from '../../context/AssessmentContext';
import { SAMPLE_PROFILES } from '../../data/sampleProfiles';
import { GraduationCap, BookOpen, UserCheck, Sparkles, HelpCircle, Menu, X, RotateCcw } from 'lucide-react';

export default function Navbar() {
  const { 
    activeScreen, 
    navigateTo, 
    activeSampleProfileId, 
    loadSampleProfile, 
    resetAll,
    completionStatus,
    sidebarOpen,
    setSidebarOpen
  } = useAssessment();

  const navLinks = [
    { id: 'landing', label: 'Home', icon: GraduationCap },
    { id: 'dashboard', label: 'Dashboard', icon: BookOpen },
    { id: 'results', label: 'Recommendations', icon: Sparkles, badge: completionStatus.completedCount >= 2 ? 'Active' : null },
    { id: 'about', label: 'About Project', icon: HelpCircle }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Context */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigateTo('landing')}>
            <div className="w-10 h-10 rounded-xl bg-academic-900 text-white flex items-center justify-center shadow-sm">
              <GraduationCap className="w-6 h-6 text-tealAccent-300" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg text-slate-900 tracking-tight">EduStream TN</span>
                <span className="hidden sm:inline-block text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-academic-50 text-academic-800 border border-academic-200">
                  TN Class 10 to 11
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden md:block">
                Explainable Multi-Dimensional Stream Advisory
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeScreen === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-academic-50 text-academic-900 font-semibold' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-academic-700' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="ml-1 text-[10px] bg-tealAccent-100 text-tealAccent-800 font-bold px-1.5 py-0.5 rounded-full border border-tealAccent-300">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick Demo Profile Switcher (College Viva / Examiner Demo) */}
          <div className="hidden sm:flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 rounded-lg p-1.5 shadow-xs">
              <UserCheck className="w-4 h-4 text-slate-400 ml-1" />
              <label htmlFor="sample-switcher" className="text-xs font-medium text-slate-600 whitespace-nowrap">
                Demo Profile:
              </label>
              <select
                id="sample-switcher"
                value={activeSampleProfileId}
                onChange={(e) => loadSampleProfile(e.target.value)}
                className="bg-white text-xs font-semibold text-slate-800 border border-slate-200 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-academic-600 cursor-pointer"
              >
                {SAMPLE_PROFILES.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
                <option value="empty">-- Blank Slate (New Assessment) --</option>
              </select>
            </div>

            <button
              onClick={resetAll}
              title="Reset all inputs to blank"
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
