// src/pages/brief/SIPBriefProject.tsx
export default function SIPBriefProject() {
  return (
    <>
      <h2 className="text-2xl font-semibold">Project Description</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Baseline profile:</strong> a custom cognitive lexicon scores responses
          across 8 dimensions covering visual style, creative process, risk tolerance,
          maker mindset, and more.
        </li>
        <li>
          <strong>Adaptive interview:</strong> questions are generated from live lexicon
          scores, not a fixed list. Each question comes from what was just heard.
          Session closes when confidence threshold is met.
        </li>
        <li>
          <strong>Image generation:</strong> profile drives a Replicate image generation
          call tuned for monochrome, line-first concept output.
        </li>
        <li>
          <strong>Refinement loop:</strong> user can reject the sketch with specific
          feedback and regenerate until the result matches intent.
        </li>
        <li>
          <strong>G-code output:</strong> approved sketch converts to plot-ready G-code
          targeting the EleksDraw via FluidNC over WiFi.
        </li>
        <li>
          <strong>Learning loop:</strong> approvals, rejections, and user corrections
          update the profile so future sessions ask fewer questions and land closer
          to the user's style.
        </li>
      </ul>
    </>
  );
}