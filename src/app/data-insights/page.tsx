import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import StepFlow from "@/components/sections/StepFlow";
import MaterialIcon from "@/components/ui/MaterialIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data & Insights Marketing",
  description:
    "Transformez vos produits physiques en points de contact intelligents. Flux de données exploitables pour une vision 360° de votre marché.",
};

const insightCards = [
  {
    icon: "public",
    title: "Géolocalisation des Scans",
    description: "Identifiez précisément où vos produits sont activés. Optimisez vos stocks et vos circuits logistiques selon la demande réelle.",
    visual: (
      <div className="aspect-square rounded-lg bg-surface-container-high overflow-hidden relative">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW0jZrMpSoGXMsC_1VGz-c2oAJfA3CIdYiQQNlG1rjY6WJf4JdoB27wcXOYQlo6ik1Z1zLjuqW2KsdsntXkipjWR-ft2RVLnF0j_acbOi2urfi70lJC8OrrBg95qdEjfZ7m0BzPWx2fKZPyuFdts2doSRpMZVYPAGeuKY5_9ZPxpR23pa-2g6HIRMw_e9B8A7mfzT5kXXCtlLV_KD0Jtd97nDLriQ1XujJV-pBerx1jiH2SSj1FzEMU5Y8pnIR33yvg2AXfFmQUdnv"
          alt="Map visualization"
          fill
          className="object-cover opacity-60 mix-blend-luminosity"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[0.65rem] font-bold text-secondary flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> Live Activity
        </div>
      </div>
    ),
  },
  {
    icon: "groups",
    title: "Profils Consommateurs",
    description: "Analysez les comportements d'achat et la fidélité. Segmentez votre audience pour des campagnes ultra-personnalisées.",
    visual: (
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-outline-variant/10 pb-4">
          <span className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">Taux d&apos;Engagement</span>
          <span className="text-2xl font-headline font-extrabold text-secondary">+24%</span>
        </div>
        <div className="flex items-center justify-between border-b border-outline-variant/10 pb-4">
          <span className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">Repeat Purchase</span>
          <span className="text-2xl font-headline font-extrabold text-secondary">18.5%</span>
        </div>
        <div className="p-4 bg-surface-container-low rounded-lg">
          <div className="flex gap-1 mb-2">
            {[20, 40, 60, 100, 30].map((opacity, i) => (
              <div key={i} className={`h-8 flex-1 rounded-sm ${i === 3 ? "bg-secondary" : "bg-primary"}`} style={{ opacity: i === 3 ? 1 : opacity / 100 }} />
            ))}
          </div>
          <span className="text-[0.6rem] font-bold text-on-surface-variant uppercase">Weekly Activity Trend</span>
        </div>
      </div>
    ),
  },
  {
    icon: "trending_up",
    title: "Performance Campagnes",
    description: "Suivez la conversion de vos activations physiques vers vos plateformes digitales en temps réel.",
    visual: (
      <div className="bg-primary p-6 rounded-lg text-white">
        <div className="text-3xl font-headline font-extrabold mb-1">45,820</div>
        <div className="text-[0.6rem] font-bold text-secondary-fixed uppercase tracking-widest mb-6">Conversions Totales</div>
        <div className="flex items-end gap-1 h-24">
          {[40, 60, 50, 80, 100].map((h, i) => (
            <div key={i} className={`flex-1 rounded-t-sm ${i === 4 ? "bg-secondary" : "bg-secondary/30"}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    ),
  },
];

const retargetingSteps = [
  { icon: "qr_code_2", title: "1. Le Scan", description: "Le client interagit avec le packaging intelligent.", highlighted: false },
  { icon: "dataset", title: "2. Data Capture", description: "Les données de session sont anonymisées et traitées.", highlighted: false },
  { icon: "campaign", title: "3. Activation", description: "Déclenchement d'un email CRM ou d'une offre mobile.", highlighted: true },
];

export default function DataInsightsPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        badge="Data Architecture"
        title={<>La Valeur de la Donnée Packaging</>}
        description="Transformez vos produits physiques en points de contact intelligents. Nos étiquettes connectées génèrent des flux de données exploitables pour une vision 360° de votre marché."
        primaryCTA={{ label: "Explorer la plateforme" }}
        secondaryCTA={{ label: "Voir les use cases" }}
        image={{
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlNws1OndUjHwHm8vfMceF6yOk7QgBrxAeOG6N_F_nSS1mP599uICdUrks6VPCY_aO4qnx74GYdva4oVbeazo785J2kfw_tp-h3PLaI3KeDjmcskPHq_YQU-5UfDFE0fYEmUgblqCroD-IDyXRfupMcnfoqf9AUjbdhSqnicRnQEXm9GqR9NmRtBZbPtdFV7zqpnLnXceN35ejYRhpkONKCSXNCCNrkJPf4SyCfg4FDYeqIMRsS4CnQJRnAqlfuV-mLuESC07JEpL0",
          alt: "Industrial Smart Packaging Production",
        }}
        variant="split"
        overlayWidget={
          <div className="absolute bottom-8 right-8 bg-surface-container-lowest/80 backdrop-blur-xl p-6 rounded-lg border border-white/40 shadow-xl max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <MaterialIcon name="sensors" filled className="text-secondary" />
              <span className="text-xs font-label font-bold uppercase tracking-wider text-on-surface-variant">Live Feed</span>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-3/4" />
              </div>
              <p className="text-[0.65rem] text-on-surface-variant">Real-time scan detection: <span className="text-primary font-bold">98.2% Accuracy</span></p>
            </div>
          </div>
        }
      />

      {/* Marketing Insights Grid */}
      <section className="py-24 px-8 md:px-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-headline font-bold text-primary mb-4 tracking-tight">Marketing Insights</h2>
              <p className="text-on-surface-variant text-lg">Visualisez l&apos;engagement de vos clients en temps réel à travers le globe.</p>
            </div>
            <div className="flex gap-2 bg-surface-container-highest p-1 rounded-lg">
              <button className="px-4 py-2 bg-white shadow-sm rounded-md text-sm font-bold text-primary">Global View</button>
              <button className="px-4 py-2 text-sm font-bold text-on-surface-variant hover:text-primary">Regional</button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {insightCards.map((card) => (
              <div key={card.title} className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <MaterialIcon name={card.icon} className="text-secondary" />
                </div>
                <h3 className="text-xl font-headline font-bold text-primary mb-4 tracking-tight">{card.title}</h3>
                <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">{card.description}</p>
                {card.visual}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grey Market Monitoring */}
      <section className="py-24 px-8 md:px-20 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2">
            <span className="text-secondary font-headline font-extrabold text-sm uppercase tracking-[0.3em] mb-4 block">Protective Intelligence</span>
            <h2 className="text-5xl font-headline font-extrabold text-primary mb-8 tracking-tighter leading-tight">Grey Market Monitoring</h2>
            <p className="text-lg text-on-surface-variant mb-10 leading-relaxed font-body">
              Notre système de détection proactive identifie les anomalies de distribution. Si un produit destiné au marché asiatique est scanné en Europe, vous recevez une alerte instantanée pour protéger l&apos;exclusivité de vos réseaux.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MaterialIcon name="verified_user" className="text-secondary mt-1" />
                <div>
                  <span className="block font-bold text-primary">Authentification de Source</span>
                  <span className="text-sm text-on-surface-variant">Vérification cryptographique de l&apos;origine de chaque scan.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MaterialIcon name="warning" className="text-secondary mt-1" />
                <div>
                  <span className="block font-bold text-primary">Alertes de Déviation</span>
                  <span className="text-sm text-on-surface-variant">Détection immédiate des flux de distribution non autorisés.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-surface-container-highest p-8 rounded-xl shadow-inner relative overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-bold text-primary uppercase">Network Security Dashboard</span>
                <span className="px-2 py-1 bg-error/10 text-error text-[0.6rem] font-bold rounded">2 Anomalies Detected</span>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg flex items-center justify-between border-l-4 border-error shadow-sm">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-error/5 rounded-full flex items-center justify-center text-error">
                      <MaterialIcon name="location_on" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-primary">SKU-9042 | Luxury Gin</div>
                      <div className="text-[0.6rem] text-on-surface-variant uppercase">Expected: Tokyo | Detected: Paris</div>
                    </div>
                  </div>
                  <button className="text-[0.6rem] font-bold text-secondary uppercase hover:underline">Investigate</button>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-center justify-between border-l-4 border-secondary opacity-60">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-secondary/5 rounded-full flex items-center justify-center text-secondary">
                      <MaterialIcon name="check_circle" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-primary">SKU-2183 | Cognac VSOP</div>
                      <div className="text-[0.6rem] text-on-surface-variant uppercase">Authorized Distribution</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Retargeting */}
      <section className="py-24 px-8 md:px-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-container rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 tracking-tighter">Customer Retargeting</h2>
          <p className="text-secondary-fixed opacity-80 max-w-2xl mx-auto text-lg">Du monde physique vers le digital en un clin d&apos;œil. Liez vos produits à vos outils CRM préférés.</p>
        </div>
        <StepFlow steps={retargetingSteps} />
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 md:px-20 bg-surface-container-low text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-headline font-extrabold text-primary mb-8 tracking-tighter">Prêt à exploiter vos données ?</h2>
          <p className="text-on-surface-variant text-xl mb-12 font-body">Contactez nos experts pour une démonstration personnalisée de la plateforme AEDS.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="w-full md:w-auto industrial-gradient text-white px-10 py-5 font-headline font-bold rounded-lg shadow-xl hover:scale-105 transition-transform">Démarrer maintenant</button>
            <button className="w-full md:w-auto bg-white border border-outline-variant text-primary px-10 py-5 font-headline font-bold rounded-lg hover:bg-surface transition-colors">Demander un audit</button>
          </div>
        </div>
      </section>
    </>
  );
}
