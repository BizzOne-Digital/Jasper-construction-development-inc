import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesGrid from "@/components/home/ServicesGrid";
import Inspiration from "@/components/home/Inspiration";
import EstimateSection from "@/components/contact/EstimateSection";
import OurApproach from "@/components/home/OurApproach";
import RenovationProcess from "@/components/home/RenovationProcess";
import ServiceArea from "@/components/home/ServiceArea";
import HomeFAQs from "@/components/home/HomeFAQs";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <AboutPreview />
      <ServicesGrid />
      <OurApproach />
      <Inspiration />
      <RenovationProcess />
      <ServiceArea />
      <HomeFAQs />
      <EstimateSection />
    </>
  );
}
