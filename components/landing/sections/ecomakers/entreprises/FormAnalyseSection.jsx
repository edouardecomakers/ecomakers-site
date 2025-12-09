"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function FormAnalyseSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.target
    const formData = new FormData(form)
    
    try {
      await fetch("https://formspree.io/f/mzznvvdw", {
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
            <CheckCircle className="w-16 h-16 text-primary mx-auto" />
            <h2 className="text-3xl font-bold">Demande reçue !</h2>
            <p className="text-muted-foreground">
              Vous recevrez votre analyse de marché personnalisée sous 24h. Surveillez votre boîte mail.
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
              Recevez votre analyse de marché gratuite
            </h2>
            <p className="text-muted-foreground text-lg">
              Rapport personnalisé sous 24h : candidats disponibles, fourchettes salariales, stratégie recommandée.
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
              <label htmlFor="entreprise" className="text-sm font-medium">
                Entreprise *
              </label>
              <input
                type="text"
                id="entreprise"
                name="entreprise"
                required
                className="w-full rounded-md border bg-background px-4 py-2"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email professionnel *
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
              <label htmlFor="telephone" className="text-sm font-medium">
                Téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                className="w-full rounded-md border bg-background px-4 py-2"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="poste" className="text-sm font-medium">
                Poste recherché *
              </label>
              <select
                id="poste"
                name="poste"
                required
                className="w-full rounded-md border bg-background px-4 py-2"
              >
                <option value="">Sélectionnez un poste</option>
                <option value="Technicien GTB/GTC">Technicien GTB/GTC</option>
                <option value="Automaticien">Automaticien</option>
                <option value="Chef de Projet GTB/GTC">Chef de Projet GTB/GTC</option>
                <option value="Chargé d'Affaires">Chargé d'Affaires</option>
                <option value="Energy Manager">Energy Manager</option>
                <option value="Responsable GTB">Responsable GTB</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Recevoir mon analyse gratuite"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Réponse sous 24h • 100% gratuit • Aucun engagement
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
