import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import FloatingMark from "@/components/FloatingMark";

export const metadata: Metadata = {
  title: "Portfolio — NeonForge",
  description: "A collection of projects that showcase creativity, problem-solving, and results.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioSection />
      </main>
      <FloatingMark />
    </>
  );
}
