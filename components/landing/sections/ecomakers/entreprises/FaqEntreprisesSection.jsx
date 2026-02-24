"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FaqEntreprisesSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Qu'est-ce que l'approche directe et en quoi ça change tout ?",
      answer: "Contrairement aux cabinets qui publient des annonces et attendent, nous identifions et contactons directement les profils qui correspondent à votre besoin. C'est ce qui nous permet d'accéder à des candidats en poste, non visibles sur le marché, et de recruter plus efficacement."
    },
    {
      question: "Si les profils présentés ne me conviennent pas ?",
      answer: "Nous poursuivons la recherche jusqu'à trouver le bon profil. Notre approche directe nous permet d'élargir le périmètre et d'aller chercher de nouveaux candidats correspondant à vos critères."
    },
    {
      question: "Comment garantissez-vous la qualité des candidats ?",
      answer: "Chaque candidat est pré-qualifié sur ses compétences techniques (KNX, BACnet, Tridium...), ses motivations, sa trajectoire et sa disponibilité réelle. Nous ne présentons que des profils que nous avons personnellement évalués."
    },
    {
      question: "Facturez-vous des frais si le candidat démissionne après la période d'essai ?",
      answer: "Notre garantie couvre la période d'essai. Si le candidat quitte avant la fin de sa période d'essai, nous relançons la recherche sans frais supplémentaires."
    },
    {
      question: "Dois-je signer un contrat d'exclusivité ?",
      answer: "Non. Aucune exclusivité requise. Vous restez libre de mener vos recherches en parallèle."
    },
    {
      question: "Comment se passe le paiement ?",
      answer: "20% du salaire annuel brut, facturé à la signature du candidat. Aucun acompte, aucun frais si la mission n'aboutit pas."
    },
    {
      question: "Quels types d'entreprises accompagnez-vous ?",
      answer: "Intégrateurs, installateurs, bureaux d'études, energy managers, entreprises avec services techniques internes. Tous les acteurs de la GTB/GTC et de la performance énergétique."
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="faq">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg border bg-card">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
