export default function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50" id="stats">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Statistiques
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Pourquoi recruter en GTB est si difficile
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Le marché est en tension. Les chiffres le prouvent.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="flex flex-col items-center text-center space-y-2 rounded-lg border bg-card p-6 hover:border-primary transition-colors">
            <div className="text-4xl font-bold text-primary">85%</div>
            <h3 className="text-lg font-bold">de manque de candidatures qualifiées</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Source : France Travail 2024
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 rounded-lg border bg-card p-6 hover:border-primary transition-colors">
            <div className="text-4xl font-bold text-primary">3-4 mois</div>
            <h3 className="text-lg font-bold">de délai moyen de recrutement</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Source : Apec Techniques 2024
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 rounded-lg border bg-card p-6 hover:border-primary transition-colors">
            <div className="text-4xl font-bold text-primary">3,2</div>
            <h3 className="text-lg font-bold">candidatures par offre (vs 12,4 moyenne)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Source : Indeed France 2024
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            EcoMakers a été créé pour résoudre ce problème.
          </p>
        </div>
      </div>
    </section>
  )
}
