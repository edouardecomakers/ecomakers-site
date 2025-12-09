"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FaqCandidatsSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Comment êtes-vous rémunérés ?",
      answer: "Nous sommes payés par les entreprises qui recrutent. Notre service est 100% gratuit pour les candidats. Aucun frais, jamais."
    },
    {
      question: "Vais-je recevoir des offres non pertinentes ?",
      answer: "Non. Nous ne vous contactons que si nous avons une opportunité qui correspond parfaitement à votre profil, vos compétences et vos aspirations. Pas de spam."
    },
    {
      question: "Mon employeur actuel peut-il savoir que je cherche ?",
      answer: "Non. Votre recherche est strictement confidentielle. Nous ne contactons jamais votre employeur actuel sans votre accord explicite."
    },
    {
      question: "Que se passe-t-il après mon inscription ?",
      answer: "Validation immédiate dans notre réseau. Nous vous contactons uniquement si nous identifions une opportunité qui vous correspond. Vous pouvez suivre notre page entreprise EcoMakers LinkedIn sur laquelle certaines offres sont publiées."
    },
    {
      question: "Proposez-vous un accompagnement même si je ne cherche pas activement ?",
      answer: "Oui. Nous publions régulièrement du contenu gratuit sur notre blog et notre page LinkedIn : conseils carrière, analyses marché, tendances salaires, actualités réglementaires. L'accompagnement personnalisé intervient lorsque nous vous positionnons sur une opportunité."
    },
    {
      question: "Quels types d'entreprises recrutent via EcoMakers ?",
      answer: "Intégrateurs, installateurs, bureaux d'études, energy managers, entreprises avec services techniques internes. Tous les acteurs de la GTB/GTC et performance énergétique en Île-de-France."
    },
    {
      question: "Combien de temps dure le process de recrutement ?",
      answer: "Variable selon l'entreprise, mais nous privilégions les process rapides et transparents. En moyenne 2-3 semaines entre le premier échange et la proposition."
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
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
