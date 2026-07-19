import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDashboard } from "../../context/DashboardContext";
import { BrainCircuit, FileText, Sparkles, TrendingUp, AlertTriangle, DatabaseZap } from 'lucide-react';


function LiveActivityFeed() {
  const { timeline } = useDashboard();

  const events = timeline.map((item, index) => ({
    id: index,
    title: `AI analyzed: ${item.title}`,
    time: item.time,
    icon: BrainCircuit,
    dot: "bg-cyan-400",
  }));

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-white">Live Activity Feed</h2>
        <p className="mt-1 text-sm text-slate-400">Real-time AI operations and organizational signals.</p>
      </div>

      <div className="space-y-3">
        <AnimatePresence initial={false}>
          {events.map((event) => {
            const Icon = event.icon;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3"
              >
                <div className="mt-0.5 rounded-xl border border-white/10 bg-white/5 p-2 text-cyan-300">
                  <Icon className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${event.dot}`} />
                    <p className="text-sm font-medium text-white">{event.title}</p>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-500">{event.time}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default LiveActivityFeed;
