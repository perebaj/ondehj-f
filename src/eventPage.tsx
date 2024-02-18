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
        className={`flex min-h-screen flex-col ${showForm ? 'blur-md' : ''}`}
      >
        <header className="py-6 text-center">
          <div className="container px-4">
            <h1 className="text-6xl font-bold tracking-tighter md:text-8xl">
              Onde Hoje?
            </h1>
          </div>
        </header>
        {/* <div className="lg:py-15 w-full space-y-6 py-6 md:py-4"> */}
        <div className="container grid">
          <div className="flex items-center">
            <h1 className="px-4 py-4 text-xl font-bold tracking-tighter md:text-4xl">
              Eventos
            </h1>
            <div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowForm(true)}
              >
                Adicionar Evento
              </Button>
            </div>
          </div>
          <Separator />
          <div className="space-y-4 px-8 py-8 ">
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
              name="Festa da República X"
              date={Date.now()}
              instagramURL="https://www.instagram.com/jj_neno/"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}
