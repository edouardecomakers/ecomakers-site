import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'
import HeroSection from '@/components/landing/sections/ecomakers/home/HeroSection'
import StatsSection from '@/components/landing/sections/ecomakers/home/StatsSection'
import ValuePropsSection from '@/components/landing/sections/ecomakers/home/ValuePropsSection'
import MetiersSection from '@/components/landing/sections/ecomakers/home/MetiersSection'
import TeaserEntreprisesSection from '@/components/landing/sections/ecomakers/home/TeaserEntreprisesSection'
import TeaserCandidatsSection from '@/components/landing/sections/ecomakers/home/TeaserCandidatsSection'
import CtaFinalSection from '@/components/landing/sections/ecomakers/home/CtaFinalSection'

export const metadata = {
  title: "EcoMakers - Recrutement GTB/GTC en Ile-de-France | Garantie 7 jours",
  description: "Cabinet de recrutement spécialisé en GTB/GTC et performance énergétique. 2 profils qualifiés en 7 jours ou -50%. Paiement au succès. 2000+ talents en Ile-de-France.",
  keywords: "recrutement GTB, recrutement GTC, technicien GTB, ingénieur GTB, performance énergétique, Ile-de-France, Paris",
  openGraph: {
    title: "EcoMakers - Recrutement GTB/GTC en Ile-de-France | Garantie 7 jours",
    description: "Cabinet de recrutement spécialisé en GTB/GTC et performance énergétique. 2 profils qualifiés en 7 jours ou -50%. Paiement au succès. 2000+ talents en Ile-de-France.",
    url: "https://ecomakers.fr",
    siteName: "EcoMakers",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoMakers - Recrutement GTB/GTC en Ile-de-France | Garantie 7 jours",
    description: "Cabinet de recrutement spécialisé en GTB/GTC et performance énergétique. 2 profils qualifiés en 7 jours ou -50%. Paiement au succès. 2000+ talents en Ile-de-France.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ValuePropsSection />
        <MetiersSection />
        <TeaserEntreprisesSection />
        <TeaserCandidatsSection />
        <CtaFinalSection />
      </main>
      <Footer />
    </>
  )
}
