import Link from "next/link";
import { navItems } from "@/lib/navigation";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/70 backdrop-blur-md">
      <nav className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
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
      </nav>
    </header>
  );
}
