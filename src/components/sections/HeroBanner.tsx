import { useEffect } from 'react'
import { IconoEnlaceExterno } from '@/components/ui/Iconos'
import { BANNER_VARIANTS } from '@/data/content'
import { pushExperimentEvent, pushExperimentEventOnce } from '@/tracking/dataLayer'
import type { Variant } from '@/experiment/core/types'

interface HeroBannerProps {
  variant: Variant
  onCtaClick: () => void
}

export function HeroBanner({ variant, onCtaClick }: HeroBannerProps) {
  const contenido = BANNER_VARIANTS[variant]

  useEffect(() => {
    pushExperimentEventOnce('view_banner', contenido.ctaLabel)
  }, [contenido.ctaLabel])

  const manejarClic = () => {
    pushExperimentEvent('click_cta', contenido.ctaLabel)
    onCtaClick()
  }

  return (
    <section
      className="banner"
      id="tarjetas"
      data-variante={variant}
      aria-label={`Banner principal, variante ${variant}`}
    >
      <span className="banner__decoracion" aria-hidden="true" />
      <span className="banner__decoracion banner__decoracion--secundaria" aria-hidden="true" />

      <div className="contenedor">
        <div className="banner__cuerpo">
          <div className="banner__info">
            <p className="banner__antetitulo">{contenido.antetitulo}</p>
            <h1 className="banner__titulo">{contenido.titulo}</h1>
            <p className="banner__descripcion">{contenido.descripcion}</p>

            <button
              type="button"
              className="banner__cta"
              data-testid="banner-cta"
              onClick={manejarClic}
            >
              {contenido.ctaLabel}
              <IconoEnlaceExterno />
            </button>

          </div>

          <div className="banner__imagen">
            <img
              src={`${import.meta.env.BASE_URL}assets/img/banner-tarjeta.png`}
              alt="Tarjeta de crédito y aplicación móvil donde eliges tu línea de crédito"
              width={900}
              height={595}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
