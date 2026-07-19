import React, { useState } from "react";
import { Search, AlertTriangle, ShieldCheck, BrainCircuit } from "lucide-react";

const incidents = [
  {
    id: 1,
    title: "Customer Data Exposure",
    severity: "High",
    department: "Security",
    cause: "Misconfigured cloud storage",
    recommendation: "Enable bucket access restrictions and continuous monitoring.",
  },
  {
    id: 2,
    title: "API Latency Spike",
    severity: "Medium",
    department: "Engineering",
    cause: "Database bottleneck",
    recommendation: "Optimize queries and introduce caching.",
  },
  {
    id: 3,
    title: "Payroll Processing Delay",
    severity: "Low",
    department: "HR",
    cause: "Workflow automation failure",
    recommendation: "Review automation logs and retry failed jobs.",
  },
];

function IncidentExplorer() {
  const [search, setSearch] = useState("");

  const filtered = incidents.filter(
    (incident) =>
      incident.title.toLowerCase().includes(search.toLowerCase()) ||
      incident.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 text-white">

      <div>
        <h1 className="text-4xl font-bold">
          Incident Explorer
        </h1>

        <p className="mt-2 text-slate-400">
          Explore historical incidents and AI recommendations.
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-2xl bg-slate-900 p-4">
        <Search className="text-cyan-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search incidents..."
          className="w-full bg-transparent outline-none"
        />
      </div>

      <div className="grid gap-5">

        {filtered.map((incident) => (

          <div
            key={incident.id}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6"
          >

            <div className="flex justify-between">

              <div>

                <h2 className="text-xl font-semibold">
                  {incident.title}
                </h2>

                <p className="mt-2 text-slate-400">
                  Department: {incident.department}
                </p>

              </div>

              <span
                className={`rounded-full px-4 py-2 font-semibold ${
                  incident.severity === "High"
                    ? "bg-red-500/20 text-red-300"
                    : incident.severity === "Medium"
                    ? "bg-yellow-500/20 text-yellow-300"
                    : "bg-green-500/20 text-green-300"
                }`}
              >
                {incident.severity}
              </span>

            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-2">

              <div className="rounded-xl bg-slate-950 p-4">

                <div className="mb-2 flex items-center gap-2">

                  <AlertTriangle className="text-red-400" />

                  <h3 className="font-semibold">
                    Root Cause
                  </h3>

                </div>

                <p className="text-slate-400">
                  {incident.cause}
                </p>

              </div>

              <div className="rounded-xl bg-slate-950 p-4">

                <div className="mb-2 flex items-center gap-2">

                  <ShieldCheck className="text-emerald-400" />

                  <h3 className="font-semibold">
                    AI Recommendation
                  </h3>

                </div>

                <p className="text-slate-400">
                  {incident.recommendation}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">

        <div className="flex items-center gap-3">

          <BrainCircuit className="text-cyan-400" />

          <div>

            <h2 className="font-semibold">
              AI Insight
            </h2>

            <p className="text-slate-400">
              72% of high-severity incidents were linked to deployment configuration changes.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default IncidentExplorer;