import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'
import HeroBlogSection from '@/components/landing/sections/ecomakers/blog/HeroBlogSection'
import ArticlesGridSection from '@/components/landing/sections/ecomakers/blog/ArticlesGridSection'
import CtaBlogSection from '@/components/landing/sections/ecomakers/blog/CtaBlogSection'

export const metadata = {
  title: 'Trajectoires GTB - Blog | EcoMakers',
  description: "Ressources gratuites pour votre carrière GTB/GTC: salaires, parcours métiers, certifications.",
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
