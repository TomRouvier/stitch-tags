"use client";

import { motion } from "framer-motion";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: { label: string; href?: string };
  secondaryCTA?: { label: string; href?: string };
  variant?: "dark-full" | "gradient-card";
}

export default function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "dark-full",
}: CTASectionProps) {
  if (variant === "gradient-card") {
    return (
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <motion.div
          className="industrial-gradient rounded-2xl p-16 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 relative z-10">{title}</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto relative z-10">{description}</p>
          <div className="flex justify-center gap-6 relative z-10">
            <button className="bg-white text-primary px-10 py-4 font-bold rounded-lg hover:shadow-xl transition-all">
              {primaryCTA.label}
            </button>
            {secondaryCTA && (
              <button className="border border-white/30 px-10 py-4 font-bold rounded-lg hover:bg-white/10 transition-all">
                {secondaryCTA.label}
              </button>
            )}
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full industrial-gradient opacity-20 -skew-x-12 transform translate-x-20" />
      <motion.div
        className="max-w-7xl mx-auto px-8 relative z-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="font-headline font-extrabold text-white text-4xl md:text-5xl mb-8">{title}</h2>
        <p className="font-body text-primary-fixed-dim text-xl max-w-2xl mx-auto mb-12">{description}</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="bg-secondary text-white px-12 py-5 font-headline font-bold uppercase text-xs tracking-[0.2em] hover:bg-secondary/90 transition-all">
            {primaryCTA.label}
          </button>
          {secondaryCTA && (
            <button className="bg-transparent border border-white/30 text-white px-10 py-5 font-bold hover:bg-white/10 transition-all">
              {secondaryCTA.label}
            </button>
          )}
        </div>
      </motion.div>
    </section>
  );
}
