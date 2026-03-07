import { sip } from "@/data/profile";

// SIP408 progress log — add new entries at the top, keep dates visible
const progressLog = [
  {
    date: "2025-03-06",
    note: `SIP408 rebuild in progress. The working MindScribe prototype was developed locally using a self-hosted LLM and lost its final integrated state due to an environment failure with no remote backup — a direct consequence of running a heavy local AI stack that couldn't be pushed online mid-development. The system existed across multiple build stages (profile engine, adaptive Q&A, persona logic, React/Vite frontend) and is now being reconstructed from component snapshots and documented architecture. Health complications over the past several months contributed to the gap in progress. Reconstruction is underway with a cleaner separation between the API layer and frontend so the project can be hosted and backed up properly going forward. Health monitoring features (stress indicators, session pacing) are being incorporated into the new build as an expansion of the original scope.`,
  },
];

export default function SIPOverview() {
  return (
    <section className="space-y-4">

      {/* SIP408 Progress Log */}
      <div className="border border-yellow-500/40 rounded-lg p-4 space-y-3 bg-yellow-500/5">
        <h2 className="text-base font-semibold text-yellow-400 uppercase tracking-wide">
          SIP408 Progress Log
        </h2>
        {progressLog.map((entry) => (
          <div key={entry.date}>
            <p className="text-xs font-mono text-yellow-500 mb-1">{entry.date}</p>
            <p className="text-sm text-yellow-200/90 leading-relaxed whitespace-pre-line">
              {entry.note}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold mt-6">Innovation Claim</h2>
      <p>{sip.innovationClaim}</p>

      <h2 className="text-lg font-semibold mt-6">Project Description</h2>
      <p className="whitespace-pre-line">{sip.description}</p>
      {/* Overview is text-only. Visuals live in the Visuals & Docs tab. */}
    </section>
  );
}
