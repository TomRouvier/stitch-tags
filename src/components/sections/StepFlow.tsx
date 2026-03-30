import MaterialIcon from "@/components/ui/MaterialIcon";

interface Step {
  icon: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

interface StepFlowProps {
  steps: Step[];
}

export default function StepFlow({ steps }: StepFlowProps) {
  const items: React.ReactNode[] = [];

  steps.forEach((step, i) => {
    items.push(
      <div
        key={step.title}
        className={`p-8 rounded-lg text-center ${
          step.highlighted
            ? "bg-secondary text-primary"
            : "bg-white/5 backdrop-blur-md border border-white/10"
        }`}
      >
        <div className={`mb-6 flex justify-center ${step.highlighted ? "" : "text-secondary"}`}>
          <MaterialIcon name={step.icon} filled className="text-4xl" />
        </div>
        <h4 className="font-bold text-sm mb-2">{step.title}</h4>
        <p className={`text-[0.75rem] ${step.highlighted ? "font-medium" : "opacity-70"}`}>
          {step.description}
        </p>
      </div>
    );

    if (i < steps.length - 1) {
      items.push(
        <div key={`connector-${i}`} className="hidden md:flex items-center justify-center">
          <MaterialIcon name="arrow_forward" className="text-secondary opacity-50" />
        </div>
      );
    }
  });

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-4 relative">
      {items}
    </div>
  );
}
