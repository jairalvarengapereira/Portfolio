'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FadeIn, StaggerContainer, StaggerItem, GlowCard } from './Animations'

interface Project {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string | null
  language: string | null
  topics: string[]
  stargazers_count: number
  updated_at: string
}

export default function Projetos() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/jairap/repos?sort=updated&per_page=6'
        )
        const data = await response.json()
        setProjects(data)
      } catch {
        setProjects([
          {
            id: 1,
            name: 'portfolio-nextjs',
            description: 'Portfólio profissional desenvolvido com Next.js, Tailwind CSS e Framer Motion',
            html_url: 'https://github.com/dashboard/portfolio-nextjs',
            homepage: null,
            language: 'TypeScript',
            topics: ['nextjs', 'tailwindcss', 'react'],
            stargazers_count: 5,
            updated_at: '2024-01-15T10:00:00Z',
          },
          {
            id: 2,
            name: 'api-nodejs',
            description: 'API RESTful desenvolvida com Node.js, Express e TypeScript',
            html_url: 'https://github.com/dashboard/api-nodejs',
            homepage: null,
            language: 'TypeScript',
            topics: ['nodejs', 'express', 'typescript'],
            stargazers_count: 3,
            updated_at: '2024-01-10T10:00:00Z',
          },
          {
            id: 3,
            name: 'react-dashboard',
            description: 'Dashboard administrativo desenvolvido com React e Material-UI',
            html_url: 'https://github.com/dashboard/react-dashboard',
            homepage: null,
            language: 'JavaScript',
            topics: ['react', 'material-ui', 'dashboard'],
            stargazers_count: 8,
            updated_at: '2024-01-05T10:00:00Z',
          },
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  const getLanguageColor = (lang: string | null) => {
    const colors: Record<string, string> = {
      TypeScript: '#3178C6',
      JavaScript: '#F7DF1E',
      Python: '#3776AB',
      HTML: '#E34F26',
      CSS: '#1572B6',
    }
    return colors[lang || ''] || '#6B7280'
  }

  return (
    <section id="projetos" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meus Projetos
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e projetos open source.
          </p>
        </FadeIn>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          </div>
        ) : (
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <GlowCard className="h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg>
                    </div>
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-500 hover:text-blue-400 transition-colors p-2 hover:bg-white/5 rounded-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-sm text-dark-400 mb-4 flex-grow line-clamp-2">
                    {project.description || 'Sem descrição disponível'}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.language && (
                      <span
                        className="px-3 py-1 text-xs rounded-full font-medium"
                        style={{
                          color: getLanguageColor(project.language),
                          backgroundColor: `${getLanguageColor(project.language)}15`,
                        }}
                      >
                        {project.language}
                      </span>
                    )}
                    {project.topics.slice(0, 2).map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 text-xs text-dark-300 bg-white/5 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-1 text-sm text-dark-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span>{project.stargazers_count}</span>
                    </div>
                    <span className="text-xs text-dark-500">
                      {new Date(project.updated_at).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

        <FadeIn delay={0.4} className="mt-12 text-center">
          <motion.a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 glass text-white font-medium rounded-xl transition-all duration-300 hover:bg-white/10 border border-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Ver todos no GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </FadeIn>
      </div>
    </section>
  )
}
