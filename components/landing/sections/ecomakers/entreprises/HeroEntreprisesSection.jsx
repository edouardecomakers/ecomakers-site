import { Button } from "@/components/ui/button"

export default function HeroEntreprisesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Recrutez les meilleurs talents GTB/GTC d'Île-de-France en 7 jours
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-2xl">
            Fini les recrutements qui traînent 3-4 mois. Recevez 2 candidats qualifiés en 7 jours garanti, ou -50% sur les honoraires.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="rounded-lg" asChild>
              <a href="#formulaire">
                Obtenir mon analyse de marché gratuite
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
