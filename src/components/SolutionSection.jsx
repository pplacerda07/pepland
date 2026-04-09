import { motion } from 'framer-motion'

function MoleculeBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.04 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="molecules" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="4" fill="#000" />
            <line x1="20" y1="20" x2="70" y2="50" stroke="#000" strokeWidth="1.5" />
            <circle cx="70" cy="50" r="6" fill="#000" />
            <line x1="70" y1="50" x2="100" y2="20" stroke="#000" strokeWidth="1.5" />
            <circle cx="100" cy="20" r="3" fill="#000" />
            <line x1="70" y1="50" x2="40" y2="100" stroke="#000" strokeWidth="1.5" />
            <circle cx="40" cy="100" r="5" fill="#000" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#molecules)" />
      </svg>
    </motion.div>
  )
}

export default function SolutionSection() {
  return (
    <section className="relative py-24 md:py-32 bg-cream overflow-hidden" aria-label="O que são peptídeos">
      <MoleculeBackground />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left: Headline & Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/60 border border-dark/10 text-dark font-body font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              A Solução Real
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark tracking-tight leading-[1.1] mb-8">
              Mensageiros Moleculares de <br /><span className="text-gold italic">Alta Precisão</span>.
            </h2>

            <div className="space-y-6">
              <p className="font-body text-xl font-medium text-dark/70 leading-relaxed md:leading-[1.6]">
                Diferente de suplementos genéricos, os peptídeos atuam como <strong className="text-dark">sinais vitais</strong>. Eles dizem literalmente ao seu corpo para queimar gordura ou reparar as articulações.
              </p>
              <p className="font-body text-xl font-medium text-dark/70 leading-relaxed md:leading-[1.6]">
                Eles funcionam como uma comunicação direta com o seu organismo de forma completamente natural e segura. O resultado não é promessa vazia. É ciência aplicada na prática.
              </p>
            </div>

          </motion.div>

          {/* Right: Abstract Glass Molecule Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square w-full max-w-[400px] mx-auto relative rounded-[3rem] bg-gradient-to-br from-white/80 to-white/30 backdrop-blur-xl border border-white shadow-2xl overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-noise opacity-5" />

              {/* Central glowing hub */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], shadow: ["0 0 20px rgba(176,138,67,0.2)", "0 0 40px rgba(176,138,67,0.4)", "0 0 20px rgba(176,138,67,0.2)"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-40 h-40 bg-gold/5 rounded-full flex items-center justify-center z-10"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-gold-dark shadow-gold flex items-center justify-center">
                  <span className="font-heading text-white font-bold text-2xl tracking-tighter">HGH</span>
                </div>
              </motion.div>

              {/* Orbiting nodes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0 flex items-center justify-center"
              >
                <div className="w-[80%] h-[80%] rounded-full border border-dark/5 absolute" />
                <div className="w-8 h-8 rounded-full bg-sage shadow-md absolute top-[10%] left-[20%]" />
                <div className="w-6 h-6 rounded-full bg-dark/80 shadow-md absolute bottom-[15%] right-[20%]" />
              </motion.div>

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/95 backdrop-blur-md border border-dark/10 rounded-2xl p-5 shadow-dark-card/5 transform transition-transform group-hover:-translate-y-2">
                  <p className="font-heading text-gold text-base font-bold mb-1">Peptídeos</p>
                  <p className="font-body text-dark/70 text-sm font-semibold leading-relaxed">Mensagens de código puro processadas de forma imediata pelo seu organismo.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
