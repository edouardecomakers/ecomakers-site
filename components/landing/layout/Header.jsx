"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">EcoMakers</span>
        </Link>
        
        <nav className="ml-auto flex items-center gap-6">
          <Link href="/entreprises" className="text-sm font-medium transition-colors hover:text-primary">
            Entreprises
          </Link>
          <Link href="/candidats" className="text-sm font-medium transition-colors hover:text-primary">
            Candidats
          </Link>
          <Link href="/a-propos" className="text-sm font-medium transition-colors hover:text-primary">
            À propos
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
          <Button size="sm" asChild className="ml-4">
            <Link href="/candidats#formulaire">Rejoindre le réseau</Link>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <Link href="/entreprises#formulaire">Analyse gratuite</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
