interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant font-label text-[0.7rem] font-bold tracking-[0.2em] uppercase rounded-sm ${className}`}
    >
      {children}
    </span>
  );
}
