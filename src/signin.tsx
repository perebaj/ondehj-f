import { CheckCircle, Instagram, Mail } from 'lucide-react'

import { Button } from './components/ui/button'

export default function SignIn() {
  return (
    <div className="grid h-screen grid-cols-2">
      <div className="flex items-center justify-start bg-red-100">
        <div className="mx-auto flex flex-col items-start justify-start gap-2 px-8">
          <div className="flex items-center gap-2 py-4">
            <CheckCircle className="h-6 w-6 " />
            <div className="text-xl">
              <span>Saiba de </span>
              <span className="text-w font-bold">todos os eventos </span>
              <span>que estão acontecendo hoje</span>
            </div>
          </div>
          <div className="flex items-center gap-2 py-4">
            <CheckCircle className="h-6 w-6 " />
            <div className="text-xl">
              <span className="text-w font-bold">Promova e compartilhe </span>
              <span>seus eventos favoritos</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white">
        <div className="mx-auto max-w-[20rem] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="front-bold text-xl md:text-3xl">SignIn</h1>
            <p className="text-sm text-gray-500">
              Entre com sua conta para saber onde tem role hoje!
            </p>
          </div>
          <div className="py-1/2 gap-2 space-y-2">
            <Button className="w-full flex-auto justify-center">
              <Mail className="mr-2 h-5 w-5" />
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
