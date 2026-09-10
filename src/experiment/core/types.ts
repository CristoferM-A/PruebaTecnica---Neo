export type Variant = 'A' | 'B'

export type Scope = 'user' | 'session'

export type AssignmentSource = 'override' | 'persisted' | 'random'

export interface ExperimentDefinition {
  id: string
  nombre: string
  hipotesis: string
  scope: Scope
  trafficSplitPercent: number
  variantes: readonly Variant[]
  rutas: readonly string[]
  activo: boolean
}

export interface Assignment {
  variant: Variant
  source: AssignmentSource
  visitorId: string
  isQaMode: boolean
}

export interface PersistedAssignment {
  visitorId: string
  variant: Variant
  experimentId: string
  assignedAt: string
}
