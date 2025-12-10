import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { TrendingUp, Award, Target, AlertCircle, CheckCircle, Euro, Clock } from "lucide-react"

export default function ArticleContentCPFSection() {
  return (
    <article className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:scroll-mt-20">
          
          {/* Intro */}
          <div className="rounded-lg border bg-muted/50 p-6 not-prose mb-12">
            <p className="text-muted-foreground mb-4">
              500€ par an. Automatiquement. Depuis votre premier jour de travail. Si vous travaillez depuis 8 ans, c'est environ 4 000€ sur votre Compte Personnel de Formation.
            </p>
            <p className="text-muted-foreground">
              En 2024, 40,1 millions de personnes disposaient d'un CPF alimenté en France. 1,4 million de formations ont été financées. Mais la majorité des professionnels GTB laissent dormir ce budget. Aujourd'hui, on vous montre comment le transformer en certification qui accélère votre carrière.
            </p>
          </div>

          <h2 id="droits-cpf">Vos Droits CPF 2025 : Combien Avez-Vous Exactement ?</h2>

          <p className="lead">
            Avant de parler formations, calculons ce que vous avez disponible. Le CPF vous crédite automatiquement 500€ par an (800€ si peu qualifié), avec un plafond à 5 000€.
          </p>

          <div className="not-prose my-8">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left font-semibold">Ancienneté</th>
                        <th className="px-4 py-3 text-center font-semibold">CPF disponible</th>
                        <th className="px-4 py-3 text-left font-semibold">Formation finançable</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">3 ans</td>
                        <td className="px-4 py-3 text-center font-semibold">~1 500€</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Formation GTB Niveau 2</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">5 ans</td>
                        <td className="px-4 py-3 text-center font-semibold">~2 500€</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Certification protocoles</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">8 ans</td>
                        <td className="px-4 py-3 text-center font-semibold">~4 000€</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Certification Niagara N4 TCP</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">10 ans+</td>
                        <td className="px-4 py-3 text-center font-semibold">5 000€</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Titre RNCP Bac+3 GTB</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="px-4 py-3 bg-muted/30 text-sm text-muted-foreground border-t">
                  <p><strong>Participation obligatoire 2025 :</strong> 102,23€ à votre charge pour toute formation CPF (déduite automatiquement).</p>
                  <p className="mt-2"><strong>Pour connaître votre solde exact :</strong> <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mon Compte Formation</a></p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 id="certifications-gtb">Certifications GTB Finançables : Lesquelles Font la Différence ?</h2>

          <p>
            Le CPF finance uniquement des formations certifiantes par organismes Qualiopi. Voici celles qui ont un impact mesurable sur votre salaire et votre carrière.
          </p>

          {/* Niagara N4 */}
          <div className="not-prose my-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Certification Niagara N4 TCP</h3>
                <p className="text-white/90 text-sm mt-1">Le sésame de l'intégration GTB - Impact : +5 à 7k€/an</p>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Votre profil & blocage actuel
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Technicien GTB avec 2-3 ans d'expérience. Vous travaillez peut-être déjà sur Niagara, mais sans certification officielle, vous êtes cantonné aux tâches simples.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Ce que la certification débloque
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg border bg-muted/30">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">Écart salarial</span>
                        <span className="text-primary font-semibold text-sm">+5-7k€/an</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Automaticien certifié : 44-47k€ vs 38-40k€ sans certification</p>
                    </div>
                    <div className="p-3 rounded-lg border bg-muted/30">
                      <span className="font-medium block mb-1">Accès projets premium</span>
                      <p className="text-sm text-muted-foreground">Hôpitaux, datacenters, tertiaire &gt;5 000m²</p>
                    </div>
                    <div className="p-3 rounded-lg border bg-muted/30">
                      <span className="font-medium block mb-1">Crédibilité marché</span>
                      <p className="text-sm text-muted-foreground">"Certifié Tridium" = porte d'entrée chez tous les intégrateurs</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Euro className="h-5 w-5 text-primary" />
                    Prix et format (BTIB 2025)
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> Prix : 2 470€ HT (~2 964€ TTC)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Durée : 5 jours intensifs (35 heures)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Taux de réussite : 93%</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Sessions 2025 : 6-10/an (fév, avr, juin, sept, nov, déc)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Format : Présentiel (Antony) ou distanciel</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="not-prose my-8 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-amber-900 dark:text-amber-100 mb-1">Attention</p>
                <p className="text-amber-800 dark:text-amber-200">
                  Sessions très demandées. BTIB est le seul centre en France à délivrer le TCP officiel Tridium. Inscrivez-vous plusieurs semaines à l'avance.
                </p>
              </div>
            </div>
          </div>

          {/* Protocoles */}
          <div className="not-prose my-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-secondary to-secondary/80 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Formations Protocoles (BACnet, KNX, Modbus)</h3>
                <p className="text-white/90 text-sm mt-1">Devenir l'expert multi-protocoles - Impact : +4 à 6k€/an</p>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Les installations modernes mélangent BACnet (CVC), KNX (éclairage), et Modbus (compteurs). Moins de 20% des pros GTB maîtrisent les 3 protocoles.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Organismes et prix</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> <strong>KNX Association France :</strong> 1 200 à 2 200€ (2-5 jours)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> <strong>BACnet International :</strong> 1 500 à 2 500€ (3-5 jours)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Niveaux 1-3 */}
          <div className="not-prose my-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-accent to-accent/80 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Formations GTB Niveau 1 à 3</h3>
                <p className="text-white/90 text-sm mt-1">Le tremplin technicien → superviseur - Salaire cible : 36-40k€</p>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Pour techniciens CVC ou électriciens qui veulent pivoter vers la supervision. Accès aux postes de superviseur GTB à 36-40k€/an vs 30-34k€ en maintenance.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Progression</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> <strong>Niveau 1</strong> (3 jours) : Découverte GTC/GTB, bases automates</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> <strong>Niveau 2</strong> (2-3 jours) : Supervision avancée, programmation</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> <strong>Niveau 3</strong> (5 jours) : Expertise, optimisation énergétique</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">Budget CPF : 1 500 à 2 500€ selon niveau</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 id="roi">ROI Formation GTB : Combien de Temps Pour Rentabiliser ?</h2>

          <p>
            Une formation, c'est un investissement. Voici les évolutions salariales mesurées d'après notre <a href="/blog/barometre-salaires-gtb-ile-de-france-2025" className="text-primary hover:underline">Baromètre Salaires GTB 2025</a>.
          </p>

          <div className="not-prose my-8">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left font-semibold text-sm">Formation</th>
                        <th className="px-4 py-3 text-center font-semibold text-sm">Coût</th>
                        <th className="px-4 py-3 text-center font-semibold text-sm">Avant</th>
                        <th className="px-4 py-3 text-center font-semibold text-sm">Après</th>
                        <th className="px-4 py-3 text-center font-semibold text-sm">ROI</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 text-sm">GTB Niveau 2</td>
                        <td className="px-4 py-3 text-center text-sm">1 800€</td>
                        <td className="px-4 py-3 text-center text-sm">32k€</td>
                        <td className="px-4 py-3 text-center text-sm font-semibold text-primary">38k€</td>
                        <td className="px-4 py-3 text-center text-sm font-bold">4 mois</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 text-sm">Niagara N4</td>
                        <td className="px-4 py-3 text-center text-sm">2 964€</td>
                        <td className="px-4 py-3 text-center text-sm">34k€</td>
                        <td className="px-4 py-3 text-center text-sm font-semibold text-primary">40k€</td>
                        <td className="px-4 py-3 text-center text-sm font-bold">6 mois</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 text-sm">Multi-protocoles</td>
                        <td className="px-4 py-3 text-center text-sm">2 200€</td>
                        <td className="px-4 py-3 text-center text-sm">38k€</td>
                        <td className="px-4 py-3 text-center text-sm font-semibold text-primary">43k€</td>
                        <td className="px-4 py-3 text-center text-sm font-bold">5 mois</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 text-sm">Titre RNCP</td>
                        <td className="px-4 py-3 text-center text-sm">4 500€</td>
                        <td className="px-4 py-3 text-center text-sm">52k€</td>
                        <td className="px-4 py-3 text-center text-sm font-semibold text-primary">64k€</td>
                        <td className="px-4 py-3 text-center text-sm font-bold">5 mois</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="not-prose my-8 p-6 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-lg mb-3 text-green-900 dark:text-green-100">Exemple concret : Certification Niagara N4</h4>
            <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
              <p>Vous avez 3 200€ de CPF. La certification coûte 2 964€ TTC.</p>
              <p><strong>6-12 mois plus tard :</strong> Poste intégrateur GTB à 40-44k€/an (vs 34-38k€ avant)</p>
              <p><strong>Gain annuel :</strong> +6 000€</p>
              <p><strong>ROI :</strong> 6 mois</p>
              <p className="font-bold mt-3">Sur 5 ans : +30 000€ de gains cumulés pour 2 964€ investis.</p>
            </div>
          </div>

          <h2 id="process">Le Process en 4 Étapes</h2>

          <p>Maintenant que vous savez quelle formation viser, voici le process exact.</p>

          <div className="not-prose my-8">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Vérifier votre solde CPF (2 min)</h4>
                      <p className="text-sm text-muted-foreground">Connexion sur Mon Compte Formation, votre solde s'affiche directement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Trouver la formation adaptée (15 min)</h4>
                      <p className="text-sm text-muted-foreground">Recherche par objectif de carrière, vérification logo Qualiopi, lecture des avis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Compléter le financement si nécessaire (30 min)</h4>
                      <p className="text-sm text-muted-foreground">Abondement employeur, OPCO, ou France Travail si demandeur d'emploi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">S'inscrire et valider (10 min)</h4>
                      <p className="text-sm text-muted-foreground">Validation sur Mon Compte Formation, confirmation sous 48h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 id="erreurs">3 Erreurs à Éviter</h2>

          <div className="not-prose grid md:grid-cols-3 gap-4 my-8">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">Attendre fin d'année</h4>
                <p className="text-sm text-muted-foreground">
                  Sessions Niagara N4 complètes 6-8 semaines à l'avance. Inscrivez-vous maintenant.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">Viser trop haut</h4>
                <p className="text-sm text-muted-foreground">
                  Niagara N4 requiert 2 ans d'XP minimum. Commencez par niveau 1-2 si débutant.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">Oublier compléments</h4>
                <p className="text-sm text-muted-foreground">
                  80% des employeurs abondent si vous demandez. Votre OPCO peut financer jusqu'à 100% du reste.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 id="vigilance">Vigilance Arnaques CPF</h2>

          <div className="not-prose my-6 p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-500 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-red-900 dark:text-red-100 mb-2">Ne JAMAIS :</p>
                <ul className="space-y-1 text-red-800 dark:text-red-200">
                  <li>• Communiquer codes CPF par téléphone/SMS</li>
                  <li>• Répondre à démarchage "déblocage CPF"</li>
                  <li>• Donner numéro Sécu à démarcheur</li>
                </ul>
                <p className="font-semibold text-red-900 dark:text-red-100 mt-3 mb-2">Toujours :</p>
                <ul className="space-y-1 text-red-800 dark:text-red-200">
                  <li>• Passer par moncompteformation.gouv.fr uniquement</li>
                  <li>• Vérifier logo Qualiopi</li>
                  <li>• Raccrocher si appel suspect</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 id="action">Votre Plan Cette Semaine</h2>

          <div className="not-prose my-8">
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Lundi matin (2 min) :</span>
                      <span className="text-muted-foreground ml-2">Vérifier solde CPF sur moncompteformation.gouv.fr</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Mercredi soir (15 min) :</span>
                      <span className="text-muted-foreground ml-2">Chercher 2-3 formations GTB adaptées</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Vendredi (10 min) :</span>
                      <span className="text-muted-foreground ml-2">Contacter un organisme pour prochaines sessions</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 id="scenarios">Ce Qui Se Passe Si Vous Agissez (ou Pas)</h2>

          <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
            <Card className="border-red-200 dark:border-red-800">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-red-900 dark:text-red-100">Scénario A : CPF dort</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Aujourd'hui :</strong> 3 200€ disponibles</p>
                  <p><strong>Dans 5 ans :</strong> 5 000€ (plafond atteint)</p>
                  <p className="text-muted-foreground pt-2 border-t mt-3">Même poste, même salaire (+2%/an inflation). Vous regardez vos collègues certifiés prendre les missions intéressantes.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-primary">Scénario B : Vous agissez</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Aujourd'hui :</strong> 3 200€ disponibles</p>
                  <p><strong>Dans 1 an :</strong> +6 000€ de gains</p>
                  <p><strong>Dans 5 ans :</strong> +30 000€ cumulés</p>
                  <p className="text-muted-foreground pt-2 border-t mt-3">2-3 certifications au compteur. Poste intégrateur senior ou chef de projet GTB (48-60k€). Sollicité par recruteurs.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="not-prose my-12 p-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 text-center">
            <h3 className="font-bold text-2xl mb-4">La vraie question</h3>
            <p className="text-lg mb-4">L'argent est déjà là. Il vous attend.</p>
            <p className="text-lg mb-6">Va-t-il servir à accélérer votre carrière GTB ? Ou stagner ?</p>
            <div className="space-y-2 mb-6">
              <p>Vous avez les fonds.</p>
              <p>Vous avez accès aux formations.</p>
              <p>Vous avez le processus exact.</p>
            </div>
            <p className="text-xl font-bold">Il ne manque qu'une chose : votre décision.</p>
          </div>

          <div className="not-prose my-12 p-6 rounded-lg bg-muted/50 border text-center">
            <p className="font-semibold mb-2">Vous cherchez des opportunités GTB/GTC ?</p>
            <p className="text-sm text-muted-foreground mb-4">Rejoignez notre réseau et accédez aux meilleures offres d'Île-de-France</p>
            <Button asChild>
              <Link href="/candidats">Rejoindre le réseau EcoMakers</Link>
            </Button>
          </div>

          <h2>Sources</h2>

          <p className="text-sm text-muted-foreground">
            Statistiques CPF : Caisse des Dépôts, Rapport 2024 • Règles CPF 2025 : Service-Public.fr • Prix formations : BTIB Catalogue 2025 • Données salariales : EcoMakers, Baromètre GTB IDF 2025 (605 offres)
          </p>

        </div>
      </div>
    </article>
  )
}
