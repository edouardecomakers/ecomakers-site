import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Colonne 1 : À propos */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              EcoMakers
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Le spécialiste du recrutement GTB/GTC en Île-de-France. 
              Nous connectons les meilleurs talents avec les entreprises qui en ont besoin.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              📧 contact@ecomakers.fr
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              <a 
                href="https://linkedin.com/company/ecomakers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </p>
          </div>

          {/* Colonne 2 : Pages */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Pages
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/entreprises" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Entreprises
                </Link>
              </li>
              <li>
                <Link href="/candidats" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Candidats
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Ressources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Ressources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/entreprises#faq" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  FAQ Entreprises
                </Link>
              </li>
              <li>
                <Link href="/candidats#faq" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  FAQ Candidats
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Légal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Légal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/mentions-legales" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            © {currentYear} EcoMakers. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
