import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { PageNotFound } from '@/common/components/ui/page-not-found/page-not-found'
import { ForgotPassword } from '@/pages/auth/forgot-password'
import { SignIn } from '@/pages/auth/sign-in'
import { SignUp } from '@/pages/auth/sign-up'
import { Decks } from '@/pages/decks/decks'

const publicRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: '/login',
  },
  { element: <SignIn />, path: '/sign-in' },
  { element: <SignUp />, path: '/sign-up' },
  { element: <PageNotFound />, path: '/*' },
  { element: <ForgotPassword />, path: '/forgot-password' },
]

const privateRoutes: RouteObject[] = [
  {
    element: <div>hello</div>,
    path: '/',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/sign-in'} />
}
