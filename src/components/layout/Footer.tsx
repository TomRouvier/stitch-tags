import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-3xl font-black text-white mb-6 tracking-tighter font-headline block">
              AEDS
            </Link>
            <p className="text-slate-400 font-body text-sm leading-relaxed mb-6">
              Architectes de l&apos;intelligence packaging pour les industries de précision.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors" href="#">
                <MaterialIcon name="share" className="text-sm" />
              </a>
              <a className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors" href="#">
                <MaterialIcon name="public" className="text-sm" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h5 className="font-headline font-bold text-lg mb-8">Solutions</h5>
            <ul className="space-y-4">
              <li><Link className="text-slate-400 hover:text-white transition-all text-sm font-label uppercase tracking-widest" href="/solutions-physiques">Smart Labeling</Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all text-sm font-label uppercase tracking-widest" href="/">Cloud Platform</Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all text-sm font-label uppercase tracking-widest" href="/services-digitaux">Blockchain Auth</Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all text-sm font-label uppercase tracking-widest" href="/services-digitaux">Supply Tracking</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-headline font-bold text-lg mb-8">Navigation</h5>
            <ul className="space-y-4">
              <li><Link className="text-slate-400 hover:text-white transition-all text-sm font-label uppercase tracking-widest" href="/solutions-physiques">Expertise</Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all text-sm font-label uppercase tracking-widest" href="/services-digitaux">Technologie</Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all text-sm font-label uppercase tracking-widest" href="/">Secteurs</Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all text-sm font-label uppercase tracking-widest" href="#">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-headline font-bold text-lg mb-8">Newsletter</h5>
            <p className="text-slate-400 text-sm mb-6">Recevez les dernières innovations en smart packaging.</p>
            <div className="flex border-b border-white/20 pb-2">
              <input
                className="bg-transparent border-none text-white focus:ring-0 w-full placeholder:text-slate-500 text-sm"
                placeholder="votre@email.com"
                type="email"
              />
              <button className="text-secondary">
                <MaterialIcon name="arrow_forward" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-slate-500 font-label text-[10px] uppercase tracking-widest italic">
            © 2024 AEDS Smart Packaging Solutions. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a className="text-slate-500 hover:text-white text-[10px] font-label uppercase tracking-widest" href="#">Privacy Policy</a>
            <a className="text-slate-500 hover:text-white text-[10px] font-label uppercase tracking-widest" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
