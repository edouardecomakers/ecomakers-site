import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'
import ArticleHeroSection from '@/components/landing/sections/ecomakers/blog/article/ArticleHeroSection'
import ArticleContentInterviewSection from '@/components/landing/sections/ecomakers/blog/article/ArticleContentInterviewSection'
import CtaBlogSection from '@/components/landing/sections/ecomakers/blog/CtaBlogSection'

export const metadata = {
  title: "Pourquoi la majorité des GTB n'atteignent jamais leur potentiel | EcoMakers",
  description: "Interview terrain avec Yacine Ben Youssef, consultant GTB indépendant. 6 ans d'expérience, des dizaines de sites audités.",
  keywords: "GTB, interview, consultant GTB, audit GTB, optimisation énergétique, capteurs, régulation, CEE, Smart Tech Engineering",
  openGraph: {
    title: "Pourquoi la majorité des GTB n'atteignent jamais leur potentiel | EcoMakers",
    description: "Interview terrain avec Yacine Ben Youssef, consultant GTB indépendant. 6 ans d'expérience, des dizaines de sites audités.",
    url: "https://ecomakers.fr/blog/interview-gtb-yacine-consultant",
    siteName: "EcoMakers",
    locale: "fr_FR",
    type: "article",
    publishedTime: "2026-02-01T09:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interview GTB : Pourquoi la majorité des GTB n'atteignent jamais leur potentiel",
    description: "Interview terrain avec Yacine Ben Youssef, consultant GTB indépendant. 6 ans d'expérience, des dizaines de sites audités.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function InterviewGTBYacinePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ArticleHeroSection 
          category="Interview Terrain"
          title="Pourquoi la majorité des GTB n'atteignent jamais leur potentiel"
          excerpt="Interview avec Yacine Ben Youssef, consultant GTB indépendant. 6 ans d'expérience, des dizaines de sites audités."
          date="1 février 2026"
          datetime="2026-02-01"
          readTime="12 min"
        />
        <ArticleContentInterviewSection />
        <CtaBlogSection />
      </main>
      <Footer />
    </>
  )
}
