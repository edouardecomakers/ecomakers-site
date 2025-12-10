import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'
import ArticleHeroSection from '@/components/landing/sections/ecomakers/blog/article/ArticleHeroSection'
import ArticleContentCarboneSection from '@/components/landing/sections/ecomakers/blog/article/ArticleContentCarboneSection'
import CtaBlogSection from '@/components/landing/sections/ecomakers/blog/CtaBlogSection'

export const metadata = {
  title: "La GTB sauve-t-elle vraiment la planète ? Empreinte carbone réelle | EcoMakers",
  description: "L'empreinte carbone réelle des systèmes GTB : 6-10 kg CO₂/m² avant de fonctionner, ROI écologique de 2-7 ans, leviers d'action par métier. Données chiffrées et actions concrètes.",
  keywords: "empreinte carbone GTB, impact environnemental GTB, ROI écologique, GTB transition énergétique, éco-conception GTB, protocoles ouverts",
  openGraph: {
    title: "La GTB sauve-t-elle vraiment la planète ? Empreinte carbone réelle",
    description: "Empreinte carbone des systèmes GTB, ROI écologique par énergie, leviers d'action par métier. Analyse complète avec données chiffrées.",
    url: "https://ecomakers.fr/blog/gtb-empreinte-carbone-impact-environnemental",
    siteName: "EcoMakers",
    locale: "fr_FR",
    type: "article",
    publishedTime: "2025-11-18T09:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "La GTB sauve-t-elle vraiment la planète ?",
    description: "Empreinte carbone réelle des systèmes GTB et leviers d'action par métier.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function GTBEmpreinteCarbonePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ArticleHeroSection 
          category="Impact Environnemental"
          title="La GTB sauve-t-elle vraiment la planète ?"
          excerpt="Les systèmes GTB économisent 10-28% d'énergie, mais émettent 6-10 kg CO₂/m² avant même de fonctionner. Découvrez l'empreinte carbone réelle, le ROI écologique par énergie, et les leviers d'action concrets par métier."
          date="18 novembre 2025"
          datetime="2025-11-18"
          readTime="35 min"
        />
        <ArticleContentCarboneSection />
        <CtaBlogSection />
      </main>
      <Footer />
    </>
  )
}
