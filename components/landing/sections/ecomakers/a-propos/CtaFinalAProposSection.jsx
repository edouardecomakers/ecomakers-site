import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CtaFinalAProposSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Envie de travailler avec nous ?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Que vous soyez une entreprise à la recherche de talents GTB/GTC ou un professionnel en quête de nouvelles opportunités, contactez-nous.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg">
              <Link href="/entreprises">Recruter avec EcoMakers</Link>
            </Button>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/candidats">Rejoindre le réseau</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
