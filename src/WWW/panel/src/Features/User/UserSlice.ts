import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserState } from '../../Types/UserState';
import fetchAPI from '../../Helpers/fetchAPI';

const getUser = createAsyncThunk('users/fetchById', async () =>  await fetchAPI({endpoint: ""}))

const initialState: UserState = {
    user: null,
    loading: true
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // On Fetching
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
        })

        // On Success
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload || null;
            state.loading = false;
        })

        // On Failure
        builder.addCase(getUser.rejected, (state) => {
            state.user = null;
            state.loading = false;
        })
    }
})

export { getUser };

export default userSlice.reducer;