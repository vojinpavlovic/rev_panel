import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loading from '../Components/Loading';
import useUser from '../Hooks/useUser';
import Dashboard from '../Pages/Dashboard';
import { UserState } from '../Types/UserState';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
    const { user, loading }: UserState = useUser()

    if (loading) return <Loading/>

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoute user={user}/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Route> 
                <Route path="/loading" element={<Loading/>}/>              
            </Routes>
        </BrowserRouter>
    );
}

export default Router;