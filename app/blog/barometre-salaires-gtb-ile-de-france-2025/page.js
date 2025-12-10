import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'
import ArticleHeroSection from '@/components/landing/sections/ecomakers/blog/article/ArticleHeroSection'
import ArticleContentSection from '@/components/landing/sections/ecomakers/blog/article/ArticleContentSection'
import CtaBlogSection from '@/components/landing/sections/ecomakers/blog/CtaBlogSection'

export const metadata = {
  title: "Baromètre des Salaires GTB Île-de-France 2025 | EcoMakers",
  description: "Salaires réels de 6 métiers GTB en Île-de-France : technicien, automaticien, chef de projet. Données terrain, analyses géographiques, conseils négociation. 755 offres analysées.",
  keywords: "salaire GTB, baromètre salaires GTB, salaire technicien GTB, salaire automaticien, recrutement GTB Île-de-France, grille salariale GTC",
  openGraph: {
    title: "Baromètre des Salaires GTB Île-de-France 2025 | EcoMakers",
    description: "Salaires réels de 6 métiers GTB en Île-de-France : technicien, automaticien, chef de projet. Données terrain, analyses géographiques, conseils négociation.",
    url: "https://ecomakers.fr/blog/barometre-salaires-gtb-ile-de-france-2025",
    siteName: "EcoMakers",
    locale: "fr_FR",
    type: "article",
    publishedTime: "2025-11-11T09:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baromètre des Salaires GTB Île-de-France 2025",
    description: "Salaires réels de 6 métiers GTB en Île-de-France basés sur 755 offres analysées.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BarometreSalairesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ArticleHeroSection 
          category="Salaires"
          title="Baromètre des Salaires GTB Île-de-France 2025"
          excerpt="Le premier baromètre complet des salaires GTB en Île-de-France basé sur 755 offres réelles. Fourchettes par métier, écarts géographiques, impact des certifications et stratégies de négociation."
          date="11 novembre 2025"
          datetime="2025-11-11"
          readTime="15 min"
        />
        <ArticleContentSection />
        <CtaBlogSection />
      </main>
      <Footer />
    </>
  )
}
