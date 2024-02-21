import './globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'
export default function App() {
  return (
    <div className="font-Fredoka">
      <HelmetProvider>
        <Helmet titleTemplate="%s | ondehoje?" />
        <Toaster richColors closeButton />
        <RouterProvider router={router} />
      </HelmetProvider>
      <footer className="inset-x-0 bottom-0 flex h-16 items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        Made with ❤️ by a healty nerd
      </footer>
    </div>
  )
}
