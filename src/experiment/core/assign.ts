import { MOTOR_CONFIG } from './config'
import { bucketOf } from './hash'
import { borrarAsignacion, guardarAsignacion, leerAsignacion } from './storage'
import type { Assignment, ExperimentDefinition, Variant } from './types'

function leerOverride(definicion: ExperimentDefinition): Variant | null {
  if (typeof window === 'undefined') return null
  const crudo = new URLSearchParams(window.location.search)
    .get(MOTOR_CONFIG.overrideParam)
    ?.trim()
    .toUpperCase()
  return definicion.variantes.includes(crudo as Variant) ? (crudo as Variant) : null
}

export function esModoDebug(): boolean {
  if (typeof window === 'undefined') return false
  return new URLSearchParams(window.location.search).has(MOTOR_CONFIG.debugParam)
}

function crearVisitorId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `v-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
}

function variantePorBucket(
  definicion: ExperimentDefinition,
  visitorId: string,
): Variant {
  const bucket = bucketOf(visitorId, definicion.id)
  return bucket < definicion.trafficSplitPercent
    ? definicion.variantes[0]
    : definicion.variantes[1]
}

export function asignarVariante(definicion: ExperimentDefinition): Assignment {
  const persistida = leerAsignacion(definicion)
  const override = leerOverride(definicion)

  if (override) {
    return {
      variant: override,
      source: 'override',
      visitorId: persistida?.visitorId ?? crearVisitorId(),
      isQaMode: true,
    }
  }

  if (persistida) {
    return {
      variant: persistida.variant,
      source: 'persisted',
      visitorId: persistida.visitorId,
      isQaMode: esModoDebug(),
    }
  }

  const visitorId = crearVisitorId()
  const variant = variantePorBucket(definicion, visitorId)
  guardarAsignacion(definicion, {
    visitorId,
    variant,
    experimentId: definicion.id,
    assignedAt: new Date().toISOString(),
  })

  return { variant, source: 'random', visitorId, isQaMode: esModoDebug() }
}

const asignacionesResueltas = new Map<string, Assignment>()

export function resolverAsignacion(definicion: ExperimentDefinition): Assignment {
  const cacheada = asignacionesResueltas.get(definicion.id)
  if (cacheada) return cacheada

  const asignacion = asignarVariante(definicion)
  asignacionesResueltas.set(definicion.id, asignacion)
  return asignacion
}

export function reiniciarAsignacion(definicion: ExperimentDefinition): void {
  borrarAsignacion(definicion)
  asignacionesResueltas.delete(definicion.id)
}
