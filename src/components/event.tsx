import 'moment/dist/locale/pt-br'

import {
    ChevronRightIcon,
    Disc3,
    Dumbbell,
    GraduationCap,
    Users,
} from 'lucide-react'
import moment from 'moment'
import { useState } from 'react'
type EventProps = {
    name: string
    description: string
    date: number
    instagramURL: string
    type: string
}

export default function Event(props: EventProps) {
    moment.locale('pt-br')
    const date = moment(props.date).format('LLL')
    const [isOpen, setIsOpen] = useState<boolean>(false)

    let TypeIcon
    let TypeName
    switch (props.type) {
        case 'academico':
            TypeIcon = GraduationCap
            TypeName = 'Acadêmico'
            break
        case 'esportivo':
            TypeIcon = Dumbbell
            TypeName = 'Esportivo'
            break
        case 'social':
            TypeIcon = Users
            TypeName = 'Social'
            break
        case 'cultural':
            TypeIcon = Disc3
            TypeName = 'Cultural'
            break
        default:
            TypeIcon = GraduationCap
            TypeName = 'Acadêmico'
    }

    function toggleItem() {
        setIsOpen(!isOpen);
    }

    return (
        <div
            onClick={() => toggleItem()}
            className={`flex flex-col items-start cursor-pointer justify-start gap-1 rounded-lg border p-6 shadow-md overflow-hidden h-full transition-max-height duration-300 relative min-h-[256px] ease-in-out ${isOpen ? 'max-h-[1300px]' : 'h-full max-h-60'}`}>
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                <TypeIcon className="mr-1.5 h-4 w-4" />
                {TypeName}
            </span>
            <div className="mb-5 gap-2">
                <h3 className="text-2xl font-bold leading-tight text-blue-500">
                    {props.name}
                </h3>

                <time className="mt-3 block self-start text-sm font-medium text-gray-500 dark:text-gray-400">
                    {date}
                </time>
            </div>


            {!isOpen &&
                <>


                    <div className="absolute bottom-0 left-0 right-0 w-full h-[30%] bg-gradient-to-t from-white">

                    </div>
                        <span className="absolute right-4 bottom-4 bg-primary px-3 py-1 text-white font-semibold rounded-md" >
                            Ver mais
                        </span>
                </>

            }


            <p className="whitespace-pre-wrap text-sm/relaxed text-gray-500 dark:text-gray-400">
                {props.description}
            </p>
            <a
                className="inline-flex items-center no-underline hover:underline"
                href={props.instagramURL}
            >
                Veja no Instagram
                <ChevronRightIcon className="ml-1.5 inline-block h-4 w-4" />
            </a>


        </div>
    )
}
