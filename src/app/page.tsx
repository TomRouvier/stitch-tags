import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import CardGrid from "@/components/sections/CardGrid";
import SplitSection from "@/components/sections/SplitSection";
import FeatureList from "@/components/sections/FeatureList";
import MaterialIcon from "@/components/ui/MaterialIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'Intelligence au cœur du Packaging",
  description:
    "AEDS, expert en solutions physiques et digitales de smart packaging pour les secteurs de la pharma, du luxe et des spiritueux.",
};

const sectors = [
  { icon: "diamond", title: "Luxe", description: "Protection de marque et engagement client exclusif." },
  { icon: "vaccines", title: "Pharma", description: "Sécurisation de la chaîne logistique et respect des normes." },
  { icon: "wine_bar", title: "Vins & Spiritueux", description: "Authentification inviolable et storytelling digital." },
  { icon: "sanitizer", title: "Cosmétiques", description: "Traçabilité totale et expérience consommateur augmentée." },
];

const expertise = [
  { number: "01", title: "Tag RFID/NFC", description: "Sélection et encodage des meilleures puces pour une communication sans faille et sécurisée." },
  { number: "02", title: "Pose Industrielle", description: "Intégration transparente dans vos lignes de production existantes sans perte de cadence." },
  { number: "03", title: "Services Digitaux", description: "Plateforme SaaS propriétaire pour le monitoring, l'analyse data et la relation client." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        badge="Smart Packaging Solutions"
        title={<>L&apos;Intelligence <br />au cœur du <br /><span className="text-secondary">Packaging.</span></>}
        description="AEDS, expert en solutions physiques et digitales de smart packaging pour les secteurs de la pharma, du luxe et des spiritueux."
        primaryCTA={{ label: "Découvrir nos solutions", href: "/solutions-physiques" }}
        secondaryCTA={{ label: "Voir la vidéo" }}
        image={{
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEo6ILpM-v-o76qGPNUD7HrUBCV0c2w-EPyRVMRE6uPq7zB1ZW6XSBtoA-ckeT5nPuaPp0WoQER2D4DZci_3Ma3ylHS9b84MbbwMC07Gt3WpULsW_x616yZDGT0i9fRTYbt4bFiGqO0WZzcm4VY_VZThiEmjvKZRg7wqKUEJjkJu3WPcBSBKBSqmsfY7SXvAcLSnhd3_EdJ0Y4EcgwiDhW6atImoP_vsc0QD-oK8SAEVDN8IXVe8QmmoVhDjtuV9JVZGHlpND8geY0",
          alt: "Luxury perfume bottle with glowing smart tag",
        }}
        variant="overlay"
      />

      {/* Sectors */}
      <section className="bg-surface py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
            <div className="lg:col-span-8">
              <h2 className="font-headline font-bold text-4xl text-primary tracking-tight mb-4">
                Une expertise multisectorielle.
              </h2>
              <p className="font-body text-on-surface-variant text-lg max-w-xl">
                Nous concevons des écosystèmes connectés adaptés aux exigences de traçabilité et d&apos;authenticité des industries les plus prestigieuses.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-end">
              <span className="font-label text-outline text-sm uppercase tracking-widest border-b border-outline-variant pb-2">
                Nos Secteurs D&apos;Activité
              </span>
            </div>
          </div>
          <CardGrid cards={sectors} columns={4} variant="hover-invert" />
        </div>
      </section>

      {/* Expertise */}
      <SplitSection
        imageFirst
        className="bg-surface-container py-24 px-8"
        media={
          <div className="relative aspect-square">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMOF4hgzlV7DlLRH634TOaMoqUPgUh3gp9suOzLxIUWJczy3_G8dL8wP7Xr0CDdA_PqY4XyVWz8kNM8BjrC15EaXluckNo_Px0cUymsQMbBoULJ7Miy1TjbJaV2VFiIGjsaZI7un6oTYp0_XgOZjmJZsSDgYhPiyFhsuAhUz3lmpsWQcAKotYtbKPFMwvlSMG7WJ7XmrAPaXdondmkbBPLCCSGbfyKiqNYxHQSt_6HvMbFCmLIqczW9_u6y4q7PzfDBtSLVE6gI7VS"
              alt="Industrial precision assembly"
              fill
              className="object-cover grayscale brightness-75"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary p-8 flex flex-col justify-end text-white">
              <span className="text-4xl font-extrabold mb-2">100%</span>
              <span className="font-label text-xs uppercase tracking-widest opacity-80">
                Garantie d&apos;Authenticité
              </span>
            </div>
          </div>
        }
      >
        <div>
          <h2 className="font-headline font-bold text-5xl text-primary mb-12 tracking-tighter">
            Expertise Totale : Du Tag au Cloud.
          </h2>
          <FeatureList items={expertise} variant="numbered" />
        </div>
      </SplitSection>

      {/* Trust */}
      <section className="bg-surface py-24 px-8 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-label text-outline text-xs uppercase tracking-[0.3em] mb-12 block">
            Ils nous font confiance
          </span>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale">
            {["CHÂTEAU MARGAUX", "L'ORÉAL", "SANOFI", "LOUIS VUITTON"].map((brand) => (
              <span key={brand} className="text-2xl font-black text-primary font-headline">{brand}</span>
            ))}
          </div>
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="bg-surface-container-lowest p-12 relative">
              <MaterialIcon
                name="format_quote"
                filled
                className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-secondary/20"
              />
              <p className="text-2xl font-body italic text-primary leading-relaxed mb-8">
                &ldquo;AEDS a révolutionné notre approche de la lutte contre la contrefaçon. Leur solution hybride physique-digitale est la plus robuste du marché pour nos spiritueux d&apos;exception.&rdquo;
              </p>
              <div>
                <p className="font-headline font-bold text-primary">Jean-Pierre Lambert</p>
                <p className="text-on-surface-variant text-sm font-label uppercase tracking-widest">
                  Directeur Supply Chain, Groupe Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
