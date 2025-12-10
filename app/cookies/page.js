import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'

export const metadata = {
  title: "Politique des Cookies - EcoMakers",
  description: "Politique utilisation des cookies sur le site EcoMakers.fr conformément au RGPD.",
  keywords: "cookies, politique cookies, RGPD",
  openGraph: {
    title: "Politique des Cookies - EcoMakers",
    description: "Politique utilisation des cookies sur le site EcoMakers.fr conformément au RGPD.",
    url: "https://ecomakers.fr/cookies",
    siteName: "EcoMakers",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique des Cookies - EcoMakers",
    description: "Politique utilisation des cookies sur le site EcoMakers.fr conformément au RGPD.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Politique de cookies</h1>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <p className="text-muted-foreground">
                    Cette politique explique comment EcoMakers utilise les cookies et technologies similaires sur notre site web. En poursuivant votre navigation, vous acceptez l'utilisation de cookies conformément à cette politique.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Qu'est-ce qu'un cookie ?</h2>
                  <p className="text-muted-foreground mb-2">
                    Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la visite d'un site web. Il permet au site de reconnaître votre appareil lors de vos visites ultérieures.
                  </p>
                  <p className="text-muted-foreground">
                    Les cookies servent à améliorer votre expérience de navigation, analyser l'utilisation du site et personnaliser le contenu.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Types de cookies utilisés</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-card p-6 rounded-lg border">
                      <h3 className="text-xl font-semibold mb-3">1. Cookies strictement nécessaires</h3>
                      <p className="text-muted-foreground mb-2">
                        Ces cookies sont indispensables au bon fonctionnement du site. Ils permettent l'utilisation des principales fonctionnalités comme la navigation entre les pages et l'accès aux zones sécurisées.
                      </p>
                      <p className="text-muted-foreground font-semibold">
                        Ces cookies ne peuvent pas être désactivés car ils sont essentiels au fonctionnement du site.
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                        <li>Durée : Session (supprimés à la fermeture du navigateur)</li>
                        <li>Finalité : Fonctionnement technique du site</li>
                      </ul>
                    </div>

                    <div className="bg-card p-6 rounded-lg border">
                      <h3 className="text-xl font-semibold mb-3">2. Cookies de préférences</h3>
                      <p className="text-muted-foreground mb-2">
                        Ces cookies permettent au site de mémoriser vos choix (comme votre langue ou votre région) pour vous offrir une expérience personnalisée.
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Durée : 12 mois maximum</li>
                        <li>Finalité : Amélioration de l'expérience utilisateur</li>
                      </ul>
                    </div>

                    <div className="bg-card p-6 rounded-lg border">
                      <h3 className="text-xl font-semibold mb-3">3. Cookies analytiques (optionnels)</h3>
                      <p className="text-muted-foreground mb-2">
                        Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site en collectant des informations de manière anonyme. Ces données nous permettent d'améliorer le site.
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Durée : 13 mois maximum</li>
                        <li>Finalité : Analyse statistique du trafic</li>
                        <li>Ces cookies nécessitent votre consentement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Cookies tiers</h2>
                  <p className="text-muted-foreground mb-2">
                    Nous utilisons des services tiers qui peuvent déposer des cookies sur votre terminal :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Vercel :</strong> hébergement du site (cookies techniques nécessaires)</li>
                    <li><strong>Formspree :</strong> gestion des formulaires de contact (cookies techniques nécessaires)</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    Ces services sont conformes au RGPD et respectent votre vie privée.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Gestion de vos préférences</h2>
                  <p className="text-muted-foreground mb-3">
                    Vous pouvez à tout moment modifier vos préférences concernant les cookies :
                  </p>
                  
                  <div className="bg-card p-4 rounded-lg border mb-4">
                    <h3 className="font-semibold mb-2">Via le bandeau cookies</h3>
                    <p className="text-muted-foreground">
                      Un bandeau vous permet de gérer vos préférences lors de votre première visite. Vous pouvez modifier ces préférences à tout moment.
                    </p>
                  </div>

                  <div className="bg-card p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">Via les paramètres de votre navigateur</h3>
                    <p className="text-muted-foreground mb-2">
                      Vous pouvez configurer votre navigateur pour :
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Accepter ou refuser tous les cookies</li>
                      <li>Être averti avant l'enregistrement d'un cookie</li>
                      <li>Supprimer les cookies enregistrés</li>
                    </ul>
                    <p className="text-muted-foreground mt-2 text-sm">
                      Note : La désactivation de certains cookies peut affecter votre expérience de navigation et limiter l'accès à certaines fonctionnalités.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Configuration par navigateur</h2>
                  <p className="text-muted-foreground mb-3">
                    Pour gérer les cookies dans votre navigateur :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
                    <li><strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies</li>
                    <li><strong>Safari :</strong> Préférences → Confidentialité → Cookies</li>
                    <li><strong>Edge :</strong> Paramètres → Cookies et autorisations de site</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Durée de conservation</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Cookies de session :</strong> supprimés automatiquement à la fermeture du navigateur</li>
                    <li><strong>Cookies persistants :</strong> conservés jusqu'à leur date d'expiration (maximum 13 mois) ou jusqu'à ce que vous les supprimiez manuellement</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
                  <p className="text-muted-foreground mb-2">
                    Conformément au RGPD, vous disposez des droits suivants concernant les données collectées via les cookies :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Droit d'accès à vos données</li>
                    <li>Droit de rectification</li>
                    <li>Droit à l'effacement</li>
                    <li>Droit d'opposition</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    Pour exercer ces droits, consultez notre <a href="/politique-confidentialite" className="text-primary hover:underline">politique de confidentialité</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                  <p className="text-muted-foreground">
                    Pour toute question concernant notre utilisation des cookies :<br />
                    Email : <a href="mailto:contact@ecomakers.fr" className="text-primary hover:underline">contact@ecomakers.fr</a>
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Mise à jour</h2>
                  <p className="text-muted-foreground">
                    Cette politique de cookies peut être modifiée à tout moment. Nous vous invitons à la consulter régulièrement.<br />
                    Dernière mise à jour : 9 décembre 2024
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
