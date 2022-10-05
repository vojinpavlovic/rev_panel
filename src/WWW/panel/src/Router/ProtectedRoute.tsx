import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({user, redirectPath = '/auth', children}: any) => {
    if (!user) {
        return <Navigate to={redirectPath} replace/>
    }

    return children ? children : <Outlet/>
}

export default ProtectedRoute