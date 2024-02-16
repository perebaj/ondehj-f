import { ArrowBigUpDash, Instagram } from 'lucide-react'

export default function Event() {
  return (
    <div className="w-full divide-y overflow-hidden rounded-lg border border-gray-200">
      <div className="flex w-full items-center justify-between p-4">
        <div className="flex w-full items-center space-x-4">
          <div className="flex flex-col items-center hover:cursor-pointer ">
            <ArrowBigUpDash
              size={'2rem'}
              color="#0fe661"
              strokeWidth={'0.1rem'}
            />
            <p>100</p>
          </div>
          <div className="flex flex-1 flex-col">
            <h3 className="font-base text-xl font-semibold">Moscoulância</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              15 de fevereiro de 2024 às 20:00
            </p>
          </div>
          <a
            className="inline-flex items-center rounded-md text-base underline underline-offset-2 hover:no-underline"
            href="https://www.instagram.com/jj_neno/"
          >
            <Instagram strokeWidth={'0.12rem'} className="mr-1.5 h-4 w-4" />
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}
