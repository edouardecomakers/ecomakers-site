import { CheckCircle } from "lucide-react"

export default function TarificationSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Tarification simple et transparente
            </h2>
            <p className="text-muted-foreground">Paiement au succès uniquement</p>
          </div>
          
          <div className="text-center mb-8">
            <div className="text-5xl font-bold text-primary mb-2">20%</div>
            <p className="text-muted-foreground font-medium">du salaire annuel brut</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Colonne 1 : FACTURATION */}
            <div className="rounded-lg border bg-card p-8 space-y-4">
              <h3 className="text-xl font-bold mb-4">Modalités de facturation</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Facturé uniquement à l'embauche effective</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Aucun acompte, aucun frais avant résultat</p>
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

            {/* Colonne 2 : GARANTIES */}
            <div className="rounded-lg border bg-card p-8 space-y-4">
              <h3 className="text-xl font-bold mb-4">Nos garanties</h3>
              <div className="space-y-3">
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
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <span className="font-semibold">2 profils qualifiés minimum</span> garantis
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <span className="font-semibold">Sans engagement</span> - Aucun contrat d'exclusivité
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Tarification appliquée uniquement en cas de succès • Aucun engagement • Transparence totale
          </p>
        </div>
      </div>
    </section>
  )
}
