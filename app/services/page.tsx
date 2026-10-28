import type { Metadata } from "next";
import ServicesContent from "@/components/services/ServicesContent";
export const metadata: Metadata = {
  title: "Renovation & Construction Services",
  description:
    "Explore kitchen, bathroom, basement, full-home renovation, and home addition services in Brampton and the GTA.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Renovation & Construction Services | Jasper Construction",
    description:
      "Explore kitchen, bathroom, basement, full-home renovation, and home addition services in Brampton and the GTA.",
  },
};
export default function Page() {
  return <ServicesContent />;
}
