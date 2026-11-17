import React from 'react';
import { useAssessment } from '../context/AssessmentContext';
import { 
  GraduationCap, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  AlertCircle, 
  BookOpen, 
  Calculator,
  RotateCcw
} from 'lucide-react';

export default function ProfilePage() {
  const { 
    navigateTo, 
    studentProfile, 
    updateStudentDetails, 
    updateMarks 
  } = useAssessment();

  const subjects = [
    { key: 'tamil', label: 'Language (Tamil / Alternate)', max: 100, hint: 'Part I Language paper' },
    { key: 'english', label: 'English', max: 100, hint: 'Part II English comprehension & writing' },
    { key: 'maths', label: 'Mathematics', max: 100, hint: 'Algebra, geometry, trigonometry, statistics' },
    { key: 'science', label: 'Science (Theory & Practical)', max: 100, hint: 'Physics, Chemistry & Biology combined' },
    { key: 'social', label: 'Social Science', max: 100, hint: 'History, Geography, Civics & Economics' }
  ];

  const mathVal = Number(studentProfile.marks.maths) || 0;
  const scienceVal = Number(studentProfile.marks.science) || 0;
  const socialVal = Number(studentProfile.marks.social) || 0;
  const englishVal = Number(studentProfile.marks.english) || 0;
  const tamilVal = Number(studentProfile.marks.tamil) || 0;

  const total = mathVal + scienceVal + socialVal + englishVal + tamilVal;
  const percentage = Math.round((total / 500) * 100);

  // Performance classification tag
  let balanceTag = "Balanced Academic Foundation";
  if (scienceVal >= 80 && mathVal >= 80) {
    balanceTag = "Strong Quantitative & Science Core";
  } else if (socialVal >= 80 && englishVal >= 75) {
    balanceTag = "Strong Social Sciences & Language Core";
  } else if (mathVal >= 75 && socialVal >= 75) {
    balanceTag = "Strong Commercial & Quantitative Analytical Base";
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Navigation Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigateTo('dashboard')}
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>
        <span className="text-xs font-bold text-academic-700 bg-academic-50 px-3 py-1 rounded-full border border-academic-200">
          Dimension 1 of 5: Academic Performance
        </span>
      </div>

      {/* Main Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Class 10 Academic Profile & SSLC Marks
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          Enter your Tamil Nadu State Board Class 10 marks (out of 100). The advisory model uses these scores to estimate your academic readiness for the rigorous higher-secondary syllabi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Form: Academic Details & Marks Inputs */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Student & School Context Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Institutional Context
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Student Name (or Nickname)
                </label>
                <input
                  type="text"
                  value={studentProfile.studentName}
                  onChange={(e) => updateStudentDetails('studentName', e.target.value)}
                  placeholder="e.g. Selvan M."
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:bg-white focus:ring-1 focus:ring-academic-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Education Board
                </label>
                <input
                  type="text"
                  readOnly
                  value="Tamil Nadu State Board (SSLC)"
                  className="w-full text-xs bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-slate-600 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Medium of Instruction
                </label>
                <select
                  value={studentProfile.medium}
                  onChange={(e) => updateStudentDetails('medium', e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:bg-white focus:ring-1 focus:ring-academic-600 outline-none cursor-pointer"
                >
                  <option value="English">English Medium</option>
                  <option value="Tamil">Tamil Medium</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  School Category
                </label>
                <select
                  value={studentProfile.schoolType}
                  onChange={(e) => updateStudentDetails('schoolType', e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:bg-white focus:ring-1 focus:ring-academic-600 outline-none cursor-pointer"
                >
                  <option value="Government Higher Secondary School">Government Higher Secondary School</option>
                  <option value="Government-Aided Higher Secondary School">Government-Aided School</option>
                  <option value="Matriculation / Private School">Matriculation / Private School</option>
                </select>
              </div>
            </div>
          </div>

          {/* Subject Marks Input Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-800">
                  Subject-Wise SSLC Marks
                </h3>
                <p className="text-xs text-slate-500">
                  Enter actual marks or expected marks out of 100
                </p>
              </div>
              <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                Minimum Pass Mark: 35
              </span>
            </div>

            <div className="space-y-3">
              {subjects.map((sub) => {
                const markValue = studentProfile.marks[sub.key];
                const isUnderPass = markValue !== '' && Number(markValue) < 35;

                return (
                  <div 
                    key={sub.key}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-50/70 border border-slate-200 gap-2"
                  >
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-slate-800">
                        {sub.label}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {sub.hint}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 shrink-0">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={markValue}
                        onChange={(e) => updateMarks(sub.key, e.target.value)}
                        placeholder="0–100"
                        className={`w-24 text-center font-bold text-sm bg-white border rounded-lg px-3 py-1.5 outline-none focus:ring-1 ${
                          isUnderPass 
                            ? 'border-amber-400 text-amber-800 focus:ring-amber-500 bg-amber-50/50' 
                            : 'border-slate-300 text-slate-900 focus:ring-academic-600'
                        }`}
                      />
                      <span className="text-xs text-slate-400 font-medium">/ 100</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Sticky Sidebar: Real-time Performance Summary */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-5 sticky top-24">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Live Performance Summary
            </h3>

            <div className="text-center p-5 bg-gradient-to-br from-academic-50 to-tealAccent-50/40 rounded-xl border border-academic-100 space-y-1">
              <div className="text-3xl font-black text-slate-900">
                {total} <span className="text-base text-slate-400 font-normal">/ 500</span>
              </div>
              <div className="text-sm font-bold text-tealAccent-700">
                {percentage}% Aggregate
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Academic Profile Trend</span>
                <span className="font-semibold text-slate-800 text-right">{balanceTag}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Science + Maths Base</span>
                <span className="font-bold text-academic-700">{scienceVal + mathVal} / 200</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Social Science</span>
                <span className="font-bold text-academic-700">{socialVal} / 100</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => navigateTo('aptitude')}
                className="w-full py-3 px-4 rounded-xl bg-academic-900 hover:bg-academic-800 text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Save & Continue to Aptitude</span>
                <ArrowRight className="w-3.5 h-3.5 text-tealAccent-300" />
              </button>

              <button
                onClick={() => navigateTo('dashboard')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors cursor-pointer"
              >
                Save & Return to Dashboard
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
