import { Button } from "@/components/ui/button"

export default function CtaAboveFormCandidatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Prêt à booster votre carrière ?
          </h2>
          <p className="text-xl text-white/90">
            Rejoignez notre réseau et accédez aux meilleures opportunités GTB/GTC.
          </p>
          <Button size="lg" variant="default" className="bg-white text-secondary hover:bg-white/90" asChild>
            <a href="#formulaire">Rejoindre le réseau</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
