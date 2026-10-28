import { MessagesSquare } from "lucide-react";
import Photo from "@/components/ui/Photo";
import Button from "@/components/ui/Button";
import { images } from "@/lib/site";
export default function TestimonialsContent() {
  return (
    <>
      <section className="page-hero">
        <div className="section-copy">
          <p className="eyebrow">CLIENT STORIES</p>
          <h1>
            Your experience
            <br />
            <em>matters.</em>
          </h1>
          <p>
            A home renovation is personal. We believe the conversations along
            the way matter just as much as the finished space.
          </p>
          <Button />
        </div>
        <Photo
          src={images.living}
          alt="Thoughtfully arranged living area with warm natural finishes"
          priority
        />
      </section>
      <section className="testimonials-empty section-pad">
        <MessagesSquare size={43} strokeWidth={1} />
        <p className="eyebrow">ROOM FOR YOUR STORY</p>
        <h2>
          Good work starts
          <br />
          with listening.
        </h2>
        <p>Client stories will be shared here as they become available.</p>
        <p>
          Have a project in mind? We would love to hear what a better home looks
          like to you.
        </p>
        <Button href="/contact">Start a conversation</Button>
      </section>
    </>
  );
}
