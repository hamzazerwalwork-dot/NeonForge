"use client";

import { FormEvent, useState } from "react";
import SectionBackground from "./SectionBackground";

type Status = "idle" | "loading" | "success" | "error";

const PROJECT_TYPES = [
  "Website",
  "Web app",
  "Redesign",
  "UI/UX design",
  "Other",
];

export default function ConnectSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    }
  }

  return (
    <SectionBackground
      id="connect"
      image="/images/connect-bg.jpg"
      theme="dark"
      className="min-h-[100svh]"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-10 md:py-32">
        <div>
          <p className="mb-5 text-sm font-medium tracking-wide text-accent">
            LET&rsquo;S CONNECT
          </p>
          <h2 className="font-display text-5xl font-bold leading-[1.1] text-fg sm:text-6xl">
            Have a Project
            <br />
            in Mind?
          </h2>
          <p className="mt-7 max-w-sm text-lg leading-relaxed text-muted">
            Tell me about it below, or reach out directly — I read every
            message myself.
          </p>

          <div className="mt-10 flex flex-col gap-3 text-[15px]">
            <a
              href="mailto:hamzazerwal.work@gmail.com"
              className="w-fit text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
            >
              hamzazerwal.work@gmail.com
            </a>
            <a
              href="tel:+212641312852"
              className="w-fit text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
            >
              +212 6 41 31 28 52
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-line bg-bg-soft/60 p-6 backdrop-blur-sm sm:p-8"
        >
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute h-0 w-0 opacity-0"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="First name" name="firstName" autoComplete="given-name" />
            <Field label="Last name" name="lastName" autoComplete="family-name" />
            <Field
              label="Email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
            <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
          </div>

          <label className="mt-5 block text-sm text-muted">
            Project type
            <select
              name="projectType"
              defaultValue={PROJECT_TYPES[0]}
              className="mt-2 w-full rounded-xl border border-line bg-transparent px-4 py-3 text-[15px] text-fg outline-none transition-colors focus:border-accent"
            >
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type} className="bg-bg">
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-5 block text-sm text-muted">
            Tell me about your project *
            <textarea
              name="message"
              required
              rows={5}
              placeholder="What are you building, and what would a great result look like?"
              className="mt-2 w-full resize-y rounded-xl border border-line bg-transparent px-4 py-3 text-[15px] text-fg outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-[15px] font-medium text-ink transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Send →"}
          </button>

          <div aria-live="polite" className="mt-4 min-h-[1.25rem] text-sm">
            {status === "success" && (
              <p className="text-accent-soft">
                Message sent — I&rsquo;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400">{errorMsg}</p>
            )}
          </div>
        </form>
      </div>
    </SectionBackground>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm text-muted">
      {label} {required && "*"}
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-xl border border-line bg-transparent px-4 py-3 text-[15px] text-fg outline-none transition-colors focus:border-accent"
      />
    </label>
  );
}
