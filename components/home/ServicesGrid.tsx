import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Photo from "@/components/ui/Photo";
import { services, site } from "@/lib/site";
export default function ServicesGrid() {
  const cards = [
    services[0],
    services[1],
    services[2],
    {
      ...services[4],
      title: "Additions & Full-Home Projects",
      id: "full-home",
    },
  ];
  const descriptions = [
    "Bring better flow to the heart of your home with considered layouts, cabinetry, countertops, and finishes.",
    "Create a calmer daily routine with practical storage, comfortable layouts, and carefully chosen surfaces.",
    "Make room for family time, a home office, or a new purpose for the space you already have.",
    "Explore more room to live, from coordinated whole-home updates to a thoughtfully planned addition.",
  ];
  return (
    <section className="services-preview section-pad">
      <div className="section-heading">
        <p className="eyebrow">OUR SERVICES</p>
        <h2>Make room for what's next.</h2>
        <p className="home-section-intro">
          Whether you are updating one room or rethinking your entire home, we
          help you explore practical improvements that bring your plans into
          focus.
        </p>
      </div>
      <div className="service-grid">
        {cards.map((s, i) => (
          <Link className="service-card" href={"/services#" + s.id} key={s.id}>
            <Photo src={s.image} alt={s.alt} />
            <div className="service-caption">
              <span className="service-number">0{i + 1}</span>
              <h3>{s.title}</h3>
              <ArrowRight size={19} strokeWidth={1.2} />
            </div>
            <p className="service-summary">{descriptions[i]}</p>
          </Link>
        ))}
      </div>
      <p className="pricing-note">{site.pricing}</p>
    </section>
  );
}
