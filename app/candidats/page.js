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
  title: 'Candidats - Opportunités GTB/GTC | EcoMakers',
  description: "Accédez aux meilleures opportunités GTB/GTC d'Île-de-France. Offres exclusives, accompagnement personnalisé.",
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
