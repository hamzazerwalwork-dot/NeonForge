import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FloatingMark from "@/components/FloatingMark";
import ProjectsGallery from "@/components/ProjectsGallery";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — NeonForge",
  description: "A closer look at recent NeonForge projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="mb-4 text-sm font-medium tracking-wide text-accent">
            PORTFOLIO
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-fg sm:text-5xl">
            All Projects
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
            Click any project to see it up close.
          </p>

          <div className="mt-14">
            <ProjectsGallery projects={projects} />
          </div>
        </div>
      </main>
      <FloatingMark />
    </>
  );
}
