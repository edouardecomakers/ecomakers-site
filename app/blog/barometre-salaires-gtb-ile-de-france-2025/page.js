import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'
import ArticleHeroSection from '@/components/landing/sections/ecomakers/blog/article/ArticleHeroSection'
import ArticleContentBarometreSection from '@/components/landing/sections/ecomakers/blog/article/ArticleContentBarometreSection'
import CtaBlogSection from '@/components/landing/sections/ecomakers/blog/CtaBlogSection'

export const metadata = {
  title: "Baromètre des Salaires GTB Île-de-France 2025 | 755 offres analysées | EcoMakers",
  description: "Découvrez les salaires GTB en Île-de-France : 755 offres analysées, 6 métiers décryptés, fourchettes par expérience, certifications valorisantes et conseils négociation.",
  keywords: "salaire GTB, baromètre salaire GTB, technicien GTB salaire, automaticien GTB salaire, chef projet GTB salaire, Île-de-France, 2025, négociation salaire, certification Niagara",
  openGraph: {
    title: "Baromètre des Salaires GTB Île-de-France 2025 | EcoMakers",
    description: "755 offres analysées, 6 métiers décryptés. Fourchettes salariales réelles, écarts géographiques, impact des certifications et conseils négociation.",
    url: "https://ecomakers.fr/blog/barometre-salaires-gtb-ile-de-france-2025",
    siteName: "EcoMakers",
    locale: "fr_FR",
    type: "article",
    publishedTime: "2025-11-18T09:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baromètre des Salaires GTB Île-de-France 2025",
    description: "755 offres analysées, 6 métiers décryptés. Fourchettes salariales, certifications valorisantes et conseils négociation.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BarometreSalairesGTBPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ArticleHeroSection 
          category="Baromètre Salaires"
          title="Baromètre des Salaires GTB Île-de-France 2025"
          excerpt="755 offres analysées, 6 métiers décryptés. Les fourchettes salariales réelles par métier et expérience, les écarts géographiques, l'impact des certifications et les stratégies de négociation qui fonctionnent."
          date="18 novembre 2025"
          datetime="2025-11-18"
          readTime="35 min"
        />
        <ArticleContentBarometreSection />
        <CtaBlogSection />
      </main>
      <Footer />
    </>
  )
}
