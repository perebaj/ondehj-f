import { PartyPopper } from 'lucide-react'

import { Button } from './components/ui/button'
export default function Landing() {
  return (
    <div>
      <header className="font-Fredoka bg-slate-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-center px-8 py-3">
          <div className="flex lg:flex-1">
            <a href="/" className="flex shrink-0 items-center gap-2">
              <PartyPopper size={28} />
              <span className="text-lg font-bold">Onde Hoje?</span>
            </a>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-12">
            <a href="/#prcing" className="no-underline hover:underline">
              Preço
            </a>
            <a className="no-underline hover:underline" href="/#faq">
              FAQ
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button size={'sm'}>
              <a href="/sign-in">Sign in</a>
            </Button>
          </div>
        </nav>
      </header>
      <section className="font-Fredoka">
        <div className="relative z-10  mx-auto flex  max-w-5xl flex-col items-center justify-center gap-16 px-8 py-12 lg:gap-20 lg:py-32">
          <div className="relative flex flex-col items-center justify-center gap-10 text-center lg:gap-12">
            <h1 className="text-4xl tracking-tight md:-mb-4 lg:text-6xl">
              <span className="font-black italic tracking-tight text-red-500">
                Todos os eventos{' '}
              </span>
              <span>da sua universidade, em um só lugar</span>
            </h1>
            <p className="max-w-md text-center text-sm font-extrabold leading-relaxed text-slate-500 md:text-base">
              Confuso com quantidade de coisas para fazer na sua faculdade? Aqui
              você encontra todos os eventos esportivos, culturais e festas em
              um só lugar.
            </p>
            <ul className="hidden space-y-1 text-slate-500 md:block">
              <li className="flex items-center justify-center gap-2 lg:justify-start">
                <span>🎉</span> Fique por dentro do que está acontecendo
              </li>
              <li className="flex items-center justify-center gap-2 lg:justify-start">
                <span>📢</span> Promova e compartilhe seus eventos favoritos
              </li>
            </ul>
            <Button size={'lg'}>Onde é o rolê hoje?</Button>
          </div>
          {/* <div className="relative mx-auto flex w-full max-w-lg flex-col items-center gap-16 md:gap-24"></div> */}
        </div>
      </section>
    </div>
  )
}
