import { ChevronDown, CreditCard, PartyPopper } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Button } from './components/ui/button'

export default function Dashboard() {
  return (
    <div className="font-Fredoka">
      <header className="border-b bg-slate-50">
        <div className="mx-auto flex items-center justify-center gap-4 py-3 max-lg:px-4 lg:max-w-7xl lg:justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="mr-auto">
                <Button variant={'outline'} className="gap-2">
                  <Avatar className="h-7 w-7">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  Jonathan S
                  <ChevronDown strokeWidth={1} />
                </Button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <p className="flex flex-col items-center text-slate-500">
                  <span>Minha Conta</span>
                  <span>perebaj@gmail.com</span>
                </p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a className="hidden lg:flex lg:items-center lg:justify-center lg:gap-2">
            <h1 className="text-3xl font-bold">Onde Hoje?</h1>
          </a>
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <Button className="gap-2 bg-primary">
              <CreditCard strokeWidth={1} size={18} />
              Assinar
            </Button>
          </div>
        </div>
      </header>
    </div>
  )
}
