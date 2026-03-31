import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../lib/utils'

const peptides = [
  {
    id: 'retatrutida',
    name: 'Retatrutida',
    highlight: true,
    summary: 'O composto de perda de peso mais avançado disponível. Agonista de três receptores hormonais paralelos.',
    benefits: [
      'Redução corporal de até 24%',
      'Corte severo de apetite',
      'Metabolismo acelerado',
      'Atuação precisa no controle glicêmico',
    ],
    color: 'from-[#B08A43]/20 to-[#B08A43]/5',
    tabColor: 'bg-[#B08A43]',
    borderColor: 'border-[#B08A43]/40',
  },
  {
    id: 'cjc1295',
    name: 'CJC-1295',
    highlight: false,
    summary: 'Sinalizador anabólico que força a liberação natural do seu hormônio do crescimento (GH) sem inibir a produção natural.',
    benefits: [
      'Queima focada em gordura abdominal',
      'Estímulo de produção de GH',
      'Acelera ganho de massa magra',
      'Regula o sono profundamente',
    ],
    color: 'from-[#97A79D]/20 to-[#97A79D]/5',
    tabColor: 'bg-[#97A79D]',
    borderColor: 'border-[#97A79D]/30',
  },
  {
    id: 'bpc157',
    name: 'BPC-157',
    highlight: false,
    summary: 'Proteína curativa que acelera vertiginosamente a reconstrução celular de músculos, ossos e micro-vasos.',
    benefits: [
      'Reparação relâmpago de lesões',
      'Combate inflamação crônica',
      'Restaura parede do intestino',
      'Proteção neurológica de alto nível',
    ],
    color: 'from-dark/10 to-dark/5',
    tabColor: 'bg-dark',
    borderColor: 'border-dark/15',
  },
  {
    id: 'dsip',
    name: 'DSIP',
    highlight: false,
    summary: 'O Otimizador de sono profundo. Ele desliga o estresse basal ampliando os picos críticos de recuperação noturna.',
    benefits: [
      'Sono REM extremamente restaurador',
      'Multiplica os pulsos reais de GH',
      'Reduz cortisol (hormônio que engorda)',
      'Equilibra humor ao acordar',
    ],
    color: 'from-[#97A79D]/15 to-[#97A79D]/5',
    tabColor: 'bg-[#97A79D]',
    borderColor: 'border-[#97A79D]/25',
  },
  {
    id: 'ghkcu',
    name: 'GHK-Cu',
    highlight: false,
    summary: 'Peptídeo cúprico rejuvenescedor. Age no DNA acionando mais de 4.000 genes ligados à elasticidade e renovação jovem da pele.',
    benefits: [
      'Pele com textura irreconhecível',
      'Estimula colágeno e superelastina',
      'Barreiras antioxidantes robustas',
      'Trava marcadores biológicos de idade',
    ],
    color: 'from-[#B08A43]/15 to-[#B08A43]/5',
    tabColor: 'bg-[#B08A43]',
    borderColor: 'border-[#B08A43]/25',
  },
]

export default function PeptidesShowcase() {
  const [activeId, setActiveId] = useState(peptides[0].id)

  const active = peptides.find(p => p.id === activeId) || peptides[0]

  return (
    <section className="py-24 md:py-32 bg-[#F8F9FA] relative" aria-labelledby="peptides-title">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white border border-dark/10 text-dark font-body font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            O Arsenal Científico
          </span>
          <h2 id="peptides-title" className="font-heading text-4xl md:text-5xl lg:text-5xl font-extrabold text-dark tracking-tight leading-[1.1] mb-6">
            As Ferramentas de <br className="hidden md:block" /> <span className="text-gold italic">Recomposição Corporal</span>
          </h2>
        </motion.div>

        {/* Animated Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {peptides.map(p => {
            const isActive = activeId === p.id
            return (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={cn(
                  "relative px-5 py-2.5 rounded-full text-sm font-bold font-body transition-colors",
                  isActive ? "text-white" : "text-dark/60 hover:text-dark bg-white border border-dark/10"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="pill-indicator"
                    className={cn("absolute inset-0 rounded-full", p.tabColor)}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {p.highlight && <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>}
                  {p.name}
                </span>
              </button>
            )
          })}
        </div>

        {/* Dynamic Display Area */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <div className={cn(
                "w-full bg-gradient-to-br rounded-3xl p-8 md:p-12 border shadow-sm",
                active.color,
                active.borderColor
              )}>

                {/* Layout: text left, visual right on desktop */}
                <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start md:items-center">

                  {/* Text Side */}
                  <div className="flex-1 min-w-0">
                    {active.highlight && (
                      <span className="inline-block bg-dark text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                        Top #1 do Guia
                      </span>
                    )}
                    <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-dark tracking-tight mb-3">
                      {active.name}
                    </h3>
                    <p className="font-body text-lg font-medium text-dark/60 mb-8 leading-relaxed max-w-lg">
                      {active.summary}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {active.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white/60 p-4 rounded-2xl shadow-sm border border-white/50">
                          <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-body text-sm font-semibold text-dark leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Abstract Visual Side */}
                  <div className="hidden md:flex w-56 shrink-0 justify-center">
                    <motion.div
                      initial={{ rotate: -10, y: 10 }}
                      animate={{ rotate: 0, y: 0 }}
                      transition={{ type: "spring", stiffness: 100 }}
                      className="w-48 h-48 rounded-full bg-white/40 border border-white/60 shadow-xl backdrop-blur-xl flex items-center justify-center p-8 relative"
                    >
                      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay rounded-full" />
                      <svg className="w-full h-full text-dark opacity-20" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                        <circle cx="50" cy="50" r="20" fill="currentColor" />
                      </svg>
                      <span className="absolute font-heading font-black text-lg tracking-tighter text-dark bg-white/80 px-3 py-1.5 rounded-xl border border-white shadow-sm">
                        {active.name}
                      </span>
                    </motion.div>
                  </div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}