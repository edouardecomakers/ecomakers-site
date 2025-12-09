import { Cpu, Settings, Users, Briefcase, Wrench, Leaf } from "lucide-react"

export default function MetiersCandidatsSection() {
  const metiers = [
    {
      icon: Cpu,
      titre: "Technicien GTB/GTC",
      description: "Le terrain qui maîtrise installations et maintenance. BMS, automates, mise en service."
    },
    {
      icon: Settings,
      titre: "Automaticien",
      description: "L'expert programmation et supervision. Protocoles, réseaux, optimisation systèmes."
    },
    {
      icon: Users,
      titre: "Chef de Projet GTB/GTC",
      description: "Le coordinateur. Pilote études, chantiers, équipes. Garant délais et qualité."
    },
    {
      icon: Briefcase,
      titre: "Chargé d'Affaires",
      description: "Le commercial technique. Chiffrage, réponses AO, négociation, suivi client."
    },
    {
      icon: Wrench,
      titre: "Ingénieur GTB",
      description: "L'expert conception et optimisation. Études techniques, choix architecturaux, efficacité énergétique."
    },
    {
      icon: Leaf,
      titre: "Energy Manager",
      description: "Le stratège performance. Analyse consommations, plans d'action, décret tertiaire."
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Les métiers GTB/GTC sur lesquels nous nous focalisons
            </h2>
            <p className="text-muted-foreground">
              Expertise exclusive sur 6 métiers clés de la performance énergétique
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {metiers.map((metier, index) => {
              const Icon = metier.icon
              return (
                <div key={index} className="flex flex-col items-start gap-4 rounded-lg border bg-card p-6 hover:border-secondary transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{metier.titre}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {metier.description}
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
