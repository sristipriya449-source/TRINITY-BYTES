import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, UploadCloud, Sparkles, CheckCircle2 } from 'lucide-react';

function DocumentAnalyzer() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);

    setAnalysis({
      name: file.name,
      status: 'AI Analysis Complete',
      confidence: '96%',
      summary:
        'The document highlights API reliability concerns, delayed response times, and a need for stronger deployment safeguards.',
      decisions: ['Approve follow-up reliability review', 'Increase monitoring coverage', 'Prioritize rollback checks'],
      risks: ['Customer impact from recurring latency', 'Reduced confidence in deployment safety', 'Escalation risk if no action is taken'],
      actions: ['Add automated alert thresholds', 'Review recent deployment logs', 'Schedule a cross-team remediation review'],
    });
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-white">AI Document Analyzer</h2>
        <p className="mt-1 text-sm text-slate-400">
          Upload meeting notes, incident reports, or postmortems.
        </p>
      </div>

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-cyan-400/30 bg-slate-950/70 px-6 py-10 text-center transition hover:border-cyan-300/60 hover:bg-slate-900/80">
        <UploadCloud className="mb-3 h-10 w-10 text-cyan-300" />
        <p className="text-lg font-semibold text-white">Drop files here or click to browse</p>
        <p className="mt-1 text-sm text-slate-400">Supports PDF, DOCX, and TXT files</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950">
          <FileText className="h-4 w-4" />
          Choose File
        </div>
        <input type="file" accept=".pdf,.docx,.txt" className="hidden" onChange={handleFileChange} />
      </label>

      <AnimatePresence mode="wait">
        {analysis ? (
          <motion.div
            key={analysis.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="mt-6 rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <h3 className="text-lg font-semibold text-white">{analysis.name}</h3>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
                {analysis.status}
              </span>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="mb-4 flex items-center gap-2 text-cyan-300">
                <Sparkles className="h-4 w-4" />
                <p className="text-sm font-semibold">AI Confidence: {analysis.confidence}</p>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-white">Summary</p>
                  <p className="text-sm leading-6 text-slate-300">{analysis.summary}</p>
                </div>

                <div>
                  <p className="mb-2 text-sm font-semibold text-white">Key Decisions</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {analysis.decisions.map((decision) => (
                      <li key={decision} className="rounded-lg bg-white/5 px-3 py-2">
                        {decision}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-2 text-sm font-semibold text-white">Risks Identified</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {analysis.risks.map((risk) => (
                      <li key={risk} className="rounded-lg bg-white/5 px-3 py-2">
                        {risk}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-2 text-sm font-semibold text-white">Recommended Actions</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {analysis.actions.map((action) => (
                      <li key={action} className="rounded-lg bg-white/5 px-3 py-2">
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default DocumentAnalyzer;
