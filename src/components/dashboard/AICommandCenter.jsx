import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Sparkles, LoaderCircle, ShieldAlert } from 'lucide-react';

function AICommandCenter() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleAnalyze = () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResponse(null);

    window.setTimeout(() => {
      const normalizedPrompt = prompt.toLowerCase();

      let analysis = {
        riskLevel: 'Medium',
        team: 'Operations',
        confidence: '88%',
        rootCause: 'Cross-team coordination drift and incomplete monitoring coverage.',
        recommendation:
          'Increase visibility across critical workflows and maintain a weekly review cadence.',
      };

      if (normalizedPrompt.includes('platform')) {
        analysis = {
          riskLevel: 'High',
          team: 'Platform',
          confidence: '94%',
          rootCause: 'Repeated deployment instability and insufficient rollback checks.',
          recommendation:
            'Improve deployment safeguards and review recent release logs before the next rollout.',
        };
      } else if (normalizedPrompt.includes('api')) {
        analysis = {
          riskLevel: 'High',
          team: 'API Services',
          confidence: '92%',
          rootCause: 'Latency spikes caused by upstream dependency saturation.',
          recommendation:
            'Increase API monitoring frequency and review recent dependency health metrics.',
        };
      } else if (normalizedPrompt.includes('ai') || normalizedPrompt.includes('model')) {
        analysis = {
          riskLevel: 'High',
          team: 'AI Engineering',
          confidence: '96%',
          rootCause: 'Model drift caused by shifting input distributions and stale training data.',
          recommendation:
            'Recalibrate the model and refresh evaluation datasets to stabilize prediction quality.',
        };
      } else if (normalizedPrompt.includes('security')) {
        analysis = {
          riskLevel: 'Critical',
          team: 'Security',
          confidence: '97%',
          rootCause: 'Elevated access exposure and delayed anomaly detection.',
          recommendation:
            'Escalate alert triage, tighten access controls, and review recent authentication events.',
        };
      }

      setResponse(analysis);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6 lg:p-8">
      <div className="mb-6 flex items-start gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-300">
          <BrainCircuit className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">AI Decision Engine</h2>
          <p className="mt-1 text-sm text-slate-400">
            Ask the AI to predict failures, analyze incidents, or recommend preventive actions.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 sm:p-4">
        <textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="Example: Predict risks for the Platform Team next week..."
          rows={5}
          className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400/40"
        />
        <div className="mt-3 flex flex-wrap gap-2">
  {[
    "Predict risks for Platform Team",
    "Analyze API failures",
    "Check AI model drift",
    "Find security risks",
  ].map((question) => (
    <button
      key={question}
      onClick={() => setPrompt(question)}
      className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200 transition hover:bg-cyan-500/20"
    >
      {question}
    </button>
  ))}
</div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            Use natural language to surface proactive insights.
          </p>

          <button
            onClick={handleAnalyze}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            {isLoading ? (
              <LoaderCircle className="h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="h-4 w-4" />
            )}
            {isLoading ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mt-6 flex items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-8"
          >
            <div className="flex flex-col items-center gap-3 text-center">
              <LoaderCircle className="h-8 w-8 animate-spin text-cyan-300" />
              <p className="text-sm text-cyan-200">Assessing risk patterns and incident history...</p>
            </div>
          </motion.div>
        ) : response ? (
          <motion.div
            key="response"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="mt-6 rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-5"
          >
            <div className="mb-4 flex items-center gap-2 text-emerald-300">
              <ShieldAlert className="h-5 w-5" />
              <h3 className="text-lg font-semibold text-white">AI Assessment</h3>
            </div>

            <div className="grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3">
                <p className="text-slate-400">Risk Level</p>
                <p className="mt-1 font-semibold text-white">{response.riskLevel}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3">
                <p className="text-slate-400">Team</p>
                <p className="mt-1 font-semibold text-white">{response.team}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3">
                <p className="text-slate-400">Confidence</p>
                <p className="mt-1 font-semibold text-white">{response.confidence}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3">
                <p className="text-slate-400">Root Cause</p>
                <p className="mt-1 font-semibold text-white">{response.rootCause}</p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-slate-400">Recommendation</p>
              <p className="mt-1 text-sm leading-6 text-slate-200">
                {response.recommendation}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default AICommandCenter;
