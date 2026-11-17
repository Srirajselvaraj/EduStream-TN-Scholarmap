import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ConflictingEvidenceBox({ conflicts = [] }) {
  if (!conflicts || conflicts.length === 0) {
    return (
      <div className="bg-tealAccent-50/60 border border-tealAccent-200 rounded-2xl p-4 sm:p-5 flex items-start space-x-3.5">
        <CheckCircle2 className="w-5 h-5 text-tealAccent-700 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-tealAccent-900">
            Harmonious Multi-Dimensional Evidence
          </h4>
          <p className="text-xs text-tealAccent-800 mt-1 leading-relaxed">
            No severe divergences detected between your marks, cognitive aptitude, expressed interests, and academic self-efficacy for this stream. The dimensions show coherent support.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
      <div className="flex items-start space-x-3">
        <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-amber-900">
            Conflicting Evidence & Divergence Alerts ({conflicts.length})
          </h4>
          <p className="text-xs text-amber-800 mt-0.5">
            Transparent disclosure of tensions between different dimensions of your profile:
          </p>
        </div>
      </div>

      <div className="space-y-2.5 pt-1">
        {conflicts.map((conflict, idx) => (
          <div 
            key={idx}
            className="bg-white/90 border border-amber-200/80 rounded-xl p-3.5 text-xs text-slate-700 shadow-2xs space-y-1"
          >
            <p className="font-bold text-amber-900">
              ⚠️ {conflict.title}
            </p>
            <p className="leading-relaxed text-slate-600">
              {conflict.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
