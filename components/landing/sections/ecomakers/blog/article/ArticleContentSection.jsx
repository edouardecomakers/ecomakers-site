import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { TrendingUp, MapPin, Award, Briefcase, Target, AlertCircle } from "lucide-react"

export default function ArticleContentSection() {
  return (
    <article className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:scroll-mt-20">
          
          {/* Intro */}
          <div className="rounded-lg border bg-muted/50 p-6 not-prose mb-12">
            <p className="text-muted-foreground mb-4">
              72% des offres GTB ne mentionnent pas le salaire. Cette opacité pénalise autant les candidats (qui sous-négocient) que les recruteurs (qui perdent des talents).
            </p>
            <p className="text-muted-foreground">
              Ce baromètre apporte de la transparence sur un marché en forte tension, où les compétences GTB sont de plus en plus recherchées. Basé sur 605 offres d'emploi réelles collectées en Île-de-France (dont 249 avec salaires exploitables), il croise données terrain, études de référence et retours de professionnels pour vous donner une vision réaliste et actuelle du marché.
            </p>
          </div>

          <h2 id="vue-densemble">Vue d'ensemble du marché</h2>
          
          <p className="lead">
            Avant de plonger dans les détails par métier, voici ce que révèlent nos données sur le marché GTB en Île-de-France.
          </p>

          {/* Tableau principal */}
          <div className="not-prose my-8">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left font-semibold">Métier</th>
                        <th className="px-4 py-3 text-center font-semibold">Fourchette Q25-Q75</th>
                        <th className="px-4 py-3 text-center font-semibold">Médiane</th>
                        <th className="px-4 py-3 text-center font-semibold text-xs">Échantillon</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">Technicien GTB</td>
                        <td className="px-4 py-3 text-center text-sm font-semibold">31-35k€</td>
                        <td className="px-4 py-3 text-center text-sm">34k€</td>
                        <td className="px-4 py-3 text-center text-xs text-muted-foreground">n=65</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">Automaticien / Programmeur</td>
                        <td className="px-4 py-3 text-center text-sm font-semibold">37-41k€</td>
                        <td className="px-4 py-3 text-center text-sm">40k€</td>
                        <td className="px-4 py-3 text-center text-xs text-muted-foreground">n=22</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">Chef de Projet GTB</td>
                        <td className="px-4 py-3 text-center text-sm font-semibold">45-55k€</td>
                        <td className="px-4 py-3 text-center text-sm">53k€</td>
                        <td className="px-4 py-3 text-center text-xs text-muted-foreground">n=14</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">Ingénieur Commercial GTB</td>
                        <td className="px-4 py-3 text-center text-sm font-semibold">42-52k€</td>
                        <td className="px-4 py-3 text-center text-sm">46k€</td>
                        <td className="px-4 py-3 text-center text-xs text-muted-foreground">n=13</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">Responsable Technique</td>
                        <td className="px-4 py-3 text-center text-sm font-semibold">42-62k€</td>
                        <td className="px-4 py-3 text-center text-sm">52k€</td>
                        <td className="px-4 py-3 text-center text-xs text-muted-foreground">n=23</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="px-4 py-3 bg-muted/30 text-xs text-muted-foreground border-t">
                  <p className="mb-1"><strong>Légende :</strong> Q25-Q75 = 50% des salaires observés (quartiles). Tous niveaux d'expérience confondus.</p>
                  <p>Brut annuel fixe sur 12 mois, hors part variable et avantages. Données oct-nov 2025.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="not-prose my-8 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-amber-900 dark:text-amber-100 mb-1">À noter</p>
                <ul className="space-y-1 text-amber-800 dark:text-amber-200">
                  <li>• La part variable peut représenter 10% à 30% supplémentaires pour les profils commerciaux</li>
                  <li>• Les avantages (véhicule, tickets restaurant, primes) peuvent ajouter 3k€ à 8k€</li>
                  <li>• Les certifications (Niagara, Desigo) peuvent augmenter le salaire de 10% à 20%</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 id="insights-cles">5 insights clés du marché</h2>

          <div className="not-prose grid gap-6 my-8">
            {[
              {
                icon: MapPin,
                title: "La Défense paie 20% de plus",
                description: "Un technicien GTB peut atteindre 38k€ à La Défense vs 34k€ ailleurs en IDF. Les grandes entreprises du tertiaire premium ont des budgets plus élevés et des exigences strictes."
              },
              {
                icon: Award,
                title: "Niagara N4 : +5 à 7k€/an",
                description: "Un automaticien certifié Niagara N4 peut atteindre 44-47k€ vs 38-40k€ sans certification (observé sur notre échantillon). La pénurie de profils certifiés crée une prime salariale importante."
              },
              {
                icon: TrendingUp,
                title: "Variable : jusqu'à +50%",
                description: "Un ingénieur commercial affiche 46k€ de fixe médian mais peut atteindre 70k€+ total. Le variable représente 20-30% du package dans les meilleurs cas."
              },
              {
                icon: Briefcase,
                title: "Grands groupes : +15-25% pour techniciens",
                description: "Bouygues, Vinci, Engie paient mieux pour les postes techniques. Mais les PME restent compétitives pour chargés d'affaires et chefs de projet grâce à l'autonomie et au variable."
              },
              {
                icon: Target,
                title: "Cybersécurité GTB : +20-25%",
                description: "Les profils maîtrisant la cybersécurité GTB (ISO 27001, IEC 62443) négocient des salaires 20-25% supérieurs. La demande explose, l'offre est quasi inexistante."
              }
            ].map((insight, index) => (
              <Card key={index} className="overflow-hidden hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <insight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{insight.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{insight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 id="fiches-metiers">Fiches métiers détaillées</h2>

          <p>
            Découvrez les fourchettes salariales précises, compétences valorisantes et conseils carrière pour chaque métier GTB. Les fourchettes présentées sont globales et incluent tous niveaux d'expérience.
          </p>

          {/* Technicien GTB */}
          <div className="not-prose my-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4">
                <h3 className="text-xl font-bold text-white">Technicien GTB</h3>
              </div>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Fourchettes salariales (Brut annuel fixe - IDF)
                  </h4>
                  <div className="p-4 rounded-lg border bg-muted/30">
                    <div className="text-sm text-muted-foreground mb-2">Basé sur 65 offres avec salaires</div>
                    <div className="font-bold text-2xl mb-1">31-35k€</div>
                    <div className="text-sm text-muted-foreground">Médiane observée: 34k€</div>
                    <div className="text-xs text-muted-foreground mt-2">Q25-Q75 : 50% des salaires se situent dans cette fourchette</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Missions principales</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> Maintenance préventive et corrective systèmes GTB</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Paramétrage équipements CVC, éclairage, stores</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Intervention dépannage sur sites clients</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Mise en service installations</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">💡 Conseil carrière</h4>
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    Pour progresser rapidement vers 38-42k€, investissez dans une formation Niagara N4 ou KNX. Ces certifications sont très valorisées et peuvent augmenter votre salaire de 15-20%.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Automaticien */}
          <div className="not-prose my-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
                <h3 className="text-xl font-bold text-white">Automaticien / Programmeur GTB</h3>
              </div>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Fourchettes salariales (Brut annuel fixe - IDF)
                  </h4>
                  <div className="p-4 rounded-lg border bg-muted/30">
                    <div className="text-sm text-muted-foreground mb-2">Basé sur 22 offres avec salaires</div>
                    <div className="font-bold text-2xl mb-1">37-41k€</div>
                    <div className="text-sm text-muted-foreground">Médiane observée: 40k€</div>
                    <div className="text-xs text-muted-foreground mt-2">Q25-Q75 : 50% des salaires se situent dans cette fourchette</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Missions principales</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> Programmation automates et supervisions GTB</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Configuration protocoles (BACnet, KNX, Modbus)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Développement d'interfaces graphiques</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Tests et mise au point installations complexes</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">💡 Conseil carrière</h4>
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    La certification Niagara N4 TCP est le sésame pour atteindre 44-47k€. C'est l'investissement formation le plus rentable pour ce métier. Visez ensuite l'expertise multi-protocoles.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chef de Projet */}
          <div className="not-prose my-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4">
                <h3 className="text-xl font-bold text-white">Chef de Projet GTB</h3>
              </div>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Fourchettes salariales (Brut annuel fixe - IDF)
                  </h4>
                  <div className="p-4 rounded-lg border bg-muted/30">
                    <div className="text-sm text-muted-foreground mb-2">Basé sur 14 offres avec salaires</div>
                    <div className="font-bold text-2xl mb-1">45-55k€</div>
                    <div className="text-sm text-muted-foreground">Médiane observée: 53k€</div>
                    <div className="text-xs text-muted-foreground mt-2">Q25-Q75 : 50% des salaires se situent dans cette fourchette</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Missions principales</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> Pilotage projets GTB de A à Z (budget 100k€-2M€)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Coordination équipes techniques et sous-traitants</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Interface client et suivi contractuel</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Gestion planning, budget, qualité</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">💡 Conseil carrière</h4>
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    Pour atteindre les fourchettes hautes (60-70k€), combinez expertise technique solide + compétences commerciales. Les chefs de projet capables de vendre ET piloter sont rares.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ingénieur Commercial */}
          <div className="not-prose my-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
                <h3 className="text-xl font-bold text-white">Ingénieur Commercial GTB</h3>
              </div>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Fourchettes salariales (Brut annuel fixe - IDF)
                  </h4>
                  <div className="p-4 rounded-lg border bg-muted/30">
                    <div className="text-sm text-muted-foreground mb-2">Basé sur 13 offres avec salaires</div>
                    <div className="font-bold text-2xl mb-1">42-52k€</div>
                    <div className="text-sm text-muted-foreground">Médiane observée: 46k€</div>
                    <div className="text-xs text-muted-foreground mt-2">Q25-Q75 : 50% des salaires se situent dans cette fourchette</div>
                  </div>
                  <div className="mt-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 text-sm">
                    <strong className="text-blue-900 dark:text-blue-100">Package total :</strong>
                    <span className="ml-2 text-blue-800 dark:text-blue-200">Avec variable, peut atteindre 65-80k€ selon performance</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Missions principales</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> Développement portefeuille clients (BtoB tertiaire)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Réponse appels d'offres GTB/GTC</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Chiffrage et présentation solutions techniques</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Négociation commerciale et closing</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">💡 Conseil carrière</h4>
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    Le variable fait toute la différence : 20-30% du package. Les meilleurs profils atteignent 70-80k€ en cumulant fixe + commissions. Privilégiez les entreprises avec gros projets (&gt;500k€).
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Responsable Technique */}
          <div className="not-prose my-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4">
                <h3 className="text-xl font-bold text-white">Responsable Technique / Manager</h3>
              </div>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Fourchettes salariales (Brut annuel fixe - IDF)
                  </h4>
                  <div className="p-4 rounded-lg border bg-muted/30">
                    <div className="text-sm text-muted-foreground mb-2">Basé sur 23 offres avec salaires</div>
                    <div className="font-bold text-2xl mb-1">42-62k€</div>
                    <div className="text-sm text-muted-foreground">Médiane observée: 52k€</div>
                    <div className="text-xs text-muted-foreground mt-2">Q25-Q75 : 50% des salaires se situent dans cette fourchette</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Missions principales</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> Management équipe technique (5-15 personnes)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Définition stratégie technique et innovation</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Garantie qualité et performance installations</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Interface direction et grands comptes</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold text-orange-900 dark:text-amber-100 mb-2">💡 Conseil carrière</h4>
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    Pour atteindre les sommets (65-75k€+), combinez expertise technique pointue + compétences managériales. Les profils capables de gérer équipe ET innovation sont rares et très valorisés.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 id="conseils-carriere">Conseils carrière par profil</h2>

          <div className="not-prose grid gap-6 my-8">
            {[
              {
                profile: "Profil débutant",
                advice: "Privilégiez les PME/ETI pour toucher à tout : vous développerez votre polyvalence plus vite qu'en grand groupe. Après quelques années d'expérience, vous pourrez basculer dans un grand groupe avec une augmentation significative.",
                target: "Formation Niagara N4 dès que possible"
              },
              {
                profile: "Profil avec expérience",
                advice: "C'est le moment d'investir dans les certifications : Niagara N4, cybersécurité OT, protocoles. Chaque certification peut augmenter votre salaire de 5-7k€/an. Envisagez un passage en grand groupe si vous êtes en PME.",
                target: "Viser chef de projet ou expert technique"
              },
              {
                profile: "Profil senior",
                advice: "Deux voies s'ouvrent : management (responsable technique, directeur) ou expertise ultra-pointue (cybersécurité GTB, IoT, IA). Les deux peuvent mener à 70-85k€+ mais demandent des compétences différentes.",
                target: "Devenir référent marché ou manager"
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.profile}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.advice}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="font-medium">Objectif :</span>
                    <span className="text-muted-foreground">{item.target}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 id="tendances-2026">Perspectives 2026</h2>

          <p>
            Le marché GTB évolue rapidement. Voici les 4 grandes tendances qui vont redessiner les salaires et les compétences recherchées en 2026.
          </p>

          <div className="not-prose grid gap-4 my-8">
            {[
              {
                title: "Tension marché : +8-10% salaires",
                prediction: "Hausse généralisée de 8-10% des salaires",
                cause: "Pénurie talents GTB + transition énergétique",
                impact: "Juniors commencent à 35k€+, Seniors visent 70k€+"
              },
              {
                title: "Cybersécurité OT = Nouvelle norme",
                prediction: "+40% des offres exigeront compétence cybersécurité",
                cause: "Réglementation NIS2 + cyberattaques industrielles",
                impact: "Salaires premium de +20-30% pour profils certifiés"
              },
              {
                title: "IA générative dans la GTB",
                prediction: "Outils IA pour maintenance prédictive",
                cause: "ChatGPT-like pour analyse données IoT",
                impact: "Métiers évoluent vers 'pilote système assisté par IA'"
              },
              {
                title: "Télétravail hybride standard",
                prediction: "2-3 jours télétravail/semaine = norme",
                cause: "Pénurie oblige employeurs à être flexibles",
                impact: "Mobilité géographique moins bloquante"
              }
            ].map((trend, index) => (
              <Card key={index}>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-lg">{trend.title}</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Prévision :</span>
                      <span className="ml-2 text-muted-foreground">{trend.prediction}</span>
                    </div>
                    <div>
                      <span className="font-medium">Cause :</span>
                      <span className="ml-2 text-muted-foreground">{trend.cause}</span>
                    </div>
                    <div>
                      <span className="font-medium">Impact :</span>
                      <span className="ml-2 text-muted-foreground">{trend.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 id="methodologie">Méthodologie</h2>

          <p>
            Ce baromètre est basé sur une méthodologie rigoureuse croisant plusieurs sources de données pour garantir la fiabilité des informations.
          </p>

          <h3>Sources de données</h3>

          <div className="not-prose grid md:grid-cols-3 gap-4 my-6">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">1. Analyse d'offres</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 605 offres GTB IDF collectées</li>
                  <li>• 249 offres avec salaires exploitables (41%)</li>
                  <li>• Période : octobre-novembre 2025</li>
                  <li>• Sources : LinkedIn, Indeed, HelloWork</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">2. Données terrain</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Échanges professionnels</li>
                  <li>• Retours négociations</li>
                  <li>• Veille marché continue</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">3. Études référence</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Hays, Robert Half</li>
                  <li>• Données INSEE/DARES</li>
                  <li>• Rapports sectoriels</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3>Définitions clés</h3>

          <ul>
            <li><strong>Fourchette Q25-Q75 :</strong> 50% des salaires observés se situent dans cette fourchette (quartiles 25 et 75)</li>
            <li><strong>Médiane :</strong> 50% des salaires en-dessous, 50% au-dessus</li>
            <li><strong>Brut annuel fixe :</strong> Sur 12 mois, HORS variable et avantages</li>
            <li><strong>Package :</strong> Fixe + variable + avantages (véhicule, primes, etc.)</li>
          </ul>

          <h3>Limites et transparence</h3>

          <div className="not-prose my-6 p-4 rounded-lg bg-muted/50 border">
            <h4 className="font-semibold mb-3">Points importants à connaître</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Échantillon de 249 offres avec salaires exploitables sur 605 collectées (41%)</li>
              <li>• Les fourchettes présentées sont globales et incluent tous niveaux d'expérience confondus</li>
              <li>• 59% des offres GTB ne mentionnent pas de salaire dans l'annonce</li>
              <li>• Données collectées en octobre-novembre 2025, peuvent varier selon la saisonnalité</li>
              <li>• Les certifications et l'expérience peuvent créer des écarts significatifs au sein d'une même fourchette</li>
              <li>• Focus géographique : Île-de-France uniquement</li>
            </ul>
          </div>

          <p className="text-sm text-muted-foreground">
            Nous privilégions la transparence méthodologique plutôt que la précision artificielle. Les fourchettes présentées sont des indicateurs de marché, pas des vérités absolues. Elles doivent être utilisées comme base de réflexion pour vos négociations, en tenant compte de votre situation spécifique.
          </p>

        </div>
      </div>
    </article>
  )
}
