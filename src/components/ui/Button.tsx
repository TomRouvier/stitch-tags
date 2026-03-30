import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  className?: string;
}

const variants = {
  primary:
    "industrial-gradient text-white hover:opacity-90",
  secondary:
    "border border-outline-variant/30 text-primary hover:bg-surface-container-low",
  tertiary:
    "text-secondary hover:underline",
};

export default function Button({
  variant = "primary",
  children,
  href,
  icon,
  className = "",
}: ButtonProps) {
  const classes = `px-8 py-4 font-bold transition-all inline-flex items-center gap-2 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {children}
      {icon}
    </button>
  );
}
