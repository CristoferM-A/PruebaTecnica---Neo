import { MOTOR_CONFIG } from './config'
import type { ExperimentDefinition, PersistedAssignment } from './types'

const respaldoEnMemoria = new Map<string, string>()

function claveDe(definicion: ExperimentDefinition): string {
  return `${MOTOR_CONFIG.storagePrefix}:${definicion.id}`
}

function obtenerStorage(definicion: ExperimentDefinition): Storage | null {
  try {
    const store =
      definicion.scope === 'session' ? window.sessionStorage : window.localStorage
    const sonda = '__probe__'
    store.setItem(sonda, '1')
    store.removeItem(sonda)
    return store
  } catch {
    return null
  }
}

export function leerAsignacion(
  definicion: ExperimentDefinition,
): PersistedAssignment | null {
  const clave = claveDe(definicion)
  const store = obtenerStorage(definicion)
  const crudo = store ? store.getItem(clave) : (respaldoEnMemoria.get(clave) ?? null)
  if (!crudo) return null

  try {
    const parsed = JSON.parse(crudo) as PersistedAssignment
    if (parsed.experimentId !== definicion.id) return null
    if (!definicion.variantes.includes(parsed.variant)) return null
    if (typeof parsed.visitorId !== 'string' || !parsed.visitorId) return null
    return parsed
  } catch {
    return null
  }
}

export function guardarAsignacion(
  definicion: ExperimentDefinition,
  asignacion: PersistedAssignment,
): void {
  const clave = claveDe(definicion)
  const crudo = JSON.stringify(asignacion)
  const store = obtenerStorage(definicion)
  try {
    if (store) store.setItem(clave, crudo)
    else respaldoEnMemoria.set(clave, crudo)
  } catch {
    respaldoEnMemoria.set(clave, crudo)
  }
}

export function borrarAsignacion(definicion: ExperimentDefinition): void {
  const clave = claveDe(definicion)
  respaldoEnMemoria.delete(clave)
  try {
    obtenerStorage(definicion)?.removeItem(clave)
  } catch {
    /* sin storage no hay nada que limpiar */
  }
}
