import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loading from '../Components/Loading';
import useUser from '../Hooks/useUser';
import Auth from '../Pages/Auth';
import Dashboard from '../Pages/Dashboard';
import { UserState } from '../Types/UserState';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
    const { user, loading }: UserState = useUser()

    if (loading) return <Loading/>

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoute user={user}/>}>
                    <Route path="/panel" element={<Dashboard/>}/>
                </Route> 
                <Route element={<AuthRoute user={user}/>}>
                    <Route path="/prijava" element={<Auth/>}/>
                </Route>
                <Route path="*" element={user ? <Dashboard/> : <Auth/>}/>           
            </Routes>
        </BrowserRouter>
    );
}

export default Router;