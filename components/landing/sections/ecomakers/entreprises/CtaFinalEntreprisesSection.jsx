import { Button } from "@/components/ui/button"

export default function CtaFinalEntreprisesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Prêt à recruter les meilleurs profils GTB/GTC ?
          </h2>
          <Button size="lg" variant="secondary" asChild>
            <a href="/contact">Confiez-nous votre besoin</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
