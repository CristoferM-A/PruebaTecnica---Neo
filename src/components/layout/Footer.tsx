import { useState } from 'react'
import { IconoChevron, IconoSubir } from '@/components/ui/Iconos'
import {
  COPYRIGHT,
  FOOTER_COLUMNS,
  LEGAL_SEALS,
  SOCIAL_LINKS,
} from '@/data/content'

const BASE = import.meta.env.BASE_URL

function irArriba() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function Footer() {
  const [abierta, setAbierta] = useState<string | null>(null)

  return (
    <footer className="pie">
      <div className="contenedor">
        <div className="pie__subir">
          <button
            type="button"
            className="pie__subir-boton"
            onClick={irArriba}
            aria-label="Volver arriba"
          >
            <IconoSubir />
          </button>
        </div>

        <div className="pie__columnas">
          {FOOTER_COLUMNS.map((columna) => {
            const desplegada = abierta === columna.title
            return (
              <nav
                key={columna.title}
                className={desplegada ? 'pie__columna pie__columna--abierta' : 'pie__columna'}
                aria-label={columna.title}
              >
                <h2 className="pie__titulo">
                  <span className="pie__titulo-texto">{columna.title}</span>
                  <button
                    type="button"
                    className="pie__acordeon"
                    aria-expanded={desplegada}
                    onClick={() => setAbierta(desplegada ? null : columna.title)}
                  >
                    <span className="solo-lectores">{columna.title}</span>
                    <IconoChevron className="pie__acordeon-flecha" size={20} />
                  </button>
                </h2>
                <ul className="pie__lista">
                  {columna.links.map((enlace) => (
                    <li key={enlace.label}>
                      <a className="pie__enlace" href={enlace.href}>
                        {enlace.label}
                      </a>
                      {enlace.badge && <span className="pie__etiqueta">{enlace.badge}</span>}
                    </li>
                  ))}
                </ul>
              </nav>
            )
          })}

          <div className="pie__app">
            <div className="pie__app-info">
              <h2 className="pie__app-titulo">Descarga el App Banca Móvil BCP</h2>
              <p className="pie__app-texto">Escanea el QR con tu celular y conoce más</p>
            </div>
            <div className="pie__app-medios">
              <img
                className="pie__qr"
                src={`${BASE}assets/img/BCP-QR.jpg`}
                alt="Código QR para descargar la App Banca Móvil BCP"
                width={112}
                height={112}
              />
              <picture>
                <source
                  media="(max-width: 991px)"
                  srcSet={`${BASE}assets/img/Celular-banca-movil-mobile.png`}
                />
                <img
                  className="pie__celular"
                  src={`${BASE}assets/img/Celular-banca-movil-desktop.png`}
                  alt=""
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="pie__contacto">
          <div>
            <h2 className="pie__contacto-titulo">Contáctanos</h2>
            <ul className="pie__contacto-lista">
              <li>
                <a className="contacto-enlace contacto-enlace--whatsapp" href="#whatsapp">
                  <span className="contacto-enlace__icono">
                    <img src={`${BASE}assets/img/ico-whatsapp.svg`} alt="" width={24} height={24} />
                    <img
                      src={`${BASE}assets/img/ico-whatsapp-hover.svg`}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </span>
                  Chatea por Whatsapp
                </a>
              </li>
              <li>
                <a className="contacto-enlace" href="#ubicanos">
                  <span className="contacto-enlace__icono">
                    <img src={`${BASE}assets/img/ico-ubicanos.svg`} alt="" width={24} height={24} />
                    <img
                      src={`${BASE}assets/img/ico-ubicanos-hover.svg`}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </span>
                  Ubica una Agencia
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="pie__contacto-titulo">Síguenos</h2>
            <div className="redes">
              {SOCIAL_LINKS.map((red) => (
                <a
                  key={red.label}
                  className="redes__enlace"
                  href={`#${red.label.toLowerCase()}`}
                  aria-label={red.label}
                >
                  <img src={`${BASE}assets/img/${red.icon}`} alt="" width={32} height={32} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pie__legal">
        <div className="contenedor">
          <p className="pie__copyright">{COPYRIGHT}</p>
          <ul className="pie__sellos">
            {LEGAL_SEALS.map((sello) => (
              <li key={sello.label}>
                <a
                  className="pie__sello"
                  href={`#${sello.label.toLowerCase().replace(/\s+/g, '-')}`}
                  aria-label={sello.label}
                >
                  <img
                    src={`${BASE}assets/img/${sello.file}`}
                    alt={sello.label}
                    width={sello.width}
                    height={sello.height}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
