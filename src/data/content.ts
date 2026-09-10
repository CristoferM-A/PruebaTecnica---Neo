import type { Variant } from '@/experiment/core/types'

export interface BannerVariantContent {
  variant: Variant
  antetitulo: string
  titulo: string
  descripcion: string
  ctaLabel: string
}

export const BANNER_VARIANTS: Record<Variant, BannerVariantContent> = {
  A: {
    variant: 'A',
    antetitulo: 'TARJETAS',
    titulo: '¡Nuevo! Ahora tú decides la línea de tu tarjeta de crédito',
    descripcion: 'Beneficio solo por la web',
    ctaLabel: 'Solicita ahora',
  },
  B: {
    variant: 'B',
    antetitulo: 'TARJETAS',
    titulo: 'Tu nueva tarjeta de crédito aprobada en solo 10 minutos',
    descripcion: '100% en línea, sin papeleos',
    ctaLabel: 'Aplica ya',
  },
}

export interface NavItem {
  label: string
  href: string
  badge?: string
  separado?: boolean
}

export interface NavCategory extends NavItem {
  tinte: number
  promoTitulo: string
  promoCta: string
  items: NavItem[]
}

interface NavBase {
  label: string
  href: string
  icon: 'tarjeta' | 'movil' | 'estrella'
}

export type NavLink =
  | (NavBase & { tipo: 'mega'; categorias: NavCategory[] })
  | (NavBase & { tipo: 'simple'; items: NavItem[] })

