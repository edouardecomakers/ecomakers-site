import { Button } from "@/components/ui/button"

export default function CtaFinalEntreprisesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Prêt à recruter en 7 jours ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="#formulaire">Obtenir mon analyse gratuite</a>
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              className="border-2 border-primary-foreground/20 hover:bg-primary-foreground/10 hover:border-primary-foreground/40"
              asChild
            >
              <a href="/contact">Contactez-nous</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
