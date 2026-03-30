import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import FeatureList from "@/components/sections/FeatureList";
import StatsGrid from "@/components/sections/StatsGrid";
import BentoGrid from "@/components/sections/BentoGrid";
import CTASection from "@/components/sections/CTASection";
import PhoneMockup from "@/components/devices/PhoneMockup";
import MaterialIcon from "@/components/ui/MaterialIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutriviti - L'Étiquette Digitale du Vin",
  description:
    "Conformez-vous aux nouvelles réglementations européennes du vin tout en enrichissant l'expérience client avec Nutriviti.",
};

const complianceFeatures = [
  { icon: "gavel", title: "Règlement UE 2021/2117", description: "Affichage instantané des ingrédients et de la déclaration nutritionnelle complète via un simple QR code." },
  { icon: "nutrition", title: "Génération de Nutriscore", description: "Calcul automatique et affichage conforme des indicateurs nutritionnels pour chaque cuvée." },
  { icon: "translate", title: "Traduction Automatique", description: "L'interface s'adapte à la langue du consommateur, garantissant une conformité dans tous les pays de l'UE." },
];

const stats = [
  { value: "100%", label: "Légalement Conforme" },
  { value: "24h", label: "Mise en place", offsetY: "mt-8" },
  { value: "0", label: "Amendes Riskées", offsetY: "-mt-8" },
  { value: "€0", label: "Frais de Réimpression" },
];

const bentoItems = [
  {
    variant: "hero-image" as const,
    title: "Espace Libéré sur le Papier",
    description: "Réduisez la taille de vos étiquettes physiques en déportant les mentions légales obligatoires sur le digital. Gardez l'esthétique pure de vos bouteilles.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdUyblhnOVf-oncsQkeUkfbsgFW6HAi8slG4U8rQpCt3M3hQ8NEAuBfVE1xdqbx9CGol23wfPFP00OE386_PKqLsIDPyXsAW6FS4scK6icOqwN6WIIU_NfTIkM6Fqv2b5G3Fyujuk1XQWIRYksyDVQI7qm0q2ouiccMRytgZCqeGk7F9JreauO8ThBlAryyIqNZfNuyMlGHWjMLj6JYOl_IGZr411QqNYNm7CqK3Bfwd4ynyk7keGdEJKGUTo1i_R_4Ngq0fbwqn9S",
      alt: "Winemaker in field with tablet",
    },
  },
  { variant: "accent" as const, icon: "update", title: "Mise à jour en temps réel", description: "Une erreur dans un lot ? Modifiez les informations en un clic sans avoir à réimprimer vos stocks d'étiquettes." },
  { variant: "muted" as const, icon: "monitoring", title: "Data & Insights", description: "Comprenez où et quand vos vins sont dégustés grâce aux statistiques de scan anonymisées." },
  { variant: "wide" as const, icon: "eco", title: "Engagement Durable", description: "Réduisez l'empreinte carbone liée aux matériaux d'impression et proposez une traçabilité exemplaire du cep au verre." },
];

