import Photo from "@/components/ui/Photo";
import { TextLink } from "@/components/ui/Button";
import { images } from "@/lib/site";
export default function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="section-copy">
        <p className="eyebrow">BUILT AROUND YOUR VISION</p>
        <h2>
          A better home starts
          <br className="desktop-break" /> with a conversation.
        </h2>
        <p>
          Jasper Construction & Development Inc. provides residential renovation
          and construction services in Brampton and across the Greater Toronto
          Area. We take the time to understand your goals, offer practical
          guidance, and deliver dependable workmanship to create spaces that fit
          your life.
        </p>
        <p>
          From a more welcoming kitchen to a finished basement or a larger home
          renovation, we help homeowners and property owners think through the
          possibilities. Every space has different needs, and every project
          deserves a conversation of its own.
        </p>
        <TextLink href="/about">About Jasper</TextLink>
      </div>
      <Photo
        src={images.interior}
        alt="Inviting residential interior with warm textures and an open living space"
      />
    </section>
  );
}
