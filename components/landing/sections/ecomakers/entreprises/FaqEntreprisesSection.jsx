"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FaqEntreprisesSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Pourquoi 7 jours alors que le marché prend 3-4 mois ?",
      answer: "Nous activons notre réseau pré-qualifié de 2000+ professionnels GTB/GTC. On ne commence pas nos recherches à ce moment-là : nous connaissons déjà les profils, leurs compétences, motivations et disponibilités. Notre approche directe et notre spécialisation nous permettent d'identifier rapidement les 2 meilleurs candidats pour votre besoin."
    },
    {
      question: "Si les 2 profils ne me conviennent pas ?",
      answer: "Nous vous en présentons 2 autres, sans frais supplémentaires. Si après plusieurs présentations aucun candidat ne convient et que le remplacement ne fonctionne pas, nous procédons au remboursement. Notre engagement : vous devez recruter avec succès."
    },
    {
      question: "Comment garantissez-vous la qualité des candidats ?",
      answer: "Chaque profil de notre réseau est pré-qualifié : compétences techniques vérifiées (KNX, BACnet, Tridium, etc.), expériences validées, motivations alignées. Nous ne travaillons qu'avec des professionnels GTB/GTC actifs et engagés. Notre taux de succès : 95% des candidats passent la période d'essai."
    },
    {
      question: "Facturez-vous des frais si le candidat démissionne après la période d'essai ?",
      answer: "Non. Notre garantie de remplacement couvre toute la période d'essai, y compris en cas de renouvellement (généralement 3 à 6 mois selon le poste). Si le candidat ne valide pas sa période d'essai pour quelque raison que ce soit, nous le remplaçons gratuitement."
    },
    {
      question: "Dois-je signer un contrat d'exclusivité ?",
      answer: "Non, aucun contrat d'exclusivité. Vous restez libre de recruter par vos propres moyens ou via d'autres cabinets. Nous facturons uniquement si vous recrutez un candidat que nous vous avons présenté."
    },
    {
      question: "Comment se passe le paiement ?",
      answer: "20% du salaire annuel brut, payable en 2 fois : 70% au démarrage du candidat, 30% à la validation de sa période d'essai. Aucun acompte, aucun frais avant résultat. Si nous ne trouvons pas 2 profils en 7 jours : -50% sur nos honoraires (soit 10% du salaire)."
    },
    {
      question: "Quels types d'entreprises accompagnez-vous ?",
      answer: "Nous travaillons avec les acteurs de la GTB/GTC en Île-de-France : intégrateurs, installateurs, bureaux d'études, energy managers, et entreprises avec des services techniques internes. Notre expertise couvre tous les segments du marché de la performance énergétique."
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
