import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingMark from "@/components/FloatingMark";

export const metadata: Metadata = {
  title: "NeonForge — Build. Create. Inspire.",
  description:
    "Digital solutions that help your ideas grow and make an impact.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <FloatingMark />
    </>
  );
}
