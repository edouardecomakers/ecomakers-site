export default function ReseauSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Notre réseau GTB/GTC</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">2000+</div>
              <p className="text-muted-foreground">Professionnels GTB/GTC pré-qualifiés en Île-de-France</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100+</div>
              <p className="text-muted-foreground">Profils qualifiés en recherche active</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
