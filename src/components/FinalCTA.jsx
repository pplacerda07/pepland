import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function FinalCTA() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-hero-gradient relative overflow-hidden"
      aria-labelledby="final-cta-title"
    >
      {/* Decorative orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-8 pointer-events-none blur-3xl"
        style={{ background: 'radial-gradient(circle, #B08A43 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">Sua vez</span>

          <h2 id="final-cta-title" className="section-title mb-6">
            Queime Gordura, Ganhe Músculo{' '}
            <br />
            e Faça do{' '}
            <span className="text-gold font-bold italic">Jeito Certo</span>
          </h2>

          <p className="font-body text-dark/65 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Doses recomendadas, protocolos completos e o fornecedor exclusivo revelado para o Brasil. Tudo em português, pronto para aplicar hoje. Não seja feito de cobaia.
          </p>

          {/* Value summary */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            {[
              '3 volumes completos',
              '🔒 Fornecedor exclusivo revelado',
              'Entrega imediata por e-mail',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-body">
                <span className="w-5 h-5 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#B08A43" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <span className="text-dark/75">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <a 
            href="https://arkan-club.mycartpanda.com/checkout/209090710:1"
            className="btn-gold text-xl px-12 py-6 mb-4 block w-fit mx-auto cursor-pointer"
          >
            Quero Meu Guia Agora
          </a>

          <p className="font-body text-dark/35 text-sm font-medium">
            Por apenas <strong className="text-gold font-bold">R$ 47,90</strong> · Pagamento único · Acesso vitalício
          </p>
        </div>
      </div>
    </section>
  )
}
