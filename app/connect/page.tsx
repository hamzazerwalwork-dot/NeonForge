import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ConnectSection from "@/components/ConnectSection";
import FloatingMark from "@/components/FloatingMark";

export const metadata: Metadata = {
  title: "Connect — NeonForge",
  description: "Let's work together and bring your ideas to life.",
};

export default function ConnectPage() {
  return (
    <>
      <Navbar />
      <main>
        <ConnectSection />
      </main>
      <FloatingMark />
    </>
  );
}
