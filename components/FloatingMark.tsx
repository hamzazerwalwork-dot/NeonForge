"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function FloatingMark() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-line bg-bg shadow-lg shadow-black/40 transition-all duration-300 hover:border-accent/60 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <Image
        src="/images/logo-nf.png"
        alt=""
        width={44}
        height={44}
        aria-hidden="true"
        className="h-full w-full object-cover p-2"
      />
    </button>
  );
}
