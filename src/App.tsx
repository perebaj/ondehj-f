import './globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

import { Button } from './components/ui/button'

export default function Home() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | ondehoje?" />

      <div className="flex min-h-screen flex-col">
        <header className="py-10 text-center">
          <div className="container px-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Onde Hoje?
            </h1>
          </div>
        </header>

        <div className="w-full space-y-4 py-6 md:py-4 lg:py-20">
          <div className="container grid px-4 md:gap-4 md:px-6 lg:gap-6 lg:px-8">
            <div className="flex items-center space-x-4">
              <h1 className="px-4 text-3xl font-bold tracking-tighter">
                Eventos
              </h1>
              <Button>Adicionar Evento</Button>
            </div>
            <Separator />
            <div className="w-full divide-y overflow-hidden rounded-lg border border-gray-200">
              <div className="flex w-full items-center justify-between p-4">
                <div className="flex w-full items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src="https://avatars.githubusercontent.com/u/1133851?v=4"
                      alt="Avatar"
                    />
                    <AvatarFallback>Festa X</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <h3 className="font-base text-xl font-semibold">
                      Moscoulância
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      15 de fevereiro de 2024
                    </p>
                  </div>
                </div>
                {/* <Link
                  className="underline-dotted rouded-md hover:underline-solid inline-flex items-center text-base underline underline-offset-2"
                  to={'#'}
                ></Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  )
}
