import { Building2, Users, Target, TrendingUp, Award, CheckCircle } from "lucide-react"

export default function PourQuiSection() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Qui on aide
        </h2>
        <p className="mt-6 text-lg/8 text-gray-600">
          Deux missions, un même objectif : faire avancer la transition énergétique du bâtiment
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Entreprises GTB/GTC</h3>
          </div>
          <p className="text-gray-600 text-lg">
            Vous recrutez des profils GTB/GTC et les cabinets classiques n&apos;y arrivent pas ? Nous vous donnons accès aux talents qui ne répondent pas aux annonces.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Accès immédiat aux meilleurs profils</p>
                <p className="text-sm text-gray-600">Des profils disponibles, approchés directement</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Process structuré, délais respectés</p>
                <p className="text-sm text-gray-600">Méthode éprouvée, suivi rigoureux</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Facturation à la signature uniquement</p>
                <p className="text-sm text-gray-600">Aucun acompte, garantie remplacement</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Professionnels GTB/GTC</h3>
          </div>
          <p className="text-gray-600 text-lg">
            Vous êtes technicien, automaticien, chef de projet ou energy manager ? Nous vous donnons accès aux meilleures opportunités et aux ressources pour faire avancer votre carrière.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Opportunités à impact</p>
                <p className="text-sm text-gray-600">Entreprises qui contribuent concrètement à la transition énergétique</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Accompagnement personnalisé</p>
                <p className="text-sm text-gray-600">On construit votre projet avec vous, pas de placement forcé</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Ressources gratuites (Trajectoires GTB)</p>
                <p className="text-sm text-gray-600">Grilles de salaires, parcours métiers, certifications, tendances</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
