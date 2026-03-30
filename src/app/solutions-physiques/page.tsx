import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import CardGrid from "@/components/sections/CardGrid";
import SplitSection from "@/components/sections/SplitSection";
import FeatureList from "@/components/sections/FeatureList";
import CTASection from "@/components/sections/CTASection";
import MaterialIcon from "@/components/ui/MaterialIcon";

export const metadata = {
  title: "Solutions Physiques & Précision Industrielle",
  description:
    "La fusion radicale entre l'ingénierie matérielle de pointe et l'intelligence connectée.",
};

const rfidCards = [
  { icon: "settings_input_antenna", title: "Géométrie d'Antenne Optimisée", description: "Calculs de champ électromagnétique avancés pour une lecture parfaite, peu importe l'environnement physique." },
  { icon: "print", title: "Impression Haute Définition", description: "Encres conductrices de dernière génération garantissant une durabilité exceptionnelle et une finesse de trait micronique." },
  { icon: "layers", title: "Assemblage Multi-Couches", description: "Superposition complexe de substrats intelligents pour une intégration hermétique au packaging final." },
];

const robotFeatures = [
  { icon: "bolt", title: "Zéro Temps d'Arrêt", description: "Maintenance prédictive intégrée via capteurs IoT." },
  { icon: "visibility", title: "Vision Artificielle", description: "Contrôle qualité optique en temps réel à 120 images/seconde." },
  { icon: "precision_manufacturing", title: "Calibration Automatique", description: "Ajustement dynamique selon le format du produit." },
];

const advantages = [
  { icon: "speed", title: "Vitesse d'Exécution", description: "Réduction des cycles de production grâce à une synchronisation parfaite." },
  { icon: "biotech", title: "Précision Chirurgicale", description: "Tolérance micronique sur chaque composant physique installé." },
  { icon: "hub", title: "Écosystème Ouvert", description: "Interopérabilité native avec vos systèmes ERP et lignes tierces." },
];

export default function SolutionsPhysiquesPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        badge="Physique & Intelligence"
        title={<>L&apos;Architecture de la <br /><span className="text-secondary-fixed-dim">Précision Industrielle</span></>}
        description="La fusion radicale entre l'ingénierie matérielle de pointe et l'intelligence connectée. Nous redéfinissons les limites de la traçabilité par des systèmes physiques sur-mesure."
        primaryCTA={{ label: "Explorer nos systèmes" }}
        secondaryCTA={{ label: "Spécifications techniques" }}
        image={{
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf6_lcAkHC0PZM8vrf_KHyqrWQRtUhrsGuKlcDHujaiQT6fjPzWDea3Gkt3_--tIJ4mbuczaXKgGjfph6qBsOZaRfk6civvB23oaZ2hClrxosvpu4ZxQhbivfVKyfpvIStihn7Oewltg6elMWtZhmhCd87OiB7qBMY_Uz6xvR2BC7FWnVLrc2oQr2R64psWdyB6V7ud-NTo66lRBu7JSWH9lRbBQ2Qi5Us3s_fvzPC3oMTlrPNMEhIiACB_35VHFa2rwLCK6xr2D2h",
          alt: "Industrial Precision Background",
        }}
        variant="overlay-dark"
      />

      {/* RFID/NFC Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-headline font-extrabold text-primary text-4xl mb-4">
              Conception d&apos;Antennes RFID &amp; NFC sur Mesure
            </h2>
            <p className="font-body text-on-surface-variant text-lg max-w-3xl">
              Optimisation de la conductivité et intégration invisible pour les secteurs de la pharma et du luxe.
            </p>
          </div>
          <CardGrid cards={rfidCards} columns={3} />
        </div>
      </section>

      {/* Robotic Integration */}
      <SplitSection
        className="bg-surface-container-low py-24 px-8"
        media={
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-fixed/30 -z-10" />
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVo9TP00Mzt_f4s0t8ACNQvjfWzep-94PBc02CnZGCq9tqYPbGhARHj0PgVRs77hLXtbgpEFhz1Fwq382XY0iwHRK5vIDjLcOBfcVzSiLzQpgpIRC-5KJ_1Acg5wyoSNph6Eya9p1au8H2nsrvY5e1_8jHGjBxjPnMVuLKIfbxDwtS8E4wguGJgYfBTemuocc1cKTGf16shQlqs6tNuXPEeh25BI4BcpQLNI54aWjJenaYR1hjF0AMr58Pn03jk0jY9mjr61_IWR6v"
              alt="Robotic Integration"
              width={600}
              height={500}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-primary text-white p-8 max-w-[240px]">
              <p className="font-headline font-bold text-sm uppercase tracking-widest mb-2">Statut Système</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-xs opacity-70">Optimisation Flux Active</p>
              </div>
            </div>
          </div>
        }
      >
        <div>
          <h2 className="font-headline font-extrabold text-primary text-4xl mb-6">
            Intégration Haute Vitesse sur Lignes de Production
          </h2>
          <div className="flex items-center gap-4 mb-8">
            <div className="text-6xl font-black text-secondary">99.9%</div>
            <div className="text-sm font-label uppercase tracking-widest text-primary/60 leading-tight">
              Efficacité Opérationnelle <br />Garantie
            </div>
          </div>
          <p className="font-body text-on-surface-variant text-lg mb-8 leading-relaxed">
            Nos robots personnalisés s&apos;insèrent dans vos flux existants sans rupture de cadence, assurant une pose de tags à la milliseconde près.
          </p>
          <FeatureList items={robotFeatures} variant="icon-left" />
        </div>
      </SplitSection>

      {/* Strategic Advantages */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8 text-center mb-16">
          <h2 className="font-headline font-extrabold text-primary text-3xl">L&apos;Avantage AEDS</h2>
        </div>
        <div className="max-w-7xl mx-auto px-8">
          <CardGrid cards={advantages} columns={3} variant="centered" />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Prêt à transformer votre outil industriel?"
        description="Nos experts analysent vos lignes de production pour identifier les leviers de performance physique et digitale."
        primaryCTA={{ label: "Prendre rendez-vous" }}
      />
    </>
  );
}
