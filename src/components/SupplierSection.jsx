import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const risks = [
  'Produtos falsificados e puros placebos',
  'Gatilhos alérgicos por solventes baratos',
  'Fornecedores "fantasmas" no Instagram',
  'Mercadorias retidas eternamente na alfândega',
]

const benefits = [
  {
    icon: "💎",
    title: 'Pureza Laboratorial',
    text: 'Avaliados por laudos cromatográficos independentes.',
  },
  {
    icon: "⚡",
    title: 'Lista Viva',
    text: 'Maus lojistas são removidos na mesma semana.',
  },
  {
    icon: "⚖️",
    title: 'Precificação Leal',
    text: 'Você descobre exatamente o custo de fábrica.',
  },
  {
    icon: "🌍",
    title: 'Rotas Globais',
    text: 'Laboratórios do Brasil e caminhos de importação VIP.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function SupplierSection() {
  return (
    <section id="fornecedores" className="py-24 md:py-32 bg-white relative overflow-hidden" aria-labelledby="suppliers-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block bg-dark/5 border border-dark/10 text-dark font-body font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            O Grande Gargalo
          </span>
          <h2 id="suppliers-title" className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark tracking-tight leading-[1.1] mb-6">
            Não Seja Feito de <span className="text-gold italic">Cobaia</span>.
          </h2>
          <p className="font-body text-xl text-dark/60 max-w-2xl mx-auto font-medium">
            Saber qual peptídeo usar é metade do caminho. O mercado livre é armadilha pura. Sem uma fonte testada, seu conhecimento não serve para nada.
          </p>
        </motion.div>

        {/* Action Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Danger Zone (Risks) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 bg-dark text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[100px] rounded-full" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-red-500/10 text-red-400 rounded-2xl flex items-center justify-center mb-8 border border-red-500/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              
              <h3 className="font-heading text-3xl font-bold mb-8">A Roleta Russa Atual</h3>
              
              <ul className="space-y-6">
                {risks.map((risk, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-red-400 font-black mt-1">✕</span>
                    <span className="font-body text-white/80 font-medium text-lg leading-snug">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Safe Zone (Benefits) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 bg-[#F8F9FA] border border-dark/5 p-8 md:p-12 rounded-[2.5rem]"
          >
            <div className="mb-10">
              <div className="w-14 h-14 bg-gold/10 text-gold-dark rounded-2xl flex items-center justify-center mb-6 border border-gold/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="font-heading text-3xl font-bold text-dark">A Única Lista que Importa</h3>
              <p className="font-body text-dark/60 font-medium mt-3">Você não achará nos motores de busca.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="bg-white p-6 rounded-2xl border border-dark/5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl mb-4">{benefit.icon}</div>
                  <h4 className="font-heading text-xl font-bold text-dark mb-2">{benefit.title}</h4>
                  <p className="font-body font-medium text-dark/60">{benefit.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-dark/10 flex items-center justify-between">
              <span className="font-body font-bold text-dark text-sm bg-gold/10 text-gold-dark px-4 py-2 rounded-full hidden">
                Exclusivo
              </span>
              <p className="font-body font-bold text-dark/40 text-sm">Atualizado Semanalmente</p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
