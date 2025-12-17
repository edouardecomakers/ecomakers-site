"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function FormContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.target)
    
    try {
      await fetch("https://formspree.io/f/mpwvllpa", {
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-primary mx-auto" />
            <h2 className="text-3xl font-bold">Message envoyé !</h2>
            <p className="text-muted-foreground">
              Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full pt-0 pb-12 md:pb-24 lg:pb-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="prenom" className="text-sm font-medium">
                  Prénom *
                </label>
                <input
                  id="prenom"
                  name="prenom"
                  type="text"
                  required
                  className="w-full rounded-md border bg-background px-4 py-2"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="nom" className="text-sm font-medium">
                  Nom *
                </label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
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
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-md border bg-background px-4 py-2"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="telephone" className="text-sm font-medium">
                Téléphone
              </label>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                className="w-full rounded-md border bg-background px-4 py-2"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="sujet" className="text-sm font-medium">
                Sujet *
              </label>
              <select
                id="sujet"
                name="sujet"
                required
                className="w-full rounded-md border bg-background px-4 py-2"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="Recrutement entreprise">Recrutement entreprise</option>
                <option value="Candidature">Candidature</option>
                <option value="Partenariat">Partenariat</option>
                <option value="Presse">Presse</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full rounded-md border bg-background px-4 py-2"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
