import { ClipboardCheck, MessageCircle, Target, Handshake, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const etapes = [
  {
    icon: ClipboardCheck,
    title: "Échange initial",
    description: "Prise de contact rapide pour comprendre votre besoin, votre contexte et vos critères."
  },
  {
    icon: MessageCircle,
    title: "Cadrage stratégique",
    description: "Échange approfondi sur votre contexte, technologies, culture d'entreprise et critères de sélection."
  },
  {
    icon: Target,
    title: "Approche directe ciblée",
    description: "Identification et approche des candidats correspondant exactement à votre besoin. Zéro annonce."
  },
  {
    icon: Handshake,
    title: "Présentation & suivi",
    description: "Profils qualifiés présentés avec synthèse détaillée. Suivi d'intégration et garantie remplacement."
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
              Comment recruter un profil GTB/GTC
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
            <Link href="/contact">
              Confiez-nous votre besoin
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
