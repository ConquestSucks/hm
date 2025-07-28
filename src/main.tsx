import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'
import AppLoader from './components/AppLoader'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppLoader>
      <RouterProvider router={router} />
    </AppLoader>
  </StrictMode>,
)
