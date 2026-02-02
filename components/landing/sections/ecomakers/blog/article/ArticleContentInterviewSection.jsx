import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  AlertCircle, 
  CheckCircle, 
  Target,
  Users,
  Settings,
  ThermometerSun,
  Clock,
  Euro,
  Wrench,
  GraduationCap,
  Building2,
  TrendingUp,
  MessageSquareQuote
} from "lucide-react"

export default function ArticleContentInterviewSection() {
  return (
    <article className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        
        {/* Tableau stats intro */}
        <div className="my-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-3 divide-x">
                <div className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15%</div>
                  <div className="text-sm text-muted-foreground">des bâtiments équipés</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">~50%</div>
                  <div className="text-sm text-muted-foreground">non exploités efficacement</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">30-45%</div>
                  <div className="text-sm text-muted-foreground">d&apos;économies possibles</div>
                </div>
              </div>
              <div className="px-6 py-3 bg-muted/30 text-xs text-muted-foreground border-t text-center">
                Sources : Observatoire GIMELEC 2024, estimation terrain Yacine Ben Youssef
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Intro */}
        <div className="rounded-lg border bg-muted/50 p-8 mb-12">
          <p className="text-muted-foreground mb-6 text-base leading-relaxed">
            Selon l&apos;Observatoire national du déploiement des BACS (GIMELEC, 2024), seulement 15% des bâtiments tertiaires français sont équipés de GTB. Et parmi ceux-là, près de la moitié ne sont pas exploités efficacement.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Mais qu&apos;en est-il vraiment sur le terrain ? Nous avons interrogé Yacine Ben Youssef, consultant GTB indépendant. Son constat va plus loin que les statistiques officielles.
          </p>
        </div>

        {/* Citation principale */}
        <div className="my-12">
          <Card className="border-l-4 border-l-secondary bg-secondary/5">
            <CardContent className="p-8">
              <div className="flex gap-4">
                <MessageSquareQuote className="h-10 w-10 text-secondary shrink-0" />
                <div>
                  <p className="text-xl font-medium italic mb-3">
                    « En 6 ans de carrière, je ne suis jamais arrivé devant une GTB parfaitement exploitée. Jamais. »
                  </p>
                  <p className="text-base text-muted-foreground">
                    D&apos;après mon expérience, peut-être 5 à 10% des installations sont réellement performantes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 1 */}
        <h2 className="text-3xl font-bold text-secondary mt-16 mb-8">1. Parcours</h2>

        <div className="space-y-8 mb-16">
          <div>
            <p className="text-primary font-semibold mb-3">EcoMakers : Tu as cette double casquette automatisme et énergie. Comment tu l&apos;as construite ?</p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Yacine :</strong> Je suis automaticien industriel de formation, j&apos;ai commencé chez Procter &amp; Gamble. Là-bas, j&apos;ai vu plein de problèmes sur la partie énergétique, donc j&apos;ai suivi une formation complémentaire. Quand tu fais de l&apos;optimisation énergétique dans le bâtiment, tu tombes forcément sur la GTB.
            </p>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed">
              Depuis 2023, je suis freelance, j&apos;ai travaillé avec des boîtes comme Delta Dore, GreenFlex, E&apos;nergys, Nextiim et maintenant en direct avec les clients finaux. Audit, pilotage de projets, accompagnement à l&apos;exploitation, AMO.
            </p>
          </div>

          <div>
            <p className="text-primary font-semibold mb-3">EcoMakers : C&apos;est quoi le problème avec les profils mono-compétence ?</p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Yacine :</strong> La grande majorité des automaticiens que j&apos;ai rencontrés n&apos;avaient pas de formation en CVC. Ils ne savent pas toujours optimiser les fonctionnements d&apos;une pompe à chaleur ou d&apos;une chaufferie. Ils traitent parfois de la donnée sans comprendre précisément ce qu&apos;ils gèrent.
            </p>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed">
              Et inversement, les énergéticiens ne maîtrisent pas toujours la programmation. Rares sont ceux qui ont la vision complète.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <h2 className="text-3xl font-bold text-secondary mt-16 mb-8">2. Diagnostic terrain</h2>

        <div className="space-y-8 mb-16">
          <div>
            <p className="text-primary font-semibold mb-3">EcoMakers : Quand tu arrives sur un site, par quoi tu commences ?</p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Yacine :</strong> D&apos;abord je regarde la GTB elle-même. Comment elle a été faite, quels capteurs, quels équipements. J&apos;arrive souvent avec mon propre matériel, un capteur thermique, pour comparer la data affichée avec la réalité terrain.
            </p>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed">
              Ensuite j&apos;audite armoire par armoire. Je vérifie avec le client s&apos;il y a eu des ajouts d&apos;équipements. Et surtout je prends le ressenti client : qu&apos;est-ce qui ne marche pas selon lui ?
            </p>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed">
              Côté documentation, c&apos;est souvent le désert. DOE incomplet ou inexistant, schémas qui ne correspondent plus à la réalité, mots de passe perdus, personnes formées qui sont parties.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <h2 className="text-3xl font-bold text-secondary mt-16 mb-8">3. Les trois problèmes récurrents</h2>

        <div className="space-y-8 mb-16">
          <div>
            <p className="text-primary font-semibold mb-3">EcoMakers : C&apos;est quoi les problèmes que tu retrouves systématiquement ?</p>
          </div>

          {/* Problème 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Les capteurs</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Yacine :</strong> Les capteurs, c&apos;est LE problème numéro un. Ils sont tout le temps en rade. Quand ils sont mal placés, c&apos;est pire que de ne pas en avoir : ça donne une information fausse qui fausse toute la régulation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Exemple : tu mets un capteur près d&apos;une porte qui donne sur l&apos;extérieur. Il affiche 8°C alors qu&apos;il fait 14°C dans le reste du bâtiment. La GTB croit qu&apos;il fait froid, elle fait tourner le chauffage à fond. Surconsommation massive et usure précoce des équipements.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5">
              <CardContent className="p-4">
                <p className="font-medium italic">
                  « Un capteur mal calibré d&apos;un seul degré, c&apos;est 7% de surconsommation. Un degré. »
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Problème 2 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Les GTB à zéro euro</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Deuxième problème : beaucoup de GTB ont été installées à zéro euro pour le client, financées par les CEE. L&apos;intégrateur cherchait à faire de la marge, le client n&apos;était pas regardant. C&apos;était gratuit.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Résultat : des GTB low cost, aussi bien au niveau des équipements que de la régulation. Pas de commissioning, pas de PID, pas de réglage fin. Les sondes n&apos;ont pas été mises en hauteur parce que louer une nacelle, ça coûte 1000€ par jour. Sur un entrepôt avec 24 cellules, tu ne vas pas payer 12 jours de nacelle pour placer tes sondes correctement.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Aujourd&apos;hui, ces GTB ne sont ni conformes ni efficientes. Certaines font même surconsommer. Quand j&apos;arrive sur un site et que je demande si c&apos;est une GTB financée à zéro euro, je sais déjà sur quoi on n&apos;aura pas investi.
            </p>
          </div>

          {/* Problème 3 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tout est en manuel</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Troisième problème : quand j&apos;arrive, tout est forcé en manuel. Les gars du terrain ont ouvert les armoires et tout bypassé.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Alors oui, c&apos;est une aberration. Mais si ta GTB ne fonctionne pas, tu mets en manuel pour que ça marche. Le vrai problème, c&apos;est que l&apos;installation n&apos;a pas été bien faite ou que personne n&apos;a été formé.
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <h2 className="text-3xl font-bold text-secondary mt-16 mb-8">4. Cas concrets</h2>

        <div className="space-y-8 mb-16">
          <div>
            <p className="text-primary font-semibold mb-3">EcoMakers : Tu peux nous donner des exemples concrets ?</p>
          </div>

          {/* Cas 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">L&apos;entrepôt de Lyon</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Yacine :</strong> Un entrepôt logistique à Lyon. Le client me dit : « Ça ne marche pas. » Quand j&apos;arrive, je vois le problème très rapidement.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le mainteneur avait voulu ajouter des fonctionnalités. Il avait commandé des cartes Wago et les avait pluguées sur l&apos;automate. Sauf que chez Wago, il y a un ordre à respecter pour les cartes. Ça a bloqué l&apos;automate. Il est resté figé sur « chauffer à fond » pendant un an. Surconsommation énorme.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Le client voulait attaquer l&apos;intégrateur en justice. Sauf que le problème venait de l&apos;interne. J&apos;ai résolu en ajustant l&apos;ordre des cartes. Le jour même, c&apos;était réglé.
            </p>
          </div>

          {/* Cas 2 */}
          <div>
            <h3 className="text-xl font-bold mb-4">La GTB neuve qui surconsomme</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Autre cas : je suis arrivé sur une GTB neuve, installée depuis trois mois. On avait promis 20% d&apos;économies au client. Il avait surconsommé de 10%.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En une semaine et demie, sans changer d&apos;équipement, juste en reprenant le paramétrage, on est allé chercher 45% d&apos;économies dès la première année. L&apos;outil était là, il était juste mal utilisé.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5">
              <CardContent className="p-4">
                <p className="font-medium italic">
                  « En moyenne, je ne peux jamais arriver devant une GTB sans faire au minimum 10% d&apos;économies avec des ajustements simples. Et souvent, c&apos;est bien plus. »
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Cas 3 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Le litige évitable</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dernier exemple : une foncière commande une GTB financée par les CEE, environ 70 000 €. Son locataire, présent depuis 20 ans, avait des attentes différentes : il voulait aussi la gestion de sa partie industrielle, soit une demande globale à 160 000 €.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              L&apos;intégrateur a livré ce qui était au devis. Le locataire a refusé de signer la réception. Litige pendant plus d&apos;un an.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Je suis intervenu pour faciliter la situation. Le problème de fond ? Incompréhension du besoin, mauvaise expression des attentes, et personne pour faire le pont entre les parties. C&apos;est un cas d&apos;école, et il y en a beaucoup.
            </p>
          </div>
        </div>

        {/* SECTION 5 */}
        <h2 className="text-3xl font-bold text-secondary mt-16 mb-8">5. Les causes profondes</h2>

        <div className="space-y-8 mb-16">
          <div>
            <p className="text-primary font-semibold mb-3">EcoMakers : Comment tu expliques ces situations ?</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Un problème de marché</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Yacine :</strong> La GTB, tout le monde en veut, personne ne veut payer le prix. Le surfinancement par les CEE a créé des attentes irréalistes. Les clients ont eu du gratuit pendant des années. Maintenant, quand tu leur proposes quelque chose à 100 000 €, ils ne comprennent pas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Je n&apos;accuse pas les intégrateurs. C&apos;est le marché qui veut ça. La ressource coûte cher, les prix sont tirés vers le bas. Quand le chantier dérape, c&apos;est quoi qu&apos;on coupe ? La formation ? La documentation ? La finesse de régulation ?
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Et malheureusement, une GTB livrée sans formation ni documentation exploitable, c&apos;est une GTB abandonnée. Une de plus qui ne servira à rien.
            </p>
            <Card className="border-l-4 border-l-secondary bg-secondary/5">
              <CardContent className="p-4">
                <p className="font-medium italic">
                  « Quand c&apos;est pas cher, c&apos;est trop cher. Une GTB mal pensée peut te faire consommer 30% de plus que ce qu&apos;elle devrait. »
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Un problème de compétences</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il y a aussi un vrai retard au niveau scolaire. La GTB, c&apos;est le cerveau de l&apos;installation. Et pourtant, un chauffagiste, un électricien, ils travaillent avec ce cerveau tous les jours sans forcément savoir le lire.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La GTB, c&apos;est en réalité 5 métiers en un : automatisme, CVC, électricité, réglementaire et énergétique. On ne peut pas demander à une seule personne de tout maîtriser. En revanche, chacun devrait au minimum savoir l&apos;utiliser pour ce qui le concerne, et faire appel aux bonnes personnes quand il y a besoin.
            </p>
          </div>
        </div>

        {/* SECTION 6 */}
        <h2 className="text-3xl font-bold text-secondary mt-16 mb-8">6. Les solutions</h2>

        <div className="space-y-8 mb-16">
          <div>
            <p className="text-primary font-semibold mb-3">EcoMakers : Concrètement, on fait quoi pour améliorer les choses ?</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Les quick wins</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Yacine :</strong> Un truc simple : réduire le temps de chauffe de 30 minutes avant la fermeture. Ça se fait en deux clics, c&apos;est des milliers d&apos;euros économisés par an.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Autre quick win : auditer les plannings. Sur les sites que j&apos;ai pu observer, j&apos;estime que près de 70% des bâtiments ont des plannings obsolètes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">L&apos;accompagnement</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il faut un accompagnement dans la durée. Quelqu&apos;un qui fasse le pont entre l&apos;intégrateur et l&apos;exploitant. De l&apos;AMO, du suivi énergétique, de la formation continue.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Un audit suivi d&apos;un accompagnement à la décision, ça peut coûter entre 3 000 et 20 000 € selon le site. C&apos;est souvent rentabilisé dès la première année.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Bien faire dès le départ</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si on part de zéro, trois choses essentielles :
            </p>
            <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
              <li className="leading-relaxed">
                <strong>Des capteurs précis, bien placés.</strong> Oui, ça coûte 1000€ de mettre une sonde correctement avec une nacelle. Mais cette sonde va faire économiser des dizaines de milliers d&apos;euros sur les années à venir.
              </li>
              <li className="leading-relaxed">
                <strong>Être accompagné dès le début</strong> pour définir le besoin et le traduire en spécifications.
              </li>
              <li className="leading-relaxed">
                <strong>Prévoir le budget exploitation :</strong> 60-70% pour l&apos;installation, 5-10% pour la formation, 15-20% pour le suivi sur les premières années.
              </li>
            </ol>
          </div>
        </div>

        {/* SECTION 7 */}
        <h2 className="text-3xl font-bold text-secondary mt-16 mb-8">7. Conseils</h2>

        <div className="space-y-8 mb-16">
          <div>
            <p className="text-primary font-semibold mb-3">EcoMakers : Des conseils à donner selon les profils ?</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Pour ceux qui débutent dans la GTB</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Yacine :</strong> Comprendre les équipements CVC avant de programmer. Savoir comment fonctionne une PAC, une chaufferie. Sans ça, on traite de la donnée sans comprendre ce qu&apos;on gère.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Et éviter l&apos;erreur classique : mettre des températures arbitraires « pour avancer », sans se poser, sans appeler le client. Ça crée des surconsommations dès la première seconde.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Pour les donneurs d&apos;ordre</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Faites-vous accompagner. Beaucoup de property managers veulent gérer eux-mêmes leur projet GTB. Sauf qu&apos;ils n&apos;ont pas toujours la connaissance technique, et les projets se passent mal.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Et ne cherchez pas juste à cocher la case réglementaire. L&apos;objectif, ce n&apos;est pas d&apos;installer une GTB. C&apos;est après l&apos;installation que le travail commence avec les économies potentielles associées.
            </p>
          </div>
        </div>

        {/* SECTION 8 */}
        <h2 className="text-3xl font-bold text-secondary mt-16 mb-8">8. Message final</h2>

        <div className="space-y-8 mb-16">
          <div>
            <p className="text-primary font-semibold mb-3">EcoMakers : Un dernier mot pour conclure ?</p>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Yacine :</strong> Aujourd&apos;hui, on vend souvent la GTB comme on vend une pompe à chaleur. Mais ça ne fonctionne pas comme ça. Une PAC, tu la poses, elle a un COP, c&apos;est fini. Une GTB, ça se construit. Ça ne se pose pas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sur un même site, une GTB peut coûter 50 000 € et ne rien optimiser, ou coûter 180 000 € et faire 30% d&apos;économies. Et attention, 500 000 € sur ce même site, ce serait du surdimensionnement inutile. Il y a un juste milieu à trouver, et il est différent pour chaque bâtiment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              C&apos;est un marché où la demande est forte et l&apos;offre n&apos;arrive pas à suivre. On a tout intérêt à travailler ensemble, à collaborer, à se faire accompagner sur ce qu&apos;on ne maîtrise pas. Plutôt que de tirer les prix vers le bas et de se retrouver avec des GTB qui ne servent à rien.
            </p>
            <Card className="border-l-4 border-l-primary bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg font-medium italic">
                  « La GTB, c&apos;est le cerveau du bâtiment. Quand elle est bien réglée, tout suit. Il y a des économies exceptionnelles à aller chercher pour nos clients, à nous de leur montrer. »
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tableau chiffres à retenir */}
        <div className="my-12">
          <h3 className="text-2xl font-bold mb-6">Les chiffres à retenir</h3>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0">
                <div className="p-6 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">1°C = 7%</div>
                  <div className="text-sm text-muted-foreground">de surconsommation</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">45%</div>
                  <div className="text-sm text-muted-foreground">d&apos;économies sur GTB neuve mal paramétrée</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">70k€ vs 160k€</div>
                  <div className="text-sm text-muted-foreground">l&apos;écart qui crée les litiges</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">-40%</div>
                  <div className="text-sm text-muted-foreground">objectif décret tertiaire 2030</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Séparateur */}
        <div className="my-12 text-center text-muted-foreground">
          • • •
        </div>

        {/* À propos */}
        <div className="my-10 p-8 rounded-lg bg-muted/50 border">
          <h3 className="font-bold text-xl mb-4">À propos de Yacine Ben Youssef</h3>
          <p className="text-muted-foreground leading-relaxed">
            Après plusieurs années comme Chef de Projet et Responsable d&apos;Affaires GTB pour des intégrateurs et bureaux d&apos;études en Île-de-France, Yacine Ben Youssef a fondé Smart Tech Engineering pour accompagner directement les décideurs : leur permettre de reprendre en main leurs projets GTB et d&apos;en faire de vrais outils de performance énergétique.
          </p>
        </div>

      </div>
    </article>
  )
}
