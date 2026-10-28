import type { Metadata } from "next";
import TestimonialsContent from "@/components/testimonials/TestimonialsContent";
export const metadata: Metadata = {
  title: "Client Stories",
  description:
    "Your experience matters. Verified Jasper client stories will be shared as they become available.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Client Stories | Jasper Construction",
    description:
      "Your experience matters. Verified Jasper client stories will be shared as they become available.",
  },
};
export default function Page() {
  return <TestimonialsContent />;
}
