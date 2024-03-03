import { AuthContextProvider } from './context/AuthContext'
import MyRoutes from './routers/routes'

export default function App() {
  return (
    <AuthContextProvider>
      <MyRoutes />
    </AuthContextProvider>
  )
}