import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useUser from '../Hooks/useUser';
import Dashboard from '../Pages/Dashboard';
import { UserState } from '../Types/UserState';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
    const { user, loading }: UserState = useUser()

    if (loading) return <h1>Ucitavanje...</h1>

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoute user={user}/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Route>                
            </Routes>
        </BrowserRouter>
    );
}

export default Router;