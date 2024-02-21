import { createBrowserRouter } from 'react-router-dom'

import Billing from './billing'
import DashboardHeader from './dashboard-header'
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
    element: <DashboardHeader />,
  },
  {
    path: '/billing',
    element: <Billing />,
  },
])
