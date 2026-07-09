import type { ReactNode } from "react";
import clay from "../styles/clay.module.css";

type ChunkyBadgeProps = {
  children: ReactNode;
  className?: string;
};

/** Clay-style pill badge. Kept for reuse; not currently shown in the hero. */
export function ChunkyBadge({ children, className }: ChunkyBadgeProps) {
  return (
    <span className={[clay.chunkyBadge, className].filter(Boolean).join(" ")}>
      {children}
    </span>
  );
}
