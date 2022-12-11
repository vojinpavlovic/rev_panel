import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserState } from '../../Types/UserState';
import fetchAPI from '../../Helpers/fetchAPI';

const getUser = createAsyncThunk('users/fetchById', async () =>  await fetchAPI({endpoint: "api/user", credentials: true}))

const initialState: UserState = {
    user: null,
    steam: null,
    loading: true,
    loggedIn: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        deleteUser: (state, action) => {
            state.user = null;
            state.loggedIn = false;
            state.steam = null;
            state.loading = true
        }
    },
    extraReducers: (builder) => {
        // On Fetching
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
        })

        // On Success
        builder.addCase(getUser.fulfilled, (state, action) => {
            if (action.payload.data) {
                state.user = action.payload.data.user || null;
                state.steam = action.payload.data.steam || null;
            }
        
            if (action.payload.status) {
                state.loggedIn = true
            }
        
            state.loading = false;
        })

        // On Failure
        builder.addCase(getUser.rejected, (state) => {
            state.user = null;
            state.loading = false;
            state.loggedIn = false;
        })
    }
})

export { getUser };

export default userSlice.reducer;