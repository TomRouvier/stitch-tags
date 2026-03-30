interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  label,
  centered,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {label && (
        <span className="font-label text-outline text-xs uppercase tracking-[0.3em] mb-4 block">
          {label}
        </span>
      )}
      <h2 className="font-headline font-bold text-4xl text-primary tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body text-on-surface-variant text-lg ${centered ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
