import React, { useState } from 'react';
import { 
  GraduationCap, 
  BrainCircuit, 
  HeartHandshake, 
  Target, 
  Compass, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

export default function EvidenceAccordion({ stream }) {
  const [openTab, setOpenTab] = useState('academic');

  const evidenceTabs = [
    {
      id: 'academic',
      title: '1. Academic Foundation Evidence',
      icon: GraduationCap,
      score: stream.dimensionalScores.academic,
      content: stream.supportingEvidence.academic,
      note: 'Derived from Class 10 SSLC subject performance.'
    },
    {
      id: 'aptitude',
      title: '2. Aptitude & Cognitive Evidence',
      icon: BrainCircuit,
      score: stream.dimensionalScores.aptitude,
      content: stream.supportingEvidence.aptitude,
      note: 'Based on numerical, logical, verbal, and spatial reasoning tasks.'
    },
    {
      id: 'interest',
      title: '3. Subject Interest Evidence',
      icon: HeartHandshake,
      score: stream.dimensionalScores.interest,
      content: stream.supportingEvidence.interest,
      note: 'Self-reported intrinsic curiosity across 7 core academic domains.'
    },
    {
      id: 'selfEfficacy',
      title: '4. Academic Self-Efficacy Evidence',
      icon: Target,
      score: stream.dimensionalScores.selfEfficacy,
      content: stream.supportingEvidence.selfEfficacy,
      note: 'Perceived confidence in managing practical labs, formulas, and extensive reading.'
    },
    {
      id: 'exposure',
      title: '5. Experiential Exposure Evidence',
      icon: Compass,
      score: stream.dimensionalScores.exposure,
      content: stream.supportingEvidence.exposure,
      note: 'Validation through science exhibitions, clubs, coding, or civic activities.'
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-800">
            Explainable 5-Dimensional Evidence Breakdown: {stream.code}
          </h3>
          <p className="text-xs text-slate-500">
            Click each dimension below to inspect the natural-language rationale
          </p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded bg-tealAccent-100 text-tealAccent-800">
          Transparent XAI
        </span>
      </div>

      <div className="divide-y divide-slate-100">
        {evidenceTabs.map((tab) => {
          const Icon = tab.icon;
          const isOpen = openTab === tab.id;

          return (
            <div key={tab.id} className="transition-colors">
              <button
                onClick={() => setOpenTab(isOpen ? '' : tab.id)}
                className={`w-full p-4 flex items-center justify-between text-left transition-colors ${
                  isOpen ? 'bg-academic-50/40' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${isOpen ? 'bg-academic-900 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      {tab.title}
                    </span>
                    <span className="ml-2 text-[11px] font-semibold text-tealAccent-700">
                      ({tab.score}% Index)
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-slate-400">
                  {isOpen ? <ChevronUp className="w-4 h-4 text-academic-800" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-700 bg-academic-50/20 border-t border-slate-100 space-y-2">
                  <p className="leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                    {tab.content}
                  </p>
                  <p className="text-[11px] text-slate-400 italic">
                    {tab.note}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
