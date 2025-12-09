import { Target } from "lucide-react"

export default function VisionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center space-x-2">
            <Target className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Notre vision</h2>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <div className="space-y-8 text-center">
            <p className="text-xl md:text-2xl font-semibold text-primary">
              Être le partenaire de référence des acteurs de la performance énergétique du bâtiment en Île-de-France.
            </p>
            <p className="text-lg text-muted-foreground md:text-xl/relaxed">
              Faciliter la rencontre entre les meilleurs talents et les entreprises qui construisent le futur du bâtiment intelligent et sobre en énergie.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}