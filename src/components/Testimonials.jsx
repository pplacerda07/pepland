import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const testimonials = [
  {
    name: 'Ana C.',
    age: '34 anos',
    stars: 5,
    result: '−9kg em 3 meses',
    resultColor: 'bg-gold/10 text-gold-dark',
    text: 'Comprei com um pé atrás. Chegou no email na hora, li em dois dias. A parte dos protocolos práticos é ouro. Explica exatamente o que buscar e onde comprar sem cair em furada.',
    highlight: 'Finalmente um conteúdo sem enrolação',
    colSpan: 'md:col-span-2'
  },
  {
    name: 'Roberto V.',
    age: '42 anos',
    stars: 5,
    result: '+4kg massa magra',
    resultColor: 'bg-sage/10 text-sage-dark',
    text: 'Sou nutricionista e fui bem crítico antes de comprar. A profundidade técnica me surpreendeu, especialmente a lista de laboratórios. Já indico pra alguns pacientes que buscam ganho de massa magra com segurança.',
    highlight: 'Fui criticar e acabei indicando',
    colSpan: 'md:col-span-1'
  },
  {
    name: 'Luiza T.',
    age: '29 anos',
    stars: 5,
    result: 'Pele e sono melhores',
    resultColor: 'bg-gold/10 text-gold-dark',
    text: 'Comprei e chegou no meu email certinho. Comecei a estudar o material e fiquei impressionada com a quantidade de informação organizada. Já notei melhora na pele e na qualidade do sono.',
    highlight: 'Resultado que vai além da estética',
    colSpan: 'md:col-span-1'
  },
  {
    name: 'Marcio P.',
    age: '50 anos',
    stars: 5,
    result: 'Melhor composição corporal',
    resultColor: 'bg-sage/10 text-sage-dark',
    text: 'Fiquei meses na dúvida achando que era mais do mesmo. Comprei, li, apliquei. Três meses depois minha composição corporal mudou completamente. Menos gordura, mais massa e disposição no dia a dia.',
    highlight: 'Devia ter comprado antes',
    colSpan: 'md:col-span-2'
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-white relative overflow-hidden" aria-labelledby="testimonials-title">
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block bg-[#F8F9FA] text-dark font-body font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-dark/5">
            Depoimentos
          </span>
          <h2 id="testimonials-title" className="font-heading text-4xl md:text-5xl lg:text-5xl font-extrabold text-dark tracking-tight leading-[1.1] mb-6">
            O Que as Pessoas Falam <span className="text-gold italic">dos Peptídeos</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
              className={cn(
                "bg-[#F8F9FA] border border-dark/5 p-8 rounded-3xl relative flex flex-col justify-between group hover:bg-white hover:border-gold/20 hover:shadow-gold/5 transition-colors",
                t.colSpan
              )}
            >
              <div>
                <div className="flex items-center gap-1 mb-6 text-gold">
                  {[...Array(t.stars)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                
                <h4 className="font-heading text-xl font-bold text-dark mb-4 group-hover:text-gold transition-colors">
                  "{t.highlight}"
                </h4>
                
                <p className="font-body text-dark/60 font-medium text-lg leading-relaxed mb-10">
                  {t.text}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-dark/5">
                <div>
                  <p className="font-heading font-bold text-dark">{t.name}</p>
                  <p className="font-body font-medium text-sm text-dark/40">{t.age}</p>
                </div>
                <span className={cn("px-4 py-1.5 rounded-full font-body font-black text-xs uppercase tracking-widest", t.resultColor)}>
                  {t.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
