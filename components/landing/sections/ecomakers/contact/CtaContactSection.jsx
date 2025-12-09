import { Button } from "@/components/ui/button"

export default function CtaContactSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center space-y-4 text-center p-6 bg-card rounded-lg border">
            <h3 className="text-2xl font-bold tracking-tighter">Entreprises</h3>
            <p className="text-muted-foreground">
              Découvrez comment optimiser vos recrutements avec notre expertise
            </p>
            <Button asChild className="w-full">
              <a href="/entreprises">Obtenir mon analyse gratuite</a>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center p-6 bg-card rounded-lg border">
            <h3 className="text-2xl font-bold tracking-tighter">Candidats</h3>
            <p className="text-muted-foreground">
              Rejoignez notre réseau et accédez aux meilleures opportunités
            </p>
            <Button asChild variant="secondary" className="w-full">
              <a href="/candidats">Rejoindre le réseau</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}