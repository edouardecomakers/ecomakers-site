import Image from "next/image"

export default function HistoireSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Notre histoire</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                EcoMakers est né d&apos;un constat simple : recruter en GTB/GTC est devenu un parcours du combattant.
              </p>
              <p>
                85% des entreprises GTB peinent à recruter (source TFB 2024). Les délais moyens de recrutement atteignent 3-4 mois (Apec Techniques 2024). Les offres d&apos;emploi génèrent en moyenne 3,2 candidatures contre 12,4 pour les autres secteurs (Indeed France 2024).
              </p>
              <p>
                Face à ce marché en tension, les approches traditionnelles ne fonctionnent plus. Les meilleurs profils ne postulent plus aux annonces. Ils sont sollicités en direct, changent par réseau, ou restent en poste faute de visibilité sur les opportunités.
              </p>
              
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/edouard_ladroit_fondateur.jpg"
                  alt="Edouard Ladroit, fondateur EcoMakers"
                  fill
                  className="object-cover"
                />
              </div>
              
              <p>
                En 2025, j&apos;ai créé EcoMakers pour proposer une alternative : un cabinet de recrutement spécialisé exclusivement sur les métiers GTB/GTC, avec une approche 100% directe et un engagement de résultat.
              </p>
              <p>
                Notre engagement : des profils qualifiés par approche directe. Facturation au succès uniquement.
              </p>
              <p className="font-medium">
                — Edouard Ladroit, Fondateur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
