import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { month: 'Jan', incidents: 8, predictedRisk: 42, preventionScore: 72 },
  { month: 'Feb', incidents: 10, predictedRisk: 48, preventionScore: 74 },
  { month: 'Mar', incidents: 7, predictedRisk: 39, preventionScore: 78 },
  { month: 'Apr', incidents: 9, predictedRisk: 51, preventionScore: 76 },
  { month: 'May', incidents: 6, predictedRisk: 36, preventionScore: 82 },
  { month: 'Jun', incidents: 5, predictedRisk: 31, preventionScore: 88 },
];

function RiskPredictionChart() {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-white">AI Risk Prediction Trend</h2>
        <p className="mt-1 text-sm text-slate-400">
          AI-powered forecasting of organizational failure risk.
        </p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 16, left: -10, bottom: 0 }}>
            <CartesianGrid stroke="#334155" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="incidents"
              stroke="#22d3ee"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#22d3ee' }}
              activeDot={{ r: 6 }}
              animationDuration={900}
            />
            <Line
              type="monotone"
              dataKey="predictedRisk"
              stroke="#f472b6"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#f472b6' }}
              activeDot={{ r: 6 }}
              animationDuration={900}
            />
            <Line
              type="monotone"
              dataKey="preventionScore"
              stroke="#34d399"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#34d399' }}
              activeDot={{ r: 6 }}
              animationDuration={900}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RiskPredictionChart;
