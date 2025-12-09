"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function FormReseauSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.target
    const formData = new FormData(form)
    
    try {
      await fetch("https://formspree.io/f/xovglljo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
      setIsSubmitted(true)
    } catch (error) {
      console.error("Erreur:", error)
      alert("Une erreur est survenue. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32" id="formulaire">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-secondary mx-auto" />
            <h2 className="text-3xl font-bold">Bienvenue dans le réseau !</h2>
            <p className="text-muted-foreground">
              Nous vous contacterons uniquement si nous identifions une opportunité qui vous correspond.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50" id="formulaire">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Rejoignez le réseau EcoMakers
            </h2>
            <p className="text-muted-foreground text-lg">
              1 minute pour accéder aux meilleures opportunités GTB/GTC
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="prenom" className="text-sm font-medium">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  required
                  className="w-full rounded-md border bg-background px-4 py-2"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="nom" className="text-sm font-medium">
                  Nom *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  className="w-full rounded-md border bg-background px-4 py-2"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-md border bg-background px-4 py-2"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="linkedin" className="text-sm font-medium">
                URL LinkedIn *
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                placeholder="https://linkedin.com/in/votre-profil"
                required
                className="w-full rounded-md border bg-background px-4 py-2"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="telephone" className="text-sm font-medium">
                Téléphone (optionnel)
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                className="w-full rounded-md border bg-background px-4 py-2"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="recherche" className="text-sm font-medium">
                Recherche active ? (optionnel)
              </label>
              <select
                id="recherche"
                name="recherche"
                className="w-full rounded-md border bg-background px-4 py-2"
              >
                <option value="">Sélectionnez</option>
                <option value="Oui">Oui - Recherche active</option>
                <option value="Non">Non - Juste curieux</option>
                <option value="Veille">En veille - Ouvert aux opportunités</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="cv" className="text-sm font-medium">
                CV (optionnel)
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                accept=".pdf,.doc,.docx"
                className="w-full rounded-md border bg-background px-4 py-2"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Rejoindre le réseau"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Gratuit • Confidentiel • Aucun engagement
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
