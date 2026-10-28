import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Jasper Construction. A personal approach to residential renovations in Brampton and the GTA.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Jasper Construction",
    description:
      "Meet Jasper Construction. A personal approach to residential renovations in Brampton and the GTA.",
  },
};
export default function Page() {
  return <AboutContent />;
}
