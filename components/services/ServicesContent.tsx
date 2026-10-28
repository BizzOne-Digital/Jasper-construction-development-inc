import Photo from "@/components/ui/Photo";
import Button, { TextLink } from "@/components/ui/Button";
import EstimateSection from "@/components/contact/EstimateSection";
import { services, images, site } from "@/lib/site";
import { Check } from "lucide-react";
export default function ServicesContent() {
  return (
    <>
      <section className="page-hero">
        <div className="section-copy">
          <p className="eyebrow">RENOVATIONS & CONSTRUCTION</p>
          <h1>
            Room to grow.
            <br />
            <em>Space to feel at home.</em>
          </h1>
          <p>
            From a single room to a whole new perspective. Explore residential
            renovation and construction services shaped around your plans.
          </p>
          <Button />
        </div>
        <Photo
          src={images.kitchen}
          alt="Bright kitchen with natural material finishes"
          priority
        />
      </section>
      <nav className="service-jump" aria-label="Explore services">
        {services.map((s) => (
          <a key={s.id} href={"#" + s.id}>
            {s.title}
          </a>
        ))}
      </nav>
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={"service-detail " + (i % 2 ? "reverse" : "")}
        >
          <Photo src={s.image} alt={s.alt} />
          <div className="section-copy">
            <p className="eyebrow">0{i + 1} / OUR SERVICES</p>
            <h2>{s.title}</h2>
            <p>{s.description}</p>
            <ul className="scope-list">
              {s.details.map((d) => (
                <li key={d}>
                  <Check size={17} strokeWidth={1.4} />
                  {d}
                </li>
              ))}
            </ul>
            <TextLink href="/contact#estimate">Discuss your project</TextLink>
          </div>
        </section>
      ))}
      <div className="pricing-banner">
        <p className="eyebrow">A SCOPE AS INDIVIDUAL AS YOUR HOME</p>
        <h2>Let?s find the right approach.</h2>
        <p>{site.pricing}</p>
      </div>
      <EstimateSection />
    </>
  );
}
