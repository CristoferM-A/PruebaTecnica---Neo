import type { Variant } from '@/experiment/core/types'

export type ExperimentAction =
  | 'view_banner'
  | 'click_cta'
  | 'view_form'
  | 'submit_form'
  | 'form_error'

export interface ExperimentEvent {
  event: 'experiment_event'
  experimentId: string
  action: ExperimentAction
  variant: Variant
  label: string
  visitorId: string
  qaMode: boolean
}

export type DataLayerEntry = ExperimentEvent | Record<string, unknown>

declare global {
  interface Window {
    dataLayer: DataLayerEntry[]
  }
}
