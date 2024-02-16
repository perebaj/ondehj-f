import './globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
export default function Home() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | ondehoje?" />

      <div className="flex h-screen items-center justify-center">
        <Button>Enviar</Button>
      </div>
    </HelmetProvider>
  )
}
