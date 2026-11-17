import React from 'react';
import { useAssessment } from '../context/AssessmentContext';
import { LEARNING_EXPOSURE_ACTIVITIES } from '../data/assessmentQuestions';
import { 
  Compass, 
  ArrowRight, 
  ArrowLeft, 
  CheckSquare, 
  Square, 
  Sparkles,
  Award
} from 'lucide-react';

export default function ExposurePage() {
  const { 
    navigateTo, 
    studentProfile, 
    toggleExposureActivity,
    updateExposureDepth 
  } = useAssessment();

  const depthOptions = ['Beginner Explorer', 'Active Member', 'Winner / Leader'];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Navigation Top */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigateTo('self-efficacy')}
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Self-Efficacy</span>
        </button>
        <span className="text-xs font-bold text-academic-700 bg-academic-50 px-3 py-1 rounded-full border border-academic-200">
          Dimension 5 of 5: Learning Exposure
        </span>
      </div>

      {/* Main Header */}
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Learning Exposure & Co-Curricular Experiences
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          Real-world participation provides practical evidence of your strengths outside textbook exams. Select the activities you have participated in during school or as personal projects.
        </p>
      </div>

      {/* Activities Grid */}
      <div className="space-y-4">
        {LEARNING_EXPOSURE_ACTIVITIES.map((activity) => {
          const recorded = studentProfile.exposureActivities.find(a => a.id === activity.id);
          const isSelected = Boolean(recorded);

          return (
            <div 
              key={activity.id}
              className={`
                bg-white rounded-2xl border p-5 shadow-2xs transition-all space-y-3
                ${isSelected ? 'border-tealAccent-500 ring-1 ring-tealAccent-200 bg-tealAccent-50/20' : 'border-slate-200 hover:border-slate-300'}
              `}
            >
              <div className="flex items-start justify-between gap-3">
                <div 
                  className="flex items-start space-x-3 cursor-pointer flex-1"
                  onClick={() => toggleExposureActivity(activity.id)}
                >
                  <button 
                    type="button"
                    className="mt-0.5 text-slate-400 focus:outline-none"
                    aria-label={`Toggle ${activity.title}`}
                  >
                    {isSelected ? (
                      <CheckSquare className="w-5 h-5 text-tealAccent-600" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-300 hover:text-slate-400" />
                    )}
                  </button>

                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2 flex-wrap">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        {activity.categoryLabel}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900">
                        {activity.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Depth Selection if checked */}
              {isSelected && (
                <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-slate-500">
                    Level of Participation / Achievement:
                  </span>
                  <div className="flex items-center space-x-1.5 flex-wrap">
                    {depthOptions.map((depth) => {
                      const isCurrentDepth = recorded.depth === depth;
                      return (
                        <button
                          key={depth}
                          onClick={() => updateExposureDepth(activity.id, depth)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            isCurrentDepth 
                              ? 'bg-academic-900 text-white shadow-2xs' 
                              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {depth}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Completion & Generation Section */}
      <div className="p-6 bg-gradient-to-br from-academic-900 to-slate-900 text-white rounded-3xl shadow-md space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-academic-800 flex items-center justify-center text-tealAccent-300">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">
              All 5 Dimensions Completed
            </h3>
            <p className="text-xs text-slate-300">
              Ready to generate your explainable higher-secondary stream recommendations.
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
          <button
            onClick={() => navigateTo('self-efficacy')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors cursor-pointer"
          >
            Previous: Self-Efficacy
          </button>

          <button
            onClick={() => navigateTo('results')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-tealAccent-600 hover:bg-tealAccent-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>Generate Explainable Recommendations</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

    </div>
  );
}
