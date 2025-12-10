import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'
import HeroContactSection from '@/components/landing/sections/ecomakers/contact/HeroContactSection'
import FormContactSection from '@/components/landing/sections/ecomakers/contact/FormContactSection'
import CtaContactSection from '@/components/landing/sections/ecomakers/contact/CtaContactSection'

export const metadata = {
  title: "Contact - EcoMakers | Recrutement GTB/GTC Ile-de-France",
  description: "Contactez EcoMakers pour vos projets de recrutement GTB/GTC en Ile-de-France. Réponse rapide et accompagnement personnalisé.",
  keywords: "contact EcoMakers, recrutement GTB contact, cabinet recrutement Paris",
  openGraph: {
    title: "Contact - EcoMakers | Recrutement GTB/GTC Ile-de-France",
    description: "Contactez EcoMakers pour vos projets de recrutement GTB/GTC en Ile-de-France. Réponse rapide et accompagnement personnalisé.",
    url: "https://ecomakers.fr/contact",
    siteName: "EcoMakers",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - EcoMakers | Recrutement GTB/GTC Ile-de-France",
    description: "Contactez EcoMakers pour vos projets de recrutement GTB/GTC en Ile-de-France. Réponse rapide et accompagnement personnalisé.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroContactSection />
        <FormContactSection />
        <CtaContactSection />
      </main>
      <Footer />
    </>
  )
}
