import React from 'react';

export default function DimensionBarChart({ dimensionalScores }) {
  const bars = [
    { label: '1. Academic Foundation', value: dimensionalScores?.academic || 0, color: 'bg-blue-600', textColor: 'text-blue-700' },
    { label: '2. Aptitude & Reasoning', value: dimensionalScores?.aptitude || 0, color: 'bg-indigo-600', textColor: 'text-indigo-700' },
    { label: '3. Subject Interests', value: dimensionalScores?.interest || 0, color: 'bg-teal-600', textColor: 'text-teal-700' },
    { label: '4. Academic Self-Efficacy', value: dimensionalScores?.selfEfficacy || 0, color: 'bg-emerald-600', textColor: 'text-emerald-700' },
    { label: '5. Experiential Exposure', value: dimensionalScores?.exposure || 0, color: 'bg-amber-600', textColor: 'text-amber-700' }
  ];

  return (
    <div className="space-y-3 p-4 bg-white rounded-xl border border-slate-200">
      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
        Dimension-by-Dimension Breakdown
      </h4>
      <div className="space-y-2.5">
        {bars.map((bar) => (
          <div key={bar.label} className="space-y-1">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-slate-700">{bar.label}</span>
              <span className={`font-bold ${bar.textColor}`}>{bar.value}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div
                className={`h-full ${bar.color} transition-all duration-500 rounded-full`}
                style={{ width: `${Math.min(100, Math.max(5, bar.value))}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
