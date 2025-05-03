import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppContextWrapper } from './context/AppContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextWrapper>
      <App />
    </AppContextWrapper>
  </StrictMode>,
)
