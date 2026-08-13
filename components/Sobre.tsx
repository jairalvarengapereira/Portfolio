'use client'

import { FadeIn, StaggerContainer, StaggerItem, GlowCard } from './Animations'

const highlights = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '+30 Anos',
    subtitle: 'de Experiência',
    description: 'Décadas construindo sistemas corporativos robustos e escaláveis para grandes empresas.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Delphi',
    subtitle: 'Expert',
    description: 'Especialista em sistemas legados de alta performance e otimização.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
    title: 'Transição',
    subtitle: 'Digital',
    description: 'Evolução estratégica para React, Node.js e TypeScript.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Full Stack',
    subtitle: 'Moderno',
    description: 'Domínio completo do ciclo de vida do desenvolvimento web moderno.',
  },
]

export default function Sobre() {
  return (
    <section id="sobre" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            Quem sou eu
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Uma trajetória de mais de três décadas na tecnologia, sempre buscando 
            inovação e excelência técnica.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn direction="left">
            <div className="space-y-6">
              <p className="text-dark-300 leading-relaxed text-lg">
                Sou um <span className="text-white font-medium">Analista de TI</span> com mais de{' '}
                <span className="text-blue-400 font-medium">30 anos de experiência</span> em tecnologia,
                construindo sistemas corporativos complexos e soluções de grande escala.
              </p>
              <p className="text-dark-400 leading-relaxed">
                Minha jornada começou no desenvolvimento de sistemas legados em Delphi,
                onde desenvolvi uma compreensão profunda de <span className="text-dark-200">arquitetura de software</span> e{' '}
                <span className="text-dark-200">otimização de performance</span>. Ao longo dos anos, liderei 
                projetos de migração de dados, modernização de sistemas e implementação de 
                soluções críticas para empresas de diversos segmentos.
              </p>
              <p className="text-dark-400 leading-relaxed">
                Hoje, estou em uma fase empolgante de transição para o desenvolvimento
                web moderno, dominando <span className="text-blue-400">React</span>,{' '}
                <span className="text-blue-400">Node.js</span> e{' '}
                <span className="text-blue-400">TypeScript</span>. Essa combinação de 
                maturidade técnica e entusiasmo por novas tecnologias me permite criar 
                soluções que são ao mesmo tempo robustas e inovadoras.
              </p>

              <div className="pt-6 flex items-center gap-6">
                <a
                  href="#projetos"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Ver Projetos
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-dark-400 hover:text-white font-medium transition-colors"
                >
                  Entre em contato
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <GlowCard className="h-full">
                  <div className="text-blue-500 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-blue-400 font-medium mb-3">{item.subtitle}</p>
                  <p className="text-sm text-dark-400 leading-relaxed">{item.description}</p>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
