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
  title: 'EcoMakers - Recrutement GTB/GTC Île-de-France',
  description: "Le spécialiste du recrutement GTB/GTC en Île-de-France. Connectez-vous avec les meilleurs talents ou trouvez votre prochain emploi.",
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
