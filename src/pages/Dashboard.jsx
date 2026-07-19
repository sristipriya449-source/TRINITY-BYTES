
import React from "react";
import { useDashboard } from "../context/DashboardContext";


import AICommandCenter from "../components/dashboard/AICommandCenter";
import OrganizationMemory from "../components/dashboard/OrganizationMemory";
import CausalGraphPreview from "../components/dashboard/CausalGraphPreview";
import DecisionTimeline from "../components/dashboard/DecisionTimeline";
import DocumentAnalyzer from "../components/dashboard/DocumentAnalyzer";
import SystemHealth from "../components/dashboard/SystemHealth";
import LiveActivityFeed from "../components/dashboard/LiveActivityFeed";
import RiskPredictionChart from "../components/dashboard/RiskPredictionChart";
import DecisionImpactScore from "../components/dashboard/DecisionImpactScore";
import AIDecisionFirewall from "../components/dashboard/AIDecisionFirewall";
import {
  
  AlertTriangle,
  BrainCircuit,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";



const incidents = [
  {
    title: "API latency spike",
    team: "Platform",
    severity: "High",
    time: "12m ago",
  },
  {
    title: "Support backlog surge",
    team: "Ops",
    severity: "Medium",
    time: "37m ago",
  },
  {
    title: "Model confidence drift",
    team: "AI",
    severity: "High",
    time: "1h ago",
  },
];

const insights = [
  {
    title: "Priority intervention",
    description:
      "Escalate the API latency trend before it impacts SLA commitments.",
  },
  {
    title: "Cross-team automation",
    description:
      "Route recurring support issues to bot-assisted workflows to reduce overload.",
  },
  {
    title: "Risk mitigation",
    description:
      "Rebalance monitoring thresholds for model drift signals to improve response speed.",
  },
];

function Dashboard() {

  const { stats, decisionData } = useDashboard();

  const metrics = [
    {
      title: "Decisions Analyzed",
      value: stats.decisionsAnalyzed,
      change: "Updated Live",
      icon: BrainCircuit,
      accent: "text-cyan-300",
    },
    {
      title: "AI Confidence",
      value: decisionData.score + "%",
      change: "Current Analysis",
      icon: ShieldCheck,
      accent: "text-emerald-300",
    },
    {
      title: "Risk Alerts",
      value: stats.highRiskAlerts,
      change: "High Risk Decisions",
      icon: AlertTriangle,
      accent: "text-amber-300",
    },
    {
      title: "Knowledge Entries",
      value: stats.knowledgeEntries,
      change: "Memory Updated",
      icon: TrendingUp,
      accent: "text-violet-300",
    },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#0f172a_100%)] px-4 py-6 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <AICommandCenter />
        <AIDecisionFirewall />

        <header className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                AI Organizational Intelligence
              </p>

              <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                OrgMind Nexus Dashboard
              </h1>

              <p className="mt-2 max-w-2xl text-sm text-slate-400 sm:text-base">
                Monitor operational risk, detect emerging patterns, and act on
                AI-generated recommendations in real time.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-200">
              <Zap className="h-4 w-4" />
              Insights refreshed 2 mins ago
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <article
                key={metric.title}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-black/10 backdrop-blur"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-slate-400">{metric.title}</p>
                    <p className="mt-2 text-3xl font-semibold text-white">
                      {metric.value}
                    </p>
                  </div>

                  <div
                    className={`rounded-2xl bg-white/5 p-2 ${metric.accent}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-400">
                  {metric.change}
                </p>
              </article>
            );
          })}
        </section>
        <DecisionImpactScore />
<OrganizationMemory />

        {/* AI Causal Graph */}
        <DocumentAnalyzer />
        <DecisionTimeline />
        <SystemHealth />
        <LiveActivityFeed />
        <RiskPredictionChart />
        <CausalGraphPreview />

        <section className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/10 backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Recent Incidents
                </h2>

                <p className="text-sm text-slate-400">
                  Latest signals requiring attention
                </p>
              </div>

              <button className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
                View all
              </button>
            </div>

            <div className="space-y-3">
              {incidents.map((incident) => (
                <div
                  key={incident.title}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3"
                >
                  <div>
                    <p className="font-medium text-white">
                      {incident.title}
                    </p>

                    <p className="text-sm text-slate-400">
                      {incident.team} • {incident.time}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-300">
                      {incident.severity}
                    </span>

                    <ChevronRight className="h-4 w-4 text-slate-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/10 backdrop-blur">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-white">
                AI Insights
              </h2>

              <p className="text-sm text-slate-400">
                Recommended actions from the engine
              </p>
            </div>

            <div className="space-y-3">
              {insights.map((insight) => (
                <div
                  key={insight.title}
                  className="rounded-2xl border border-cyan-400/10 bg-cyan-500/5 p-4"
                >
                  <p className="font-medium text-white">
                    {insight.title}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    {insight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;