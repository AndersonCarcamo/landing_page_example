import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tu Nombre - Desarrollador Freelance',
  description: 'Desarrollador web freelance especializado en React, Next.js y aplicaciones modernas. Transformando ideas en experiencias digitales únicas.',
  keywords: 'desarrollador freelance, react, next.js, desarrollo web, frontend, javascript',
  authors: [{ name: 'Tu Nombre' }],
  openGraph: {
    title: 'Tu Nombre - Desarrollador Freelance',
    description: 'Desarrollador web freelance especializado en React, Next.js y aplicaciones modernas.',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 