import { Button } from "@/components/ui/button"
import { Building2, Users } from "lucide-react"

export default function CtaFinalSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Prêt à recruter autrement ?
            </h2>
            <p className="mx-auto max-w-[700px] text-xl text-primary-foreground/90">
              Rejoignez les entreprises et talents qui font confiance à EcoMakers
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-sm md:text-lg px-4 py-3 md:px-8 md:py-6 w-full sm:w-auto"
              asChild
            >
              <a href="/entreprises" className="flex items-center justify-center">
                <Building2 className="mr-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="truncate">Trouver les meilleurs profils GTB/GTC</span>
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-sm md:text-lg px-4 py-3 md:px-8 md:py-6 bg-transparent hover:bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 w-full sm:w-auto"
              asChild
            >
              <a href="/candidats" className="flex items-center justify-center">
                <Users className="mr-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="truncate">Rejoindre le réseau talents</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
