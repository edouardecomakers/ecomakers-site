import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'

export const metadata = {
  title: "Politique de Confidentialité - EcoMakers",
  description: "Politique de confidentialité et protection des données personnelles sur EcoMakers.fr conformément au RGPD.",
  keywords: "politique confidentialité, RGPD, données personnelles",
  openGraph: {
    title: "Politique de Confidentialité - EcoMakers",
    description: "Politique de confidentialité et protection des données personnelles sur EcoMakers.fr conformément au RGPD.",
    url: "https://ecomakers.fr/politique-confidentialite",
    siteName: "EcoMakers",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique de Confidentialité - EcoMakers",
    description: "Politique de confidentialité et protection des données personnelles sur EcoMakers.fr conformément au RGPD.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PolitiqueconfidentialitePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Politique de confidentialité</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <p className="text-muted-foreground mb-4">
                    La protection de vos données personnelles est une priorité pour EcoMakers. Cette politique de confidentialité vous informe de la manière dont nous collectons, utilisons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
                  </p>
                  <p className="text-muted-foreground">
                    Dernière mise à jour : 9 décembre 2024
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Responsable du traitement</h2>
                  <p className="text-muted-foreground">
                    <strong>E.L.D HOLDING</strong><br />
                    37 Boulevard Aristide Briand<br />
                    13100 AIX-EN-PROVENCE<br />
                    Email : <a href="mailto:contact@ecomakers.fr" className="text-primary hover:underline">contact@ecomakers.fr</a>
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Données collectées</h2>
                  <p className="text-muted-foreground mb-3">Nous collectons les données personnelles suivantes :</p>
                  
                  <div className="bg-card p-4 rounded-lg border mb-3">
                    <h3 className="font-semibold mb-2">Pour les candidats :</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone</li>
                      <li>CV et documents professionnels</li>
                      <li>Informations professionnelles (expérience, compétences, formation)</li>
                      <li>Disponibilité et préférences de poste</li>
                    </ul>
                  </div>

                  <div className="bg-card p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">Pour les entreprises :</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Nom et prénom du contact</li>
                      <li>Nom de l'entreprise</li>
                      <li>Adresse email professionnelle</li>
                      <li>Numéro de téléphone</li>
                      <li>Besoins en recrutement</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Finalités du traitement</h2>
                  <p className="text-muted-foreground mb-2">Vos données personnelles sont collectées pour les finalités suivantes :</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Mise en relation entre candidats et entreprises</li>
                    <li>Gestion des candidatures et du processus de recrutement</li>
                    <li>Analyse des besoins en recrutement des entreprises</li>
                    <li>Communication concernant les opportunités professionnelles</li>
                    <li>Amélioration de nos services</li>
                    <li>Respect de nos obligations légales</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Base légale du traitement</h2>
                  <p className="text-muted-foreground">
                    Le traitement de vos données personnelles repose sur votre consentement explicite lors de l'utilisation de nos formulaires, ainsi que sur l'exécution de mesures précontractuelles prises à votre demande.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Durée de conservation</h2>
                  <p className="text-muted-foreground mb-2">Vos données sont conservées pendant les durées suivantes :</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Candidats :</strong> 2 ans à compter de votre dernière interaction avec nos services</li>
                    <li><strong>Entreprises :</strong> Pendant la durée de la relation commerciale et 1 an après la fin de celle-ci</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    Au-delà de ces délais, vos données sont supprimées ou anonymisées, sauf obligation légale de conservation plus longue.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Destinataires des données</h2>
                  <p className="text-muted-foreground mb-2">Vos données personnelles peuvent être communiquées à :</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Les entreprises clientes pour les besoins du recrutement (avec votre consentement)</li>
                    <li>Les candidats inscrits pour les opportunités correspondant à leurs profils (avec leur consentement)</li>
                    <li>Nos prestataires techniques (hébergement, outils de gestion)</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    Vos données ne sont jamais vendues à des tiers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Sécurité des données</h2>
                  <p className="text-muted-foreground">
                    Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour assurer la sécurité de vos données personnelles et empêcher leur altération, suppression ou accès non autorisé. Nos systèmes sont hébergés sur des serveurs sécurisés et les données sont chiffrées lors de leur transmission.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
                  <p className="text-muted-foreground mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et y accéder</li>
                    <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
                    <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                    <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                    <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                    <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                    <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@ecomakers.fr" className="text-primary hover:underline">contact@ecomakers.fr</a>
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
                  <p className="text-muted-foreground">
                    Pour plus d'informations sur l'utilisation des cookies sur notre site, veuillez consulter notre <a href="/cookies" className="text-primary hover:underline">politique de cookies</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
                  <p className="text-muted-foreground">
                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
