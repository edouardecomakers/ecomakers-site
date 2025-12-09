import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'
import HeroContactSection from '@/components/landing/sections/ecomakers/contact/HeroContactSection'
import FormContactSection from '@/components/landing/sections/ecomakers/contact/FormContactSection'
import CtaContactSection from '@/components/landing/sections/ecomakers/contact/CtaContactSection'

export const metadata = {
  title: 'Contact | EcoMakers',
  description: "Contactez EcoMakers pour vos projets de recrutement GTB/GTC en Île-de-France.",
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
