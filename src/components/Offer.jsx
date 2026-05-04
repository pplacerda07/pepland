import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const included = [
  { text: 'Volume 1: O que cada peptídeo faz, como funciona e adequação para cada caso + explicação de uso e reconstituição', highlight: true },
  { text: 'Volume 2: Doses recomendadas por peptídeo e objetivo, reconstituição passo a passo e guia de aplicação subcutânea', highlight: true },
  { text: 'Volume 3: Fornecedor exclusivo revelado para o Brasil + importação segura sem risco de apreensão', highlight: true },
  { text: 'Acesso imediato em PDF. Leia no celular, tablet ou computador', highlight: true },
]

export default function Offer() {
  const [ref, isVisible] = useIntersectionObserver()

  const handleCTAClick = () => {
    window.location.href = "https://arkan-club.mycartpanda.com/checkout/209090710:1"
  }

  return (
    <section id="oferta" className="py-24 md:py-32 bg-white relative" aria-labelledby="offer-title">
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block bg-dark text-white font-body font-bold text-xs tracking-widest uppercase px-5 py-2 rounded-full mb-6">
            Acesso Liberado Hoje
          </span>
          <h2 id="offer-title" className="font-heading text-4xl md:text-5xl font-extrabold text-dark tracking-tight leading-[1.1] mb-6 max-w-3xl mx-auto">
            Pare de Perder Tempo com Informação <span className="text-gold italic">Errada</span>.
          </h2>
          <p className="font-body text-xl text-dark/60 max-w-2xl mx-auto font-medium">
            Doses, fornecedores e protocolos: tudo validado, em português, num material só. Em 2 minutos no seu e-mail.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            ref={ref}
            className={`transition-all duration-1000 transform max-w-5xl mx-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          >
            {/* Top: mockup left, included items right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-14">

              {/* Left: mockup only */}
              <div className="flex justify-center md:justify-start">
                <img
                  src="/mockup_ebook.png"
                  alt="Mockup Guia dos Peptídeos"
                  className="w-full max-w-[320px] h-auto object-contain drop-shadow-xl hover:translate-y-[-5px] transition-transform duration-500"
                />
              </div>

              {/* Right: included items */}
              <div>
                <h3 className="font-heading font-extrabold text-2xl mb-6 tracking-tight text-dark">
                  O que você recebe hoje:
                </h3>
                <ul className="space-y-4 w-full" aria-label="Itens inclusos no pacote">
                  {included.map((item, i) => (
                    <li key={i} className={`flex items-start gap-4 pb-4 ${i < included.length - 1 ? 'border-b border-dark/5' : ''}`}>
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${item.highlight ? 'bg-gold shadow-sm' : 'bg-dark/10'}`}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </span>
                      <span className={`font-body text-sm leading-relaxed ${item.highlight ? 'text-dark font-medium' : 'text-dark/55'}`}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom: price + CTA */}
            <div className="border-t border-dark/5 pt-12 flex flex-col items-center text-center">
              <p className="font-heading text-dark/40 font-bold text-lg line-through decoration-dark/20 mb-2">De R$ 97</p>
              <div className="flex items-baseline justify-center gap-2 text-dark mb-2">
                <span className="font-heading font-bold text-xl md:text-2xl">Por</span>
                <span className="font-heading font-black text-6xl md:text-7xl tracking-tighter">R$ 47,90</span>
              </div>
              <p className="font-heading font-bold text-dark/60 text-lg mb-1">pagamento único</p>
              <p className="font-body text-dark/40 text-sm font-medium mb-8">Acesso vitalício ao material completo</p>

              <a
                href="https://arkan-club.mycartpanda.com/checkout/209090710:1"
                className="btn-gold block text-center w-full max-w-md text-lg py-5 mb-6 font-bold shadow-xl shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-1 transition-all duration-300 relative z-10"
              >
                Quero Meu Guia Agora
              </a>

              {/* Ícones de pagamento reais */}
              <div className="flex items-center justify-center gap-5 mb-6 opacity-70">
                {/* Visa */}
                <svg viewBox="0 0 48 32" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg" aria-label="Visa">
                  <rect width="48" height="32" rx="4" fill="#1A1F71"/>
                  <path d="M19.5 21h-2.7l1.7-10.5h2.7L19.5 21zm11.4-10.2c-.5-.2-1.4-.4-2.4-.4-2.7 0-4.5 1.4-4.5 3.4 0 1.5 1.4 2.3 2.4 2.8 1 .5 1.4.8 1.4 1.3 0 .7-.8 1-1.6 1-1.1 0-1.6-.2-2.5-.5l-.3-.2-.4 2.2c.6.3 1.8.5 3 .5 2.8 0 4.7-1.4 4.7-3.5 0-1.2-.7-2.1-2.3-2.8-.9-.5-1.5-.8-1.5-1.3 0-.4.5-.9 1.5-.9.9 0 1.5.2 2 .4l.2.1.3-2.1zm6.8 0h-2.1c-.6 0-1.1.2-1.4.8l-4 9.4h2.8l.6-1.6h3.5l.3 1.6H40l-2.3-10.2zm-3.4 6.8l1.4-3.9.2-.5.3 1.5.8 2.9h-2.7zM15.3 10.5L12.7 18l-.3-1.4c-.5-1.7-2-3.5-3.7-4.4l2.4 8.8h2.8l4.2-10.5h-2.8z" fill="#fff"/>
                  <path d="M10.3 10.5H6.1l0 .2c3.4.8 5.6 2.9 6.5 5.4l-.9-4.7c-.2-.6-.7-.8-1.4-.9z" fill="#F9A51A"/>
                </svg>
                {/* Mastercard */}
                <svg viewBox="0 0 48 32" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg" aria-label="Mastercard">
                  <rect width="48" height="32" rx="4" fill="#252525"/>
                  <circle cx="19" cy="16" r="8" fill="#EB001B"/>
                  <circle cx="29" cy="16" r="8" fill="#F79E1B"/>
                  <path d="M24 10.3a8 8 0 0 1 0 11.4 8 8 0 0 1 0-11.4z" fill="#FF5F00"/>
                </svg>
                {/* Pix */}
                <svg viewBox="0 0 48 32" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg" aria-label="Pix">
                  <rect width="48" height="32" rx="4" fill="#F5F5F5"/>
                  <g transform="translate(14,6) scale(0.85)">
                    <path d="M18.1 15.3l-3.6-3.6a2.4 2.4 0 0 0-3.4 0l-3.6 3.6a2.4 2.4 0 0 0 0 3.4l3.6 3.6a2.4 2.4 0 0 0 3.4 0l3.6-3.6a2.4 2.4 0 0 0 0-3.4z" fill="#32BCAD" transform="translate(1,-5)"/>
                    <path d="M18.1 5.3l-3.6-3.6a2.4 2.4 0 0 0-3.4 0L7.5 5.3a2.4 2.4 0 0 0 0 3.4l3.6 3.6a2.4 2.4 0 0 0 3.4 0l3.6-3.6a2.4 2.4 0 0 0 0-3.4z" fill="#32BCAD" transform="translate(1,5)"/>
                  </g>
                </svg>
                {/* Boleto */}
                <svg viewBox="0 0 48 32" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg" aria-label="Boleto">
                  <rect width="48" height="32" rx="4" fill="#F5F5F5"/>
                  <rect x="10" y="8" width="2" height="16" fill="#333"/>
                  <rect x="14" y="8" width="1" height="16" fill="#333"/>
                  <rect x="17" y="8" width="3" height="16" fill="#333"/>
                  <rect x="22" y="8" width="1" height="16" fill="#333"/>
                  <rect x="25" y="8" width="2" height="16" fill="#333"/>
                  <rect x="29" y="8" width="1" height="16" fill="#333"/>
                  <rect x="32" y="8" width="2" height="16" fill="#333"/>
                  <rect x="36" y="8" width="1" height="16" fill="#333"/>
                  <rect x="38" y="8" width="2" height="16" fill="#333"/>
                </svg>
              </div>

              <p className="font-body text-dark/50 text-sm font-medium">
                🔒 Ambiente de pagamento 100% seguro. Acesso enviado automaticamente por e-mail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
