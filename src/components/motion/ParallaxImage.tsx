"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  priority?: boolean;
  quality?: number;
}

export default function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.15,
  priority = false,
  quality,
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className="overflow-hidden absolute inset-0">
      <motion.div style={{ y }} className="absolute inset-[-15%]">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${className}`}
          priority={priority}
          sizes="100vw"
          quality={quality}
        />
      </motion.div>
    </div>
  );
}
