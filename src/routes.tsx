import { createBrowserRouter } from 'react-router-dom'

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
])
