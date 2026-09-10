interface IconoProps {
  className?: string
  size?: number
}

export function IconoFlecha({ className, size = 16 }: IconoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.66667 7.33465H11.7227L9.526 5.13798C9.26533 4.87732 9.26533 4.45598 9.526 4.19532C9.78667 3.93465 10.2087 3.93465 10.4687 4.19532L13.802 7.52865C14.0627 7.78932 14.0627 8.21065 13.802 8.47132L10.4713 11.8047C10.3413 11.9347 10.1707 12 10 12C9.82933 12 9.65867 11.9347 9.52867 11.8047C9.268 11.5447 9.268 11.1227 9.528 10.862L11.7207 8.66798H2.66667C2.298 8.66798 2 8.36998 2 8.00132C2 7.63265 2.298 7.33465 2.66667 7.33465Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconoEnlaceExterno({ className, size = 16 }: IconoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.33333 2C7.70152 2 8 2.29848 8 2.66667C8 3.00856 7.74264 3.29034 7.41108 3.32885L7.33333 3.33333H3.33333V12.6667H12.6667V8.66667C12.6667 8.32478 12.924 8.043 13.2556 8.00449L13.3333 8C13.6752 8 13.957 8.25736 13.9955 8.58892L14 8.66667V13.3333C14 13.6752 13.7426 13.957 13.4111 13.9955L13.3333 14H2.66667C2.32478 14 2.043 13.7426 2.00449 13.4111L2 13.3333V2.66667C2 2.32478 2.25736 2.043 2.58892 2.00449L2.66667 2H7.33333ZM13.3333 2C13.6752 2 13.957 2.25736 13.9955 2.58892L14 2.66667V6C14 6.36819 13.7015 6.66667 13.3333 6.66667C12.9914 6.66667 12.7097 6.40931 12.6712 6.07775L12.6667 6V4.276L9.13807 7.80474C8.87772 8.06509 8.45561 8.06509 8.19526 7.80474C7.95494 7.56442 7.93645 7.18626 8.1398 6.92473L8.19526 6.86193L11.7227 3.33333H10C9.65811 3.33333 9.37633 3.07597 9.33782 2.74441L9.33333 2.66667C9.33333 2.32478 9.59069 2.043 9.92225 2.00449L10 2H13.3333Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconoCerrar({ className, size = 24 }: IconoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.2097 5.3871L5.29289 5.29289C5.65338 4.93241 6.22061 4.90468 6.6129 5.2097L6.70711 5.29289L12 10.585L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.415 12L18.7071 17.2929C19.0676 17.6534 19.0953 18.2206 18.7903 18.6129L18.7071 18.7071C18.3466 19.0676 17.7794 19.0953 17.3871 18.7903L17.2929 18.7071L12 13.415L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.585 12L5.29289 6.70711C4.93241 6.34662 4.90468 5.77939 5.2097 5.3871Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconoChevron({ className, size = 14 }: IconoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconoChevronDerecha({ className, size = 12 }: IconoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconoMenu({ className, size = 24 }: IconoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconoCandado({ className, size = 16 }: IconoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00002 1.3335C9.83673 1.3335 11.3334 2.82829 11.3334 4.66683V6.00016H12.6667C13.0349 6.00016 13.3334 6.29864 13.3334 6.66683V14.0002C13.3334 14.3684 13.0349 14.6668 12.6667 14.6668H3.33335C2.96516 14.6668 2.66669 14.3684 2.66669 14.0002V6.66683C2.66669 6.29864 2.96516 6.00016 3.33335 6.00016H4.66669V4.66683C4.66669 2.82787 6.16248 1.3335 8.00002 1.3335ZM8.00002 9.00016C7.65813 9.00016 7.37635 9.25752 7.33784 9.58908L7.33335 9.66683V11.0002C7.33335 11.3684 7.63183 11.6668 8.00002 11.6668C8.34191 11.6668 8.62369 11.4095 8.6622 11.0779L8.66669 11.0002V9.66683C8.66669 9.29864 8.36821 9.00016 8.00002 9.00016ZM8.00002 2.66683C6.89473 2.66683 6.00002 3.56183 6.00002 4.66683V6.00016H10V4.66683C10 3.56154 9.10555 2.66683 8.00002 2.66683Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconoLupa({ className, size = 20 }: IconoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 13L17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconoTarjetaAnimado() {
  return (
    <svg
      className="boton-tarjeta__icono"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="boton-tarjeta__pivote">
        <path
          transform="translate(1.33333 2.66667)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.6667 0C13.0349 0 13.3333 0.298477 13.3333 0.666667V10C13.3333 10.3682 13.0349 10.6667 12.6667 10.6667H0.666667C0.298477 10.6667 0 10.3682 0 10V0.666667C0 0.298477 0.298477 0 0.666667 0H12.6667ZM12 4.66667H1.33333V9.33333H12V4.66667ZM4 7.33333C4.36819 7.33333 4.66667 7.63181 4.66667 8C4.66667 8.36819 4.36819 8.66667 4 8.66667H2.66667C2.29848 8.66667 2 8.36819 2 8C2 7.63181 2.29848 7.33333 2.66667 7.33333H4ZM12 1.33333H1.33333V3.33333H12V1.33333Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}

export function IconoSubir() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="20" fill="#FF7800" />
      <path
        d="M28.0485 24.0271C28.0521 24.5524 27.7555 25.0255 27.3053 25.2125C26.855 25.3995 26.3464 25.2608 26.0308 24.865L19.9535 17.2148L13.9828 24.9977C13.5737 25.5289 12.8484 25.5987 12.3628 25.1536C11.8771 24.7085 11.815 23.9171 12.2241 23.3859L19.0611 14.5268C19.2776 14.2456 19.5957 14.0816 19.9318 14.0779C20.2678 14.0742 20.5882 14.2312 20.8085 14.5075L27.7669 23.2146C27.9466 23.4399 28.0464 23.728 28.0485 24.0271Z"
        fill="white"
      />
    </svg>
  )
}

export function IconoAlerta({ size = 16 }: IconoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 4.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="11.3" r="0.9" fill="currentColor" />
    </svg>
  )
}

export function IconoExito({ size = 56 }: IconoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28" r="25" stroke="currentColor" strokeWidth="3" />
      <path
        d="M17 28.5L24.5 36L39 21"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconoTarjetaGrande({ size = 36 }: IconoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2 9.5h20" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function IconoCuotas({ size = 28 }: IconoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2" />
      <path
        d="M17.5 10.5c-.7-.9-1.9-1.5-3.5-1.5-2.2 0-3.5 1-3.5 2.4 0 1.4 1.1 2 3.5 2.6 2.4.6 3.5 1.2 3.5 2.6 0 1.4-1.3 2.4-3.5 2.4-1.6 0-2.8-.6-3.5-1.5M14 7v14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconoMillas({ size = 28 }: IconoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 15.5l22-8.5-6 18-4.5-7.5L3 15.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14.5 17.5L25 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconoProteccion({ size = 28 }: IconoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 3l9 3.5v7c0 5.5-3.8 9.9-9 11.5-5.2-1.6-9-6-9-11.5v-7L14 3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 14l3 3 5.5-5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconoAyuda({ size = 24 }: IconoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9.5 9.5a2.5 2.5 0 115 .5c0 1.5-2.5 1.8-2.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  )
}

export function IconoEstrella({ className, size = 20 }: IconoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2.5l2.2 4.9 5.3.6-3.9 3.6 1 5.2-4.6-2.6-4.6 2.6 1-5.2L2.5 8l5.3-.6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconoEstrellaSolida({ className }: IconoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 10 10"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 0l1.2 3.8L10 5 6.2 6.2 5 10 3.8 6.2 0 5l3.8-1.2z" />
    </svg>
  )
}

export function IconoMovil({ size = 20 }: IconoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5.5" y="1.5" width="9" height="17" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 15.5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconoTarjetaMenu({ size = 20 }: IconoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1.5" y="4.5" width="17" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M1.5 8h17" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.5 12.5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconoMas({ size = 20 }: IconoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function IconoMenos({ size = 20 }: IconoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
