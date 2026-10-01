import Link from "next/link";
import SectionBackground from "./SectionBackground";

export default function PortfolioSection() {
  return (
    <SectionBackground
      id="portfolio"
      image="/images/portfolio-bg.jpg"
      theme="dark"
      className="flex min-h-[100svh] items-center"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-medium tracking-wide text-accent">
            PORTFOLIO
          </p>
          <h2 className="font-display text-5xl font-bold leading-[1.1] text-fg sm:text-6xl">
            Work I&rsquo;m Proud Of
          </h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
            A collection of projects that showcase creativity,
            problem-solving, and results.
          </p>
          <Link
            href="/projects"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-[15px] font-medium text-ink transition-transform hover:scale-[1.03]"
          >
            View Projects →
          </Link>
        </div>
      </div>
    </SectionBackground>
  );
}
