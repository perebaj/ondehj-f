// import {
//   ChevronRightIcon,
//   GraduationCap,
//   MusicIcon,
//   UsersIcon,
// } from 'lucide-react'
import Event2 from './components/event'

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
        </div>
      </div>
      <div className="container grid max-w-6xl justify-center gap-4 px-4 py-4 md:px-6 md:py-6">
        <div className="grid grid-cols-1 items-stretch justify-center gap-4 md:grid-cols-2">
          <Event2 />
          <Event2 />
          <Event2 />
          <Event2 />
          <Event2 />
          <Event2 />
        </div>
      </div>
    </div>
  )
}
