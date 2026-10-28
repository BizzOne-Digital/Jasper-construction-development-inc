import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";
export const metadata: Metadata = {
  title: "Contact & Request an Estimate",
  description:
    "Call 647-913-2300 or request a custom estimate for your renovation in Brampton and the GTA.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact & Request an Estimate | Jasper Construction",
    description:
      "Call 647-913-2300 or request a custom estimate for your renovation in Brampton and the GTA.",
  },
};
export default function Page() {
  return <ContactContent />;
}
