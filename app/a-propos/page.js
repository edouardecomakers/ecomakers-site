import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'
import HeroAProposSection from '@/components/landing/sections/ecomakers/a-propos/HeroAProposSection'
import ApprocheDifferenteSection from '@/components/landing/sections/ecomakers/a-propos/ApprocheDifferenteSection'
import PourQuiSection from '@/components/landing/sections/ecomakers/a-propos/PourQuiSection'
import CtaFinalAProposSection from '@/components/landing/sections/ecomakers/a-propos/CtaFinalAProposSection'

export const metadata = {
  title: "A Propos - EcoMakers | Cabinet de Recrutement GTB/GTC Spécialisé",
  description: "EcoMakers, cabinet de recrutement spécialisé en GTB/GTC depuis 2013. Notre mission : connecter les meilleurs talents avec les entreprises en Ile-de-France.",
  keywords: "EcoMakers, cabinet recrutement GTB, a propos, histoire, mission",
  openGraph: {
    title: "A Propos - EcoMakers | Cabinet de Recrutement GTB/GTC Spécialisé",
    description: "EcoMakers, cabinet de recrutement spécialisé en GTB/GTC depuis 2013. Notre mission : connecter les meilleurs talents avec les entreprises en Ile-de-France.",
    url: "https://ecomakers.fr/a-propos",
    siteName: "EcoMakers",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Propos - EcoMakers | Cabinet de Recrutement GTB/GTC Spécialisé",
    description: "EcoMakers, cabinet de recrutement spécialisé en GTB/GTC depuis 2013. Notre mission : connecter les meilleurs talents avec les entreprises en Ile-de-France.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
