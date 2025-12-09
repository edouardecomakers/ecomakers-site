import { Button } from "@/components/ui/button"
import { Target, Clock, TrendingUp } from "lucide-react"

export default function HeroCandidatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Accédez aux meilleures opportunités GTB/GTC
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Spécialisation GTB/GTC et performance énergétique en Île-de-France
            </p>
            <p className="text-muted-foreground">
              Offres exclusives, process transparent, accompagnement personnalisé
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl w-full">
            <div className="flex items-center gap-3 rounded-lg border bg-card p-4">
              <Target className="h-5 w-5 text-secondary flex-shrink-0" />
              <span className="text-sm">Opportunités ciblées et confidentielles</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border bg-card p-4">
              <Clock className="h-5 w-5 text-secondary flex-shrink-0" />
              <span className="text-sm">Zéro perte de temps</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border bg-card p-4">
              <TrendingUp className="h-5 w-5 text-secondary flex-shrink-0" />
              <span className="text-sm">Suivi de carrière sur la durée</span>
            </div>
          </div>

          <Button size="lg" asChild>
            <a href="#formulaire">Rejoindre le réseau (1 min)</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
