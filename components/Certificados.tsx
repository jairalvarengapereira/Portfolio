'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FadeIn, StaggerContainer, StaggerItem, GlowCard } from './Animations'

const certificates = [
  { title: 'Newton Diploma', file: '/Certificados/Newton-Diploma.jpg' },
  { title: 'Infinity School - Certificado', file: '/Certificados/Infinity School - Certificado.png' },
  { title: 'Infinity School - Recomendação', file: '/Certificados/Infinity School - Recomendação.png' },
  { title: 'DevPoint - Certificado', file: '/Certificados/Dev Point - Certificado.png' },
  { title: 'Treinar - Certificado', file: '/Certificados/Treinar - Certificado.png' },
  { title: 'Daxus - Certificado', file: '/Certificados/Daxus - Certificado.png' },
  { title: 'Delphi - Certificado', file: '/Certificados/Delphi-Certificado.jpg' },
]

export default function Certificados() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null)

  return (
    <section id="certificados" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            Certificados
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Formação & <span className="text-gradient">Certificações</span>
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Investimento contínuo em aprendizado e desenvolvimento profissional.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" staggerDelay={0.1}>
          {certificates.map((cert) => (
            <StaggerItem key={cert.title}>
              <GlowCard className="h-full">
                <div className="flex flex-col h-full">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="block mb-4 rounded-xl overflow-hidden bg-white/5 cursor-pointer"
                  >
                    <img
                      src={cert.file}
                      alt={cert.title}
                      className="w-full h-24 md:h-40 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </button>
                  <h3 className="text-sm font-bold text-white flex-1">{cert.title}</h3>
                  <a
                    href={cert.file}
                    download
                    className="mt-3 inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Baixar
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </a>
                </div>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-white mb-2">Meu Currículo</h3>
                <p className="text-sm text-dark-400">
                  Baixe meu currículo completo com todos os detalhes da minha trajetória.
                </p>
              </div>
              <motion.a
                href="/curriculo.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 whitespace-nowrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span>Baixar Currículo</span>
              </motion.a>
            </div>
          </div>
        </FadeIn>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 md:top-0 md:right-0 md:-mt-12 md:-mr-12 text-white hover:text-blue-400 transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedCert.file}
                alt={selectedCert.title}
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
