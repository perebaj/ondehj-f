import { createBrowserRouter } from 'react-router-dom'

import EventPage from './eventPage'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <EventPage />,
  },
])
