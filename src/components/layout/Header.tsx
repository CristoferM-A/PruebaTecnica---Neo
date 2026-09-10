import { useState } from 'react'
import { BcpLogo, BcpIsotipo } from '@/components/ui/BcpLogo'
import {
  IconoCandado,
  IconoCerrar,
  IconoChevron,
  IconoEstrella,
  IconoEstrellaSolida,
  IconoLupa,
  IconoMas,
  IconoMenos,
  IconoMenu,
  IconoMovil,
  IconoTarjetaAnimado,
  IconoTarjetaMenu,
} from '@/components/ui/Iconos'
import { Cintillo } from './Cintillo'
import { NAV_LINKS, SEGMENT_TABS } from '@/data/content'

const ICONOS_MENU = {
  tarjeta: IconoTarjetaMenu,
  movil: IconoMovil,
  estrella: IconoEstrella,
}

function BotonBuscar({ ancho = false }: { ancho?: boolean }) {
  return (
    <button type="button" className={ancho ? 'boton-buscar boton-buscar--ancho' : 'boton-buscar'}>
      <span className="boton-buscar__icono">
        <IconoLupa />
        <IconoEstrellaSolida className="boton-buscar__estrella boton-buscar__estrella--1" />
        <IconoEstrellaSolida className="boton-buscar__estrella boton-buscar__estrella--2" />
        <IconoEstrellaSolida className="boton-buscar__estrella boton-buscar__estrella--3" />
      </span>
      <span>Buscar</span>
    </button>
  )
}

export function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [seccionAbierta, setSeccionAbierta] = useState<string | null>(null)
  const [quechua, setQuechua] = useState(false)

  return (
    <header className="cabecera">
      <Cintillo />

      <div className="cabecera__nivel1">
        <div className="contenedor">
          <ul className="segmentos">
            {SEGMENT_TABS.map((tab) => (
              <li key={tab.label}>
                <a
                  className={
                    tab.active ? 'segmentos__enlace segmentos__enlace--activo' : 'segmentos__enlace'
                  }
                  href={tab.href}
                  aria-current={tab.active ? 'page' : undefined}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="idiomas">
            <li>
              <button
                type="button"
                className="idiomas__boton idiomas__boton--activo"
                aria-label="Cambiar la página al idioma español"
              >
                Español
              </button>
            </li>
            <li className="idiomas__separador" aria-hidden="true">
              /
            </li>
            <li>
              <button
                type="button"
                className="idiomas__boton"
                aria-label="Cambiar la página al idioma quechua"
              >
                Quechua
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="cabecera__nivel2">
        <div className="contenedor">
          <a className="cabecera__logo" href="#inicio" aria-label="Enlace al home de ViaBCP">
            <BcpLogo className="cabecera__logo-completo" />
            <BcpIsotipo className="cabecera__logo-isotipo" />
          </a>

          <nav className="navegacion" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a key={link.label} className="navegacion__enlace" href={link.href}>
                {link.label}
                <IconoChevron className="navegacion__flecha" />
              </a>
            ))}
          </nav>

          <div className="cabecera__acciones">
            <BotonBuscar />

            <a
              className="boton-banca"
              href="#banca-por-internet"
              aria-label="Enlace a Banca por Internet"
            >
              <IconoCandado />
              <span className="boton-banca__largo">Banca por Internet</span>
              <span className="boton-banca__corto">Banca</span>
            </a>

            <a className="boton-tarjeta" href="#solicitud">
              <IconoTarjetaAnimado />
              <span className="boton-tarjeta__largo">Adquiere tu tarjeta</span>
              <span className="boton-tarjeta__corto">Tarjeta</span>
            </a>

            <button
              type="button"
              className="cabecera__lupa"
              aria-label="Buscar"
              onClick={() => setMenuAbierto(true)}
            >
              <IconoLupa size={24} />
            </button>

            <button
              type="button"
              className="cabecera__menu"
              aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuAbierto}
              onClick={() => setMenuAbierto((abierto) => !abierto)}
            >
              {menuAbierto ? <IconoCerrar /> : <IconoMenu />}
            </button>
          </div>
        </div>
      </div>

      {menuAbierto && (
        <nav className="menu-movil" aria-label="Menú móvil">
          <div className="menu-movil__buscador">
            <BotonBuscar ancho />
          </div>

          <div className="menu-movil__segmentos">
            {SEGMENT_TABS.map((tab) => (
              <a
                key={tab.label}
                href={tab.href}
                className={
                  tab.active
                    ? 'menu-movil__segmento menu-movil__segmento--activo'
                    : 'menu-movil__segmento'
                }
              >
                {tab.label}
              </a>
            ))}
          </div>

          <ul className="menu-movil__lista">
            {NAV_LINKS.map((link) => {
              const abierta = seccionAbierta === link.label
              const IconoSeccion = ICONOS_MENU[link.icon]
              return (
                <li key={link.label}>
                  <button
                    type="button"
                    className="menu-movil__seccion"
                    aria-expanded={abierta}
                    onClick={() => setSeccionAbierta(abierta ? null : link.label)}
                  >
                    <span className="menu-movil__seccion-texto">
                      <IconoSeccion />
                      {link.label}
                    </span>
                    {abierta ? <IconoMenos /> : <IconoMas />}
                  </button>

                  {abierta && (
                    <ul className="menu-movil__sublista">
                      {link.items.map((item) => (
                        <li key={item}>
                          <a className="menu-movil__subenlace" href={link.href}>
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>

          <div className="menu-movil__quechua">
            <span>Rikuchiy en quechua</span>
            <button
              type="button"
              className={quechua ? 'interruptor interruptor--activo' : 'interruptor'}
              role="switch"
              aria-checked={quechua}
              aria-label="Mostrar la página en quechua"
              onClick={() => setQuechua((valor) => !valor)}
            >
              <span className="interruptor__bola" />
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
