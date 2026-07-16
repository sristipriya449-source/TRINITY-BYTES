import React from 'react';

const links = [
  { label: 'Overview', active: true },
  { label: 'Incidents' },
  { label: 'Causal Graph' },
  { label: 'Insights' },
];

function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-800 bg-slate-950/80 p-4 lg:block">
      <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Workspace
        </p>

        <nav className="space-y-1">
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`flex items-center rounded-lg px-3 py-2 text-sm transition ${
                link.active
                  ? 'bg-cyan-500/15 text-cyan-300'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
