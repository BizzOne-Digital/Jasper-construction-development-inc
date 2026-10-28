import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import { images, site } from "@/lib/site";
export default function Hero() {
  return (
    <section className="home-hero">
      <div className="hero-copy">
        <p className="eyebrow">BRAMPTON & THE GREATER TORONTO AREA</p>
        <h1>
          From vision to
          <br />
          Reality, <em>We renovate</em>
        </h1>
        <p className="hero-description">
          Thoughtful renovations. Dependable workmanship.
          <br className="desktop-break" /> Spaces made for you.
        </p>
        <div className="hero-actions">
          <Button />
          <a className="phone-link" href={site.tel}>
            <span>
              <Phone size={19} strokeWidth={1.3} />
            </span>
            {site.phone}
          </a>
        </div>
        <div className="hero-footnote">
          <span />
          YOUR HOME. YOUR VISION. OUR COMMITMENT.
        </div>
      </div>
      <Photo
        className="hero-photo"
        src={images.kitchen}
        alt="Sunlit kitchen with a generous island and warm residential finishes"
        priority
      />
    </section>
  );
}
