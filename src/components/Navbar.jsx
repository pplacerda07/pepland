import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '../lib/utils'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > 50) {
      setScrolled(true)
      if (latest > previous && latest > 200) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    } else {
      setScrolled(false)
      setHidden(false)
    }
  })

  const handleCTAClick = () => {
    window.location.href = "https://arkan-club.mycartpanda.com/checkout/209090710:1"
  }

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-120%", opacity: 0 }
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "circOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center w-full pointer-events-none"
      aria-label="Navegação principal"
    >
      <div 
        className={cn(
          "w-full max-w-5xl flex items-center justify-between px-5 md:px-8 py-3 rounded-full transition-all duration-500 pointer-events-auto shadow-sm",
          scrolled ? "bg-white/90 backdrop-blur-md border border-dark/10 shadow-dark-card/5" : "bg-white/60 backdrop-blur-sm border border-transparent"
        )}
      >
        <a href="/" aria-label="Arkan Club Inicial" className="flex items-center gap-3 w-10 overflow-hidden sm:w-auto sm:overflow-visible transition-transform duration-300 hover:scale-105">
          <img src="/logo_arkna (1).png" alt="Arkan Club" className="h-[28px] md:h-8 object-contain drop-shadow-sm brightness-0" />
        </a>

        {/* Desktop Nav Links + CTA */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { label: 'Peptídeos', href: '#peptides-title' },
            { label: 'Conteúdo', href: '#conteudo' },
            { label: 'Depoimentos', href: '#depoimentos' },
            { label: 'Oferta', href: '#oferta' },
            { label: 'FAQ', href: '#faq' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-dark/70 hover:text-gold font-body font-semibold text-sm tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={handleCTAClick}
            className="btn-gold text-sm font-semibold px-6 py-2.5 shadow-none hover:shadow-gold focus:ring-offset-white"
          >
            Quero Meu Guia
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-dark hover:text-gold font-bold transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu floating */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl border border-dark/10 shadow-dark-card/10 rounded-3xl p-6 md:hidden pointer-events-auto"
        >
          <div className="flex flex-col gap-4 mb-5">
            {[
              { label: 'Peptídeos', href: '#peptides-title' },
              { label: 'Conteúdo', href: '#conteudo' },
              { label: 'Depoimentos', href: '#depoimentos' },
              { label: 'Oferta', href: '#oferta' },
              { label: 'FAQ', href: '#faq' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-dark/70 hover:text-gold font-body font-semibold text-base tracking-wide transition-colors duration-200 py-2 border-b border-dark/5 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => { handleCTAClick(); setMenuOpen(false) }}
            className="btn-gold w-full text-base font-bold py-4"
          >
            Acessar Guia Imediatamente
          </button>
        </motion.div>
      )}
    </motion.nav>
  )
}
