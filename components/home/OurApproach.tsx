import { MessagesSquare, Ruler, Hammer } from "lucide-react";
import Photo from "@/components/ui/Photo";
import { TextLink } from "@/components/ui/Button";
import { images } from "@/lib/site";

const values = [
  {
    Icon: MessagesSquare,
    title: "A conversation before construction.",
    description:
      "Tell us what is working, what is not, and how you want your home to feel. Your priorities give the project a clear starting point.",
  },
  {
    Icon: Ruler,
    title: "A scope shaped around your space.",
    description:
      "A growing household, a property refresh, or a room that needs a new purpose: we discuss the layout, finishes, and practical details that matter to you.",
  },
  {
    Icon: Hammer,
    title: "Care for the everyday details.",
    description:
      "Good renovation decisions consider how a space will be used. We focus on dependable workmanship and thoughtful improvements that fit your life.",
  },
];

export default function OurApproach() {
  return (
    <section className="home-approach" aria-labelledby="approach-heading">
      <Photo
        src={images.living}
        alt="Renovation inspiration showing an open-plan oak kitchen, dining area, and comfortable living room"
      />
      <div className="approach-copy">
        <p className="eyebrow">THE JASPER APPROACH</p>
        <h2 id="approach-heading">
          Your home deserves
          <br />a thoughtful approach.
        </h2>
        <p className="approach-intro">
          A renovation is a personal investment in the way you live. We take
          time to understand the space behind the plans and the people who use
          it.
        </p>
        <div className="approach-values">
          {values.map(({ Icon, title, description }) => (
            <article key={title}>
              <Icon size={25} strokeWidth={1.1} />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
        <TextLink href="/about">Get to know Jasper</TextLink>
      </div>
    </section>
  );
}
