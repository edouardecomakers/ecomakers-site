import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'
import HeroEntreprisesSection from '@/components/landing/sections/ecomakers/entreprises/HeroEntreprisesSection'
import DefisSection from '@/components/landing/sections/ecomakers/entreprises/DefisSection'
import MetiersSection from '@/components/landing/sections/ecomakers/entreprises/MetiersSection'
import CtaAboveFormSection from '@/components/landing/sections/ecomakers/entreprises/CtaAboveFormSection'
import ProcessSection from '@/components/landing/sections/ecomakers/entreprises/ProcessSection'
import OffreSection from '@/components/landing/sections/ecomakers/entreprises/OffreSection'
import ReseauSection from '@/components/landing/sections/ecomakers/entreprises/ReseauSection'
import FormAnalyseSection from '@/components/landing/sections/ecomakers/entreprises/FormAnalyseSection'
import FaqEntreprisesSection from '@/components/landing/sections/ecomakers/entreprises/FaqEntreprisesSection'
import CtaFinalEntreprisesSection from '@/components/landing/sections/ecomakers/entreprises/CtaFinalEntreprisesSection'

export const metadata = {
  title: "Recrutement GTB/GTC pour Entreprises - EcoMakers | Analyse Gratuite",
  description: "Recrutez vos talents GTB/GTC en 7 jours. Analyse gratuite de vos besoins. Paiement au succès (20%). Garantie 7 jours ou -50%. Cabinet spécialisé Ile-de-France.",
  keywords: "recrutement GTB entreprise, embaucher technicien GTB, recruter ingénieur GTC, cabinet recrutement GTB, Ile-de-France",
  openGraph: {
    title: "Recrutement GTB/GTC pour Entreprises - EcoMakers | Analyse Gratuite",
    description: "Recrutez vos talents GTB/GTC en 7 jours. Analyse gratuite de vos besoins. Paiement au succès (20%). Garantie 7 jours ou -50%. Cabinet spécialisé Ile-de-France.",
    url: "https://ecomakers.fr/entreprises",
    siteName: "EcoMakers",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recrutement GTB/GTC pour Entreprises - EcoMakers | Analyse Gratuite",
    description: "Recrutez vos talents GTB/GTC en 7 jours. Analyse gratuite de vos besoins. Paiement au succès (20%). Garantie 7 jours ou -50%. Cabinet spécialisé Ile-de-France.",
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
        <DefisSection />
        <MetiersSection />
        <CtaAboveFormSection />
        <ProcessSection />
        <OffreSection />
        <ReseauSection />
        <FormAnalyseSection />
        <FaqEntreprisesSection />
        <CtaFinalEntreprisesSection />
      </main>
      <Footer />
    </>
  )
}
