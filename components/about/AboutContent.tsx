import Photo from "@/components/ui/Photo";
import Button from "@/components/ui/Button";
import Benefits from "@/components/home/Benefits";
import EstimateSection from "@/components/contact/EstimateSection";
import { images } from "@/lib/site";
export default function AboutContent() {
  return (
    <>
      <section className="page-hero">
        <div className="section-copy">
          <p className="eyebrow">ABOUT JASPER</p>
          <h1>
            Built around your home.
            <br />
            <em>Focused on your vision.</em>
          </h1>
          <p>
            A home is more than a place. It?s where your everyday life happens.
            We help you make it work better, one thoughtful detail at a time.
          </p>
          <Button />
        </div>
        <Photo
          priority
          src={images.interior}
          alt="Warm home interior with natural textures"
        />
      </section>
      <Benefits />
      <section className="story-section section-pad">
        <div>
          <p className="eyebrow">A PERSONAL APPROACH</p>
          <h2>
            Your plans.
            <br />
            Our shared starting point.
          </h2>
        </div>
        <div>
          <p>
            Jasper Construction & Development Inc. provides residential
            renovation and construction services in Brampton and across the
            Greater Toronto Area.
          </p>
          <p>
            We work with homeowners, landlords, property investors, and real
            estate agents to improve their spaces. Every project begins with
            listening: what matters to you, how you use your home, and what you
            would like to change.
          </p>
          <p>
            Clear communication, dependable workmanship, and service tailored to
            your project guide the way we work.
          </p>
        </div>
      </section>
      <section className="process-section section-pad">
        <div className="section-heading">
          <p className="eyebrow">FROM FIRST CONVERSATION TO FINAL DETAILS</p>
          <h2>A considered path forward.</h2>
        </div>
        <div className="process-grid">
          {[
            [
              "Discuss your plans",
              "Tell us about your home, your ideas, and what you hope to achieve.",
            ],
            [
              "Define the scope",
              "Explore the possibilities and discuss the work your project needs.",
            ],
            [
              "Plan the work",
              "Consider materials, project requirements, and a practical approach.",
            ],
            [
              "Bring it to life",
              "Move forward with clear communication and care for the details.",
            ],
          ].map(([title, description], i) => (
            <article key={title}>
              <span className="step-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <EstimateSection />
    </>
  );
}
