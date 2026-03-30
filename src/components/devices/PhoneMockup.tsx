interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

export default function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative bg-primary p-4 rounded-[2.5rem] shadow-2xl ${className}`}>
      <div className="bg-surface h-[500px] rounded-[2rem] overflow-hidden relative border-4 border-primary">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-primary rounded-b-xl z-20" />
        <div className="h-full overflow-y-auto pt-10 px-6 space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}
