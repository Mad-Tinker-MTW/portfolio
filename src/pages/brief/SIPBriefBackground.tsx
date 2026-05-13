// src/pages/brief/SIPBriefBackground.tsx
export default function SIPBriefBackground() {
  return (
    <div className="space-y-3">
      <div className="rounded-lg border border-yellow-400 bg-yellow-50 px-4 py-3 text-sm text-yellow-800">
        <strong>SIP408 Update — 2026-05-12:</strong> Added explanation of the two lies and one truth intake method and how it drives the profiling session.
      </div>
      <h2 className="text-2xl font-semibold text-neutral-900">Background</h2>
      <p className="text-neutral-800">
        Ideas die because the creator can't verbalize the concept, or draw it faithfully, or access the right tools.
        Current text-to-image systems are limited by how they were trained. The user accepts what the model returns
        and lets go of their original vision. Reviewers and teachers still demand crisp visuals.
      </p>
      <p className="text-neutral-800">
        MindScribe uses a two-way process: it learns how the user thinks, builds a baseline profile, and asks targeted
        questions to fill missing details. When intent is clear, it generates a concept image that converts to
        machine paths for plotting, favoring blueprint-style line work that's easy to vectorize and review.
      </p>
      <p className="text-neutral-800">
        The profiling session opens with a simple game: two lies and one truth about anything in the user's life.
        The lies reveal as much as the truth. What someone invents under no pressure, what they reach for,
        what they avoid, all of it is signal. From there the system asks one question at a time based on
        what it just scored, not a fixed script.
      </p>
    </div>
  );
}