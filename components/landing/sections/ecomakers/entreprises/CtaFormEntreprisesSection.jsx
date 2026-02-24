import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function CtaFormEntreprisesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Prêt à recruter autrement ?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Parlez-nous de votre besoin. On vous dit rapidement si on peut vous aider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-left max-w-md mx-auto">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Échange rapide et sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Vision claire du marché pour votre poste</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Des profils disponibles dès le jour 1</span>
              </div>
            </div>
          </div>
          <Button size="lg" variant="secondary" asChild>
            <a href="/contact">Confiez-nous votre besoin</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
