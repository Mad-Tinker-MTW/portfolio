import { sip } from "@/data/profile";

// SIP408 progress log — add new entries at the top, keep dates visible
const progressLog = [
  {
    date: "2025-03-06",
    note: `MindScribe was built and running locally. The problem was it lived entirely on my machine, powered by an AI model too large to push online while actively developing it. When the environment broke, there was no remote backup to fall back on. The project existed in pieces across different build stages and never got a clean final save. The past few months were personally difficult and that slowed things down more than I wanted. I'm back at it now, rebuilding from the pieces I have with a smarter setup so it can actually live online and stay backed up. I'm also expanding the original scope to include health-aware features like session pacing and stress indicators, which ties into some of what I went through.`,
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
