import { MapPin, House, KeyRound, Building2, Handshake } from "lucide-react";
import Button from "@/components/ui/Button";

const clients = [
  {
    Icon: House,
    title: "Homeowners",
    description:
      "Make your rooms more comfortable, functional, and personal to the way your household lives.",
  },
  {
    Icon: KeyRound,
    title: "Landlords",
    description:
      "Discuss practical updates to a rental property, from a room refresh to a broader renovation.",
  },
  {
    Icon: Building2,
    title: "Property investors",
    description:
      "Explore improvements with a clear view of the property's current condition and your plans for it.",
  },
  {
    Icon: Handshake,
    title: "Real estate agents",
    description:
      "Talk through renovation needs for clients who are preparing a property or settling into a new home.",
  },
];

export default function ServiceArea() {
  return (
    <section className="home-area section-pad" aria-labelledby="area-heading">
      <div className="area-intro">
        <div>
          <p className="eyebrow">BRAMPTON & THE GREATER TORONTO AREA</p>
          <h2 id="area-heading">
            Local homes.
            <br />
            Different possibilities.
          </h2>
          <p>
            From the home you plan to stay in to a property you are preparing
            for its next chapter, Jasper provides residential renovation and
            construction services in Brampton and across the GTA.
          </p>
          <p>
            Share your location and the work you have in mind so we can discuss
            your project and the next steps.
          </p>
          <span className="area-phone">
            <MapPin size={19} strokeWidth={1.2} />
            Serving Brampton & the GTA
          </span>
          <Button>Discuss your project</Button>
        </div>
        <div className="audience-grid">
          {clients.map(({ Icon, title, description }) => (
            <article key={title}>
              <Icon size={28} strokeWidth={1.1} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
