import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function CtaAboveFormSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Prêt à recruter autrement ?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Recevez votre analyse de marché personnalisée sous 24h. 100% gratuit.
          </p>
          <div className="flex justify-center pt-4">
            <div className="flex flex-col items-start space-y-2">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/90">
                <CheckCircle className="h-4 w-4" />
                <span>Candidats disponibles pour votre poste</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/90">
                <CheckCircle className="h-4 w-4" />
                <span>Fourchettes salariales du marché</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/90">
                <CheckCircle className="h-4 w-4" />
                <span>Stratégie de recrutement recommandée</span>
              </div>
            </div>
          </div>
          <Button size="lg" variant="secondary" asChild>
            <a href="#formulaire">Obtenir mon analyse gratuite</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
