import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jair Alvarenga Pereira | Analista de TI & Desenvolvedor Full Stack',
  description: 'Portfólio profissional - +30 anos de experiência em TI, especialista em Delphi em transição para React, Node.js e TypeScript',
  keywords: ['Jair Alvarenga', 'Analista de TI', 'Full Stack', 'React', 'Node.js', 'TypeScript', 'Delphi', 'Portfólio'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-dark-950 antialiased">{children}</body>
    </html>
  )
}
