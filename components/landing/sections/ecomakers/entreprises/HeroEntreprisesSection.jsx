import { Button } from "@/components/ui/button"

export default function HeroEntreprisesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Recrutez les meilleurs talents GTB/GTC par approche directe
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-2xl">
            Le seul cabinet 100% spécialisé GTB/GTC. On ne publie aucune annonce : on identifie et on approche directement les profils que vous ne trouverez pas ailleurs.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="rounded-lg" asChild>
              <a href="/contact">
                Confiez-nous votre besoin
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
