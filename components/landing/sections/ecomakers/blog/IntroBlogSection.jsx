import { Button } from "@/components/ui/button"
import { DollarSign, TrendingUp, Award, LineChart } from "lucide-react"

export default function IntroBlogSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ressources pour votre carrière GTB/GTC</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">Chaque publication vous apporte des insights concrets basés sur notre expertise terrain et l'analyse de 755+ offres d'emploi en Île-de-France.</p>
        </div>
        <div className="mx-auto flex max-w-2xl items-center justify-center gap-4 pt-8 flex-wrap">
          <Button variant="secondary" className="gap-2">
            <DollarSign className="h-4 w-4" />
            Salaires
          </Button>
          <Button variant="secondary" className="gap-2">
            <TrendingUp className="h-4 w-4" />
            Carrière
          </Button>
          <Button variant="secondary" className="gap-2">
            <Award className="h-4 w-4" />
            Certifications
          </Button>
          <Button variant="secondary" className="gap-2">
            <LineChart className="h-4 w-4" />
            Tendances
          </Button>
        </div>
      </div>
    </section>
  )
}