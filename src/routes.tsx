import { createBrowserRouter } from 'react-router-dom'

import Dashboard from './dashboard'
import Landing from './landing'
import SignInPage from './signin'
import SignUpPage from './signup'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
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
    path: '/dashboard',
    element: <Dashboard />,
  },
])
