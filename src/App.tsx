import { useCallback } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroBanner } from '@/components/sections/HeroBanner'
import { Benefits } from '@/components/sections/Benefits'
import { LeadFormSection } from '@/components/form/LeadFormSection'
import { DebugPanel } from '@/components/ui/DebugPanel'
import { useExperiment } from '@/experiment/useExperiment'
import { esModoDebug } from '@/experiment/core/assign'
import { bannerTarjetas } from '@/experiment/definitions/bannerTarjetas'

export default function App() {
  const { variant, source, visitorId, isQaMode, resetAssignment } = useExperiment(bannerTarjetas.id)
  const showDebugPanel = esModoDebug()

  const scrollToForm = useCallback(() => {
    document.getElementById('solicitud')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [])

  return (
    <div className="pagina" data-variante={variant}>
      <Header />

      <main id="inicio">
        <HeroBanner variant={variant} onCtaClick={scrollToForm} />
        <Benefits />
        <LeadFormSection />
      </main>

      <Footer />

      {showDebugPanel && (
        <DebugPanel
          variant={variant}
          source={source}
          visitorId={visitorId}
          isQaMode={isQaMode}
          onReset={resetAssignment}
        />
      )}
    </div>
  )
}
