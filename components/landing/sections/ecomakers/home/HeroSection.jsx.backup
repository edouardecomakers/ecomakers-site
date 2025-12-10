import { Button } from "@/components/ui/button"
import { Users, Zap, CheckCircle } from "lucide-react"

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
              Garantie 7 jours ou -50%
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Recrutez en GTB/GTC en 7 jours
          </h1>

          {/* Promesse */}
          <p className="text-xl text-white md:text-2xl">
            Nous vous présentons 2 profils qualifiés en 7 jours. Garanti ou -50%.
          </p>

          {/* Sous-titre */}
          <p className="text-lg text-white/90">
            Cabinet spécialisé en GTB/GTC et performance énergétique en Île-de-France
          </p>

          {/* 3 bullet points */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex items-center gap-2 text-white">
              <Users className="h-5 w-5" />
              <span className="text-sm">2000+ profils spécialisés</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Zap className="h-5 w-5" />
              <span className="text-sm">Approche proactive</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm">Paiement au succès (20%)</span>
            </div>
          </div>

          {/* 2 CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="default" asChild>
              <a href="/entreprises#formulaire">Entreprises : Obtenir mon analyse gratuite</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/candidats#formulaire">Talents : Accéder aux opportunités</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
