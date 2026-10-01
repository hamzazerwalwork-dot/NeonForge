"use client";

import { useState } from "react";
import Link from "next/link";
import SectionBackground from "./SectionBackground";

const SERVICES = [
  {
    name: "Web Development",
    tagline: "Fast, accessible builds in modern frameworks.",
    description:
      "From marketing sites to full product builds, I write clean, maintainable code that loads fast and holds up as you grow.",
    deliverables: ["Responsive builds", "CMS integration", "API integration"],
  },
  {
    name: "UI/UX Design",
    tagline: "Interfaces people enjoy using.",
    description:
      "Research-backed design decisions and clear information architecture, so every screen earns its place.",
    deliverables: ["Wireframes", "Prototypes", "Design systems"],
  },
  {
    name: "Performance & Optimization",
    tagline: "Faster sites, better technical health.",
    description:
      "Technical audits and fixes that improve load times and Core Web Vitals, so visitors don't bounce before they see your work.",
    deliverables: ["Performance audits", "Asset optimization", "Caching strategy"],
  },
  {
    name: "Ongoing Support",
    tagline: "Your site, kept up to date.",
    description:
      "Maintenance, updates, and small feature work after launch, so your site keeps pace with your business.",
    deliverables: ["Monthly retainer", "Bug fixes", "Content updates"],
  },
];

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionBackground
      id="services"
      image="/images/services-bg.jpg"
      theme="light"
      className="min-h-[100svh]"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.2fr] md:gap-16 md:px-10 md:py-32">
        <div className="md:sticky md:top-28 md:self-start">
          <p className="mb-5 text-sm font-medium tracking-wide text-accent">
            SERVICES
          </p>
          <h2 className="font-display text-5xl font-bold leading-[1.1] text-ink sm:text-6xl">
            What I Can Do
            <br />
            For You
          </h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-ink/70">
            From design to development, I create solutions tailored to your
            goals.
          </p>
          <Link
            href="/connect"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-cream transition-transform hover:scale-[1.03]"
          >
            Explore Services →
          </Link>
        </div>

        <div className="border-t border-ink/15">
          {SERVICES.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={service.name} className="border-b border-ink/15">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-7 text-left"
                >
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                      {service.name}
                    </h3>
                    <p
                      className={`mt-2 text-[15px] text-ink/60 transition-opacity ${
                        isOpen ? "opacity-0 h-0" : "opacity-100"
                      }`}
                    >
                      {service.tagline}
                    </p>
                  </div>
                  <span
                    className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/25 text-ink transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="max-w-lg pb-6 text-[15px] leading-relaxed text-ink/75">
                      {service.description}
                    </p>
                    <ul className="flex flex-wrap gap-2 pb-8">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-ink/20 px-3.5 py-1.5 text-xs text-ink/70"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionBackground>
  );
}
