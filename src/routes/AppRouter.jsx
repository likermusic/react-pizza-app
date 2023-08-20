import { routes } from './routes'
import { useRoutes } from 'react-router-dom'

export const AppRouter = () => {
  return useRoutes(routes)
}
