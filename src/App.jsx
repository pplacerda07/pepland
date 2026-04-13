import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import PeptidesShowcase from './components/PeptidesShowcase'
import ProductVolumes from './components/ProductVolumes'
import SupplierSection from './components/SupplierSection'
import Testimonials from './components/Testimonials'
import Offer from './components/Offer'
import Guarantee from './components/Guarantee'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-body focus:font-semibold"
      >
        Pular para o conteúdo principal
      </a>

      <Navbar />

      <main id="main-content">
        {/* 1. Hero — Hook emocional e CTA primário */}
        <Hero />

        {/* 2. Stats bar — prova rápida com números */}
        <StatsBar />

        {/* 3. Problema — identificação e empatia */}
        <ProblemSection />

        {/* 4. Solução — o que são peptídeos */}
        <SolutionSection />

        {/* 5. Peptídeos — showcase dos 5 peptídeos */}
        <PeptidesShowcase />

        {/* 6. Produto — os 3 volumes em detalhe */}
        <ProductVolumes />

        {/* 7. Fornecedores — o diferencial exclusivo */}
        <SupplierSection />

        {/* 8. Depoimentos — prova social */}
        <Testimonials />

        {/* 9. Oferta — preço e CTA principal */}
        <Offer />

        {/* 10. FAQ — objeções respondidas */}
        <FAQ />

        {/* 11. Garantia — segurança de entrega */}
        <Guarantee />

        {/* 12. CTA final — fechamento */}
        <FinalCTA />
      </main>

      {/* 13. Footer com aviso legal */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingCTA />
    </div>
  )
}
