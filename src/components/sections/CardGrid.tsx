import MaterialIcon from "@/components/ui/MaterialIcon";

interface Card {
  icon: string;
  title: string;
  description: string;
}

interface CardGridProps {
  cards: Card[];
  columns?: 3 | 4;
  variant?: "default" | "hover-invert" | "centered";
}

export default function CardGrid({
  cards,
  columns = 3,
  variant = "default",
}: CardGridProps) {
  const gridCols = columns === 4
    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    : "grid-cols-1 md:grid-cols-3";

  if (variant === "hover-invert") {
    return (
      <div className={`grid ${gridCols} gap-8`}>
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-surface-container-low p-8 group hover:bg-primary transition-all duration-500 cursor-pointer flex flex-col h-80"
          >
            <MaterialIcon
              name={card.icon}
              className="text-4xl text-secondary group-hover:text-secondary-fixed mb-auto"
            />
            <h3 className="font-headline font-bold text-2xl text-primary group-hover:text-white mb-2">
              {card.title}
            </h3>
            <p className="text-on-surface-variant group-hover:text-surface-variant font-body text-sm">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "centered") {
    return (
      <div className={`grid ${gridCols}`}>
        {cards.map((card, i) => (
          <div
            key={card.title}
            className={`p-12 flex flex-col items-center text-center ${
              i < cards.length - 1 ? "border-r border-outline-variant/20" : ""
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-secondary-container/20 flex items-center justify-center mb-8">
              <MaterialIcon name={card.icon} className="text-secondary text-3xl" />
            </div>
            <h4 className="font-headline font-bold text-primary text-lg mb-4">{card.title}</h4>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    );
  }

  // Default
  return (
    <div className={`grid ${gridCols} gap-8`}>
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-surface-container-low p-10 hover:bg-surface-container-lowest transition-colors group cursor-default"
        >
          <div className="mb-8">
            <MaterialIcon name={card.icon} className="text-secondary text-4xl" />
          </div>
          <h3 className="font-headline font-bold text-primary text-xl mb-4 group-hover:text-secondary transition-colors">
            {card.title}
          </h3>
          <p className="font-body text-on-surface-variant leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
