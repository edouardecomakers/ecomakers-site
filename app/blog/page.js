import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'
import HeroBlogSection from '@/components/landing/sections/ecomakers/blog/HeroBlogSection'
import ArticlesGridSection from '@/components/landing/sections/ecomakers/blog/ArticlesGridSection'
import CtaBlogSection from '@/components/landing/sections/ecomakers/blog/CtaBlogSection'

export const metadata = {
  title: "Blog - EcoMakers | Actualités Recrutement GTB/GTC",
  description: "Actualités, conseils et tendances du recrutement GTB/GTC. Guides pour entreprises et candidats. Expertise performance énergétique en Ile-de-France.",
  keywords: "blog recrutement GTB, actualités GTC, conseils carrière GTB, tendances recrutement",
  openGraph: {
    title: "Blog - EcoMakers | Actualités Recrutement GTB/GTC",
    description: "Actualités, conseils et tendances du recrutement GTB/GTC. Guides pour entreprises et candidats. Expertise performance énergétique en Ile-de-France.",
    url: "https://ecomakers.fr/blog",
    siteName: "EcoMakers",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - EcoMakers | Actualités Recrutement GTB/GTC",
    description: "Actualités, conseils et tendances du recrutement GTB/GTC. Guides pour entreprises et candidats. Expertise performance énergétique en Ile-de-France.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroBlogSection />
        <ArticlesGridSection />
        <CtaBlogSection />
      </main>
      <Footer />
    </>
  )
}
