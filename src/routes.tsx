import { createBrowserRouter } from 'react-router-dom'

import EventPage from './eventPage'
import Landing from './landing'
import SignIn from './signin'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <EventPage />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/landing',
    element: <Landing />,
  },
])
