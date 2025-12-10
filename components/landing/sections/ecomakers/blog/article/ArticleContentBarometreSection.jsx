import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  TrendingUp, 
  MapPin, 
  Award, 
  Briefcase, 
  Target, 
  AlertCircle, 
  CheckCircle, 
  Euro, 
  Clock, 
  Shield, 
  Users, 
  Building2, 
  GraduationCap,
  Zap
} from "lucide-react"

export default function ArticleContentBarometreSection() {
  return (
    <article className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:scroll-mt-20">
          
          {/* Intro */}
          <div className="rounded-lg border bg-muted/50 p-6 not-prose mb-12">
            <p className="text-muted-foreground mb-4">
              72% des offres GTB ne mentionnent pas le salaire. Cette opacité pénalise autant les candidats (qui sous-négocient) que les recruteurs (qui perdent des talents). Ce baromètre apporte de la transparence sur un marché en forte tension, où les compétences GTB sont de plus en plus recherchées.
            </p>
            <p className="text-muted-foreground">
              Basé sur 755 offres d&apos;emploi réelles collectées en Île-de-France (octobre-novembre 2025), ce baromètre croise données terrain, études de référence (Hays, PageGroup, Robert Half) et retours de professionnels GTB pour vous donner une vision réaliste et actuelle du marché.
            </p>
          </div>

          <h2 id="vue-densemble">1. Vue d&apos;ensemble du marché</h2>

          <h3 id="fourchettes-salariales">Fourchettes salariales par métier et expérience</h3>

          <p className="lead">
            Voici les fourchettes salariales observées sur le marché GTB en Île-de-France, segmentées par niveau d&apos;expérience. Ces données représentent 80% des salaires observés (hors 10% les plus bas et 10% les plus hauts).
          </p>

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
                        <td className="px-4 py-3 font-medium">Chargé d&apos;Affaires GTB</td>
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
                  <p className="mb-1"><strong>Légende :</strong> Fourchettes représentant 80% des salaires observés. Brut annuel fixe sur 12 mois, hors part variable et avantages.</p>
                  <p>Source : Synthèse études de référence (Hays, PageGroup, Robert Half 2024-2025) croisée avec données terrain EcoMakers.</p>
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
                  <li>• Les avantages (véhicule, tickets restaurant, télétravail, primes) peuvent ajouter 3k€ à 8k€</li>
                  <li>• Les certifications (Niagara, Desigo, Tridium) peuvent augmenter le salaire de 10% à 20%</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 id="insights-cles">Ce que révèlent les données</h3>

          <div className="not-prose grid gap-6 my-8">
            {[
              {
                icon: MapPin,
                title: "La Défense (92) paie 20% de plus que la moyenne IDF",
                description: "Un technicien GTB 3-5 ans gagne 38k€ à La Défense vs 34k€ ailleurs en IDF. Les grandes entreprises du tertiaire premium ont des budgets plus élevés et des exigences strictes.",
                conseil: "Si vous visez La Défense : anticipez les contraintes (horaires étendus, astreintes) et négociez en conséquence."
              },
              {
                icon: Award,
                title: "La certification Niagara N4 rapporte +7k€ à +12k€/an",
                description: "Un automaticien certifié Niagara N4 gagne en moyenne 46k€ (3-5 ans) vs 39k€ sans certification. Moins de 500 certifiés en France créent une prime salariale importante.",
                conseil: "Retour sur investissement : 3-6 mois. Formation disponible chez Tridium ou certains intégrateurs."
              },
              {
                icon: TrendingUp,
                title: "Les profils commerciaux peuvent gagner +50% avec le variable",
                description: "Un ingénieur commercial 6-10 ans affiche 55k€ de fixe, mais peut atteindre 80k€ total. Le variable représente 20-30% du package.",
                conseil: "Négociez les modalités du variable : objectifs réalistes, paliers progressifs, transparence sur le calcul."
              },
              {
                icon: Building2,
                title: "Les grands groupes paient mieux... mais pas pour tous les postes",
                description: "Grands groupes : salaires +15-25% pour techniciens/automaticiens. PME/ETI restent compétitives pour chargés d'affaires et chefs de projet.",
                conseil: "Techniciens/Automaticiens → Visez les grands groupes. Chargés d'affaires/Chefs de projet → Comparez aussi les PME."
              },
              {
                icon: Shield,
                title: "Cybersécurité GTB : la compétence qui explose (+20-25%)",
                description: "Les profils maîtrisant cybersécurité GTB (ISO 27001, IEC 62443) négocient des salaires 20-25% supérieurs. La demande explose.",
                conseil: "Formation prioritaire pour 2025-2026. Profils certifiés = top 5% du marché."
              }
            ].map((insight, index) => (
              <Card key={index} className="overflow-hidden hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <insight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{insight.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{insight.description}</p>
                      <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                        <p className="text-sm"><span className="font-semibold text-primary">Conseil :</span> {insight.conseil}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 id="fiches-metiers">2. Fiches métiers détaillées</h2>

          <p>
            Découvrez les fourchettes salariales précises par niveau d&apos;expérience, les missions, les compétences valorisantes et les conseils carrière pour chaque métier GTB.
          </p>


          {/* TECHNICIEN GTB */}
          <div className="not-prose my-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Technicien GTB</h3>
                <p className="text-white/90 text-sm mt-1">Le pilier de la maintenance et de l&apos;exploitation</p>
              </div>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Euro className="h-5 w-5 text-primary" />
                    Fourchettes salariales (Brut annuel fixe - IDF)
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-muted/50">
                        <tr className="border-b">
                          <th className="px-3 py-2 text-left font-semibold">Expérience</th>
                          <th className="px-3 py-2 text-center font-semibold">Fourchette</th>
                          <th className="px-3 py-2 text-center font-semibold">Médiane</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr><td className="px-3 py-2">0-2 ans</td><td className="px-3 py-2 text-center">28-32k€</td><td className="px-3 py-2 text-center font-semibold text-primary">30k€</td></tr>
                        <tr><td className="px-3 py-2">3-5 ans</td><td className="px-3 py-2 text-center">32-36k€</td><td className="px-3 py-2 text-center font-semibold text-primary">34k€</td></tr>
                        <tr><td className="px-3 py-2">6-10 ans</td><td className="px-3 py-2 text-center">36-42k€</td><td className="px-3 py-2 text-center font-semibold text-primary">39k€</td></tr>
                        <tr><td className="px-3 py-2">10+ ans</td><td className="px-3 py-2 text-center">40-48k€</td><td className="px-3 py-2 text-center font-semibold text-primary">44k€</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Missions principales</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> Maintenance préventive et curative des installations GTB/GTC</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Paramétrage des automates et supervision</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Détection et résolution des dysfonctionnements</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Interface clients et rédaction de rapports</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Compétences valorisantes</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="p-2 rounded bg-muted/30"><span className="font-medium">Protocoles :</span> BACnet, Modbus, KNX <span className="text-primary font-semibold">(+8%)</span></div>
                    <div className="p-2 rounded bg-muted/30"><span className="font-medium">Supervision :</span> Niagara N4, Desigo CC <span className="text-primary font-semibold">(+12%)</span></div>
                    <div className="p-2 rounded bg-muted/30"><span className="font-medium">Habilitations :</span> BR, B2V, H0V</div>
                    <div className="p-2 rounded bg-muted/30"><span className="font-medium">Langues :</span> Anglais technique <span className="text-primary font-semibold">(+5%)</span></div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Conseil carrière</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Démarrez en PME (0-3 ans) pour toucher à tout, puis basculez en grand groupe (3-7 ans) : vous gagnerez +20-30% et accéderez à des installations premium.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AUTOMATICIEN */}
          <div className="not-prose my-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Automaticien / Programmeur GTB</h3>
                <p className="text-white/90 text-sm mt-1">L&apos;architecte des systèmes intelligents</p>
              </div>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Euro className="h-5 w-5 text-primary" />
                    Fourchettes salariales (Brut annuel fixe - IDF)
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-muted/50">
                        <tr className="border-b">
                          <th className="px-3 py-2 text-left font-semibold">Expérience</th>
                          <th className="px-3 py-2 text-center font-semibold">Fourchette</th>
                          <th className="px-3 py-2 text-center font-semibold">Médiane</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr><td className="px-3 py-2">0-2 ans</td><td className="px-3 py-2 text-center">32-38k€</td><td className="px-3 py-2 text-center font-semibold text-primary">35k€</td></tr>
                        <tr><td className="px-3 py-2">3-5 ans</td><td className="px-3 py-2 text-center">36-42k€</td><td className="px-3 py-2 text-center font-semibold text-primary">39k€</td></tr>
                        <tr><td className="px-3 py-2">6-10 ans</td><td className="px-3 py-2 text-center">42-50k€</td><td className="px-3 py-2 text-center font-semibold text-primary">46k€</td></tr>
                        <tr><td className="px-3 py-2">10+ ans</td><td className="px-3 py-2 text-center">48-58k€</td><td className="px-3 py-2 text-center font-semibold text-primary">53k€</td></tr>
                      </tbody>
                    </table>
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
                  <h4 className="font-semibold mb-3">Compétences valorisantes</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="p-2 rounded bg-muted/30"><span className="font-medium">Multi-protocoles :</span> BACnet/IP, Modbus TCP <span className="text-primary font-semibold">(+15%)</span></div>
                    <div className="p-2 rounded bg-muted/30"><span className="font-medium">Programmation :</span> Niagara N4, Desigo <span className="text-primary font-semibold">(+18%)</span></div>
                    <div className="p-2 rounded bg-muted/30"><span className="font-medium">Cybersécurité :</span> ISO 27001, IEC 62443 <span className="text-primary font-semibold">(+20%)</span></div>
                    <div className="p-2 rounded bg-muted/30"><span className="font-medium">IoT/Cloud :</span> APIs REST, MQTT <span className="text-primary font-semibold">(+25%)</span></div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Conseil carrière</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Combinez Niagara + cybersécurité OT : vous atteindrez le top 5% du marché et pourrez viser 50k€+ dès 5 ans d&apos;expérience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CHARGÉ D'AFFAIRES */}
          <div className="not-prose my-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Chargé d&apos;Affaires GTB</h3>
                <p className="text-white/90 text-sm mt-1">Le chef d&apos;orchestre technique et commercial</p>
              </div>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Euro className="h-5 w-5 text-primary" />
                    Fourchettes salariales (Brut annuel fixe - IDF)
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-muted/50">
                        <tr className="border-b">
                          <th className="px-3 py-2 text-left font-semibold">Expérience</th>
                          <th className="px-3 py-2 text-center font-semibold">Fourchette</th>
                          <th className="px-3 py-2 text-center font-semibold">Médiane</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr><td className="px-3 py-2">0-2 ans</td><td className="px-3 py-2 text-center">38-45k€</td><td className="px-3 py-2 text-center font-semibold text-primary">42k€</td></tr>
                        <tr><td className="px-3 py-2">3-5 ans</td><td className="px-3 py-2 text-center">42-52k€</td><td className="px-3 py-2 text-center font-semibold text-primary">48k€</td></tr>
                        <tr><td className="px-3 py-2">6-10 ans</td><td className="px-3 py-2 text-center">50-65k€</td><td className="px-3 py-2 text-center font-semibold text-primary">58k€</td></tr>
                        <tr><td className="px-3 py-2">10+ ans</td><td className="px-3 py-2 text-center">60-80k€</td><td className="px-3 py-2 text-center font-semibold text-primary">70k€</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Missions principales</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> Pilotage projets GTB A-Z (chiffrage, planification, exécution)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Gestion relation client et sous-traitants</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Coordination équipes techniques</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Suivi budgétaire et rentabilité chantiers</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
                  <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">💡 Conseil carrière</h4>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    Si vous êtes à moins de 50k€ avec 3+ ans d&apos;expérience en IDF, vous êtes objectivement sous-payé. Négociez +10-15% ou changez d&apos;employeur.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CHEF DE PROJET */}
          <div className="not-prose my-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Chef de Projet GTB</h3>
                <p className="text-white/90 text-sm mt-1">Le stratège de la performance énergétique</p>
              </div>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Euro className="h-5 w-5 text-primary" />
                    Fourchettes salariales (Brut annuel fixe - IDF)
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-muted/50">
                        <tr className="border-b">
                          <th className="px-3 py-2 text-left font-semibold">Expérience</th>
                          <th className="px-3 py-2 text-center font-semibold">Fourchette</th>
                          <th className="px-3 py-2 text-center font-semibold">Médiane</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr><td className="px-3 py-2">0-2 ans</td><td className="px-3 py-2 text-center">40-48k€</td><td className="px-3 py-2 text-center font-semibold text-primary">44k€</td></tr>
                        <tr><td className="px-3 py-2">3-5 ans</td><td className="px-3 py-2 text-center">45-55k€</td><td className="px-3 py-2 text-center font-semibold text-primary">50k€</td></tr>
                        <tr><td className="px-3 py-2">6-10 ans</td><td className="px-3 py-2 text-center">52-68k€</td><td className="px-3 py-2 text-center font-semibold text-primary">60k€</td></tr>
                        <tr><td className="px-3 py-2">10+ ans</td><td className="px-3 py-2 text-center">65-85k€</td><td className="px-3 py-2 text-center font-semibold text-primary">75k€</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Missions principales</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> Conception et pilotage projets GTB (études, chiffrages)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Management équipes pluridisciplinaires</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Interface maîtrise d&apos;œuvre et bureaux d&apos;études</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Optimisation énergétique et reporting RSE</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Conseil carrière</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Spécialisez-vous sur les enjeux réglementaires (RE2020 + décret tertiaire + certifications énergétiques) pour négocier +15-20% de prime.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* INGÉNIEUR COMMERCIAL */}
          <div className="not-prose my-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Ingénieur Commercial GTB</h3>
                <p className="text-white/90 text-sm mt-1">Le développeur de business technique</p>
              </div>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Euro className="h-5 w-5 text-primary" />
                    Fourchettes salariales (Brut annuel fixe - IDF)
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-muted/50">
                        <tr className="border-b">
                          <th className="px-3 py-2 text-left font-semibold">Expérience</th>
                          <th className="px-3 py-2 text-center font-semibold">Fourchette</th>
                          <th className="px-3 py-2 text-center font-semibold">Médiane</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr><td className="px-3 py-2">0-2 ans</td><td className="px-3 py-2 text-center">35-42k€</td><td className="px-3 py-2 text-center font-semibold text-primary">39k€</td></tr>
                        <tr><td className="px-3 py-2">3-5 ans</td><td className="px-3 py-2 text-center">40-50k€</td><td className="px-3 py-2 text-center font-semibold text-primary">45k€</td></tr>
                        <tr><td className="px-3 py-2">6-10 ans</td><td className="px-3 py-2 text-center">48-62k€</td><td className="px-3 py-2 text-center font-semibold text-primary">55k€</td></tr>
                        <tr><td className="px-3 py-2">10+ ans</td><td className="px-3 py-2 text-center">55-75k€</td><td className="px-3 py-2 text-center font-semibold text-primary">65k€</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 text-sm">
                    <strong className="text-green-900 dark:text-green-100">Package total avec variable :</strong>
                    <span className="ml-2 text-green-800 dark:text-green-200">Peut atteindre 80-100k€ selon performance</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Missions principales</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> Prospection et développement portefeuille clients (BtoB)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Détection besoins et conception solutions GTB/GTC</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Réponse appels d&apos;offres et négociation</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Suivi relation client et fidélisation</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
                  <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">💡 Conseil carrière</h4>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    Ne signez jamais sans avoir négocié les modalités du variable : objectifs réalistes, paliers progressifs, transparence totale sur le calcul.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RESPONSABLE TECHNIQUE */}
          <div className="not-prose my-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Responsable Technique / Directeur Exploitation</h3>
                <p className="text-white/90 text-sm mt-1">Le leader de la performance opérationnelle</p>
              </div>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Euro className="h-5 w-5 text-primary" />
                    Fourchettes salariales (Brut annuel fixe - IDF)
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-muted/50">
                        <tr className="border-b">
                          <th className="px-3 py-2 text-left font-semibold">Expérience</th>
                          <th className="px-3 py-2 text-center font-semibold">Fourchette</th>
                          <th className="px-3 py-2 text-center font-semibold">Médiane</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr><td className="px-3 py-2">0-2 ans</td><td className="px-3 py-2 text-center">45-55k€</td><td className="px-3 py-2 text-center font-semibold text-primary">50k€</td></tr>
                        <tr><td className="px-3 py-2">3-5 ans</td><td className="px-3 py-2 text-center">50-62k€</td><td className="px-3 py-2 text-center font-semibold text-primary">56k€</td></tr>
                        <tr><td className="px-3 py-2">6-10 ans</td><td className="px-3 py-2 text-center">58-75k€</td><td className="px-3 py-2 text-center font-semibold text-primary">67k€</td></tr>
                        <tr><td className="px-3 py-2">10+ ans</td><td className="px-3 py-2 text-center">70-95k€</td><td className="px-3 py-2 text-center font-semibold text-primary">83k€</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Missions principales</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> Management équipes techniques (5 à 50+ personnes)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Pilotage activité maintenance et exploitation GTB</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Définition stratégie technique et investissements</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Gestion budgétaire et P&L</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Conseil carrière</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Pour viser 80k€+, développez la triple casquette : management d&apos;équipe (20+ personnes), pilotage P&L (plusieurs M€), et maîtrise réglementaire.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>


          {/* SECTION 3 : ANALYSES COMPLÉMENTAIRES */}
          <h2 id="analyses-complementaires">3. Analyses complémentaires</h2>

          <h3 id="certifications-roi">Top 5 des certifications par ROI</h3>

          <div className="not-prose my-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
                <h4 className="text-lg font-bold text-white">🏅 Certifications classées par retour sur investissement</h4>
              </div>
              <CardContent className="p-6 space-y-4">
                {[
                  { rank: 1, name: "Niagara N4 (Tridium)", gain: "+7k€ à +12k€/an", duree: "5-10 jours", cout: "2-3k€", roi: "3-6 mois", detail: "Standard GTB moderne. Moins de 500 certifiés en France." },
                  { rank: 2, name: "Cybersécurité GTB (ISO 27001, IEC 62443)", gain: "+15-20k€/an", duree: "15-20 jours", cout: "4-6k€", roi: "6-12 mois", detail: "Demande explosive, profils certifiés = top 5% du marché." },
                  { rank: 3, name: "BIM/Maquette numérique (Revit)", gain: "+8-12k€/an", duree: "10-15 jours", cout: "2-3k€", roi: "6-9 mois", detail: "Obligatoire pour gros chantiers tertiaires." },
                  { rank: 4, name: "Certifications énergétiques (CMVP, CEE)", gain: "+10-15k€/an", duree: "10-12 jours", cout: "2-4k€", roi: "6-12 mois", detail: "Décret tertiaire et RE2020 : critère majeur d'embauche." },
                  { rank: 5, name: "Habilitations électriques étendues (BC, HTA)", gain: "+5-8k€/an", duree: "3-5 jours", cout: "500-1000€", roi: "2-4 mois", detail: "ROI très rapide, investissement faible." }
                ].map((cert) => (
                  <div key={cert.rank} className="p-4 rounded-lg border bg-muted/30">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                        <span className="font-bold text-secondary">{cert.rank}</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold mb-2">{cert.name}</h5>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm mb-2">
                          <div><span className="text-muted-foreground">Gain :</span> <span className="font-semibold text-primary">{cert.gain}</span></div>
                          <div><span className="text-muted-foreground">Durée :</span> {cert.duree}</div>
                          <div><span className="text-muted-foreground">Coût :</span> {cert.cout}</div>
                          <div><span className="text-muted-foreground">ROI :</span> <span className="font-semibold text-primary">{cert.roi}</span></div>
                        </div>
                        <p className="text-sm text-muted-foreground">{cert.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* SECTION 4 : GUIDES PRATIQUES */}
          <h2 id="guides-pratiques">4. Guides pratiques</h2>

          <h3 id="negociation">Comment négocier votre salaire en GTB</h3>

          <div className="not-prose my-8">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    1. Préparez vos chiffres
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> Consultez ce baromètre + 2-3 autres sources (Glassdoor, LinkedIn Salary)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Identifiez votre fourchette réaliste selon votre profil</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Préparez 3 arguments factuels (certifications, projets menés, résultats chiffrés)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    2. Timing optimal
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> <strong>À l&apos;embauche :</strong> Négociez APRÈS l&apos;offre écrite</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> <strong>En poste :</strong> Lors de l&apos;entretien annuel + après un succès projet</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> <strong>Mobilité externe :</strong> Visez +15-20% minimum</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    3. Parlez valeur, pas besoin
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
                      <p className="font-semibold text-red-900 dark:text-red-100 mb-1">❌ À éviter</p>
                      <p className="text-red-800 dark:text-red-200">&quot;J&apos;ai besoin de 50k€ pour mon crédit&quot;</p>
                    </div>
                    <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                      <p className="font-semibold text-green-900 dark:text-green-100 mb-1">✅ À dire</p>
                      <p className="text-green-800 dark:text-green-200">&quot;J&apos;apporte 5 ans d&apos;XP sur Niagara, 3 projets livrés&quot;</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    4. Alternatives si fixe bloqué
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    <div className="p-2 rounded bg-muted/30">Prime d&apos;intégration (3-5k€)</div>
                    <div className="p-2 rounded bg-muted/30">Formation financée (Niagara = 2 500€)</div>
                    <div className="p-2 rounded bg-muted/30">Jours télétravail supplémentaires</div>
                    <div className="p-2 rounded bg-muted/30">Jours de congés additionnels</div>
                    <div className="p-2 rounded bg-muted/30">Véhicule de fonction</div>
                    <div className="p-2 rounded bg-muted/30">Indemnité mobilité</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 id="tendances-2026">Tendances 2026 : Ce qui va changer</h3>

          <div className="not-prose grid gap-4 my-8">
            {[
              { icon: TrendingUp, title: "Pénurie de talents = Inflation salariale", prediction: "+8-12% d'augmentation des salaires GTB en 2026", cause: "Départs à la retraite + explosion de la demande", impact: "Les juniors seront courtisés, les seniors en position ultra-forte" },
              { icon: Shield, title: "Cybersécurité OT = Nouvelle norme", prediction: "+40% des offres exigeront compétence cybersécurité", cause: "Réglementation NIS2 + cyberattaques industrielles", impact: "Salaires premium de +20-30% pour profils certifiés" },
              { icon: Zap, title: "IA générative dans la GTB", prediction: "Outils IA pour maintenance prédictive", cause: "ChatGPT-like pour analyse données IoT", impact: "Métiers évoluent vers 'pilote de système assisté par IA'" },
              { icon: Building2, title: "Télétravail hybride = Nouveau standard", prediction: "2-3 jours télétravail/semaine = norme", cause: "Pénurie oblige employeurs à être flexibles", impact: "Mobilité géographique moins bloquante" },
              { icon: Users, title: "Convergence IT/OT", prediction: "Fusion équipes informatique et exploitation GTB", cause: "Digitalisation complète des bâtiments", impact: "Profils hybrides (IT + GTB) à 70-90k€ dès 5 ans d'XP" }
            ].map((trend, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <trend.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{trend.title}</h4>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-medium">Prévision :</span><span className="ml-2 text-muted-foreground">{trend.prediction}</span></div>
                        <div><span className="font-medium">Cause :</span><span className="ml-2 text-muted-foreground">{trend.cause}</span></div>
                        <div><span className="font-medium">Impact :</span><span className="ml-2 text-primary font-semibold">{trend.impact}</span></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tableau prévisionnel 2026 */}
          <div className="not-prose my-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
                <h4 className="text-lg font-bold text-white">Fourchettes salariales prévisionnelles 2026</h4>
              </div>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left font-semibold">Niveau</th>
                        <th className="px-4 py-3 text-center font-semibold">2025 (actuel)</th>
                        <th className="px-4 py-3 text-center font-semibold">2026 (prévision)</th>
                        <th className="px-4 py-3 text-center font-semibold">Évolution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr><td className="px-4 py-3 font-medium">Junior (0-3 ans)</td><td className="px-4 py-3 text-center">35-42k€</td><td className="px-4 py-3 text-center font-semibold">38-46k€</td><td className="px-4 py-3 text-center text-primary font-semibold">+8-10%</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Confirmé (3-7 ans)</td><td className="px-4 py-3 text-center">42-55k€</td><td className="px-4 py-3 text-center font-semibold">46-60k€</td><td className="px-4 py-3 text-center text-primary font-semibold">+10%</td></tr>
                      <tr><td className="px-4 py-3 font-medium">Senior (7+ ans)</td><td className="px-4 py-3 text-center">55-75k€</td><td className="px-4 py-3 text-center font-semibold">62-85k€</td><td className="px-4 py-3 text-center text-primary font-semibold">+12%</td></tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* SECTION 5 : MÉTHODOLOGIE */}
          <h2 id="methodologie">5. Méthodologie</h2>

          <h3>Sources de données</h3>

          <div className="not-prose grid md:grid-cols-3 gap-4 my-6">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">1. Analyse d&apos;offres</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 755 offres GTB IDF collectées</li>
                  <li>• Période : janvier à octobre 2025</li>
                  <li>• Sources : LinkedIn, Indeed, France Travail</li>
                  <li>• 6 métiers analysés</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">2. Données terrain</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Échanges avec professionnels GTB</li>
                  <li>• Retours négociations salariales</li>
                  <li>• Veille marché continue</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">3. Études de référence</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Hays, Robert Half, PageGroup</li>
                  <li>• Données INSEE et DARES</li>
                  <li>• Rapports sectoriels</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3>Définitions clés</h3>

          <ul>
            <li><strong>Fourchette :</strong> 80% des salaires observés (hors 10% min et 10% max)</li>
            <li><strong>Médiane :</strong> 50% des salaires en-dessous, 50% au-dessus</li>
            <li><strong>Brut annuel fixe :</strong> Sur 12 mois, HORS variable et avantages</li>
            <li><strong>Package :</strong> Fixe + variable + avantages (véhicule, primes, etc.)</li>
          </ul>

          <h3>Limites méthodologiques</h3>

          <div className="not-prose my-6 p-4 rounded-lg bg-muted/50 border">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Échantillon :</strong> 755 offres vs 3 000-4 000/an estimées (20-25% du marché)</li>
              <li>• <strong>Biais collecte :</strong> Offres online surreprésentées</li>
              <li>• <strong>Transparence :</strong> 68% des offres sans salaire mentionné</li>
              <li>• <strong>Saisonnalité :</strong> Collecte octobre-novembre</li>
            </ul>
          </div>

          <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Utilisation recommandée</h4>
              <ul className="text-sm space-y-1 text-green-800 dark:text-green-200">
                <li>• Vision réaliste du marché</li>
                <li>• Préparation négociation</li>
                <li>• Benchmark salarial</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Limites</h4>
              <ul className="text-sm space-y-1 text-red-800 dark:text-red-200">
                <li>• Pas une garantie contractuelle</li>
                <li>• Nécessite analyse contexte entreprise</li>
                <li>• Données Île-de-France uniquement</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            <strong>RGPD :</strong> Données issues d&apos;offres publiques, aucune donnée personnelle collectée.
          </p>

          <p className="text-sm text-muted-foreground">
            <strong>Date de publication :</strong> Novembre 2025 | © EcoMakers 2025 - Document partageable avec mention de la source
          </p>

          {/* CTA final */}
          <div className="not-prose my-12 p-6 rounded-lg bg-muted/50 border text-center">
            <p className="font-semibold mb-2">Vous cherchez des opportunités GTB/GTC en Île-de-France ?</p>
            <p className="text-sm text-muted-foreground mb-4">Rejoignez notre réseau et accédez aux meilleures offres du marché</p>
            <Button asChild>
              <Link href="/candidats">Rejoindre le réseau EcoMakers</Link>
            </Button>
          </div>

        </div>
      </div>
    </article>
  )
}
