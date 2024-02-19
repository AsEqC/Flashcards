import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import Decks from '@/components/auth/decks/decks'

const publicRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: '/login',
  },
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

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
