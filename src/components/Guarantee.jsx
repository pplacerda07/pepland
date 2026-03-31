import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function Guarantee() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section
      ref={ref}
      className="py-16 bg-cream"
      aria-labelledby="guarantee-title"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className={`flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Guarantee badge */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32">
              <div className="w-32 h-32 rounded-full bg-gold-gradient flex flex-col items-center justify-center shadow-gold-lg" role="img" aria-label="Garantia de satisfação">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <p className="font-body text-white font-bold text-sm font-medium mt-1">GARANTIA</p>
                <p className="font-body text-white/80 text-xs font-medium">7 DIAS</p>
              </div>
              {/* Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gold/30 scale-110" aria-hidden="true" />
            </div>
          </div>

          {/* Guarantee content */}
          <div>
            <h2 id="guarantee-title" className="font-heading text-2xl md:text-3xl font-extrabold text-dark mb-3">
              Satisfação Garantida ou{' '}
              <span className="text-gold font-bold">seu Dinheiro de Volta</span>
            </h2>
            <p className="font-body text-dark/65 text-base leading-relaxed mb-4">
              Temos tanta confiança no valor do conteúdo que oferecemos uma garantia irrestrita de 7 dias.
              Se por qualquer motivo você não ficar satisfeito com o que recebeu, basta entrar em contato
              e devolvemos 100% do seu investimento de imediato, sem perguntas e sem burocracia.
            </p>
            <p className="font-body text-dark/50 text-sm font-medium leading-relaxed">
              Nossa prioridade é que você tenha a transformação que busca. Se o material não te entregar o
              valor prometido, você não deve pagar por ele. É simples assim.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
