import { CheckCircle } from "lucide-react"

export default function OffreSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Une offre sans risque, des résultats garantis
            </h2>
            <p className="text-muted-foreground text-lg">
              2 profils qualifiés en 7 jours. Aucun acompte, paiement au succès, remplacement garanti.
            </p>
            <div className="pt-4">
              <div className="text-5xl font-bold text-primary mb-2">20%</div>
              <p className="text-muted-foreground font-medium">du salaire annuel brut</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border bg-card p-8 space-y-4">
              <h3 className="text-xl font-bold mb-4">Tarification et modalités</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Facturé uniquement à l'embauche effective</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <span className="font-semibold">Aucun acompte</span>, aucun frais avant résultat
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <span className="font-semibold">70%</span> au démarrage du candidat
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <span className="font-semibold">30%</span> à la validation de la période d'essai
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-8 space-y-4">
              <h3 className="text-xl font-bold mb-4">Nos garanties</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <span className="font-semibold">Pas d'exclusivité</span> - Aucun contrat exclusif
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <span className="font-semibold">2 profils qualifiés minimum</span> garantis sous 7 jours
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <span className="font-semibold">Pas trouvé en 7 jours ?</span> -50% sur les honoraires (soit 10% du salaire annuel brut)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <span className="font-semibold">Garantie remplacement</span> jusqu'à validation de la période d'essai
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <span className="inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium bg-emerald-100 text-emerald-700 border-emerald-200">
              7 jours garanti
            </span>
            <span className="inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium bg-sky-100 text-sky-700 border-sky-200">
              Sans engagement
            </span>
            <span className="inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium bg-amber-100 text-amber-700 border-amber-200">
              Candidats qualifiés
            </span>
            <span className="inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium bg-slate-100 text-slate-700 border-slate-200">
              Île-de-France
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
