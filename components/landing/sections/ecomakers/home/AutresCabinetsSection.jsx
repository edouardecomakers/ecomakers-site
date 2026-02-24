import { XCircle, ShieldX, UserX, Timer } from "lucide-react"

export default function AutresCabinetsSection({ variant = "home" }) {
  const blocs = [
    {
      icon: XCircle,
      titre: "Zéro profil présenté",
      description: "Un cabinet récupère le mandat en garantissant qu'il va trouver les meilleurs profils. Au final, il n'est même pas en mesure d'en présenter un seul. Les candidats GTB sont en poste et ne répondent pas aux annonces. Sans approche directe et sans connaissance fine de ces métiers, impossible de les identifier et encore moins de les convaincre."
    },
    {
      icon: ShieldX,
      titre: "Des profils à côté de la plaque",
      description: "Quand ils en trouvent, ils confondent CVC et GTB, ne connaissent pas la régulation, ne font pas la différence entre mise en service et programmation. Résultat : des candidats qui ne correspondent pas au poste."
    },
    {
      icon: UserX,
      titre: "Des candidats mal accompagnés",
      description: "Ils cherchent à remplir leur mandat, pas à construire une carrière. Ils poussent des profils vers des postes inadaptés, quitte à les faire rétrograder. Ils pensent à leur placement, pas au projet du candidat."
    },
    {
      icon: Timer,
      titre: "Tout le monde perd du temps",
      description: "Les entreprises multiplient les mandats sans résultat. Plusieurs cabinets se positionnent sur le même poste, la même annonce est publiée dix fois par dix cabinets différents sur les jobboards. Personne ne postule, et le poste finit par paraître impossible à pourvoir."
    }
  ]

  const titre = variant === "entreprises"
    ? "Et les autres cabinets échouent"
    : "Les autres cabinets ne peuvent pas recruter en GTB/GTC"

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent font-medium">
              Le vrai problème
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {titre}
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sans spécialisation GTB, un cabinet ne peut pas recruter sur ces métiers. Voilà ce qui se passe concrètement.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
          {blocs.map((bloc, index) => {
            const Icon = bloc.icon
            return (
              <div key={index} className="flex gap-4 p-6 rounded-lg border bg-card hover:border-accent transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{bloc.titre}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{bloc.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          <span className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary font-semibold">
            Spécialisation exclusive GTB/GTC
          </span>
          <span className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary font-semibold">
            Approche directe, zéro annonce
          </span>
          <span className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary font-semibold">
            Des profils disponibles dès le jour 1
          </span>
        </div>
      </div>
    </section>
  )
}
