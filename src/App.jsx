import React from 'react'
import { Router, RouterProvider } from 'react-router'
import { router } from './app.routes.jsx'
import { AuthProvider } from './feature/auth/auth.context.jsx'

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
