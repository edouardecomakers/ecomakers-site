import { CheckCircle, Eye, Zap, TrendingUp } from "lucide-react"

export default function BeneficesCandidatsSection() {
  const benefices = [
    {
      icon: CheckCircle,
      titre: "Opportunités exclusives et ciblées",
      description: "Accès à des postes non publiés. Nous ne vous contactons que si l'opportunité correspond parfaitement à votre profil et vos aspirations."
    },
    {
      icon: Eye,
      titre: "Accompagnement transparent",
      description: "Connaissance approfondie des métiers GTB/GTC et des entreprises. Transparence totale sur le poste, l'environnement, les technologies et la rémunération."
    },
    {
      icon: Zap,
      titre: "Process rapide et efficace",
      description: "Pas de perte de temps. Échanges directs, retours rapides, process structuré. Vous savez où vous en êtes à chaque étape."
    },
    {
      icon: TrendingUp,
      titre: "Suivi de carrière long terme",
      description: "Accompagnement sur la durée, contenus exclusifs pour booster votre carrière. Pas juste un placement, une relation."
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Pourquoi rejoindre EcoMakers
            </h2>
            <p className="text-muted-foreground">
              Une approche différente pour votre carrière GTB/GTC
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefices.map((benefice, index) => {
              const Icon = benefice.icon
              return (
                <div key={index} className="flex gap-4 p-6 rounded-lg border bg-card hover:border-secondary transition-colors">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{benefice.titre}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefice.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
