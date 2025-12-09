import { Button } from "@/components/ui/button"

export default function CtaFinalCandidatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Prêt à booster votre carrière GTB/GTC ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="default" className="bg-white text-secondary hover:bg-white/90" asChild>
              <a href="#formulaire">Rejoindre le réseau</a>
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40"
              asChild
            >
              <a href="/blog">Voir les contenus</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
