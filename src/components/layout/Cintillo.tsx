import { useEffect, useState } from 'react'
import { IconoCerrar, IconoFlecha } from '@/components/ui/Iconos'

const ALTURA_REAPARICION = 100

export function Cintillo() {
  const [cerrado, setCerrado] = useState(false)
  const [enTope, setEnTope] = useState(true)

  useEffect(() => {
    const alScrollear = () => setEnTope(window.scrollY <= ALTURA_REAPARICION)
    alScrollear()
    window.addEventListener('scroll', alScrollear, { passive: true })
    return () => window.removeEventListener('scroll', alScrollear)
  }, [])

  if (cerrado) return null

  return (
    <div
      className={enTope ? 'cintillo' : 'cintillo cintillo--oculto'}
      aria-hidden={!enTope}
    >
      <a className="cintillo__enlace" href="#solicitud" tabIndex={enTope ? undefined : -1}>
        <span className="cintillo__texto">
          <span aria-hidden="true">⚙️</span>
          ¡Nuevo! Ahora tú decides la línea de tu tarjeta de crédito
          <IconoFlecha className="cintillo__flecha" />
        </span>
      </a>
      <button
        type="button"
        className="cintillo__cerrar"
        aria-label="Cerrar promoción"
        tabIndex={enTope ? undefined : -1}
        onClick={() => setCerrado(true)}
      >
        <IconoCerrar size={20} />
      </button>
    </div>
  )
}
