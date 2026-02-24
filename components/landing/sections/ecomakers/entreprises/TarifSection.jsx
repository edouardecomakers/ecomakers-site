import { CheckCircle, Shield } from "lucide-react"

export default function TarifSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Tarification
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Une offre sans risque
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Paiement au succès uniquement. Aucun acompte, remplacement garanti.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
          {/* Tarification */}
          <div className="rounded-lg border bg-card p-8 space-y-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary">20%</div>
              <p className="text-muted-foreground mt-2">du salaire annuel brut</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Modalités</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Facturé uniquement à la signature du candidat</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Aucun acompte, aucun frais avant résultat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Garanties */}
          <div className="rounded-lg border bg-card p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-lg">Nos garanties</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm">Pas d&apos;exclusivité — Aucun contrat exclusif</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm">Des profils qualifiés par approche directe</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm">Garantie remplacement jusqu&apos;à validation de la période d&apos;essai</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="text-center">
                <p className="font-semibold text-primary">100% approche directe</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-primary">Sans engagement</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-primary">Candidats qualifiés</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-primary">Paiement au succès</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
