
import toast from "react-hot-toast";
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Shield,
  BrainCircuit,
  Sparkles,
  LoaderCircle,
    Download,
} from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";
import jsPDF from "jspdf";

function AIDecisionFirewall() {
  const { analyzeDecision } = useDashboard();

  const [decision, setDecision] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const exportReport = () => {
  if (!result) return;

  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("OrgMind Nexus - AI Decision Report", 20, 20);

  doc.setFontSize(12);

  doc.text(`Decision: ${decision}`, 20, 40);
  doc.text(`Risk Level: ${result.risk}`, 20, 55);
  doc.text(`Risk Score: ${result.score}/100`, 20, 70);
  doc.text(`Confidence: ${result.confidence}`, 20, 85);
  doc.text(`Cost Impact: ${result.cost}`, 20, 100);
  doc.text(`Status: ${result.status}`, 20, 115);

  doc.text("Recommendation:", 20, 135);

  const lines = doc.splitTextToSize(result.recommendation, 170);
  doc.text(lines, 20, 145);

  doc.save("AI_Decision_Report.pdf");
  toast.success("PDF report downloaded!");
};
  
  

  const handleAnalyze = () => {
    if (!decision.trim()) return;

    setLoading(true);
    setResult(null);

    setTimeout(() => {
     let aiResult;

const text = decision.toLowerCase();

if (text.includes("security") || text.includes("cyber")) {
  aiResult = {
    risk: "Low",
    score: 92,
    confidence: "98%",
    cost: "$50K Investment",
    recommendation:
      "Recommended. This decision strengthens organizational security with minimal operational risk.",
    status: "Approved",
  };
} else if (
  text.includes("reduce") ||
  text.includes("layoff") ||
  text.includes("cut")
) {
  aiResult = {
    risk: "High",
    score: 74,
    confidence: "95%",
    cost: "$180K Potential Loss",
    recommendation:
      "High operational risk detected. Consider phased implementation.",
    status: "Review Required",
  };
} else if (
  text.includes("ai") ||
  text.includes("automation")
) {
  aiResult = {
    risk: "Medium",
    score: 84,
    confidence: "93%",
    cost: "$90K Investment",
    recommendation:
      "Recommended with gradual rollout and employee training.",
    status: "Conditional Approval",
  };
} else {
  aiResult = {
    risk: "Medium",
    score: 80,
    confidence: "90%",
    cost: "$100K Estimated",
    recommendation:
      "Further organizational analysis is recommended before implementation.",
    status: "Needs Review",
  };
}

      setResult(aiResult);
      toast.success("Decision analysis completed successfully!");

      

analyzeDecision({
  title: decision,
  score: aiResult.score,
  failures: Math.floor(aiResult.score / 2),
  costSaved: `$${aiResult.score * 5}K`,
  responseImprovement: `${Math.floor(aiResult.score / 2)}%`,
});

      setLoading(false);
    }, 2000);
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-cyan-400/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-cyan-400" />
            <h2 className="text-2xl font-semibold text-white">
              AI Decision Firewall
            </h2>
          </div>

          <p className="mt-2 text-sm text-slate-400">
            Analyze organizational decisions before implementation.
          </p>
        </div>

        <div className="rounded-xl bg-cyan-500/10 p-3">
          <BrainCircuit className="h-6 w-6 text-cyan-300" />
        </div>
      </div>

      {/* Input */}
      <textarea
        value={decision}
        onChange={(e) => setDecision(e.target.value)}
        placeholder="Example: Reduce customer support team by 30%..."
        className="h-36 w-full rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-white outline-none focus:border-cyan-400"
      />

      {/* Button */}
      <div className="mt-6 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAnalyze}
          disabled={loading}
          className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 disabled:opacity-70"
        >
          {loading ? (
            <>
              <LoaderCircle className="h-5 w-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5" />
              Analyze Decision
            </>
          )}
        </motion.button>
      </div>

      {/* Loading */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 rounded-2xl bg-cyan-500/5 p-6 text-center"
        >
          <LoaderCircle className="mx-auto mb-4 h-10 w-10 animate-spin text-cyan-400" />

          <p className="text-lg font-semibold text-white">
            AI is evaluating your decision...
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Checking organizational memory, operational risks,
            historical incidents, and financial impact...
          </p>
        </motion.div>
      )}

      {/* Results */}
      {result && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-6"
        >
          <h3 className="mb-6 text-xl font-semibold text-white">
            AI Decision Report
          </h3>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-xl bg-red-500/10 p-4">
              <p className="text-sm text-red-300">Risk Level</p>
              <p className="mt-2 text-2xl font-bold text-white">
                {result.risk}
              </p>
            </div>

            <div className="rounded-xl bg-cyan-500/10 p-4">
              <p className="text-sm text-cyan-300">Risk Score</p>
              <p className="mt-2 text-2xl font-bold text-white">
                  {result.score}/100
                
  

              </p>
            </div>

            <div className="rounded-xl bg-emerald-500/10 p-4">
              <p className="text-sm text-emerald-300">Confidence</p>
              <p className="mt-2 text-2xl font-bold text-white">
                {result.confidence}
              </p>
            </div>

            <div className="rounded-xl bg-amber-500/10 p-4">
              <p className="text-sm text-amber-300">Cost Impact</p>
              <p className="mt-2 text-lg font-bold text-white">
                {result.cost}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
            <p className="text-sm font-semibold text-cyan-300">
              AI Recommendation
            </p>

            <p className="mt-3 text-slate-300">
              {result.recommendation}
            </p>
          </div>

         <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-slate-900 p-4">
  <span className="text-slate-400">
    Final Decision Status
  </span>

  <span className="rounded-full bg-yellow-500/20 px-4 py-2 font-semibold text-yellow-300">
    {result.status}
  </span>
</div>

<div className="mt-6 flex justify-end gap-3">

<button
  onClick={exportReport}
  disabled={!result}
  className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2 font-semibold text-slate-950 hover:bg-emerald-400 disabled:opacity-50"
>
  <Download className="h-5 w-5" />
  Export Report
</button>

  <button
    onClick={() => {
      setDecision("");
      setResult(null);
    }}
    className="rounded-xl border border-cyan-500/30 px-5 py-2 text-cyan-300 hover:bg-cyan-500/10"
  >
    Analyze Another Decision
  </button>

</div>

</motion.div>
      )}
    </motion.div>
  );
}

export default AIDecisionFirewall;