import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'
import HeroCandidatsSection from '@/components/landing/sections/ecomakers/candidats/HeroCandidatsSection'
import BeneficesCandidatsSection from '@/components/landing/sections/ecomakers/candidats/BeneficesCandidatsSection'
import MetiersCandidatsSection from '@/components/landing/sections/ecomakers/candidats/MetiersCandidatsSection'
import CtaAboveFormCandidatsSection from '@/components/landing/sections/ecomakers/candidats/CtaAboveFormCandidatsSection'
import ProcessCandidatsSection from '@/components/landing/sections/ecomakers/candidats/ProcessCandidatsSection'
import TrajectoiresSection from '@/components/landing/sections/ecomakers/candidats/TrajectoiresSection'
import FormReseauSection from '@/components/landing/sections/ecomakers/candidats/FormReseauSection'
import FaqCandidatsSection from '@/components/landing/sections/ecomakers/candidats/FaqCandidatsSection'
import CtaFinalCandidatsSection from '@/components/landing/sections/ecomakers/candidats/CtaFinalCandidatsSection'

export const metadata = {
  title: "Carrière GTB/GTC - EcoMakers | Accompagnement personnalisé",
  description: "On ne vous propose pas juste une offre, on construit avec vous votre projet de carrière GTB/GTC. Accompagnement personnalisé, approche directe des entreprises pour vous.",
  keywords: "emploi GTB, carrière GTC, technicien GTB emploi, ingénieur GTC offre, accompagnement carrière GTB",
  openGraph: {
    title: "Carrière GTB/GTC - EcoMakers | Accompagnement personnalisé",
    description: "On ne vous propose pas juste une offre, on construit avec vous votre projet de carrière GTB/GTC. Accompagnement personnalisé, approche directe des entreprises pour vous.",
    url: "https://ecomakers.fr/candidats",
    siteName: "EcoMakers",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carrière GTB/GTC - EcoMakers | Accompagnement personnalisé",
    description: "On ne vous propose pas juste une offre, on construit avec vous votre projet de carrière GTB/GTC. Accompagnement personnalisé, approche directe des entreprises pour vous.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CandidatsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroCandidatsSection />
        <BeneficesCandidatsSection />
        <MetiersCandidatsSection />
        <CtaAboveFormCandidatsSection />
        <ProcessCandidatsSection />
        <TrajectoiresSection />
        <FormReseauSection />
        <FaqCandidatsSection />
        <CtaFinalCandidatsSection />
      </main>
      <Footer />
    </>
  )
}
