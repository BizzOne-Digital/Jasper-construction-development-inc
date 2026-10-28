import { ArrowRight } from "lucide-react";
import Photo from "@/components/ui/Photo";
import { images } from "@/lib/site";
export default function Inspiration() {
  return (
    <section className="inspiration section-pad">
      <div>
        <p className="eyebrow">RENOVATION INSPIRATION</p>
        <h2>See the possibilities.</h2>
        <p>
          A thoughtful renovation can transform how you live. From outdated to
          open, dark to bright ? we help reimagine your space and make it work
          better for your everyday life.
        </p>
        <small>Illustrative interiors, shown for inspiration.</small>
      </div>
      <div className="inspiration-images">
        <div className="inspiration-image">
          <Photo
            src={images.living}
            alt="Warm neutral living space with natural material details"
          />
          <span>Thoughtful spaces</span>
        </div>
        <div className="inspiration-arrow">
          <ArrowRight size={21} strokeWidth={1} />
        </div>
        <div className="inspiration-image">
          <Photo
            src={images.kitchen}
            alt="Bright kitchen inspiration with an inviting layout"
          />
          <span>Everyday possibilities</span>
        </div>
      </div>
    </section>
  );
}
