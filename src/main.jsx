import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Reset from './styles/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Reset />
    <App />
  </StrictMode>,
)
