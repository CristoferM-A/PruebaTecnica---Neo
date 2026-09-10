import type { ExperimentDefinition } from './core/types'
import { bannerTarjetas } from './definitions/bannerTarjetas'

export const EXPERIMENTOS: Record<string, ExperimentDefinition> = {
  [bannerTarjetas.id]: bannerTarjetas,
}

export function obtenerExperimento(id: string): ExperimentDefinition {
  const definicion = EXPERIMENTOS[id]
  if (!definicion) {
    throw new Error(`No existe un experimento registrado con el id "${id}"`)
  }
  return definicion
}

export function experimentosDeRuta(ruta: string): ExperimentDefinition[] {
  return Object.values(EXPERIMENTOS).filter(
    (definicion) => definicion.activo && definicion.rutas.some((patron) => coincide(patron, ruta)),
  )
}

function coincide(patron: string, ruta: string): boolean {
  if (patron.endsWith('/*')) {
    return ruta.startsWith(patron.slice(0, -2))
  }
  return patron === ruta
}
