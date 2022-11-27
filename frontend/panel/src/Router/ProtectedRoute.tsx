import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoute = ({user, loggedIn, redirectPath = '/prijava', children}: any) => {
    const location = useLocation();

    if (!loggedIn) {
        return <Navigate to={redirectPath} replace/>
    }

    if (!user && location.pathname != "/karakter-ne-postoji" && loggedIn) {
        return <Navigate to={"/karakter-ne-postoji"} replace/>
    }
 
    if (user && location.pathname == "/karakter-ne-postoji") {
        return <Navigate to={"/panel"} replace/>
    }

    return children ? children : <Outlet/>
}

export default ProtectedRoute