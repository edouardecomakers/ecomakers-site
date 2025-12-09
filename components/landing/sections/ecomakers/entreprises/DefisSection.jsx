import { CheckCircle } from "lucide-react"

export default function DefisSection() {
  const defis = [
    {
      titre: "Pénurie de candidats qualifiés",
      description: "85% des entreprises GTB peinent à recruter (France Travail 2024)"
    },
    {
      titre: "Délais de recrutement longs",
      description: "3-4 mois de délai moyen pour trouver le bon profil"
    },
    {
      titre: "Peu de candidatures par offre",
      description: "Seulement 3,2 candidatures vs 12,4 moyenne nationale (Indeed 2024)"
    },
    {
      titre: "Besoin de spécialisation technique",
      description: "Technologies spécifiques (KNX, BACnet, Tridium) difficiles à évaluer"
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Pourquoi recruter en GTB/GTC est si complexe
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {defis.map((defi, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-lg border bg-card hover:border-primary transition-colors">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{defi.titre}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {defi.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
