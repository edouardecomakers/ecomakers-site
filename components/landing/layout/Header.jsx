"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">EcoMakers</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="ml-auto hidden items-center gap-6 md:flex">
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

        {/* Mobile Navigation */}
        <div className="ml-auto md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  href="/entreprises" 
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  Entreprises
                </Link>
                <Link 
                  href="/candidats" 
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  Candidats
                </Link>
                <Link 
                  href="/a-propos" 
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  À propos
                </Link>
                <Link 
                  href="/blog" 
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/contact" 
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
                <div className="mt-4 flex flex-col gap-3">
                  <Button asChild onClick={() => setOpen(false)}>
                    <Link href="/candidats#formulaire">Rejoindre le réseau</Link>
                  </Button>
                  <Button variant="outline" asChild onClick={() => setOpen(false)}>
                    <Link href="/entreprises#formulaire">Analyse gratuite</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
