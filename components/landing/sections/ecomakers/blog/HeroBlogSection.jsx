import { Button } from "@/components/ui/button"

export default function HeroBlogSection() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 pb-8 md:pb-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trajectoires GTB</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">Des ressources concrètes pour faire les bons choix de carrière en GTB et performance énergétique</p>
        </div>
      </div>
    </section>
  )
}
