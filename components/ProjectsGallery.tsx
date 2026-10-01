"use client";

import { useCallback, useEffect, useState } from "react";
import type { Project } from "@/lib/projects";

export default function ProjectsGallery({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrevProject = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + projects.length) % projects.length));
    setImageIndex(0);
  }, [projects.length]);

  const showNextProject = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % projects.length));
    setImageIndex(0);
  }, [projects.length]);

  const active = activeIndex !== null ? projects[activeIndex] : null;

  const showPrevImage = useCallback(() => {
    if (!active) return;
    setImageIndex((i) => (i - 1 + active.images.length) % active.images.length);
  }, [active]);

  const showNextImage = useCallback(() => {
    if (!active) return;
    setImageIndex((i) => (i + 1) % active.images.length);
  }, [active]);

  useEffect(() => {
    if (activeIndex === null) return;

    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrevImage();
      if (e.key === "ArrowRight") showNextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, showPrevImage, showNextImage]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <button
            key={project.slug}
            type="button"
            onClick={() => {
              setActiveIndex(index);
              setImageIndex(0);
            }}
            className="group text-left"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-bg-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.images[0]}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <h3 className="mt-3 text-sm font-medium text-fg">{project.title}</h3>
            {project.tags && (
              <p className="mt-0.5 text-xs text-muted">{project.tags.join(" · ")}</p>
            )}
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/95 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-accent/60 sm:right-5 sm:top-5"
          >
            ✕
          </button>

          {projects.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrevProject();
              }}
              aria-label="Previous project"
              className="absolute left-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-accent/60 sm:left-6 sm:flex"
            >
              ←
            </button>
          )}

          <div
            className="flex max-h-full w-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.images[imageIndex]}
                alt={`${active.title} — screenshot ${imageIndex + 1}`}
                className="max-h-[55vh] w-full rounded-xl border border-line object-contain sm:max-h-[60vh]"
              />

              {active.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrevImage}
                    aria-label="Previous screenshot"
                    className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-bg/80 text-fg backdrop-blur-sm transition-colors hover:bg-bg"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    aria-label="Next screenshot"
                    className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-bg/80 text-fg backdrop-blur-sm transition-colors hover:bg-bg"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {active.images.length > 1 && (
              <div className="mt-3 flex gap-2">
                {active.images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setImageIndex(i)}
                    aria-label={`Show screenshot ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === imageIndex ? "w-6 bg-accent" : "w-1.5 bg-line"
                    }`}
                  />
                ))}
              </div>
            )}

            <div className="mt-5 max-w-xl text-center">
              <h3 className="font-display text-2xl font-semibold text-fg">
                {active.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {active.description}
              </p>
              {active.tags && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {projects.length > 1 && (
              <div className="mt-6 flex items-center gap-6 sm:hidden">
                <button
                  type="button"
                  onClick={showPrevProject}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  onClick={showNextProject}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  Next →
                </button>
              </div>
            )}
          </div>

          {projects.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNextProject();
              }}
              aria-label="Next project"
              className="absolute right-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-accent/60 sm:right-6 sm:flex"
            >
              →
            </button>
          )}
        </div>
      )}
    </>
  );
}
