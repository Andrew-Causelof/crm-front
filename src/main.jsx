import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.min.css'
import './assets/css/custom.css'
import App from './App.jsx'
import AuthForm from './components/AuthForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
