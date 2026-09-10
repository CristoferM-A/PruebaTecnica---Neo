import { useEffect, useRef, useState } from 'react'
import { BcpLogo, BcpIsotipo } from '@/components/ui/BcpLogo'
import {
  IconoCandado,
  IconoCerrar,
  IconoChevron,
  IconoChevronDerecha,
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
import { NAV_LINKS, SEGMENT_TABS, itemsDeNav } from '@/data/content'
import type { NavCategory, NavItem, NavLink } from '@/data/content'

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

function EnlacePanel({ item, onCerrar }: { item: NavItem; onCerrar: () => void }) {
  return (
    <li className={item.separado ? 'panel__fila panel__fila--separada' : 'panel__fila'}>
      <a className="panel__enlace" href={item.href} onClick={onCerrar}>
        {item.label}
        {item.badge && <span className="panel__badge">{item.badge}</span>}
      </a>
    </li>
  )
}

interface PanelMegaProps {
  categorias: NavCategory[]
  categoriaAbierta: string | null
  onCategoria: (label: string) => void
  onCerrar: () => void
}

function PanelMega({ categorias, categoriaAbierta, onCategoria, onCerrar }: PanelMegaProps) {
  const activa = categorias.find((categoria) => categoria.label === categoriaAbierta)

  return (
    <div className={activa ? 'panel panel--mega panel--desplegado' : 'panel panel--mega'}>
      <ul className="panel__categorias">
        {categorias.map((categoria) => (
          <li key={categoria.label}>
            <button
              type="button"
              className={
                categoria.label === categoriaAbierta
                  ? 'panel__categoria panel__categoria--activa'
                  : 'panel__categoria'
              }
              aria-expanded={categoria.label === categoriaAbierta}
              onClick={() => onCategoria(categoria.label)}
            >
              <span>{categoria.label}</span>
              <IconoChevronDerecha className="panel__categoria-flecha" />
            </button>
          </li>
        ))}
      </ul>

      {activa && (
        <div className="panel__detalle">
          <ul className="panel__lista">
            {activa.items.map((item) => (
              <EnlacePanel key={item.label} item={item} onCerrar={onCerrar} />
            ))}
          </ul>

          <aside className="panel__promo" data-tinte={activa.tinte}>
            <p className="panel__promo-titulo">{activa.promoTitulo}</p>
            <a className="panel__promo-cta" href={activa.href} onClick={onCerrar}>
              {activa.promoCta}
            </a>
          </aside>
        </div>
      )}
    </div>
  )
}

interface NavegacionProps {
  menuAbierto: string | null
  categoriaAbierta: string | null
  onMenu: (label: string) => void
  onCategoria: (label: string) => void
  onCerrar: () => void
}

function Navegacion({
  menuAbierto,
  categoriaAbierta,
  onMenu,
  onCategoria,
  onCerrar,
}: NavegacionProps) {
  return (
    <nav className="navegacion" aria-label="Navegación principal">
      {NAV_LINKS.map((link: NavLink) => {
        const abierto = menuAbierto === link.label
        return (
          <div className="navegacion__item" key={link.label}>
            <button
              type="button"
              className={
                abierto ? 'navegacion__boton navegacion__boton--activo' : 'navegacion__boton'
              }
              aria-expanded={abierto}
              onClick={() => onMenu(link.label)}
            >
              {link.label}
              <IconoChevron className="navegacion__flecha" />
            </button>

            {abierto &&
              (link.tipo === 'mega' ? (
                <PanelMega
                  categorias={link.categorias}
                  categoriaAbierta={categoriaAbierta}
                  onCategoria={onCategoria}
                  onCerrar={onCerrar}
                />
              ) : (
                <div className="panel">
                  <ul className="panel__lista">
                    {link.items.map((item) => (
                      <EnlacePanel key={item.label} item={item} onCerrar={onCerrar} />
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        )
      })}
    </nav>
  )
}

export function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [seccionAbierta, setSeccionAbierta] = useState<string | null>(null)
  const [menuDesktop, setMenuDesktop] = useState<string | null>(null)
  const [categoriaAbierta, setCategoriaAbierta] = useState<string | null>(null)
  const [quechua, setQuechua] = useState(false)
  const cabeceraRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!menuDesktop) return

    const alPulsarFuera = (evento: MouseEvent) => {
      if (!cabeceraRef.current?.contains(evento.target as Node)) setMenuDesktop(null)
    }
    const alPulsarTecla = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') setMenuDesktop(null)
    }

    document.addEventListener('pointerdown', alPulsarFuera)
    document.addEventListener('keydown', alPulsarTecla)
    return () => {
      document.removeEventListener('pointerdown', alPulsarFuera)
      document.removeEventListener('keydown', alPulsarTecla)
    }
  }, [menuDesktop])

  const alternarMenuDesktop = (label: string) => {
    setMenuDesktop((actual) => (actual === label ? null : label))
    setCategoriaAbierta(null)
  }

  const alternarCategoria = (label: string) => {
    setCategoriaAbierta((actual) => (actual === label ? null : label))
  }

  return (
    <header className="cabecera" ref={cabeceraRef}>
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

          <Navegacion
            menuAbierto={menuDesktop}
            categoriaAbierta={categoriaAbierta}
            onMenu={alternarMenuDesktop}
            onCategoria={alternarCategoria}
            onCerrar={() => setMenuDesktop(null)}
          />

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
                      {itemsDeNav(link).map((item) => (
                        <li key={item.label}>
                          <a className="menu-movil__subenlace" href={item.href}>
                            {item.label}
                            {item.badge && <span className="panel__badge">{item.badge}</span>}
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
