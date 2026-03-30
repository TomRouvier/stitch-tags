import type { Metadata } from "next";
import { manrope, inter } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AEDS | Smart Packaging Solutions",
    template: "AEDS | %s",
  },
  description:
    "Expert en solutions physiques et digitales de smart packaging pour les secteurs de la pharma, du luxe et des spiritueux.",
  openGraph: {
    locale: "fr_FR",
    type: "website",
    siteName: "AEDS",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
