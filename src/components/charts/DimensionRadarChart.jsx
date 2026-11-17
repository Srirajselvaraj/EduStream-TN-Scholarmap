import React from 'react';

/**
 * Pure SVG 5-Axis Multi-Dimensional Radar Chart
 * Displays student dimensional profile against 5 evidence dimensions:
 * 1. Academic Marks
 * 2. Aptitude Index
 * 3. Subject Interests
 * 4. Self-Efficacy
 * 5. Learning Exposure
 */
export default function DimensionRadarChart({ dimensionalScores, size = 320 }) {
  const dimensions = [
    { key: 'academic', label: '1. Academic', value: dimensionalScores?.academic || 50 },
    { key: 'aptitude', label: '2. Aptitude', value: dimensionalScores?.aptitude || 50 },
    { key: 'interest', label: '3. Interests', value: dimensionalScores?.interest || 50 },
    { key: 'selfEfficacy', label: '4. Self-Efficacy', value: dimensionalScores?.selfEfficacy || 50 },
    { key: 'exposure', label: '5. Exposure', value: dimensionalScores?.exposure || 50 }
  ];

  const center = size / 2;
  const radius = (size / 2) - 45; // margin for labels
  const totalAxes = dimensions.length;

  // Helper to calculate coordinates
  const getCoordinates = (value, index) => {
    const angle = (Math.PI * 2 / totalAxes) * index - (Math.PI / 2);
    const distance = (value / 100) * radius;
    const x = center + distance * Math.cos(angle);
    const y = center + distance * Math.sin(angle);
    return { x, y, angle };
  };

  // Background grid levels (20%, 40%, 60%, 80%, 100%)
  const levels = [20, 40, 60, 80, 100];

  // Polygon points for the student's values
  const studentPoints = dimensions.map((d, i) => {
    const coords = getCoordinates(d.value, i);
    return `${coords.x},${coords.y}`;
  }).join(' ');

  return (
    <div className="flex flex-col items-center justify-center p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div className="text-center mb-1">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          Multi-Dimensional Balance Profile
        </h4>
        <p className="text-[11px] text-slate-500">
          Composite footprint across all 5 evaluated dimensions
        </p>
      </div>

      <svg width={size} height={size} className="overflow-visible select-none my-2">
        {/* Background concentric rings */}
        {levels.map((lvl) => {
          const ringPoints = dimensions.map((_, i) => {
            const coords = getCoordinates(lvl, i);
            return `${coords.x},${coords.y}`;
          }).join(' ');

          return (
            <polygon
              key={lvl}
              points={ringPoints}
              fill={lvl === 100 ? '#f8fafc' : 'none'}
              stroke="#e2e8f0"
              strokeWidth="1"
              strokeDasharray={lvl < 100 ? "3,3" : undefined}
            />
          );
        })}

        {/* Axes lines from center */}
        {dimensions.map((d, i) => {
          const coords = getCoordinates(100, i);
          return (
            <line
              key={d.key}
              x1={center}
              y1={center}
              x2={coords.x}
              y2={coords.y}
              stroke="#cbd5e1"
              strokeWidth="1"
            />
          );
        })}

        {/* Student Profile Shape */}
        <polygon
          points={studentPoints}
          fill="rgba(13, 148, 136, 0.25)"
          stroke="#0d9488"
          strokeWidth="2.5"
          className="transition-all duration-500 ease-out"
        />

        {/* Points on each vertex */}
        {dimensions.map((d, i) => {
          const coords = getCoordinates(d.value, i);
          return (
            <g key={`point-${d.key}`}>
              <circle
                cx={coords.x}
                cy={coords.y}
                r="4.5"
                fill="#0f766e"
                stroke="#ffffff"
                strokeWidth="2"
                className="drop-shadow-xs"
              />
              <text
                x={coords.x}
                y={coords.y - 8}
                textAnchor="middle"
                fontSize="10"
                fontWeight="bold"
                fill="#0f766e"
              >
                {d.value}%
              </text>
            </g>
          );
        })}

        {/* Outer Axis Labels */}
        {dimensions.map((d, i) => {
          const coords = getCoordinates(118, i);
          return (
            <text
              key={`label-${d.key}`}
              x={coords.x}
              y={coords.y + 4}
              textAnchor={coords.x > center + 10 ? 'start' : coords.x < center - 10 ? 'end' : 'middle'}
              fontSize="11"
              fontWeight="600"
              fill="#334155"
              className="antialiased"
            >
              {d.label}
            </text>
          );
        })}
      </svg>

      {/* Legend & Note */}
      <div className="flex items-center space-x-2 text-[11px] text-slate-500 mt-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
        <span className="w-2.5 h-2.5 rounded-full bg-tealAccent-600 inline-block" />
        <span className="font-medium text-slate-700">Student Profile Area</span>
        <span className="text-slate-400">•</span>
        <span>Outermost Ring = 100% Benchmark</span>
      </div>
    </div>
  );
}
