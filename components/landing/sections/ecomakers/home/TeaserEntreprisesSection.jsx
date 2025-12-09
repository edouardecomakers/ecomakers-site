import { ClipboardCheck, MessageCircle, Target, Handshake, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const etapes = [
  {
    icon: ClipboardCheck,
    title: "Analyse gratuite (24h)",
    description: "Formulaire 2 min → Rapport personnalisé avec profils disponibles et stratégie recommandée."
  },
  {
    icon: MessageCircle,
    title: "Cadrage stratégique (30-45 min)",
    description: "Échange approfondi sur votre contexte, technologies, et critères de sélection."
  },
  {
    icon: Target,
    title: "Sélection chirurgicale (5-7 jours)",
    description: "Activation de notre réseau de 2000+ profils GTB/GTC. 2 candidats ultra-ciblés."
  },
  {
    icon: Handshake,
    title: "Présentation (7 jours max)",
    description: "2 profils présentés. Organisation entretiens, négociation, suivi jusqu'à l'intégration."
  }
]

export default function TeaserEntreprisesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5" id="entreprises-teaser">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Entreprises
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Comment recruter un profil GTB/GTC en 7 jours
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
              Un processus structuré en 4 étapes
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {etapes.map((item, index) => {
            const Icon = item.icon
            return (
              <div className="flex gap-4 p-4 rounded-lg border bg-card hover:border-primary transition-colors" key={index}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
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
          <Button asChild size="lg">
            <Link href="/entreprises#formulaire">
              Obtenir mon analyse gratuite
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
