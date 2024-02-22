import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import Event from './components/event'
import EventForms from './components/eventforms'

export default function Events() {
  return (
    <div className="w-full py-10 lg:py-14">
      <div className="container grid items-center gap-4 px-4 py-4 text-center md:px-6 md:py-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Próximos Eventos
          </h1>
          <p className="mx-auto max-w-[700px] py-4 text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Descubra e participe de eventos que acontecem no seu campus.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Criar Novo Evento</Button>
            </DialogTrigger>
            <DialogContent
              onInteractOutside={(e) => {
                e.preventDefault()
              }}
              className="max-w-xs lg:max-w-2xl"
            >
              <DialogHeader>
                <DialogTitle>Criar Novo Evento</DialogTitle>
                <DialogDescription>
                  Preencha e compartilhe um novo evento com o seu campus.
                </DialogDescription>
              </DialogHeader>
              <EventForms />
              <DialogClose asChild></DialogClose>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="container grid max-w-6xl justify-center gap-4 px-4 py-4 md:px-6 md:py-6">
        <div className="grid grid-cols-1 items-stretch justify-center gap-4 md:grid-cols-2">
          <Event
            date={Date.now()}
            description="Descrição"
            name="Festa na Moscou"
            instagramURL="https://www.instagram.com/repmoscou/"
            type="social"
          />
          <Event
            date={Date.now()}
            description="Descrição"
            name="Festa meteorica avassaladora open 192 horas na Moscou"
            instagramURL="https://www.instagram.com/repmoscou/"
            type="academico"
          />
          <Event
            date={Date.now()}
            description="Descrição"
            name="Festa na Moscou"
            instagramURL="https://www.instagram.com/repmoscou/"
            type="esportivo"
          />
          <Event
            date={Date.now()}
            description="Descrição"
            name="Festa na Moscou"
            instagramURL="https://www.instagram.com/repmoscou/"
            type="cultural"
          />
        </div>
      </div>
    </div>
  )
}
