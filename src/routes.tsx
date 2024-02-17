import { createBrowserRouter } from 'react-router-dom'

import EventFormsPage from './eventFormsPage'
import EventPage from './eventPage'
import { Temp } from './tmpPage'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <EventPage />,
  },
  {
    path: '/event-forms',
    element: <EventFormsPage />,
  },
  {
    path: '/tmp',
    element: <Temp />,
  },
])
