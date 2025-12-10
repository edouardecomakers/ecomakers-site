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
              Ce baromètre apporte de la transparence sur un marché en forte tension, où les compétences GTB sont de plus en plus recherchées. Basé sur 755 offres d'emploi réelles collectées en Île-de-France, il croise données terrain, études de référence et retours de professionnels pour vous donner une vision réaliste et actuelle du marché.
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
                        <th className="px-4 py-3 text-center font-semibold text-sm">0-2 ans</th>
                        <th className="px-4 py-3 text-center font-semibold text-sm">3-5 ans</th>
                        <th className="px-4 py-3 text-center font-semibold text-sm">6-10 ans</th>
                        <th className="px-4 py-3 text-center font-semibold text-sm">10+ ans</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">Technicien GTB</td>
                        <td className="px-4 py-3 text-center text-sm">28-32k€</td>
                        <td className="px-4 py-3 text-center text-sm">32-36k€</td>
                        <td className="px-4 py-3 text-center text-sm">36-42k€</td>
                        <td className="px-4 py-3 text-center text-sm">40-48k€</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">Automaticien / Programmeur</td>
                        <td className="px-4 py-3 text-center text-sm">32-38k€</td>
                        <td className="px-4 py-3 text-center text-sm">36-42k€</td>
                        <td className="px-4 py-3 text-center text-sm">42-50k€</td>
                        <td className="px-4 py-3 text-center text-sm">48-58k€</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">Chargé d'Affaires GTB</td>
                        <td className="px-4 py-3 text-center text-sm">38-45k€</td>
                        <td className="px-4 py-3 text-center text-sm">42-52k€</td>
                        <td className="px-4 py-3 text-center text-sm">50-65k€</td>
                        <td className="px-4 py-3 text-center text-sm">60-80k€</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">Chef de Projet GTB</td>
                        <td className="px-4 py-3 text-center text-sm">40-48k€</td>
                        <td className="px-4 py-3 text-center text-sm">45-55k€</td>
                        <td className="px-4 py-3 text-center text-sm">52-68k€</td>
                        <td className="px-4 py-3 text-center text-sm">65-85k€</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">Ingénieur Commercial GTB</td>
                        <td className="px-4 py-3 text-center text-sm">35-42k€</td>
                        <td className="px-4 py-3 text-center text-sm">40-50k€</td>
                        <td className="px-4 py-3 text-center text-sm">48-62k€</td>
                        <td className="px-4 py-3 text-center text-sm">55-75k€</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">Responsable Technique</td>
                        <td className="px-4 py-3 text-center text-sm">45-55k€</td>
                        <td className="px-4 py-3 text-center text-sm">50-62k€</td>
                        <td className="px-4 py-3 text-center text-sm">58-75k€</td>
                        <td className="px-4 py-3 text-center text-sm">70-95k€</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="px-4 py-3 bg-muted/30 text-xs text-muted-foreground border-t">
                  <p className="mb-1"><strong>Légende :</strong> Fourchettes représentant 80% des salaires observés (hors 10% extrêmes)</p>
                  <p>Brut annuel fixe sur 12 mois, hors part variable et avantages</p>
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
                description: "Un technicien GTB 3-5 ans gagne 38k€ à La Défense vs 34k€ ailleurs en IDF. Les grandes entreprises du tertiaire premium ont des budgets plus élevés et des exigences strictes."
              },
              {
                icon: Award,
                title: "Niagara N4 : +7k€ à +12k€/an",
                description: "Un automaticien certifié Niagara N4 gagne en moyenne 46k€ (3-5 ans) vs 39k€ sans certification. La pénurie de profils certifiés crée une prime salariale importante."
              },
              {
                icon: TrendingUp,
                title: "Variable : jusqu'à +50%",
                description: "Un ingénieur commercial 6-10 ans affiche 55k€ de fixe mais peut atteindre 80k€ total. Le variable représente 20-30% du package dans les meilleurs cas."
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
            Découvrez les fourchettes salariales précises, compétences valorisantes et conseils carrière pour chaque métier GTB.
          </p>

          {/* Technicien GTB */}
          <div className="not-prose my-10" id="technicien-gtb">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4">
                <h3 className="text-2xl font-bold text-white">Technicien GTB</h3>
                <p className="text-blue-50 text-sm mt-1">Le pilier de la maintenance et de l'exploitation</p>
              </div>
              <CardContent className="p-6 space-y-6">
                {/* Salaires */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Fourchettes salariales (Brut annuel fixe - IDF)
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { exp: "0-2 ans", range: "28-32k€", median: "30k€" },
                      { exp: "3-5 ans", range: "32-36k€", median: "34k€" },
                      { exp: "6-10 ans", range: "36-42k€", median: "39k€" },
                      { exp: "10+ ans", range: "40-48k€", median: "44k€" }
                    ].map((salary) => (
                      <div key={salary.exp} className="p-3 rounded-lg border bg-muted/30">
                        <div className="text-xs text-muted-foreground mb-1">{salary.exp}</div>
                        <div className="font-bold text-lg">{salary.range}</div>
                        <div className="text-xs text-muted-foreground">Médiane: {salary.median}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Missions */}
                <div>
                  <h4 className="font-semibold mb-3">Missions principales</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> Maintenance préventive et curative des installations GTB/GTC</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Paramétrage des automates et supervision</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Détection et résolution des dysfonctionnements</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Interface clients et rédaction de rapports</li>
                  </ul>
                </div>

                {/* Compétences */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Compétences valorisantes
                  </h4>
                  <div className="grid gap-2 text-sm">
                    <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                      <span>Protocoles : BACnet, Modbus, KNX</span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">+8%</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                      <span>Supervision : Niagara N4, Desigo CC</span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">+12%</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                      <span>Habilitations : BR, B2V, H0V</span>
                      <span className="text-muted-foreground">Indispensable</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                      <span>Anglais technique</span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">+5%</span>
                    </div>
                  </div>
                </div>

                {/* Écarts géographiques */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Écarts géographiques (profil 3-5 ans)
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                      <span>La Défense (92)</span>
                      <span className="font-bold text-primary">38k€ ⭐</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                      <span>Paris (75)</span>
                      <span className="font-semibold">34k€</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                      <span>Seine-Saint-Denis (93)</span>
                      <span className="font-semibold">32k€</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                      <span>Val-d'Oise (95)</span>
                      <span className="font-semibold">31k€</span>
                    </div>
                  </div>
                </div>

                {/* Conseil */}
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Conseil carrière</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Si vous recherchez la polyvalence et une progression solide, démarrez en PME (0-3 ans) pour toucher à tout, puis basculez en grand groupe (3-7 ans) : vous gagnerez +20-30% et accéderez à des installations premium qui boosteront votre CV.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Automaticien - VERT au lieu de VIOLET */}
          <div className="not-prose my-10" id="automaticien-gtb">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4">
                <h3 className="text-2xl font-bold text-white">Automaticien / Programmeur GTB</h3>
                <p className="text-emerald-50 text-sm mt-1">L'architecte des systèmes intelligents</p>
              </div>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Fourchettes salariales (Brut annuel fixe - IDF)
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { exp: "0-2 ans", range: "32-38k€", median: "35k€" },
                      { exp: "3-5 ans", range: "36-42k€", median: "39k€" },
                      { exp: "6-10 ans", range: "42-50k€", median: "46k€" },
                      { exp: "10+ ans", range: "48-58k€", median: "53k€" }
                    ].map((salary) => (
                      <div key={salary.exp} className="p-3 rounded-lg border bg-muted/30">
                        <div className="text-xs text-muted-foreground mb-1">{salary.exp}</div>
                        <div className="font-bold text-lg">{salary.range}</div>
                        <div className="text-xs text-muted-foreground">Médiane: {salary.median}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Missions principales</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> Programmation et développement applications GTB/GTC</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Configuration automates et régulateurs</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Création interfaces supervision (HMI)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Intégration multi-protocoles (BACnet, Modbus, LON)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Compétences valorisantes
                  </h4>
                  <div className="grid gap-2 text-sm">
                    <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                      <span>Multi-protocoles : BACnet/IP, Modbus, KNX, LON</span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">+15%</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                      <span>Programmation : Niagara AX/N4, Desigo, Tridium</span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">+18%</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                      <span>Cybersécurité : ISO 27001, IEC 62443</span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">+20%</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                      <span>IoT/Cloud : APIs REST, MQTT</span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">+25%</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800">
                  <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">💡 Conseil carrière</h4>
                  <p className="text-sm text-emerald-800 dark:text-emerald-200">
                    Si vous voulez devenir expert technique recherché, combinez Niagara + cybersécurité OT : vous atteindrez le top 5% du marché et pourrez viser 50k€+ dès 5 ans d'expérience, avec un fort pouvoir de négociation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chef de Projet */}
          <div className="not-prose my-10" id="chef-projet-gtb">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4">
                <h3 className="text-2xl font-bold text-white">Chef de Projet GTB</h3>
                <p className="text-green-50 text-sm mt-1">Le stratège de la performance énergétique</p>
              </div>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Fourchettes salariales (Brut annuel fixe - IDF)
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { exp: "0-2 ans", range: "40-48k€", median: "44k€" },
                      { exp: "3-5 ans", range: "45-55k€", median: "50k€" },
                      { exp: "6-10 ans", range: "52-68k€", median: "60k€" },
                      { exp: "10+ ans", range: "65-85k€", median: "75k€" }
                    ].map((salary) => (
                      <div key={salary.exp} className="p-3 rounded-lg border bg-muted/30">
                        <div className="text-xs text-muted-foreground mb-1">{salary.exp}</div>
                        <div className="font-bold text-lg">{salary.range}</div>
                        <div className="text-xs text-muted-foreground">Médiane: {salary.median}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Missions principales</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> Conception et pilotage projets GTB (études, chiffrages)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Management équipes pluridisciplinaires</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Interface maîtrise d'œuvre et bureaux d'études</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Optimisation énergétique et reporting RSE</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Compétences valorisantes
                  </h4>
                  <div className="grid gap-2 text-sm">
                    <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                      <span>Management : 5+ personnes</span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">+12%</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                      <span>Certifications énergétiques : CMVP, CEE</span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">+15%</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                      <span>Réglementaire : RE2020, décret tertiaire</span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">+10%</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                      <span>Multi-sites : 10+ bâtiments</span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">+18%</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">💡 Conseil carrière</h4>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Si vous visez la différenciation et des projets à forte valeur ajoutée, spécialisez-vous sur les enjeux réglementaires (RE2020 + décret tertiaire + certifications énergétiques) : vous deviendrez incontournable et pourrez négocier +15-20% de prime.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 id="negociation">Comment négocier votre salaire en GTB</h2>

          <p>
            La négociation salariale est un exercice délicat mais essentiel. Voici les 5 étapes pour maximiser vos chances de succès.
          </p>

          <div className="not-prose space-y-6 my-8">
            {[
              {
                number: "1",
                title: "Préparez vos chiffres",
                content: "Consultez ce baromètre + 2-3 autres sources (Glassdoor, LinkedIn Salary). Identifiez votre fourchette réaliste selon votre profil. Préparez 3 arguments factuels : certifications, projets menés, résultats chiffrés.",
                example: "D'après le baromètre EcoMakers, un technicien certifié Niagara avec 5 ans d'expérience à La Défense est rémunéré entre 48 et 52k€. Je vise 50k€."
              },
              {
                number: "2",
                title: "Timing optimal",
                content: "À l'embauche : négociez APRÈS l'offre écrite (vous avez le levier maximal). En poste : lors de l'entretien annuel + après un succès projet visible. Mobilité externe : visez +15-20% minimum."
              },
              {
                number: "3",
                title: "Ayez un plan B crédible",
                content: "Autre opportunité concrète en cours de discussion, formation en vue, ou projet freelance. Important : le plan B doit être RÉEL, pas inventé. Les recruteurs sentent le bluff."
              },
              {
                number: "4",
                title: "Parlez valeur, pas besoin",
                content: "❌ 'J'ai besoin de 50k€ pour mon crédit immobilier' ✅ 'J'apporte 5 ans d'expérience sur Niagara, 3 projets >500k€ livrés, et une certification cybersécurité OT'",
                highlight: "Vous êtes payé pour ce que vous APPORTEZ, pas pour ce dont vous AVEZ BESOIN."
              },
              {
                number: "5",
                title: "Acceptez les compromis créatifs",
                content: "Si le fixe est bloqué, négociez : prime d'intégration (3-5k€), formation financée (certification = 2 500€), jours de télétravail supplémentaires, jours de congés additionnels, ou véhicule de fonction."
              }
            ].map((step) => (
              <Card key={step.number} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">{step.content}</p>
                      {step.example && (
                        <div className="mt-3 p-3 rounded bg-muted/50 text-sm italic">
                          Exemple : "{step.example}"
                        </div>
                      )}
                      {step.highlight && (
                        <div className="mt-3 p-3 rounded bg-primary/10 text-sm font-medium">
                          {step.highlight}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 id="tendances-2026">Tendances 2026 : Ce qui va changer</h2>

          <p>
            Le marché GTB est en pleine transformation. Voici les 5 tendances qui vont impacter vos salaires et votre carrière en 2026.
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
            {[
              {
                title: "Pénurie de talents = Inflation salariale",
                prediction: "+8-12% d'augmentation des salaires GTB",
                cause: "Départs à la retraite + explosion de la demande (décret tertiaire, RE2020)",
                impact: "Les juniors seront courtisés, les seniors en position ultra-forte"
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

          <div className="not-prose my-10">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Fourchettes salariales prévisionnelles 2026</h3>
                <p className="text-sm text-muted-foreground mb-4">Estimation tous métiers GTB confondus</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr className="border-b">
                        <th className="px-4 py-2 text-left font-semibold">Niveau</th>
                        <th className="px-4 py-2 text-center font-semibold">2025 (actuel)</th>
                        <th className="px-4 py-2 text-center font-semibold">2026 (prévision)</th>
                        <th className="px-4 py-2 text-center font-semibold">Évolution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="px-4 py-2">Junior (0-3 ans)</td>
                        <td className="px-4 py-2 text-center">35-42k€</td>
                        <td className="px-4 py-2 text-center font-semibold">38-46k€</td>
                        <td className="px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">+8-10%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Confirmé (3-7 ans)</td>
                        <td className="px-4 py-2 text-center">42-55k€</td>
                        <td className="px-4 py-2 text-center font-semibold">46-60k€</td>
                        <td className="px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">+10%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Senior (7+ ans)</td>
                        <td className="px-4 py-2 text-center">55-75k€</td>
                        <td className="px-4 py-2 text-center font-semibold">62-85k€</td>
                        <td className="px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">+12%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
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
                  <li>• 755 offres GTB IDF</li>
                  <li>• Période : oct-nov 2025</li>
                  <li>• Sources : LinkedIn, Indeed, France Travail</li>
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
            <li><strong>Fourchette :</strong> 80% des salaires observés (hors 10% minimum et 10% maximum)</li>
            <li><strong>Médiane :</strong> 50% des salaires en-dessous, 50% au-dessus</li>
            <li><strong>Brut annuel fixe :</strong> Sur 12 mois, HORS variable et avantages</li>
            <li><strong>Package :</strong> Fixe + variable + avantages (véhicule, primes, etc.)</li>
          </ul>

          <h3>Limites</h3>

          <p className="text-sm text-muted-foreground">
            Échantillon de 755 offres représentant environ 20-25% du marché annuel. Les offres sans mention de salaire (68%) ne sont pas incluses dans les fourchettes. Les données sont collectées sur octobre-novembre 2025 et peuvent varier selon la saisonnalité.
          </p>

        </div>
      </div>
    </article>
  )
}
