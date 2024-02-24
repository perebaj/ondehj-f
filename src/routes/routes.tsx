import { createBrowserRouter } from 'react-router-dom'

import EventsPage from '../eventsPage'
import LandingPage from '../pages/landingPage'
import SignInPage from '../pages/signin'
import SignUpPage from '../pages/signup'
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
