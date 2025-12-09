import { Target, Zap, Lightbulb, TrendingUp, Eye, Heart } from "lucide-react"

export default function ValeursSection() {
  const valeurs = [
    {
      icon: Target,
      titre: "Exigence technique",
      description: "On valide l'effet, pas les apparences. Compétences réelles vérifiées."
    },
    {
      icon: Zap,
      titre: "Réactivité",
      description: "Chaque jour compte. On agit vite, pas dans 3 mois."
    },
    {
      icon: Lightbulb,
      titre: "Innovation utile",
      description: "La technologie sert la qualité du lien humain. Outils pour aller plus vite et comprendre les besoins réels."
    },
    {
      icon: TrendingUp,
      titre: "Impact réel",
      description: "Chaque mission améliore la performance énergétique réelle. Pas de greenwashing, des résultats mesurables."
    },
    {
      icon: Eye,
      titre: "Clarté",
      description: "Information directe, process transparents, délais respectés. Pas de jargon, pas de promesses creuses."
    },
    {
      icon: Heart,
      titre: "Respect",
      description: "Équité envers clients et candidats. On écoute avant tout, on comprend les enjeux de chacun."
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos valeurs : Simples, mais non négociables</h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 md:grid-cols-2">
          {valeurs.map((valeur, index) => {
            const IconComponent = valeur.icon
            return (
              <div key={index} className="bg-card p-6 rounded-lg border shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{valeur.titre}</h3>
                </div>
                <p className="text-muted-foreground">{valeur.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}