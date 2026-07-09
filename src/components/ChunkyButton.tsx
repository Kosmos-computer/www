import type { ButtonHTMLAttributes, ReactNode } from "react";
import clay from "../styles/clay.module.css";

type SharedProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  className?: string;
};

type LinkProps = SharedProps & {
  href: string;
  onClick?: () => void;
  external?: boolean;
  type?: never;
  disabled?: never;
};

type ButtonProps = SharedProps & {
  href?: undefined;
  onClick?: () => void;
  external?: never;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
};

type ChunkyButtonProps = LinkProps | ButtonProps;

export function ChunkyButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
  external,
  onClick,
  type = "button",
  disabled,
}: ChunkyButtonProps) {
  const classes = [
    clay.chunkyBtn,
    variant === "secondary" ? clay.chunkyBtnSecondary : "",
    size === "large" ? clay.chunkyBtnLarge : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