export default function NutrivitiPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        badge="L'Intelligence du Terroir"
        title={<>Nutriviti : L&apos;Étiquette <span className="text-secondary">Digitale</span> du Futur.</>}
        description="Conformez-vous aux nouvelles réglementations européennes du vin tout en enrichissant l'expérience client. Une solution connectée, élégante et sans compromis."
        primaryCTA={{ label: "Découvrir la solution" }}
        secondaryCTA={{ label: "Voir un exemple" }}
        image={{
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwCfayHMyBJovo-rUj3oGvyTPgzR0QG5Rql3AbkdZOrmd3oHTj2cpBKFRNnE9-TXXpke1j7_U-liW4WAPX1RI4skNrorNtbtuWcsOMO-Tqf7MoBiSFW5KvWy_IcCpOOXCVAutM1KY1ne-OxYjMg3l-kVfWTJ7voFz3nOh7wpe0_MUp_6WJuxBnHYcdABfMzx3FGX7D5WIgKJ1SkNbTw7dr50KLAqp550tHZLy7Fjnf1PYYdxY0M7e6-4DZEtmsx4n3SZQ8l8mdLNAp",
          alt: "Premium wine bottle with digital QR code label",
        }}
        variant="split"
        overlayWidget={
          <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl flex flex-col items-center gap-2">
            <MaterialIcon name="qr_code_2" className="text-4xl text-primary" />
            <span className="text-[10px] font-bold tracking-tighter uppercase text-primary">Scannez pour tester</span>
          </div>
        }
      />

      {/* Compliance Section */}
      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="font-headline text-4xl font-bold text-primary mb-8">Conformité Totale. Sérénité Maximale.</h2>
              <p className="text-on-surface-variant text-lg mb-12">
                Depuis décembre 2023, la réglementation européenne impose de nouvelles mentions obligatoires. Nutriviti automatise cette transition complexe vers le numérique.
              </p>
              <FeatureList items={complianceFeatures} variant="icon-boxed" />
            </div>
            <StatsGrid stats={stats} />
          </div>
        </div>
      </section>

      {/* Mobile Experience */}
      <section className="py-24 px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">L&apos;Expérience Consommateur Premium</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Offrez bien plus qu&apos;une étiquette légale. Proposez une immersion totale dans l&apos;univers de votre domaine.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Step 1 */}
          <div className="text-center group">
            <div className="relative mb-8 mx-auto w-48 h-48 flex items-center justify-center">
              <div className="absolute inset-0 bg-secondary/5 rounded-full scale-100 group-hover:scale-110 transition-transform duration-500" />
              <MaterialIcon name="contactless" className="text-6xl text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">1. Scan ou NFC</h3>
            <p className="text-on-surface-variant">Le client scanne le QR code ou approche son smartphone du tag NFC intégré.</p>
          </div>

          {/* Phone Mockup */}
          <PhoneMockup className="rotate-1">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Grand Cru Classé</span>
              <MaterialIcon name="share" className="text-primary text-xl" />
            </div>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAugqBp3CElrXBmHjO4DRGbHv_5Tp-STSSS1L1TQd-FDskxaAXwRFTFQZYq2uw8N_GiwDdp4PKcU2KeC93wsHAPFJrHy4pt5372IhpAb15tVnbk7pf7RmpczwCbLbQtQJLxPMNzUMmBylvSnC7xtpEEHhRSpsp-xwLfhdBCIoZIC6HoIdFgo5L9-21lxsIQZfRrhbE5vlKjdDJDV_nE5RRcRQLWtqenc2ukPpFfcslf06xFFn9jq3HtjN39KAXScY2T2DHjedYGD7zg"
              alt="Wine Details"
              width={320}
              height={160}
              className="w-full h-40 object-cover rounded-xl shadow-md"
            />
            <div>
              <h4 className="text-xl font-headline font-bold text-primary">Château Nutriviti 2021</h4>
              <p className="text-sm text-on-surface-variant italic">Saint-Émilion Grand Cru</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-surface-container p-2 text-center rounded-lg">
                <span className="block text-xs font-bold text-primary">13.5%</span>
                <span className="text-[10px] text-on-surface-variant">Alcool</span>
              </div>
              <div className="bg-surface-container p-2 text-center rounded-lg border-2 border-secondary">
                <span className="block text-xs font-bold text-secondary">A</span>
                <span className="text-[10px] text-on-surface-variant">Nutriscore</span>
              </div>
              <div className="bg-surface-container p-2 text-center rounded-lg">
                <span className="block text-xs font-bold text-primary">Bio</span>
                <span className="text-[10px] text-on-surface-variant">Label</span>
              </div>
            </div>
            <div className="p-4 bg-primary text-white rounded-lg space-y-2">
              <div className="flex justify-between text-xs"><span>Calories (100ml)</span><span>82 kcal</span></div>
              <div className="flex justify-between text-xs"><span>Sucre</span><span>0.2g</span></div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg border-l-4 border-secondary">
              <MaterialIcon name="info" className="text-secondary" />
              <span className="text-[10px] font-medium">Contient des sulfites. Vegan friendly.</span>
            </div>
          </PhoneMockup>

          {/* Step 3 */}
          <div className="text-center group">
            <div className="relative mb-8 mx-auto w-48 h-48 flex items-center justify-center">
              <div className="absolute inset-0 bg-secondary/5 rounded-full scale-100 group-hover:scale-110 transition-transform duration-500" />
              <MaterialIcon name="favorite" className="text-6xl text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">2. Engagement</h3>
            <p className="text-on-surface-variant">Le client découvre l&apos;histoire de la cuvée, les accords mets-vins et achète en direct.</p>
          </div>
        </div>
      </section>

      {/* Bento Benefits */}
      <section className="bg-surface py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <BentoGrid items={bentoItems} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Prêt pour la transformation numérique ?"
        description="Rejoignez les domaines d'exception qui font confiance à AEDS pour leur mise en conformité et leur engagement client."
        primaryCTA={{ label: "Démarrer maintenant" }}
        secondaryCTA={{ label: "Demander un audit" }}
        variant="gradient-card"
      />
    </>
  );
}
