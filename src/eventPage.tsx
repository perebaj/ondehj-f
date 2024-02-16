import './globals.css'

import { useState } from 'react'

import { Separator } from '@/components/ui/separator'

import Event from './components/event'
import EventForms from './components/eventforms'
import { Button } from './components/ui/button'
export default function EventPage() {
  const [showForm, setShowForm] = useState(false)

  const handleCancel = () => {
    setShowForm(false)
  }

  return (
    <>
      <div>{showForm && <EventForms onCancel={handleCancel} />}</div>
      <div
        className={`flex min-h-screen flex-col ${showForm ? 'blur-sm' : ''}`}
      >
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
              <div>
                <Button onClick={() => setShowForm(true)}>
                  Adicionar Evento
                </Button>
              </div>
            </div>
            <Separator />
            <div className="space-y-4">
              <Event
                name="Moscoulância"
                date={Date.now()}
                instagramURL="https://www.instagram.com/jj_neno/"
              />
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
      </div>
    </>
  )
}
