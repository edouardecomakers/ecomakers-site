import { Building2, Users } from "lucide-react"

export default function MissionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Notre mission</h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <div className="flex flex-col space-y-4 bg-card p-6 rounded-lg border shadow-sm">
            <div className="flex items-center space-x-3">
              <Building2 className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Pour les entreprises:</h3>
            </div>
            <p className="text-muted-foreground">
              Résoudre la pénurie de talents GTB/GTC en Île-de-France. Présenter 2 profils qualifiés en 7 jours, avec garantie résultat.
            </p>
          </div>
          <div className="flex flex-col space-y-4 bg-card p-6 rounded-lg border shadow-sm">
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Pour les candidats:</h3>
            </div>
            <p className="text-muted-foreground">
              Donner accès aux meilleures opportunités, fournir du contenu gratuit pour progresser (Trajectoires GTB), accompagner lors des moments clés de carrière.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}