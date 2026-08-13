'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <section id="inicio" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />

      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20"
      >
        <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 mb-8"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-dark-300">Disponível para oportunidades</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center gap-6 mb-6"
            >
              <div className="relative w-20 h-24 md:w-28 md:h-36 rounded-2xl glass-strong overflow-hidden border-glow flex-shrink-0">
                <img
                  src="/Jair.png"
                  alt="Jair Alvarenga Pereira"
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: '50% 8%' }}
                />
              </div>
              <div>
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                  <span className="text-white">Olá, eu sou</span>
                  <br />
                  <span className="text-gradient">Jair Alvarenga</span>
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl md:text-2xl text-dark-400 font-light mb-4"
            >
              Analista de TI & Desenvolvedor Full Stack
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-dark-500 text-lg max-w-xl mb-10 leading-relaxed"
            >
              +30 anos transformando desafios complexos em soluções inovadoras. 
              De sistemas legados em Delphi ao universo moderno com React, Node.js e TypeScript.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projetos"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium rounded-xl transition-all duration-300 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <span>Ver Projetos</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-white font-medium rounded-xl transition-all duration-300 hover:bg-white/10 border border-white/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>Fale Comigo</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-white/5"
            >
              <div>
                <span className="text-3xl font-bold text-white">+30</span>
                <p className="text-sm text-dark-500">Anos de Experiência</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <span className="text-3xl font-bold text-white">Full</span>
                <p className="text-sm text-dark-500">Stack Developer</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <span className="text-3xl font-bold text-white">∞</span>
                <p className="text-sm text-dark-500">Aprendizado</p>
              </div>
            </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-dark-500 uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-dark-600 flex justify-center pt-1">
            <motion.div
              animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-blue-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
