import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'
import HeroSection from '@/components/landing/sections/ecomakers/home/HeroSection'
import StatsSection from '@/components/landing/sections/ecomakers/home/StatsSection'
import AutresCabinetsSection from '@/components/landing/sections/ecomakers/home/AutresCabinetsSection'
import ValuePropsSection from '@/components/landing/sections/ecomakers/home/ValuePropsSection'
import TrustSection from '@/components/landing/sections/ecomakers/home/TrustSection'
import MetiersSection from '@/components/landing/sections/ecomakers/home/MetiersSection'
import TeaserEntreprisesSection from '@/components/landing/sections/ecomakers/home/TeaserEntreprisesSection'
import TeaserCandidatsSection from '@/components/landing/sections/ecomakers/home/TeaserCandidatsSection'
import CtaFinalSection from '@/components/landing/sections/ecomakers/home/CtaFinalSection'

export const metadata = {
  title: "EcoMakers - Recrutement GTB/GTC par approche directe",
  description: "Cabinet de recrutement 100% spécialisé GTB/GTC. Approche directe, paiement au succès, garantie remplacement. 2000+ profils qualifiés dans notre réseau.",
  keywords: "recrutement GTB, recrutement GTC, approche directe GTB, technicien GTB, ingénieur GTB, performance énergétique",
  openGraph: {
    title: "EcoMakers - Recrutement GTB/GTC par approche directe",
    description: "Cabinet de recrutement 100% spécialisé GTB/GTC. Approche directe, paiement au succès, garantie remplacement. 2000+ profils qualifiés dans notre réseau.",
    url: "https://ecomakers.fr",
    siteName: "EcoMakers",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoMakers - Recrutement GTB/GTC par approche directe",
    description: "Cabinet de recrutement 100% spécialisé GTB/GTC. Approche directe, paiement au succès, garantie remplacement. 2000+ profils qualifiés dans notre réseau.",
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
        <AutresCabinetsSection variant="home" />
        <ValuePropsSection />
        <TrustSection />
        <MetiersSection />
        <TeaserEntreprisesSection />
        <TeaserCandidatsSection />
        <CtaFinalSection />
      </main>
      <Footer />
    </>
  )
}
