import Image from "next/image";
import MaterialIcon from "@/components/ui/MaterialIcon";

interface BentoItem {
  icon?: string;
  title: string;
  description: string;
  variant: "hero-image" | "accent" | "muted" | "wide";
  image?: { src: string; alt: string };
}

interface BentoGridProps {
  items: BentoItem[];
}

export default function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
      {items.map((item) => {
        if (item.variant === "hero-image") {
          return (
            <div key={item.title} className="md:col-span-8 bg-primary rounded-xl overflow-hidden relative p-12 flex flex-col justify-end text-white">
              {item.image && (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover opacity-40"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              )}
              <div className="relative z-10">
                <h3 className="text-3xl font-headline font-bold mb-4">{item.title}</h3>
                <p className="max-w-lg text-secondary-fixed/80">{item.description}</p>
              </div>
            </div>
          );
        }

        if (item.variant === "accent") {
          return (
            <div key={item.title} className="md:col-span-4 bg-secondary p-12 rounded-xl flex flex-col justify-between text-white">
              {item.icon && <MaterialIcon name={item.icon} className="text-5xl" />}
              <div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm opacity-80">{item.description}</p>
              </div>
            </div>
          );
        }

        if (item.variant === "muted") {
          return (
            <div key={item.title} className="md:col-span-4 bg-surface-container-high p-12 rounded-xl flex flex-col justify-between">
              {item.icon && <MaterialIcon name={item.icon} className="text-5xl text-primary" />}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-sm text-on-surface-variant">{item.description}</p>
              </div>
            </div>
          );
        }

        // wide
        return (
          <div key={item.title} className="md:col-span-8 bg-surface-container-low p-12 rounded-xl border border-outline-variant/10 flex items-center gap-8">
            {item.icon && (
              <div className="shrink-0">
                <MaterialIcon name={item.icon} className="text-6xl text-secondary" />
              </div>
            )}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-on-surface-variant">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
