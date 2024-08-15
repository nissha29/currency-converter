import { StrictMode } from 'react'
import reactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

reactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
