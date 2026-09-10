import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconoAlerta, IconoExito } from '@/components/ui/Iconos'
import { leadFormSchema, type LeadFormValues } from './schema'
import { pushExperimentEvent, pushExperimentEventOnce } from '@/tracking/dataLayer'

const BASE = import.meta.env.BASE_URL

export function LeadFormSection() {
  const [enviado, setEnviado] = useState(false)
  const seccionRef = useRef<HTMLElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    mode: 'onTouched',
    defaultValues: { fullName: '', email: '' },
  })

  useEffect(() => {
    const nodo = seccionRef.current
    if (!nodo || typeof IntersectionObserver === 'undefined') return

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            pushExperimentEventOnce('view_form', 'formulario_solicitud')
            observador.disconnect()
          }
        }
      },
      { threshold: 0.4 },
    )

    observador.observe(nodo)
    return () => observador.disconnect()
  }, [])

  const alValidar = (valores: LeadFormValues) => {
    pushExperimentEvent('submit_form', 'formulario_solicitud')
    console.info('[solicitud]', valores)
    setEnviado(true)
  }

  const alFallar = () => {
    pushExperimentEvent('form_error', 'validacion_fallida')
  }

  const claseControl = (hayError: boolean) =>
    hayError ? 'campo__control campo__control--error' : 'campo__control'

  return (
    <section
      className="solicitud"
      id="solicitud"
      ref={seccionRef}
      aria-labelledby="solicitud-titulo"
    >
      <div className="contenedor">
        <div className="solicitud__caja">
          <div className="solicitud__media">
            <img
              src={`${BASE}assets/img/formulario-persona.jpg`}
              alt="Clienta del BCP revisando su tarjeta de crédito desde el celular"
              width={747}
              height={1000}
              loading="lazy"
            />
          </div>

          <div className="solicitud__panel">
            <p className="solicitud__antetitulo">Solicitud en línea</p>
            <h2 className="solicitud__titulo" id="solicitud-titulo">
              Solicita tu Tarjeta de Crédito BCP
            </h2>
            <p className="solicitud__bajada">
              Déjanos tus datos y un asesor te contacta en menos de 24 horas.
            </p>

            {enviado ? (
              <div className="solicitud__exito">
                <IconoExito className="solicitud__exito-icono" />
                <p className="solicitud__exito-titulo">¡Solicitud recibida!</p>
                <p className="solicitud__exito-texto">
                  Gracias por tu interés. Revisa tu correo, te enviamos los siguientes
                  pasos.
                </p>
              </div>
            ) : (
              <form className="formulario" noValidate onSubmit={handleSubmit(alValidar, alFallar)}>
                <div className="campo">
                  <label className="campo__etiqueta" htmlFor="fullName">
                    Nombre completo
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Ej. María Fernández"
                    className={claseControl(Boolean(errors.fullName))}
                    aria-invalid={errors.fullName ? 'true' : 'false'}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    {...register('fullName')}
                  />
                  {errors.fullName && (
                    <p className="campo__error" id="fullName-error" role="alert">
                      <IconoAlerta />
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="campo">
                  <label className="campo__etiqueta" htmlFor="email">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Ej. maria@correo.com"
                    className={claseControl(Boolean(errors.email))}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="campo__error" id="email-error" role="alert">
                      <IconoAlerta />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <button type="submit" className="formulario__enviar" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
                </button>

                <p className="formulario__legal">
                  Al enviar aceptas nuestras políticas de privacidad y el tratamiento de tus
                  datos personales.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
