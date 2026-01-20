import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "fill" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
}

export default function Button({
  children,
  variant = "outline",
  size = "md",
  href,
  onClick,
  icon,
  className = "",
}: ButtonProps) {
  const baseClass = "btn";
  const variantClass = variant === "fill" ? "btn-fill" : "btn-outline";
  const sizeClass = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";
  const classes = `${baseClass} ${variantClass} ${sizeClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon && <span>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
