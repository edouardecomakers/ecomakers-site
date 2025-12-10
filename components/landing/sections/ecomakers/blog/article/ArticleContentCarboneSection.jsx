import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { TrendingUp, MapPin, Award, Briefcase, Target, AlertCircle, Zap, Leaf, CloudOff, RefreshCw } from "lucide-react"

export default function ArticleContentCarboneSection() {
  return (
    <article className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:scroll-mt-20">
          
          {/* Intro */}
          <div className="rounded-lg border bg-muted/50 p-6 not-prose mb-12">
            <p className="text-muted-foreground mb-4">
              Les systèmes GTB sont reconnus pour leurs bénéfices écologiques : économies d'énergie de 20-30%, réduction des émissions CO₂. Mais deux aspects sont moins documentés : l'empreinte carbone initiale du système lui-même, et la grande variabilité des performances selon l'exploitation.
            </p>
            <p className="text-muted-foreground">
              Avant d'économiser le moindre kWh, une installation GTB émet entre 6 et 10 kg de CO₂ par m². Et selon la qualité de l'exploitation, les économies réelles varient de 10% à 28%. Cette dette carbone et cette variabilité soulèvent deux questions : en combien de temps le système devient-il effectivement bénéfique pour le climat ? Et à quelles conditions ?
            </p>
          </div>

          <h2 id="empreinte-cachee">L&apos;empreinte cachée de la GTB</h2>

          <p className="lead">
            Avant d&apos;économiser un seul kWh, une installation GTB émet déjà entre 6 et 10 kg de CO₂ par m² géré. Sur un bâtiment de 5 000 m², cela représente 30 à 50 tonnes de CO₂ — l&apos;équivalent de 200 000 à 330 000 km en voiture thermique.
          </p>

          <div className="not-prose my-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">D&apos;où vient cette empreinte initiale ?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                      <span className="font-bold text-red-600 dark:text-red-400">60-78%</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Fabrication des équipements</h4>
                      <p className="text-sm text-muted-foreground">Capteurs, automates, serveurs, câblage, interfaces. C&apos;est de loin la phase la plus impactante.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/20">
                      <span className="font-bold text-orange-600 dark:text-orange-400">15-25%</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Installation et configuration</h4>
                      <p className="text-sm text-muted-foreground">Transport, main d&apos;œuvre, mise en service, paramétrage initial.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/20">
                      <span className="font-bold text-yellow-600 dark:text-yellow-400">5-10%</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Exploitation</h4>
                      <p className="text-sm text-muted-foreground">Consommation électrique du système lui-même sur sa durée de vie.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="not-prose my-8 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Le chiffre choc</p>
                <p className="text-blue-800 dark:text-blue-200">
                  60-78% de l&apos;empreinte carbone d&apos;une GTB provient de sa fabrication, avant même sa mise en service. C&apos;est pourquoi le dimensionnement au juste nécessaire est crucial : chaque capteur supplémentaire alourdit la dette carbone initiale.
                </p>
              </div>
            </div>
          </div>

          <h2 id="economies-reelles">Les économies réelles : 10-14% ou 22-28% selon l&apos;expertise</h2>

          <p>
            Une GTB permet d&apos;économiser entre 10% et 28% de l&apos;énergie d&apos;un bâtiment. Mais cette fourchette large (du simple au triple !) dépend directement de la qualité de l&apos;exploitation.
          </p>

          <div className="not-prose my-8">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left font-semibold">Scénario</th>
                        <th className="px-4 py-3 text-center font-semibold">Économies</th>
                        <th className="px-4 py-3 text-left font-semibold">Caractéristiques</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">Installation basique</td>
                        <td className="px-4 py-3 text-center font-bold text-orange-600 dark:text-orange-400">10-14%</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Paramètres par défaut, pas de suivi après mise en service</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">Exploitation experte</td>
                        <td className="px-4 py-3 text-center font-bold text-green-600 dark:text-green-400">22-28%</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Optimisation continue, ajustements réguliers, formation, maintenance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <p>
            Sans expertise d&apos;exploitation, une GTB plafonne à 10-14% d&apos;économies. Avec une exploitation experte, elle atteint 22-28%. <strong>L&apos;expertise peut donc doubler les résultats.</strong>
          </p>

          <h3>Exemple concret : Bureau 5 000 m²</h3>

          <p className="text-sm text-muted-foreground">
            Consommation initiale : 150 kWh/m²/an = 750 000 kWh/an (chauffage gaz)
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">Scénario basique (12%)</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Économies : 90 000 kWh/an</li>
                  <li>• CO₂ évité : 20,4 tonnes/an</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">Scénario expert (25%)</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Économies : 187 500 kWh/an</li>
                  <li>• CO₂ évité : 42,6 tonnes/an</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="text-sm italic text-muted-foreground">
            Différence : Plus du double de CO₂ évité, simplement grâce à une meilleure exploitation.
          </p>

          <h2 id="roi-ecologique">Le ROI écologique : quand le système devient-il positif ?</h2>

          <p>
            Le ROI écologique, c&apos;est le temps nécessaire pour que les économies de CO₂ remboursent la dette carbone initiale. Il dépend de deux facteurs critiques : la source d&apos;énergie du bâtiment et la qualité de l&apos;exploitation.
          </p>

          <div className="not-prose my-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">ROI écologique par type de bâtiment</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr className="border-b">
                        <th className="px-4 py-2 text-left font-semibold">Type de bâtiment</th>
                        <th className="px-4 py-2 text-center font-semibold">ROI électricité</th>
                        <th className="px-4 py-2 text-center font-semibold">ROI gaz/fioul</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="px-4 py-2">Bureaux (usage intensif)</td>
                        <td className="px-4 py-2 text-center font-semibold">2-4 ans</td>
                        <td className="px-4 py-2 text-center font-semibold text-green-600 dark:text-green-400">1-2 ans</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Hôpitaux (24/7)</td>
                        <td className="px-4 py-2 text-center font-semibold">3-5 ans</td>
                        <td className="px-4 py-2 text-center font-semibold text-green-600 dark:text-green-400">1,5-2,5 ans</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Écoles (intermittent)</td>
                        <td className="px-4 py-2 text-center font-semibold">4-7 ans</td>
                        <td className="px-4 py-2 text-center font-semibold text-green-600 dark:text-green-400">2-3 ans</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 rounded bg-muted/50 text-xs text-muted-foreground">
                  <strong>Pourquoi ces différences ?</strong> Le facteur carbone de l&apos;électricité en France (0,0213 kg CO₂/kWh) est très bas grâce au nucléaire. Pour le gaz (0,227 kg/kWh), chaque kWh économisé évite 10 fois plus de CO₂.
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 id="impact-metier">Votre impact par métier</h2>

          <p>
            Chaque métier GTB a ses leviers d&apos;action spécifiques. Voici les actions à fort impact, avec les gains mesurables.
          </p>

          <div className="not-prose space-y-6 my-8">
            {/* Technicien GTB */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Technicien GTB</h3>
                <p className="text-blue-50 text-sm mt-1">Impact potentiel : 10-30% d&apos;amélioration</p>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Top 3 actions techniques
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg border bg-muted/30">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">1. Nettoyer les plannings horaires</span>
                        <span className="text-green-600 dark:text-green-400 font-semibold text-sm">5-8%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">70% des bâtiments ont des plannings obsolètes. Audit trimestriel = 2h tous les 3 mois.</p>
                    </div>
                    <div className="p-3 rounded-lg border bg-muted/30">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">2. Optimiser les températures de consigne</span>
                        <span className="text-green-600 dark:text-green-400 font-semibold text-sm">10-15%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Chaque degré = 7% d&apos;économies. Passer de 21°C à 19-20°C hiver / 24°C à 26°C été.</p>
                    </div>
                    <div className="p-3 rounded-lg border bg-muted/30">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">3. Former les utilisateurs finaux</span>
                        <span className="text-green-600 dark:text-green-400 font-semibold text-sm">5-10%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Sessions trimestrielles (30 min). Bonus : -50% de sollicitations inutiles.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Automaticien */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Automaticien</h3>
                <p className="text-emerald-50 text-sm mt-1">Impact potentiel : 15-40% d&apos;amélioration</p>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Top 3 pratiques avancées
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg border bg-muted/30">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">1. Séquencement intelligent CVC</span>
                        <span className="text-green-600 dark:text-green-400 font-semibold text-sm">10-15%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Éviter les gaspillages (préchauffage sans ventilation, coordination chauffage-refroidissement).</p>
                    </div>
                    <div className="p-3 rounded-lg border bg-muted/30">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">2. Free-cooling automatisé</span>
                        <span className="text-green-600 dark:text-green-400 font-semibold text-sm">15-25%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Refroidir gratuitement par air extérieur quand les conditions sont favorables.</p>
                    </div>
                    <div className="p-3 rounded-lg border bg-muted/30">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">3. Protocoles de communication optimisés</span>
                        <span className="text-green-600 dark:text-green-400 font-semibold text-sm">+30-50%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Privilégier Modbus/BACnet (15-20 ans) vs WiFi/Zigbee (5-8 ans). Durée de vie prolongée.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chef de Projet */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Chef de Projet GTB</h3>
                <p className="text-green-50 text-sm mt-1">Impact : Les choix de conception déterminent la performance sur 10-15 ans</p>
              </div>
              <CardContent className="p-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Les 5 questions stratégiques avant tout projet
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-primary">•</span> Le bâtiment a-t-il déjà réalisé l&apos;isolation et l&apos;étanchéité ? (Ne jamais installer GTB avant)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Quel est le ROI écologique projeté avec le bon facteur CO₂ ?</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Les protocoles choisis sont-ils ouverts (BACnet, Modbus) ? (80% minimum)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Prévoit-on un suivi à 12 mois pour éviter l&apos;abandon ? (45% abandonnées sinon)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Le dimensionnement correspond-il aux besoins réels ? (Méthode des 3 questions/capteur)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 id="approches">Approches connectées vs sobres : quelle stratégie choisir ?</h2>

          <p>
            Deux philosophies coexistent dans le monde de la GTB, et contrairement aux idées reçues, aucune n&apos;est meilleure que l&apos;autre dans l&apos;absolu. Tout dépend du contexte.
          </p>

          <div className="not-prose my-8">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left font-semibold">Critère</th>
                        <th className="px-4 py-3 text-center font-semibold">Connectée (high-tech)</th>
                        <th className="px-4 py-3 text-center font-semibold">Sobre (low-tech)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="px-4 py-2 font-medium">Investissement initial</td>
                        <td className="px-4 py-2 text-center">70-120 €/m²</td>
                        <td className="px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">20-50 €/m²</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Empreinte CO₂ initiale</td>
                        <td className="px-4 py-2 text-center">8-10 kg/m²</td>
                        <td className="px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">4-6 kg/m²</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">ROI écologique</td>
                        <td className="px-4 py-2 text-center">4-8 ans (élec)</td>
                        <td className="px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">2-6 ans (élec)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Économies d&apos;énergie</td>
                        <td className="px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">25-40%</td>
                        <td className="px-4 py-2 text-center">15-25%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Durée de vie système</td>
                        <td className="px-4 py-2 text-center">6-10 ans</td>
                        <td className="px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">10-15 ans</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Complexité exploitation</td>
                        <td className="px-4 py-2 text-center">Élevée</td>
                        <td className="px-4 py-2 text-center text-green-600 dark:text-green-400 font-semibold">Faible</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3>Quand privilégier quelle approche ?</h3>

          <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                  Approche connectée
                </h4>
                <p className="text-sm font-medium mb-3">Privilégier pour :</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Grands bâtiments &gt;10 000 m²</li>
                  <li>• Usage intensif (bureaux, hôpitaux)</li>
                  <li>• Process complexes sensibles</li>
                  <li>• Équipes avec compétences data science</li>
                </ul>
                <p className="text-xs mt-3 text-muted-foreground italic">Ex : Sièges sociaux, data centers, centres commerciaux</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-green-500" />
                  Approche sobre
                </h4>
                <p className="text-sm font-medium mb-3">Privilégier pour :</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• PME et bâtiments &lt;5 000 m²</li>
                  <li>• Budget contraint (20-50 €/m²)</li>
                  <li>• Pas d&apos;équipe technique dédiée</li>
                  <li>• Rénovations avec contraintes</li>
                </ul>
                <p className="text-xs mt-3 text-muted-foreground italic">Ex : Bureaux PME, écoles, commerces, mairies</p>
              </CardContent>
            </Card>
          </div>

          <h2 id="pieges">Les 4 pièges qui annulent les gains</h2>

          <p>
            Même avec un système bien dimensionné, 4 pièges peuvent annuler une partie ou la totalité des gains écologiques.
          </p>

          <div className="not-prose space-y-6 my-8">
            {[
              {
                icon: CloudOff,
                title: "Le cloud mal configuré",
                problem: "Surdimensionnement des serveurs, stockage illimité sans purge, transferts excessifs.",
                solution: "Dimensionner au juste nécessaire, purge automatique, compression intelligente.",
                impact: "Cloud optimisé = -80% d'empreinte (de 280 kg à 55 kg CO₂/an)"
              },
              {
                icon: Target,
                title: "La sur-capteurisation IoT",
                problem: "60-78% de l'empreinte d'un capteur = fabrication. Trop de capteurs = dette carbone excessive.",
                solution: "Méthode des 3 questions avant chaque capteur : Est-ce qu'on va l'exploiter ? >100 kWh/an économisés ? Peut-on faire sans ?",
                impact: "Densité max : 1 capteur/15-25 m² (bureaux)"
              },
              {
                icon: RefreshCw,
                title: "L'obsolescence accélérée",
                problem: "Durée théorique 15-20 ans, durée réelle 8-10 ans. Protocoles propriétaires obsolètes après 10 ans.",
                solution: "Protocoles ouverts obligatoires (BACnet, Modbus), architecture modulaire (renouveler serveurs, garder capteurs).",
                impact: "+30-50% de durée de vie avec protocoles ouverts"
              },
              {
                icon: AlertCircle,
                title: "L'effet rebond (abandon)",
                problem: "45% des GTB ne sont plus exploitées activement après 3 ans. Économies chutent de 30-50%.",
                solution: "Formation continue + suivi mensuel KPI + audit annuel + budget maintenance 3-5%/an.",
                impact: "Avec suivi : économies maintenues à 90-95% sur 10 ans"
              }
            ].map((piege, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                      <piege.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Piège {index + 1} : {piege.title}</h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Problème :</span>
                          <span className="ml-2 text-muted-foreground">{piege.problem}</span>
                        </div>
                        <div>
                          <span className="font-medium">Solution :</span>
                          <span className="ml-2 text-muted-foreground">{piege.solution}</span>
                        </div>
                        <div className="mt-3 p-3 rounded bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                          <span className="font-medium text-green-900 dark:text-green-100">Impact : </span>
                          <span className="text-green-800 dark:text-green-200">{piege.impact}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 id="conclusion">Conclusion</h2>

          <p>
            Alors, la GTB contribue-t-elle vraiment à la lutte contre le changement climatique ?
          </p>

          <p>
            <strong>Oui, à condition que :</strong>
          </p>

          <ul>
            <li>Le système soit bien dimensionné (pas de sur-équipement)</li>
            <li>L&apos;exploitation soit experte et rigoureuse (sans suivi, 45% abandonnées après 3 ans)</li>
            <li>Les protocoles soient ouverts (BACnet, Modbus prolongent la durée de vie de 30-50%)</li>
            <li>Le suivi soit maintenu dans le temps (formation, maintenance, audits)</li>
          </ul>

          <p>
            Quand ces conditions sont réunies, une GTB permet d&apos;économiser 15 à 28% de l&apos;énergie d&apos;un bâtiment, d&apos;atteindre le point mort écologique en 2-7 ans (électricité) ou 1-3 ans (gaz/fioul), et d&apos;éviter des dizaines de tonnes de CO₂ sur 10-15 ans.
          </p>

          <div className="not-prose my-10">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-6">
                <h3 className="text-2xl font-bold text-white mb-4">Les chiffres à retenir</h3>
                <div className="grid md:grid-cols-2 gap-4 text-white">
                  <div>
                    <div className="text-3xl font-bold mb-1">6-10 kg CO₂/m²</div>
                    <div className="text-green-50 text-sm">Empreinte initiale (60-78% = fabrication)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">10-14% → 22-28%</div>
                    <div className="text-green-50 text-sm">Économies : basique → expert (x2)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">2-7 ans</div>
                    <div className="text-green-50 text-sm">ROI écologique (élec France)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">45%</div>
                    <div className="text-green-50 text-sm">Taux d&apos;abandon après 3 ans</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="not-prose my-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-lg mb-3">Votre contribution est mesurable</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Les professionnels GTB ont un rôle concret à jouer dans la transition énergétique. Votre expertise fait la différence entre un système qui économise 10% ou 28%, un ROI de 2 ans ou 7 ans, un système abandonné après 3 ans ou exploité pendant 15 ans.
            </p>
            <p className="text-sm text-muted-foreground">
              Le décret tertiaire impose aux bâtiments de plus de 1 000 m² de réduire leur consommation de -40% d&apos;ici 2030 (par rapport à 2010). Sans GTB performante, de nombreux bâtiments risquent de ne pas atteindre ces objectifs.
            </p>
          </div>

        </div>
      </div>
    </article>
  )
}
