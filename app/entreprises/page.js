import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'
import HeroEntreprisesSection from '@/components/landing/sections/ecomakers/entreprises/HeroEntreprisesSection'
import StatsEntreprisesSection from '@/components/landing/sections/ecomakers/entreprises/StatsEntreprisesSection'
import AutresCabinetsSection from '@/components/landing/sections/ecomakers/home/AutresCabinetsSection'
import MetiersSection from '@/components/landing/sections/ecomakers/entreprises/MetiersSection'
import CtaFormEntreprisesSection from '@/components/landing/sections/ecomakers/entreprises/CtaFormEntreprisesSection'
import ProcessSection from '@/components/landing/sections/ecomakers/entreprises/ProcessSection'
import TrustSection from '@/components/landing/sections/ecomakers/home/TrustSection'
import TarifSection from '@/components/landing/sections/ecomakers/entreprises/TarifSection'
import FaqEntreprisesSection from '@/components/landing/sections/ecomakers/entreprises/FaqEntreprisesSection'
import CtaFinalEntreprisesSection from '@/components/landing/sections/ecomakers/entreprises/CtaFinalEntreprisesSection'

export const metadata = {
  title: "Recrutement GTB/GTC par approche directe | EcoMakers",
  description: "Cabinet de recrutement 100% spécialisé GTB/GTC. Approche directe, paiement au succès, garantie remplacement. 2000+ profils qualifiés dans notre réseau.",
  keywords: "recrutement GTB, recrutement GTC, approche directe GTB, cabinet recrutement performance énergétique, technicien GTB, ingénieur GTB",
  openGraph: {
    title: "Recrutement GTB/GTC par approche directe | EcoMakers",
    description: "Cabinet de recrutement 100% spécialisé GTB/GTC. Approche directe, paiement au succès, garantie remplacement. 2000+ profils qualifiés dans notre réseau.",
    url: "https://ecomakers.fr/entreprises",
    siteName: "EcoMakers",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recrutement GTB/GTC par approche directe | EcoMakers",
    description: "Cabinet de recrutement 100% spécialisé GTB/GTC. Approche directe, paiement au succès, garantie remplacement. 2000+ profils qualifiés dans notre réseau.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function EntreprisesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroEntreprisesSection />
        <StatsEntreprisesSection />
        <AutresCabinetsSection variant="entreprises" />
        <MetiersSection />
        <CtaFormEntreprisesSection />
        <ProcessSection />
        <TrustSection />
        <TarifSection />
        <FaqEntreprisesSection />
        <CtaFinalEntreprisesSection />
      </main>
      <Footer />
    </>
  )
}
