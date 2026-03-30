"use client";

import Link from "next/link";
import { navItems } from "@/lib/navigation";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0.5, 0.95]);
  const py = useTransform(scrollY, [0, 100], [24, 12]);
  const shadow = useTransform(scrollY, [0, 100], [
    "0 0 0 rgba(0,23,54,0)",
    "0 4px 30px rgba(0,23,54,0.08)",
  ]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: `rgba(248, 249, 250, ${bgOpacity.get()})`,
        boxShadow: shadow,
      }}
    >
      <motion.nav
        className="flex justify-between items-center w-full px-8 max-w-7xl mx-auto transition-[padding] duration-300"
        style={{ paddingTop: py, paddingBottom: py }}
      >
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-extrabold text-primary tracking-tighter font-headline"
          >
            AEDS
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <MobileMenu />
          <button className="bg-primary text-white px-6 py-2 font-semibold text-sm hover:opacity-90 transition-all active:opacity-80 hidden md:block">
            Contact
          </button>
        </div>
      </motion.nav>
    </motion.header>
  );
}
