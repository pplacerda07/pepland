import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../lib/utils'

const faqs = [
  {
    category: 'Segurança & Recomposição',
    questions: [
      {
        q: 'Esses peptídeos são esteroides locais?',
        a: 'Absolutamente não. Esteroides e hormônios são estruturas químicas completamente diferentes. Peptídeos não suprimem seu eixo de testosterona e não causam os colaterais comuns de esteroides. Eles agem na origem celular da inflamação e renovação.'
      },
      {
        q: 'Em quanto tempo começo a notar redução de tecido adiposo?',
        a: 'Cada biologia é única. Peptídeos como a Retatrutida atuam no apetite em horas. O emagrecimento visível na balança ou espelho aparece geralmente logo nos primeiros 15 dias de protocolo ajustado.'
      },
      {
        q: 'Mulheres podem usar o CJC-1295 sem engrossar a voz?',
        a: 'Sim. Peptídeos não possuem compostos androgênicos. Não existe nenhum risco de virilização (engrossamento de voz ou pelos). É biologia limpa voltada apenas na otimização de GH e queima gorda.'
      }
    ]
  },
  {
    category: 'Logística & Dúvidas Reais',
    questions: [
      {
        q: 'Onde encontro os fornecedores no Brasil?',
        a: 'O material contém a lista mais fidedigna e atualizada. Incluímos desde distribuidores locais até importadores diretos. Focamos nos laboratórios que entregam produto com laudo registrado de teste independente.'
      },
      {
        q: 'Preciso misturar tudo ou posso usar só um peptídeo?',
        a: 'Você define a rota. Alguns preferem usar só o GHK-Cu para pele, outros focam só em BPC-157 para joelho inflamado. O método mostra as misturas (stacks) caso você queira multiplicar efeitos.'
      },
      {
        q: 'Sou totalmente inexperiente em usar seringas. Posso fazer?',
        a: 'O guia detalha o processo visual. A água bacteriostática junto aos micro-passos garantem aplicações fáceis. A lógica ensina as canetas subcutâneas as mesmas que diabéticos usam.'
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
            Mapeamento de Dúvidas
          </span>
          <h2 id="faq-title" className="font-heading text-4xl md:text-5xl font-extrabold text-dark tracking-tight leading-[1.1] mb-6">
            A Verdade Sem Filtros.
          </h2>
          <p className="font-body text-xl text-dark/50 max-w-2xl mx-auto font-medium">
            Respostas clínicas e diretas às objeções mais recorrentes de quem deseja acessar a matriz da transformação humana.
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
