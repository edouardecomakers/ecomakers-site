import { UserPlus, Search, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const etapes = [
  {
    icon: UserPlus,
    title: "Vous rejoignez le réseau",
    description: "Formulaire en moins de 2 min. Renseignez votre métier, motivations, et situation actuelle."
  },
  {
    icon: Search,
    title: "Nous analysons votre profil",
    description: "Étude de votre parcours LinkedIn, compétences techniques, et trajectoire professionnelle."
  },
  {
    icon: Mail,
    title: "Opportunités ciblées",
    description: "Contact uniquement si l'offre correspond vraiment. Accompagnement : analyse, négociation, décision."
  }
]

export default function TeaserCandidatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50/50 dark:bg-blue-950/20" id="candidats-teaser">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm text-secondary font-medium">
              Candidats
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Comment rejoindre le réseau EcoMakers
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
              3 étapes pour accéder aux meilleures opportunités GTB/GTC
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {etapes.map((item, index) => {
            const Icon = item.icon
            return (
              <div className="flex gap-4 p-4 rounded-lg border bg-card hover:border-secondary transition-colors" key={index}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                  <Icon className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center mt-10">
          <Button asChild size="lg" variant="secondary">
            <Link href="/candidats#formulaire">
              Rejoindre le réseau
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
