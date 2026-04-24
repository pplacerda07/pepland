import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const volumes = [
  {
    number: '01',
    title: 'O Guia Definitivo',
    subtitle: 'Entenda Cada Peptídeo a Fundo',

    topics: [
      'O que cada peptídeo faz, como funciona e adequação para cada caso',
      'A diferença real entre peptídeo e esteroide',
      'Explicação completa de uso e reconstituição',
      'O que observar antes de começar qualquer protocolo',
    ],
    bgColor: 'bg-[#F8F9FA]',
    borderColor: 'border-dark/5',
    topOffset: 'top-[100px]',
  },
  {
    number: '02',
    title: 'Doses & Reconstituição',
    subtitle: 'Aplique com Segurança Total',

    topics: [
      'Doses recomendadas por peptídeo e por objetivo',
      'Passo a passo visual da reconstituição',
      'Guia e dicas de aplicação subcutânea',
      'Tabelas prontas de dose por peso corporal',
    ],
    bgColor: 'bg-cream',
    borderColor: 'border-[#B08A43]/10',
    topOffset: 'top-[124px]',
  },
  {
    number: '03',
    title: 'Lista de Fornecedores',
    subtitle: 'Não Seja Feito de Cobaia',

    topics: [
      'Fornecedor exclusivo revelado para o Brasil',
      'Como validar se o fornecedor é legítimo',
      'Importação segura sem risco de apreensão',
      'Laboratórios de confiança no Brasil e exterior',
    ],
    bgColor: 'bg-white',
    borderColor: 'border-sage/15',
    topOffset: 'top-[148px]',
  },
]

export default function ProductVolumes() {
  return (
    <section id="conteudo" className="py-24 md:py-32 bg-dark/5 relative" aria-labelledby="volumes-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block bg-white text-dark font-body font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-dark/10 shadow-sm">
            Material Direto
          </span>
          <h2 id="volumes-title" className="font-heading text-4xl md:text-5xl font-extrabold text-dark tracking-tight leading-[1.1] mb-6">
            3 Volumes. <span className="text-gold italic">Zero Enrolação</span>.
          </h2>
          <p className="font-body text-xl text-dark/60 max-w-2xl mx-auto font-medium">
            Tudo o que você precisa para escolher, dosar e comprar peptídeos com segurança. Em um material só.
          </p>
        </motion.div>

        {/* Stackable Cards */}
        <div className="relative pb-10">
          {volumes.map((vol, i) => (
            <motion.div
              key={vol.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={cn(
                "sticky w-full rounded-[2.5rem] p-8 md:p-12 mb-6 border shadow-xl shadow-dark-card/5 transition-transform duration-300",
                vol.bgColor,
                vol.borderColor,
                vol.topOffset
              )}
              // z-index scaling to ensure stacking works naturally
              style={{ zIndex: i + 10 }}
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">

                {/* Left Vol Number & Basic */}
                <div className="md:w-1/3 w-full">
                  <div className="text-[5rem] md:text-[6rem] font-heading font-black text-dark/5 leading-none mb-4 -ml-2 select-none tracking-tighter">
                    {vol.number}
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-dark mb-2 tracking-tight">
                    {vol.title}
                  </h3>
                  <p className="font-body text-gold font-bold text-sm uppercase tracking-wider mb-6">
                    {vol.subtitle}
                  </p>
                </div>

                {/* Right Bullet Points */}
                <div className="md:w-2/3 w-full pt-4 md:pt-[5rem]">
                  <ul className="space-y-4">
                    {vol.topics.map((topic, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-white border border-dark/10 shadow-sm flex items-center justify-center shrink-0 mt-0.5">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-dark">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="font-body text-base font-semibold text-dark/80">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
