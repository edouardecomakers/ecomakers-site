import { AlertTriangle, Clock, TrendingDown, Crosshair } from "lucide-react"

export default function StatsEntreprisesSection() {
  const stats = [
    {
      icon: AlertTriangle,
      chiffre: "85%",
      titre: "Pénurie de candidats qualifiés",
      description: "85% des entreprises GTB peinent à recruter (France Travail 2024)"
    },
    {
      icon: Clock,
      chiffre: "3-4 mois",
      titre: "Délais de recrutement longs",
      description: "3-4 mois de délai moyen pour trouver le bon profil"
    },
    {
      icon: TrendingDown,
      chiffre: "3,2",
      titre: "Peu de candidatures par offre",
      description: "Seulement 3,2 candidatures vs 12,4 moyenne nationale (Indeed 2024)"
    },
    {
      icon: Crosshair,
      chiffre: "100%",
      titre: "Besoin de spécialisation technique",
      description: "Technologies spécifiques (KNX, BACnet, Tridium) difficiles à évaluer"
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Le constat
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Pourquoi recruter en GTB/GTC est si complexe
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex gap-4 p-6 rounded-lg border bg-card hover:border-primary transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{stat.titre}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
