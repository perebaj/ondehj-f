import { Mail, PartyPopper } from 'lucide-react'

import { Button } from './components/ui/button'

export default function SignIn() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <PartyPopper size={38} />
          <h1 className="text-3xl ">
            Bem vindo ao{' '}
            <span className="font-semibold tracking-wide text-primary">
              Onde Hoje!
            </span>
          </h1>
          <p className="text-sm text-gray-500">
            Encontre todos os eventos da sua universidade em um só lugar
          </p>
        </div>

        <div className="grid gap-6">
          <Button variant="outline">
            <a
              href="/auth/google"
              className="flex items-center justify-center gap-2"
            >
              <Mail size={20} /> Entrar com Google
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
