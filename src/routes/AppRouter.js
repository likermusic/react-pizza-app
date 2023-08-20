import React from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes.js'

function AppRouter() {
  return useRoutes(routes)
}

export default AppRouter