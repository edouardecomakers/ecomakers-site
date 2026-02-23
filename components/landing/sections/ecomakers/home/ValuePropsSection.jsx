import { CheckCircle } from "lucide-react"

export default function ValuePropsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Pourquoi EcoMakers</h2>
            <p className="text-muted-foreground">Une approche différente pour entreprises et candidats</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6 rounded-lg border bg-card p-8">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Entreprises
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Vous recrutez en GTB/GTC ?</h3>
                <p className="text-muted-foreground">
                  Accédez aux talents qui ne répondent pas aux annonces, grâce à notre réseau et notre approche directe.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Spécialisation exclusive GTB/GTC : on parle le même langage</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">100% approche directe : nous chassons, on ne publie pas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Paiement au succès uniquement</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Garantie remplacement incluse</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 rounded-lg border bg-card p-8">
              <div className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                Candidats
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Vous travaillez en GTB/GTC ?</h3>
                <p className="text-muted-foreground">
                  On ne vous propose pas juste une offre. On construit avec vous la prochaine étape de votre carrière.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Accompagnement carrière personnalisé</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">C&apos;est nous qui sollicitons les entreprises pour vous</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Opportunités exclusives et confidentielles</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Suivi de carrière long terme</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
