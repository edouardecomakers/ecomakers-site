import Header from '@/components/landing/layout/Header'
import Footer from '@/components/landing/layout/Footer'

export const metadata = {
  title: 'Mentions légales | EcoMakers',
  description: "Mentions légales du site EcoMakers.",
}

export default function MentionslegalesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Mentions légales</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
                  <p className="text-muted-foreground mb-2">Le site EcoMakers est édité par :</p>
                  <p className="text-muted-foreground">
                    <strong>E.L.D HOLDING</strong><br />
                    Société par actions simplifiée (SAS)<br />
                    Capital social : 100 000,00 €<br />
                    SIREN : 801 682 899<br />
                    SIRET : 801 682 899 00043<br />
                    Numéro de TVA intracommunautaire : FR57801682899
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Siège social :<br />
                    37 Boulevard Aristide Briand<br />
                    13100 AIX-EN-PROVENCE<br />
                    France
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Directeur de la publication</h2>
                  <p className="text-muted-foreground">
                    Edouard LADROIT, Président de E.L.D HOLDING
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                  <p className="text-muted-foreground">
                    Email : <a href="mailto:contact@ecomakers.fr" className="text-primary hover:underline">contact@ecomakers.fr</a>
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
                  <p className="text-muted-foreground">
                    Le site est hébergé par :<br />
                    <strong>Vercel Inc.</strong><br />
                    340 S Lemon Ave #4133<br />
                    Walnut, CA 91789, USA
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
                  <p className="text-muted-foreground mb-2">
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                  </p>
                  <p className="text-muted-foreground">
                    La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    La marque "EcoMakers" est déposée et protégée.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Limitation de responsabilité</h2>
                  <p className="text-muted-foreground mb-2">
                    EcoMakers s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, EcoMakers ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                  </p>
                  <p className="text-muted-foreground">
                    En conséquence, EcoMakers décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Liens hypertextes</h2>
                  <p className="text-muted-foreground">
                    Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. Les liens vers ces autres ressources vous font quitter le site EcoMakers. EcoMakers ne saurait être responsable du contenu de ces sites externes ni des liens qu'ils contiennent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Droit applicable</h2>
                  <p className="text-muted-foreground">
                    Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
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
