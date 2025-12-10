import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroAProposSection() {
  return (
    <div className="relative isolate -z-10 overflow-hidden bg-linear-to-b from-primary/5">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-primary/10 ring-primary/5 sm:-mr-80 lg:-mr-96"
      />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
            Cabinet GTB/GTC ultra-spécialisé en Île-de-France
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Nous avons créé EcoMakers en septembre 2025 avec une conviction : la GTB est au cœur de la transition énergétique du bâtiment. Sans mesure précise des consommations, pas d'optimisation possible. Et pour déployer ces technologies à grande échelle, il faut résoudre le problème n°1 du secteur : recruter les bons profils en moins de 3 mois.
            </p>
            <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              EcoMakers applique une méthode structurée et data-driven pour connecter entreprises et talents GTB/GTC en Île-de-France, avec un seul objectif : des recrutements réussis en 7 jours, pas en 3 mois.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/entreprises">Entreprises : Obtenir mon analyse</Link>
              </Button>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/candidats">Talents : Voir les opportunités</Link>
              </Button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 xl:row-span-2 xl:row-end-2 xl:mt-20">
            <div className="relative">
              <Image
                alt="Edouard Ladroit, fondateur EcoMakers"
                src="/images/edouard_ladroit_fondateur.jpg"
                width={600}
                height={750}
                className="aspect-6/5 w-full max-w-lg rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 sm:mt-16 lg:mt-0 lg:max-w-none"
                priority
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-gray-900">Edouard Ladroit</p>
              <p className="text-base text-gray-600">Fondateur</p>
              <p className="mt-1 text-sm text-gray-500 italic">Entrepreneur tech depuis plus de 10 ans</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
    </div>
  )
}
