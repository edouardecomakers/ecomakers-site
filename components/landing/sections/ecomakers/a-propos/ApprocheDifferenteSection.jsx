export default function ApprocheDifferenteSection() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Approche directe. Zéro annonce.
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl/8 text-gray-600">
              Depuis notre création, nous avons fait un choix stratégique : construire un réseau de professionnels GTB/GTC qualifiés, que nous connaissons personnellement.
            </p>
            <p className="mt-10 text-base/7 text-gray-700">
              <strong className="text-gray-900">Pourquoi ?</strong> Parce que 85% des meilleurs profils ne postulent jamais aux annonces (source : France Travail 2024). Ils changent par réseau, sur recommandation, ou restent en poste faute de visibilité sur les opportunités qui correspondent vraiment à leurs attentes.
            </p>
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <div className="w-64 space-y-8 xl:w-80">
              <div className="flex flex-col-reverse gap-y-4">
                <p className="text-base/7 text-gray-600">Approche directe uniquement</p>
                <p className="text-5xl font-semibold tracking-tight text-gray-900">100%</p>
              </div>
              <div className="flex flex-col-reverse gap-y-4">
                <p className="text-base/7 text-gray-600">Annonce publiée</p>
                <p className="text-5xl font-semibold tracking-tight text-gray-900">0</p>
              </div>
              <div className="flex flex-col-reverse gap-y-4">
                <p className="text-base/7 text-gray-600">Des profils disponibles</p>
                <p className="text-5xl font-semibold tracking-tight text-gray-900">Dès le jour 1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 max-w-2xl">
          <p className="text-xl/8 font-semibold text-gray-900">
            Quand une entreprise nous confie un mandat, nous ne commençons pas à chercher. Nous connaissons déjà les profils, leurs compétences, leurs motivations, leur disponibilité.
          </p>
        </div>
      </div>
    </div>
  )
}
