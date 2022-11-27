import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../App/Store";

import { getUser } from "../Features/User/UserSlice";
import { UserState } from "../Types/UserState";


const useUser = () => {
    const { user, loading, steam, loggedIn } = useSelector((state: UserState) => state.user)

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    return { user, loading, steam, loggedIn }
}

export default useUser;