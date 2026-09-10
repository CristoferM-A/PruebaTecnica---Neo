import { useCallback } from 'react'
import { MOTOR_CONFIG } from './core/config'
import { reiniciarAsignacion, resolverAsignacion } from './core/assign'
import { obtenerExperimento } from './registry'
import type { Assignment, ExperimentDefinition } from './core/types'

interface UseExperimentResult extends Assignment {
  definicion: ExperimentDefinition
  resetAssignment: () => void
}

export function useExperiment(experimentId: string): UseExperimentResult {
  const definicion = obtenerExperimento(experimentId)
  const asignacion = resolverAsignacion(definicion)

  const resetAssignment = useCallback(() => {
    reiniciarAsignacion(definicion)
    const url = new URL(window.location.href)
    url.searchParams.delete(MOTOR_CONFIG.overrideParam)
    window.location.replace(url.toString())
  }, [definicion])

  return { ...asignacion, definicion, resetAssignment }
}
