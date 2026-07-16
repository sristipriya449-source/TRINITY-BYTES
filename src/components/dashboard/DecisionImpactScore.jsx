import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Clock3 } from 'lucide-react';

function DecisionImpactScore() {
  const score = 87;
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-white">Decision Impact Score</h2>
        <p className="mt-1 text-sm text-slate-400">
          AI-calculated business impact from recent organizational decisions.
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex justify-center lg:justify-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex h-40 w-40 items-center justify-center"
          >
            <svg viewBox="0 0 140 140" className="h-40 w-40 -rotate-90">
              <circle cx="70" cy="70" r={radius} stroke="#1e293b" strokeWidth="12" fill="none" />
              <motion.circle
                cx="70"
                cy="70"
                r={radius}
                stroke="#22d3ee"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: offset }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </svg>
            <div className="absolute text-center">
              <p className="text-4xl font-semibold text-white">{score}</p>
              <p className="text-sm text-slate-400">/ 100</p>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 space-y-3">
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3">
            <div className="flex items-center gap-2 text-cyan-300">
              <ShieldCheck className="h-4 w-4" />
              <p className="text-sm font-semibold">Prevented Failures</p>
            </div>
            <p className="mt-2 text-2xl font-semibold text-white">34</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3">
            <div className="flex items-center gap-2 text-emerald-300">
              <TrendingUp className="h-4 w-4" />
              <p className="text-sm font-semibold">Estimated Cost Saved</p>
            </div>
            <p className="mt-2 text-2xl font-semibold text-white">$240K</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3">
            <div className="flex items-center gap-2 text-violet-300">
              <Clock3 className="h-4 w-4" />
              <p className="text-sm font-semibold">Response Time Improved</p>
            </div>
            <p className="mt-2 text-2xl font-semibold text-white">42%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DecisionImpactScore;
