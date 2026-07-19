import React from "react";
import {
  BrainCircuit,
  ArrowDown,
  TriangleAlert,
  ShieldCheck,
} from "lucide-react";

function Node({ title, color }) {
  return (
    <div
      className={`rounded-2xl border ${color} bg-slate-900 p-5 text-center shadow-lg`}
    >
      <p className="font-semibold text-white">{title}</p>
    </div>
  );
}

function CausalGraph() {
  return (
    <div className="space-y-8 text-white">

      <div>
        <h1 className="text-4xl font-bold">
          AI Causal Graph
        </h1>

        <p className="mt-2 text-slate-400">
          Understand how one organizational decision propagates through the system.
        </p>
      </div>

      <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8">

        <div className="flex flex-col items-center gap-4">

          <Node
            title="Decision: Reduce Customer Support Team"
            color="border-cyan-500/30"
          />

          <ArrowDown className="text-cyan-400" />

          <Node
            title="Higher Ticket Backlog"
            color="border-yellow-500/30"
          />

          <ArrowDown className="text-yellow-400" />

          <Node
            title="Customer Satisfaction Drops"
            color="border-orange-500/30"
          />

          <ArrowDown className="text-orange-400" />

          <Node
            title="Revenue Risk Increases"
            color="border-red-500/30"
          />

        </div>

      </div>

      <div className="grid gap-5 lg:grid-cols-2">

        <div className="rounded-2xl bg-slate-900 p-6">

          <div className="mb-3 flex items-center gap-2">

            <TriangleAlert className="text-red-400" />

            <h2 className="font-semibold">
              AI Root Cause
            </h2>

          </div>

          <p className="text-slate-300">
            Historical organizational memory shows that workforce reductions
            without workload redistribution consistently increase operational
            risk.
          </p>

        </div>

        <div className="rounded-2xl bg-slate-900 p-6">

          <div className="mb-3 flex items-center gap-2">

            <ShieldCheck className="text-emerald-400" />

            <h2 className="font-semibold">
              AI Recommendation
            </h2>

          </div>

          <p className="text-slate-300">
            Introduce phased staffing optimization, automate repetitive
            workflows, and continuously monitor customer response metrics.
          </p>

        </div>

      </div>

      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">

        <div className="flex items-center gap-3">

          <BrainCircuit className="text-cyan-400" />

          <div>

            <h2 className="font-semibold">
              OrgMind Nexus Insight
            </h2>

            <p className="text-slate-300">
              Similar causal chains were identified in 14 historical incidents.
              AI predicts an 87% probability of recurrence if preventive
              measures are ignored.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CausalGraph;