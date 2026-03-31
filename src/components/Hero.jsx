import { motion } from 'framer-motion'

export default function Hero() {
  const handleCTAClick = () => {
    window.location.href = "https://arkan-club.mycartpanda.com/checkout/209090710:1"
  }

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  }

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  }

  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-hero-gradient pt-24 pb-16"
      aria-labelledby="hero-headline"
    >
      {/* Background static layers */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none" aria-hidden="true" />

      {/* Dynamic ambient background objects */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] bg-gold/30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">

        <motion.div variants={containerVars} initial="hidden" animate="show" className="flex flex-col items-center w-full">

          {/* Eyebrow */}
          <motion.div variants={itemVars} className="mb-8">
            <span className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-dark/10 text-dark font-body font-bold text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Guia Definitivo dos Peptídeos
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVars}
            id="hero-headline"
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold leading-[1.05] tracking-tight text-dark mb-6 max-w-4xl"
          >
            Você Já Tentou Tudo.
            <br />
            Agora Faça do{' '}
            <span className="text-gold italic relative">
              Jeito Certo
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-gold/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0 100 15" fill="transparent" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>.
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVars} className="font-body text-lg md:text-xl text-dark/60 leading-relaxed mb-10 max-w-2xl font-medium">
            Descubra como peptídeos científicos combinados como <strong className="text-dark">Retatrutida</strong> e <strong className="text-dark">CJC-1295</strong> transformam a sua composição corporal de forma totalmente segura.
          </motion.p>

          {/* Metric Badges acting as modern bullet points */}
          <motion.div variants={itemVars} className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { text: "Comprovado Cientificamente", icon: "🧬" },
              { text: "Doses Exatas", icon: "⚖️" },
              { text: "Fornecedores Nacionais", icon: "🇧🇷" }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/50 border border-dark/5 backdrop-blur-sm px-4 py-2 rounded-2xl text-sm font-body font-bold text-dark/70 shadow-sm">
                <span>{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </motion.div>

          {/* CTA & Trust */}
          <motion.div variants={itemVars} className="flex flex-col items-center gap-6 w-full max-w-sm">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(176,138,67,0.4)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCTAClick}
              className="w-full bg-dark text-white font-body font-bold text-lg px-8 py-5 rounded-full overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Acessar o Guia Completo
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </motion.button>

            <p className="font-body text-xs font-semibold text-dark/40 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              Seus dados estão 100% protegidos
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
