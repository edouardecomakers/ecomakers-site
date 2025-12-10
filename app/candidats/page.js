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
  title: "Offres Emploi GTB/GTC - EcoMakers | Talents Ile-de-France",
  description: "Accédez aux meilleures opportunités GTB/GTC avant leur publication. Accompagnement personnalisé. Opportunités exclusives en Ile-de-France. Rejoignez 2000+ talents.",
  keywords: "emploi GTB, offre GTB, carrière GTC, technicien GTB emploi, ingénieur GTC offre, Ile-de-France",
  openGraph: {
    title: "Offres Emploi GTB/GTC - EcoMakers | Talents Ile-de-France",
    description: "Accédez aux meilleures opportunités GTB/GTC avant leur publication. Accompagnement personnalisé. Opportunités exclusives en Ile-de-France. Rejoignez 2000+ talents.",
    url: "https://ecomakers.fr/candidats",
    siteName: "EcoMakers",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offres Emploi GTB/GTC - EcoMakers | Talents Ile-de-France",
    description: "Accédez aux meilleures opportunités GTB/GTC avant leur publication. Accompagnement personnalisé. Opportunités exclusives en Ile-de-France. Rejoignez 2000+ talents.",
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
