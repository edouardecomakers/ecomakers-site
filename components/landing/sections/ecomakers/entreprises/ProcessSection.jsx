import { CheckCircle } from "lucide-react"

export default function ProcessSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comment nous travaillons</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">Un process structuré, des résultats en 7 jours</p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <div className="flex gap-4 p-6 bg-card rounded-lg border">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
              1
            </div>
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-2">
                Délai: 24h
              </div>
              <h3 className="font-bold text-lg">ANALYSE GRATUITE</h3>
              <p className="text-muted-foreground">
                Formulaire 2 min. Rapport personnalisé 24h: nombre candidats disponibles, fourchettes salariales, 3-4 profils anonymisés, niveau tension, stratégie recommandée.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="font-medium">Résultat: Vision claire du marché avant engagement.</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-card rounded-lg border">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
              2
            </div>
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-2">
                Délai: 30-45 min
              </div>
              <h3 className="font-bold text-lg">CADRAGE STRATÉGIQUE</h3>
              <p className="text-muted-foreground">
                Échange 30-45 min: contexte entreprise, technologies (KNX, BACnet, Tridium), évolutions poste, fourchette salariale, angle d'approche candidat.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="font-medium">Résultat: Identification de LA bonne personne.</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-card rounded-lg border">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
              3
            </div>
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-2">
                Délai: 5-7 jours
              </div>
              <h3 className="font-bold text-lg">SÉLECTION CHIRURGICALE</h3>
              <p className="text-muted-foreground">
                Sélection chirurgicale : plus de 2000 profils pré-qualifiés. Compétences techniques, motivations alignées, trajectoire cohérente, disponibilité réelle.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="font-medium">Résultat: 2 candidats ultra-ciblés, pas de CV générique.</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-card rounded-lg border">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
              4
            </div>
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-2">
                Délai: 7 jours maximum
              </div>
              <h3 className="font-bold text-lg">PRÉSENTATION & ACCOMPAGNEMENT</h3>
              <p className="text-muted-foreground">
                Sous 7 jours: 2 profils avec synthèse. Organisation entretiens, accompagnement négociation, suivi 1 mois, garantie remplacement.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="font-medium">Résultat: Recrutement réussi, intégration sécurisée.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
