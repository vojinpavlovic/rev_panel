import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loading from '../Components/Loading';
import useUser from '../Hooks/useUser';
import Auth from '../Pages/Auth';
import Dashboard from '../Pages/Dashboard';
import NoCharacter from '../Pages/NoCharacter';
import { UserState } from '../Types/UserState';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
    const { user, loading, loggedIn }: UserState = useUser()

    if (loading) return <Loading/>

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoute user={user} loggedIn={loggedIn}/>}>
                    <Route path="/panel" element={<Dashboard/>}/>
                    <Route path="/karakter-ne-postoji" element={<NoCharacter/>}/>
                </Route> 
                <Route element={<AuthRoute loggedIn={loggedIn}/>}>
                    <Route path="/prijava" element={<Auth/>}/>
                </Route>
                <Route path="*" element={user ? <Dashboard/> : <Auth/>}/>           
            </Routes>
        </BrowserRouter>
    );
}

export default Router;