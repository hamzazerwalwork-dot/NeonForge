import Image from "next/image";

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <div
      className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-accent/60 bg-bg"
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/logo-nf.png"
        alt="NeonForge"
        width={size}
        height={size}
        className="h-full w-full object-cover p-1.5"
        priority
      />
      <span className="sr-only">NeonForge</span>
    </div>
  );
}
