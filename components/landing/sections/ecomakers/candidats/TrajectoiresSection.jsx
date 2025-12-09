import { CheckCircle } from "lucide-react"

export default function TrajectoiresSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Trajectoires GTB/GTC
            </h2>
            <p className="text-muted-foreground">
              Contenu gratuit pour réussir votre carrière
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-start space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>Fiches métiers détaillées (compétences, salaires, évolutions)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>Guides préparation entretiens techniques GTB/GTC</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>Analyses marché et tendances salaires Île-de-France</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>Conseils négociation et évolution de carrière</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>Actualités réglementaires (décret tertiaire, RE2020...)</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/blog" className="text-secondary hover:underline font-medium">
              Découvrir tous nos contenus →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
