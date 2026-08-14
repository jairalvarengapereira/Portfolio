import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Certificados from '@/components/Certificados'
import Tecnologias from '@/components/Tecnologias'
import Projetos from '@/components/Projetos'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'
import { ScrollProgress } from '@/components/Animations'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />
      <Sobre />
      <Certificados />
      <Tecnologias />
      <Projetos />
      <Contato />
      <Footer />
    </main>
  )
}
