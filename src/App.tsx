import './globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'
export default function App() {
  return (
    <div>
      <HelmetProvider>
        <Helmet titleTemplate="%s | ondehoje?" />
        <Toaster richColors closeButton />
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  )
}
