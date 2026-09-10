import type { ExperimentDefinition } from '@/experiment/core/types'

export const bannerTarjetas: ExperimentDefinition = {
  id: 'bcp_banner_test_v1',
  nombre: 'Banner principal de tarjetas de crédito',
  hipotesis:
    'Modificar el color y el mensaje del banner principal puede aumentar el porcentaje de clics (CTR) hacia el formulario de solicitud.',
  scope: 'user',
  trafficSplitPercent: 50,
  variantes: ['A', 'B'],
  rutas: ['/tarjetas/tarjetas-credito'],
  activo: true,
}
