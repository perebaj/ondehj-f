import { ChevronRightIcon, GraduationCap } from 'lucide-react'

export default function Event2() {
  return (
    <div className="flex flex-col items-start justify-start gap-1 rounded-lg border p-4">
      <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
        <GraduationCap className="mr-1.5 h-4 w-4" />
        Acadêmico
      </span>
      <h3 className="text-2xl font-bold leading-tight text-blue-500">
        Grupo de estudos cálculo 3 e Cálculo 4
      </h3>
      <p className="text-sm/relaxed text-gray-500 dark:text-gray-400">
        Descrição do evento
      </p>
      <time className="mt-auto self-start text-sm font-medium text-gray-500 dark:text-gray-400">
        Fev 24, 2023, 3:00 PM
      </time>
      <a
        className="inline-flex items-center no-underline hover:underline"
        href="#"
      >
        Veja no Instagram
        <ChevronRightIcon className="ml-1.5 inline-block h-4 w-4" />
      </a>
    </div>
  )
}
