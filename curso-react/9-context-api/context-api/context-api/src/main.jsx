import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CounterContextProvider } from './context/CounterContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* {2 - criando provider} */}
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </StrictMode>,
)
