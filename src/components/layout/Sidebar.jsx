import {
  LayoutDashboard,
  AlertTriangle,
  GitGraph,
  Lightbulb,
} from "lucide-react";

const links = [
  { label: "Overview", path: "/", icon: LayoutDashboard },
  { label: "Incidents", path: "/incidents", icon: AlertTriangle },
  { label: "Causal Graph", path: "/causal-graph", icon: GitGraph },
  { label: "Insights", path: "/insights", icon: Lightbulb },
];

function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-800 bg-slate-950/80 p-4 lg:block">
      <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Workspace
        </p>

        <nav className="space-y-1">
          {links.map((link, index) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                  index === 0
                    ? "bg-cyan-500/15 text-cyan-300"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;