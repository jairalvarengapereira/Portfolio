'use client'

import { FadeIn, StaggerContainer, StaggerItem } from './Animations'

const technologies = [
  { name: 'Delphi', color: '#EE1F35', bg: 'from-red-500/20 to-red-600/20' },
  { name: 'React', color: '#61DAFB', bg: 'from-cyan-500/20 to-cyan-600/20' },
  { name: 'Node.js', color: '#339933', bg: 'from-green-500/20 to-green-600/20' },
  { name: 'TypeScript', color: '#3178C6', bg: 'from-blue-500/20 to-blue-600/20' },
  { name: 'SQL', color: '#F29111', bg: 'from-orange-500/20 to-orange-600/20' },
  { name: 'JavaScript', color: '#F7DF1E', bg: 'from-yellow-500/20 to-yellow-600/20' },
  { name: 'Tailwind', color: '#06B6D4', bg: 'from-teal-500/20 to-teal-600/20' },
  { name: 'Git', color: '#F05032', bg: 'from-orange-500/20 to-orange-600/20' },
]

const TechIcon = ({ name }: { name: string }) => {
  if (name === 'Delphi') {
    return <img src="/delphi.png" alt="Delphi" className="w-8 h-8 object-contain" />
  }
  const icons: Record<string, JSX.Element> = {
    React: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)"/></svg>,
    'Node.js': <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46 1.4 0 2.21-.85 2.21-2.33V8.84c0-.12-.09-.21-.21-.21H8.22c-.12 0-.21.09-.21.21v8.05c0 .66-.68 1.31-1.77.76L4.16 16.2c-.07-.04-.12-.12-.12-.21V7.41c0-.09.05-.17.12-.21l7.44-4.29c.07-.04.16-.04.22 0l7.44 4.29c.07.04.12.12.12.21v8.58c0 .09-.05.17-.12.21l-7.44 4.29c-.06.04-.14.04-.21 0l-1.89-1.12c-.06-.03-.13-.04-.19-.01-.59.18-.71.47-.71 1.07v1.24c0 .4.24.77.62.93l2.47 1.08c.76.33 1.3.34 1.83.34 1.34 0 2.41-.75 2.41-2.32V7.71c0-.12.1-.22.22-.22h1.15c.12 0 .22.1.22.22v10.49c0 1.94-1.35 3.08-3.14 3.08-.85 0-1.53-.15-2.26-.47l-2.52-1.1c-.67-.3-1.1-.93-1.1-1.63V9.07c0-.69.43-1.33 1.1-1.63l1.89-1.09c.07-.04.16-.04.22 0l1.89 1.09c.67.3 1.1.94 1.1 1.63v10.49c0 1.56-1.06 2.32-2.21 2.32-.44 0-.76 0-1.71-.46L5.91 19.24c-.48-.28-.78-.8-.78-1.36V9.3c0-.56.3-1.08.78-1.36L14.12 3.64c.48-.28 1.08-.28 1.56 0l5.88 3.41c.48.28.78.8.78 1.36v8.58c0 .56-.3 1.08-.78 1.36l-7.44 4.3c-.23.13-.5.2-.77.2"/></svg>,
    TypeScript: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.716 6.16 6.16 0 01-1.977.271v-2.3c.832 0 1.612-.163 2.443-.489a3.685 3.685 0 001.198-.918 2.31 2.31 0 00.401-1.254 2.196 2.196 0 00-.288-1.161 3.18 3.18 0 00-.814-.862c-.344-.254-.736-.515-1.173-.784-.438-.268-.894-.532-1.37-.793a4.88 4.88 0 01-1.473-.945 3.46 3.46 0 01-.948-1.39c-.22-.54-.33-1.156-.33-1.846 0-.627.11-1.174.332-1.642a3.71 3.71 0 01.95-1.197 5.07 5.07 0 011.465-.798 6.34 6.34 0 011.898-.294zm-9.387.404h7.5v2.063h-5.25V11.1H11.7V9.213H10.2v3.45H4.95v-2.063z"/></svg>,
    SQL: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M12 2C6.48 2 2 4.02 2 6.5v3C2 11.98 6.48 14 12 14s10-2.02 10-4.5v-3C22 4.02 17.52 2 12 2zm0 12c-5.52 0-10-2.02-10-4.5v3c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-3C22 13.98 17.52 16 12 16zm0 6c-5.52 0-10-2.02-10-4.5v3c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-3c0 2.48-4.48 4.5-10 4.5z"/></svg>,
    JavaScript: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.405-.6-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>,
    Tailwind: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M12 6.036a5.885 5.885 0 00-5.964 5.964A5.885 5.885 0 0012 17.964 5.885 5.885 0 0017.964 12 5.885 5.885 0 0012 6.036zm0 9.6A3.636 3.636 0 018.364 12 3.636 3.636 0 0112 8.364 3.636 3.636 0 0115.636 12 3.636 3.636 0 0112 15.636z"/></svg>,
    Git: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.347 2.358l2.64 2.64a1.838 1.838 0 11-1.218 1.176l-2.443-2.443v6.53a1.838 1.838 0 11-1.57-.018v-6.46a1.838 1.838 0 01-1.002-2.41L7.596 5.064.45 12.208a1.55 1.55 0 000 2.188l10.48 10.48a1.55 1.55 0 002.186 0l10.43-10.43a1.55 1.55 0 000-2.186"/></svg>,
  }
  return icons[name] || <span className="text-2xl font-bold">?</span>
}

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            Stack Tecnológico
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tecnologias & <span className="text-gradient">Ferramentas</span>
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Do Delphi ao universo moderno — um stack completo para resolver 
            qualquer desafio de desenvolvimento.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.08}>
          {technologies.map((tech) => (
            <StaggerItem key={tech.name}>
              <div className="group relative">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative glass rounded-2xl p-6 text-center transition-all duration-300 group-hover:bg-white/5 group-hover:scale-105">
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ color: tech.color, backgroundColor: `${tech.color}15` }}
                  >
                    <TechIcon name={tech.name} />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{tech.name}</h3>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full">
            <span className="text-2xl">🎯</span>
            <span className="text-dark-300 text-sm">
              E muitas mais... sempre aprendendo e evoluindo!
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
