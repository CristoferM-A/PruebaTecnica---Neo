import { bannerTarjetas } from '@/experiment/definitions/bannerTarjetas'
import type { Assignment } from '@/experiment/core/types'

interface DebugPanelProps extends Assignment {
  onReset: () => void
}

const ORIGEN: Record<Assignment['source'], string> = {
  override: 'Forzada por URL (QA)',
  persisted: 'Recuperada del storage',
  random: 'Sorteada en esta visita',
}

export function DebugPanel({ variant, source, visitorId, isQaMode, onReset }: DebugPanelProps) {
  return (
    <aside className="debug" aria-label="Panel de diagnóstico del experimento">
      <div className="debug__cabecera">
        <h2 className="debug__titulo">Debug del experimento</h2>
        <span className={variant === 'B' ? 'debug__variante debug__variante--b' : 'debug__variante'}>
          Variante {variant}
        </span>
      </div>

      <dl className="debug__datos">
        <div className="debug__fila">
          <dt className="debug__clave">Experimento</dt>
          <dd className="debug__valor">{bannerTarjetas.id}</dd>
        </div>
        <div className="debug__fila">
          <dt className="debug__clave">Origen</dt>
          <dd className="debug__valor">{ORIGEN[source]}</dd>
        </div>
        <div className="debug__fila">
          <dt className="debug__clave">Alcance</dt>
          <dd className="debug__valor">
            {bannerTarjetas.scope === 'user' ? 'localStorage' : 'sessionStorage'}
          </dd>
        </div>
        <div className="debug__fila">
          <dt className="debug__clave">visitorId</dt>
          <dd className="debug__valor" title={visitorId}>
            {visitorId.slice(0, 13)}…
          </dd>
        </div>
        <div className="debug__fila">
          <dt className="debug__clave">qaMode</dt>
          <dd className={isQaMode ? 'debug__valor debug__valor--qa' : 'debug__valor debug__valor--live'}>
            {isQaMode ? 'true, excluido' : 'false, cuenta'}
          </dd>
        </div>
      </dl>

      <button type="button" className="debug__reset" onClick={onReset}>
        Borrar asignación y re-sortear
      </button>

      <p className="debug__ayuda">
        Forzar variante: <code>?variant=A</code> o <code>?variant=B</code>
      </p>
    </aside>
  )
}
