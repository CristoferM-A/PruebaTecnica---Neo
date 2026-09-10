import { IconoCuotas, IconoMillas, IconoProteccion } from '@/components/ui/Iconos'
import { BENEFITS } from '@/data/content'

const ICONOS = {
  cuotas: IconoCuotas,
  millas: IconoMillas,
  proteccion: IconoProteccion,
}

export function Benefits() {
  return (
    <section className="beneficios" id="beneficios">
      <div className="contenedor">
        <div className="beneficios__encabezado">
          <h2 className="beneficios__titulo">Beneficios que sí se sienten</h2>
          <p className="beneficios__bajada">
            Todo lo que tu tarjeta de crédito BCP te da desde el primer día.
          </p>
        </div>

        <div className="beneficios__lista">
          {BENEFITS.map((beneficio) => {
            const Icono = ICONOS[beneficio.icon]
            return (
              <article className="beneficio" key={beneficio.title}>
                <div className="beneficio__icono">
                  <Icono />
                </div>
                <h3 className="beneficio__titulo">{beneficio.title}</h3>
                <p className="beneficio__texto">{beneficio.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
