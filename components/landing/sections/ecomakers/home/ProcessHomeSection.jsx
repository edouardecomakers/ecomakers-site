import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProcessHomeSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
            Notre process
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Un recrutement GTB/GTC simplifié</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">De l'analyse à l'embauche en 3 étapes structurées</p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <div className="flex gap-4 p-6 bg-card rounded-lg border">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
              1
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg">ANALYSE GRATUITE</h3>
              <p className="text-muted-foreground">
                Formulaire 2 min. Rapport personnalisé sous 24h avec candidats disponibles et stratégie recommandée.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="font-medium">Délai: 24h</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-card rounded-lg border">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
              2
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg">2 CANDIDATS QUALIFIÉS</h3>
              <p className="text-muted-foreground">
                Présentation de 2 profils ultra-ciblés avec CV, synthèse détaillée et disponibilités confirmées.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="font-medium">Délai: 7 jours garanti</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-card rounded-lg border">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
              3
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg">RECRUTEMENT RÉUSSI</h3>
              <p className="text-muted-foreground">
                Accompagnement entretiens, négociation salariale, suivi intégration et garantie remplacement 3 mois.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="font-medium">Suivi: 3 mois</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button size="lg" asChild>
            <a href="/entreprises">Voir le processus détaillé</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
