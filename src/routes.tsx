import { createBrowserRouter } from 'react-router-dom'

import Dashboard from './dashboard'
import Landing from './landing'
import SignIn from './signin'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
])
