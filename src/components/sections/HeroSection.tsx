"use client";

import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import MaterialIcon from "@/components/ui/MaterialIcon";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { motion } from "framer-motion";

interface HeroSectionProps {
  badge: string;
  title: React.ReactNode;
  description: string;
  primaryCTA: { label: string; href?: string };
  secondaryCTA?: { label: string; href?: string };
  image: { src: string; alt: string };
  variant: "overlay" | "overlay-dark" | "split";
  overlayWidget?: React.ReactNode;
}

const textReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

export default function HeroSection({
  badge,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  image,
  variant,
  overlayWidget,
}: HeroSectionProps) {
  if (variant === "overlay" || variant === "overlay-dark") {
    const isDark = variant === "overlay-dark";
    return (
      <section className="relative min-h-[795px] flex items-center overflow-hidden px-8">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src={image.src}
            alt={image.alt}
            className={isDark ? "brightness-[0.4]" : ""}
            priority
            quality={90}
            speed={0.1}
          />
          {!isDark && (
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10" />
          )}
          {isDark && <div className="absolute inset-0 bg-primary/10 z-10" />}
        </div>
        <motion.div
          className="relative z-10 max-w-7xl mx-auto w-full"
          initial="hidden"
          animate="visible"
        >
          <div className={`${isDark ? "grid grid-cols-12 gap-8 items-center" : ""}`}>
            <div className={isDark ? "col-span-12 md:col-span-8 lg:col-span-7" : "max-w-2xl"}>
              <motion.div custom={0} variants={textReveal}>
                <Badge className="mb-6">{badge}</Badge>
              </motion.div>
              <motion.h1
                custom={1}
                variants={textReveal}
                className={`font-headline font-extrabold tracking-tighter leading-[0.9] mb-8 ${
                  isDark
                    ? "text-white text-5xl md:text-6xl lg:text-7xl leading-none"
                    : "text-primary text-6xl md:text-8xl"
                }`}
              >
                {title}
              </motion.h1>
              <motion.p
                custom={2}
                variants={textReveal}
                className={`text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-body ${
                  isDark ? "text-white/80" : "text-on-surface-variant"
                }`}
              >
                {description}
              </motion.p>
              <motion.div custom={3} variants={textReveal} className="flex flex-wrap gap-4">
                <Button
                  href={primaryCTA.href}
                  className={isDark ? "px-10 py-5 font-headline uppercase text-xs tracking-widest" : "text-lg"}
                  icon={!isDark ? <MaterialIcon name="arrow_forward" /> : undefined}
                >
                  {primaryCTA.label}
                </Button>
                {secondaryCTA && (
                  <Button
                    variant="secondary"
                    href={secondaryCTA.href}
                    className={`${isDark ? "border-white/30 text-white backdrop-blur-md hover:bg-white/10 px-10 py-5 font-headline uppercase text-xs tracking-widest" : "text-lg"}`}
                  >
                    {secondaryCTA.label}
                  </Button>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  // Split variant
  return (
    <section className="relative min-h-[795px] flex items-center px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <motion.div
          className="lg:col-span-7 z-10"
          initial="hidden"
          animate="visible"
        >
          <motion.div custom={0} variants={textReveal}>
            <Badge className="mb-6">{badge}</Badge>
          </motion.div>
          <motion.h1
            custom={1}
            variants={textReveal}
            className="font-headline text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight mb-8"
          >
            {title}
          </motion.h1>
          <motion.p
            custom={2}
            variants={textReveal}
            className="font-body text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed"
          >
            {description}
          </motion.p>
          <motion.div custom={3} variants={textReveal} className="flex flex-wrap gap-4">
            <Button
              href={primaryCTA.href}
              className="rounded-lg"
              icon={<MaterialIcon name="arrow_forward" />}
            >
              {primaryCTA.label}
            </Button>
            {secondaryCTA && (
              <Button variant="secondary" href={secondaryCTA.href} className="rounded-lg">
                {secondaryCTA.label}
              </Button>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-primary/10" />
            {overlayWidget}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
