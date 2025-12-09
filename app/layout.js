import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EcoMakers - Cabinet de Recrutement GTB/GTC',
  description: 'Cabinet spécialisé en recrutement GTB/GTC et performance énergétique en Île-de-France',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
