import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, FileText, Sparkles, TrendingUp, AlertTriangle, DatabaseZap } from 'lucide-react';

const initialEvents = [
  {
    id: 1,
    title: 'AI analyzed Incident #124',
    time: '2 min ago',
    icon: BrainCircuit,
    dot: 'bg-cyan-400',
  },
  {
    id: 2,
    title: 'New meeting notes indexed',
    time: '5 min ago',
    icon: FileText,
    dot: 'bg-emerald-400',
  },
  {
    id: 3,
    title: 'Risk score updated',
    time: '8 min ago',
    icon: TrendingUp,
    dot: 'bg-violet-400',
  },
];

const extraEvents = [
  {
    id: 4,
    title: 'Failure pattern detected',
    time: '11 min ago',
    icon: AlertTriangle,
    dot: 'bg-amber-400',
  },
  {
    id: 5,
    title: 'Recommendation generated',
    time: '14 min ago',
    icon: Sparkles,
    dot: 'bg-cyan-400',
  },
  {
    id: 6,
    title: 'Knowledge graph refreshed',
    time: '18 min ago',
    icon: DatabaseZap,
    dot: 'bg-emerald-400',
  },
];

function LiveActivityFeed() {
  const [events, setEvents] = useState(initialEvents);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setEvents((current) => {
        const nextEvent = extraEvents[current.length % extraEvents.length];
        const newEvent = {
          ...nextEvent,
          id: Date.now(),
        };

        return [newEvent, ...current].slice(0, 6);
      });
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

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
