import { Routes, Route, BrowserRouter } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'
import LoginPage from '../pages/LoginPage'

export default function MyRoutes() {

    return (
        
            <Routes>
                <Route path='/' element={<DashboardPage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
       
    )
}