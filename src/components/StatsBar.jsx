import { motion } from 'framer-motion'

const stats = [
  { value: '5+', label: 'Peptídeos Detalhados' },
  { value: '100%', label: 'Base Científica' },
  { value: '3', label: 'Volumes Completos' },
  { value: '24/7', label: 'Acesso Vitalício' },
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export default function StatsBar() {
  return (
    <section className="relative z-20 bg-[#F8F9FA] pb-10 pt-10" aria-label="Estatísticas do produto">
      <div className="px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bg-white/80 backdrop-blur-xl border border-dark/10 shadow-dark-card/5 rounded-3xl py-8 md:py-10 px-6 sm:px-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative">
            {/* Subtle dividers */}
            <div className="hidden md:block absolute top-[20%] bottom-[20%] left-1/4 w-px bg-gradient-to-b from-transparent via-dark/10 to-transparent" />
            <div className="hidden md:block absolute top-[20%] bottom-[20%] left-2/4 w-px bg-gradient-to-b from-transparent via-dark/10 to-transparent" />
            <div className="hidden md:block absolute top-[20%] bottom-[20%] left-3/4 w-px bg-gradient-to-b from-transparent via-dark/10 to-transparent" />

            {stats.map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center relative">
                <p className="font-heading font-extrabold text-3xl md:text-5xl text-dark mb-2 tracking-tight">
                  {stat.value}
                </p>
                <p className="font-body text-xs md:text-sm font-bold tracking-widest uppercase text-dark/50">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
