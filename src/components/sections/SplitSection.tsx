interface SplitSectionProps {
  children: React.ReactNode;
  media: React.ReactNode;
  imageFirst?: boolean;
  className?: string;
}

export default function SplitSection({
  children,
  media,
  imageFirst = false,
  className = "bg-surface-container py-24 px-8",
}: SplitSectionProps) {
  return (
    <section className={`${className} overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className={imageFirst ? "order-2 lg:order-1" : "order-1"}>
            {imageFirst ? media : children}
          </div>
          <div className={imageFirst ? "order-1 lg:order-2" : "order-2"}>
            {imageFirst ? children : media}
          </div>
        </div>
      </div>
    </section>
  );
}
