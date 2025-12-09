import { UserPlus, Search, Mail } from "lucide-react"

export default function ProcessCandidatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comment ça marche</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">Simple, rapide, transparent</p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 text-center p-6 bg-card rounded-lg border">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <UserPlus className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">INSCRIPTION (1 minute)</h3>
              <p className="text-muted-foreground">Formulaire court : profil, compétences, recherche. Validation immédiate dans notre réseau.</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center p-6 bg-card rounded-lg border">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <Search className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">MATCHING (Nous vous contactons)</h3>
              <p className="text-muted-foreground">Nous ne vous contactons que si nous avons une opportunité qui correspond parfaitement. Pas de spam, pas de perte de temps.</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center p-6 bg-card rounded-lg border">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <Mail className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">ACCOMPAGNEMENT (Process transparent)</h3>
              <p className="text-muted-foreground">Échange approfondi, présentation entreprise, préparation entretien, négociation salariale, suivi intégration.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
