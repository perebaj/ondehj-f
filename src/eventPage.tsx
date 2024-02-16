import './globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import { Separator } from '@/components/ui/separator'

import Event from './components/event'
import { Button } from './components/ui/button'

export default function EventPage() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | ondehoje?" />

      <div className="flex min-h-screen flex-col">
        <header className="py-6 text-center">
          <div className="container px-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Onde Hoje?
            </h1>
          </div>
        </header>

        <div className="lg:py-15 w-full space-y-6 py-6 md:py-4">
          <div className="container grid px-4 md:gap-4 md:px-6 lg:gap-6 lg:px-8">
            <div className="flex items-center space-x-4">
              <h1 className="px-4 py-4 text-3xl font-bold tracking-tighter">
                Eventos
              </h1>
              <Button>Adicionar Evento</Button>
            </div>
            <Separator />
            <Event name="Moscoulância" date={Date.now()} />
            <Event
              name="Festa do Calouro"
              date={Date.now()}
              instagramURL="https://www.instagram.com/jj_neno/"
            />
            <Event
              name="Festa da República Torpedo"
              date={Date.now()}
              instagramURL="https://www.instagram.com/jj_neno/"
            />
          </div>
        </div>
      </div>
    </HelmetProvider>
  )
}
