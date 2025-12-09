import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'
import HeroAProposSection from '@/components/landing/sections/ecomakers/a-propos/HeroAProposSection'
import ApprocheDifferenteSection from '@/components/landing/sections/ecomakers/a-propos/ApprocheDifferenteSection'
import PourQuiSection from '@/components/landing/sections/ecomakers/a-propos/PourQuiSection'
import CtaFinalAProposSection from '@/components/landing/sections/ecomakers/a-propos/CtaFinalAProposSection'

export const metadata = {
  title: 'À Propos | EcoMakers',
  description: "Découvrez EcoMakers, cabinet de recrutement spécialisé GTB/GTC en Île-de-France. Une approche réseau pour des recrutements en 7 jours, pas en 3 mois.",
}

export default function AproposPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroAProposSection />
        <ApprocheDifferenteSection />
        <PourQuiSection />
        <CtaFinalAProposSection />
      </main>
      <Footer />
    </>
  )
}
