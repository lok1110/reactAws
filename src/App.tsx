import * as React from "react"

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Login from "./pages/Login"
import Profile from './pages/Profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="singUp" element={<Login />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
)

export const App = () => (
  <RouterProvider router={router} />
)