export function itemsDeNav(link: NavLink): NavItem[] {
  return link.tipo === 'mega' ? link.categorias : link.items
}

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Productos',
    href: '#productos',
    icon: 'tarjeta',
    tipo: 'mega',
    categorias: [
      {
        label: 'Cuentas',
        href: '#cuentas',
        tinte: 1,
        promoTitulo: '¡Tus ahorros te premian todos los días!',
        promoCta: 'Regístrate aquí',
        items: [
          { label: 'Cuenta Contigo: Retiro AFP', href: '#cuenta-contigo', badge: 'Nuevo' },
          { label: 'Cuenta Digital', href: '#cuenta-digital' },
          { label: 'Cuenta Premio', href: '#cuenta-premio' },
          { label: 'Cuenta Sueldo', href: '#cuenta-sueldo' },
          { label: 'Cuenta Ilimitada', href: '#cuenta-ilimitada' },
          { label: 'Wardaditos', href: '#wardaditos' },
          { label: 'Ver todos', href: '#cuentas-todas' },
          { label: 'Cuenta CTS', href: '#cuenta-cts' },
          { label: 'Sorteos y Promociones', href: '#sorteos', separado: true },
        ],
      },
      {
        label: 'Tarjetas',
        href: '#tarjetas',
        tinte: 2,
        promoTitulo: 'Cuotas sin intereses en más de 3,000 comercios',
        promoCta: 'Conoce más',
        items: [
          { label: 'Tarjeta de Crédito', href: '#solicitud' },
          { label: 'Tarjeta de Débito', href: '#tarjeta-debito' },
          { label: 'Tarjeta de Crédito iO', href: '#tarjeta-io' },
          { label: 'Tarjeta LATAM Pass', href: '#tarjeta-latam' },
          { label: 'Tarjeta American Express', href: '#tarjeta-amex' },
          { label: 'Ver todas', href: '#tarjetas-todas' },
        ],
      },
      {
        label: 'Préstamos',
        href: '#prestamos',
        tinte: 3,
        promoTitulo: 'Simula tu préstamo y recibe el dinero en minutos',
        promoCta: 'Simula aquí',
        items: [
          { label: 'Préstamo Personal', href: '#prestamo-personal' },
          { label: 'Préstamo con Garantía', href: '#prestamo-garantia' },
          { label: 'Crédito Hipotecario', href: '#credito-hipotecario' },
          { label: 'Crédito Vehicular', href: '#credito-vehicular' },
          { label: 'Adelanto de Sueldo', href: '#adelanto-sueldo' },
          { label: 'Ver todos', href: '#prestamos-todos' },
        ],
      },
      {
        label: 'Seguros',
        href: '#seguros',
        tinte: 4,
        promoTitulo: 'Protege lo que más te importa desde S/ 15 al mes',
        promoCta: 'Cotiza aquí',
        items: [
          { label: 'Seguro Vehicular', href: '#seguro-vehicular' },
          { label: 'Seguro de Vida', href: '#seguro-vida' },
          { label: 'Seguro de Hogar', href: '#seguro-hogar' },
          { label: 'Seguro Oncológico', href: '#seguro-oncologico' },
          { label: 'Seguro de Viaje', href: '#seguro-viaje' },
          { label: 'Ver todos', href: '#seguros-todos' },
        ],
      },
      {
        label: 'Inversiones',
        href: '#inversiones',
        tinte: 5,
        promoTitulo: 'Empieza a invertir desde S/ 100',
        promoCta: 'Empieza hoy',
        items: [
          { label: 'Fondos Mutuos', href: '#fondos-mutuos' },
          { label: 'Depósito a Plazo', href: '#deposito-plazo' },
          { label: 'Cuenta a Plazo', href: '#cuenta-plazo' },
          { label: 'Ahorro con Propósito', href: '#ahorro-proposito' },
          { label: 'Ver todos', href: '#inversiones-todas' },
        ],
      },
      {
        label: 'Tipo de cambio',
        href: '#tipo-de-cambio',
        tinte: 6,
        promoTitulo: 'Cambia tus dólares al mejor tipo de cambio',
        promoCta: 'Cambia aquí',
        items: [
          { label: 'Cambio de moneda', href: '#cambio-moneda' },
          { label: 'Tipo de cambio del día', href: '#cambio-dia' },
          { label: 'Cambio programado', href: '#cambio-programado' },
          { label: 'Ver detalle', href: '#cambio-detalle' },
        ],
      },
      {
        label: 'Servicios',
        href: '#servicios',
        tinte: 7,
        promoTitulo: 'Paga tus servicios sin salir de casa',
        promoCta: 'Ver servicios',
        items: [
          { label: 'Pago de servicios', href: '#pago-servicios' },
          { label: 'Transferencias', href: '#transferencias' },
          { label: 'Recargas', href: '#recargas' },
          { label: 'Giros al exterior', href: '#giros' },
          { label: 'Ubícanos', href: '#ubicanos' },
          { label: 'Ver todos', href: '#servicios-todos' },
        ],
      },
    ],
  },
  {
    label: 'Soluciones Digitales',
    href: '#soluciones-digitales',
    icon: 'movil',
    tipo: 'simple',
    items: [
      { label: 'Banca Móvil', href: '#banca-movil' },
      { label: 'Banca por Internet', href: '#banca-por-internet' },
      { label: 'Yape', href: '#yape' },
      { label: 'Tarjeta de Crédito iO', href: '#tarjeta-io' },
      { label: 'Pago Automático', href: '#pago-automatico' },
      { label: 'Otras soluciones', href: '#otras-soluciones' },
    ],
  },
  {
    label: 'Beneficios',
    href: '#beneficios',
    icon: 'estrella',
    tipo: 'simple',
    items: [
      { label: 'Programa de Lealtad Qore', href: '#qore', badge: 'Nuevo' },
      { label: 'Mundo Cuenta Sueldo QORE', href: '#mundo-cuenta-sueldo' },
      { label: 'Mundo Tarjetas de Crédito', href: '#mundo-tarjetas' },
      { label: 'Cuotas Sin Intereses', href: '#cuotas-sin-intereses' },
      { label: 'Mi Espacio BCP', href: '#mi-espacio' },
    ],
  },
  {
    label: 'Ayuda y Educación',
    href: '#ayuda',
    icon: 'estrella',
    tipo: 'simple',
    items: [
      { label: 'Centro de Ayuda', href: '#centro-de-ayuda' },
      { label: 'Cursos Virtuales ABC', href: '#cursos-abc' },
      { label: 'Facilidades de Pago', href: '#facilidades-de-pago' },
      { label: 'Alerta fraude', href: '#alerta-fraude' },
      { label: 'Ubícanos', href: '#ubicanos' },
      { label: 'Procesos pendientes', href: '#procesos-pendientes' },
    ],
  },
]

