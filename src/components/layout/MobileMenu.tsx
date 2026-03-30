"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/navigation";
import MaterialIcon from "@/components/ui/MaterialIcon";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        className="md:hidden text-primary"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <MaterialIcon name={open ? "close" : "menu"} className="text-2xl" />
      </button>

      {open && (
        <div className="fixed inset-0 top-20 z-40 bg-surface/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col items-center gap-8 pt-12">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`text-lg font-bold ${pathname === "/" ? "text-secondary" : "text-primary"}`}
            >
              Accueil
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-lg font-bold ${
                  pathname === item.href ? "text-secondary" : "text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#"
              onClick={() => setOpen(false)}
              className="bg-primary text-white px-8 py-3 font-bold mt-4"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
