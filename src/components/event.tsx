import 'moment/dist/locale/pt-br'

import { ArrowBigUpDash, Instagram } from 'lucide-react'
import moment from 'moment'
import { useState } from 'react'

import { Button } from './ui/button'

interface EventProps {
  name: string
  date: number
  instagramURL?: string
}

export default function Event(props: EventProps) {
  const [counter, setCounter] = useState(0)

  const handleCounter = () => {
    setCounter(counter + 1)
  }

  moment.locale('pt')
  const date = moment(props.date).format('L')
  return (
    <div className="w-full divide-y overflow-hidden rounded-lg border border-gray-200">
      <div className="flex w-full items-center justify-between space-x-4 p-4">
        <div className="flex flex-col items-center hover:cursor-pointer ">
          <Button variant="ghost" onClick={handleCounter}>
            <ArrowBigUpDash
              className="h-6 w-6 md:h-8 md:w-8"
              color="#0fe661"
              strokeWidth={'0.1rem'}
            />
            <p>{counter}</p>
          </Button>
        </div>
        <div className="flex flex-1 flex-col">
          <h3 className="text-sm font-semibold md:text-2xl">{props.name}</h3>
          <p className="text-[10px] text-gray-500 dark:text-gray-400 md:text-sm">
            {date}
          </p>
        </div>
        {props.instagramURL && (
          <a
            className="inline-flex items-center rounded-md text-[10px]  underline underline-offset-2 hover:no-underline md:text-base "
            href={props.instagramURL}
          >
            <Instagram
              strokeWidth={'0.12rem'}
              className="mr-1.5 h-3 w-3 md:h-5 md:w-5"
            />
            Instagram
          </a>
        )}
      </div>
    </div>
  )
}
