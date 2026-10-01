import { ReactNode } from "react";

export default function SectionBackground({
  id,
  image,
  theme = "dark",
  children,
  className = "",
}: {
  id?: string;
  image: string;
  theme?: "dark" | "light";
  children: ReactNode;
  className?: string;
}) {
  const isDark = theme === "dark";

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${
        isDark ? "bg-bg" : "bg-cream"
      } ${className}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-b from-bg/85 via-bg/75 to-bg/95"
            : "bg-gradient-to-b from-cream/92 via-cream/88 to-cream/95"
        }`}
        aria-hidden="true"
      />
      <div className="relative">{children}</div>
    </section>
  );
}
