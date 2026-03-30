import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import FeatureList from "@/components/sections/FeatureList";
import CTASection from "@/components/sections/CTASection";
import PhoneMockup from "@/components/devices/PhoneMockup";
import MaterialIcon from "@/components/ui/MaterialIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Digitaux & Packaging Connecté",
  description:
    "Identité numérique infalsifiable et canal direct de communication avec vos clients via NFC.",
};

const protectionFeatures = [
  {
    icon: "security",
    title: "Authenticité Inviolable",
    description: "Signature numérique avec protocole challenge-response asymétrique.",
  },
  {
    icon: "location_on",
    title: "Contrôle du Marché Gris",
    description: "Géolocalisation des scans avec une précision de 99.9% pour détecter les anomalies de flux.",
  },
];

const engagementSteps = [
  { number: "01", title: "Connexion Instantanée", description: "Sans application à télécharger. Un simple scan suffit pour activer l'expérience immersive." },
  { number: "02", title: "Contenu Dynamique", description: "Adaptez le message selon l'heure, le lieu ou le profil de l'utilisateur en temps réel." },
  { number: "03", title: "Collecte de Data First-Party", description: "Récupérez des insights précieux sur le comportement post-achat de vos consommateurs." },
];

export default function ServicesDigitauxPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        badge="Services Digitaux"
        title={<>L&apos;intelligence au cœur de l&apos;emballage</>}
        description="AEDS fusionne le packaging de luxe et la technologie NFC de pointe. Offrez à vos produits une identité numérique infalsifiable et ouvrez un canal direct de communication avec vos clients."
        primaryCTA={{ label: "Découvrir la technologie" }}
        secondaryCTA={{ label: "Voir les cas d'usage" }}
        image={{
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGIPspFJlmfsAI0WENR_NNw2AtX8imXW-hd20SgrWtdvoTZUbC9hJ6mL8ZjQymRjZaRW8JJ7IV5SPzoLKeV-n485RWY0QytqTCG7LI_ssbBiidsBxKEpJq0hvQj9Uqjmj7mENIcq9au29W-wTW-eyzjTaYMCVNTZSlao_Kmw6MOmIEHn69dBLtHGfpgWtm1b5H4EMXZGOIJDYsKHqvEepP8QOXzw6636Mc0gtTwbLTwzAFiQ82qdb2ko0EcYye_8XWqTvl046rGup1",
          alt: "Luxe packaging with NFC tag",
        }}
        variant="split"
        overlayWidget={
          <div className="absolute bottom-8 right-8 glass-panel p-6 rounded-lg max-w-xs ambient-shadow border border-white/20">
            <div className="flex items-center space-x-3 mb-2">
              <MaterialIcon name="verified_user" className="text-secondary" />
              <span className="font-headline font-bold text-primary">Authentification NFC</span>
            </div>
            <p className="text-sm text-on-surface-variant font-body">Tag cryptographique intégré. 100% sécurisé, sans contact.</p>
          </div>
        }
      />

      {/* Protection & Grey Market */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-6">Protection Totale &amp; Marché Gris</h2>
              <p className="font-body text-on-surface-variant mb-8 leading-relaxed">
                Nos tags NFC cryptographiques permettent une traçabilité granulaire de chaque unité produite. Identifiez instantanément les détournements de stocks et protégez l&apos;intégrité de votre réseau de distribution mondial.
              </p>
              <div className="space-y-6">
                {protectionFeatures.map((f) => (
                  <div key={f.title} className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-lg ambient-shadow">
                      <MaterialIcon name={f.icon} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-primary">{f.title}</h4>
                      <p className="text-sm text-on-surface-variant">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 h-[400px]">
              <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-center ambient-shadow">
                <div className="text-4xl font-headline font-black text-secondary mb-2">99.9%</div>
                <div className="font-label text-[0.7rem] uppercase text-outline">Précision de Traçabilité</div>
              </div>
              <div className="bg-primary rounded-xl p-8 flex flex-col justify-center industrial-gradient">
                <div className="text-4xl font-headline font-black text-white mb-2">0</div>
                <div className="font-label text-[0.7rem] uppercase text-on-primary-container">Contrefaçons Réussies</div>
              </div>
              <div className="col-span-2 bg-white rounded-xl overflow-hidden relative ambient-shadow">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_vACA5jeqgax-j4YbhdiOp1XNUhYDIFz5M-fcU8hwoLOXwdwQBBrjo-YnTivZNqn-DCOuYsrLbhUkeeglq2eMXd7R65CmAFOVoa6sfNojiNnQFZ2MtaYq6-9vLUWt9hm5Mzi2OKBFFiiQACJsK6tVFVEdxbgHNZJZNW3S2CTVSNQUu_bvKW6eN_S1X_kU4ZeNEjMb-c79R7lVvEGEQiVy57jbkXBsPZ5g-pLFcupQ-Hwec99DfrJ0hOKM6gj3DVAY6tW5k7WYMyW1"
                  alt="Data analysis visualization"
                  fill
                  className="object-cover opacity-20"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <MaterialIcon name="biotech" className="text-primary text-6xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Engagement */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl font-extrabold text-primary mb-4 tracking-tight">
              L&apos;engagement client par le simple toucher
            </h2>
            <p className="font-body text-on-surface-variant max-w-2xl mx-auto">
              Transformez votre packaging passif en un point de contact interactif premium.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-12 lg:col-span-4">
              <FeatureList items={engagementSteps} variant="numbered-border" />
            </div>
            <div className="col-span-12 lg:col-span-8 flex justify-center">
              <div className="relative w-full max-w-md bg-tertiary rounded-[3rem] p-4 ambient-shadow aspect-[9/19]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-tertiary rounded-b-xl z-20" />
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXUmMGfVa76h5DA0qMZWD4L34WvZ8zxy5POLA4-b1EyCl9rAN2wLRaRldXH_a0ia1UG8zBKgo4FM8rcdhyxvkhS7EPlfffoTzIwHOdtcffBu1_fslnCsh2ud-dqvZL6hQewFr7qaF0tmTLrhzSYJyn5sgYvN7BE238NYWnN8DfolhfEJpbvIMQqye19Jj2hIFO2-ZaWhiaCty7QleOugIeA6Sn1Ps5JUGucDr36ch1rFis7Akpq6407EJfpRfQBCCA_NK_ju-cJxzR"
                    alt="Smartphone authentication UI"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-8">
                    <div className="bg-white rounded-full p-4 mb-6 shadow-xl">
                      <MaterialIcon name="verified" filled className="text-5xl text-green-600" />
                    </div>
                    <h4 className="font-headline font-bold text-2xl text-white mb-2">Produit Authentique</h4>
                    <p className="text-white/80 text-sm mb-6">Lot #A8274 - Origine Grasse, France</p>
                    <button className="bg-white text-primary px-6 py-2 rounded-full font-bold text-sm">Découvrir l&apos;histoire</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DPP Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-surface-container-low rounded-2xl p-12 grid grid-cols-12 gap-12 items-center">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="font-headline text-3xl font-bold text-primary mb-6">Digital Product Passport (DPP)</h2>
              <p className="font-body text-on-surface-variant mb-10 text-lg leading-relaxed">
                Préparez-vous aux réglementations européennes. Le DPP AEDS centralise toutes les données de cycle de vie de votre produit : origine des composants, empreinte carbone, et instructions de recyclage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="border-l-4 border-secondary pl-6">
                  <span className="font-label text-[0.7rem] uppercase text-outline block mb-2">Conformité</span>
                  <p className="font-body font-semibold text-primary">Prêt pour les directives EU 2024-2030</p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <span className="font-label text-[0.7rem] uppercase text-outline block mb-2">Transparence</span>
                  <p className="font-body font-semibold text-primary">Accès direct à l&apos;empreinte CO2 par SKU</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="bg-white p-8 rounded-xl ambient-shadow">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-headline font-bold text-primary">Statut de Recyclage</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded">100% RECYCLABLE</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Matériau Principal", value: "Verre borosilicaté" },
                    { label: "Empreinte Carbone", value: "0.42 kg CO2e" },
                    { label: "ID Unique", value: "FR-AEDS-2024-001X" },
                  ].map((row, i) => (
                    <div key={row.label} className={`flex justify-between text-sm py-2 ${i < 2 ? "border-b border-surface-container-highest" : ""}`}>
                      <span className="text-on-surface-variant">{row.label}</span>
                      <span className="font-mono text-primary">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Prêt à digitaliser votre packaging?"
        description="Rejoignez les leaders du luxe et de la pharma qui font confiance à AEDS pour sécuriser leur avenir numérique."
        primaryCTA={{ label: "Parler à un expert" }}
        secondaryCTA={{ label: "Demander un échantillon" }}
        variant="dark-full"
      />
    </>
  );
}
