import React from 'react';
import { ShieldAlert, Info } from 'lucide-react';

export default function AdvisoryBanner({ compact = false }) {
  if (compact) {
    return (
      <div className="bg-academic-50 border border-academic-200 rounded-lg p-3 text-xs text-academic-900 flex items-start space-x-2.5">
        <Info className="w-4 h-4 text-academic-700 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold">Consultative Advisory Notice:</span> Recommendations are illustrative decision-support suggestions based on self-reported dimensions. Final stream selection should always be made in discussion with parents and official school guidance teachers.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-academic-50 via-tealAccent-50/30 to-academic-50 border-y border-academic-200/80 py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm text-slate-700">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 rounded-full bg-academic-100 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-3.5 h-3.5 text-academic-800" />
          </div>
          <p className="leading-tight">
            <strong className="text-academic-900 font-semibold">Important Advisory Standard:</strong>{' '}
            Educational stream exploration only • No college recommendations or career predictions • Non-binding guidance.
          </p>
        </div>
        <span className="hidden md:inline-block text-xs font-semibold text-tealAccent-800 bg-tealAccent-100/80 px-2 py-0.5 rounded border border-tealAccent-200 whitespace-nowrap">
          TN Class 10 to 11
        </span>
      </div>
    </div>
  );
}
