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
    slug: "metiers-gtb-gtc-plus-recherches-2024",
    useImage: true
  },
  {
    id: 2,
    title: "La GTB sauve-t-elle vraiment la planète ?",
    excerpt: "Empreinte carbone réelle des systèmes GTB : 6-10 kg CO₂/m² avant de fonctionner, ROI écologique 2-7 ans, leviers d'action par métier.",
    date: "18 novembre 2025",
    datetime: "2025-11-18",
    readTime: "35 min",
    category: "Impact Environnemental",
    slug: "gtb-empreinte-carbone-impact-environnemental",
    useImage: false,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Baromètre des Salaires GTB Île-de-France 2025",
    excerpt: "Le premier baromètre complet basé sur 755 offres réelles. Fourchettes par métier, écarts géographiques, impact des certifications.",
    date: "11 novembre 2025",
    datetime: "2025-11-11",
    readTime: "15 min",
    category: "Salaires",
    slug: "barometre-salaires-gtb-ile-de-france-2025",
    useImage: false,
    gradient: "from-blue-500 to-cyan-500"
  }
]

export default function ArticlesGridSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.id} className="group flex flex-col rounded-lg border bg-card overflow-hidden hover:border-primary transition-colors">
              {article.useImage ? (
                <div className="relative w-full">
                  <img
                    alt=""
                    src={article.imageUrl}
                    className="aspect-video w-full object-cover"
                  />
                </div>
              ) : (
                <div className={`relative w-full aspect-video bg-gradient-to-br ${article.gradient} flex items-center justify-center p-6`}>
                  <div className="text-center">
                    <div className="inline-block rounded-lg bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white mb-3">
                      {article.category}
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {article.title}
                    </h3>
                  </div>
                </div>
              )}
              <div className="flex flex-col grow p-6 space-y-4">
                <div className="space-y-2">
                  {article.useImage && (
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {article.category}
                    </div>
                  )}
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    <Link href={`/blog/${article.slug}`}>
                      {article.useImage ? article.title : ""}
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
