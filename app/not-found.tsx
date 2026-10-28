import Button from "@/components/ui/Button";
export default function NotFound() {
  return (
    <section className="testimonials-empty section-pad">
      <p className="eyebrow">404 / A DIFFERENT DIRECTION</p>
      <h1>
        Let?s find your
        <br />
        <em>way home.</em>
      </h1>
      <p>This page could not be found.</p>
      <Button href="/">Back to home</Button>
    </section>
  );
}
