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

export interface NavLink {
  label: string
  href: string
  icon: 'tarjeta' | 'movil' | 'estrella'
  items: string[]
}

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Productos',
    href: '#productos',
    icon: 'tarjeta',
    items: ['Cuentas', 'Tarjetas de crédito', 'Créditos', 'Seguros', 'Inversiones'],
  },
  {
    label: 'Soluciones Digitales',
    href: '#soluciones-digitales',
    icon: 'movil',
    items: ['Banca por Internet', 'App Banca Móvil', 'Yape', 'Pago de servicios'],
  },
  {
    label: 'Beneficios',
    href: '#beneficios',
    icon: 'estrella',
    items: ['Promociones', 'Cuotas sin intereses', 'Millas LATAM Pass', 'Sorteos'],
  },
  {
    label: 'Ayuda y Educación',
    href: '#ayuda',
    icon: 'estrella',
    items: ['Centro de ayuda', 'Preguntas frecuentes', 'ABC del BCP', 'Canales de atención'],
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
