import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const included = [
  { text: 'Acesso completo ao Volume 1: O Guia Definitivo dos Peptídeos', highlight: true },
  { text: 'Volume 2: Guia de Doses e Reconstituição com tabelas, cálculos e passo a passo completo', highlight: true },
  { text: 'Volume 3: Lista Exclusiva de Fornecedores Verificados no cenário nacional e internacional', highlight: true },
  { text: 'Acesso imediato em PDF para ler no celular, tablet ou computador', highlight: true },
  { text: 'Todas as atualizações futuras e novos peptídeos mapeados', highlight: true },
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
            Não desperdice meses procurando o que já está <span className="text-gold italic">validado</span>.
          </h2>
          <p className="font-body text-xl text-dark/60 max-w-2xl mx-auto font-medium">
            Você está a 2 minutos de acessar o exato mapa molecular usado por quem domina a própria composição corporal.
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
                  Tudo o que você recebe hoje:
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
                Quero o Pacote Completo
              </a>

              <div className="flex items-center justify-center gap-6 opacity-60 mix-blend-multiply mb-6">
                <svg viewBox="0 0 32 32" className="h-5 w-auto grayscale" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M22.022 17.514L28.1 4.5h-4.398l-4.706 10.038l-4.71-10.038H9.897L15.98 17.51l-6.852 14.65H13.52l5.474-11.722l5.483 11.722h4.412" fill="#5E5E5E"/><path d="M5.578 4.496H1.14l8.36 17.702l-1.614 3.426l4.38.004l12.87-21.13h-4.4L13.197 18.06" fill="#000"/></g></svg>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" alt="Mastercard" className="h-5 grayscale object-contain" />
                <svg viewBox="0 0 38 12" className="h-4 w-auto grayscale" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M13.623 0L9.049 11.23H4.49L7.433 0h6.19zM36.173.018l-3.328 11.212H28.19L31.517.018h4.656zm-12.75 3.125c-.015-1.092.986-1.745 2.158-2.091 1.171-.345 3.329-.396 4.675.31l.937-2.673c-1.345-.558-4.045-.843-6.195-.843-2.053 0-4.053.69-5.183 1.956-1.129 1.266-1.196 2.753-.541 3.514.801.932 2.652 1.572 2.652 1.572.766.425 2.89.846 2.89 1.846 0 1-.95 1.583-2.315 1.583-1.65-.015-3.645-.66-4.995-1.28l-1 2.82c1.35.615 3.24 1.155 5.535 1.17 2.055.015 4.095-.69 5.25-1.995 1.155-1.305 1.305-2.73 0-3.87-.645-.555-2.19-1.29-3.255-1.605 0 0-2.325-.57-2.31-1.665h-.015zM4.14 0H.465C-.105 0-.15.42.15.825l7.98 10.405H13.6L9.855 1.05C9.72.39 9.18 0 8.52 0H4.14z"/></svg>
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
