import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    id: 1,
    title: "Les 6 métiers GTB/GTC les plus recherchés en 2024",
    excerpt: "Technicien, automaticien, chef de projet... Découvrez les profils GTB/GTC que les entreprises s'arrachent et pourquoi.",
    imageUrl: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&auto=format&fit=crop",
    date: "15 novembre 2024",
    datetime: "2024-11-15",
    readTime: "5 min",
    category: "Recrutement",
    slug: "metiers-gtb-gtc-plus-recherches-2024"
  },
  {
    id: 2,
    title: "Grille salariale GTB/GTC Île-de-France 2024",
    excerpt: "Salaires moyens des techniciens, automaticiens et chefs de projet GTB en région parisienne. Données actualisées novembre 2024.",
    imageUrl: "https://images.unsplash.com/photo-1554224311-beee0c1e3f96?w=800&auto=format&fit=crop",
    date: "10 novembre 2024",
    datetime: "2024-11-10",
    readTime: "7 min",
    category: "Salaires",
    slug: "grille-salariale-gtb-gtc-ile-de-france-2024"
  },
  {
    id: 3,
    title: "Comment négocier son salaire en GTB/GTC",
    excerpt: "5 leviers pour augmenter votre rémunération : certifications, expérience, zone géographique, type d'entreprise, compétences rares.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop",
    date: "5 novembre 2024",
    datetime: "2024-11-05",
    readTime: "6 min",
    category: "Carrière",
    slug: "negocier-salaire-gtb-gtc"
  }
]

export default function ArticlesGridSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.id} className="group flex flex-col rounded-lg border bg-card overflow-hidden hover:border-primary transition-colors">
              <div className="relative w-full">
                <img
                  alt=""
                  src={article.imageUrl}
                  className="aspect-video w-full object-cover"
                />
              </div>
              <div className="flex flex-col grow p-6 space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <time dateTime={article.datetime}>{article.date}</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
