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
  const date = moment(props.date).format('LLLL')
  return (
    <div className="w-full divide-y overflow-hidden rounded-lg border border-gray-200">
      <div className="flex w-full items-center justify-between p-4">
        <div className="flex w-full items-center space-x-4">
          <div className="flex flex-col items-center hover:cursor-pointer ">
            <Button variant="ghost" onClick={handleCounter}>
              <ArrowBigUpDash
                size={'2rem'}
                color="#0fe661"
                strokeWidth={'0.1rem'}
              />
              <p>{counter}</p>
            </Button>
          </div>
          <div className="flex flex-1 flex-col">
            <h3 className="font-base text-xl font-semibold">{props.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
          </div>
          {props.instagramURL && (
            <a
              className="inline-flex items-center rounded-md text-base underline underline-offset-2 hover:no-underline"
              href={props.instagramURL}
            >
              <Instagram strokeWidth={'0.12rem'} className="mr-1.5 h-4 w-4" />
              Instagram
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
