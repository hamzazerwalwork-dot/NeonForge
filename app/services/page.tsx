import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import FloatingMark from "@/components/FloatingMark";

export const metadata: Metadata = {
  title: "Services — NeonForge",
  description: "From design to development, I create solutions tailored to your goals.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesSection />
      </main>
      <FloatingMark />
    </>
  );
}