export const SEGMENT_TABS = [
  { label: 'Personas', href: '#personas', active: true },
  { label: 'PyMES', href: '#pymes', active: false },
  { label: 'Empresas', href: '#empresas', active: false },
] as const

export const BREADCRUMB = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Tarjetas', href: '#tarjetas' },
  { label: 'Tarjetas de crédito', href: null },
] as const

export const BENEFITS = [
  {
    icon: 'cuotas',
    title: 'Cuotas desde 0% de interés',
    description:
      'Compra en más de 3,000 comercios afiliados y paga hasta en 24 cuotas sin intereses.',
  },
  {
    icon: 'millas',
    title: 'Acumula millas LATAM Pass',
    description: 'Gana millas por cada sol que consumas y canjéalas por vuelos a donde quieras ir.',
  },
  {
    icon: 'proteccion',
    title: 'Protección total de tus compras',
    description:
      'Seguro de protección de compras, bloqueo inmediato desde la app y alertas en tiempo real.',
  },
] as const

interface FooterLink {
  label: string
  href: string
  badge?: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Sobre el BCP',
    links: [
      { label: 'Nuestra historia y principios', href: '#historia' },
      { label: 'Información para inversionistas BCP', href: '#inversionistas' },
      { label: 'Responsabilidad Social BCP', href: '#responsabilidad-social' },
      { label: 'Centro de Innovación', href: '#innovacion' },
      { label: 'Trabaja con nosotros', href: '#trabaja-con-nosotros', badge: '¡Postula hoy!' },
    ],
  },
  {
    title: 'Ayuda',
    links: [
      { label: 'Cancela tu producto', href: '#cancela-producto' },
      { label: 'Cancela tu tarjeta de crédito', href: '#cancela-tarjeta' },
      { label: 'Cancela tu seguro', href: '#cancela-seguro' },
      { label: 'Solicitud de Ajustes Razonables', href: '#ajustes-razonables' },
    ],
  },
  {
    title: 'Legales',
    links: [
      { label: 'Tasas y tarifas', href: '#tasas-y-tarifas' },
      { label: 'Transparencia de información', href: '#transparencia' },
      { label: 'Declaración del Beneficiario final', href: '#beneficiario-final' },
      { label: '¿Cómo protegemos tus datos?', href: '#proteccion-datos' },
      { label: 'Accesibilidad', href: '#accesibilidad' },
    ],
  },
  {
    title: 'Novedades',
    links: [{ label: 'Ganadores de sorteos y promociones 2025', href: '#ganadores' }],
  },
]

export const SOCIAL_LINKS = [
  { label: 'Facebook', icon: 'ico-facebook.svg' },
  { label: 'YouTube', icon: 'ico-youtube.svg' },
  { label: 'LinkedIn', icon: 'ico-linkedin.svg' },
  { label: 'Instagram', icon: 'ico-instagram.svg' },
] as const

export const LEGAL_SEALS = [
  { label: 'Sistema de Denuncias', file: 'alerta-sistema-denuncias.svg', width: 110, height: 72 },
  { label: 'Libro de Reclamaciones', file: 'libro-reclamaciones.png', width: 125, height: 72 },
  { label: 'Compromiso', file: 'compromiso-footer.svg', width: 72, height: 72 },
  { label: 'Espacio Accesible', file: 'espacio-accesible-footer.svg', width: 72, height: 72 },
] as const

export const COPYRIGHT =
  '© 2026 BCP | Todos los derechos reservados. Sede Central, Centenario 156, La Molina 15026, Lima, Perú. BANCO DE CREDITO DEL PERU S.A - RUC 20100047218'
