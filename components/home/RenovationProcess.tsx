import { TextLink } from "@/components/ui/Button";

const steps = [
  {
    title: "Share your vision",
    description:
      "Start with a call or an estimate request. Tell us about your property, the rooms you want to improve, and what a successful renovation would look like for you.",
  },
  {
    title: "Explore the possibilities",
    description:
      "Discuss the existing space, your priorities, and the work involved. Photos, measurements, and inspiration can help make the conversation more specific.",
  },
  {
    title: "Define the details",
    description:
      "Consider the scope, materials, budget, and project requirements together. Timing and any permit considerations depend on the work being proposed.",
  },
  {
    title: "Plan the next chapter",
    description:
      "Once the approach is agreed, discuss the next steps and how the work will fit around your property. Clear expectations help everyone move forward.",
  },
];

export default function RenovationProcess() {
  return (
    <section
      className="process-section section-pad home-process"
      aria-labelledby="process-heading"
    >
      <div className="section-heading">
        <p className="eyebrow">HOW IT STARTS</p>
        <h2 id="process-heading">
          From your first idea
          <br />
          to a considered plan.
        </h2>
        <p className="home-section-intro">
          You do not need to have every answer before getting in touch. A useful
          first conversation starts with what you would like to change.
        </p>
      </div>
      <div className="process-grid">
        {steps.map(({ title, description }, i) => (
          <article key={title}>
            <span className="step-number">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <div className="process-followup">
        <span>
          Have drawings or inspiration photos? Bring them to the conversation.
        </span>
        <TextLink href="/contact#estimate">Tell us about your plans</TextLink>
      </div>
    </section>
  );
}
