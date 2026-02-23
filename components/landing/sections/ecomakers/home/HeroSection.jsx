import { Button } from "@/components/ui/button"
import { Users, Crosshair, CheckCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/image_header__1_.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          {/* Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white">
              100% approche directe
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Recrutez les meilleurs profils GTB/GTC
          </h1>

          {/* Promesse */}
          <p className="text-xl text-white md:text-2xl">
            Le seul cabinet spécialisé 100% GTB/GTC et performance énergétique. Nous allons chercher les talents que vous ne trouverez pas ailleurs.
          </p>

          {/* Sous-titre */}
          <p className="text-lg text-white/90">
            Approche directe, zéro annonce publiée
          </p>

          {/* 3 bullet points */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex items-center gap-2 text-white">
              <Users className="h-5 w-5" />
              <span className="text-sm">2000+ profils dans notre réseau</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Crosshair className="h-5 w-5" />
              <span className="text-sm">100% approche directe</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm">Paiement au succès</span>
            </div>
          </div>

          {/* 2 CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center w-full">
            <Button size="lg" variant="default" asChild className="w-full sm:w-auto">
              <a href="/entreprises#formulaire" className="text-sm md:text-base px-4 md:px-6">
                Entreprises : Analyse gratuite
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
              <a href="/candidats#formulaire" className="text-sm md:text-base px-4 md:px-6">
                Talents : Rejoindre le réseau
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
