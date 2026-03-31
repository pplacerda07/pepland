import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()

  // Show the button after scrolling 500px (usually past the Hero section)
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  return (
    <motion.div
      initial={{ y: 100, opacity: 0, x: "-50%" }}
      animate={{ y: visible ? 0 : 100, opacity: visible ? 1 : 0, x: "-50%" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 left-1/2 z-[100] pointer-events-none"
    >
      <a
        href="https://arkan-club.mycartpanda.com/checkout/209090710:1"
        className="btn-gold pointer-events-auto flex items-center gap-2 rounded-full px-8 py-3.5 text-sm md:text-base font-bold shadow-2xl shadow-gold/40 border border-white/20 whitespace-nowrap hover:scale-105 active:scale-95 transition-all"
      >
        <span>Quero mudar</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </motion.div>
  )
}
