import MaterialIcon from "@/components/ui/MaterialIcon";

interface Feature {
  number?: string;
  icon?: string;
  title: string;
  description: string;
}

interface FeatureListProps {
  items: Feature[];
  variant?: "numbered" | "icon-left" | "icon-boxed" | "numbered-border";
}

export default function FeatureList({ items, variant = "numbered" }: FeatureListProps) {
  if (variant === "numbered") {
    return (
      <div className="space-y-12">
        {items.map((item) => (
          <div key={item.title} className="flex gap-6 items-start">
            <span className="font-headline font-bold text-secondary text-xl">{item.number}</span>
            <div>
              <h4 className="font-headline font-bold text-xl text-primary mb-2 uppercase tracking-tight">
                {item.title}
              </h4>
              <p className="text-on-surface-variant font-body leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "numbered-border") {
    return (
      <div className="space-y-12">
        {items.map((item) => (
          <div key={item.title} className="group">
            <div className="flex items-center space-x-4 mb-4">
              <span className="font-headline font-black text-3xl text-outline-variant group-hover:text-secondary transition-colors">
                {item.number}
              </span>
              <h3 className="font-headline font-bold text-xl text-primary">{item.title}</h3>
            </div>
            <p className="font-body text-on-surface-variant pl-12 border-l-2 border-surface-container-highest">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "icon-boxed") {
    return (
      <div className="space-y-8">
        {items.map((item) => (
          <div key={item.title} className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
              <MaterialIcon name={item.icon || ""} className="text-secondary" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
              <p className="text-on-surface-variant">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // icon-left
  return (
    <ul className="space-y-6">
      {items.map((item) => (
        <li key={item.title} className="flex items-start gap-4">
          <MaterialIcon name={item.icon || ""} className="text-secondary" />
          <div>
            <span className="font-headline font-bold text-primary block">{item.title}</span>
            <span className="text-on-surface-variant text-sm">{item.description}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
