'use client'
import { usePathname } from 'next/navigation'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

function formatSegment(segment) {
  // "entreprises" → "Entreprises"
  // "a-propos" → "À propos"
  const mapping = {
    'entreprises': 'Entreprises',
    'candidats': 'Candidats',
    'blog': 'Blog',
    'contact': 'Contact',
    'a-propos': 'À propos',
    'mentions-legales': 'Mentions légales',
    'politique-confidentialite': 'Politique de confidentialité',
    'cookies': 'Cookies',
  }
  return mapping[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
}

export default function Breadcrumb() {
  const pathname = usePathname()
  
  // Générer pages depuis pathname
  const segments = pathname.split('/').filter(Boolean)
  const pages = segments.map((segment, index) => ({
    name: formatSegment(segment),
    href: `/${segments.slice(0, index + 1).join('/')}`,
    current: index === segments.length - 1,
  }))
  
  // Pas de breadcrumb sur HOME
  if (pathname === '/') return null
  
  return (
    <nav aria-label="Breadcrumb" className="flex border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <ol role="list" className="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 py-4 sm:px-6 lg:px-8">
        <li className="flex">
          <div className="flex items-center">
            <a href="/" className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
              <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
              <span className="sr-only">Accueil</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className="flex">
            <div className="flex items-center">
              <ChevronRightIcon
                aria-hidden="true"
                className="size-5 shrink-0 text-gray-400 dark:text-gray-500"
              />
              <a
                href={page.href}
                aria-current={page.current ? 'page' : undefined}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

