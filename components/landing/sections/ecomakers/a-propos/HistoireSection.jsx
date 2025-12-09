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
                EcoMakers est né d'un constat simple : recruter en GTB/GTC en Île-de-France est devenu un parcours du combattant.
              </p>
              <p>
                85% des entreprises GTB peinent à recruter (source TFB 2024). Les délais moyens de recrutement atteignent 3-4 mois (Apec Techniques 2024). Les offres d'emploi génèrent en moyenne 3,2 candidatures contre 12,4 pour les autres secteurs (Indeed France 2024).
              </p>
              <p>
                Face à ce marché en tension, les approches traditionnelles ne fonctionnent plus. Les meilleurs profils ne postulent plus aux annonces. Ils sont sollicités en direct, changent par réseau, ou restent en poste faute de visibilité sur les opportunités.
              </p>
              
              {/* NOTE: Photo à ajouter manuellement - voir instructions post-script */}
              {<div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/edouard_ladroit_fondateur.jpg"
                  alt="Edouard Ladroit, fondateur EcoMakers"
                  fill
                  className="object-cover"
                />
              </div>}
              
              <p>
                En 2024, j'ai créé EcoMakers pour proposer une alternative : un cabinet de recrutement spécialisé exclusivement sur les métiers GTB/GTC en Île-de-France, avec une approche réseau et une garantie de résultat.
              </p>
              <p>
                Notre promesse : 2 profils qualifiés en 7 jours. Garanti ou -50% sur les honoraires.
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
