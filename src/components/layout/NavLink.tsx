"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`font-body text-sm transition-colors duration-300 ${
        isActive
          ? "text-secondary font-bold border-b-2 border-secondary"
          : "text-on-surface font-medium hover:text-secondary"
      }`}
    >
      {children}
    </Link>
  );
}
