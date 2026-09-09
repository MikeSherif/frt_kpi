import { QueryProvider } from './providers/QueryProvider'
import { RouterProvider } from './providers/RouterProvider'
import './styles/global.scss'

export function App() {
  return (
    <QueryProvider>
      <RouterProvider />
    </QueryProvider>
  )
}
