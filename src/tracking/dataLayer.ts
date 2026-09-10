import { resolverAsignacion } from '@/experiment/core/assign'
import { bannerTarjetas } from '@/experiment/definitions/bannerTarjetas'
import type { ExperimentAction, ExperimentEvent } from './types'

export function initDataLayer(): void {
  window.dataLayer = window.dataLayer || []
}

export function pushExperimentEvent(action: ExperimentAction, label: string): void {
  initDataLayer()

  const asignacion = resolverAsignacion(bannerTarjetas)

  const payload: ExperimentEvent = {
    event: 'experiment_event',
    experimentId: bannerTarjetas.id,
    action,
    variant: asignacion.variant,
    label,
    visitorId: asignacion.visitorId,
    qaMode: asignacion.isQaMode,
  }

  window.dataLayer.push(payload)

  if (import.meta.env.DEV) {
    console.info('[dataLayer]', payload)
  }
}

const emittedOnce = new Set<string>()

export function pushExperimentEventOnce(action: ExperimentAction, label: string): void {
  const key = `${action}:${label}`
  if (emittedOnce.has(key)) return
  emittedOnce.add(key)
  pushExperimentEvent(action, label)
}
