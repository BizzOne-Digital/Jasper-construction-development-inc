import Link from "next/link";
import { Plus } from "lucide-react";

const questions = [
  {
    question: "What kinds of renovation projects can I discuss with Jasper?",
    answer:
      "We provide residential kitchen, bathroom, basement, and full-home renovations, as well as home additions and general construction. Whether you are exploring one room or a larger change, tell us about the property and what you want to achieve.",
  },
  {
    question: "How much will my renovation cost?",
    answer:
      "Every project is different. The size of the space, existing conditions, materials, and complexity of the work all influence the estimate. Contact us for a consultation and a custom estimate based on your proposed project.",
  },
  {
    question: "What should I include when requesting an estimate?",
    answer:
      "Share your location, the rooms or areas you want to renovate, and a short description of your goals. A rough budget, preferred timing, measurements, photos, or drawings can also help if you already have them. It is fine to reach out while you are still exploring your options.",
  },
  {
    question: "How long does a renovation take?",
    answer:
      "Timing depends on the agreed scope, material availability, site conditions, and any approvals needed. A bathroom refresh and a full-home renovation involve different levels of work. We can discuss an appropriate approach and timing once your project details are clearer.",
  },
  {
    question: "Will my project need permits?",
    answer:
      "Permit requirements depend on the location and type of work, particularly where structural changes, additions, or changes to building systems are involved. Requirements should be assessed for the specific project before work begins; not every renovation follows the same process.",
  },
  {
    question: "Can I stay in my home during the work?",
    answer:
      "That depends on the rooms involved, the level of disruption, and safe access to essential facilities. Bring up your living arrangements during the planning conversation so these practical considerations can be discussed before you decide how to proceed.",
  },
  {
    question: "Do you work with rental properties and investment homes?",
    answer:
      "Yes. We welcome inquiries from homeowners, landlords, property investors, and real estate agents. Share the property's current use and your goals so we can discuss a suitable renovation scope.",
  },
];

export default function HomeFAQs() {
  return (
    <section className="home-faq section-pad" aria-labelledby="faq-heading">
      <div className="faq-intro">
        <p className="eyebrow">A LITTLE CLARITY BEFORE YOU START</p>
        <h2 id="faq-heading">
          Good questions.
          <br />
          Thoughtful answers.
        </h2>
        <p>
          Planning a renovation brings plenty of questions. Here are a few
          useful starting points for your next conversation.
        </p>
        <Link className="text-link" href="/contact">
          Ask us about your project
          <Plus size={17} strokeWidth={1.2} />
        </Link>
      </div>
      <div className="faq-list">
        {questions.map(({ question, answer }, i) => (
          <details key={question} className="faq-item" open={i === 0}>
            <summary>
              <span>{question}</span>
              <Plus size={19} strokeWidth={1.2} />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
