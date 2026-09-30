import type { ReactNode } from "react";

export default function Link({
  href,
  children,
  className,
  label,
  reveal,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
  /** Stagger index for the scroll reveal; omit to leave the link static. */
  reveal?: number;
}) {
  return (
    <a
      href={href}
      className={className}
      aria-label={label}
      data-reveal={reveal === undefined ? undefined : ""}
      style={
        reveal === undefined
          ? undefined
          : ({ "--i": reveal } as Record<string, number>)
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
