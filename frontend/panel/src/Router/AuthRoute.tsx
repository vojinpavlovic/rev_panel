import { Navigate, Outlet } from 'react-router-dom'

const AuthRoute = ({user, redirectPath = '/panel', children}: any) => {
    if (user) {
        return <Navigate to={redirectPath} replace/>
    }

    return children ? children : <Outlet/>
}

export default AuthRoute