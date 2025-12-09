import { CheckCircle, Clock, Shield, Award } from "lucide-react"

export default function GarantiesSection() {
  const garanties = [
    {
      icon: Clock,
      titre: "Garantie 7 jours ou -50%",
      description: "Nous vous présentons 2 profils qualifiés sous 7 jours, garanti. Si nous ne tenons pas ce délai, -50% sur nos honoraires (soit 10% du salaire annuel brut)."
    },
    {
      icon: Award,
      titre: "2 profils qualifiés minimum",
      description: "Nous garantissons de vous présenter au minimum 2 candidats qui correspondent précisément à vos critères techniques et humains."
    },
    {
      icon: Shield,
      titre: "Remplacement gratuit jusqu'à validation période d'essai",
      description: "Si le candidat ne convient pas ou quitte l'entreprise avant la validation de sa période d'essai, nous le remplaçons gratuitement."
    }
  ]

  const badges = [
    { text: "7 jours garanti", variant: "success" },
    { text: "Sans engagement", variant: "info" },
    { text: "Candidats qualifiés", variant: "warning" },
    { text: "Île-de-France", variant: "secondary" }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nos garanties</h2>
            <p className="text-muted-foreground">Nous nous engageons sur les résultats</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {garanties.map((garantie, index) => {
              const Icon = garantie.icon
              return (
                <div key={index} className="flex flex-col items-start gap-4 rounded-lg border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{garantie.titre}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {garantie.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge, index) => {
              const variantClasses = {
                success: "bg-emerald-100 text-emerald-700 border-emerald-200",
                info: "bg-sky-100 text-sky-700 border-sky-200",
                warning: "bg-amber-100 text-amber-700 border-amber-200",
                secondary: "bg-slate-100 text-slate-700 border-slate-200"
              }
              return (
                <span
                  key={index}
                  className={`inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium ${variantClasses[badge.variant]}`}
                >
                  {badge.text}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
