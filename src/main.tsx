import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 変更ポイント：index.css → styles/index.css
import './styles/index.css'

// 変更ポイント：App.tsx の場所を ui/ に変更
import App from './ui/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
