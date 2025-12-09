import { Button } from "@/components/ui/button"

export default function CtaBlogSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vous cherchez des opportunités GTB/GTC?</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">Rejoignez notre réseau et accédez aux meilleures offres d'Île-de-France.</p>
          <div className="pt-6">
            <Button size="lg" asChild>
              <a href="/candidats">Rejoindre le réseau EcoMakers</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}