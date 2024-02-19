import { CheckCircle, Instagram, Mail } from 'lucide-react'

import { Button } from './components/ui/button'

export default function SignIn() {
  return (
    <div className="grid h-screen grid-cols-2">
      <div className="flex items-center justify-start bg-red-100">
        <div className="mx-auto flex flex-col items-start justify-start gap-2 px-8">
          <div className="flex items-center gap-2 py-4">
            <CheckCircle className="h-19 w-19" />
            <div className="text-sm md:text-xl">
              <span>Saiba de </span>
              <span className="font-bold">todos os eventos </span>
              <span>que estão acontecendo</span>
            </div>
          </div>
          <div className="flex items-center gap-2 py-4">
            <CheckCircle className="h-19 w-19" />
            <div className="text-sm md:text-xl">
              <span className="font-bold">Promova e compartilhe </span>
              <span>seus eventos favoritos</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white">
        <div className="mx-auto max-w-[15rem] space-y-6 md:max-w-[20rem]">
          <div className="space-y-2 text-center">
            <h1 className="front-bold text-4xl md:text-5xl">Sign-In</h1>
            <p className="px-8 text-[10px] text-gray-500 md:text-sm">
              Entre com sua conta para saber onde tem role hoje!
            </p>
          </div>
          <div className="gap-2 space-y-2 px-8">
            <Button className="w-full">
              <Mail className=" mr-2 h-5 w-5" />
              <span>Sign in with Google</span>
            </Button>
            <Button className="w-full">
              <Instagram className="mr-2 h-5 w-5" />
              <span>Sign in with Instagram</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
