import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'
import ArticleHeroSection from '@/components/landing/sections/ecomakers/blog/article/ArticleHeroSection'
import ArticleContentCPFSection from '@/components/landing/sections/ecomakers/blog/article/ArticleContentCPFSection'
import CtaBlogSection from '@/components/landing/sections/ecomakers/blog/CtaBlogSection'

export const metadata = {
  title: "CPF + Formation GTB 2025 : Transformez Vos Droits en Certification | EcoMakers",
  description: "40M de comptes CPF en France. Découvrez comment financer votre certification GTB (Niagara N4, protocoles) avec vos droits CPF et booster votre carrière. Guide complet 2025.",
  keywords: "CPF formation GTB, financement formation GTB, certification Niagara CPF, formation CPF automatisme, droits CPF 2025",
  openGraph: {
    title: "CPF + Formation GTB 2025 : Transformez Vos Droits en Certification",
    description: "Guide complet pour financer votre formation GTB avec le CPF. Niagara N4, protocoles, ROI détaillé et process pas à pas.",
    url: "https://ecomakers.fr/blog/formation-gtb-cpf-2025",
    siteName: "EcoMakers",
    locale: "fr_FR",
    type: "article",
    publishedTime: "2025-12-10T09:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPF + Formation GTB 2025 : Guide Complet",
    description: "Financez votre certification GTB avec le CPF. Niagara N4, protocoles, process détaillé.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function FormationCPFPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ArticleHeroSection 
          category="Formation"
          title="CPF + Formation GTB 2025 : Transformez Vos Droits en Certification (Guide Complet)"
          excerpt="40M de comptes CPF en France, mais combien sont utilisés ? Découvrez comment financer une certification GTB (Niagara N4, protocoles) et transformer vos droits CPF en accélérateur de carrière."
          date="10 décembre 2025"
          datetime="2025-12-10"
          readTime="20 min"
        />
        <ArticleContentCPFSection />
        <CtaBlogSection />
      </main>
      <Footer />
    </>
  )
}
