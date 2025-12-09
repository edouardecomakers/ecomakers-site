import { Button } from "@/components/ui/button"

export default function HeroContactSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contactez-nous</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">Vous avez un projet de recrutement ou une question? Envoyez-nous un message.</p>
        </div>
      </div>
    </section>
  )
}
