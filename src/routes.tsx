import { createBrowserRouter } from 'react-router-dom'

import EventsPage from './eventsPage'
import LandingPage from './landingPage'
import SignInPage from './signin'
import SignUpPage from './signup'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/events',
    element: <EventsPage />,
  },
])
