interface Stat {
  value: string;
  label: string;
  offsetY?: string;
}

interface StatsGridProps {
  stats: Stat[];
}

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`bg-surface-container-lowest p-8 flex flex-col justify-center items-center text-center rounded-lg shadow-sm ${stat.offsetY || ""}`}
        >
          <span className="text-4xl font-extrabold text-secondary mb-2">{stat.value}</span>
          <span className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
