import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const videoPlaceholders = [
  {
    id: 0,
    title: 'O Fim do Efeito Platô',
    duration: '1:15',
    src: '/snaptik_7584598163349179666_v3.mp4'
  },
  {
    id: 1,
    title: 'Renato Cariani: Por que Dietas Travam',
    duration: '0:59',
    src: '/snaptik_7583434965015137548_v3.mp4'
  },
  {
    id: 2,
    title: 'Cuidado com Falsificações',
    duration: '0:45',
    src: '/snaptik_7619096776825425170_v3.mp4'
  }
]

function VideoCardContent({ video, index, isActive, isMuted, showPlayOverlay = true }) {
  const videoRef = useRef(null)

  // Play/pause and mute logic driven by visibility + active state
  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    if (isActive) {
      // Start muted to avoid overlap, then set final mute state after play
      el.muted = true
      const playPromise = el.play()
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Only unmute after play succeeds to prevent audio flash
          el.muted = isMuted
        }).catch(() => {
          // Autoplay blocked — keep muted and playing
          el.muted = true
          el.play().catch(() => {})
        })
      }
    } else {
      // Kill audio and stop immediately for non-active videos
      el.muted = true
      el.pause()
      el.currentTime = 0
    }

    return () => {
      el.muted = true
      el.pause()
    }
  }, [isActive, isMuted])

  return (
    <div className="w-full h-full relative group bg-black">
      {video.src && (
        <video
          ref={videoRef}
          src={video.src}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          muted
          loop
          playsInline
          preload="metadata"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-dark/90 p-6 flex flex-col justify-between pointer-events-none z-10">
        <div className="flex justify-between items-start">
          <span className="bg-dark/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold border border-white/20">
            {video.duration}
          </span>

          {isActive && (
            <span className="w-8 h-8 rounded-full bg-dark/60 backdrop-blur-md flex items-center justify-center border border-white/10">
              {isMuted ? (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </span>
          )}
        </div>

        <div className="mb-4 text-left">
          <h3 className="text-white font-heading font-bold text-xl md:text-2xl leading-tight mb-2">
            {video.title}
          </h3>
          <p className="text-white/60 font-body text-sm">
            Assista para entender o erro #{index + 1}
          </p>
        </div>
      </div>

      {!isActive && showPlayOverlay && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 text-white/50 backdrop-blur-sm">
            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ProblemSection() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [isMuted, setIsMuted] = useState(true)       // manual toggle by user
  const [sectionVisible, setSectionVisible] = useState(false)
  const sectionRef = useRef(null)
  const mobileScrollRef = useRef(null)
  const mobileCardRefs = useRef([])
  const scrollFrameRef = useRef(null)
  const dragRef = useRef({ startX: 0, isDragging: false })
  const hasInteracted = useRef(false) // track user interaction for autoplay policy

  // Observe section visibility — controls play/pause and mute
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionVisible(entry.isIntersecting)
        if (!entry.isIntersecting) {
          // Section scrolled out of view → mute
          setIsMuted(true)
        } else if (hasInteracted.current) {
          // Section came into view and user has interacted → unmute
          setIsMuted(false)
        }
      },
      { threshold: 0.3 } // 30% visible triggers
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Track first user interaction on the page (needed for autoplay with sound)
  useEffect(() => {
    const markInteracted = () => {
      hasInteracted.current = true
      // If section is already visible when user first interacts, unmute
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const visible = rect.top < window.innerHeight && rect.bottom > 0
        if (visible) {
          setIsMuted(false)
        }
      }
    }
    window.addEventListener('touchstart', markInteracted, { once: true })
    window.addEventListener('click', markInteracted, { once: true })
    window.addEventListener('scroll', markInteracted, { once: true })
    return () => {
      window.removeEventListener('touchstart', markInteracted)
      window.removeEventListener('click', markInteracted)
      window.removeEventListener('scroll', markInteracted)
    }
  }, [])

  const onDragStart = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    dragRef.current = { startX: clientX, isDragging: false }
  }

  const onDragMove = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    if (Math.abs(clientX - dragRef.current.startX) > 10) {
      dragRef.current.isDragging = true
    }
  }

  const onDragEnd = (e) => {
    const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
    const delta = clientX - dragRef.current.startX
    if (dragRef.current.isDragging && Math.abs(delta) > 50) {
      delta > 0 ? handlePrev() : handleNext()
    }
    dragRef.current.isDragging = false
  }

  const scrollToMobileCard = (index, behavior = 'smooth') => {
    const container = mobileScrollRef.current
    const card = mobileCardRefs.current[index]

    if (!container || !card || container.clientWidth === 0) return

    const left = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2

    container.scrollTo({
      left,
      behavior,
    })
  }

  const goToVideo = useCallback((index, behavior = 'smooth') => {
    setActiveIndex(index)
    scrollToMobileCard(index, behavior)
    // Keep current mute state — visibility handles auto-unmute
  }, [])

  const handleNext = useCallback(() => {
    const nextIndex = (activeIndex + 1) % videoPlaceholders.length
    goToVideo(nextIndex)
  }, [activeIndex, goToVideo])

  const handlePrev = useCallback(() => {
    const prevIndex = (activeIndex - 1 + videoPlaceholders.length) % videoPlaceholders.length
    goToVideo(prevIndex)
  }, [activeIndex, goToVideo])

  const handleMobileScroll = () => {
    if (scrollFrameRef.current) {
      cancelAnimationFrame(scrollFrameRef.current)
    }

    scrollFrameRef.current = requestAnimationFrame(() => {
      const container = mobileScrollRef.current

      if (!container) return

      const viewportCenter = container.scrollLeft + container.clientWidth / 2
      let closestIndex = activeIndex
      let closestDistance = Number.POSITIVE_INFINITY

      mobileCardRefs.current.forEach((card, index) => {
        if (!card) return

        const cardCenter = card.offsetLeft + card.clientWidth / 2
        const distance = Math.abs(cardCenter - viewportCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveIndex((prev) => (prev === closestIndex ? prev : closestIndex))
    })
  }

  // Helper to determine the visual position of a card
  const getVisualPosition = (index) => {
    if (index === activeIndex) return 'center'
    if (index === (activeIndex - 1 + videoPlaceholders.length) % videoPlaceholders.length) return 'left'
    if (index === (activeIndex + 1) % videoPlaceholders.length) return 'right'
    return 'hidden'
  }

  useEffect(() => {
    scrollToMobileCard(activeIndex, 'auto')
  }, [])

  useEffect(() => {
    return () => {
      if (scrollFrameRef.current) {
        cancelAnimationFrame(scrollFrameRef.current)
      }
    }
  }, [])

  const handleManualNext = () => {
    handleNext()
  }

  const handleManualPrev = () => {
    handlePrev()
  }

  const handleManualGoTo = (index) => {
    goToVideo(index)
  }

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#F8F9FA] relative overflow-hidden" aria-labelledby="problem-title">
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block bg-dark/5 text-dark font-body font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-dark/10">
            O Cenário Atual
          </span>
          <h2 id="problem-title" className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark tracking-tight leading-[1.1] mb-6">
            O que as pessoas <span className="text-gold italic">falam</span> sobre peptídeos.
          </h2>
          <p className="font-body text-xl text-dark/50 max-w-2xl mx-auto font-medium">

          </p>
        </motion.div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden -mx-4">
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex gap-4 overflow-x-auto px-[max(1rem,calc((100vw-300px)/2))] pb-6 snap-x snap-mandatory"
            style={{ touchAction: 'pan-x pan-y' }}
          >
            {videoPlaceholders.map((video, index) => {
              const isActive = index === activeIndex && sectionVisible

              return (
                <button
                  key={video.id}
                  ref={(el) => {
                    mobileCardRefs.current[index] = el
                  }}
                  type="button"
                  onClick={() => {
                    if (isActive) {
                      setIsMuted(prev => !prev)
                      return
                    }

                    handleManualGoTo(index)
                  }}
                  className={cn(
                    "snap-center shrink-0 w-[300px] h-[520px] rounded-3xl overflow-hidden text-left",
                    "bg-dark border border-dark/10 shadow-2xl",
                    isActive ? "shadow-gold/20" : "shadow-dark/10 opacity-85"
                  )}
                  style={{ touchAction: 'pan-y' }}
                >
                  <VideoCardContent
                    video={video}
                    index={index}
                    isActive={isActive}
                    isMuted={isMuted}
                  />
                </button>
              )
            })}
          </div>
        </div>

        {/* Desktop carousel */}
        <div
          className="relative hidden h-[700px] w-full max-w-5xl mx-auto items-center justify-center md:flex cursor-grab active:cursor-grabbing select-none"
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={onDragStart}
          onTouchMove={onDragMove}
          onTouchEnd={onDragEnd}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {videoPlaceholders.map((video, index) => {
              const position = getVisualPosition(index)
              const isCenter = position === 'center'
              const isHidden = position === 'hidden'

              if (isHidden) return null

              return (
                <motion.div
                  key={video.id}
                  layout
                  initial={false}
                  animate={{
                    scale: isCenter ? 1 : 0.85,
                    x: isCenter ? "0%" : position === 'left' ? "-60%" : "60%",
                    zIndex: isCenter ? 30 : 10,
                    opacity: isCenter ? 1 : 0.4,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  onClick={() => {
                    if (dragRef.current.isDragging) return
                    if (!isCenter) {
                      handleManualGoTo(index)
                    } else {
                      setIsMuted(prev => !prev)
                    }
                  }}
                  className={cn(
                    "absolute w-[280px] md:w-[360px] h-[500px] md:h-[640px] rounded-3xl overflow-hidden cursor-pointer",
                    "bg-dark border border-dark/10 shadow-2xl",
                    isCenter ? "shadow-gold/20" : "shadow-dark/10"
                  )}
                >
                  <VideoCardContent
                    video={video}
                    index={index}
                    isActive={isCenter && sectionVisible}
                    isMuted={isMuted}
                  />
                </motion.div>
              )
            })}
          </div>

        </div>

        {/* Controls - Moved outside for better spacing */}
        <div className="flex items-center justify-center gap-6 mt-16 z-40 relative">
          <button
            onClick={handleManualPrev}
            className="w-14 h-14 rounded-full border border-dark/20 flex items-center justify-center text-dark hover:bg-dark/10 transition-all hover:scale-105 active:scale-95"
            aria-label="Vídeo anterior"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          
          <div className="flex gap-3">
            {videoPlaceholders.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleManualGoTo(i)}
                aria-label={`Ir para video ${i + 1}`}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  i === activeIndex ? "bg-gold w-8" : "bg-dark/20"
                )}
              />
            ))}
          </div>

          <button
            onClick={handleManualNext}
            className="w-14 h-14 rounded-full border border-dark/20 flex items-center justify-center text-dark hover:bg-dark/10 transition-all hover:scale-105 active:scale-95"
            aria-label="Próximo vídeo"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
