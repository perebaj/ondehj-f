import './globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes/routes'
export default function App() {
  return (
    <div className="font-Fredoka">
      <HelmetProvider>
        <Helmet titleTemplate="%s | ondehoje?" />
        <Toaster richColors closeButton />
        <RouterProvider router={router} />
      </HelmetProvider>
      <footer className="bottom-0 flex h-10 items-center justify-center py-8 text-sm text-gray-500">
        Made with ❤️ by a healty nerd
      </footer>
    </div>
  )
}
