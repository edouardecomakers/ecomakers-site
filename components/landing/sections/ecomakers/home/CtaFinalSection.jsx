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
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6"
              asChild
            >
              <a href="/entreprises">
                <Building2 className="mr-2 h-5 w-5" />
                Trouver 2 profils en 7 jours (Garanti ou -50%)
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-transparent hover:bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30"
              asChild
            >
              <a href="/candidats">
                <Users className="mr-2 h-5 w-5" />
                Accéder aux offres exclusives (100% gratuit)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
