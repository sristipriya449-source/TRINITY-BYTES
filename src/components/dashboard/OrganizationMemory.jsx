import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Search, MessageSquareText, AlertTriangle, Lightbulb } from 'lucide-react';

const sections = [
  {
    id: 'decisions',
    title: 'Meeting Decisions',
    icon: MessageSquareText,
    accent: 'text-cyan-300',
    items: [
      'API Gateway migration approved',
      'Weekly reliability review introduced',
      'Monitoring thresholds updated',
    ],
  },
  {
    id: 'incidents',
    title: 'Past Incidents',
    icon: AlertTriangle,
    accent: 'text-amber-300',
    items: [
      'API Latency Spike',
      'Database Failure',
      'Authentication Outage',
    ],
  },
  {
    id: 'lessons',
    title: 'Lessons Learned',
    icon: Lightbulb,
    accent: 'text-emerald-300',
    items: [
      'Increase automated monitoring',
      'Add rollback validation',
      'Improve deployment testing',
    ],
  },
];

function OrganizationMemory() {
  const [query, setQuery] = useState('');

  const filteredSections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return sections;

    return sections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => item.toLowerCase().includes(normalizedQuery)),
      }))
      .filter((section) => section.items.length > 0);
  }, [query]);

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-300">
            <BrainCircuit className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Organizational Memory</h2>
            <p className="mt-1 text-sm text-slate-400">
              AI remembers every important decision, incident, and lesson.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-400">
          <Search className="h-4 w-4 text-cyan-300" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search organizational knowledge..."
            className="w-full bg-transparent outline-none placeholder:text-slate-500 sm:w-64"
          />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {filteredSections.map((section) => {
          const Icon = section.icon;

          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-white/10 bg-slate-950/70 p-4"
            >
              <div className="mb-3 flex items-center gap-2">
                <div className={`rounded-xl bg-white/5 p-2 ${section.accent}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-white">{section.title}</h3>
              </div>

              <div className="space-y-2">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {filteredSections.length === 0 && (
        <div className="mt-4 rounded-2xl border border-dashed border-white/10 bg-slate-950/50 p-4 text-center text-sm text-slate-400">
          No matching knowledge found.
        </div>
      )}
    </div>
  );
}

export default OrganizationMemory;
