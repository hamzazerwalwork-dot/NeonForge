import Link from "next/link";
import SectionBackground from "./SectionBackground";

export default function Hero() {
  return (
    <SectionBackground
      id="home"
      image="/images/home-bg.jpg"
      theme="dark"
      className="flex min-h-[100svh] items-center pt-24"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-medium tracking-wide text-accent">
            NEONFORGE
          </p>
          <h1 className="font-display text-6xl font-bold leading-[1.05] text-fg sm:text-7xl">
            Build. Create.
            <br />
            Inspire.
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
            Digital solutions that help your ideas grow and make an impact.
          </p>
          <Link
            href="/connect"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-[15px] font-medium text-ink transition-transform hover:scale-[1.03]"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </SectionBackground>
  );
}
