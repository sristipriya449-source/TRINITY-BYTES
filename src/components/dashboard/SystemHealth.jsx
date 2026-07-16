import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  BrainCircuit,
  Database,
  BellRing,
  Gauge,
  CheckCircle2,
  CircleDashed,
  Zap,
} from 'lucide-react';

const systems = [
  {
    name: 'AI Engine',
    state: 'Healthy',
    tone: 'text-emerald-300 border-emerald-400/20 bg-emerald-500/10',
    icon: BrainCircuit,
    dot: 'bg-emerald-400',
  },
  {
    name: 'Knowledge Base',
    state: 'Synced',
    tone: 'text-emerald-300 border-emerald-400/20 bg-emerald-500/10',
    icon: Database,
    dot: 'bg-emerald-400',
  },
  {
    name: 'Incident Monitor',
    state: 'Active',
    tone: 'text-sky-300 border-sky-400/20 bg-sky-500/10',
    icon: Activity,
    dot: 'bg-sky-400',
  },
  {
    name: 'Prediction Engine',
    state: 'Processing',
    tone: 'text-amber-300 border-amber-400/20 bg-amber-500/10',
    icon: Gauge,
    dot: 'bg-amber-400',
  },
  {
    name: 'Alert System',
    state: 'Online',
    tone: 'text-emerald-300 border-emerald-400/20 bg-emerald-500/10',
    icon: BellRing,
    dot: 'bg-emerald-400',
  },
];

function SystemHealth() {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-white">System Health</h2>
        <p className="mt-1 text-sm text-slate-400">Real-time operational status across the platform.</p>
      </div>

      <div className="space-y-3">
        {systems.map((system, index) => {
          const Icon = system.icon;

          return (
            <motion.div
              key={system.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.06 }}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-cyan-300">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{system.name}</p>
                  <p className="text-xs text-slate-400">{system.state}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${system.tone}`}>
                  {system.state}
                </span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className={`h-2.5 w-2.5 rounded-full ${system.dot}`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-between rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3">
        <div className="flex items-center gap-2 text-sm text-emerald-300">
          <CheckCircle2 className="h-4 w-4" />
          <span>Overall System Health</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <Zap className="h-4 w-4 text-emerald-300" />
          98.7%
        </div>
      </div>
    </div>
  );
}

export default SystemHealth;
