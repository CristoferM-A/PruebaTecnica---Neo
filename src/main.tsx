import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './assets/styles/variables.css'
import './assets/styles/base.css'
import './assets/styles/header.css'
import './assets/styles/banner.css'
import './assets/styles/beneficios.css'
import './assets/styles/formulario.css'
import './assets/styles/footer.css'
import './assets/styles/debug.css'
import '@/experiment/bootstrap'
import { initDataLayer } from '@/tracking/dataLayer'

initDataLayer()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
