import './globals.css'

import { ArrowBigUpDash, Instagram } from 'lucide-react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

import { Button } from './components/ui/button'

export default function Home() {
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
            <div className="w-full divide-y overflow-hidden rounded-lg border border-gray-200">
              <div className="flex w-full items-center justify-between p-4">
                <div className="flex w-full items-center space-x-4">
                  <div className="flex flex-col items-center">
                    <ArrowBigUpDash
                      size={'2rem'}
                      color="#0fe661"
                      strokeWidth={'0.1rem'}
                      className="hover:selection:bg-gray-100 dark:hover:selection:bg-gray-800"
                    />
                    <p>100</p>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="font-base text-xl font-semibold">
                      Moscoulância
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      15 de fevereiro de 2024 às 20:00
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center rounded-md text-base underline underline-offset-2 hover:no-underline"
                    href="https://www.instagram.com/jj_neno/"
                  >
                    <Instagram
                      strokeWidth={'0.12rem'}
                      className="mr-1.5 h-4 w-4"
                    />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  )
}
