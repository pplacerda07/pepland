import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../lib/utils'

const faqs = [
  {
    category: 'Sobre Peptídeos',
    questions: [
      {
        q: 'Peptídeos são esteroides?',
        a: 'Não. São estruturas químicas completamente diferentes. Esteroides suprimem a produção hormonal natural e causam colaterais sérios. Peptídeos não desligam seu eixo hormonal, não causam efeitos colaterais agressivos e não exigem intervenção após o uso.'
      },
      {
        q: 'Em quanto tempo vou notar resultado?',
        a: 'Depende do peptídeo e do objetivo. Melhora no sono pode aparecer na primeira semana. Perda de gordura e ganho de massa geralmente ficam visíveis entre 4 a 8 semanas com protocolo adequado, dieta e treino alinhados.'
      },
      {
        q: 'Mulheres podem usar peptídeos?',
        a: 'Sim. Peptídeos não são compostos androgênicos. Não engrossam a voz, não causam pelos faciais e não provocam virilização. Homens e mulheres usam os mesmos peptídeos, com doses ajustadas. Mesmo assim, qualquer uso exige orientação profissional.'
      }
    ]
  },
  {
    category: 'Sobre o Material',
    questions: [
      {
        q: 'A lista de fornecedores é atualizada?',
        a: 'Sim. O material traz a lista mais completa e verificada do mercado brasileiro. Incluímos laboratórios nacionais e internacionais com critérios claros de validação, para você comprar com segurança, sem cair em produto falsificado.'
      },
      {
        q: 'Preciso usar todos os peptídeos ou posso escolher um?',
        a: 'Você escolhe. O guia mostra como cada peptídeo funciona, para qual objetivo ele serve (queima de gordura, ganho de massa, pele, sono) e como montar seu próprio protocolo. Não precisa usar tudo.'
      },
      {
        q: 'Nunca usei seringa na vida. Consigo aplicar?',
        a: 'Sim. O Volume 2 mostra o passo a passo visual completo, da reconstituição até a aplicação. A maioria dos peptídeos usa caneta subcutânea, a mesma que diabéticos usam no dia a dia. É simples e indolor.'
      }
    ]
  }
]

function FaqItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border border-dark/10 bg-white rounded-3xl overflow-hidden shadow-sm transition-all hover:border-gold/30">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <h4 className={cn("font-heading font-bold text-lg pr-8 transition-colors", isOpen ? "text-gold" : "text-dark")}>
          {q}
        </h4>
        <div className={cn(
          "w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300",
          isOpen ? "bg-gold border-gold text-white rotate-45" : "bg-[#F8F9FA] border-dark/10 text-dark"
        )}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-dark/5 mt-2 text-dark/70 font-body font-medium leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F8F9FA] relative" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-white text-dark/60 font-body font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 shadow-sm border border-dark/5">
            Perguntas Frequentes
          </span>
          <h2 id="faq-title" className="font-heading text-4xl md:text-5xl font-extrabold text-dark tracking-tight leading-[1.1] mb-6">
            Tudo o Que Você Precisa Saber.
          </h2>
          <p className="font-body text-xl text-dark/50 max-w-2xl mx-auto font-medium">
            As dúvidas mais comuns de quem está considerando peptídeos, respondidas de forma direta.
          </p>
        </div>

        <div className="space-y-12">
          {faqs.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading font-black text-2xl text-dark/20 mb-6 uppercase tracking-widest select-none">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((faq, i) => {
                  const globalIndex = `${catIndex}-${i}`
                  return (
                    <FaqItem 
                      key={globalIndex}
                      q={faq.q}
                      a={faq.a}
                      isOpen={openIndex === globalIndex}
                      onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                    />
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
