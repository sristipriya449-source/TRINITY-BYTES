import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#0f172a_100%)] px-4 text-slate-100">
      <div className="w-full max-w-xl rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10">
        <div className="flex justify-center">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="relative flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10"
          >
            <motion.div
              animate={{ boxShadow: ['0 0 0 0 rgba(34,211,238,0.2)', '0 0 0 18px rgba(34,211,238,0)', '0 0 0 0 rgba(34,211,238,0.2)'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full"
            />
            <BrainCircuit className="relative h-11 w-11 text-cyan-300" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 text-center"
        >
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            Initializing OrgMind Nexus...
          </h1>
          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Analyzing organizational knowledge...
          </p>
        </motion.div>

        <div className="mt-8">
          <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
            <span>System readiness</span>
            <span>78%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '78%' }}
              transition={{ duration: 1.6, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
