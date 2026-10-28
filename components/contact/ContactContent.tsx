import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import EstimateForm from "./EstimateForm";
import { site } from "@/lib/site";
export default function ContactContent() {
  return (
    <>
      <section className="contact-intro section-pad">
        <p className="eyebrow">LET?S START WITH A CONVERSATION</p>
        <h1>
          Let?s talk about
          <br />
          <em>your renovation.</em>
        </h1>
        <p>
          Big ideas, small updates, or still figuring it out.
          <br />
          We?re here to help you explore what?s possible.
        </p>
      </section>
      <section className="contact-layout section-pad">
        <div className="contact-details">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>
            Your next chapter
            <br />
            starts here.
          </h2>
          <a className="contact-method" href={site.tel}>
            <Phone strokeWidth={1.2} />
            <span>
              <small>GIVE US A CALL</small>
              {site.phone}
            </span>
            <ArrowUpRight size={19} />
          </a>
          <a className="contact-method" href={"mailto:" + site.email}>
            <Mail strokeWidth={1.2} />
            <span>
              <small>SEND US AN EMAIL</small>
              {site.email}
            </span>
            <ArrowUpRight size={19} />
          </a>
          <div className="contact-method">
            <MapPin strokeWidth={1.2} />
            <span>
              <small>OUR SERVICE AREA</small>Brampton & the Greater Toronto Area
            </span>
          </div>
          <p className="contact-invitation">
            For homeowners, landlords, property investors, and real estate
            agents ? tell us what you have in mind.
          </p>
          <p className="contact-pricing">{site.pricing}</p>
        </div>
        <div id="estimate" className="contact-form-panel">
          <p className="eyebrow">YOUR HOME. YOUR VISION.</p>
          <h2>Request an estimate.</h2>
          <p>Share a few details and let?s take the first step.</p>
          <EstimateForm full />
        </div>
      </section>
    </>
  );
}
