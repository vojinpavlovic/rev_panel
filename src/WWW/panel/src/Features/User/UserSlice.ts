import { createSlice } from '@reduxjs/toolkit';


interface UserState {
    user: any | null,
    loading: boolean
}

const initialState: UserState = {
    user: null,
    loading: true
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        get(state) {

        },
        reset(state) {
            state.user = null
        }
    }
})

export const { get, reset } = userSlice.actions;
export default userSlice.reducer;