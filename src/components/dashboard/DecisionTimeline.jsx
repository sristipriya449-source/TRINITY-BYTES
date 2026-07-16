import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightCircle, BrainCircuit, ShieldAlert, Sparkles, TrendingUp } from 'lucide-react';

const events = [
  {
    title: 'API Gateway Migration Approved',
    date: 'May 02, 2026',
    description: 'Leadership approved the migration to improve routing resilience.',
    status: 'Completed',
    statusTone: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/20',
    icon: ArrowRightCircle,
  },
  {
    title: 'Monitoring Thresholds Updated',
    date: 'May 11, 2026',
    description: 'Sensitivity thresholds were refined to catch early performance drift.',
    status: 'Completed',
    statusTone: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/20',
    icon: ShieldAlert,
  },
  {
    title: 'API Latency Spike Detected',
    date: 'May 15, 2026',
    description: 'The system flagged a temporary increase in request latency.',
    status: 'Warning',
    statusTone: 'bg-amber-500/10 text-amber-300 border-amber-400/20',
    icon: TrendingUp,
  },
  {
    title: 'AI Predicted Increased Customer Impact',
    date: 'May 16, 2026',
    description: 'The model forecasted a likely rise in customer-facing disruption.',
    status: 'Predicted',
    statusTone: 'bg-violet-500/10 text-violet-300 border-violet-400/20',
    icon: BrainCircuit,
  },
  {
    title: 'Preventive Action Recommended',
    date: 'May 16, 2026',
    description: 'The engine recommended increased monitoring and post-deploy review.',
    status: 'Predicted',
    statusTone: 'bg-sky-500/10 text-sky-300 border-sky-400/20',
    icon: Sparkles,
  },
];

function DecisionTimeline() {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-white">AI Decision Timeline</h2>
        <p className="mt-1 text-sm text-slate-400">
          How past decisions influenced current organizational outcomes.
        </p>
      </div>

      <div className="space-y-3">
        {events.map((event, index) => {
          const Icon = event.icon;

          return (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.08 }}
              whileHover={{ scale: 1.01, y: -2 }}
              className="rounded-2xl border border-white/10 bg-slate-950/70 p-4"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-2 text-cyan-300">
                  <Icon className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-sm font-semibold text-white">{event.title}</h3>
                    <span className={`inline-flex w-fit rounded-full border px-2.5 py-1 text-[11px] font-medium ${event.statusTone}`}>
                      {event.status}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-400">{event.description}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-500">{event.date}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default DecisionTimeline;
