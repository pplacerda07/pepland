import { motion } from 'framer-motion'

export default function SupplierSection() {
  return (
    <section id="fornecedores" className="py-32 md:py-48 bg-white relative overflow-hidden" aria-labelledby="suppliers-title">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Section Header — two columns: text left, image right */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left: headline + subtitle + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-dark/5 border border-dark/10 text-dark font-body font-bold text-sm tracking-widest uppercase px-5 py-2 rounded-full mb-8">
              O Grande Gargalo
            </span>
            <h2 id="suppliers-title" className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-dark tracking-tight leading-[1.05] mb-8">
              Não Seja Feito de <span className="text-gold italic">Cobaia</span>.
            </h2>
            <p className="font-body text-2xl text-dark/60 max-w-xl font-medium mb-12 leading-relaxed">
              Saber qual peptídeo usar é metade do caminho. O mercado livre é armadilha pura. Sem uma fonte testada, seu conhecimento não serve para nada.
            </p>

            <a
              href="#oferta"
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white font-heading font-black text-xl px-10 py-5 rounded-2xl shadow-xl shadow-gold/30 transition-all hover:scale-105 active:scale-95"
            >
              Quero o Guia Completo
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Right: image card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center gap-1"
          >
            <span className="font-heading font-bold text-dark/50 text-xl tracking-widest uppercase">
              pronto(a) para mudar?
            </span>
            <div className="w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl shadow-dark/10 border border-dark/5">
              <img
                src="/girl_looking_at_the_camera.png"
                alt="Transformação com peptídeos"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
