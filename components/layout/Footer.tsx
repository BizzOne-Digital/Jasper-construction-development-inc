import Link from "next/link";
import { Phone, Mail, Globe, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { site } from "@/lib/site";
export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-main">
          <Logo />
          <a href={site.tel}>
            <Phone />
            {site.phone}
          </a>
          <a href={"mailto:" + site.email}>
            <Mail />
            {site.email}
          </a>
          <a href={site.url}>
            <Globe />
            jasperconstructioninc.ca
          </a>
          <span>
            <MapPin />
            Serving Brampton & the GTA
          </span>
        </div>
        <div className="footer-bottom">
          <span>
            ? {new Date().getFullYear()} Jasper Construction & Development Inc.
          </span>
          <span>Thoughtfully built. Personally considered.</span>
        </div>
      </footer>
      <div className="mobile-actions">
        <a href={site.tel}>
          <Phone size={17} />
          Call Now
        </a>
        <Link href="/contact#estimate">
          Request Estimate
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </>
  );
}
