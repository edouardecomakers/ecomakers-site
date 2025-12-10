import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'
import ArticleHeroSection from '@/components/landing/sections/ecomakers/blog/article/ArticleHeroSection'
import CtaBlogSection from '@/components/landing/sections/ecomakers/blog/CtaBlogSection'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, CheckCircle2, TrendingUp, Users, Award, Shield } from 'lucide-react'

export const metadata = {
  title: 'CPF + Formation GTB 2025 : Transformez Vos Droits en Certification | EcoMakers',
  description: '40M de comptes CPF en France. Découvrez comment financer une certification GTB (Niagara N4, protocoles) et accélérer votre carrière avec des gains salariaux validés par le marché.',
  openGraph: {
    title: 'CPF + Formation GTB 2025 : Guide Complet Certification',
    description: 'Données marché IDF : +6k€/an avec Niagara N4. Processus complet, ROI calculé, vigilance arnaques. Par EcoMakers, spécialiste recrutement GTB.',
    type: 'article',
    publishedTime: '2025-12-10T00:00:00Z',
    authors: ['EcoMakers'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CPF + Formation GTB 2025 : Transformez Vos Droits en Certification',
    description: 'Guide complet : certifications GTB finançables CPF, ROI validé marché IDF, process détaillé.',
  },
}

export default function ArticleCPFGTB2025() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ArticleHeroSection
          category="Formation"
          title="CPF + Formation GTB 2025 : Transformez Vos Droits en Certification"
          excerpt="40M de comptes CPF en France, mais combien sont utilisés ? Découvrez comment financer une certification GTB (Niagara N4, protocoles) et accélérer votre carrière avec des données validées par le marché."
          date="10 décembre 2025"
          datetime="2025-12-10"
          readTime="20 min"
        />

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-gray max-w-none dark:prose-invert">
            
            {/* Introduction */}
            <div className="space-y-6">
              <p className="text-lg">
                500€ par an. Automatiquement. Depuis votre premier jour de travail. Si vous travaillez depuis 8 ans, c&apos;est environ 4 000€ sur votre Compte Personnel de Formation.
              </p>
              
              <p>
                En 2024, 40,1 millions de personnes disposaient d&apos;un CPF alimenté en France. 1,4 million de formations ont été financées. Mais la majorité des professionnels GTB ne mobilisent pas ce budget. Cet article vous montre comment le transformer en certification qui accélère votre carrière, avec des données validées par l&apos;analyse de 605 offres d&apos;emploi en Île-de-France.
              </p>
            </div>

            {/* Vos Droits CPF 2025 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">Vos Droits CPF 2025 : Combien Avez-Vous Exactement ?</h2>
            
            <p>
              Avant de parler formations, calculons ce que vous avez disponible. Le CPF vous crédite automatiquement 500€ par an (800€ si peu qualifié), avec un plafond à 5 000€.
            </p>

            <Card className="my-8">
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Ancienneté</th>
                        <th className="text-left py-3 px-4 font-semibold">CPF disponible</th>
                        <th className="text-left py-3 px-4 font-semibold">Formation finançable</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">3 ans</td>
                        <td className="py-3 px-4">~1 500€</td>
                        <td className="py-3 px-4">Formation GTB Niveau 2</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">5 ans</td>
                        <td className="py-3 px-4">~2 500€</td>
                        <td className="py-3 px-4">Certification protocoles</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">8 ans</td>
                        <td className="py-3 px-4">~4 000€</td>
                        <td className="py-3 px-4">Certification Niagara N4 TCP</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">10 ans+</td>
                        <td className="py-3 px-4">5 000€</td>
                        <td className="py-3 px-4">Titre RNCP Bac+3 GTB</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Participation obligatoire 2025
              </p>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                102,23€ à votre charge pour toute formation CPF (déduite automatiquement lors de l&apos;inscription).
              </p>
            </div>

            <p className="font-semibold">
              Pour connaître votre solde exact : <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mon Compte Formation</a>
            </p>

            {/* Certifications GTB Finançables */}
            <h2 className="text-3xl font-bold mt-12 mb-6">Certifications GTB Finançables : Lesquelles Font la Différence ?</h2>
            
            <p>
              Le CPF finance uniquement des formations certifiantes par organismes Qualiopi. Voici celles qui ont un impact mesurable sur votre salaire et votre carrière, validé par les données du marché Île-de-France.
            </p>

            {/* Certification Niagara N4 TCP */}
            <h3 className="text-2xl font-bold mt-8 mb-4">Certification Niagara N4 TCP</h3>
            
            <p className="text-lg font-semibold text-primary mb-4">
              Le sésame de l&apos;intégration GTB - Impact : +6 000€/an
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Votre profil &amp; blocage actuel</h4>
            <p>
              Technicien GTB avec 2-3 ans d&apos;expérience. Vous travaillez peut-être déjà sur Niagara, mais sans certification officielle, vous êtes cantonné aux tâches simples.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Ce que la certification débloque</h4>
            
            <Card className="my-6">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Écart salarial +6 000€/an</p>
                    <p className="text-sm text-muted-foreground">Intégrateur certifié : 40-44k€ vs 34-38k€ sans certification (données 605 offres IDF)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Accès projets premium</p>
                    <p className="text-sm text-muted-foreground">Hôpitaux, datacenters, tertiaire &gt;5 000m²</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Crédibilité marché</p>
                    <p className="text-sm text-muted-foreground">&quot;Certifié Tridium&quot; = porte d&apos;entrée chez tous les intégrateurs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h4 className="text-xl font-semibold mt-6 mb-3">Prix et format (BTIB 2025)</h4>
            
            <ul className="space-y-2 my-4">
              <li><strong>Prix :</strong> 2 470€ HT (~2 964€ TTC)</li>
              <li><strong>Durée :</strong> 5 jours intensifs (35 heures)</li>
              <li><strong>Taux de réussite :</strong> 93%</li>
              <li><strong>Sessions 2025 :</strong> Février, avril, juin, septembre, novembre, décembre</li>
              <li><strong>Format :</strong> Présentiel (Antony) ou distanciel</li>
              <li><strong>Prérequis :</strong> 2 ans d&apos;expérience minimum en GTB/automatisme bâtiment</li>
            </ul>

            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-amber-900 dark:text-amber-100 mb-1">Attention</p>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    Sessions très demandées. BTIB est le seul centre en France à délivrer le TCP officiel Tridium. Inscrivez-vous plusieurs semaines à l&apos;avance.
                  </p>
                </div>
              </div>
            </div>

            {/* Formations Protocoles */}
            <h3 className="text-2xl font-bold mt-12 mb-4">Formations Protocoles (BACnet, KNX, Modbus)</h3>
            
            <p className="text-lg font-semibold text-secondary mb-4">
              Devenir l&apos;expert multi-protocoles
            </p>

            <p>
              Les installations modernes mélangent BACnet (CVC), KNX (éclairage), et Modbus (compteurs). La maîtrise de plusieurs protocoles élargit votre employabilité, bien que l&apos;impact salarial direct soit plus limité que celui de la certification Niagara.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Organismes et prix</h4>
            
            <Card className="my-6">
              <CardContent className="pt-6 space-y-4">
                <div>
                  <p className="font-semibold">KNX Association France</p>
                  <p className="text-sm text-muted-foreground">Formation KNX Partner (base) : 1 200 à 1 800€ (4-5 jours)</p>
                  <p className="text-sm text-muted-foreground">Formations avancées : jusqu&apos;à 2 500€</p>
                </div>
                
                <div>
                  <p className="font-semibold">BACnet International / Agilicom</p>
                  <p className="text-sm text-muted-foreground">BACnet Fundamentals : 1 300 à 2 000€ (2-3 jours)</p>
                </div>
                
                <div>
                  <p className="font-semibold">Modbus</p>
                  <p className="text-sm text-muted-foreground">Formations organismes Qualiopi : 800 à 1 500€ (2-3 jours)</p>
                </div>
              </CardContent>
            </Card>

            <p className="text-sm text-muted-foreground italic">
              Note : LON/LONworks reste le protocole dominant en GTB tertiaire (46% des offres IDF), mais les certifications BACnet et Niagara offrent les meilleures perspectives d&apos;évolution.
            </p>

            {/* Formations GTB Niveau 1-2-3 */}
            <h3 className="text-2xl font-bold mt-12 mb-4">Formations GTB Niveau 1 à 3</h3>
            
            <p className="text-lg font-semibold text-accent mb-4">
              Le tremplin technicien → superviseur - Salaire cible : 36-40k€
            </p>

            <p>
              Pour techniciens CVC ou électriciens qui veulent pivoter vers la supervision. Accès aux postes de superviseur GTB à 36-40k€/an vs 30-34k€ en maintenance.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Progression</h4>
            
            <ul className="space-y-3 my-4">
              <li>
                <strong>Niveau 1</strong> (2-3 jours) : Découverte GTC/GTB, bases automates, principes de supervision
              </li>
              <li>
                <strong>Niveau 2</strong> (3-4 jours) : Supervision avancée, programmation simple, gestion alarmes
              </li>
              <li>
                <strong>Niveau 3</strong> (4-5 jours) : Expertise, optimisation énergétique, multi-sites
              </li>
            </ul>

            <p className="font-semibold">Budget CPF : 1 500 à 3 000€ selon niveau et organisme</p>

            {/* ROI Formation GTB */}
            <h2 className="text-3xl font-bold mt-12 mb-6">ROI Formation GTB : Combien de Temps Pour Rentabiliser ?</h2>
            
            <p>
              Une formation est un investissement. Voici les évolutions salariales mesurées d&apos;après l&apos;analyse de 605 offres d&apos;emploi GTB en Île-de-France (décembre 2025) et notre <a href="/blog/barometre-salaires-gtb-ile-de-france-2025" className="text-primary hover:underline">Baromètre Salaires GTB 2025</a>.
            </p>

            <Card className="my-8 border-primary">
              <CardHeader>
                <CardTitle>Tableau ROI Formations GTB</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Formation</th>
                        <th className="text-left py-3 px-4 font-semibold">Coût</th>
                        <th className="text-left py-3 px-4 font-semibold">Profil avant</th>
                        <th className="text-left py-3 px-4 font-semibold">Profil après</th>
                        <th className="text-left py-3 px-4 font-semibold">Gain/an</th>
                        <th className="text-left py-3 px-4 font-semibold">ROI</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">GTB Niveau 2</td>
                        <td className="py-3 px-4">1 800€</td>
                        <td className="py-3 px-4">Tech CVC 32k€</td>
                        <td className="py-3 px-4">Tech GTB 36k€</td>
                        <td className="py-3 px-4 font-semibold text-primary">+4 000€</td>
                        <td className="py-3 px-4">5 mois</td>
                      </tr>
                      <tr className="border-b bg-primary/5">
                        <td className="py-3 px-4 font-semibold">Niagara N4 TCP</td>
                        <td className="py-3 px-4">2 964€</td>
                        <td className="py-3 px-4">Tech GTB 34k€</td>
                        <td className="py-3 px-4">Intégrateur 40k€</td>
                        <td className="py-3 px-4 font-semibold text-primary">+6 000€</td>
                        <td className="py-3 px-4 font-semibold">5 mois</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Titre RNCP Bac+3*</td>
                        <td className="py-3 px-4">4 500€</td>
                        <td className="py-3 px-4">Tech Bac+2 34k€</td>
                        <td className="py-3 px-4">Tech confirmé 42k€</td>
                        <td className="py-3 px-4 font-semibold text-primary">+8 000€</td>
                        <td className="py-3 px-4">7 mois</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  * Gains observés à 3-5 ans d&apos;expérience post-certification. Données issues de 605 offres GTB Île-de-France.
                </p>
              </CardContent>
            </Card>

            <h4 className="text-xl font-semibold mt-8 mb-4">Exemple concret : Certification Niagara N4</h4>
            
            <p>
              <strong>Si vous disposez de 3 000€+ de CPF</strong>, la certification coûte 2 964€ TTC et est intégralement finançable.
            </p>

            <p>
              <strong>6-12 mois plus tard :</strong> Postes intégrateur GTB à 40-44k€/an (vs 34-38k€ avant certification)
            </p>

            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
              <p className="font-semibold text-green-900 dark:text-green-100 mb-2">Gain annuel : +6 000€</p>
              <p className="text-sm text-green-800 dark:text-green-200 mb-2">ROI : 5 mois</p>
              <p className="text-sm text-green-800 dark:text-green-200">
                Sur 5 ans : +30 000€ de gains cumulés pour 2 964€ investis.
              </p>
            </div>

            <p className="text-sm text-muted-foreground italic">
              <strong>Si votre solde CPF est inférieur :</strong> Plusieurs options existent - abondement employeur (80% des entreprises acceptent sur demande argumentée), cofinancement OPCO selon accord de branche, ou complément personnel limité.
            </p>

            {/* Le Process en 4 Étapes */}
            <h2 className="text-3xl font-bold mt-12 mb-6">Le Process en 4 Étapes</h2>
            
            <p>
              Maintenant que vous savez quelle formation viser, voici le processus exact pour mobiliser votre CPF.
            </p>

            <Card className="my-8">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Vérifier votre solde CPF (2 min)</h4>
                      <p className="text-sm text-muted-foreground">
                        Connexion sur <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mon Compte Formation</a>, votre solde s&apos;affiche directement
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Trouver la formation adaptée (15-30 min)</h4>
                      <p className="text-sm text-muted-foreground">
                        Recherche par objectif de carrière, vérification logo Qualiopi, lecture des avis et programmes
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Compléter le financement si nécessaire</h4>
                      <p className="text-sm text-muted-foreground">
                        Abondement employeur, OPCO, ou France Travail si demandeur d&apos;emploi
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">S&apos;inscrire et valider (10 min)</h4>
                      <p className="text-sm text-muted-foreground">
                        Validation sur Mon Compte Formation, confirmation sous 48-72h par l&apos;organisme
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 3 Erreurs à Éviter */}
            <h2 className="text-3xl font-bold mt-12 mb-6">3 Erreurs à Éviter</h2>

            <Card className="my-6 border-amber-200 dark:border-amber-800">
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Attendre fin d&apos;année</h4>
                  <p className="text-sm text-muted-foreground">
                    Sessions Niagara N4 complètes 6-8 semaines à l&apos;avance. Inscrivez-vous dès que possible.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Viser trop haut sans prérequis</h4>
                  <p className="text-sm text-muted-foreground">
                    Niagara N4 requiert 2 ans d&apos;expérience minimum en GTB/automatisme. Commencez par niveau 1-2 si vous débutez.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Oublier les compléments de financement</h4>
                  <p className="text-sm text-muted-foreground">
                    80% des employeurs abondent si vous formulez une demande argumentée. Votre OPCO peut financer jusqu&apos;à 100% du reste à charge selon votre branche.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Vigilance Arnaques CPF */}
            <h2 className="text-3xl font-bold mt-12 mb-6">Vigilance Arnaques CPF</h2>

            <p>
              Les fraudes au CPF restent fréquentes. En 2024, 171 cas de fraudes ont été identifiés pour 30 M€ de préjudice sur un échantillon de 185 organismes contrôlés. Voici comment vous protéger.
            </p>

            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 my-8">
              <div className="flex gap-3 mb-4">
                <Shield className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100">Ne JAMAIS faire</h3>
              </div>
              <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
                <li>✗ Communiquer vos codes CPF ou identifiants FranceConnect par téléphone/SMS/email</li>
                <li>✗ Répondre à un démarchage commercial prétendant &quot;débloquer votre CPF&quot;</li>
                <li>✗ Donner votre numéro de sécurité sociale à un démarcheur</li>
                <li>✗ Cliquer sur des liens reçus par SMS/email conduisant soi-disant au CPF</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
              <div className="flex gap-3 mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">Toujours faire</h3>
              </div>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                <li>✓ Passer exclusivement par <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="underline">moncompteformation.gouv.fr</a></li>
                <li>✓ Vérifier la certification Qualiopi de l&apos;organisme sur la plateforme</li>
                <li>✓ Utiliser FranceConnect+ pour sécuriser votre connexion</li>
                <li>✓ Raccrocher immédiatement si appel suspect</li>
                <li>✓ Signaler toute tentative de fraude sur <a href="https://www.internet-signalement.gouv.fr" target="_blank" rel="noopener noreferrer" className="underline">internet-signalement.gouv.fr</a></li>
              </ul>
            </div>

            <p className="text-sm text-muted-foreground italic">
              <strong>Important :</strong> Mon Compte Formation, la Caisse des Dépôts et les services de l&apos;État ne vous démarchent jamais par téléphone pour proposer des formations. Tout démarchage commercial CPF est interdit depuis 2022.
            </p>

            {/* Par où commencer */}
            <h2 className="text-3xl font-bold mt-12 mb-6">Par où commencer ?</h2>

            <Card className="my-8 border-primary">
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">1</span>
                    Vérifier vos droits CPF
                  </h4>
                  <p className="text-sm text-muted-foreground ml-10">
                    Connectez-vous sur <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">moncompteformation.gouv.fr</a> pour consulter votre solde disponible (2 min).
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</span>
                    Identifier la formation adaptée
                  </h4>
                  <p className="text-sm text-muted-foreground ml-10">
                    Recherchez les formations GTB certifiées Qualiopi correspondant à votre objectif professionnel. Comparez les programmes, durées et taux de réussite (15-30 min).
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">3</span>
                    Compléter le financement si nécessaire
                  </h4>
                  <p className="text-sm text-muted-foreground ml-10">
                    Si votre solde CPF ne couvre pas l&apos;intégralité, contactez votre employeur (abondement) ou votre OPCO pour un cofinancement.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">4</span>
                    S&apos;inscrire
                  </h4>
                  <p className="text-sm text-muted-foreground ml-10">
                    Validation sur Mon Compte Formation. Les organismes sérieux répondent sous 48-72h (10 min).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Impact à 3-5 ans */}
            <h2 className="text-3xl font-bold mt-12 mb-6">Impact à 3-5 ans : Deux Trajectoires</h2>

            <p>
              Les données du marché GTB Île-de-France montrent deux trajectoires professionnelles distinctes selon l&apos;investissement formation.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Profil 1 - Sans certification complémentaire</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Évolution salariale</p>
                    <p className="text-lg">+2-3%/an (inflation)</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Postes typiques</p>
                    <p className="text-sm">Technicien GTB, maintenance, exploitation</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Fourchette 3-5 ans</p>
                    <p className="text-lg font-semibold">32-36k€</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="text-lg">Profil 2 - Avec certification Niagara N4</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Évolution salariale</p>
                    <p className="text-lg text-primary font-semibold">+18-20% dès l&apos;année suivante</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Postes typiques</p>
                    <p className="text-sm">Intégrateur, automaticien certifié, chef de projet junior</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Fourchette 3-5 ans</p>
                    <p className="text-lg font-semibold text-primary">40-48k€</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
              <p className="font-semibold text-primary mb-2">Gain cumulé sur 5 ans</p>
              <p className="text-2xl font-bold">+30 000 à +45 000€</p>
              <p className="text-sm text-muted-foreground mt-2">
                Selon trajectoire professionnelle et certifications obtenues
              </p>
            </div>

            <p className="text-sm text-muted-foreground italic">
              Source : Analyse de 605 offres d&apos;emploi GTB en Île-de-France (décembre 2025).
            </p>

            {/* Sources */}
            <h2 className="text-3xl font-bold mt-12 mb-6">Sources</h2>

            <Card className="my-6">
              <CardContent className="pt-6 space-y-4 text-sm">
                <div>
                  <p className="font-semibold mb-1">Données réglementaires CPF</p>
                  <p className="text-muted-foreground">
                    Caisse des Dépôts (Rapport d&apos;activité CPF 2024), Service-Public.fr, Ministère du Travail
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Formations certifiantes</p>
                  <p className="text-muted-foreground">
                    BTIB Catalogue 2025 (certification Niagara N4 TCP Tridium), KNX France, BACnet International, organismes Qualiopi référencés
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Données salariales</p>
                  <p className="text-muted-foreground">
                    Analyse de 605 offres d&apos;emploi GTB en Île-de-France (décembre 2025) ; Baromètre Salaires GTB EcoMakers 2025 ; études sectorielles bâtiment et énergie
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Vigilance fraudes</p>
                  <p className="text-muted-foreground">
                    Service-Public.fr, Gouvernement.fr, DGCCRF (Direction générale de la concurrence, de la consommation et de la répression des fraudes)
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </article>

        <CtaBlogSection />
      </main>
      <Footer />
    </>
  )
}
