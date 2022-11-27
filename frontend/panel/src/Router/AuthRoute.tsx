import { Navigate, Outlet } from 'react-router-dom'

const AuthRoute = ({loggedIn, redirectPath = '/panel', children}: any) => {
    if (loggedIn) {
        return <Navigate to={redirectPath} replace/>
    }

    return children ? children : <Outlet/>
}

export default AuthRoute