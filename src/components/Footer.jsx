export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#F8F9FA] border-t border-dark/5" role="contentinfo">
      {/* Legal disclaimer */}
      <div className="border-b border-dark/5 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#97A79D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <h3 className="font-body font-bold text-sage text-sm font-medium uppercase tracking-wider">Aviso Legal e Isenção de Responsabilidade</h3>
            </div>
            <p className="font-body text-xs text-dark/45 font-medium leading-relaxed max-w-4xl opacity-80 mt-2">
              O conteúdo disponibilizado neste produto, incluindo todos os volumes do Guia Definitivo dos Peptídeos, o Guia de Doses e a Lista de Fornecedores, é de natureza estritamente <strong className="text-dark/55">informativa e educacional</strong>. Não substitui, em nenhuma hipótese, o diagnóstico, aconselhamento médico, nutricional ou plano de tratamento individualizado de um profissional de saúde qualificado. A aplicação prática destas informações é de inteira responsabilidade do leitor. Nossas avaliações de fornecedores baseiam-se em laudos técnicos e reputação à data da inclusão, não configurando indicação médica de uso. Consulte seu médico antes de iniciar qualquer protocolo ou alteração metabólica e fisiológica. Os autores e distribuidores deste material não se responsabilizam por usos inadequados, efeitos adversos, danos à saúde ou quaisquer consequências decorrentes da aplicação das informações aqui contidas sem orientação profissional adequada. Os estudos clínicos citados são referências científicas e os resultados individuais podem variar significativamente.
            </p>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gold/30 flex items-center justify-center" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B08A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span className="font-heading text-sm font-medium text-dark/50">Guia dos Peptídeos</span>
            </div>

            {/* Links */}
            <nav aria-label="Links legais">
              <ul className="flex items-center gap-5">
                {[
                  { label: 'Política de Privacidade', href: '#' },
                  { label: 'Termos de Uso', href: '#' },
                  { label: 'Contato', href: 'mailto:contato@guiadospeptideos.com' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-xs font-medium text-dark/35 hover:text-dark/60 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Copyright */}
            <p className="font-body text-xs font-medium text-dark/25">
              &copy; {year} Guia dos Peptídeos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
